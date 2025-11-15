package store

import (
	"github.com/disgoorg/disgo/bot"
	"github.com/merlinfuchs/embed-generator/embedg-service/common"
)

type AppContext interface {
	ApplicationID() common.ID
	AppInviteURL() string
}

type EventDispatcher interface {
	DispatchEvent(event bot.Event)
}
