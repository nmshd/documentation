---
# Start automatic generation
permalink: use-case-consumption-reject-incoming-request
published: true
title: "Reject incoming Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR10
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: reject
  - description: Rejects the incoming `Request` with the given `id`.
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
  - api_route_regex: PUT /api/core/v1/Requests/Incoming/{id}/Reject
  - published: default
  - link: use-case-consumption-reject-incoming-request
require:
required_by:
api_route_regex: ^PUT /api/core/v1/Requests/Incoming/{id}/Reject$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case attempts to reject an incoming [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest).

It is advised to [check if the incoming Request can be rejected](/use-case-consumption-check-if-incoming-request-can-be-rejected) in advance.

## Parameters

- The `id` of the incoming LocalRequest.
- The decision for each individual [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) expressed as the appropriate [Parameters defined in the Data Model]({% link _docs_integrate/data-model-overview.md %}deciderequestitemparameters).

## On Success

- All RequestItems of the Request are rejected.
- A Message is sent to the requesting peer which contains the Response to the Request.
- The LocalRequest is returned.

## On Failure

- The decisions do not match the request items.
- The parameters are malformed.
