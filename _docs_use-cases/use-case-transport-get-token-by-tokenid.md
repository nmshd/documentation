---
# Start automatic generation
permalink: use-case-transport-get-token-by-tokenid
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
  - link: use-case-transport-get-token-by-tokenid
require:
required_by:
api_route_regex: ^GET /api/v2/Tokens/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retieves a [Token]({% link _docs_integrate/data-model-overview.md %}#token)
by its `id`.

## Parameters

- `id` of the Token.

## On Success

- The Token that corresponds to the `id`.

## On Failure

- The `id` doesn't resolve to a Token.
