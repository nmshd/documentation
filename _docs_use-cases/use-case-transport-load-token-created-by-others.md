---
# Start automatic generation
permalink: use-case-transport-load-token-created-by-others
published: true
title: "Load Token created by others"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RK2
  - component: Runtime
  - layer: Transport
  - facade: TokensFacade
  - function: loadPeerToken
  - description:
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
  - api_route_regex: POST /api/v2/Tokens/Peer
  - published: default
  - link: use-case-transport-load-token-created-by-others
require:
required_by:
api_route_regex: ^POST /api/v2/Tokens/Peer$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case intends to load a peer's [Token]({% link _docs_integrate/data-model-overview.md %}#token) from the Backbone by a given reference to the Token.

## Parameters

You can execute this use case if you know the `reference.truncated` of the peer's Token.

- `reference` that identifies the Token.
- `ephemeral` to indicate that the Token should be stored locally.
- The `password` if the Token is protected by a password via its `passwordProtection` property.

## On Success

- Returns the corresponding [Token]({% link _docs_integrate/data-model-overview.md %}#token).

## On Failure

- The parameters are malformed.
- The Token does not exist.
- The Token is expired.
- The Token is personalized for a different [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) via the property `forIdentity` of the Token.
- No `password` or an incorrect `password` was entered in case of a password protected Token.
