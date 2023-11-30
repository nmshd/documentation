---

TODO: change title to "Succeed Attributes to update values" ?

---

In live it may happen that personal circumstances change, e.g. you move to a new address.
If you shared your old address with peers via enmeshed, you'll look for an uncomplicated way to let them know about this change.
For this, you are given the possibility to succeed attributes of your own.
This will not only update their values, but also provide you and your peers with a coherent history of all past versions.
How the attribute succession works in detail depends on the type of attribute.

## IdentityAttributes

--------------- notes

IdentityAttributes can be created privately without sharing them with anyone (internally called RepositoryAttribute)
-> CreateIdentityAttribute Usecase

If you want to share own IdentityAttributes, a Request will be created. If peer accepts, at their side a PeerSharedIdentityAttribute will be created and (via notification) at your side an OwnSharedIdentityAttribute (content equal to your RepositoryAttribute, different shareInfo, links to source RepositoryAttribute)
-> ShareIdentityAttribute Usecase

you can succeed RepositoryAttributes locally
-> succeedIdentityAttribute Usecase

then you can decide to whom of your peers you shared the attribute with you want to give the information of the updated value of the attribute,
your OwnSharedIdentityAttribute copy gets succeeded,
they'll get a notification, automatically updating their PeerSharedIdentityAttributes
it is possible if desired to shared later successors with peer after withholding intermediate versions
-> notifyPeerAboutIdentityAttributeSuccession Usecase

---

In contrast to RelationshipAttributes you can create IdentityAttributes privately without sharing them with anyone.
(link to CreateIdentityAttribute Usecase)
Internally, these unshared IdentityAttributes are referred to as RepositoryAttributes.
If you share them, a copy of the content of the RepositoryAttribute will be created for every peer you share them with.
(link to ShareIdentityAttribute Usecase)
These resulting own shared IdentityAttributes will have an additional `shareInfo` property, storing information about the `peer` you shared the Attribute with, the `sourceReference` to the RepositoryAttribute, whose content you copied, and a reference to the Request used to share the attribute.
Concurrently, at the peer's side an identical IdentityAttribute will be created, only differing in the `shareInfo.peer` field.
While for your own shared IdentityAttribute it will be set to the peer's address, at their side it will contain your address.
And, since this shared IdentityAttribute doesn't belong to them, the peer will view it as a peer shared IdentityAttribute.

Now, let's consider the case that the value of your IdentityAttribute changes and you want to update it.
To succeed your RepositoryAttribute, a new version with the updated value will be created.
(link to SucceedIdentityAttribute Usecase)
In its `succeeds` property the predecessor is stored.
It is updated, too, to link to the newer version in its `succeededBy` property.
Thus, succeeding an Attribute, a double-linked list of all versions is created.

Next, you can notify your peers about the succession, so that they receive the current version, too.
(link to NotifyPeerAboutIdentityAttributeSuccession Usecase)
Note that it is also possible to make a selection of the peers you want to notify about the attribute succession, if for some reason you don't want to inform all of them.
The own shared IdentityAttributes associated with the peers chosen will be succeeded in the same manner than the RepositoryAttribute before.
Moreover, the peers will receive a Notification, such that their instances replicate the succession chain at your side.

TODO: add picture

----------------------------- ShareIdentityAttributeUseCase

If you wish to share an own IdentityAttribute/RepositoryAttribute, a corresponding ShareAttributeRequestItem will be created and sent via Message to the peer.
(link to ShareIdentityAttribute Usecase)
Assuming your peer accepts the Request, at their side a peer shared IdentityAttribute will be created.
Moreover, a Notification is sent to you, informing you about their acceptance and creating a copy of the RepositoryAttribute you shared.
This copy, however, contains in addition to the content of the RepositoryAttribute a property called `shareInfo`.
It stores information about the `peer` you shared the attribute with, the `sourceReference` to the RepositoryAttribute, whose content you copied, and a reference to either the Request or Notification used to share the attribute.
In this case, the latter will contain the `requestReference` of the Request you sent to your peer to share your Attribute.
Note that the own shared IdentityAttribute at your side and the peer shared IdentityAttribute at your peer's side are indentitcal except for the value in the `shareInfo.peer` field: on your side it will have the peer's address and on the peer's side it will have your address.

Works so too if IdentityAttribute is created and directly shared

## RelationshipAttributes

---------------- notes

always shared (directly with creation)
-> CreateAndShareRelationshipAttribute Usecase

if owner succeeds, notification is automatically sent to peer
-> SucceedRelationshipAttribute Usecase

---

RelationshipAttributes are, as the name suggests, always associated with a Relationship.
Thus, it is not possible to have unshared instances of them.
Instead, creating a RelationshipAttribute always involves sharing it directly with the peer.
(link to createAndShareUseCase)
Hence, you and your peer will each have an instance of the RelationshipAttribute, only differing in the `peer` property.
Equally to IdentityAttributes, again only the owner of a RelationshipAttribute can succeed it.
(link to SucceedRelationshipAttributeUsecase)
Doing so, the `succeededBy` property of the predecessor and the `succeeds` property of the successor are set.
Then, a Notification is sent to the peer, which handles the replication of the succession chain at their side.

TODO: add picture

----------------- notes

(getVersionsOfAttribute, getSharedVersionsOfIdentityAttribute)

------------------ old

{% include warnings/feature-work-in-progress %}

# Flow

Attributes as such cannot be updated, but can be succeeded by a new Attribute. Thus, the value of an Attribute cannot be changed but overwritten by a new Attribute. We ensure that a coherent history of Attributes are available at all times on different parties.

Consider an IdentityA which shared its DisplayName to IdentityB, IdentityC, and IdentityD. IdentityA now would like to change the DisplayName and has to execute the following steps:

- Succeed the LocalAttribute of the current DisplayName with the new DisplayName
- Notify each peer individually that the DisplayName changed (this is optional, for every peer it can be decided if the peer receives the new Attribute or not)

Each peer would receive a Notification containing an AttributeSucceededNotificationItem which is automatically processed by each Identity. Thus, succeeding Attribute does not result into decidable Requests for the peer. They are only informed about the change.

# Examples

- Changing IdentityAttributes because of name changes, a move to a new address or change of communication details
- An Identity receiving a new telephone number but does not want to share this new telephone number to every peer
