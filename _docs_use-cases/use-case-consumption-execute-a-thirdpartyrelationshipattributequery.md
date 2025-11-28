---
# Start automatic generation
permalink: use-case-consumption-execute-a-thirdpartyrelationshipattributequery
published: true
title: "Execute a ThirdPartyRelationshipAttributeQuery"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA18
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
  - api_route_regex: POST /api/core/v1/Attributes/ExecuteThirdPartyRelationshipAttributeQuery
  - published: default
  - link: use-case-consumption-execute-a-thirdpartyrelationshipattributequery
require:
required_by:
api_route_regex: ^POST /api/core/v1/Attributes/ExecuteThirdPartyRelationshipAttributeQuery$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to execute an incoming [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery), e.g. received by a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem).
It returns a list of matching [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that exist in the context of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with another peer.

## Parameters

- The `query` for the RelationshipAttributes as described in the [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery).

## On Success

- Returns the RelationshipAttributes as [OwnRelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) or [PeerRelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute) that match the given `query`.
  [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with `private` as `confidentiality` are never returned.

## On Failure

- The `query` is malformed.
