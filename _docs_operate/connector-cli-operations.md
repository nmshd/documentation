---
# Start automatic generation
permalink: operate/connector-cli-operations
published: true
title: "Connector CLI Operations"
type: scenario
toc: true
properties:
  - id: SC124
  - category: Connector Operations
  - description:
  - customer:
  - component: operate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: DONE
  - published: true
  - link: connector-cli-operations
require:
required_by:
# End automatic generation
---

The following guide provides step-by-step instructions for [configuring](#setup) the command-line interface (CLI) of the Connector and performing essential [operations](#operations) using it.

## Setup

Different Connector setups may require different approaches to executing the available commands provided by the Connector CLI.

### Setup with Docker Compose

If the [Connector is set up with Docker Compose]({% link _docs_operate/setup-with-docker-compose.md %}) using `docker compose up -d`, the [start command](#start-command) of the Connector CLI is executed by default.
To execute another command instead, it must be specified explicitly in the `docker-compose.yml` as a `command` of the `connector` service.
If `docker compose up -d` is then executed, the Connector is not started, but the operation associated with the command is performed.
For example, the [status](#identity-status-command) of the underlying Identity of the Connector is displayed.

## Operations

The commands provided by the Connector CLI are listed in the following.

### Start Command

The `start` command can be used to start the Connector.
It is executed by default, unless another command is explicitly specified during [setup](#setup).
Once the Connector is started, it is [accessible]({% link _docs_integrate/access-the-connector.md %}) for use.

### Identity Status Command

The `identity status` command can be used to obtain information about the underlying Identity of the Connector.
It displays the `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity).
If the Identity deletion has been [initialized](#identity-deletion-initialization-command) but the end of the grace period has not yet been reached, the status of the Identity deletion process and the end of the grace period are displayed additionally.

### Identity Deletion Initialization Command

The `identityDeletion init` command can be used to initialize the Identity deletion of the underlying Identity of the Connector.
If the Identity deletion was initialized successfully, a log entry will indicate that the Identity deletion process has started.
Consequently, the Identity will be deleted after the grace period ends unless the Identity deletion process is [cancelled](#identity-deletion-cancellation-command) by the Identity by then.
Checking the [status](#identity-status-command) of the Identity displays the end of the grace period.
The grace period is usually two weeks.

### Identity Deletion Cancellation Command

The `identityDeletion cancel` command can be used to cancel the Identity deletion process if it has already been [initialized](#identity-deletion-initialization-command) but the end of the grace period has not yet been reached.
Checking the [status](#identity-status-command) of the Identity displays the end of the grace period.
A log entry will confirm if the Identity deletion process was cancelled successfully.
