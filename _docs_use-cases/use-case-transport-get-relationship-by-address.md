---
# Start automatic generation
permalink: use-case-transport-get-relationship-by-address
published: true
title: "Get Relationship by Address"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR4
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: getRelationshipByAddress
  - description:
  - feature category: Mutual peer-to-peer Relationships
  - tech category: Relationships
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/v2/Relationships
  - published: default
  - link: use-case-transport-get-relationship-by-address
require:
required_by:
api_route_regex: ^GET /api/v2/Relationships$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)
by the Address of a peer.

## Parameters

- `address` of the peer.

## On Success

- The Relationship that was inititated with the `address`.

## On Failure

- There is no Relationship linked to the given `address`.
