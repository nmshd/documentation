---
permalink: /use-case-consumption-reject-incoming-request
published: true
title: "Reject incoming Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR10
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: reject
  - description: Rejects the incoming 'Request' with the given 'id'.
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
  - api_route_regex: put /api/v2/Requests/Incoming/{id}/Reject
  - published: default
  - link: consumption/reject-incoming-request
require:
required_by:
api_route_regex: ^put /api/v2/Requests/Incoming/{id}/Reject$
---

{% include use-cases/use-case-consumption-reject-incoming-request.md %}
