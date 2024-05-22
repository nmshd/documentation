---
# Start automatic generation
permalink: use-case-consumption-check-if-incoming-request-can-be-rejected
published: true
title: "Check if incoming Request can be rejected"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR9
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: canReject
  - description: Checks if the `Request` with the given `id` can be rejected.
  - feature category: Normalized Requests/Responses to and from users
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
  - api_route_regex: PUT /api/v2/Requests/Incoming/{id}/CanReject
  - published: default
  - link: use-case-consumption-check-if-incoming-request-can-be-rejected
require:
required_by:
api_route_regex: ^PUT /api/v2/Requests/Incoming/{id}/CanReject$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case tests if an incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request)
can be rejected with the given parameters without actually rejecting it.

It is advised to call canReject before actually rejecting a Request, however canReject will usually be successful, as there are only rare cases which block a rejection.

## Parameters

- The `id` of the incoming request.
- The decision for each individual [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitems)
  expressed as the appropriate [Parameters defined in the Data Model]({% link _docs_integrate/data-model-overview.md %}deciderequestitemparameters).

## On Success

- Returns a `RequestValidationResult` that indicates if Request can be rejected with the given parameters.

## On Failure

- The decisions do not match the RequestItems.
