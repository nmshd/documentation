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
If you already shared a succeeded version of your attribute with the peer and you want to let them know about change, use the [NotifyPeerAboutIdentityAttributeSuccession use case]({% link _docs_use-cases/use-case-consumption-notify-peer-about-identityattribute-succession.md %}).

## Parameters

- The `attributeId` of your private IdentityAttribute without `shareInfo`
- The address of the `peer`
- Optionally `requestMetadata` as described in the [data model]({% link _docs_integrate/data-model-overview.md %}#request), except for the `id` and `items`, which are handled automatically.

## On Success

- The Request is returned, which is sent via Message to the peer, containing a ShareAttributeRequestItem with the IdentityAttribute you want to share with the peer.

## On Failure

- The Request cannot be created, if the `peer` is unknown.
- The Request cannot be created, if the `attributeId` belongs to a RelationshipAttribute.
- The Request cannot be created, if the `attributeId` belongs to an IdentityAttribute with a `shareInfo`.
- The Request cannot be created, if the Attribute has already been shared with the peer.
- The Request cannot be created, if another version of the Attribute regarding succession has already been shared with the peer.
- The Request cannot be created, if the parameters are malformed.
