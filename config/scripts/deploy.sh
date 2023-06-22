#! /bin/bash

docker compose -f config/docker-compose.yml build
docker compose -f config/docker-compose.yml down
docker compose -f config/docker-compose.yml up -d
