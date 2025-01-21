---
# Start automatic generation
permalink: use-case-transport-load-peer-file
redirect_from:
  - use-case-transport-get-or-load-file
published: true
title: "Load peer File"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF6
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: getOrLoadFile
  - description: Loads a File of another Identity with the given `reference` of the File or of a Token of the File. After it is loaded once, you can retrieve it by calling one of the GET routes.
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
  - api_route_regex: POST /api/v2/Files/Peer
  - published: default
  - link: use-case-transport-load-peer-file
require:
required_by:
api_route_regex: ^POST /api/v2/Files/Peer$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves a [File]({% link _docs_integrate/data-model-overview.md %}#file) by an `id` or the `reference`. This is usually the case, when a reference to a File was received by a peer (over a Message or by any side channel).

## Parameters

- `id` or `reference` that identify the File.
- The `password` if the File is to be loaded from a `reference` to a [Token]({% link _docs_integrate/data-model-overview.md %}#token) that is password protected via its `passwordProtection` property.

## On Success

- The File that corresponds to the `id` or the `reference`.

## On Failure

- The given `id` or `reference` does not resolve to a File.
- The File is to be loaded from a `reference` to a Token that is personalized for a different [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) via its `forIdentity` property.
- No `password` or an incorrect `password` was entered in case of a File that is to be loaded from a `reference` to a password protected Token.
