---
# Start automatic generation
permalink: use-case-transport-approve-identitydeletionprocess
published: true
title: "Approve IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID3
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: approveIdentityDeletionProcess
  - description: Approve an IdentityDeletionProcess that has status 'Waiting for Approval' that was started by external support channel (from Backbone Admin UI)
  - feature category: Identity Handling
  - tech category: IdentityDeletionProcesses
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
  - api_route_regex:
  - published:
  - link: use-case-transport-approve-identitydeletionprocess
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows you to approve an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) that was started via the Backbone Admin UI for your own Identity.

## On Success

- Moves the IdentityDeletionProcess in status `"Approved"`
- Returns the approved IdentityDeletionProcess

## On Failure

- No IdentityDeletionProcess can be approved if non was started via the Backbone Admin UI, i.e. no IdentityDeletionProcess in `status` `"WaitingForApproval"` exists for this Identity.
