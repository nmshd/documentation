---
# Start automatic generation
permalink: use-case-transport-accept-relationship
redirect_from:
  - use-case-transport-accept-relationship-change
published: true
title: "Accept Relationship"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR6
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: acceptRelationship
  - description: Accepts the Relationship with the given `relationshipId`.
  - feature category: Mutual peer-to-peer Relationships
  - tech category: Relationships
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
  - api_route_regex: PUT /api/v2/Relationships/{id}/Accept
  - published: default
  - link: use-case-transport-accept-relationship
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Accept$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Revokes the reactivation of the terminated [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.

## Parameters

- `relationshipId`, the id of the Relationship

## On Success

- Revokes the reactivation of the Relationship you have requested
- Returns the Relationship the reactivation was revoked of

## On Failure

- The `relationshipId` does not resolve to a terminated Relationship
- You have not requested the reactivation
