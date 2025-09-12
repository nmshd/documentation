---
# Start automatic generation
permalink: use-case-transport-get-identitydeletionprocesses
published: true
title: "Get IdentityDeletionProcesses"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID5
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: getIdentityDeletionProcesses
  - description: Get all IdentityDeletionProcesses
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
  - link: use-case-transport-get-identitydeletionprocesses
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

From a technical perspective, the process of [Identity deletion]({% link _docs_integrate/delete-identities.md %}) is described by a data object of type [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess).
This use case will return all IdentityDeletionProcesses for your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity).

## On Success

- Returns a list with all IdentityDeletionProcesses of your Identity.
