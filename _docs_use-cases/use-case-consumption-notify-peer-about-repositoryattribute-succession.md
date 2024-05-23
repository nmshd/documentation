---
# Start automatic generation
permalink: use-case-consumption-notify-peer-about-repositoryattribute-succession
published: true
title: "Notify peer about RepositoryAttribute succession"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA18
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: notifyPeerAboutRepositoryAttributeSuccession
  - description:
  - feature category: Cross-Identity Attribute sharing
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority:
  - complexity:
  - size:
  - created_at:
  - changed_at:
  - api_route_regex: POST /api/v2/Attributes/{attributeId}/NotifyPeer
  - published: default
  - link: use-case-consumption-notify-peer-about-repositoryattribute-succession
require:
required_by:
api_route_regex: ^POST /api/v2/Attributes/{attributeId}/NotifyPeer$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

If you [succeeded a RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-succeed-a-repositoryattribute.md %}), whose previous version you [shared with a peer]({% link _docs_use-cases/use-case-consumption-share-a-repositoryattribute.md %}), you can decide to inform the peer about the succession.
If you do so, the peer will receive a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification) via [Message]({% link _docs_integrate/data-model-overview.md %}#message), which handles the succession of their peer shared [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute).
Also, the associated own shared IdentityAttribute at your side will be succeeded, i.e. a new version of the [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) will be created and the predecessor will be updated to link to this successor in its `succeededBy` property.
Note that it is possible to notify a peer about the succession of an IdentityAttribute you already shared with them, even if you didn't inform them about every previous version.
In this case the `succeeds` field of the newly created LocalAttribute will link to the latest shared version.
Moreover, it is also possible to notify a peer about the succession of an IdentityAttribute, if this in turn is already succeeded again, in case you didn't notify the peer about a newer version, yet.

## Parameters

- `attributeId` of the succeeded RepositoryAttribute
- The Address of the `peer`

## On Success

- The response returns a `predecessor` and a `successor` LocalAttribute, as well as the `notificationId` of the Notification sent to the peer.
- The `predecessor` is an updated version of the own shared IdentityAttribute that was shared with the peer most recently. It has the `succeededBy` field set to the `successor`'s `id`.
- The `successor` is a new own shared IdentityAttribute version with the `content` of the succeeded RepositoryAttribute. Its `succeeds` property links to the `predecessor`.

## On Failure

- The response cannot be created, if the `peer` is unknown.
- The response cannot be created, if the `attributeId` belongs to a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).
- The response cannot be created, if the `attributeId` belongs to an IdentityAttribute with a `shareInfo`.
- The response cannot be created, if you already notified the peer about the succession of the Attribute.
- The response cannot be created, if you haven't shared a version of the Attribute with the peer before. To initially share an IdentityAttribute, use the [ShareIdentityAttribute use-case]({% link _docs_use-cases/use-case-consumption-share-a-repositoryattribute.md %}).
- The response cannot be created, if the parameters are malformed.
