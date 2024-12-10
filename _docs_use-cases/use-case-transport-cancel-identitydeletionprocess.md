---
# Start automatic generation
permalink: use-case-transport-cancel-identitydeletionprocess
published: true
title: "Cancel IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID2
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: cancelIdentityDeletionProcess
  - description: Cancel an IdentityDeletionProcess that has status 'Approved' within grace period
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
  - link: use-case-transport-cancel-identitydeletionprocess
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

The process of [Identity deletion]({% link _docs_integrate/delete-identities.md %}) can either be self-initiated or triggered via the Backbone Admin UI and subsequently [approved]({% link _docs_use-cases/use-case-transport-approve-identitydeletionprocess.md %}) by the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity).
In both cases, the created [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) with `"Approved"` as `status` can be cancelled if the Identity no longer wants to be deleted.
This is only possible as long as the end of the associated grace period of the IdentityDeletionProcess specified within its `gracePeriodEndsAt` property has not yet been reached.
This use case allows you to cancel an approved IdentityDeletionProcess for your Identity within the grace period.

## On Success

- Changes the `status` of the IdentityDeletionProcess from `"Approved"` to `"Cancelled"`.
- Returns the cancelled IdentityDeletionProcess.

## On Failure

- No IdentityDeletionProcess can be cancelled if none has `"Approved"` as `status` for this Identity.
