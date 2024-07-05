---
# Start automatic generation
permalink: use-case-transport-accept-relationship-reactivation
published: true
title: "Accept Relationship reactivation"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR11
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: acceptRelationshipReactivation
  - description: Accepts the reactivation of the Relationship with the given `relationshipId`.
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
  - api_route_regex: PUT /api/v2/Relationships/{id}/Reactivate/Accept
  - published: default
  - link: use-case-transport-accept-relationship-reactivation
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Reactivate/Accept$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Accepts the reactivation of the terminated [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.

## Parameters

- `relationshipId`, the id of the Relationship

## On Success

- Accepts the reactivation of the Relationship requested by the peer
- Returns the reactivated Relationship

## On Failure

- The `relationshipId` does not resolve to a terminated Relationship
- The peer has not requested the reactivation
