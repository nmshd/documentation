---
permalink: /use-case-transport-reject-relationshipchange
published: true
title: "Reject RelationshipChange"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR7
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: rejectRelationshipChange
  - description: Rejects the change with the given 'changeId'. If the change exists but belongs to another relationship, this call will fail and return status 404.
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
  - api_route_regex: PUT /api/v2/Relationships/{id}/Changes/{changeId}/Reject
  - published: default
  - link: transport/reject-relationshipchange
redirect_from: /use-case-transport-reject-relationship-change
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Changes/{changeId}/Reject$
---

{% include use-cases/use-case-transport-reject-relationshipchange.md %}
