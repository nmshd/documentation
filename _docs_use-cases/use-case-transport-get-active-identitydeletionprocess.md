---
# Start automatic generation
permalink: use-case-transport-get-active-identitydeletionprocess
published: true
title: "Get active IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID6
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: getActiveIdentityDeletionProcess
  - description: Get IdentityDeletionProcess that is in status 'Waiting for Approval' or 'Approved'
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
  - link: use-case-transport-get-active-identitydeletionprocess
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case will return the active [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) for your own Identity if one exists.
An IdentityDeletionProcess is active if it is in `status` `"WaitingForApproval"` or `"Approved"`.
At all times, there can only be one active IdentityDeletionProcess per Identity.

## On Success

- Returns the active IdentityDeletionProcess

## On Failure

- No IdentityDeletionProcess can be returned if non is active for this Identity.
