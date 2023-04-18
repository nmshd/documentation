---
permalink: /explore/use-case-rr1
published: true
title: "Create Relationship with RelationshipTemplate"
type: use-case
properties:
  - id: RR1
  - layer: Transport
  - facade: RelationshipsFacade
  - function: createRelationship
  - description: Creates a 'Relationship' to the creator of a given relationshipTemplateId. The 'RelationshipTemplate' of the given 'relationshipTemplateId' must come from another identity and must be loaded by 'POST /RelationshipTemplates/Peer' first.
  - feature category: Mutual peer-to-peer relationships
  - tech category: Relationships
  - status: DONE
  - comments:
  - actor: Identity
  - component: Runtime
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link auf demo:
require:
required_by:
---

{% include properties_list.html %}
