---
# Start automatic generation
permalink: integrate/send-messages-with-attachments
published: false
title: "Send Messages with attachments"
type: scenario
toc: true
properties:
  - id: SC063
  - category: Identities and Relationships
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: OPEN
  - published:
  - link: send-messages-with-attachments
require:
required_by:
# End automatic generation
---

{% include warnings/documentation-is-prerelease %}

The Connector can send and receive Messages with attachments using enmeshed Files, which are first uploaded and encrypted on the Platform. Files send and received with this approach are primarily meant for single-purpose uses, as they cannot be easily shared by the sending/receiving Identity without further ado.

## Upload Files

In order to submit Files via Message, they have to be first uploaded to the Connector. The Files are then encrypted and uploaded to the Platform, which results in a unique FileId for every File. These FileIds can then be used as attachments to send Messages with attachments.

## Download Attachments of Messages

The metadata of attachments can be found within the respective Message, the actual content if the File must be downloaded separately.
