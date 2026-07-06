#!/bin/sh
set -e

# Substitute environment variables into the config template
# This replaces ${VAR} placeholders in config.yaml with actual values
envsubst < /root/config.yaml > /root/config.rendered.yaml
mv /root/config.rendered.yaml /root/config.yaml

# Run database migrations then start the server
./embedg-server migrate postgres up
./embedg-server server
