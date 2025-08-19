---
# Start automatic generation
permalink: use-case-transport-regenerate-file-ownership-token
published: true
title: "Regenerate File Ownership Token"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF12
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: regenerateFileOwnershipToken
  - description: Regenerates a new ownershipToken and unlocks the File.
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
  - api_route_regex: PATCH /api/core/v1/Files/{id}/RegenerateOwnershipToken
  - published: default
  - link: use-case-transport-regenerate-file-ownership-token
require:
required_by:
api_route_regex: ^PATCH /api/core/v1/Files/{id}/RegenerateOwnershipToken$
# End automatic generation
---

This use case regenerates the `ownershipToken` of a [File]({% link _docs_integrate/data-model-overview.md %}#file).

## Parameters

- `id` of the File.

## On Success

- A new `ownershipToken` is generated for the File.
- The ownership of the File is unlocked, meaning that it is possible to claim the ownership of the File with the new `ownershipToken`.
- The corresponding indicator `ownershipIsLocked` is set to undefined.
- The updated File is returned.

## On Failure

- The parameters are malformed.
- There was no File found with the specified `id`.
- The use case was called by an Identity who is not the owner of the File.
