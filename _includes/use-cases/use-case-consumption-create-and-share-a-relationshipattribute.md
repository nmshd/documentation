{{properties.description}}

{% include properties_list.html %}

[RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) are always associated with a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between two Identities.
Consequently, in contrast to [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute), there cannot be private RelationshipAttributes, but you and your peer will always each have an instance of the same RelationshipAttribute, only differing in the `shareInfo.peer` property.
Thus, wanting to create a new RelationshipAttribute, a [Request]({% link _docs_integrate/data-model-overview.md %}#request) is sent to the peer via [Message]({% link _docs_integrate/data-model-overview.md %}#message).
Only if the peer accepts this Request, the RelationshipAttribute will be created at their side.
Once you receive the [Response]({% link _docs_integrate/data-model-overview.md %}#response), an instance with the same content will be created at your side.

## Parameters

- The `content` of the RelationshipAttribute you want to create, following the description from the [data model]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), except for the `owner`, which is automatically set to your address
- The address of the `peer`
- Optionally `requestMetadata` as described in the [data model]({% link _docs_integrate/data-model-overview.md %}#request), except for the `id` and `items`, which are handled automatically.

## On Success

- A Request is sent via Message to the peer, containing a CreateAttributeRequestItem with the RelationshipAttribute you want to create and share with the peer. Furthermore, the Request is returned.

## On Failure

- The Request cannot be created, if the `peer` is unknown.
- The Request cannot be created, if the parameters are malformed.
