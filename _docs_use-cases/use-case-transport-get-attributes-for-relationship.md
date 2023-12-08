---
permalink: /use-case-transport-get-attributes-for-relationship
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
  - description: Queries attributes that are related to the given relationship.
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
  - link: transport/get-attributes-for-relationship
require:
required_by:
api_route_regex: ^GET /api/v2/Relationships/{id}/Attributes$
---

{% include use-cases/use-case-transport-get-attributes-for-relationship.md %}
