package server

import (
	"context"
	"log/slog"
	"strings"
	"time"

	"github.com/disgoorg/disgo/bot"
	"github.com/disgoorg/disgo/events"
	"github.com/disgoorg/disgo/rest"
	"github.com/merlinfuchs/embed-generator/embedg-service/actions/handler"
	"github.com/merlinfuchs/embed-generator/embedg-service/store"
	"github.com/rs/zerolog/log"
)

type EventHandler struct {
	rest           rest.Rest
	actionSetStore store.MessageActionSetStore
	actionHandler  *handler.ActionHandler
}

func NewEventHandler(
	rest rest.Rest,
	actionSetStore store.MessageActionSetStore,
	actionHandler *handler.ActionHandler,
) *EventHandler {
	return &EventHandler{
		rest:           rest,
		actionSetStore: actionSetStore,
		actionHandler:  actionHandler,
	}
}

func (g *EventHandler) OnEvent(event bot.Event) {
	switch e := event.(type) {
	case *events.MessageDelete:
		g.onMessageDelete(e)
	case *events.ComponentInteractionCreate:
		g.onInteractionCreate(e)
	}
}

func (g *EventHandler) onMessageDelete(event *events.MessageDelete) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err := g.actionSetStore.DeleteMessageActionSetsForMessage(ctx, event.MessageID)
	if err != nil {
		slog.Error(
			"Failed to delete message action sets",
			slog.String("message_id", event.MessageID.String()),
			slog.Any("error", err),
		)
	}
}

func (g *EventHandler) onInteractionCreate(event *events.ComponentInteractionCreate) {
	isAction := strings.HasPrefix(event.Data.CustomID(), "action:")
	if isAction {
		gi := &handler.GenericInteraction{
			Rest:        g.rest,
			Inner:       event.ComponentInteraction,
			RespondFunc: event.Respond,
		}

		err := g.actionHandler.HandleActionInteraction(g.rest, gi)
		if err != nil {
			log.Error().Err(err).Msg("Failed to handle action interaction")
		}
	}
}
