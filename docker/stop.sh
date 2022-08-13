#!/bin/bash

NETWORK_NAME=room-music-player.pl

remove_network() {
  if docker network ls --format "{{.Name}}" | grep -q ^$NETWORK_NAME$; then
    docker network remove $NETWORK_NAME >/dev/null
  fi
}

stop_container() {
  docker-compose down -v
}

print_success_message() {
  echo "The project was successfully started."
}

stop_container;
remove_network;
print_success_message;
