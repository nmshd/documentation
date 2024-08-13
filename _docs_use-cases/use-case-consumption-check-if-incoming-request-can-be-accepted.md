---
# Start automatic generation
permalink: use-case-consumption-check-if-incoming-request-can-be-accepted
published: true
title: "Check if incoming Request can be accepted"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIR7
  - component: Runtime
  - layer: Consumption
  - facade: IncomingRequestsFacade
  - function: canAccept
  - description: Checks if the `Request` with the given `id` can be accepted.
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
  - api_route_regex: PUT /api/v2/Requests/Incoming/{id}/CanAccept
  - published: default
  - link: use-case-consumption-check-if-incoming-request-can-be-accepted
require:
required_by:
api_route_regex: ^PUT /api/v2/Requests/Incoming/{id}/CanAccept$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case tests if an incoming [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)
can be accepted with the given parameters without actually accepting it.

This is great for checking if all required information of a Request was filled out in order to accept it, e.g. to update a user interface with the respective errors (and render an "Accept Button" as disabled) as long as there are errors.

## Parameters

- The `id` of the incoming Request.
- The decision for each individual [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitems)
  expressed as the appropriate [Parameters defined in the Data Model]({% link _docs_integrate/data-model-overview.md %}#deciderequestitemparameters).

## On Success

- Returns a `RequestValidationResult` that indicates if the Request can be accepted with the given parameters.

## On Failure

- The decisions do not match the RequestItems.
- The decisions and values of respective RequestItems do not match the requested or required values, e.g. an E-Mail Address is wrong.
- An item that has the mustBeAccepted field set was not accepted or left blank.
