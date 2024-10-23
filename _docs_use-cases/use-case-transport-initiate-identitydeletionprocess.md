---
# Start automatic generation
permalink: use-case-transport-initiate-identitydeletionprocess
published: true
title: "Initiate IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID1
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: initiateIdentityDeletionProcess
  - description: Initiate an IdentityDeletionProcess that has status 'Approved'
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
  - link: use-case-transport-initiate-identitydeletionprocess
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

The process of [Identity deletion]({% link _docs_integrate/delete-identities.md %}) can either be self-initiated or triggered by the use of a support channel.
In the case of [self-initiated Identity deletion]({% link _docs_integrate/delete-identities.md %}#self-initiated-identity-deletion), this use case can be utilized to initiate an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) for your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity).
The generated IdentityDeletionProcess immediately has `"Approved"` as its `status` and describes that the Identity will be deleted after the grace period ends unless the [IdentityDeletionProcess is cancelled]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}) by the Identity by then.

## On Success

- Creates an IdentityDeletionProcess with `"Approved"` as `status`.
- Returns the initiated IdentityDeletionProcess.

## On Failure

- No IdentityDeletionProcess can be initiated if there is already an active IdentityDeletionProcess, i.e. an IdentityDeletionProcess with `"Approved"` or `"WaitingForApproval"` as `status`, for this Identity. Please note that an IdentityDeletionProcess with `"WaitingForApproval"` as `status` is never created by the self-initiated Identity deletion, but only by the process of [Identity deletion via a support channel]({% link _docs_integrate/delete-identities.md %}#identity-deletion-via-a-support-channel).
