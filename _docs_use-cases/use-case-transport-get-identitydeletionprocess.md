---
# Start automatic generation
permalink: use-case-transport-get-identitydeletionprocess
published: true
title: "Get IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID3
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: getIdentityDeletionProcess
  - description: Get IdentityDeletionProcess by ID
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
  - link: use-case-transport-get-identitydeletionprocess
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

From a technical perspective, the process of [Identity deletion]({% link _docs_integrate/delete-identities.md %}) is described by a data object of type [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess).
An IdentityDeletionProcess can be uniquely identified by its `id`.
This use case allows you to query an IdentityDeletionProcess for your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) by its `id`.

## Parameters

- `id` of the [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess).

## On Success

- Returns the IdentityDeletionProcess corresponding to the provided `id`.

## On Failure

- No IdentityDeletionProcess can be returned if none exists with the given `id` for this Identity.
