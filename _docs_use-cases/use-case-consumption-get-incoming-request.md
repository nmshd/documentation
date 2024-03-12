---
# Start automatic generation
permalink: use-case-consumption-get-incoming-request
published: true
title: "Get incoming Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR2
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: getRequest
  - description: Fetches the incoming `Request` with the given `id`.
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
  - api_route_regex: get /api/v2/Requests/Incoming/{id}
  - published: default
  - link: use-case-consumption-get-incoming-request
require:
required_by:
# Start automatic generation
api_route_regex: ^get /api/v2/Requests/Incoming/{id}$
---

{% include use-cases/use-case-consumption-get-incoming-request.md %}
