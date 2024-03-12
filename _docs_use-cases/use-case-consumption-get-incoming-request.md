---
# Start automatic generation
permalink: use-case-consumption-get-incoming-request
published: true
title: "Get incoming Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR2
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: getRequest
  - description: Fetches the incoming `Request` with the given `id`.
  - feature category: Normalized requests/responses to and from users
  - tech category: Requests
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
  - api_route_regex: get /api/v2/Requests/Incoming/{id}
  - published: default
  - link: use-case-consumption-get-incoming-request
require:
required_by:
api_route_regex: ^get /api/v2/Requests/Incoming/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve an incoming [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) by its id. The differences of outgoing and incoming Requests are defined [here]({% link _docs_integrate/data-model-overview.md %}#localrequeststatus).

## Parameters

- The `id` of the incoming Request.

## On Success

- Returns the incoming [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) corresponding to the id.

## On Failure

- There is no such incoming Request.

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve an incoming [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) by its id. The differences of outgoing and incoming Requests are defined [here]({% link _docs_integrate/data-model-overview.md %}#localrequeststatus).

## Parameters

- The `id` of the incoming Request.

## On Success

- Returns the incoming [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) corresponding to the id.

## On Failure

- There is no such incoming Request.
