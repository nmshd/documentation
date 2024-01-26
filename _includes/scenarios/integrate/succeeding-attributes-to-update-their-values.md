The way enmeshed handles updates to your personal data is by succeeding old Attributes with new ones.
Instead of simply replacing old data, a wholly new Attribute is created which succeeds its predecessor.
Thus, you and your peers are provided a coherent history of all past versions.
How the Attribute succession works in detail depends on the type of Attribute.

## Succeeding own IdentityAttributes

In contrast to [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) you can [create IdentityAttributes]({% link _docs_use-cases/use-case-consumption-create-an-attribute.md %}) privately without sharing them with anyone.
Doing so, a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) will be created with the [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) as `content`.
Its `shareInfo` property will be undefined, since you created it for your private Repository of Attributes.
Hence, these unshared LocalAttributes are referred to as RepositoryAttributes.

Now, in order to [share a RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-share-an-identityattribute.md %}), you need to send an according [Request]({% link _docs_integrate/data-model-overview.md %}#request) to the peer you want to share it with.
If they accept your Request of sharing an Attribute with them, a new LocalAttribute will be created at the peer's side.
This peer shared IdentityAttribute has the same `content` like your RepositoryAttribute and, in addition, a defined `shareInfo` property.
It stores the address of the respective `peer`, the `id` of the `sourceAttribute`, i.e. the RepositoryAttribute whose `content` you copied, and a reference to the Request used to share the Attribute.
Receiving the [Response]({% link _docs_integrate/data-model-overview.md %}#reponse), a copy of the RepositoryAttribute will be created at your side, that has a defined `shareInfo`, too.
Thus, sharing an IdentityAttribute will create an own shared IdentityAttribute copy for every peer you shared the Attribute with at your side and a peer shared IdentityAttribute copy for each peer at their side.

Next, let's consider the case that the `value` of your IdentityAttribute changes and you want to update it.
To [succeed the RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-succeed-an-identityattribute.md %}), a new LocalAttribute with the updated `content` will be created.
This successor stores the `id` of the old version, the predecessor, in its `succeeds` property.
The predecessor is updated, too, such that its `succeededBy` property links to the successor.
Consequently, the different versions of a LocalAttribute created by Attribute successions make up a doubly linked list.

Thereafter, you can check out [with which of your peers you have previously shared the succeeded Attribute]({% link _docs_use-cases/use-case-consumption-get-shared-versions-of-an-identityattribute.md %}) to choose those, you'd like to [notify about the succession]({% link _docs_use-cases/use-case-consumption-notify-peer-about-identityattribute-succession.md %}).
Your own shared IdentityAttributes associated with the peers chosen will be succeeded in the same manner as your RepositoryAttribute before.
Then, the peers are sent a Notification containing the updated IdentityAttribute, which will trigger a likewise succession at their side, such that their LocalAttribute versions replicate the succession chain at your side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/aef8ef85-ca90-47ae-959b-5bab7af7f43a" id="8.LThfly522r"></iframe></div>

## Succeeding own RelationshipAttributes

RelationshipAttributes are, as the name suggests, always associated with a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).
Thus, it is not possible to have unshared instances of them.
Instead, wanting to [create a RelationshipAttribute]({% link _docs_use-cases/use-case-consumption-create-and-share-a-relationshipattribute.md %}) always involves sharing it directly with a peer.
To this end, a Request containing a [CreateAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem) with the RelationshipAttribute will be created and will be sent to the peer.
Only if the peer accepts this Request, a LocalAttribute with the RelationshipAttribute as `content` will be created at their side and, by receiving the Response, at your side, too.
Hence, you and your peer will always have an identical shared RelationshipAttribute, only differing in the LocalAttribute's `peer` property.

Equally to IdentityAttributes, again only the owner can [succeed a RelationshipAttribute]({% link _docs_use-cases/use-case-consumption-succeed-a-relationshipattribute-and-notify-peer.md %}).
Doing so, a new version of the own shared RelationshipAttribute will be created at your side.
The `succeeds` property of this LocalAttribute links to the old version, whose `succeededBy` property in turn is updated to the `id` of the newly created successor.
Then, a Notification is sent automatically to the peer, which triggers the creation of a new peer shared RelationshipAttribute at their side, such that their LocalAttribute versions replicate the succession chain at your side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/142055ea-46a5-4ed0-a1a4-b21dbb7eca55" id="ChNTy.TDzwDE"></iframe></div>
