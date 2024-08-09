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
  - api_route_regex: PUT /api/v2/Relationships/{id}/Decompose
  - published: default
  - link: use-case-transport-decompose-relationship
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Decompose$
# End automatic generation
---
