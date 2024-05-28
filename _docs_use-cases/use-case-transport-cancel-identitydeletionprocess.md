---
# Start automatic generation
permalink: use-case-transport-cancel-identitydeletionprocess
published: true
title: "Cancel IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID2
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: cancelIdentityDeletionProcess
  - description: Cancel an IdentityDeletionProcess that has status 'Approved' within grace period
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
  - link: use-case-transport-cancel-identitydeletionprocess
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows you to cancel an approved [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) for your own Identity.

## On Success

- Moves the IdentityDeletionProcess in status `"Cancelled"`
- Returns the cancelled IdentityDeletionProcess

## On Failure

- No IdentityDeletionProcess can be cancelled if non was in `status` `"Approved"` for this Identity.
