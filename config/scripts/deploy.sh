#! /bin/bash

CONTAINER_ID="$(docker container ls  | grep '0.0.0.0:8000' | awk '{print $1}')"

docker-compose -f config/docker-compose.yml build -d
docker-compose -f config/docker-compose.yml down
docker-compose -f config/docker-compose.yml up -d
