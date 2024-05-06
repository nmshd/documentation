---
# Start automatic generation
permalink: integrate/exchange-messages
redirect_from:
  - /integrate/connector-flows-messages
  - /integrate/sending-messages
published: true
title: "Exchange Messages"
type: scenario
toc: true
properties:
  - id: SC058
  - category: Relationships between Identities
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: OLD
  - published: true
  - link: exchange-messages
require:
  - integrate/delete-identity-from-enmeshed
required_by:
# End automatic generation
---

<!-- A general description of the requirement can be given here. -->

The Connector can send and receive messages with attachments using REST requests and file IDs, which are first uploaded and encrypted on the Platform. Messages can be queried and downloaded, and the Connector pulls for new messages periodically.

<!-- This include inserts the table with the metadata  -->

{% include properties_list.html %}

In order to send messages to recipients, a REST request can be sent with the given `recipients` and message `content`. Different message content structures are possible and defined in the chapter Data Structures. Additionally, an array of file ids can be added for property `attachments` in order to send attachments.

![Send Message Sequence Diagram]({{ '/assets/diagrams/integrate/Connector_SendMessage.png' | relative_url }} "Send Message")

## Upload Files

In order to submit attachments/files via message, they have to be first uploaded to the Connector. The files are then encrypted and uploaded to the Platform, which results in a FileId for every file.
These FileIds can then be used as attachments to send messages with attachments.

## Get Messages

Messages can be directly queried from the Connector.

![Get Message Sequence Diagram]({{ '/assets/diagrams/integrate/Connector_GetMessage.png' | relative_url }} "Get Message")

## Download Attachments of Messages

The metadata of attachments can be found within the message, the actual files/binaries must be downloaded separately.

## Receive Messages

The Connector pulls occasionally for new messages from the Platform and temporarily stores them in the database. They can then be fetched by the corresponding business systems by the REST API (pull) or by the defined HTTP endpoint (push).
