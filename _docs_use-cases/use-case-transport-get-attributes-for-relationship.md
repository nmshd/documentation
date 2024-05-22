---
# Start automatic generation
permalink: use-case-transport-get-attributes-for-relationship
published: true
title: "Get Attributes for Relationship"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR5
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: getAttributesForRelationship
  - description: Queries Attributes that are related to the given Relationship.
  - feature category: Mutual peer-to-peer relationships
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
  - api_route_regex: GET /api/v2/Relationships/{id}/Attributes
  - published: default
  - link: use-case-transport-get-attributes-for-relationship
require:
required_by:
api_route_regex: ^GET /api/v2/Relationships/{id}/Attributes$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Retrieve all [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattributes) that are related to the given Relationship id.

## Parameters

- `id` of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).
- `hideTechnical` indicates if [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute)
  marked as `isTechnical` should be filtered out.

## On Success

- All [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that are related to the Relationship.

## On Failure

- The `id` did not resolve to a Relationship.
