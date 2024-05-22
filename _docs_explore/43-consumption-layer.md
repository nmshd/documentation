---
title: "Consumption Layer"
permalink: /explore/layers/consumption
toc: true
---

The consumption layer contains processes, logic and data structures either for personal or organizational identities. It sits on top of the transport layer and exposes its functionality to either the user experience or the integration layer.

**Components**

- App
- Connector

# Tasks

## Attribute Handling

The consumption layer handles the central Attribute store of an identity. With it, requests and RelationshipTemplates can be automatically filled based on the already stored Attributes.

## Request Handling

Request received by other identities are processed within the consumption layer. The consumption layer keeps track of which requests have been received, are still unprocessed, or have been processed with which outcome. For this, it also contains the logic of how requests are processed.

It is planned to have automation rules for processing requests, so that users of the App could flag which requests can be automatically accepted and for which requests the user should give the consent to.

## Data Log

Data received or sent via Messages is tracked by the consumption layer. Thus it is possible to see which contact received which data (usually Attributes) of the identity and what data was sent to the identity by its contacts.

This is required to synchronize changes of Attributes of an identity to all contacts who have receive the Attribute in the past, e.g. send a Message to contacts who already have my private address that the address needs to be change to a new one beginning of next month.
