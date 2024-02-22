---
permalink: /use-case-transport-get-message-by-messageid
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
  - link: transport/get-message-by-messageid
  - redirect_from:
require:
required_by:
api_route_regex: ^GET /api/v2/Messages/{id}$
---

{% include use-cases/use-case-transport-get-message-by-messageid.md %}
