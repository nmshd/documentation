---
# Start automatic generation
permalink: use-case-consumption-check-if-outgoing-request-can-be-created
published: true
title: "Check if outgoing Request can be created"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR1
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: canCreate
  - description: Validates the given `OutgoingRequest` before creating it
  - feature category: Normalized requests/responses to and from users
  - tech category: Requests
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
  - api_route_regex: post /api/v2/Requests/Outgoing/Validate
  - published: default
  - link: use-case-consumption-check-if-outgoing-request-can-be-created
require:
required_by:
# Start automatic generation
api_route_regex: ^post /api/v2/Requests/Outgoing/Validate$
---

{% include use-cases/use-case-consumption-check-if-outgoing-request-can-be-created.md %}
