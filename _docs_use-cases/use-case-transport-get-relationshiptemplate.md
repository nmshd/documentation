---
# Start automatic generation
permalink: use-case-transport-get-relationshiptemplate
redirect_from:
  - use-case-transport-get-relationship-template
published: true
title: "Get RelationshipTemplate"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
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
  - link: use-case-transport-get-relationshiptemplate
require:
required_by:
api_route_regex: ^GET /api/v2/RelationshipTemplates/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)
by its `id`.

## Parameters

- `id` of the RelationshipTemplate.

## On Success

- The RelationshipTemplate that corresponds to the `id`.

## On Failure

- The `id` doesn't resolve to a RelationshipTemplate.
