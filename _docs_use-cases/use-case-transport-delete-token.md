---
# Start automatic generation
permalink: use-case-transport-delete-token
published: true
title: "Delete Token"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RK6
  - component: Runtime
  - layer: Transport
  - facade: TokensFacade
  - function: deleteToken
  - description: Deletes the Token with the given `id`.
  - feature category: Share structured information over side-channel
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
  - api_route_regex: DELETE /api/core/v1/Tokens/{id}
  - published: default
  - link: use-case-transport-delete-token
require:
required_by:
api_route_regex: ^DELETE /api/core/v1/Tokens/{id}$
# End automatic generation
---
