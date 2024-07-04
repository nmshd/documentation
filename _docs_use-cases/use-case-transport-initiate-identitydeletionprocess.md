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

This use case is intended to initiate an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) for your Identity.

## On Success

- Creates an IdentityDeletionProcess with status `"Approved"`
- Returns the initiated IdentityDeletionProcess

## On Failure

- No IdentityDeletionProcess can be initiated if there is already an active IdentityDeletionProcess, i.e. an IdentityDeletionProcess in `status` `"Approved"` or `"WaitingForApproval"`, for this Identity.
