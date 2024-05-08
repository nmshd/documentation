---
# Start automatic generation
permalink: use-case-consumption-delete-a-peer-shared-attribute-and-notify-peer
published: true
title: "Delete a peer shared Attribute and notify peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA24
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: deletePeerSharedAttributeAndNotifyPeer
  - description:
  - feature category: Cross-identity attribute sharing
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
  - api_route_regex: DELETE /api/v2/Attributes/Peer/Shared/{id}
  - published: default
  - link: use-case-consumption-delete-a-peer-shared-attribute-and-notify-peer
require:
required_by:
api_route_regex: ^DELETE /api/v2/Attributes/Peer/Shared/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case allows you to delete a peer shared Attribute, i.e. a [LocalAttribute]({%link _docs_integrate/data-model-overview.md %}#localattribute) that a peer owns and has shared with you.

## Parameters

- The `attributeId` of the peer shared Attribute you want to delete.

## On Success

- The peer shared Attribute will be deleted.
- All predecessors of the peer shared Attribute will be deleted.
- If the peer shared Attribute was succeeded, the `succeeds` property of the successor will be set to undefined.
- If the `attributeId` relates to a [RelationshipAttribute]({%link _docs_integrate/data-model-overview.md %}#relationshipattribute) and there are shared copies of the peer shared RelationshipAttribute or potential predecessors of it, the `shareInfo.sourceAttribute` of those peer shared ThirdPartyRelationshipAttributes will be set to undefined.
- A [Notification]({%link _docs_integrate/data-model-overview.md %}#notification) with a [PeerSharedAttributeDeletedByPeerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#peersharedattributedeletedbypeernotificationitem) is sent to the owner of the Attribute, informing them that you deleted their Attribute. Technically, the own shared Attribute of the owner and all predecessors will get a `deletionInfo` with `deletionStatus` `"DeletedByPeer"` and the time of receiving the Notification as `deletionDate`.
- The `notificationId` is returned.

## On Failure

- No Attribute can be deleted if you don't have a LocalAttribute with given `attributeId`.
- No Attribute can be deleted if the Attribute with given `attributeId` is not a peer shared Attribute.
