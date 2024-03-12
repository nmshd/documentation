---
# Start automatic generation
permalink: use-case-consumption-check-if-incoming-request-can-be-rejected
published: true
title: "Check if incoming Request can be rejected"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR9
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: canReject
  - description: Checks if the `Request` with the given `id` can be rejected.
  - feature category: Normalized requests/responses to and from users
  - tech category: Requests
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: put /api/v2/Requests/Incoming/{id}/canReject
  - published: default
  - link: use-case-consumption-check-if-incoming-request-can-be-rejected
require:
required_by:
# Start automatic generation
api_route_regex: ^put /api/v2/Requests/Incoming/{id}/canReject$
---

{% include use-cases/use-case-consumption-check-if-incoming-request-can-be-rejected.md %}
