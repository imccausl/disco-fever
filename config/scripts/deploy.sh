#! /bin/bash

CONTAINER_ID="$(docker container ls  | grep 'disco_fever:v0.1' | awk '{print $1}')"

docker build . -f config/django/Dockerfile -t disco_fever:v0.1


if [ -n "$CONTAINER_ID" ]; then
    echo "container id found, stopping: $CONTAINER_ID"
    docker stop "$CONTAINER_ID"
fi

docker run -d -p 8000:8000 disco_fever:v0.1
