---
title: "Sending Messages"
permalink: /integrate/connector-flows-messages
---

# Send Messages (with Attachments)

In order to send messages to recipients, a REST request can be sent with the given `recipients` and message `content`. Different message content structures are possible and defined in the chapter Data Structures. Additionally, an array of file ids can be added for property `attachments` in order to send attachments.

![Send Message Sequence Diagram](images/Connector_SendMessage.png "Send Message")

# Upload Files

In order to submit attachments/files via message, they have to be first uploaded to the Connector. The files are then encrypted and uploaded to the Platform, which results in a FileId for every file.
These FileIds can then be used as attachments to send messages with attachments.

# Get Messages

Messages can be directly queried from the Connector.

![Get Message Sequence Diagram](images/Connector_GetMessage.png "Get Message")

# Download Attachments of Messages

The metadata of attachments can be found within the message, the actual files/binaries must be downloaded separately.

# Receive Messages

The Connector pulls occasionally for new messages from the Platform and temporarily stores them in the database. They can then be fetched by the corresponding business systems by the REST API (pull) or by the defined HTTP endpoint (push).
