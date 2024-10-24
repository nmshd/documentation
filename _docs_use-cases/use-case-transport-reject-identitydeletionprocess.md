---
# Start automatic generation
permalink: use-case-transport-reject-identitydeletionprocess
published: true
title: "Reject IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID4
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: rejectIdentityDeletionProcess
  - description: Reject an IdentityDeletionProcess that has status 'WaitingForApproval' that was started by external support channel (from Backbone Admin UI)
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
  - link: use-case-transport-reject-identitydeletionprocess
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

The process of [Identity deletion]({% link _docs_integrate/delete-identities.md %}) can either be self-initiated or triggered by the Backbone Admin UI.
In the case of [Identity deletion triggered by the Backbone Admin UI]({% link _docs_integrate/delete-identities.md %}#identity-deletion-triggered-by-the-backbone-admin-ui), an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) with `"WaitingForApproval"` as `status` for your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) is created via the Backbone Admin UI.
This use case allows you to reject this IdentityDeletionProcess.
Alternatively, the [IdentityDeletionProcess can be approved]({% link _docs_use-cases/use-case-transport-approve-identitydeletionprocess.md %}).

## On Success

- Changes the `status` of the IdentityDeletionProcess from `"WaitingForApproval"` to `"Rejected"`.
- Returns the rejected IdentityDeletionProcess.

## On Failure

- No IdentityDeletionProcess can be rejected if none was started via the Backbone Admin UI, i.e. no IdentityDeletionProcess with `"WaitingForApproval"` as `status` exists for this Identity.
