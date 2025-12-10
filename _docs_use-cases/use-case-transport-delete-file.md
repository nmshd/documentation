---
# Start automatic generation
permalink: use-case-transport-delete-file
published: true
title: "Delete File"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF11
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: deleteFile
  - description: Deletes the File with the given `id`.
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
  - api_route_regex: DELETE /api/core/v1/Files/{id}
  - published: default
  - link: use-case-transport-delete-file
require:
required_by:
api_route_regex: ^DELETE /api/core/v1/Files/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows you to delete a [File]({% link _docs_integrate/data-model-overview.md %}#file).

## Parameters

- `id` of the File that should be deleted.

## On Success

- The File is deleted locally.
- If `isOwn` of the [File]({% link _docs_integrate/data-model-overview.md %}#file) is `true`, the File will be deleted from the Backbone, too.

## On Failure

- No File can be deleted if there is no File that corresponds to the given `id`.
