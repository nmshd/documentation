---
# Start automatic generation
permalink: use-case-device-create-token-qr-code-for-file
redirect_from:
  - use-case-transport-create-token-qr-code-for-file
published: true
title: "Create Token QR code for File"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF10
  - component: Connector
  - layer: Device
  - facade: Connector
  - function:
  - description: Creates a Token QR code for the File with the given `id`. This Token can be personalized or password protected.
  - feature category: Arbitrary large data support
  - tech category: Files
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
  - api_route_regex: POST /api/v2/Files/{id}/Token
  - published: default
  - link: use-case-device-create-token-qr-code-for-file
require:
required_by:
api_route_regex: ^POST /api/v2/Files/{id}/Token$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Creates a QR code for a [Token]({% link _docs_integrate/data-model-overview.md %}#token) of a [File]({% link _docs_integrate/data-model-overview.md %}#file) that corresponds to the given `fileId`.

## Parameters

- `fileId` is the `id` of the File the Token and its QR code should be created for.
- Optionally, `expiresAt` can be specified, which describes the ISODateTime the Token expires at.
- Optionally, `forIdentity` can be specified, which names the `address` of the only [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that will be able to load the Token from the Backbone.
- Optionally, `passwordProtection` can be specified as an object for [PasswordProtection]({% link _docs_integrate/data-model-overview.md %}#passwordprotection) of a Token. If set, only the Identities that know the password specified within the `passwordProtection.password` property of the Token can load it from the Backbone. In addition, the optional property `passwordProtection.passwordIsPin` can be used to configure the UI of the App in case the password is a pin.

## On Success

- Returns the created QR code, whose content is Base64-encoded.

## On Failure

- `fileId` does not resolve to a File.
- `expiresAt` lies in the past.
- In case of password protection of the Token, a `passwordProtection.password` that does not consist of 4 to 16 digits was specified, but the value of `passwordProtection.passwordIsPin` was nevertheless set to `true`.
