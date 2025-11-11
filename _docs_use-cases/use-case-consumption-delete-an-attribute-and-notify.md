---
# Start automatic generation
permalink: use-case-consumption-delete-an-attribute-and-notify
published: true
title: "Delete an Attribute and notify"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA6
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: deleteAttributeAndNotify
  - description:
  - feature category: Normalized Attributes
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
  - api_route_regex: DELETE /api/core/v1/Attributes/{id}
  - published: default
  - link: use-case-consumption-delete-an-attribute-and-notify
require:
required_by:
api_route_regex: ^DELETE /api/core/v1/Attributes/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows you to delete a [LocalAttribute]({%link _docs_integrate/data-model-overview.md %}#localattribute) and notify the peers it is shared with.

## Parameters

- The `attributeId` of the LocalAttribute you want to delete.

## On Success

- The LocalAttribute will be deleted.
- All predecessors of the LocalAttribute will be deleted.
- If the LocalAttribute was succeeded, the `succeeds` property of the successor will be set to undefined.
- If there are [AttributeForwardingDetails]({%link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) associated with the LocalAttribute belonging to the `attributeId` or a potential predecessors of it, they will be removed as well.
- Any peer you shared the LocalAttribute or a potential predecessor of it with is informed that you deleted it. A [Notification]({%link _docs_integrate/data-model-overview.md %}#notification) with an [OwnAttributeDeletedByOwnerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#ownattributedeletedbyownernotificationitem), a [ForwardedAttributeDeletedByPeerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#forwardedattributedeletedbypeernotificationitem), or a [PeerRelationshipAttributeDeletedByPeerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#peerrelationshipattributedeletedbypeernotificationitem) is sent, depending on the [LocalAttribute]({%link _docs_integrate/data-model-overview.md %}#localattribute) subtype.
  Technically, the LocalAttribute at the peer's side and all predecessors will get a `deletionInfo` with `"DeletedByEmitter"` or `"DeletedByRecipient"` as `deletionStatus` and the time of receiving the Notification as `deletionDate`.
- The `notificationIds` are returned.

## On Failure

- If there is no LocalAttribute with the given `attributeId`, it can't be deleted.
