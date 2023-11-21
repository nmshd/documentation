---
permalink: /use-case-transport-load-token-created-by-others
published: true
title: "Load Token created by others"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RK2
  - layer: Transport
  - facade: TokensFacade
  - function: loadPeerToken
  - description:
  - feature category: Share structured information over side-channel
  - tech category: Tokens
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
  - link: transport/load-token-created-by-others
require:
required_by:
api_route_regex: ^POST /api/v2/Tokens/Peer$
---

{% include use-cases/use-case-transport-load-token-created-by-others.md %}
