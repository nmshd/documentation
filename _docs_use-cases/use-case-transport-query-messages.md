---
permalink: /use-case-transport-query-messages
published: true
title: "Query Messages"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RM2
  - component: Runtime
  - layer: Transport
  - facade: MessagesFacade
  - function: getMessages
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
  - api_route_regex: GET /api/v2/Messages
  - published: default
  - link: transport/query-messages
require:
required_by:
api_route_regex: ^GET /api/v2/Messages$
---

{% include use-cases/use-case-transport-query-messages.md %}
