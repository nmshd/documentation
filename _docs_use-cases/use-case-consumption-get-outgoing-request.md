---
# Start automatic generation
permalink: use-case-consumption-get-outgoing-request
published: true
title: "Get outgoing Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR4
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: getRequest
  - description:
  - feature category: Normalized requests/responses to and from users
  - tech category: Requests
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: get /api/v2/Requests/Outgoing/{id}
  - published: default
  - link: use-case-consumption-get-outgoing-request
require:
required_by:
api_route_regex: ^get /api/v2/Requests/Outgoing/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve an outgoing [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)
by its id. The differences of outgoing and an incoming Requests are defined [here]({% link _docs_integrate/data-model-overview.md %}#localrequeststatus).

## Parameters

- The `id` of the outgoing Request.

## On Success

- Returns the outgoing [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) corresponding to the id.

## On Failure

- There is no such outgoing Request.
