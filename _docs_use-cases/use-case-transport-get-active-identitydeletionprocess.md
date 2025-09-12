---
# Start automatic generation
permalink: use-case-transport-get-active-identitydeletionprocess
published: true
title: "Get active IdentityDeletionProcess"
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
  - function: getActiveIdentityDeletionProcess
  - description: Get IdentityDeletionProcess that is in status 'Approved'
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
  - link: use-case-transport-get-active-identitydeletionprocess
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

From a technical perspective, the process of [Identity deletion]({% link _docs_integrate/delete-identities.md %}) is described by a data object of type [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess).
An IdentityDeletionProcess is active if it has `"Approved"` as `status`.
This use case returns the active IdentityDeletionProcess for your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) if one exists.
At all times, there can only be at most one active IdentityDeletionProcess per Identity.

This use case cannot be utilized by using the [Connector REST API]({% link _docs_integrate/access-the-connector.md %}#hosted-api-tooling-by-the-development-connector).
However, the [Identity status command]({% link _docs_operate/connector-cli-operations.md %}#identity-status-command) of the [Connector CLI operations]({% link _docs_operate/connector-cli-operations.md %}) can be used to find out whether there is currently an active IdentityDeletionProcess.
{: .notice--info}

## On Success

- Returns the active IdentityDeletionProcess.

## On Failure

- No IdentityDeletionProcess can be returned if none is active for this Identity.
