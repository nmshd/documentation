The way enmeshed handles updates to your personal data is by succeeding old Attributes with new ones.
Instead of simply replacing old data, a wholly new Attribute is created which succeeds its predecessor.
Thus, you and your peers are provided a coherent history of all past versions.
How the Attribute succession works in detail depends on the type of Attribute.

## Succeeding own IdentityAttributes

In contrast to [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) you can [create IdentityAttributes]({% link _docs_use-cases/use-case-consumption-create-an-attribute.md %}) privately without sharing them with anyone.
In order to [share an IdentityAttribute]({% link _docs_use-cases/use-case-consumption-share-an-identityattribute.md %}), you need to send an according [Request]({% link _docs_integrate/data-model-overview.md %}#request) to the peer.
If they accept, a new [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) will be created at the peer's side.
It has the same content like your private IdentityAttribute and, in addition, a `shareInfo` property.
It stores information about the respective `peer`, the `sourceAttribute`, whose content you copied, and a reference to the Request used to share the Attribute.
Moreover, another copy will be created at your side, that has a `shareInfo`, too.
Thus, sharing an IdentityAttribute will create an own shared IdentityAttribute copy for every peer you shared the Attribute with at your side and a peer shared IdentityAttribute copy for each peer at their side.

Now, let's consider the case that the value of your IdentityAttribute changes and you want to update it.
To [succeed the (unshared) IdentityAttribute]({% link _docs_use-cases/use-case-consumption-succeed-an-identityattribute.md %}), a new version with the updated value will be created.
In its `succeeds` property the predecessor ID is stored.
It in turn is updated, too, to link to the newer version in its `succeededBy` property.
Consequently, the different versions of an Attribute created by Attribute successions are stored in a doubly linked list.

Next, you can [notify your peers about the succession]({% link _docs_use-cases/use-case-consumption-notify-peer-about-identityattribute-succession.md %}), so that they'll receive the current version, too.
Note that it is also possible to make a selection of the peers you want to notify about the Attribute succession, if for some reason you don't want to inform all of them.
The own shared IdentityAttributes associated with the peers chosen will be succeeded in the same manner as your unshared IdentityAttribute before.
Then, the peers are sent a Notification containing the updated Attribute data, which will trigger a succession as described above at their side, such that their Attribute versions replicate the succession chain at your side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/aef8ef85-ca90-47ae-959b-5bab7af7f43a" id="8.LThfly522r"></iframe></div>

## Succeeding own RelationshipAttributes

RelationshipAttributes are, as the name suggests, always associated with a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).
Thus, it is not possible to have unshared instances of them.
Instead, wanting to [create a RelationshipAttribute]({% link _docs_use-cases/use-case-consumption-create-and-share-a-relationshipattribute.md %}) always involves sharing it directly with a peer.
To this end, a Request containing a [CreateAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem) with the content of the RelationshipAttribute will be created and will be sent via [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the peer.
Only if the peer accepts this Request, an instance of the RelationshipAttribute will be created at their side and, by receiving the [Response]({% link _docs_integrate/data-model-overview.md %}#response), at your side, too.
Hence, you and your peer will always have an identical instance of the RelationshipAttribute, only differing in the `peer` property.

Equally to IdentityAttributes, again only the owner can [succeed a RelationshipAttribute]({% link _docs_use-cases/use-case-consumption-succeed-a-relationshipattribute-and-notify-peer.md %}).
Doing so, the `succeededBy` property of the predecessor and the `succeeds` property of the successor are set.
Then, a Notification is sent automatically to the peer, which handles the replication of the succession chain at their side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/142055ea-46a5-4ed0-a1a4-b21dbb7eca55" id="ChNTy.TDzwDE"></iframe></div>
