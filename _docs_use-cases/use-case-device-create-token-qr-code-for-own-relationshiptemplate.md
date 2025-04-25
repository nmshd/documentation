---
# Start automatic generation
permalink: use-case-device-create-token-qr-code-for-own-relationshiptemplate
redirect_from:
  - use-case-transport-create-token-qr-code-for-own-relationshiptemplate
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
  - layer: Device
  - facade: Connector
  - function:
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
  - link: use-case-device-create-token-qr-code-for-own-relationshiptemplate
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
- `forIdentity` can be set to an enmeshed address. If set, only the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) with that `address` can load the Token from the Backbone. If the RelationshipTemplate is already personalized via its `forIdentity` property, the Token created from it must have the same personalization.
- `passwordProtection` can be specified as an object for [PasswordProtection]({% link _docs_integrate/data-model-overview.md %}#passwordprotection) of a Token. If set, only the Identities that know the password specified within the `passwordProtection.password` property of the Token can load it from the Backbone. In addition, the optional property `passwordProtection.passwordIsPin` can be used to configure the UI of the App in case the password is a pin. If the RelationshipTemplate is already password protected via its `passwordProtection` property, the Token created from it must have the same password protection.

## On Success

- Returns the created QR code, whose content is Base64-encoded.

## On Failure

- `templateId` does not resolve to a RelationshipTemplate.
- The RelationshipTemplate is owned by another Identity, which means that the value of its `isOwn` property is `false`.
- `expiresAt` lies in the past.
- The RelationshipTemplate is personalized via its `forIdentity` property and the Token does not have the same personalization via its `forIdentity` property.
- The RelationshipTemplate is password protected via its `passwordProtection` property and the Token does not have the same password protection via its `passwordProtection` property.
- In case of password protection of the Token, a `passwordProtection.password` that does not consist of 4 to 16 digits was specified, but the value of `passwordProtection.passwordIsPin` was nevertheless set to `true`.
