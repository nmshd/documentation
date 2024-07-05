---
# Start automatic generation
permalink: use-case-transport-request-relationship-reactivation
published: true
title: "Request Relationship reactivation"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR10
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: requestRelationshipReactivation
  - description: Requests the reactivation of the Relationship with the given `relationshipId`.
  - feature category: Mutual peer-to-peer Relationships
  - tech category: Relationships
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority:
  - complexity:
  - size:
  - created_at:
  - changed_at:
  - api_route_regex: PUT /api/v2/Relationships/{id}/Reactivate
  - published: default
  - link: use-case-transport-request-relationship-reactivation
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Reactivate$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Requests the reactivation of the terminated [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.

## Parameters

- `relationshipId`, the id of the Relationship

## On Success

- Requests the reactivation of the relationship from the peer
- Returns the Relationship the reactivation was requested of

## On Failure

- The `relationshipId` does not resolve to a terminated Relationship
- You have already requested the reactivation
- The peer has already requested the reactivation
