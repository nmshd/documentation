---
# Start automatic generation
permalink: use-case-consumption-execute-a-relationshipattributequery
published: true
title: "Execute a RelationshipAttributeQuery"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA9
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: executeRelationshipAttributeQuery
  - description:
  - feature category: Cross-Identity Attribute sharing
  - tech category: Attributes
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
  - api_route_regex: POST /api/v2/Attributes/ExecuteRelationshipAttributeQuery
  - published: default
  - link: use-case-consumption-execute-a-relationshipattributequery
require:
required_by:
api_route_regex: ^POST /api/v2/Attributes/ExecuteRelationshipAttributeQuery$
# End automatic generation
---

{properties.description}

{% include properties_list.html %}

This use-case is intended to execute an incoming [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) (e.g. received by a ReadAttributeRequestItem) which returns a list of matching [Relationship Attributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).

## Parameters

- The `query` for the RelationshipAttributes as described in the [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery).

## On Success

- Returns the `RelationshipAttributes` as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that match the given query.

## On Failure

- The query was malformed.
