---
# Start automatic generation
permalink: use-case-transport-get-relationship-template
published: true
title: "Get Relationship Template"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RT4
  - component: Runtime
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: getRelationshipTemplate
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
  - api_route_regex: GET /api/v2/RelationshipTemplates/{id}
  - published: default
  - link: use-case-transport-get-relationship-template
require:
required_by:
# Start automatic generation
api_route_regex: ^GET /api/v2/RelationshipTemplates/{id}$
---

{% include use-cases/use-case-transport-get-relationship-template.md %}
