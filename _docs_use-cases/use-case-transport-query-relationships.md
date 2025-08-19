---
# Start automatic generation
permalink: use-case-transport-query-relationships
published: true
title: "Query Relationships"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR2
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: getRelationships
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
  - api_route_regex: GET /api/core/v1/Relationships
  - published: default
  - link: use-case-transport-query-relationships
require:
required_by:
api_route_regex: ^GET /api/core/v1/Relationships$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case queries [Relationships]({% link _docs_integrate/data-model-overview.md %}#relationship) of the Identity.

## Parameters

- `peer` is the enmeshed address of the peer.
- `status` is the status of the Relationship.
- `templateId` is the `id` of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) that was used to initiate the Relationship.

## On Success

- Returns all [Relationships]({% link _docs_integrate/data-model-overview.md %}#relationship) that match the `query`.

## On Failure

- The parameters are malformed.
