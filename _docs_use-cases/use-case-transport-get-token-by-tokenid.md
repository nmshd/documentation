---
permalink: /use-case-transport-get-token-by-tokenid
published: true
title: "Get Token by TokenID"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RK3
  - component: Runtime
  - layer: Transport
  - facade: TokensFacade
  - function: getToken
  - description:
  - feature category: Share structured information over side-channel
  - tech category: Tokens
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
  - api_route_regex: GET /api/v2/Tokens/{id}
  - published: default
  - link: transport/get-token-by-tokenid
require:
required_by:
api_route_regex: ^GET /api/v2/Tokens/{id}$
---

{% include use-cases/use-case-transport-get-token-by-tokenid.md %}
