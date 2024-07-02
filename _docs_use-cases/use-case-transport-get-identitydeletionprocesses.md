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
  - id: RID7
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

This use case will return all [IdentityDeletionProcesses]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) for your own Identity.

## On Success

- Returns a list with all IdentityDeletionProcesses of your Identity
