---
permalink: /explore/use-case-rr6
published: true
title: "Accept Relationship Change"
type: use-case
properties:
  - id: RR6
  - layer: Transport
  - facade: RelationshipsFacade
  - function: acceptRelationshipChange
  - description: Accepts the change with the given 'changeId'. If the change exists but belongs to another relationship, this call will fail and return status 404.
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
