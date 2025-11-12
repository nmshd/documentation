---
# Start automatic generation
permalink: use-case-consumption-get-peer-attributes
redirect_from:
  - /use-case-consumption-get-peer-shared-attributes
published: true
title: "Get peer Attributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA11
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getPeerAttributes
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
  - api_route_regex: GET /api/core/v1/Attributes/Peer/{peer}
  - published: default
  - link: use-case-consumption-get-peer-attributes
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes/Peer/{peer}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to retrieve Attributes that a peer has shared with the current Identity as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute).
The LocalAttributes can be specified using a complex query.
Since only the LocalAttribute subtypes [PeerIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute), [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute), and [ThirdPartyRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattribute) represent retrieved Attributes, only such LocalAttributes can be fetched through this use case.

## Parameters

- `peer` is the `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that shared the LocalAttributes.
- `query` allows to specify the conditions for the returned LocalAttributes. In detail, the following keys may be used:
  - `createdAt` describes the time when the LocalAttribute was created.
  - The fields of `content` can be used to describe the queried Attribute (either an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute)
    or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute)).
    However, it is not possible to query by `content.owner`, because the owner always refers to the peer.
  - `sourceReference` describes the `id` of the [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) or [LocalNotification]({% link _docs_integrate/data-model-overview.md %}#localnotification) the LocalAttribute was received in.
  - `initialAttributePeer` is a ThirdPartyRelationshipAttribute property which describes the `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) with whom the peer has the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) in which context the source RelationshipAttribute exists.
  - `wasViewedAt` describes the time when the LocalAttribute was firstly viewed.
  - The fields of the `deletionInfo` describe the [ReceivedAttributeDeletionInfo]({% link _docs_integrate/data-model-overview.md %}#receivedattributedeletioninfo) of the LocalAttribute.
- If `hideTechnical` is set to `true`, RelationshipAttributes with `isTechnical` `true` will not be returned.
- Optionally, `onlyLatestVersions` can be disabled, such that in case of [Attribute succession]({% link _docs_integrate/update-attributes-by-succession.md %}) all versions will be returned.

## On Success

- Returns a list of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) shared by the peer that match the query.

## On Failure

- The parameters are malformed.
