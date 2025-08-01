---
# Start automatic generation
permalink: operate/overview-of-connector-operations
redirect_from:
  - /integrate/connector-operations
published: true
title: "Overview of Connector operations"
type: scenario
toc: true
properties:
  - id: SC083
  - category: Connector Operations
  - description:
  - customer:
  - component: operate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: OLD
  - published: true
  - link: overview-of-connector-operations
require:
required_by:
# End automatic generation
---

## Basic Tasks

### Stopping the Connector

### Starting the Connector after a Downtime

Be advised that before starting the Connector after a downtime, you should ensure that the data within the database is on the most up-to-date time. Once the Connector starts its internal synchronization mechanism, it will update the database with the new information from the Backbone and if there are any automatismns set up (e.g. automatically accept Relationships) the Connector updates the database with this new information. Thus, if the database is not on the very last point in time, there would be two inconsistent versions split across two databases.

## Update

## Backup & Recovery

All of the Connector data is stored in a MongoDB compatible database. Therefore we suggest you to use [MongoDB replicas](https://www.mongodb.com/basics/replication) in a productive setup, to avoid having data loss.

Additionally, offline backups of the replicas might make sense. For backup and recovery methods visit the official [MongoDB docs](https://docs.mongodb.com/manual/core/backups/). These backups might come in handy if the data within the database was compromised.

In general, there is no need to backup the Connector itself. However, it makes sense to backup configuration and log files. Additionally, it might speed up the recovery process if a complete system image of the Connector is available.

For a recovery, you should be able to just start the Connector again with the recovered database. For recovering the database itself, please also refer the MongoDB documentation.

If you use FerretDB as your database engine make sure to backup the data of the underlying PostgreSQL database. Read more about this in the [PostgreSQL documentation](https://www.postgresql.org/docs/8.1/backup.html).

## Identity Deletion

Using the [command-line interface of the Connector]({% link _docs_operate/connector-cli-operations.md %}), it is possible to perform operations like [deleting its underlying Identity]({% link _docs_operate/connector-cli-operations.md %}#identity-deletion-initialization-command).

## Proposed System Tasks

### Check Health

The Business Connector exposes a health route. You can check the health with a http request to `<connector-url>/health`.

### Check Available Resources

#### Check CPU Workload

The CPU workload can be checked using tools like [htop](https://htop.dev/) or [ctop](https://ctop.sh/) on the host system.

#### Check Memory Consumption

The Memory Consumption can be checked using tools like [htop](https://htop.dev/) or [ctop](https://ctop.sh/) on the host system.

#### Check Harddisk Quota

The Harddisk Quota can be checked using linux tools like **df**. Please ensure, that sufficient free space is available.

### Check for Connector Updates

New Connector versions are regularly published to the given Docker registry. Depending on your installation method, the Docker image can be automatically updated by the provided Docker registry.

### Check for System and Docker Updates

Please consult the documentation of your operating system about system updates. Additionally, the Docker Runtime should be regularly updated as well.
We recommend to keep your operating system and Docker as up to date as possible.

### Check Error Logs

You can check the log using `docker logs <your-container-name>` or by checking the [mounted log files]({% link _docs_operate/setup-with-docker-compose.md %}#log-file-mounting)

## Proposed Connector Tasks

As some of the operative tasks should be done on a regular basis, please find a proposal for these tasks below.

### Check Access to Key Material

### Check old Material

### Check Connector Systems

- Every Connector instance and host system should be regularly checked for available resources (CPU, RAM, HDD) and system updates.

### Check Third-Party Systems

- Every third party system (e.g. database, event buses, network components) and host system should be regularly checked for available resources (CPU, RAM, HDD) and system updates.
