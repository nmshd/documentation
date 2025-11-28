---
# Start automatic generation
permalink: use-case-anonymous-load-token-by-reference-without-having-an-account
redirect_from:
  - use-case-anonymous-load-token-by-truncated-reference-without-having-an-account
published: true
title: "Load Token by reference (without having an account)"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RY1
  - component: Runtime
  - layer: Anonymous
  - facade: AnonymousTokensFacade
  - function: loadPeerToken
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
  - link: use-case-anonymous-load-token-by-reference-without-having-an-account
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case attempts to retrieve a [Token]({% link _docs_integrate/data-model-overview.md %}#token) by its `reference.truncated` without having an account on the Backbone, thus without an authentication.

This can be used to fetch `Tokens` for Device Onboarding or Recovery.

## Parameters

- The `reference` that contains all information to load a Token.
- The `password` if the Token is protected by a password via its `passwordProtection` property.

## On Success

- Returns the corresponding [Token]({% link _docs_integrate/data-model-overview.md %}#token).

## On Failure

- There is no `Token` that matches the `reference`.
- The Token is personalized for another [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) via the property `forIdentity` of the Token.
- No `password` or an incorrect `password` was entered in case of a password protected Token.
