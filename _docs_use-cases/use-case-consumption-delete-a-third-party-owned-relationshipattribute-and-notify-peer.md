---
# Start automatic generation
permalink: use-case-consumption-delete-a-third-party-owned-relationshipattribute-and-notify-peer
published: true
title: "Delete a third party owned RelationshipAttribute and notify peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA25
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: deleteThirdPartyOwnedRelationshipAttributeAndNotifyPeer
  - description:
  - feature category: Cross-Identity Attribute sharing
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments: deprecated use /use-case-consumption-delete-a-thirdpartyrelationshipattribute-and-notify-peer instead
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: DELETE /api/v2/Attributes/ThirdParty/{id}
  - published: default
  - link: use-case-consumption-delete-a-third-party-owned-relationshipattribute-and-notify-peer
require:
required_by:
api_route_regex: ^DELETE /api/v2/Attributes/ThirdParty/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is deprecated and will be removed in the next major version. Please use the use case [Delete a ThirdPartyRelationshipAttribute and notify peer](use-case-consumption-delete-a-thirdpartyrelationshipattribute-and-notify-peer) instead.
{: .notice--warning}

This use case allows you to delete a ThirdPartyRelationshipAttribute, i.e. a [LocalAttribute]({%link _docs_integrate/data-model-overview.md %}#localattribute) that has the property `shareInfo.thirdPartyAddress` set.

## Parameters

- The `attributeId` of the ThirdPartyRelationshipAttribute you want to delete.

## On Success

- The ThirdPartyRelationshipAttribute will be deleted.
- All predecessors of the ThirdPartyRelationshipAttribute will be deleted.
- If the ThirdPartyRelationshipAttribute was succeeded, the `succeeds` property of the successor will be set to undefined.
- A [Notification]({%link _docs_integrate/data-model-overview.md %}#notification) with a [ThirdPartyRelationshipAttributeDeletedByPeerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributedeletedbypeernotificationitem) is sent to the peer of the Attribute, informing them that you deleted the Attribute. Technically, the Attribute of the peer and all predecessors will get a `deletionInfo` with `deletionStatus` `"DeletedByPeer"` and the time of receiving the Notification as `deletionDate`.
- The `notificationId` is returned.

## On Failure

- No Attribute can be deleted if you don't have a LocalAttribute with given `attributeId`.
- No Attribute can be deleted if the Attribute with given `attributeId` is not a ThirdPartyRelationshipAttribute.
