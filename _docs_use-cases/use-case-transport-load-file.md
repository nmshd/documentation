---
# Start automatic generation
permalink: use-case-transport-load-file
redirect_from:
  - use-case-transport-get-or-load-file
published: true
title: "Load File"
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
  - description: Loads a File of an Identity with the given `reference` of the File or of a Token of the File. After it is loaded once, you can retrieve its metadata by calling one of the GET routes or download its content.
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
  - api_route_regex: POST /api/core/v1/Files/Peer
  - published: default
  - link: use-case-transport-load-file
require:
required_by:
api_route_regex: ^POST /api/core/v1/Files/Peer$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case loads the metadata information of a [File]({% link _docs_integrate/data-model-overview.md %}#file) by a `reference` to it.
This can be the `reference.truncated` of the File itself, which can be obtained from the [File uploader]({% link _docs_use-cases/use-case-transport-upload-own-file.md %}), for example, when [exchanging Files using Attributes]({% link _docs_integrate/exchange-files-using-attributes.md %}), or the `reference.truncated` of a [Token]({% link _docs_integrate/data-model-overview.md %}#token).
In the latter case, the [Token for the File was previously created]({% link _docs_use-cases/use-case-transport-create-token-for-file.md %}).
Loading a File that is owned by another Identity is necessary in order to be able to download the actual content of the File using the [Download File]({% link _docs_use-cases/use-case-transport-download-file.md %}) use case.
If a File that has already been loaded is loaded again or its uploader loads it, this use case, like the [Get File metadata]({% link _docs_use-cases/use-case-transport-get-file-metadata.md %}) use case, simply returns the metadata information of the File.

## Parameters

- `reference` to the File.
- The `password` if the File is to be loaded from a `reference` to a [Token]({% link _docs_integrate/data-model-overview.md %}#token) that is password protected via its `passwordProtection` property.

## On Success

- The File that corresponds to the `reference`.

## On Failure

- The given `reference` does not resolve to a File.
- The File is to be loaded from a `reference` to a Token that is personalized for a different [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) via its `forIdentity` property.
- No `password` or an incorrect `password` was entered in case of a File that is to be loaded from a `reference` to a password protected Token.
