---
# Start automatic generation
permalink: use-case-transport-upload-own-file
published: true
title: "Upload own File"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF1
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: uploadOwnFile
  - description: Uploads a new own file with metadata.
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

This use-case uses a given file outside of enmeshed, encrypts and uploads it to the Backbone and creates a [File]({% link _docs_integrate/data-model-overview.md %}#file) with the respective metadata information for the Identity to access it. The File can from now on be shared by references to other Identities.

## Parameters

- `content` is the to-be-uploaded file content as byte array
- `filename` is the name of the file from the operating system.
- `mimetype` of the respective file
- `expiresAt` is the ISODateTime the File expires.
- `title` of the File
- Optional `description` of the File.

## On Success

- An encrypted File is stored on the Backbone and can be shared by its references
- Only the metadata of the File is stored locally
- Returns the created File

## On Failure

- The parameters are malformed.
- The file size is too big.
