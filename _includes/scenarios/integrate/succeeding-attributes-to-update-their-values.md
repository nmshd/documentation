The way enmeshed handles updates to your personal data is by succeeding old [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) with new ones.
Instead of simply replacing old data, a completely new Attribute is created which succeeds its predecessor.
Thus, you and your peers are provided a coherent history of all past versions.
How the Attribute succession works in detail depends on the type of Attribute.

## Succeeding own IdentityAttributes

When talking about [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute), we need to distinguish three cases:

- The Identity maintains an Attribute about itself. It is stored in the `content` field of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute), whose `shareInfo` is undefined. Since this LocalAttribute is created for the Identity's private repository of Attributes, it is referred to as **RepositoryAttribute**.
- When sharing a RepositoryAttribute, a copy of the IdentityAttribute is created and stored in the `content` field of a LocalAttribute with a defined `shareInfo`. We call this LocalAttribute an **own shared IdentityAttribute**.
- Receiving a shared IdentityAttribute from a peer leads to the creation a LocalAttribute with according `content` and a defined `shareInfo` for the recipient. We call this LocalAttribute a **peer shared IdentityAttribute**.

Discussing the succession of IdentityAttributes requires some background knowledge about this differentiation and the behavior of shared Attributes.
Hence, we will look at the process of creating, sharing and succeeding an IdentityAttribute step by step.

### Creating a RepositoryAttribute

Enmeshed allows you to store data about yourself in the form of IdentityAttributes.
When [creating an IdentityAttribute]({% link _docs_use-cases/use-case-consumption-create-an-attribute.md %}), it is not necessary to share it immediately with a peer.
Instead, it will be stored in the `content` property of a LocalAttribute with an undefined `shareInfo`.
We refer to these unshared LocalAttributes as RepositoryAttributes, since they make up your private repository of Attributes.

In the following examples, the `createdAt` property of the LocalAttribute is omitted, since it isn't required for the explanation.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/33654502-420f-41bd-801a-e0d4c1564df0" id="zs0-w2Ag-nJ4"></iframe></div>

### Sharing a RepositoryAttribute

Now, in order to [share a RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-share-an-identityattribute.md %}), you need to send an according [Request]({% link _docs_integrate/data-model-overview.md %}#request) to the peer you want to share it with.
If they [accept your Request]({% link _docs_integrate/share-own-attribute-to-peer.md %}), a new LocalAttribute will be created at the peer's side.
This peer shared IdentityAttribute has the same `content` like your RepositoryAttribute and, in addition, a defined `shareInfo` property.
It stores the address of the `peer` who shared the Attribute with them, i.e. your address, and a reference to the Request that was used to share the Attribute.
Receiving the [Response]({% link _docs_integrate/data-model-overview.md %}#reponse), an own shared IdentityAttribute with equal `content` will be created at your side.
Its `shareInfo` stores the same `requestReference` and the peer's address, as well as the ID of the RepositoryAttribute, whose `content` was copied, in the field `sourceAttribute`.

Concluding, sharing an IdentityAttribute will create an own shared IdentityAttribute copy for every peer you shared the Attribute with at your side and a peer shared IdentityAttribute copy for each peer at their side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c1195765-c1ca-46b4-9468-1735f4a018cc" id="_s0-VcxrpcCM"></iframe></div>

### Succeeding a RepositoryAttribute

Next, let's consider the case that the `value` of your IdentityAttribute changes and you want to update it.
To [succeed the RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-succeed-an-identityattribute.md %}), a new LocalAttribute with the updated `content` will be created.
This successor stores the `id` of the old version, the predecessor, in its `succeeds` property.
The predecessor is updated, too, such that its `succeededBy` property links to the successor.
Consequently, the different versions of a LocalAttribute created by Attribute successions make up a doubly linked list.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/8e81cd6b-240f-4e41-ae08-9eea13b32974" id="zt0-EawwJWIx"></iframe></div>

### Notifying a peer about a RepositoryAttribute succession

After succeeding a RepositoryAttribute, you can check out [with which of your peers you have previously shared the succeeded Attribute]({% link _docs_use-cases/use-case-consumption-get-shared-versions-of-an-identityattribute.md %}) to choose those, you'd like to [notify about the succession]({% link _docs_use-cases/use-case-consumption-notify-peer-about-identityattribute-succession.md %}).
Your own shared IdentityAttributes associated with the peers chosen will be succeeded in the same manner as your RepositoryAttribute before.
Then, a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification) is sent to the peers, containing a [PeerSharedAttributeSucceededNotificationItem]({% link _docs_integrate/data-model-overview.md %}#peersharedattributesucceedednotificationitem) with the updated IdentityAttribute, which will trigger a likewise succession at their side, such that their LocalAttribute versions replicate the succession chain at your side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/079d7602-95af-4ddf-8fd5-cca5294038d9" id="Fv0-x9lenepV"></iframe></div>

## Succeeding own RelationshipAttributes

[RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) are, as the name suggests, always associated with a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).
Thus, it is not possible to have unshared instances of them.
Instead, you and your peer will always each have a LocalAttribute with the same RelationshipAttribute `content`.
We call the LocalAttribute of the owner **own shared RelationshipAttribute** and the LocalAttribute of the peer **peer shared RelationshipAttribute**.

### Creating and sharing a RelationshipAttribute

Wanting to [create a RelationshipAttribute]({% link _docs_use-cases/use-case-consumption-create-and-share-a-relationshipattribute.md %}) always involves sharing it directly with a peer.
To this end, a Request containing a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) with the RelationshipAttribute will be created and will be sent to the peer.
Only if the peer accepts this Request, a LocalAttribute with the RelationshipAttribute as `content` will be created at their side and, by receiving the Response, at your side, too.
Hence, you and your peer will always have an identical shared RelationshipAttribute, only differing in the LocalAttribute's `peer` property.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/11244175-05b4-4225-b08f-7da48aa21e2f" id="gw0-8Yqzp0IL"></iframe></div>

### Succeeding a RelationshipAttribute and notifying the peer

Equally to IdentityAttributes, again only the owner can [succeed a RelationshipAttribute]({% link _docs_use-cases/use-case-consumption-succeed-a-relationshipattribute-and-notify-peer.md %}).
Doing so, a new version of the own shared RelationshipAttribute will be created at your side.
The `succeeds` property of this LocalAttribute links to the old version, whose `succeededBy` property in turn is updated to the `id` of the newly created successor.
Then, a Notification is sent automatically to the peer, which triggers the creation of a new peer shared RelationshipAttribute at their side, such that their LocalAttribute versions replicate the succession chain at your side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/67c46978-696b-4adf-b04a-cf27d0438f53" id="ww0-.JinZtEX"></iframe></div>
