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

{{properties.description}}

{% include properties_list.html %}

This use case allows you to delete a [Token]({% link _docs_integrate/data-model-overview.md %}#token).

## Parameters

- `id` of the Token that should be deleted.

## On Success

- The Token is deleted locally.
- If `isOwn` of the [Token]({% link _docs_integrate/data-model-overview.md %}#token) is `true`, the Token will be deleted from the Backbone, too.

## On Failure

- No Token can be deleted if there is no Token that corresponds to the given `id`.
