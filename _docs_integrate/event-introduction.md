---
# Start automatic generation
permalink: integrate/event-introduction
published: true
title: "Event introduction"
type: scenario
toc: true
properties:
  - id: SC096
  - category: Getting Started
  - description:
  - customer:
  - component: integrate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: DONE
  - published: true
  - link: event-introduction
require:
required_by:
# End automatic generation
---

Connecting an external system with the [enmeshed Connector]({% link _docs_explore/01-how_does_enmeshed_work.md %}#enmeshed-connector), the main communication is performed by addressing the Connector's REST API.
This way, processes can be initiated by the organization's backend service or data can be requested from the Connector.
In addition, events offer the possibility for the Connector to actively give feedback to the external system.
Thus, a bidirectional communication is established.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/9940dd19-73bc-4afc-acf2-72d5d47747ed" id="OvvNQKWFWkgc"></iframe></div>

## What is an event?

Events are predefined datastructures used within enmeshed to communicate a significant change of an entity's state.
They are heavily used internally by the enmeshed Runtime, but can also be propagated by the Connector to external systems.
Thus, these systems don't have to perform long polling, in order to receive changes, but are actively informed once they occur.
This is not only more efficient, also, its is safer, since it keeps you updated about all changes of interest.
Working with events allows to determine routines, that are executed whenever a specific event arises, called handlers.
An overview of the [Connector events]({% link _docs_integrate/connector-events.md %}) that may occur is given in the corresponding section.

## Motivation for using events

As an exemplary process of how working with events can benefit your mode of operation, we look at the procedure of exchanging `Messages`.

### Procedure without events

Firstly, we consider the case without using events.
To send a `Message`, the external system posts the corresponding request to the REST API of the Connector.
Then, it regularly fetches its state, until a response is received.
This might take many cycles, depending on the refresh rate, and implies a delay between the time the response is received by the Connector and the external system.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/e4d12a4d-faf5-4133-9ea2-c69a716b1975" id="8vvNLAyZJbL9"></iframe></div>

### Procedure with events

In contrast, if you work with events, as soon as the Connector successfully sent your `Message`, a `transport.messageSent` event will be transmitted to your system as a confirmation.
Awaiting the response, no long polling is necessary, since the Connector actively sends a `transport.messageReceived` event, containing the answer, once it is received.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c1e9f677-1e81-4787-9718-4f94f6a16727" id="3wvNo3dv6Zqo"></iframe></div>

## Modules to receive events

In order to receive events, the Connector needs to be synchronized with the Backbone.
This can be automated using the [Sync Module]({% link _docs_operate/modules.md %}#sync).
Fetching changes from the Backbone regularly, it forwards the received events to [Modules]({% link _docs_operate/modules.md %}) that are configured to process them, e.g. [Message Broker Publisher]({% link _docs_operate/modules.md %}#messagebrokerpublisher) or [Webhooks]({% link _docs_operate/modules.md %}#webhooks).
Working with message brokers has the advantage that events are conserved, even in case of a downtime of the recipient.
Thus, we recommend to work with the message broker module instead of Webhooks.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/d077ee93-9025-43d6-833e-5ee2f1d966d5" id="bnvNknrH-TUP"></iframe></div>
