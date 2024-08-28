---
# Start automatic generation
permalink: use-case-transport-reject-relationship-reactivation
published: true
title: "Reject Relationship reactivation"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR13
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: rejectRelationshipReactivation
  - description: Rejects the reactivation of the Relationship with the given `relationshipId`.
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
  - api_route_regex: PUT /api/v2/Relationships/{id}/Reactivate/Reject
  - published: default
  - link: use-case-transport-reject-relationship-reactivation
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Reactivate/Reject$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Rejects the [reactivation of the terminated Relationship]({% link _docs_integrate/terminate-relationships.md %}#reactivate-a-terminated-relationship) with the given [Relationship's]({% link _docs_integrate/data-model-overview.md %}#relationship) `id`.

## Parameters

- `relationshipId`, the `id` of the Relationship

## On Success

- Rejects the reactivation of the Relationship requested by the peer
- Returns the Relationship for which the reactivation was rejected

## On Failure

- The `relationshipId` does not resolve to a terminated Relationship
- The peer has not requested the reactivation
