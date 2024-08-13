---
# Start automatic generation
permalink: use-case-consumption-query-outgoing-requests
published: true
title: "Query outgoing Requests"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR3
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: getRequests
  - description: Queries outgoing `Requests`.
  - feature category: Normalized Requests/Responses to and from users
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
  - api_route_regex: GET /api/v2/Requests/Outgoing
  - published: default
  - link: use-case-consumption-query-outgoing-requests
require:
required_by:
api_route_regex: ^GET /api/v2/Requests/Outgoing$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to query outgoing [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest).

## Parameters

- The `id` of the LocalRequest.
- The `peer` is the Address of the Identity that the LocalRequest was sent to.
- `createdAt` indicates the date of LocalRequest creation.
- The `status` of the LocalRequest.
- The `content` describes the [Request]({% link _docs_integrate/data-model-overview.md %}#request) wrapped by the LocalRequest.
- The `source` of the LocalRequest.
- The `response` describes the [Response]({% link _docs_integrate/data-model-overview.md %}#response) that might exist for the Request.

## On Success

- Returns a list of outgoing [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest) that match the query.

## On Failure

- The parameters are malformed.
