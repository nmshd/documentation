---
# Start automatic generation
permalink: use-case-transport-get-message-by-messageid
published: true
title: "Get Message by MessageId"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RM3
  - component: Runtime
  - layer: Transport
  - facade: MessagesFacade
  - function: getMessage
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
  - api_route_regex: GET /api/v2/Messages/{id}
  - published: default
  - link: use-case-transport-get-message-by-messageid
require:
required_by:
api_route_regex: ^GET /api/v2/Messages/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case retrieves a [Message]({% link _docs_integrate/data-model-overview.md %}#message)
by its `id`.

## Parameters

- `id` of the Message.

## On Success

- Returns the Message that corresponds to the `id`.

## On Failure

- `id` does not resolve to a Message.
