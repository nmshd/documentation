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
  - id: RID5
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

This use case allows you to query an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) for your own Identity by its `id`.

## Parameters

- `id` of the IdentityDeletionProcess

## On Success

- Returns the IdentityDeletionProcess corresponding to the provided `id`

## On Failure

- No IdentityDeletionProcess can be returned if none exists with the given `id` for this Identity.
