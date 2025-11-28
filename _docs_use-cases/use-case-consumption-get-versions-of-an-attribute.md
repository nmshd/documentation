---
# Start automatic generation
permalink: use-case-consumption-get-versions-of-an-attribute
published: true
title: "Get versions of an Attribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA13
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getVersionsOfAttribute
  - description:
  - feature category:
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
  - api_route_regex: GET /api/core/v1/Attributes/{id}/Versions
  - published: default
  - link: use-case-consumption-get-versions-of-an-attribute
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes/{id}/Versions$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

[Succeeding an Attribute]({% link _docs_integrate/update-attributes-by-succession.md %}) allows you to update its `content`, while keeping all versions for a coherent history.
This use case allows you to retrieve a list of all those versions of the succession chain for a specified [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute).

## Parameters

- The `attributeId` belonging to a LocalAttribute you would like to know all versions of.

## On Success

- If the `attributeId` refers to an [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute), a list of all versions of this OwnIdentityAttribute will be returned.
- If the `attributeId` refers to a [PeerIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute), a list of all versions of that Attribute received from the peer will be returned.
- If the `attributeId` refers to an [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) or a [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute), a list of all versions of this OwnRelationshipAttribute or PeerRelationshipAttribute will be returned.
- If the `attributeId` refers to a [ThirdPartyRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattribute), a list of all versions of that Attribute received from the peer will be returned.

## On Failure

- No Attributes can be returned if the `attributeId` doesn't belong to a valid LocalAttribute.
