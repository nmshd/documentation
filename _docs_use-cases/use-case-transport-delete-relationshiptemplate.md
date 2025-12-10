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

{{properties.description}}

{% include properties_list.html %}

This use case allows you to delete a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).

## Parameters

- `id` of the RelationshipTemplate that should be deleted.

## On Success

- The RelationshipTemplate is deleted locally.
- If `isOwn` of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) is `true`, the RelationshipTemplate will be deleted from the Backbone, too.

## On Failure

- No RelationshipTemplate can be deleted if there is no RelationshipTemplate that corresponds to the given `id`.
