---
# Start automatic generation
permalink: use-case-transport-create-token-for-own-relationshiptemplate
redirect_from:
  - use-case-transport-create-token-for-own-relationship-template
published: true
title: "Create Token for own RelationshipTemplate"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RT7
  - component: Runtime
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: createTokenForOwnTemplate
  - description: Creates a `Token` for the own `RelationshipTemplate` with the given `id`
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
  - api_route_regex: POST /api/v2/RelationshipTemplates/Own/{id}/Token
  - published: default
  - link: use-case-transport-create-token-for-own-relationshiptemplate
require:
required_by:
api_route_regex: ^POST /api/v2/RelationshipTemplates/Own/{id}/Token$
# End automatic generation
---
