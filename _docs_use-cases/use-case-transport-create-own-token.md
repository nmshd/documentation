---
# Start automatic generation
permalink: use-case-transport-create-own-token
published: true
title: "Create own Token"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RK1
  - component: Runtime
  - layer: Transport
  - facade: TokensFacade
  - function: createOwnToken
  - description:
  - feature category: Normalized Requests/Responses to and from users
  - tech category: Tokens
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
  - api_route_regex: POST /api/v2/Tokens/Own
  - published: default
  - link: use-case-transport-create-own-token
require:
required_by:
api_route_regex: ^POST /api/v2/Tokens/Own$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) that represents arbitrary encrypted data saved on the Backbone.

## Parameters

- `content` an arbitrary JSON structure of the data to share via the Token.
- `expiresAt` is the ISODateTime the Token expires at.
- `ephemeral` indicates if the Token should be ephemeral and thus not be stored and cached on the local database. This is especially useful for Tokens which are created regularly, e.g. for RelationshipTemplates and doesn't need to be stored.

## On Success

- Returns the created `Token`.

## On Failure

- The `content` is malformed.
- `expiresAt` lies in the past
