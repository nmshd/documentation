---
permalink: /use-case-transport-get-relationship-by-address
published: true
title: "Get Relationship by Address"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR4
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: getRelationshipByAddress
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
  - api_route_regex: GET /api/v2/Relationships
  - published: default
  - link: transport/get-relationship-by-address
  - redirect_from:
require:
required_by:
api_route_regex: ^GET /api/v2/Relationships$
---

{% include use-cases/use-case-transport-get-relationship-by-address.md %}
