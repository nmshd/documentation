---
title: "Connector Installation"
permalink: /integrate/connector-installation
---

# Prerequisites

## MongoDB

The Connector requires a MongoDB database as its data storage. MongoDB is a document-oriented database. For compatibility and security reasons, the most up-to-date version of MongoDB should be used.
For more information, please see <https://www.mongodb.com>.

## Docker Runtime

The Connector requires a Docker Runtime: Docker is a virtualization technology which introduces highly portable software containers. The Connector is shipped and updated as such a Docker container - the Docker Runtime is the runtime environment which can execute the Docker containers. For compatibility and security reasons, the most up-to-date version of the Docker Runtime should be used.
For more information, please see <https://www.docker.com>.

Visit [the official docker docs](https://docs.docker.com/get-docker/) for installation guides.

## Docker Compose

Make sure that you have installed docker-compose. Visit [the official installation guide](https://docs.docker.com/compose/install/) for more information.

## Hardware Requirements

No special hardware requirements have been identified so far and as always, hardware requirements strongly correlate with the envisoned usage scenario.

A good starting point for hosting the Docker image of the Connector would be the following:

-   1 CPU
-   512MB RAM
-   1GB HDD

Depending on the usage scenario, higher hardware requirements might be necessary.

## Internet Connectivity

A reliable and fast internet connection is mandatory for running the Connector. However, the Connector is only communicating with the Backbone so the corresponding domain (e.g. `https://prod.enmeshed.eu`) can be whitelisted and the associated certificate can be additionally pinned.

## List docker image tags

Read more about listing available docker image tags [here]({{ site.baseurl }}{% link _docs_explore/52-connector.md %}#connector-docker-image).

# Installation

## Option 1: docker compose with MongoDB

Go through the following steps to start the Connector:

1. place the file [examples/docker-compose-with-mongodb.yml](https://raw.githubusercontent.com/nmshd/nmshd.github.io/main/_docs_integrate/examples/docker-compose-with-mongodb.yml) as `docker-compose.yml` in a folder of your choice
2. create a config file that can be mounted inside the Connector. Fill the config file using the [configuration docs]({{ site.baseurl }}{% link _docs_integrate/11-connector-configuration.md %}) and the [example config file](https://raw.githubusercontent.com/nmshd/nmshd.github.io/main/_docs_integrate/examples/example.config.json). The connection string is `mongodb://user:pass@mongodb:27017/?authSource=admin&readPreference=primary&ssl=false`.
3. replace the marked \<fields\> in the compose file with your values
4. (optional) follow the steps under [log file mounting](#log-file-mounting) if you want to persist and access the log files on the host system
5. execute `docker compose up -d` in the shell

## Option 2: docker compose with existing MongoDB

Visit the official [MongoDB website](https://www.mongodb.com/) for installation without docker or cloud usage or the [docker hub page](https://hub.docker.com/_/mongo) for information about the installation with docker.

Go through the following steps to start the Connector:

1. make your existing MongoDB available for the connector
2. place the file [examples/docker-compose-with-existing-mongodb.yml](https://raw.githubusercontent.com/nmshd/nmshd.github.io/main/_docs_integrate/examples/docker-compose-with-existing-mongodb.yml) as `docker-compose.yml` in a folder of your choice
3. create a config file that can be mounted inside the Connector. Fill the config file using the [configuration docs]({{ site.baseurl }}{% link _docs_integrate/11-connector-configuration.md %}) and the [example config file](https://raw.githubusercontent.com/nmshd/nmshd.github.io/main/_docs_integrate/examples/example.config.json)
4. replace the marked \<fields\> in the compose file with your values
5. (optional) follow the steps under [log file mounting](#log-file-mounting) if you want to persist and access the log files on the host system
6. execute `docker compose up -d` in the shell

# Validate the Connector installation

You can validate the Connector installation by checking its health route. Simply access `<connector-baseurl>/health` in your browser or using curl.

If the swagger documentation is enabled you can also access it under `<connector-baseurl>/docs`

# Log file mounting

1. Uncomment the volume mapping in the created `docker-compose.yml` file
2. Create a folder where the log files shall be placed
3. replace `</folder/of/your/choice>` with the path to your created folder
