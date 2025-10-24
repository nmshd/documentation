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

The process of [Identity deletion]({% link _docs_integrate/delete-identities.md %}) leads to the creation of an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) with `"Active"` as `status`.
It can be cancelled if the Identity no longer wants to be deleted.
This is only possible as long as the end of the associated grace period of the IdentityDeletionProcess specified within its `gracePeriodEndsAt` property has not yet been reached.
This use case allows you to cancel an active IdentityDeletionProcess for your Identity within the grace period.

This use case can be utilized by using the [Identity deletion cancellation command]({% link _docs_operate/connector-cli-operations.md %}#identity-deletion-cancellation-command) of the [Connector CLI operations]({% link _docs_operate/connector-cli-operations.md %}), but not by using the [Connector REST API]({% link _docs_integrate/access-the-connector.md %}#hosted-api-tooling-by-the-development-connector).
{: .notice--info}

## On Success

- Changes the `status` of the IdentityDeletionProcess from `"Active"` to `"Cancelled"`.
- Returns the cancelled IdentityDeletionProcess.

## On Failure

- No IdentityDeletionProcess can be cancelled if none has `"Active"` as `status` for this Identity.
