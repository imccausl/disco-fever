#! /bin/bash

CONTAINER_ID = "$(docker container ls  | grep 'disco_fever:v0.1' | awk '{print $1})"

docker build . -f config/django/Dockerfile -t disco_fever:v0.1

if [ -z "$CONTAINER_ID" ]; then
    docker stop $CONTAINER_ID
fi

docker run -d -p 8000:8000 disco_fever:v0.1 --name production_container
