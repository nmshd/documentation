---
# Start automatic generation
permalink: use-case-transport-get-or-load-file
published: true
title: "Get or load File"
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
  - function: getOrLoadFile
  - description: Loads a file of another Identity. After it is loaded once, you can retrieve it without the need for the secret key by calling one of the GET-routes.
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
  - link: use-case-transport-get-or-load-file
require:
required_by:
api_route_regex: ^GET /api/v2/Files/{idOrReference}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves a [File]({% link _docs_integrate/data-model-overview.md %}#file) by an `id` or the `reference`. This is usually the case, when a reference to a File was received by a peer (over a Message or by any side channel).

## Paramers

- `id` or `reference` that identify the File.

## On Success

- The File that corresponds to the `id` or the `reference`.

## On Failure

- The given `id` or `reference` does not resolve to a File.
