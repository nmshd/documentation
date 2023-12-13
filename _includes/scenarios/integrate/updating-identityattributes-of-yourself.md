TODO: change title to "Succeeding Attributes to update values" ?

In live it may happen that personal circumstances change, e.g. you change your telephone number.
If you shared your old number with peers via enmeshed, you'll look for an uncomplicated way to let them know about this change.
For this, you are given the possibility to succeed attributes of your own.
This will not only update their values, but also provide you and your peers with a coherent history of all past versions.
How the attribute succession works in detail depends on the type of attribute.

## Succeeding own IdentityAttributes

In contrast to RelationshipAttributes you can create IdentityAttributes privately without sharing them with anyone.

<!-- (link to CreateIdentityAttribute Usecase) -->

Internally, these unshared IdentityAttributes are referred to as RepositoryAttributes.
In order to share them, you need to send an according Request to the peer.

<!-- (link to ShareIdentityAttribute Usecase) -->

If they accept, a new IdentityAttribute will be created at the peer's side, having the same content like your RepositoryAttribute.
Moreover, another copy will be created at your side.
Both of them will have an additional `shareInfo` property, storing information about the respective `peer`, the `sourceReference` to the RepositoryAttribute, whose content you copied, and a reference to the Request used to share the Attribute.
Thus, sharing an IdentityAttribute will create an own shared IdentityAttribute copy for every peer you shared the Attribute with at your side and a peer shared IdentityAttribute copy for each peer at their side.

Now, let's consider the case that the value of your IdentityAttribute changes and you want to update it.
To succeed your RepositoryAttribute, a new version with the updated value will be created.

<!-- (link to SucceedIdentityAttribute Usecase) -->

In its `succeeds` property the predecessor is stored.
It in turn is updated, too, to link to the newer version in its `succeededBy` property.
Consequently, succeeding an Attribute, a double-linked list of all versions is created.

Next, you can notify your peers about the succession, so that they'll receive the current version, too.

<!-- (link to NotifyPeerAboutIdentityAttributeSuccession Usecase) -->

Note that it is also possible to make a selection of the peers you want to notify about the attribute succession, if for some reason you don't want to inform all of them.
The own shared IdentityAttributes associated with the peers chosen will be succeeded in the same manner than your RepositoryAttribute before.
Moreover, the peers will receive a Notification, such that their instances replicate the succession chain at your side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/aef8ef85-ca90-47ae-959b-5bab7af7f43a" id="8.LThfly522r"></iframe></div>

## Succeeding own RelationshipAttributes

RelationshipAttributes are, as the name suggests, always associated with a Relationship.
Thus, it is not possible to have unshared instances of them.
Instead, wanting to create a RelationshipAttribute always involves sharing it directly with the peer.

<!-- (link to createAndShareUseCase) -->

So, a Request containing a CreateRequestItem with the content of the RelationshipAttribute will be created and will be sent via Message to the peer.
Only if the peer accepts this Request, an instance of the RelationshipAttribute will be created at their side and, by receiving the Response, at your side, too.
Hence, you and your peer will always have an identical instance of the RelationshipAttribute, only differing in the `peer` property.
Equally to IdentityAttributes, again only the owner of a RelationshipAttribute can succeed it.

<!-- (link to SucceedRelationshipAttributeAndNotifyPeerUsecase) -->

Doing so, the `succeededBy` property of the predecessor and the `succeeds` property of the successor are set.
Then, a Notification is sent to the peer, which handles the replication of the succession chain at their side.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/142055ea-46a5-4ed0-a1a4-b21dbb7eca55" id="ChNTy.TDzwDE"></iframe></div>

# Use Cases

## ShareIdentityAttribute Use Case

{{properties.description}}

{% include properties_list.html %}

