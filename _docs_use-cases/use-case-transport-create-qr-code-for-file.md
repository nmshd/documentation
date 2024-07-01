---
# Start automatic generation
permalink: use-case-transport-create-qr-code-for-file
published: true
title: "Create QR code for File"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF7
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: createQRCodeForFile
  - description:
  - feature category: Arbitrary large data support
  - tech category: Files
  - status: DONE
  - documentation status: DONE
  - comments: Accept: image/png
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/v2/Files/{idOrReference}
  - published: default
  - link: use-case-transport-create-qr-code-for-file
require:
required_by:
api_route_regex: ^GET /api/v2/Files/{idOrReference}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Creates a QR code for a [File]({% link _docs_integrate/data-model-overview.md %}#file) that corresponds to the given `fileId`.

## Parameters

- `fileId` is the `id` of the File the QR code should be created for.

## On Success

- Returns the created QR code encoded as Base64.

## On Failure

- `fileId` does not resolve to a File.
- `expiresAt` lies in the past.
