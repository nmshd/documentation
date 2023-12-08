---
permalink: /use-case-transport-get-relationship-by-relationshipid
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
  - api_route_regex: GET /api/v2/Relationships/{id}
  - published: default
  - link: transport/get-relationship-by-relationshipid
require:
required_by:
api_route_regex: ^GET /api/v2/Relationships/{id}$
---

{% include use-cases/use-case-transport-get-relationship-by-relationshipid.md %}