If you wish to share one of your private [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute), not having a `shareInfo`, with a peer, the ShareIdentityAttribute use case can be used to do so.
Internally, a [Request]({% link _docs_integrate/data-model-overview.md %}#request) with a [ShareAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem) will be created and will be sent via [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the peer.
Assuming your peer accepts the Request, at their side a peer shared IdentityAttribute will be created.
Moreover, a Notification is sent to you, informing you about their acceptance and creating a copy of the private IdentityAttribute without `shareInfo` you shared.
This own shared IdentityAttribute copy, however, contains in addition a `shareInfo` field.
It stores information about the `peer` you shared the attribute with, the `sourceReference` to the private IdentityAttribute, whose content you copied, and a reference to the Request used to share the Attribute.
Note that the own shared IdentityAttribute at your side and the peer shared IdentityAttribute at your peer's side are identitcal, except for the value in the `shareInfo.peer` field: on your side it will have the peer's address and on the peer's side it will have your address.
Please note further, that this use case is meant to be used to share a version of an IdentityAttribute for the first time.
If you already shared a succeeded version of your attribute with the peer and you want to let them know about change, use the NotifyPeerAboutIdentityAttributeSuccession use case.

<!-- TODO: insert link to NotifyPeerAboutIdentityAttributeSuccession use case -->

### Parameters

- The `attributeId` of your private IdentityAttribute without `shareInfo`
- The address of the `peer`
- Optionally `requestMetadata` as described in the [data model]({% link _docs_integrate/data-model-overview.md %}#request), except for the `id` and `items`, which are handled automatically.

### On Success

- The Request is returned, which is sent via Message to the peer, containing a ShareAttributeRequestItem with the IdentityAttribute you want to share with the peer.

### On Failure

- The Request cannot be created, if the `peer` is unknown.
- The Request cannot be created, if the `attributeId` belongs to a RelationshipAttribute.
- The Request cannot be created, if the `attributeId` belongs to an IdentityAttribute with a `shareInfo`.
- The Request cannot be created, if the Attribute has already been shared with the peer.
- The Request cannot be created, if another version of the Attribute regarding succession has already been shared with the peer.
- The Request cannot be created, if the parameters are malformed.

## SucceedIdentityAttribute Use Case

{{properties.description}}

{% include properties_list.html %}

If the value of a private [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) without `shareInfo`, changes, this can be replicated in enmeshed with the SucceedIdentityAttribute use case.
It allows you to update the content and keeps a coherent history of all versions by establishing a double-linked list, using the Attribute parameters `succeeds` and `succeededBy`.
Hence, every Attribute may have exactly one predecessor and one successor.
In case you shared the predecessing version of the IdentityAttribute, own shared IdentityAttribute copies will only be succeeded, too, if you decide to notify the peer of the respective shared IdentityAttribute about the succession.

<!-- TODO: link to attribute succession scenario (succeeding identityattributes) -->
<!-- TODO: insert link to NotifyPeerAboutIdentityAttributeSuccession use case -->

### Parameters

- `predecessorId`: the ID of the privat IdentityAttribute without `shareInfo` you want to succeed
- The `successorContent` according to the parameters of an IdentityAttribute as described in the [data model]({% link _docs_integrate/data-model-overview.md %}#identityattribute), except for the `owner`, which is automatically set to your address

### On Success

- The response returns a `predecessor` and a `successor` Attribute.
- The `predecessor` is an updated version of the IdentityAttribute without `shareInfo` belonging to `predecessorId`, having the `succeededBy` field set to the `successor`'s ID.
- The `successor` is a new IdentityAttribute without `shareInfo` with the updated `successorContent`. Its `succeeds` property links to the `predecessor`.

### On Failure

- The response cannot be created, if the `predecessorId` belongs to a RelationshipAttribute.
- The response cannot be created, if the `predecessorId` belongs to an IdentityAttribute with a `shareInfo`.
- The response cannot be created, if the Attribute already has a successor.
- The response cannot be created, if the successorContent contains invalid changes, e.g. of the value type.
- The response cannot be created, if the parameters are malformed.

## NotifyPeerAboutIdentityAttributeSuccession Use Case

{{properties.description}}

{% include properties_list.html %}

If you succeeded a private [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute), not having a `shareInfo`, whose previous version you shared with a peer, you can decide to let the peer know about the succession.
In case you shared the Attribute with multiple peers, you can select individually which of them you would like to inform.
Those chosen will receive a Notification via [Message]({% link _docs_integrate/data-model-overview.md %}#message), which handles the succession of their peer shared IdentityAttributes.
Also, the associated own shared IdentityAttributes at your side will be succeeded, i.e. a new version of the successor will be created and the predecessor will be updated to link to the successor in its `succeededBy` property.
Note that it is possible to notify a peer about the succession of an IdentityAttribute you already shared with them, even if you didn't inform them about every previous version.
In this case the `succeeds` field will link to the latest shared version.
Moreover, it is also possible to notify a peer about the succession of an IdentityAttribute, if this in turn is already succeeded again, in case you didn't notify the peer about a newer version, yet.

### Parameters

- `attributeId` of the succeeded private IdentityAttribute without `shareInfo`
- The address of the `peer`

### On Success

- The response returns a `predecessor` and a `successor` Attribute.
- The `predecessor` is an updated version of the own shared IdentityAttribute that was shared with the peer most recently. It has the `succeededBy` field set to the `successor`'s ID.
- The `successor` is a new own shared IdentityAttribute version with the content of the succeeded private IdentityAttribute. Its `succeeds` property links to the `predecessor`.

### On Failure

- The response cannot be created, if the `peer` is unknown.
- The response cannot be created, if the `attributeId` belongs to a RelationshipAttribute.
- The response cannot be created, if the `attributeId` belongs to an IdentityAttribute with a `shareInfo`.
- The response cannot be created, if you already notified the peer about the succession of the Attribute.
- The response cannot be created, if you haven't shared a version of the Attribute with the peer before. To initially share an Attribute, use the ShareIdentityAttribute use case.
- The response cannot be created, if the parameters are malformed.

<!-- TODO: insert link to ShareIdentityAttribute use case -->

## CreateAndShareRelationshipAttribute Use Case

{{properties.description}}

{% include properties_list.html %}

[RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) are always associated with a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between two Identities.
Consequently, in contrast to [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute), there cannot be private RelationshipAttributes, but you and your peer will always each have an instance of the same RelationshipAttribute, only differing in the `shareInfo.peer` property.
Thus, wanting to create a new RelationshipAttribute, a [Request]({% link _docs_integrate/data-model-overview.md %}#request) is sent to the peer via [Message]({% link _docs_integrate/data-model-overview.md %}#message).
Only if the peer accepts this Request, the RelationshipAttribute will be created at their side.
Once you receive the [Response]({% link _docs_integrate/data-model-overview.md %}#response), an instance with the same content will be created at your side.

### Parameters

- The `content` of the RelationshipAttribute you want to create, following the description from the [data model]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), except for the `owner`, which is automatically set to your address
- The address of the `peer`
- Optionally `requestMetadata` as described in the [data model]({% link _docs_integrate/data-model-overview.md %}#request), except for the `id` and `items`, which are handled automatically.

### On Success

- A Request is sent via Message to the peer, containing a CreateAttributeRequestItem with the RelationshipAttribute you want to create and share with the peer.

### On Failure

- The Request cannot be created, if the `peer` is unknown.
- The Request cannot be created, if the parameters are malformed.

## SucceedRelationshipAttributeAndNotifyPeer Use Case

{{properties.description}}

{% include properties_list.html %}

This use case allows the owner to update a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), while automatically handling the coherent versioning at both your and your peer's side.
Succeeding an own RelationshipAttribute, a new version with the updated content will be created at your side.
In its `succeeds` property it links to the predecessing version, which in turn is also updated and links to the newly created version in its `succeededBy` property.
Thus, a double-linked list is established, ensuring every version to have not more that one predecessor or successor.
Once the succession at your side is completed, a Notification is sent to your peer, triggering the succession at their side, such that both your succession chains coincide.

<!-- TODO: link to attribute succession use case (succeeding relationship attributes) -->

### Parameters

- `predecessorId`: the ID of the RelationshipAttribute you want to succeed
- The `successorContent` of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), limited to its `value`, `validFrom` and `validTo` properties that may be changed by a succession

### On Success

- The response returns a `predecessor` and a `successor` Attribute.
- The `predecessor` is an updated version of the own shared RelationshipAttribute, having the `succeededBy` field set to the `successor`'s ID.
- The `successor` is a new own shared RelationshipAttribute version with the specified `successorContent`. Its `succeeds` property links to the `predecessor`.

### On Failure

- The response cannot be created, if the `predecessorId` doesn't belong to a valid own RelationshipAttribute.
- The response cannot be created, if the RelationshipAttribute belonging to the `predecessorId` already has a successor.
- The response cannot be created, if the parameters are malformed.

## GetVersionsOfAttribute Use Case

{{properties.description}}

{% include properties_list.html %}

Succeeding an Attributes allows you to update its value, while keeping all versions for a coherent history.
This use case allows you to retrieve a list of all those versions of the succession chain for a specified Attribute.

<!-- TODO: link to attribute succession scenario -->

### Parameters

- The `attributeId` belonging to an Attribute you would like to know all versions of

### On Success

- If the `attributeId` belongs to a private [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) without `shareInfo`, a list of all versions of this private IdentityAttribute will be returned.
- If the `attributeId` belongs to an own shared IdentityAttribute, a list of all versions of that Attribute shared with the same peer will be returned.
- If the `attributeId` belongs to a peer shared IdentityAttribute, a list of all versions of that Attribute received from the peer will be returned.
- If the `attributeId` belongs to a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), a list of all versions of that RelationshipAttribute will be returned.

### On Failure

- No Attributes can be returned, if the `attributeId` doesn't belong to a valid Attribute.

## GetSharedVersionsOfIdentityAttribute Use Case

{{properties.description}}

{% include properties_list.html %}

This use case allows you to retrieve a list of shared [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) for a specified private IdentityAttribute without `shareInfo`.

### Parameters

- The `attributeId` belonging to an IdentityAttribute without `shareInfo` you would like to know all shared versions of
- Optionally the returned IdentityAttributes can be limited to those shared with specific `peers`
- `onlyLatestVersionPerPeer` omits succeeded versions; by default this is set to be `true`

### On Success

- A list of the latest version per peer of the IdentityAttribute given as input for all peers will be returned. The returned IdentityAttributes have the `shareInfo` field set.
- If `peers` were speficied, the list is limited to the entries shared with those peers.
- If `onlyLatestVersionPerPeer` is disabled, all versions will be returned, even if they already have successors.

### On Failure

- No Attributes can be returned, if the `attributeId` belongs to a RelationshipAttribute.
- No Attributes can be returned, if the `attributeId` belongs to an IdentityAttribute with a `shareInfo`.
- No Attributes can be returned, if the `peers` are unknown.
- No Attributes can be returned, if the parameters are malformed.
