# Builder
FROM node:lts AS builder
LABEL org.opencontainers.image.url="https://github.com/Prodjekt-co/vector-admin"
LABEL org.opencontainers.image.description="Vector Admin UI"
LABEL org.opencontainers.image.licenses="Apache-2.0"
# Base path for synapse admin
ARG BASE_PATH=./

# Add a non-root user
## RUN groupadd -r appuser && useradd -r -g appuser -s /sbin/nologin appuser

# Set working directory ownership
WORKDIR /src
## RUN chown -R appuser:appuser /src

# Switch to non-root user
## USER appuser

# Copy .yarn directory to the working directory (must be on a separate line!)
# Use https://docs.docker.com/engine/reference/builder/#copy---parents when available
COPY .yarn .yarn
COPY package.json .yarnrc.yml yarn.lock ./

# Disable telemetry and install packages
RUN yarn config set enableTelemetry 0 && yarn install --immutable --network-timeout=300000

COPY . /src
RUN yarn build --base=$BASE_PATH

# App
FROM nginx:stable-alpine

COPY --from=builder /src/dist /app

RUN rm -rf /usr/share/nginx/html \
 && ln -s /app /usr/share/nginx/html
