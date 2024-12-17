---
# Start automatic generation
permalink: use-case-transport-create-token-for-file
published: true
title: "Create Token for File"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF6
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: createTokenForFile
  - description: Creates a `Token` for the `File` with the given `id`.
  - feature category: Arbitrary large data support
  - tech category: Files
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
  - api_route_regex: POST /api/v2/Files/{id}/Token
  - published: default
  - link: use-case-transport-create-token-for-file
require:
required_by:
api_route_regex: ^POST /api/v2/Files/{id}/Token$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) for a given [File]({% link _docs_integrate/data-model-overview.md %}#file) that corresponds to the given `fileId`.

## Parameters

- `fileId` is the `id` of the File the Token should be created for.
- Optionally, `expiresAt` can be specified, which describes the ISODateTime the Token expires at.
- Optionally, `ephemeral` can be specified, which indicates if the Token should be ephemeral and thus not be stored and cached on the local database. This is especially useful for Tokens which are created regularly, e.g. for [RelationshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) and don't need to be stored.
- Optionally, `forIdentity` can be specified, which names the `address` of the only [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that will be able to load the Token from the Backbone.
- Optionally, `passwordProtection` can be specified as an [object for password protection of a Token]({% link _docs_integrate/data-model-overview.md %}#object-for-password-protection-of-token). If set, only the Identities that know the password specified within the `passwordProtection.password` property of the Token can load it from the Backbone. In addition, the optional property `passwordProtection.passwordIsPin` can be used to specialize the UI of the App in case the password is a pin.

## On Success

- Returns the created `Token`.

## On Failure

- `fileId` does not resolve to a File.
- `expiresAt` lies in the past.
- In case of password protection of the Token, a `passwordProtection.password` that does not consist of 4 to 16 digits was specified, but the value of `passwordProtection.passwordIsPin` was nevertheless set to `true`.
