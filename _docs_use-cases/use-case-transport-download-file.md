---
# Start automatic generation
permalink: use-case-transport-download-file
published: true
title: "Download File"
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
  - function: downloadFile
  - description: Downloads the File with the given `id`.
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
  - api_route_regex: GET /api/core/v1/Files/{id}/Download
  - published: default
  - link: use-case-transport-download-file
require:
required_by:
api_route_regex: ^GET /api/core/v1/Files/{id}/Download$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows to download the [File's]({% link _docs_integrate/data-model-overview.md %}#file) binary content that corresponds to the `fileId`.
As the File is not stored within the Connector, the encrypted File is downloaded from the Backbone, decrypted and returned every time this use case is called.
An [uploaded own File]({% link _docs_use-cases/use-case-transport-upload-own-file.md %}) can be downloaded by this use case in any case.
However, a File from a peer must first be [loaded]({% link _docs_use-cases/use-case-transport-load-file.md %}) before its actual content can be downloaded.

## Parameters

- `id` of the File.

## On Success

- Downloads the binary content of the File that corresponds to the `id`.

## On Failure

- There is no File with the given `id`.
- The File is expired on the Backbone.
