---
# Start automatic generation
permalink: use-case-transport-upload-own-file
published: true
title: "Upload own File"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF1
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: uploadOwnFile
  - description: Uploads a new own File with metadata (and tags).
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
  - api_route_regex: POST /api/v2/Files/Own
  - published: default
  - link: use-case-transport-upload-own-file
require:
required_by:
api_route_regex: ^POST /api/v2/Files/Own$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case takes a given file outside of enmeshed, encrypts and uploads it to the Backbone and creates a [File]({% link _docs_integrate/data-model-overview.md %}#file) with the respective metadata information for the Identity to access it.
The File can from now on be shared by references to other Identities.
This can be the `reference.truncated` of the File itself, which is used, for example, when [exchanging Files using Attributes]({% link _docs_integrate/exchange-files-using-attributes.md %}), or the `reference.truncated` of a [Token]({% link _docs_integrate/data-model-overview.md %}#token).
In the latter case, the [Token for the File must be created]({% link _docs_use-cases/use-case-transport-create-token-for-file.md %}) first.

## Parameters

- `content` is the to-be-uploaded file content as byte array.
- `filename` is the name of the file from the operating system.
- `mimetype` of the respective file.
- Optionally, `expiresAt` can be specified, which describes the ISODateTime the File expires.
- Optionally, a `title` can be provided for the File.
- Optionally, a `description` can be provided for the File.
- Optionally, `tags` can be provided for the File.

## On Success

- An encrypted File is stored on the Backbone and can be shared by its references.
- Only the metadata of the File is stored locally.
- If `expiresAt` wasn't specified, the expiration date of the File will be set to a default value that corresponds to zero o'clock on the 31st of December, 9999.
- If `title` wasn't provided, it will be set to an empty string `""` as default value.
- The created File is returned.

## On Failure

- The parameters are malformed.
- The file size is too big.
