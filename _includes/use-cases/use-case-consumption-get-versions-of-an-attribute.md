{{properties.description}}

{% include properties_list.html %}

[Succeeding an Attribute]({% link _docs_integrate/succeeding-attributes-to-update-their-values.md %}) allows you to update its value, while keeping all versions for a coherent history.
This use case allows you to retrieve a list of all those versions of the succession chain for a specified Attribute.

## Parameters

- The `attributeId` belonging to an Attribute you would like to know all versions of

## On Success

- If the `attributeId` belongs to a private [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) without `shareInfo`, a list of all versions of this private IdentityAttribute will be returned.
- If the `attributeId` belongs to an own shared IdentityAttribute, a list of all versions of that Attribute shared with the same peer will be returned.
- If the `attributeId` belongs to a peer shared IdentityAttribute, a list of all versions of that Attribute received from the peer will be returned.
- If the `attributeId` belongs to a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), a list of all versions of that RelationshipAttribute will be returned.

## On Failure

- No Attributes can be returned, if the `attributeId` doesn't belong to a valid Attribute.
