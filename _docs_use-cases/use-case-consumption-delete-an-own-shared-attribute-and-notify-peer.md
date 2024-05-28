---
# Start automatic generation
permalink: use-case-consumption-delete-an-own-shared-attribute-and-notify-peer
published: true
title: "Delete an own shared Attribute and notify peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA23
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: deleteOwnSharedAttributeAndNotifyPeer
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
  - api_route_regex: DELETE /api/v2/Attributes/Own/Shared/{id}
  - published: default
  - link: use-case-consumption-delete-an-own-shared-attribute-and-notify-peer
require:
required_by:
api_route_regex: ^DELETE /api/v2/Attributes/Own/Shared/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows you to delete an own shared Attribute, i.e. a [LocalAttribute]({%link _docs_integrate/data-model-overview.md %}#localattribute) with a `shareInfo`, that is owned by you.
It is created as a result of sharing the `content` of a RepositoryAttribute with a peer.

## Parameters

- The `attributeId` of the own shared Attribute you want to delete.

## On Success

- The own shared Attribute will be deleted.
- All predecessors of the own shared Attribute will be deleted.
- If the own shared Attribute was succeeded, the `succeeds` property of the successor will be set to undefined.
- If the `attributeId` relates to a [RelationshipAttribute]({%link _docs_integrate/data-model-overview.md %}#relationshipattribute) and there are shared copies of the own shared RelationshipAttribute or potential predecessors of it, the `shareInfo.sourceAttribute` of those own shared ThirdPartyRelationshipAttributes will be set to undefined.
- A [Notification]({%link _docs_integrate/data-model-overview.md %}#notification) with a [OwnSharedAttributeDeletedByOwnerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#ownsharedattributedeletedbyownernotificationitem) is sent to the peer you shared the Attribute with, informing them that you deleted the Attribute. Technically, the peer shared Attribute at the peer's side and all predecessors will get a `deletionInfo` with `deletionStatus` `"DeletedByOwner"` and the time of receiving the Notification as `deletionDate`.
- The `notificationId` is returned.

## On Failure

- No Attribute can be deleted if you don't have a LocalAttribute with given `attributeId`.
- No Attribute can be deleted if the Attribute with given `attributeId` is not an own shared Attribute.
