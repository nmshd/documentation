---
# Start automatic generation
permalink: use-case-anonymous-load-token-by-id-and-key-without-having-an-account
published: true
title: "Load Token by id and key (without having an account)"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RY2
  - component: Runtime
  - layer: Anonymous
  - facade: AnonymousFacade
  - function: loadPeerTokenByIdAndKey
  - description:
  - feature category: Share information over side-channel
  - tech category: AnonymousTokens
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
  - link: use-case-anonymous-load-token-by-id-and-key-without-having-an-account
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case attempts to retrieve a [Token]({% link _docs_integrate/data-model-overview.md %}#token)
by its `id` and `secretKey` without having an account on the Backbone, thus without an authentication.

This can be used to fetch `Tokens` for Device Onboarding or Recovery.

## Parameters

- The `id` of the Token.
- The `secretKey` the Token was encrypted with, Base64URL encoded.

## On Success

- Returns the corresponding [Token]({% link _docs_integrate/data-model-overview.md %}#token).

## On Failure

- There is no `Token` that matches the `id`.
- The `secretKey` is not correct.
