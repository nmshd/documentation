---
title: "Connector Installation"
permalink: /integrate/connector-installation
---

# Prerequisites

## MongoDB

The Connector requires a MongoDB database as its data storage. MongoDB is a document-oriented database. For compatibility and security reasons, the most up-to-date version of MongoDB should be used.
For more information, please see https://www.mongodb.com

## Docker Runtime

The Connector requires a Docker Runtime: Docker is a virtualization technology which introduces highly portable software containers. The connector is shipped and updated as such a Docker container - the Docker Runtime is the runtime environment which can execute the Docker containers. For compatibility and security reasons, the most up-to-date version of the Docker Runtime should be used.
For more information, please see https://www.docker.com

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

A reliable and fast internet connection is mandatory for running the Connector. However, the Connector is only communicating with the Backbone so the corresponding domain (e.g. https://prod.enmeshed.eu) can be whitelisted and the associated certificate can be additionally pinned.

## Organization's Identity

As the connector acts as trusted communication instance for an organization, a signature keypair for the organization is mandatory and needs to be generated and verified upfront. Please refer to the Identity Guide for creating such an identity.

## Login to the Docker Registry

Run `docker login enmeshed.docker.io` and enter the login information you received from the support.

# Installation

## Option 1: docker-compose with MongoDB

Go through the following steps to start the connector.

1. place the file [examples/docker-compose.yml](examples/docker-compose.yml) in a folder of your choice
2. replace the marked \<fields\> in the file with your values
3. (optional) follow the steps under [log file mounting](##-Log-file-mounting) if you want to persist and access the log files on the host system
4. execute `docker-compose up -d` in the shell

## Option 2: docker-compose with existing MongoDB

Visit the official [MongoDB website](https://www.mongodb.com/) for installation without docker or cloud usage or the [docker hub page](https://hub.docker.com/_/mongo) for information about the installation with docker.

Go through the following steps to start the connector.

1. make your existing MongoDB available for the connector
2. place the file [examples/docker-compose-without-mongodb.yml](examples/docker-compose-without-mongodb.yml) as `docker-compose.yml` in a folder of your choice
3. replace the marked \<fields\> in the file with your values
4. (optional) follow the steps under [log file mounting](##-Log-file-mounting) if you want to persist and access the log files on the host system
5. execute `docker-compose up -d` in the shell

# Log file mounting

1. Uncomment the volume mapping in the created `docker-compose.yml` file
2. Create a folder where the log files shall be placed
3. replace `</folder/of/your/choice>` with the path to your created folder
