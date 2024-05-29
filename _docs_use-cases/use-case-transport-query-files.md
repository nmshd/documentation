---
# Start automatic generation
permalink: use-case-transport-query-files
published: true
title: "Query Files"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF2
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: getFiles
  - description: Queries metadata of files owned by this Connector.
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
  - link: use-case-transport-query-files
require:
required_by:
api_route_regex: ^GET /api/v2/Files$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case queries [Files]({% link _docs_integrate/data-model-overview.md %}#file) of the Identity.

## Parameters

All parameters are optional. If no parameter is given, all Files are returned.

- `createdAt` is the ISODateTime the File was created at.
- `createdBy` is the enmeshed Address of the Identity that created the File.
- `createdByDevice` is the `id` of the Device that created the File.
- `description` of the File.
- `expiresAt` is the ISODateTime the File expires.
- `filename` is the name of the actual file from the operating system.
- `filesize` is the size of the respective file in bytes
- `mimetype` of the respective file
- `title` of the File
- `isOwn` indicates if the File is owned by you.

## On Success

- Returns all [Files]({% link _docs_integrate/data-model-overview.md %}#file) that match the `query`.

## On Failure

- The parameters are malformed.
