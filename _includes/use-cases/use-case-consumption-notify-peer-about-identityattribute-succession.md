{{properties.description}}

{% include properties_list.html %}

If you succeeded a private [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute), not having a `shareInfo`, whose previous version you shared with a peer, you can decide to let the peer know about the succession.
In case you shared the Attribute with multiple peers, you can select individually which of them you would like to inform.
Those chosen will receive a Notification via [Message]({% link _docs_integrate/data-model-overview.md %}#message), which handles the succession of their peer shared IdentityAttributes.
Also, the associated own shared IdentityAttributes at your side will be succeeded, i.e. a new version of the successor will be created and the predecessor will be updated to link to the successor in its `succeededBy` property.
Note that it is possible to notify a peer about the succession of an IdentityAttribute you already shared with them, even if you didn't inform them about every previous version.
In this case the `succeeds` field will link to the latest shared version.
Moreover, it is also possible to notify a peer about the succession of an IdentityAttribute, if this in turn is already succeeded again, in case you didn't notify the peer about a newer version, yet.

## Parameters

- `attributeId` of the succeeded private IdentityAttribute without `shareInfo`
- The address of the `peer`

## On Success

- The response returns a `predecessor` and a `successor` Attribute.
- The `predecessor` is an updated version of the own shared IdentityAttribute that was shared with the peer most recently. It has the `succeededBy` field set to the `successor`'s ID.
- The `successor` is a new own shared IdentityAttribute version with the content of the succeeded private IdentityAttribute. Its `succeeds` property links to the `predecessor`.

## On Failure

- The response cannot be created, if the `peer` is unknown.
- The response cannot be created, if the `attributeId` belongs to a RelationshipAttribute.
- The response cannot be created, if the `attributeId` belongs to an IdentityAttribute with a `shareInfo`.
- The response cannot be created, if you already notified the peer about the succession of the Attribute.
- The response cannot be created, if you haven't shared a version of the Attribute with the peer before. To initially share an Attribute, use the [ShareIdentityAttribute use case]({% link _docs_use-cases/use-case-consumption-share-an-identityattribute.md %}).
- The response cannot be created, if the parameters are malformed.
