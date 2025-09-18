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
  - api_route_regex: PUT /api/core/v1/Relationships/{id}/Accept
  - published: default
  - link: use-case-transport-accept-relationship
require:
required_by:
api_route_regex: ^PUT /api/core/v1/Relationships/{id}/Accept$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

[Initiating a Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-a-relationship) leads to the creation of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status`.
With this use case, the other involved Identity can accept the pending Relationship with the given Relationship's `id`.
As a result, the `status` of the Relationship changes from `"Pending"` to `"Active"`.

## Parameters

- `relationshipId`, the `id` of the Relationship

## On Success

- Accepts the pending Relationship
- Returns the accepted Relationship

## On Failure

- The `relationshipId` does not resolve to a pending Relationship
- You have tried to accept a Relationship created by yourself
