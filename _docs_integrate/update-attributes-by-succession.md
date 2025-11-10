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
  This IdentityAttribute is stored in the `content` field of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute), whose `shareInfo` is undefined.
  Since this LocalAttribute is created for the Identity's private repository of Attributes, it is referred to as **RepositoryAttribute**.
- When sharing a RepositoryAttribute with a peer, a copy of the IdentityAttribute is created for the Sender and stored in the `content` field of a LocalAttribute with a defined `shareInfo`.
  We call this LocalAttribute an **own shared IdentityAttribute**.
- Receiving a shared IdentityAttribute from a peer leads to the creation of a LocalAttribute with according `content` and a defined `shareInfo` for the Recipient.
  We call this LocalAttribute a **peer shared IdentityAttribute**.

Discussing the succession of IdentityAttributes requires some background knowledge about this differentiation and the behavior of shared Attributes.
Hence, we will look at the process of creating, sharing and succeeding an IdentityAttribute step by step.

### Creating a RepositoryAttribute

enmeshed allows you to store data about yourself in the form of IdentityAttributes.
When [creating an IdentityAttribute]({% link _docs_integrate/create-attributes-for-yourself.md %}), it is not necessary to share it immediately with a peer.
Instead, it will be stored in the `content` property of a LocalAttribute with an undefined `shareInfo`.
We refer to these unshared LocalAttributes as RepositoryAttributes, since they make up your private repository of Attributes.

In the following examples, the `createdAt` and `deletionInfo` properties of all occuring LocalAttributes is omitted, since they aren't required for the explanation.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/33654502-420f-41bd-801a-e0d4c1564df0" id="zs0-w2Ag-nJ4"></iframe></div>

### Sharing a RepositoryAttribute

