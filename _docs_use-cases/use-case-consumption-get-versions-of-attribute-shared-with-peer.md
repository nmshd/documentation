---
# Start automatic generation
permalink: use-case-consumption-get-versions-of-attribute-shared-with-peer
redirect_from:
  - /use-case-consumption-get-shared-versions-of-an-attribute
published: true
title: "Get versions of Attribute shared with peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA14
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getVersionsOfAttributeSharedWithPeer
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
  - link: use-case-consumption-get-versions-of-attribute-shared-with-peer
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes/{id}/Versions/Shared$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows you to retrieve a list of [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) versions shared with a given peer.
Since only the LocalAttribute subtypes [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute), [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute), and [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute) represent forwardable Attributes, a list of shared versions can only be retrieved for such LocalAttributes.

## Parameters

- The `attributeId` belonging to a LocalAttribute you would like to know the versions shared with a specific peer of.
- The returned LocalAttribute versions are limited to those shared with a specific `peer`.
- `onlyLatestVersions` omits succeeded versions such that only the most recent version you shared with the peer is returned.
  In detail, this means that if the `attributeId` given as input belongs to a LocalAttribute that already has successors you also shared with the peer, only the most recently shared successor will be returned.
  By default this is set to be `true`.

## On Success

- A list of versions of the LocalAttribute belonging to the given `attributeId` shared with the specified `peer` is returned.
- If `onlyLatestVersions` is disabled, all versions shared with the peer will be returned, even if they already have successors.

## On Failure

- No LocalAttributes can be returned if the `attributeId` correlates to an unknown LocalAttribute.
- No LocalAttributes can be returned if the `attributeId` doesn't belong to an OwnIdentityAttribute, an OwnRelationshipAttribute, or a PeerRelationshipAttribute.
- No LocalAttributes can be returned if the parameters are malformed.
