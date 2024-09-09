---
# Start automatic generation
permalink: use-case-transport-revoke-relationship
published: true
title: "Revoke Relationship"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR8
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: revokeRelationship
  - description: Revokes the Relationship with the given `relationshipId`.
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
  - api_route_regex: PUT /api/v2/Relationships/{id}/Revoke
  - published: default
  - link: use-case-transport-revoke-relationship
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Revoke$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

[Initiating a Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-a-relationship) leads to the creation of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status`.
With this use case, the initiator of the Relationship can revoke the pending Relationship with the given [Relationship's]({% link _docs_integrate/data-model-overview.md %}#relationship) `id`.
As a result, the `status` of the Relationship changes from `"Pending"` to `"Revoked"`.

## Parameters

- `relationshipId`, the `id` of the Relationship

## On Success

- Revokes the pending Relationship
- Returns the revoked Relationship

## On Failure

- The `relationshipId` does not resolve to a pending Relationship
- You have tried to revoke a Relationship not created by yourself