Now, in order to [share a RepositoryAttribute]({% link _docs_integrate/share-attributes-with-peer.md %}), you need to send an according [Request]({% link _docs_integrate/data-model-overview.md %}#request) to the peer you want to share it with.
If they [accept your Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}), a new LocalAttribute will be created at the peer's side.
This peer shared IdentityAttribute has the same `content` like your RepositoryAttribute and, in addition, a defined `shareInfo` property.
It stores the address of the `peer` who shared the Attribute with them, i.e. the `address` of your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity), and a reference to the Request that was used to share the Attribute.
Receiving the [Response]({% link _docs_integrate/data-model-overview.md %}#response), an own shared IdentityAttribute with equal `content` will be created at your side.
Its `shareInfo` stores the same `requestReference` and the peer's address, as well as the `id` of the RepositoryAttribute, whose `content` was copied, in the field `sourceAttribute`.

Concluding, sharing an IdentityAttribute will create an own shared IdentityAttribute copy for every peer you shared the Attribute with at your side and a peer shared IdentityAttribute copy for each peer at their side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c1195765-c1ca-46b4-9468-1735f4a018cc" id="_s0-VcxrpcCM"></iframe></div>

### Succeeding a RepositoryAttribute

Next, let's consider the case that the `value` of your [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) changes and you want to update it.
To [succeed the OwnIdentityAttribute]({% link _docs_use-cases/use-case-consumption-succeed-an-ownidentityattribute.md %}), a new [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with the updated `content` will be created.
This successor stores the `id` of the old version, the predecessor, in its `succeeds` property.
The predecessor is updated, too, such that its `succeededBy` property links to the successor.
Consequently, the different versions of a LocalAttribute created by Attribute successions make up a doubly linked list.

**Note:**
During the succession of a [complex IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#complex-identityattributes) implicitly all its children will be succeeded, so it isn't possible to succeed a child of a complex IdentityAttribute on its own.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/8e81cd6b-240f-4e41-ae08-9eea13b32974" id="zt0-EawwJWIx"></iframe></div>

### Notifying a peer about a RepositoryAttribute succession

After succeeding a RepositoryAttribute, you can check [with which of your peers you have previously shared the succeeded Attribute]({% link _docs_use-cases/use-case-consumption-get-versions-of-attribute-shared-with-peer.md %}) to choose those, you'd like to [notify about the succession]({% link _docs_use-cases/use-case-consumption-notify-peer-about-ownidentityattribute-succession.md %}).
Your own shared IdentityAttributes associated with the peers chosen will be succeeded in the same manner as your RepositoryAttribute before.
Then, a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification) is sent to the peers, containing a [PeerAttributeSucceededNotificationItem]({% link _docs_integrate/data-model-overview.md %}#peerattributesucceedednotificationitem).
In the `successorContent` property of the latter the updated IdentityAttribute is transmitted and automatically a likewise succession at the peers' side will be triggered, such that their LocalAttribute versions replicate the succession chain at your side.
Please note that the Notification is queued if the [Relationship is currently terminated]({% link _docs_integrate/terminate-relationships.md %}#terminate-an-active-relationship) but not yet [decomposed]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship).
It can then only be received and processed if the [Relationship is reactivated]({% link _docs_integrate/terminate-relationships.md %}#reactivate-a-terminated-relationship).
The Notification is also queued if the [peer is currently in deletion]({% link _docs_integrate/delete-identities.md %}#effects-of-identity-deletion-on-relationships) but not yet deleted.
It can then only be received and processed if the peer [cancels its deletion]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/079d7602-95af-4ddf-8fd5-cca5294038d9" id="Fv0-x9lenepV"></iframe></div>

## Succeeding own RelationshipAttributes

[RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) are, as the name suggests, always associated with a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).
Thus, it is not possible to have unshared instances of them.
Instead, you and your peer will always each have a LocalAttribute with the same RelationshipAttribute as `content`.
We refer to the LocalAttribute of the `owner` as **own shared RelationshipAttribute** and to the peer's LocalAttribute as **peer shared RelationshipAttribute**.

### Creating and sharing a RelationshipAttribute

Wanting to [create a RelationshipAttribute]({% link _docs_use-cases/use-case-consumption-create-and-share-a-relationshipattribute.md %}) always involves sharing it directly with a peer.
To this end, a Request containing a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) with the RelationshipAttribute will be created and will be sent to the peer.
Only if the peer accepts this Request will a LocalAttribute with the RelationshipAttribute as `content` be created at their side and after you receive their Response, at your side, too.
Hence, you and your peer will always have an identical shared RelationshipAttribute, only differing in the LocalAttribute's `shareInfo.peer` property.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/11244175-05b4-4225-b08f-7da48aa21e2f" id="gw0-8Yqzp0IL"></iframe></div>

### Succeeding a RelationshipAttribute and notifying the peer

Equally to IdentityAttributes, again only the `owner` can [succeed a RelationshipAttribute]({% link _docs_use-cases/use-case-consumption-succeed-a-relationshipattribute-and-notify-peer.md %}) to update its `value`.
Doing so, a new version of the own shared RelationshipAttribute will be created at your side.
The `succeeds` property of this LocalAttribute links to the old version, whose `succeededBy` property in turn is updated to the `id` of the newly created successor.
Then, a Notification is sent automatically to the peer, which triggers the creation of a new peer shared RelationshipAttribute at their side, such that their LocalAttribute versions replicate the succession chain at your side.
Please note that the Notification is queued if the [Relationship is currently terminated]({% link _docs_integrate/terminate-relationships.md %}#terminate-an-active-relationship) but not yet [decomposed]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship).
It can then only be received and processed if the [Relationship is reactivated]({% link _docs_integrate/terminate-relationships.md %}#reactivate-a-terminated-relationship).
Furthermore, the Notification is also queued if the [peer is currently in deletion]({% link _docs_integrate/delete-identities.md %}#effects-of-identity-deletion-on-relationships) but not yet deleted.
It can then only be received and processed if the peer [cancels its deletion]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/67c46978-696b-4adf-b04a-cf27d0438f53" id="ww0-.JinZtEX"></iframe></div>

## What's next?

As we have seen, succeeding an Attribute allows you to mark a version of the Attribute as outdated and lets you specify an updated version that is to be used instead.
However, you might also find yourself in a situation where you want to delete an Attribute altogether.
To do so, proceed as described in the guide on [how to delete Attributes]({% link _docs_integrate/delete-attributes.md %}).
