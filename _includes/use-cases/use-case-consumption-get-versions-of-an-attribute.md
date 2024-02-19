{{properties.description}}

{% include properties_list.html %}

[Succeeding an Attribute]({% link _docs_integrate/succeeding-attributes-to-update-their-values.md %}) allows you to update its `content`, while keeping all versions for a coherent history.
This use-case allows you to retrieve a list of all those versions of the succession chain for a specified [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute).

## Parameters

- The `attributeId` belonging to a LocalAttribute you would like to know all versions of

## On Success

- If the `attributeId` refers to a RepositoryAttribute, a list of all versions of this RepositoryAttribute will be returned.
- If the `attributeId` refers to an own shared IdentityAttribute, a list of all versions of that Attribute shared with the same peer will be returned.
- If the `attributeId` refers to a peer shared IdentityAttribute, a list of all versions of that Attribute received from the peer will be returned.
- If the `attributeId` refers to a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), a list of all versions of that RelationshipAttribute will be returned.

## On Failure

- No Attributes can be returned, if the `attributeId` doesn't belong to a valid LocalAttribute.
