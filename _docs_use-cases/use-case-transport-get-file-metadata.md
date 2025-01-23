---
# Start automatic generation
permalink: use-case-transport-get-file-metadata
published: true
title: "Get File metadata"
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
  - function: getFile
  - description: Gets the File with the given `id` or `reference`.
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
  - api_route_regex: GET /api/v2/Files/{idOrReference}
  - published: default
  - link: use-case-transport-get-file-metadata
require:
required_by:
api_route_regex: ^GET /api/v2/Files/{idOrReference}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves the metadata information of a [File]({% link _docs_integrate/data-model-overview.md %}#file).
If it is not the metadata information of the File that is of interest, but its actual content, the [File must be downloaded]({% link _docs_use-cases/use-case-transport-download-file.md %}) instead.

## Parameters

- `id` or `truncatedReference` of the File whose metadata should be retrieved.

## On Success

- The metadata of the [File]({% link _docs_integrate/data-model-overview.md %}#file) that matches the `id` or `truncatedReference`.

## On Failure

- No File corresponds to the `id` or `truncatedReference`, respectively.
