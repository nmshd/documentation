---
permalink: /use-case-transport-get-synchronization-status-with-backbone
published: true
title: "Get synchronization status with Backbone"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RU6
  - layer: Transport
  - facade: AccountFacade
  - function: getSyncInfo
  - description:
  - feature category: Multi-device synchronization
  - tech category: Account
  - status: DONE
  - comments:
  - actor: Identity
  - component: Runtime
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link: transport/get-synchronization-status-with-backbone
require:
required_by:
api_route_regex: ^GET /api/v2/Account/getSyncInfo$
---

{% include use-cases/use-case-transport-get-synchronization-status-with-backbone.md %}
