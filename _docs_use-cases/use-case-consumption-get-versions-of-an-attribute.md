---
# Start automatic generation
permalink: use-case-consumption-get-versions-of-an-attribute
published: true
title: "Get versions of an Attribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA19
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
  - trigger:
  - precondition:
  - result:
  - priority:
  - complexity:
  - size:
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/v2/Attributes/{id}/Versions
  - published: default
  - link: use-case-consumption-get-versions-of-an-attribute
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/{id}/Versions$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

[Succeeding an Attribute]({% link _docs_integrate/update-attributes-by-succession.md %}) allows you to update its `content`, while keeping all versions for a coherent history.
This use-case allows you to retrieve a list of all those versions of the succession chain for a specified [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute).

## Parameters

- The `attributeId` belonging to a LocalAttribute you would like to know all versions of

## On Success

- If the `attributeId` refers to a RepositoryAttribute, a list of all versions of this RepositoryAttribute will be returned.
- If the `attributeId` refers to an own shared IdentityAttribute, a list of all versions of that Attribute shared with the same peer will be returned.
- If the `attributeId` refers to a peer shared IdentityAttribute, a list of all versions of that Attribute received from the peer will be returned.
- If the `attributeId` refers to a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), a list of all versions of that RelationshipAttribute will be returned.

## On Failure

- No Attributes can be returned, if the `attributeId` doesn't belong to a valid LocalAttribute.
