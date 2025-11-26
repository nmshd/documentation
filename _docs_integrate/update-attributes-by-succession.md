---
# Start automatic generation
permalink: integrate/update-attributes-by-succession
redirect_from:
  - /integrate/updating-identityattributes-of-yourself
  - /integrate/succeeding-attributes-to-update-their-values
published: true
title: "Update Attributes by succession"
type: scenario
toc: true
properties:
  - id: SC053
  - category: Manage Attributes
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: update-attributes-by-succession
require:
required_by:
# End automatic generation
---

The way enmeshed handles updates to your personal data is by succeeding old [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) with new ones.
Instead of simply replacing old data, a completely new Attribute is created which succeeds its predecessor.
Thus, you and your peers are provided with a coherent history of all past versions.
How the Attribute succession works in detail depends on the type of Attribute.

## Succeeding own IdentityAttributes

When talking about [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute), we need to distinguish three cases:

- The Identity maintains an unshared Attribute about itself.
  This IdentityAttribute is stored in the `content` field of an [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute).
  It is created for the Identity's private repository of Attributes.
- When sharing an OwnIdentityAttribute with a peer, associated [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) are created.
- Receiving a shared IdentityAttribute from a peer leads to the creation of a [PeerIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute) with according `content` for the Recipient.

Discussing the succession of IdentityAttributes requires some background knowledge about this differentiation and the behavior of shared Attributes.
Hence, we will look at the process of creating, sharing and succeeding an IdentityAttribute step by step.

### Creating an OwnIdentityAttribute

enmeshed allows you to store data about yourself in the form of [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute).
When [creating an IdentityAttribute]({% link _docs_integrate/create-attributes-for-yourself.md %}), it is not necessary to share it immediately with a peer.
Instead, it will be stored in the `content` property of an [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute).

In the following examples, some properties of the occuring [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) will be omitted if they aren't required for the explanation.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/7bcf7e2c-00cd-471b-9a58-3f3521d129f3" id="5dq.VFpnN6MB"></iframe></div>

### Sharing an OwnIdentityAttribute

