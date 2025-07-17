---
# Start automatic generation
permalink: use-case-consumption-query-incoming-requests
published: true
title: "Query incoming Requests"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR1
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: getRequests
  - description: Queries incoming `Requests`.
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
  - api_route_regex: GET /api/v2/Requests/incoming
  - published: default
  - link: use-case-consumption-query-incoming-requests
require:
required_by:
api_route_regex: ^GET /api/v2/Requests/incoming$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to query incoming [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest).

## Parameters

- The `id` of the LocalRequest.
- The `peer` is the `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that sent the LocalRequest.
- `createdAt` indicates the creation date of the LocalRequest.
- The `status` of the LocalRequest.
- `wasAutomaticallyDecided` indicates whether the Request was automatically decided by the [Decider Module]({% link _docs_explore/61-runtime.md %}#decider-module).
- The `content` describes the [Request]({% link _docs_integrate/data-model-overview.md %}#request) wrapped by the LocalRequest.
- The `source` of the LocalRequest.
- The `response` describes the [Response]({% link _docs_integrate/data-model-overview.md %}#response) that might exist for the Request.

## On Success

- Returns a list of incoming [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest) that match the query.

## On Failure

- The parameters are malformed.
