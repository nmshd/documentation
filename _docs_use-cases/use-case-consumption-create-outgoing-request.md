---
permalink: /use-case-consumption-create-outgoing-request
published: true
title: "Create outgoing Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR2
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: create
  - description: Creates a new outgoing 'Request'.
  - feature category: Normalized requests/responses to and from users
  - tech category: Requests
  - status: DONE
  - comments:
  - actor: Identity
  - component: Runtime
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link: consumption/create-outgoing-request
  - connector_route: "^post /api/v2/Requests/Outgoing$"
require:
  - /use-case-consumption-check-if-outgoing-request-can-be-created
required_by:
  - integrate/integration-example
  - integrate/requests-over-messages
---

{% include use-cases/use-case-consumption-create-outgoing-request.md %}
