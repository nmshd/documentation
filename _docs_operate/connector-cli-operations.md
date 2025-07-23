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

## Operations

The commands provided by the Connector CLI are listed in the following.

### Start Command

The `start` command can be used to start the Connector.

### Identity

To obtain information about the underlying Identity of the Connector, the `identity` command group of its CLI can be utilized.

#### Status Command

The `status` command can be used to display the `address` of the underlying [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) of the Connector.
If the Identity deletion has been [initialized](#initialization-command) but the end of the grace period has not yet been reached, the status of the Identity deletion process and the end of the grace period are displayed additionally.

### Identity Deletion

To delete the underlying Identity of the Connector, the `identityDeletion` command group of its CLI can be utilized.

#### Initialization Command

The `init` command can be used to initialize the Identity deletion of the underlying Identity of the Connector.
If the Identity deletion is initialized successfully, a log entry will indicate that the Identity deletion process has started.
Consequently, the Identity will be deleted after the grace period ends unless the Identity deletion process is [cancelled](#cancellation-command) by the Identity by then.
Checking the [status](#status-command) of the Identity displays the end of the grace period.
The grace period is usually two weeks.

#### Cancellation Command

The `cancel` command can be used to cancel the Identity deletion process if it has already been [initialized](#initialization-command) but the end of the grace period has not yet been reached.
Checking the [status](#status-command) of the Identity displays the end of the grace period.
