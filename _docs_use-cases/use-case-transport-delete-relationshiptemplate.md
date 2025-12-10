---
# Start automatic generation
permalink: use-case-transport-delete-relationshiptemplate
published: true
title: "Delete RelationshipTemplate"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RT8
  - component: Runtime
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: deleteRelationshipTemplate
  - description: Deletes the RelationshipTemplate with the given `id`.
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
  - api_route_regex: DELETE /api/core/v1/RelationshipTemplates/{id}
  - published: default
  - link: use-case-transport-delete-relationshiptemplate
require:
required_by:
api_route_regex: ^DELETE /api/core/v1/RelationshipTemplates/{id}$
# End automatic generation
---
