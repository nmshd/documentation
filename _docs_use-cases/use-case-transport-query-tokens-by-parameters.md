---
# Start automatic generation
permalink: use-case-transport-query-tokens-by-parameters
published: true
title: "Query Tokens by parameters"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RK4
  - component: Runtime
  - layer: Transport
  - facade: TokensFacade
  - function: getTokens
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
  - api_route_regex:
  - published: default
  - link: use-case-transport-query-tokens-by-parameters
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case queries [Tokens]({% link _docs_integrate/data-model-overview.md %}#token) of the Identity.

## Parameters

- `createdAt` is the ISODateTime the Token was created at.
- `createdBy` is the enmeshed `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that created the Token.
- `createdByDevice` is the `id` of the Device that created the Token.
- `expiresAt` is the ISODateTime the Token expires.
- `forIdentity` is the enmeshed `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) for which the Token is intended.
- `passwordProtection` is an object for [PasswordProtection]({% link _docs_integrate/data-model-overview.md %}#passwordprotection) of a Token.

## On Success

- Returns all [Tokens]({% link _docs_integrate/data-model-overview.md %}#token) that match the `query`.

## On Failure

- The parameters are malformed.
