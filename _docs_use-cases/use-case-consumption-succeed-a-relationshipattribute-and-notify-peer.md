---
# Start automatic generation
permalink: use-case-consumption-succeed-a-relationshipattribute-and-notify-peer
published: true
title: "Succeed a RelationshipAttribute and notify peer"
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
  - function: succeedRelationshipAttributeAndNotifyPeer
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
  - api_route_regex: POST /api/core/v1/Attributes/{predecessorId}/Succeed
  - published: default
  - link: use-case-consumption-succeed-a-relationshipattribute-and-notify-peer
require:
required_by:
api_route_regex: ^POST /api/core/v1/Attributes/{predecessorId}/Succeed$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows the owner to update a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), while automatically handling the coherent versioning at both your and your peer's side.
[Succeeding an OwnRelationshipAttribute]({% link _docs_integrate/update-attributes-by-succession.md %}#succeeding-own-relationshipattributes), a new [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) with the updated `content` will be created at your side.
In its `succeeds` property it links to the predecessing version, which in turn is also updated and links to the newly created version in its `succeededBy` property.
Thus, a doubly linked list is established, ensuring every version to have not more that one predecessor or successor.
Once the succession at your side is completed, a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification) is sent automatically to your peer.
It triggers the succession of their [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute) in the same manner as described above, such that both your succession chains match.

## Parameters

- `predecessorId` is the `id` of the OwnRelationshipAttribute.
- The updated `successorContent` limited to the `value` property of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that may be changed by a succession.

## On Success

- The response returns a `predecessor` and a `successor` OwnRelationshipAttribute, as well as the `notificationId` of the Notification sent to the peer.
- The `predecessor` is an updated version of the OwnRelationshipAttribute, having the `succeededBy` field set to the `id` of the `successor`.
- The `successor` is a new OwnRelationshipAttribute version with the specified `successorContent`.
  Its `succeeds` property links to the `predecessor`.

## On Failure

- The response cannot be created if the `predecessorId` doesn't belong to a valid OwnRelationshipAttribute.
- The response cannot be created if the OwnRelationshipAttribute belonging to the `predecessorId` already has a successor.
- The response cannot be created if the OwnRelationshipAttribute belonging to the `predecessorId` has a `deletionInfo` with `"DeletedByRecipient"` as `deletionInfo.deletionStatus`.
- The response cannot be created if the parameters are malformed.
