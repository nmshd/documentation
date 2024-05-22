---
# Start automatic generation
permalink: use-case-consumption-execute-a-thirdpartyrelationshipattributequery
published: true
title: "Execute a ThirdPartyRelationshipAttributeQuery"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA10
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: executeThirdPartyRelationshipAttributeQuery
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
  - api_route_regex: POST /api/v2/Attributes/ExecuteThirdPartyRelationshipAttributeQuery
  - published: default
  - link: use-case-consumption-execute-a-thirdpartyrelationshipattributequery
require:
required_by:
api_route_regex: ^POST /api/v2/Attributes/ExecuteThirdPartyRelationshipAttributeQuery$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to execute an incoming [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery)
(e.g. received by a ReadAttributeRequestItem) which returns a list of matching
[Relationship Attributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute)
of another peer.

## Parameters

- The `query` for the RelationshipAttributes as described in the [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery).

## On Success

- Returns the `RelationshipAttributes` as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that match the given query.

## On Failure

- The query is malformed.
