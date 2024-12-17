---
# Start automatic generation
permalink: use-case-transport-create-own-token
published: true
title: "Create own Token"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RK1
  - component: Runtime
  - layer: Transport
  - facade: TokensFacade
  - function: createOwnToken
  - description:
  - feature category: Normalized Requests/Responses to and from users
  - tech category: Tokens
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: POST /api/v2/Tokens/Own
  - published: default
  - link: use-case-transport-create-own-token
require:
required_by:
api_route_regex: ^POST /api/v2/Tokens/Own$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) that represents arbitrary encrypted data saved on the Backbone.

## Parameters

- `content` an arbitrary JSON structure of the data to share via the Token.
- `expiresAt` is the ISODateTime the Token expires at.
- `ephemeral` indicates if the Token should be ephemeral and thus not be stored and cached on the local database. This is especially useful for Tokens which are created regularly, e.g. for RelationshipTemplates and doesn't need to be stored.
- `forIdentity` can be set to an enmeshed address. If set, only the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) with that `address` can load the Token from the Backbone.
- Optionally, `passwordProtection` can be specified as an [object for password protection of a Token]({% link _docs_integrate/data-model-overview.md %}#object-for-password-protection-of-token). If set, only the Identities that know the password specified within the `passwordProtection.password` property of the Token can load it from the Backbone. In addition, the optional property `passwordProtection.passwordIsPin` can be used to specialize the UI of the App in case the password is a pin.

## On Success

- Returns the created `Token`.

## On Failure

- The `content` is malformed.
- `expiresAt` lies in the past.
- In case of password protection of the Token, a `passwordProtection.password` that does not consist of 4 to 16 digits was specified, but the value of `passwordProtection.passwordIsPin` was nevertheless set to `true`.
