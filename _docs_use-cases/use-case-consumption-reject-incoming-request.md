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
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: reject
  - description: Rejects the incoming 'Request' with the given 'id'.
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
  - link: consumption/reject-incoming-request
require:
required_by:
---

{% include use-cases/use-case-consumption-reject-incoming-request.md %}
