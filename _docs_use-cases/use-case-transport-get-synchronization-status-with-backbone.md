---
# Start automatic generation
permalink: use-case-transport-get-synchronization-status-with-backbone
published: true
title: "Get synchronization status with Backbone"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RU6
  - component: Runtime
  - layer: Transport
  - facade: AccountFacade
  - function: getSyncInfo
  - description:
  - feature category: Multi-device synchronization
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
  - api_route_regex: GET /api/v2/Account/SyncInfo
  - published: default
  - link: use-case-transport-get-synchronization-status-with-backbone
require:
required_by:
api_route_regex: ^GET /api/v2/Account/SyncInfo$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case returns metadata about the synchronization status of the current Identity or Device with the Backbone. So far, it returns the timestamp of the last successful synchronization run which is triggered by the [Synchronize updates of Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) use-case.

## On Success

- Returns the metadata of the last sync run.
