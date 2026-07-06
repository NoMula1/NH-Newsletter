#!/bin/sh
set -e

# Set defaults for optional variables
export PUBLIC_URL="${PUBLIC_URL:-http://localhost:8080}"
export S3_ENDPOINT="${S3_ENDPOINT:-localhost:9000}"
export S3_ACCESS_KEY_ID="${S3_ACCESS_KEY_ID:-embedg}"
export S3_SECRET_ACCESS_KEY="${S3_SECRET_ACCESS_KEY:-1234567890}"

# Generate config.yaml from template using envsubst
envsubst < /root/config.yaml.template > /root/config.yaml

echo "Generated config.yaml"

# Run database migrations
./embedg-server --config /root/config.yaml migrate postgres up

# Start the server
exec ./embedg-server --config /root/config.yaml server
