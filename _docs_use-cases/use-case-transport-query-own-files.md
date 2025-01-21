---
# Start automatic generation
permalink: use-case-transport-query-own-files
published: true
title: "Query own Files"
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
  - link: use-case-transport-query-own-files
require:
required_by:
api_route_regex: ^GET /api/v2/Files/Own$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves an own File.

## Parameters

- `id` of the File which should be retrieved.

## On Success

- The metadata of the [File]({% link _docs_integrate/data-model-overview.md %}#file) that match the `id`.

## On Failure

- No File corresponds to the `id`.
