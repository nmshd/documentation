---
# Start automatic generation
permalink: use-case-transport-query-metadata-of-peer-files
published: true
title: "Query metadata of peer Files"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF5
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: getFiles
  - description: Queries metadata of Files owned by any peer.
  - feature category:
  - tech category: Files
  - status: DONE
  - documentation status: DONE
  - comments: Query Files restricted to peer Files
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/v2/Files/Peer
  - published: default
  - link: use-case-transport-query-metadata-of-peer-files
require:
required_by:
api_route_regex: ^GET /api/v2/Files/Peer$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case queries [loaded peer Files]({% link _docs_use-cases/use-case-transport-load-file.md %}).
In contrast, the [Query metadata of own Files]({% link _docs_use-cases/use-case-transport-query-metadata-of-own-files.md %}) use case can be executed to query [uploaded own Files]({% link _docs_use-cases/use-case-transport-upload-own-file.md %}).
To avoid limiting the output quantity in advance, the [Query metadata of Files]({% link _docs_use-cases/use-case-transport-query-metadata-of-files.md %}) use case can be applied.

## Parameters

All parameters are optional. If no parameter is used, all peer [Files]({% link _docs_integrate/data-model-overview.md %}#file) are returned.

- `query` allows to specify the conditions for the returned peer Files. In detail, the following keys may be used:
  - `createdAt` is the ISODateTime the File was created at.
  - `createdBy` is the enmeshed `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that created the File.
  - `description` of the File.
  - `expiresAt` is the ISODateTime the File expires.
  - `filename` is the name of the actual file from the operating system.
  - `filesize` is the size of the respective file in bytes.
  - `mimetype` of the respective file.
  - `title` of the File.

## On Success

- Returns all peer Files that match the `query`.

## On Failure

- The parameters are malformed.
