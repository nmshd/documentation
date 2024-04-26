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

{{properties.description}}

{% include properties_list.html %}

Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) for a given [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)

## Parameters

- `fileId` is the id of the File the Token should be created for.
- `expiresAt` is the ISODateTime the Token expires at.
- `ephemeral` indicates if the Token should be ephemeral and thus not be stored and cached on the local database. This is especially useful for Tokens which are created regularly, e.g. for RelationshipTemplates and doesn't need to be stored.

## On Success

- Returns the created `Token`.

## On Failure

- `templateId` does not resolve to a RelationshipTemplate.
- `expiresAt` lies in the past
