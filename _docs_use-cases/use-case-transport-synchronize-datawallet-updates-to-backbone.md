---
# Start automatic generation
permalink: use-case-transport-synchronize-datawallet-updates-to-backbone
published: false
title: "Synchronize Datawallet updates to Backbone"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RU5
  - component: Runtime
  - layer: Transport
  - facade: AccountFacade
  - function: syncDatawallet
  - description:
  - feature category: Multi-device synchronization
  - tech category: Account
  - status: QUESTIONS
  - documentation status:
  - comments: rather AppRuntime?
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: POST /api/core/v1/Account/Sync
  - published: default
  - link: use-case-transport-synchronize-datawallet-updates-to-backbone
require:
required_by:
api_route_regex: ^POST /api/core/v1/Account/Sync$
# End automatic generation
---
