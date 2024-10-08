---
# Start automatic generation
permalink: use-case-transport-reject-relationship
redirect_from:
  - use-case-transport-reject-relationship-change
published: true
title: "Reject Relationship"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR7
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: rejectRelationship
  - description: Rejects the Relationship with the given `relationshipId`.
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
  - api_route_regex: PUT /api/v2/Relationships/{id}/Reject
  - published: default
  - link: use-case-transport-reject-relationship
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Reject$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

[Initiating a Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-a-relationship) leads to the creation of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status`.
With this use case, the other involved Identity can reject the pending Relationship with the given Relationship's `id`.
As a result, the `status` of the Relationship changes from `"Pending"` to `"Rejected"`.

## Parameters

- `relationshipId`, the `id` of the Relationship

## On Success

- Rejects the pending Relationship
- Returns the rejected Relationship

## On Failure

- The `relationshipId` does not resolve to a pending Relationship
- You have tried to reject a Relationship created by yourself
