---
permalink: /use-case-consumption-check-if-incoming-request-can-be-rejected
published: true
title: "Check if incoming Request can be rejected"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR9
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: canReject
  - description: Checks if the 'Request' with the given 'id' can be rejected.
  - feature category: Normalized requests/responses to and from users
  - tech category: Requests
  - status: DONE
  - comments:
  - actor: Identity
  - component: Runtime
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link: consumption/check-if-incoming-request-can-be-rejected
require:
required_by:
api_route_regex: ^put /api/v2/Requests/Incoming/{id}/canReject$
---

{% include use-cases/use-case-consumption-check-if-incoming-request-can-be-rejected.md %}
