---
# Start automatic generation
permalink: use-case-consumption-notify-peer-about-ownidentityattribute-succession
redirect_from:
  - /use-case-consumption-notify-peer-about-repositoryattribute-succession
published: true
title: "Notify peer about OwnIdentityAttribute succession"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA22
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: notifyPeerAboutOwnIdentityAttributeSuccession
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
  - api_route_regex: POST /api/core/v1/Attributes/{attributeId}/NotifyPeer
  - published: default
  - link: use-case-consumption-notify-peer-about-ownidentityattribute-succession
require:
required_by:
api_route_regex: ^POST /api/core/v1/Attributes/{attributeId}/NotifyPeer$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

If you [succeeded an OwnIdentityAttribute]({% link _docs_use-cases/use-case-consumption-succeed-an-ownidentityattribute.md %}), whose previous version you [shared with a peer]({% link _docs_use-cases/use-case-consumption-share-an-ownidentityattribute.md %}), you can decide to inform the peer about the succession.
If you do so, the peer will receive a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification) via [Message]({% link _docs_integrate/data-model-overview.md %}#message), which handles the succession of their [PeerIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute).
This means, a new version of the PeerIdentityAttribute will be created and the predecessor will be updated to link to this successor in its `succeededBy` property.
Note that it is possible to notify a peer about the succession of an OwnIdentityAttribute you already shared with them, even if you didn't inform them about every previous version.
In this case, the `succeeds` field of the newly created PeerIdentityAttribute will link to the latest shared version.
Moreover, it is also possible to notify a peer about the succession of an OwnIdentityAttribute if this in turn is already succeeded again, in case you didn't notify the peer about a newer version, yet.

## Parameters

- `attributeId` of the OwnIdentityAttribute successor.
- The address of the `peer`.

## On Success

- The response returns a `predecessor` and a `successor` OwnIdentityAttribute, as well as the `notificationId` of the Notification sent to the peer.
- The `predecessor` is the OwnIdentityAttribute that was shared with the peer most recently.
- The `successor` is the OwnIdentityAttribute successor about which the peer is to be informed.

## On Failure

- The response cannot be created if the `peer` is unknown.
- The response cannot be created if the `attributeId` doesn't belong to an OwnIdentityAttribute.
- The response cannot be created if you already notified the peer about the succession of the OwnIdentityAttribute.
- The response cannot be created if you already shared the OwnIdentityAttribute successor or a newer version with the peer.
- The response cannot be created if you haven't shared any version of the OwnIdentityAttribute with the peer before or if the [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) of the latest previous version you have shared with the peer before have `"DeletedByRecipient"` as `deletionInfo.deletionStatus`.
  To initially share an OwnIdentityAttribute, use the [Share OwnIdentityAttribute use case]({% link _docs_use-cases/use-case-consumption-share-an-ownidentityattribute.md %}).
- The response cannot be created if the parameters are malformed.
