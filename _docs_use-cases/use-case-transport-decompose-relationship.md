---
# Start automatic generation
permalink: use-case-transport-decompose-relationship
published: true
title: "Decompose Relationship"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR15
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: decomposeRelationship
  - description: Decomposes the Relationship with the given `relationshipId`.
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
  - api_route_regex: DELETE /api/v2/Relationships/{id}
  - published: default
  - link: use-case-transport-decompose-relationship
require:
required_by:
api_route_regex: ^DELETE /api/v2/Relationships/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

[Decomposes the terminated Relationship]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship) with the given [Relationship's]({% link _docs_integrate/data-model-overview.md %}#relationship) `id`.

## Parameters

- `relationshipId`, the `id` of the Relationship

## On Success

- Deletes the Relationship and data transmitted during it from the Connector

## On Failure

- The `relationshipId` does not resolve to a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Terminated"` or `"DeletionProposed"` as `status`
