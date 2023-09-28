---
permalink: /use-case-transport-reject-relationship-change
published: true
title: "Reject Relationship Change"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR7
  - layer: Transport
  - facade: RelationshipsFacade
  - function: rejectRelationshipChange
  - description: Rejects the change with the given 'changeId'. If the change exists but belongs to another relationship, this call will fail and return status 404.
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
  - link: transport/reject-relationship-change
require:
required_by:
---

{% include use-cases/use-case-transport-reject-relationship-change.md %}
