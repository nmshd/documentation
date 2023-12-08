---
permalink: /use-case-transport-create-relationship-with-relationshiptemplate
published: true
title: "Create Relationship with RelationshipTemplate"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR1
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: createRelationship
  - description: Creates a 'Relationship' to the creator of a given relationshipTemplateId. The 'RelationshipTemplate' of the given 'relationshipTemplateId' must come from another identity and must be loaded by 'POST /RelationshipTemplates/Peer' first.
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
  - api_route_regex: POST /api/v2/Relationships
  - published: default
  - link: transport/create-relationship-with-relationshiptemplate
require:
required_by:
api_route_regex: ^POST /api/v2/Relationships$
---

{% include use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}
