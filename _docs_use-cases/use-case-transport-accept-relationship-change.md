---
permalink: /use-case-transport-accept-relationship-change
published: true
title: "Accept Relationship Change"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR6
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: acceptRelationshipChange
  - description: Accepts the change with the given 'changeId'. If the change exists but belongs to another relationship, this call will fail and return status 404.
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
  - api_route_regex: PUT /api/v2/Relationships/{id}/Changes/{changeId}/Accept
  - published: default
  - link: transport/accept-relationship-change
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Changes/{changeId}/Accept$
---

{% include use-cases/use-case-transport-accept-relationship-change.md %}