Now, in order to [share an OwnIdentityAttribute]({% link _docs_integrate/share-attributes-with-peer.md %}), you need to send an according [Request]({% link _docs_integrate/data-model-overview.md %}#request) to the peer you want to share it with.
If they [accept your Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}), a new [PeerIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute) will be created at the peer's side.
This PeerIdentityAttribute has the same `content` like your [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) and, in addition, defined `peer` and `sourceReference` properties.
They store the address of the `peer` who shared the Attribute with them, i.e. the `address` of your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity), and a reference to the Request that was used to share the Attribute.
Receiving the [Response]({% link _docs_integrate/data-model-overview.md %}#response), [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) associated with your OwnIdentityAttribute will be created at your side.
They store the same `sourceReference` and the peer's address, as well as the `id` of the OwnIdentityAttribute, which was shared, in the field `attributeId`.

Concluding, sharing an IdentityAttribute will create AttributeForwardingDetails for every peer you shared the Attribute with at your side and a PeerIdentityAttribute for each peer at their side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/b23acc1c-2111-4dfa-8f6d-4fe203a6a2b2" id="Yeq.jI1BRTvp"></iframe></div>

### Succeeding an OwnIdentityAttribute

Next, let's consider the case that the `value` of your [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) changes and you want to update it.
To [succeed the OwnIdentityAttribute]({% link _docs_use-cases/use-case-consumption-succeed-an-ownidentityattribute.md %}), a new [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) with the updated `content` will be created.
This successor stores the `id` of the old version, the predecessor, in its `succeeds` property.
The predecessor is updated, too, such that its `succeededBy` property links to the successor.
Consequently, the different versions of an OwnIdentityAttribute created by Attribute successions make up a doubly linked list.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/ce6f5b05-001d-44d4-be3a-f0201b384d36" id="igq.Zo9SfPxR"></iframe></div>

### Notifying a peer about an OwnIdentityAttribute succession

After succeeding an OwnIdentityAttribute, you can check [with which of your peers you have previously shared the succeeded Attribute]({% link _docs_use-cases/use-case-consumption-get-versions-of-attribute-shared-with-peer.md %}) to choose those, you'd like to [notify about the succession]({% link _docs_use-cases/use-case-consumption-notify-peer-about-ownidentityattribute-succession.md %}).
[AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) associated with the successor will be created for each chosen peer.
Then, a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification) is sent to the peers, containing a [PeerAttributeSucceededNotificationItem]({% link _docs_integrate/data-model-overview.md %}#peerattributesucceedednotificationitem).
In the `successorContent` property of the latter the updated IdentityAttribute is transmitted and automatically a likewise succession at the peers' side will be triggered, such that their [PeerIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute) versions replicate the succession chain at your side.
Please note that the Notification is queued if the [Relationship is currently terminated]({% link _docs_integrate/terminate-relationships.md %}#terminate-an-active-relationship) but not yet [decomposed]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship).
It can then only be received and processed if the [Relationship is reactivated]({% link _docs_integrate/terminate-relationships.md %}#reactivate-a-terminated-relationship).
The Notification is also queued if the [peer is currently in deletion]({% link _docs_integrate/delete-identities.md %}#effects-of-identity-deletion-on-relationships) but not yet deleted.
It can then only be received and processed if the peer [cancels its deletion]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/b4eb8903-58fa-453e-8f10-8e3646250497" id="Khq.m5nY-72w"></iframe></div>

## Succeeding own RelationshipAttributes

[RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) are, as the name suggests, always associated with a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).
Thus, it is not possible to have unshared instances of them.
Instead, you and your peer will always each have a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with the same RelationshipAttribute as `content`.
The LocalAttribute of the `owner` is an [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) and the peer's LocalAttribute is a [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute).

### Creating and sharing a RelationshipAttribute

Wanting to [create a RelationshipAttribute]({% link _docs_use-cases/use-case-consumption-create-and-share-a-relationshipattribute.md %}) always involves sharing it directly with a peer.
To this end, a Request containing a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) with the RelationshipAttribute will be created and will be sent to the peer.
Only if the peer accepts this Request, a [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute) with the RelationshipAttribute as `content` will be created at their side and, after you receive their Response, an [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) will be created at your side.
Hence, you and your peer will always have an identical shared RelationshipAttribute, only differing in the `peer` property.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/3c07ae76-d010-45cf-8408-c5b20aad2869" id="ekq..g1qyvSY"></iframe></div>

### Succeeding a RelationshipAttribute and notifying the peer

Equally to IdentityAttributes, again only the `owner` can [succeed a RelationshipAttribute]({% link _docs_use-cases/use-case-consumption-succeed-a-relationshipattribute-and-notify-peer.md %}) to update its `value`.
Doing so, a new version of the [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) will be created at your side.
The `succeeds` property of this OwnRelationshipAttribute links to the old version, whose `succeededBy` property in turn is updated to the `id` of the newly created successor.
Then, a Notification is sent automatically to the peer, which triggers the creation of a new [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute) at their side, such that their PeerRelationshipAttribute versions replicate the succession chain at your side.
Please note that the Notification is queued if the [Relationship is currently terminated]({% link _docs_integrate/terminate-relationships.md %}#terminate-an-active-relationship) but not yet [decomposed]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship).
It can then only be received and processed if the [Relationship is reactivated]({% link _docs_integrate/terminate-relationships.md %}#reactivate-a-terminated-relationship).
Furthermore, the Notification is also queued if the [peer is currently in deletion]({% link _docs_integrate/delete-identities.md %}#effects-of-identity-deletion-on-relationships) but not yet deleted.
It can then only be received and processed if the peer [cancels its deletion]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/875fec45-1dc4-4df3-b173-4d917366aaf9" id="zlq.Yjqk0Mu4"></iframe></div>

## What's next?

As we have seen, succeeding an Attribute allows you to mark a version of the Attribute as outdated and lets you specify an updated version that is to be used instead.
However, you might also find yourself in a situation where you want to delete an Attribute altogether.
To do so, proceed as described in the guide on [how to delete Attributes]({% link _docs_integrate/delete-attributes.md %}).
