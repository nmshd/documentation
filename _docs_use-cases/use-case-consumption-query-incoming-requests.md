---
permalink: /use-case-consumption-query-incoming-requests
published: true
title: "Query incoming Requests"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR1
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: getRequests
  - description: Queries incoming 'Requests'.
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
  - api_route_regex: get /api/v2/Requests/incoming
  - published: default
  - link: consumption/query-incoming-requests
require:
required_by:
api_route_regex: ^get /api/v2/Requests/incoming$
---

{% include use-cases/use-case-consumption-query-incoming-requests.md %}
