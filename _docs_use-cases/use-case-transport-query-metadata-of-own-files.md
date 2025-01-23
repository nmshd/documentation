---
# Start automatic generation
permalink: use-case-transport-query-metadata-of-own-files
published: true
title: "Query metadata of own Files"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF4
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: getFiles
  - description: Queries metadata of own Files.
  - feature category:
  - tech category: Files
  - status: DONE
  - documentation status: DONE
  - comments: Query Files restricted to own Files
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/v2/Files/Own
  - published: default
  - link: use-case-transport-query-metadata-of-own-files
require:
required_by:
api_route_regex: ^GET /api/v2/Files/Own$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case queries [uploaded own Files]({% link _docs_use-cases/use-case-transport-upload-own-file.md %}).
In contrast, the [Query metadata of peer Files]({% link _docs_use-cases/use-case-transport-query-metadata-of-peer-files.md %}) use case can be executed to query [loaded peer Files]({% link _docs_use-cases/use-case-transport-load-file.md %}).
To avoid limiting the output quantity in advance, the [Query metadata of Files]({% link _docs_use-cases/use-case-transport-query-metadata-of-files.md %}) use case can be applied.

## Parameters

All parameters are optional. If no parameter is given, all own [Files]({% link _docs_integrate/data-model-overview.md %}#file) are returned.

- `createdAt` is the ISODateTime the File was created at.
- `createdByDevice` is the `id` of the Device that created the File.
- `description` of the File.
- `expiresAt` is the ISODateTime the File expires.
- `filename` is the name of the actual file from the operating system.
- `filesize` is the size of the respective file in bytes.
- `mimetype` of the respective file.
- `title` of the File.

## On Success

- Returns all own Files that match the `query`.

## On Failure

- The parameters are malformed.
