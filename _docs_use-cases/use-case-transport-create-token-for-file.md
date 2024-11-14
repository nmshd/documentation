---
# Start automatic generation
permalink: use-case-transport-create-token-for-file
published: true
title: "Create Token for File"
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

Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) for a given [File]({% link _docs_integrate/data-model-overview.md %}#file) that corresponds to the given `fileId`.

## Parameters

- `fileId` is the `id` of the File the Token should be created for.
- Optionally, `expiresAt` can be specified, which describes the ISODateTime the Token expires at.
- Optionally, `ephemeral` can be specified, which indicates if the Token should be ephemeral and thus not be stored and cached on the local database. This is especially useful for Tokens which are created regularly, e.g. for [RelationshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) and don't need to be stored.
- Optionally, `forIdentity` can be specified, which names the Address of the only Identity that will be able to load the Token from the Backbone.

## On Success

- Returns the created `Token`.

## On Failure

- `fileId` does not resolve to a File.
- `expiresAt` lies in the past.
