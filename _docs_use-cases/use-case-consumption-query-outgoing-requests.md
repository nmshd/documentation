---
permalink: /use-case-consumption-query-outgoing-requests
published: true
title: "Query outgoing Requests"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR3
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: getRequests
  - description: Queries outgoing 'Requests'.
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
  - api_route_regex: get /api/v2/Requests/Outgoing
  - published: default
  - link: consumption/query-outgoing-requests
require:
required_by:
api_route_regex: ^get /api/v2/Requests/Outgoing$
---

{% include use-cases/use-case-consumption-query-outgoing-requests.md %}
