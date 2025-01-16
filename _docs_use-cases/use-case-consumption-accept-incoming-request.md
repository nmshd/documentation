---
# Start automatic generation
permalink: use-case-consumption-accept-incoming-request
published: true
title: "Accept incoming Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR8
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: accept
  - description: Accepts the incoming `Request` with the given `id`.
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
  - api_route_regex: PUT /api/v2/Requests/Incoming/{id}/Accept
  - published: default
  - link: use-case-consumption-accept-incoming-request
require:
required_by:
api_route_regex: ^PUT /api/v2/Requests/Incoming/{id}/Accept$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case attempts to accept an incoming [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) with the corresponding parameters.

It is advised to [check if incoming Request can be accepted](/use-case-consumption-check-if-incoming-request-can-be-accepted)
in advance.

## Parameters

- The `id` of the incoming Request.
- The decision for each individual [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitems)
  expressed as the appropriate [Parameters defined in the Data Model]({% link _docs_integrate/data-model-overview.md %}#deciderequestitemparameters).

## On Success

- The Request is processed according to the decisions made.
- A Message is sent to the requesting peer which contains the Response to the Request.
- The LocalRequest is returned

## On Failure

- The decisions do not match the RequestItems.
- The decisions and values of respective RequestItems do not match the requested or required values, e.g. an email address is wrong.
- A RequestItem that has the `mustBeAccepted` field set to `true` was not accepted or left blank.
- A RequestItem of a Request cannot be accepted if its acceptance would lead to the creation of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with the same `key`, `owner` and `value.@type` as a RelationshipAttribute that already exists in the context of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) to the `peer` that sent the Request. The corresponding Request can therefore not be accepted if the RequestItem in question has `mustBeAccepted` set to `true`. However, if `mustBeAccepted` is set to `false`, the Request can still be accepted by rejecting the RequestItem.
