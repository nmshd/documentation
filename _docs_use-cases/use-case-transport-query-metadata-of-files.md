---
# Start automatic generation
permalink: use-case-transport-query-metadata-of-files
redirect_from:
  - use-case-transport-query-files
published: true
title: "Query metadata of Files"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF3
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: getFiles
  - description: Queries metadata of Files.
  - feature category:
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
  - api_route_regex: GET /api/v2/Files
  - published: default
  - link: use-case-transport-query-metadata-of-files
require:
required_by:
api_route_regex: ^GET /api/v2/Files$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case queries [Files]({% link _docs_integrate/data-model-overview.md %}#file) of the Identity regardless of whether it is an [uploaded own File]({% link _docs_use-cases/use-case-transport-upload-own-file.md %}) or a [loaded peer File]({% link _docs_use-cases/use-case-transport-load-file.md %}).
To limit the output quantity accordingly in advance, the [Query metadata of own Files]({% link _docs_use-cases/use-case-transport-query-metadata-of-own-files.md %}) use case or [Query metadata of peer Files]({% link _docs_use-cases/use-case-transport-query-metadata-of-peer-files.md %}) use case can be applied instead.

## Parameters

All parameters are optional. If no parameter is used, all Files are returned.

- `query` allows to specify the conditions for the returned Files. In detail, the following keys may be used:
  - `createdAt` is the ISODateTime the File was created at.
  - `createdBy` is the enmeshed `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that created the File.
  - `createdByDevice` is the `id` of the Device that created the File.
  - `description` of the File.
  - `expiresAt` is the ISODateTime the File expires.
  - `filename` is the name of the actual file from the operating system.
  - `filesize` is the size of the respective file in bytes.
  - `mimetype` of the respective file.
  - `title` of the File.
  - `isOwn` indicates if the File is owned by you.
  - `tags` of the File.

## On Success

- Returns all Files that match the `query`.

## On Failure

- The parameters are malformed.
