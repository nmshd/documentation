---
permalink: /use-case-consumption-check-if-incoming-request-can-be-accepted
published: true
title: "Check if incoming Request can be accepted"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR7
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: canAccept
  - description: Checks if the 'Request' with the given 'id' can be accepted.
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
  - api_route_regex: put /api/v2/Requests/Incoming/{id}/CanAccept
  - published: default
  - link: consumption/check-if-incoming-request-can-be-accepted
  - redirect_from:
require:
required_by:
api_route_regex: ^put /api/v2/Requests/Incoming/{id}/CanAccept$
---

{% include use-cases/use-case-consumption-check-if-incoming-request-can-be-accepted.md %}
