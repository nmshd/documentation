---
# Start automatic generation
permalink: use-case-transport-terminate-relationship
published: true
title: "Terminate Relationship"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR10
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: terminateRelationship
  - description: Terminates the Relationship with the given `relationshipId`.
  - feature category: Mutual peer-to-peer Relationships
  - tech category: Relationships
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority:
  - complexity:
  - size:
  - created_at:
  - changed_at:
  - api_route_regex: PUT /api/v2/Relationships/{id}/Terminate
  - published: default
  - link: use-case-transport-terminate-relationship
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Terminate$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Terminates the Relationship [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.

## Parameters

- `relationshipId`, the id of the Relationship

## On Success

- Terminates the Relationship
- Returns the terminated Relationship

## On Failure

- The `relationshipId` does not resolve to an active Relationship
