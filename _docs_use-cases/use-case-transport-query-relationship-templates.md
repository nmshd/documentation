---
permalink: /use-case-transport-query-relationship-templates
published: true
title: "Query Relationship Templates"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RT3
  - component: Runtime
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: getRelationshipTemplates
  - description:
  - feature category: Consent required before any data is shared
  - tech category: RelationshipTemplates
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
  - api_route_regex: GET /api/v2/RelationshipTemplates
  - published: default
  - link: transport/query-relationship-templates
  - redirect_from:
require:
required_by:
api_route_regex: ^GET /api/v2/RelationshipTemplates$
---

{% include use-cases/use-case-transport-query-relationship-templates.md %}
