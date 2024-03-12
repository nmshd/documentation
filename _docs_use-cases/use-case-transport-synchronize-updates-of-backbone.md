---
# Start automatic generation
permalink: use-case-transport-synchronize-updates-of-backbone
published: true
title: "Synchronize updates of Backbone"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RU4
  - component: Runtime
  - layer: Transport
  - facade: AccountFacade
  - function: syncEverything
  - description: Syncs the Identity's Messages and Relationships with the Backbone. Checks for new Relationships as well as incoming changes of existing ones. Checks for new or updated Messages. Returns all affected Relationships and Messages.
  - feature category: Synchronization
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
  - api_route_regex: POST /api/v2/Account/Sync
  - published: default
  - link: use-case-transport-synchronize-updates-of-backbone
require:
required_by:
# Start automatic generation
api_route_regex: ^POST /api/v2/Account/Sync$
---

{% include use-cases/use-case-transport-synchronize-updates-of-backbone.md %}
