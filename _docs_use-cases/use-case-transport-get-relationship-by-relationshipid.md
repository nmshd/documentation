---
# Start automatic generation
permalink: use-case-transport-get-relationship-by-relationshipid
published: true
title: "Get Relationship by RelationshipId"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR3
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: getRelationship
  - description:
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
  - api_route_regex: GET /api/v2/Relationships/{id}
  - published: default
  - link: use-case-transport-get-relationship-by-relationshipid
require:
required_by:
api_route_regex: ^GET /api/v2/Relationships/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)
by its `id`.

## Parameters

- `id` of the Relationship.

## On Success

- The Relationship that corresponds to the `id`.

## On Failure

- The `id` does not resolve to a Relationship.
