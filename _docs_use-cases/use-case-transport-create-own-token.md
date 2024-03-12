---
# Start automatic generation
permalink: use-case-transport-create-own-token
published: true
title: "Create own Token"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RK1
  - component: Runtime
  - layer: Transport
  - facade: TokensFacade
  - function: createOwnToken
  - description:
  - feature category: Normalized requests/responses to and from users
  - tech category: Tokens
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
  - api_route_regex: POST /api/v2/Tokens/Own
  - published: default
  - link: use-case-transport-create-own-token
require:
required_by:
# Start automatic generation
api_route_regex: ^POST /api/v2/Tokens/Own$
---

{% include use-cases/use-case-transport-create-own-token.md %}
