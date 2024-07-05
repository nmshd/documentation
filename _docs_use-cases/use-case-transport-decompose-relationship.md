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
  - id: RR14
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
  - api_route_regex: PUT /api/v2/Relationships/{id}/Decompose
  - published: default
  - link: use-case-transport-decompose-relationship
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Decompose$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Decomposes the terminated [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.

## Parameters

- `relationshipId`, the id of the Relationship

## On Success

- Deletes the Relationship and the communication history from the Connector/App

## On Failure

- The `relationshipId` does not resolve to a terminated Relationship
