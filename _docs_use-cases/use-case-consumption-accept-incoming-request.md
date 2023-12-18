---
permalink: /use-case-consumption-accept-incoming-request
published: true
title: "Accept incoming Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR8
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: accept
  - description: Accepts the incoming 'Request' with the given 'id'.
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
  - api_route_regex: PUT /api/v2/Requests/Incoming/{id}/Accept
  - published: default
  - link: consumption/accept-incoming-request
  - redirect_from:
require:
required_by:
api_route_regex: ^PUT /api/v2/Requests/Incoming/{id}/Accept$
---

{% include use-cases/use-case-consumption-accept-incoming-request.md %}
