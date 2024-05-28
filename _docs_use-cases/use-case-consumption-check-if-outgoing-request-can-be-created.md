---
# Start automatic generation
permalink: use-case-consumption-check-if-outgoing-request-can-be-created
published: true
title: "Check if outgoing Request can be created"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR1
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: canCreate
  - description: Validates the given `OutgoingRequest` before creating it
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
  - api_route_regex: POST /api/v2/Requests/Outgoing/Validate
  - published: default
  - link: use-case-consumption-check-if-outgoing-request-can-be-created
require:
required_by:
api_route_regex: ^POST /api/v2/Requests/Outgoing/Validate$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to check if a [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) can be created
based on a given [Request]({% link _docs_integrate/data-model-overview.md %}#request) for a given `peer`.

## Parameters

- The `content` as a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for the to be created [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)
- The `peer` is the address for which the LocalRequest should be created. There can only be one peer per LocalRequest. Even though the `peer` parameter is optional, it is recommended to specify it whenever possible. This allows additional validation rules to execute. When sending a [Request via a Message]({% link _docs_integrate/requests-via-messages.md %}), the `peer` receiving it is always known.

## On Success

- Returns a `RequestValidationResult` that indicates if the given Request is valid.

## On Failure

- The LocalRequest cannot be created if the peer is unknown.
- The LocalRequest cannot be created if the Request is malformed.
