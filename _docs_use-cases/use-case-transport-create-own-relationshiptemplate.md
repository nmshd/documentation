---
permalink: /use-case-transport-create-own-relationshiptemplate
published: true
title: "Create own RelationshipTemplate"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RT1
  - component: Runtime
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: createOwnRelationshipTemplate
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
  - api_route_regex: POST /api/v2/RelationshipTemplates/Own
  - published: default
  - link: transport/create-own-relationshiptemplate
  - redirect_from:
require:
required_by:
api_route_regex: ^POST /api/v2/RelationshipTemplates/Own$
---

{% include use-cases/use-case-transport-create-own-relationshiptemplate.md %}
