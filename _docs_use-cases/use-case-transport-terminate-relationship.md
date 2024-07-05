---
# Start automatic generation
permalink: integrate/terminate-relationships
published: true
title: "Terminate Relationships"
type: scenario
toc: true
properties:
  - id: SC115
  - category: Relationships between Identities
  - description: Terminate Relationship Reactivate Relationship (request, accept, reject, revoke) Decompose Relationship
  - customer:
  - component: integrate
  - level:
  - implementation status:
  - documentation status: DONE
  - published:
  - link: terminate-relationships
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Terminates the Relationship [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id..

## Parameters

- `relationshipId`, the id of the Relationship

## On Success

- Terminates the relationship
- Returns the terminated Relationship

## On Failure

- The `relationshipId` does not resolve to an active Relationship
