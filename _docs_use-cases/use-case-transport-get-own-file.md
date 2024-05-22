---
# Start automatic generation
permalink: use-case-transport-get-own-file
published: true
title: "Get own File"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF3
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: getFile
  - description:
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
  - api_route_regex: GET /api/v2/Files/Own
  - published: default
  - link: use-case-transport-get-own-file
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
