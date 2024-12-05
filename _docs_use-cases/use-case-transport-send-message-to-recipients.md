---
# Start automatic generation
permalink: use-case-transport-send-message-to-recipients
published: true
title: "Send Message to Recipient(s)"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RM1
  - component: Runtime
  - layer: Transport
  - facade: MessagesFacade
  - function: sendMessage
  - description:
  - feature category: Bidirectional (un-)structured communication
  - tech category: Messages
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: POST /api/v2/Messages
  - published: default
  - link: use-case-transport-send-message-to-recipients
require:
required_by:
api_route_regex: ^POST /api/v2/Messages$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case sends a [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the given recipient(s).

## Parameters

- `recipients` is a list of the enmeshed addresses which should receive the Message.
- `content` the structured content of the Message. Usually a [Mail]({% link _docs_integrate/data-model-overview.md %}#mail) when communicating with a user.
- `attachments` is a list of [File]({% link _docs_integrate/data-model-overview.md %}#file) ids which should be attached to the Message.

## On Success

- Sends the Message to all recipients
- Returns the sent Message

## On Failure

- One of the `recipients` is not an active Relationship
- The `attachments` are not valid File ids.
- The `content` is malformed.
