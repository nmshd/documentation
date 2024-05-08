---
# Start automatic generation
permalink: use-case-transport-download-file
published: true
title: "Download File"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF5
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: downloadFile
  - description: Downloads the file with the given `id`.
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
  - api_route_regex: GET /api/v2/Files/{id}/Download
  - published: default
  - link: use-case-transport-download-file
require:
required_by:
api_route_regex: ^GET /api/v2/Files/{id}/Download$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Download the File's binary content that corresponds to the `fileId`. As the File is not stored/cached within the Connector, the encrypted File is downloaded from the Backbone, decrypted and returned every time this use case is called.

## Parameters

- `id` of the File.

## On Success

- Downloads the binary content of the File that corresponds to the `id`.

## On Failure

- There is no File with the given `id`.
- The File is expired on the Backbone.
