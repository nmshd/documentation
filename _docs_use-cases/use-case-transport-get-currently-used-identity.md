---
permalink: /use-case-transport-get-currently-used-identity
published: true
title: "Get currently used Identity"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RU1
  - component: Runtime
  - layer: Transport
  - facade: AccountFacade
  - function: getIdentityInfo
  - description:
  - feature category: Multi-profile
  - tech category: Account
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
  - api_route_regex: GET /api/v2/Account/IdentityInfo
  - published: default
  - link: transport/get-currently-used-identity
  - redirect_from:
require:
required_by:
api_route_regex: ^GET /api/v2/Account/IdentityInfo$
---

{% include use-cases/use-case-transport-get-currently-used-identity.md %}
