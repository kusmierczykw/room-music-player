#!/bin/bash

NETWORK_NAME=room-music-player.pl

create_network() {
  if ! docker network ls --format "{{.Name}}" | grep -q ^$NETWORK_NAME$; then
    docker network create $NETWORK_NAME >/dev/null
  fi
}

run_container() {
  docker-compose up -d
  docker-compose exec angular sh
}

print_success_message() {
  echo "The project was successfully started."
}

create_network;
run_container;
print_success_message;
