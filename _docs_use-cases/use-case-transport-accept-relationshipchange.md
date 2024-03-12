---
# Start automatic generation
permalink: use-case-transport-accept-relationshipchange
redirect_from:
  - use-case-transport-accept-relationship-change
published: true
title: "Accept RelationshipChange"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR6
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: acceptRelationshipChange
  - description: Accepts the change with the given `changeId`. If the change exists but belongs to another relationship, this call will fail and return status 404.
  - feature category: Mutual peer-to-peer relationships
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
  - api_route_regex: PUT /api/v2/Relationships/{id}/Changes/{changeId}/Accept
  - published: default
  - link: use-case-transport-accept-relationshipchange
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Changes/{changeId}/Accept$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Accepts a [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipChange) with the given changeId.

## Parameters

- `relationshipId` the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)'s id which should be changed by the RelationshipChange
- `changeId` the RelationshipChange's id
- `content` a possible answer to the respective RelationshipChange which the peer can fetch

## On Success

- The RelationshipChange is accepted and the given `content` made available for the peer.
- Returns the changed [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)

## On Failure

- There is no such Relationship or RelationshipChange.
- The `changeId` is not related to the `relationshipId`.

{{properties.description}}

{% include properties_list.html %}

Accepts a [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipChange) with the given changeId.

## Parameters

- `relationshipId` the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)'s id which should be changed by the RelationshipChange
- `changeId` the RelationshipChange's id
- `content` a possible answer to the respective RelationshipChange which the peer can fetch

## On Success

- The RelationshipChange is accepted and the given `content` made available for the peer.
- Returns the changed [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)

## On Failure

- There is no such Relationship or RelationshipChange.
- The `changeId` is not related to the `relationshipId`.
