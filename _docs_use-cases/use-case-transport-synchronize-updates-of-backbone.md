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
  - api_route_regex: POST /api/core/v1/Account/Sync
  - published: default
  - link: use-case-transport-synchronize-updates-of-backbone
require:
required_by:
api_route_regex: ^POST /api/core/v1/Account/Sync$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that calling this use case to sync the Identity/Device on a regular basis is discouraged.
Please configure the [Server-Sent Events Module]({% link _docs_operate/modules.md %}#sse) or [Sync Module]({% link _docs_operate/modules.md %}#sync) to automate the synchronization.
{: .notice--warning}

This use case retrieves all relevant data changes between the current Identity (and Device) and the Backbone since the last synchronization. The relevant data so far are new Messages, new/changed Relationships, new/changed IdentityDeletionProcesses and changed Files.
For example, this also includes the receipt of new reactivation requests of terminated Relationships and new responses to those requests, even if they do not change the `status` of the Relationship.

## On Success

- Relevant data changes are received internally, but no response body associated with the data changes is returned.
