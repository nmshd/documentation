---
# Start automatic generation
permalink: use-case-transport-synchronize-updates-of-backbone
published: true
title: "Synchronize updates of Backbone"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
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
api_route_regex: ^POST /api/v2/Account/Sync$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that calling this use case to sync the Identity/Device on a regular basis is discouraged, as it could lead to wrong return values if multiple endpoints trigger this use case.
Please configure the [SyncModule]({% link _docs_operate/modules.md %}#sync) and use eventing instead.
{: .notice--warning}

This use case retrieves all relevant data changes between the current Identity (and Device) and the Backbone since the last synchronization. The relevant data so far are new Messages, new/changed Relationships and new/changed IdentityDeletionProcesses.

## On Success

- A list of [Relationships]({% link _docs_integrate/data-model-overview.md %}#relationship) that have a new status.
- A list of [Messages]({% link _docs_integrate/data-model-overview.md %}#message) that were retrieved since the last call.
