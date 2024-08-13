---
# Start automatic generation
permalink: use-case-consumption-get-shared-versions-of-a-repositoryattribute
published: true
title: "Get shared versions of a RepositoryAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA20
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getSharedVersionsOfRepositoryAttribute
  - description:
  - feature category: Cross-Identity Attribute sharing
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments: deprecated, will be removed with v5
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/v2/Attributes/{id}/Versions/Shared
  - published: default
  - link: use-case-consumption-get-shared-versions-of-a-repositoryattribute
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/{id}/Versions/Shared$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is deprecated and will be removed with the upcoming major release.
Please use [Get shared versions of an Attribute]({% link _docs_use-cases/use-case-consumption-get-shared-versions-of-an-attribute.md %}) instead.
{: .notice--warning}

This use case allows you to retrieve a list of [own shared IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) for a specified RepositoryAttribute.

## Parameters

- The `attributeId` belonging to a RepositoryAttribute you would like to know all shared versions of
- Optionally the returned [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) can be limited to those shared with specific `peers`.
- `onlyLatestVersions` omits succeeded versions such that only the most recent version you shared per peer is returned. In detail, this means that if the `attributeId` given as input belongs to a LocalAttribute, that already has successors you also shared with the peer, only the shared copy corresponding to the most recently shared successor will be returned. By default this is set to be `true`.

## On Success

- A list of own shared IdentityAttribute versions of the RepositoryAttribute given as input is returned.
- If `peers` were specified, the list is limited to the entries shared with those peers.
- If `onlyLatestVersions` is disabled, all versions will be returned, even if they already have successors.

## On Failure

- No LocalAttributes can be returned if the `attributeId` correlates to an unknown LocalAttribute.
- No LocalAttributes can be returned if the `attributeId` correlates to a RelationshipAttribute.
- No LocalAttributes can be returned if the `attributeId` correlates to an own shared or peer shared IdentityAttribute.
- No LocalAttributes can be returned if an empty list is provided for `peers`.
- No LocalAttributes can be returned if the parameters are malformed.
