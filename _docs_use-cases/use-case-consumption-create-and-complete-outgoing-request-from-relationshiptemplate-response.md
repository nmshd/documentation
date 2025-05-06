---
# Start automatic generation
permalink: use-case-consumption-create-and-complete-outgoing-request-from-relationshiptemplate-response
redirect_from:
  - use-case-consumption-create-and-complete-outgoing-request-from-relationshiptemplate-response
published: true
title: "Create and complete outgoing Request from RelationshipTemplate Response"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR5
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: createAndCompleteFromRelationshipTemplateResponse
  - description:
  - feature category: Normalized Requests/Responses to and from users
  - tech category: Requests
  - status: DONE
  - documentation status: DONE
  - comments: Internal
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex:
  - published: default
  - link: use-case-consumption-create-and-complete-outgoing-request-from-relationshiptemplate-response
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is a Runtime-internal use case which is automatically used by the module system. You should not call this use case without having good reason.
{: .notice--warning}

This use case is intended to create and instantly complete an outgoing Request which was shared by a RelationshipTemplate and the Response has been received by an incoming pending Relationship.

## Parameters

- `templateId` identifies the RelationshipTemplate the response originates from.
- `responseSourceId` references the response either a [message]({% link _docs_integrate/data-model-overview.md %}#message)
  or a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).
- `response` is the content of the response.

## On Success

- Creates and completes the outgoing request.
- Returns the corresponding [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest).

## On Failure

- The RelationshipTemplate could not be found.
- The response source could not be found.
