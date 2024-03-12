---
# Start automatic generation
permalink: use-case-consumption-get-outgoing-request
published: true
title: "Get outgoing Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR4
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: getRequest
  - description:
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
  - api_route_regex: get /api/v2/Requests/Outgoing/{id}
  - published: default
  - link: use-case-consumption-get-outgoing-request
require:
required_by:
# Start automatic generation
api_route_regex: ^get /api/v2/Requests/Outgoing/{id}$
---

{% include use-cases/use-case-consumption-get-outgoing-request.md %}
