---
permalink: /use-case-consumption-check-if-outgoing-request-can-be-created
published: true
title: "Check if outgoing Request can be created"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR1
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: canCreate
  - description: Validates the given 'OutgoingRequest' before creating it
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
  - link: consumption/check-if-outgoing-request-can-be-created
require:
required_by:
  - /use-case-consumption-create-outgoing-request
api_route_regex: ^post /api/v2/Requests/Outgoing/Validate$
---

{% include use-cases/use-case-consumption-check-if-outgoing-request-can-be-created.md %}
