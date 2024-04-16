---
# Start automatic generation
permalink: use-case-consumption-delete-a-third-party-owned-relationshipattribute-and-notify-peer
published: true
title: "Delete a third party owned RelationshipAttribute and notify peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA25
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: deleteThirdPartyOwnedRelationshipAttributeAndNotifyPeer
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
  - api_route_regex:
  - published: default
  - link: use-case-consumption-delete-a-third-party-owned-relationshipattribute-and-notify-peer
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case allows you to delete a third party owned RelationshipAttribute, i.e. a [LocalAttribute]({%link _docs_integrate/data-model-overview.md %}#localattribute) that exists in a Relationship with a peer, but is not owned by you or this peer but by a third party.

## Parameters

- The `attributeId` of the third party owned RelationshipAttribute you want to delete.

## On Success

- The third party owned RelationshipAttribute will be deleted.
- All predecessors of the third party owned RelationshipAttribute will be deleted.
- If the third party owned RelationshipAttribute was succeeded, the `succeeds` property of the successor will be set to undefined.
- A [Notification]({%link _docs_integrate/data-model-overview.md %}#notification) with [ThirdPartyOwnedRelationshipAttributeDeletedByPeerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#thirdpartyownedrelationshipattributedeletedbypeernotificationitem) is sent to the peer of the Attribute, informing them that you deleted the Attribute. Technically, the Attribute of the owner and all predecessors will get a `deletionInfo` with `deletionStatus` `"DeletedByPeer"` and the time of receiving the Notification as `deletionDate`.
- The `notificationId` is returned.

## On Failure

- No Attribute can be deleted if you don't have a LocalAttribute with given `attributeId`.
- No Attribute can be deleted if the Attribute with given `attributeId` is not a third party owned RelationshipAttribute.
