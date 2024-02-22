---
permalink: /use-case-consumption-create-outgoing-request
published: true
title: "Create outgoing Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR2
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: create
  - description: Creates a new outgoing 'Request'.
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
  - api_route_regex: post /api/v2/Requests/Outgoing
  - published: default
  - link: consumption/create-outgoing-request
  - redirect_from:
require:
required_by:
api_route_regex: ^post /api/v2/Requests/Outgoing$
---

{% include use-cases/use-case-consumption-create-outgoing-request.md %}
