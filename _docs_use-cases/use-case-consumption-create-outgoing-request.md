---
# Start automatic generation
permalink: use-case-consumption-create-outgoing-request
published: true
title: "Create outgoing Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR2
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: create
  - description: Creates a new outgoing `Request`.
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
  - api_route_regex: POST /api/v2/Requests/Outgoing
  - published: default
  - link: use-case-consumption-create-outgoing-request
require:
required_by:
api_route_regex: ^POST /api/v2/Requests/Outgoing$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to create an actionable [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) based on a given [Request]({% link _docs_integrate/data-model-overview.md %}#localrequest) for a given `peer`.
One can (and should) [check if the outgoing Request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) before creating the LocalRequest with this use-case.

The created LocalRequest needs to be manually submitted to the peer, e.g. [by sending a message]({% link _docs_integrate/requests-over-messages.md %}).

## Parameters

- The `content` as a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for the to be created [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)
- The `peer` is the address for which the LocalRequest should be created. There can only be one peer per LocalRequest.

## On Success

- A new [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) for the given parameters is created in status `Draft` and returned, but so far not sent to the given peer.

## On Failure

- The request cannot be created if the peer is unknown.
- The request cannot be created if the request content is malformed. Please [check if the outgoing request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) for more details.

Please [check if the outgoing request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) for more details.
