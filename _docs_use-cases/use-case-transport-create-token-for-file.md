---
# Start automatic generation
permalink: use-case-transport-create-token-for-file
published: true
title: "Create Token for File"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF6
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: createTokenForFile
  - description: Creates a `Token` for the `File` with the given `id`.
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
  - api_route_regex: POST /api/v2/Files/{id}/Token
  - published: default
  - link: use-case-transport-create-token-for-file
require:
required_by:
api_route_regex: ^POST /api/v2/Files/{id}/Token$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) for a given file that
corresponds to the given id.

## Parameters

- `fileId` is the id of the File the Token should be created for.
- `expiresAt` is the ISODateTime the Token expires at.
- `ephemeral` indicates if the Token should be ephemeral and thus not be stored and cached on the local database. This is especially useful for Tokens which are created regularly, e.g. for RelationshipTemplates and doesn't need to be stored.

## On Success

- Returns the created `Token`.

## On Failure

- `fileId` does not resolve to a file.
- `expiresAt` lies in the past

{{properties.description}}

{% include properties_list.html %}

Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) for a given file that
corresponds to the given id.

## Parameters

- `fileId` is the id of the File the Token should be created for.
- `expiresAt` is the ISODateTime the Token expires at.
- `ephemeral` indicates if the Token should be ephemeral and thus not be stored and cached on the local database. This is especially useful for Tokens which are created regularly, e.g. for RelationshipTemplates and doesn't need to be stored.

## On Success

- Returns the created `Token`.

## On Failure

- `fileId` does not resolve to a file.
- `expiresAt` lies in the past
