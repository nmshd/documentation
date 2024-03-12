---
# Start automatic generation
permalink: use-case-consumption-query-incoming-requests
published: true
title: "Query incoming Requests"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR1
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: getRequests
  - description: Queries incoming `Requests`.
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
  - api_route_regex: get /api/v2/Requests/incoming
  - published: default
  - link: use-case-consumption-query-incoming-requests
require:
required_by:
api_route_regex: ^get /api/v2/Requests/incoming$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to query incoming [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest).

## Parameters

- The `id` of the LocalRequest.
- The `peer` is the Address of the Identity that sent the LocalRequest.
- `createdAt` indicates the date of LocalRequest creation.
- The `status` of the LocalRequest.
- The `content` describes the [Request]({% link _docs_integrate/data-model-overview.md %}#request) wrapped by the LocalRequest.
- The `response` describes the [Response]({% link _docs_integrate/data-model-overview.md %}#request) that might exist for the Request.

## On Success

- Returns a list of incoming [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest) that match the query.

## On Failure

- The parameters are malformed.
