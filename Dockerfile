FROM golang:latest AS builder

WORKDIR /root/
COPY . .

# Install NodeJS
RUN apt-get update && \
    apt-get install -y ca-certificates curl gnupg build-essential

RUN mkdir -p /etc/apt/keyrings

RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
    | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" \
    | tee /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && apt-get install -y nodejs

RUN corepack enable
RUN corepack prepare yarn@1.22.22 --activate

# Build frontend
RUN cd embedg-site && yarn install && yarn build

RUN cd /root/embedg-app && yarn install && yarn build

# Build backend
RUN cd /root/embedg-server && go build --tags "embedapp embedsite"

# ---------------- Runtime ----------------

FROM debian:stable-slim

WORKDIR /root/

RUN apt-get update && \
    apt-get install -y ca-certificates && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder /root/embedg-server/embedg-server .
COPY --from=builder /root/config.yaml ./config.yaml

EXPOSE 8080

CMD ["sh","-c","./embedg-server migrate postgres up && ./embedg-server server --config /root/config.yaml"]
