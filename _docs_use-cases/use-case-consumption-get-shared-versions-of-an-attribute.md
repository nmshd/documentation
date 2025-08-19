---
# Start automatic generation
permalink: use-case-consumption-get-shared-versions-of-an-attribute
redirect_from:
  - /use-case-consumption-get-shared-versions-of-a-repositoryattribute
published: true
title: "Get shared versions of an Attribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA27
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getSharedVersionsOfAttribute
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
  - api_route_regex: GET /api/core/v1/Attributes/{id}/Versions/Shared
  - published: default
  - link: use-case-consumption-get-shared-versions-of-an-attribute
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes/{id}/Versions/Shared$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows you to retrieve a list of shared [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#lcoalattribute) for a given source Attribute.
In case of [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) a list comprising of own shared IdentityAttributes for the specified RepositoryAttribute is returned.
In case of [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) the list contains ThirdPartyRelationshipAttributes you re-shared based on the specified RelationshipAttribute.

## Parameters

- The `attributeId` belonging to a LocalAttribute you would like to know all shared versions of
- Optionally the returned LocalAttributes can be limited to those shared with specific `peers`.
- `onlyLatestVersions` omits succeeded versions such that only the most recent version you shared per peer is returned. In detail, this means that if the `attributeId` given as input belongs to a LocalAttribute, that already has successors you also shared with the peer, only the shared copy corresponding to the most recently shared successor will be returned. By default this is set to be `true`.

## On Success

- A list of shared LocalAttribute versions of the source Attribute belonging to the `attributeId` given as input is returned.
- If `peers` were specified, the list is limited to the entries shared with those peers.
- If `onlyLatestVersions` is disabled, all versions will be returned, even if they already have successors.

## On Failure

- No LocalAttributes can be returned if the `attributeId` correlates to an unknown LocalAttribute.
- No LocalAttributes can be returned if an empty list is provided for `peers`.
- No LocalAttributes can be returned if the parameters are malformed.
