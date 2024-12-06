---
# Start automatic generation
permalink: use-case-transport-approve-identitydeletionprocess
published: true
title: "Approve IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID3
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: approveIdentityDeletionProcess
  - description: Approve an IdentityDeletionProcess that has status 'WaitingForApproval' that was started by external support channel (from Backbone Admin UI)
  - feature category: Identity handling
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

The process of [Identity deletion]({% link _docs_integrate/delete-identities.md %}) can either be self-initiated or triggered via the Backbone Admin UI.
In the case of [Identity deletion triggered via the Backbone Admin UI]({% link _docs_integrate/delete-identities.md %}#identity-deletion-triggered-via-the-backbone-admin-ui), an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) with `"WaitingForApproval"` as `status` is created for your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) via the Backbone Admin UI.
This use case can be utilized to approve this IdentityDeletionProcess.
Alternatively, the [IdentityDeletionProcess can be rejected]({% link _docs_use-cases/use-case-transport-reject-identitydeletionprocess.md %}).

## On Success

- Changes the `status` of the IdentityDeletionProcess from `"WaitingForApproval"` to `"Approved"`.
- Returns the approved IdentityDeletionProcess.

## On Failure

- No IdentityDeletionProcess can be approved if none was started via the Backbone Admin UI, i.e. no IdentityDeletionProcess with `"WaitingForApproval"` as `status` exists for this Identity.
