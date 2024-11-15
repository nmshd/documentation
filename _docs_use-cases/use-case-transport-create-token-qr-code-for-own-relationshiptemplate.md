---
# Start automatic generation
permalink: use-case-transport-create-token-qr-code-for-own-relationshiptemplate
published: true
title: "Create Token QR code for own RelationshipTemplate"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RT6
  - component: Runtime
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: createTokenQRCodeForOwnTemplate
  - description:
  - feature category: Consent required before any data is shared
  - tech category: RelationshipTemplates
  - status: DONE
  - documentation status: DONE
  - comments: "Accept: image/png"
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
  - link: use-case-transport-create-token-qr-code-for-own-relationshiptemplate
require:
required_by:
api_route_regex: ^POST /api/v2/RelationshipTemplates/Own/{id}/Token$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Creates a QR code for a [Token]({% link _docs_integrate/data-model-overview.md %}#token) of a given [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).

## Parameters

- `templateId` is the `id` of the RelationshipTemplate the Token and its QR code should be created for.
- `expiresAt` is the ISODateTime the Token expires at.
- `forIdentity` can be set to an enmeshed address. If set, only the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) with that `address` can load the Token from the Backbone.

## On Success

- Returns the created QR code, whose content is Base64-encoded.

## On Failure

- `templateId` does not resolve to a RelationshipTemplate.
- `expiresAt` lies in the past.
