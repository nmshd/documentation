{{properties.description}}

{% include properties_list.html %}

This use-case is intended to query all [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute)
related to the identity.

## Parameters

- The `createdAt` parameter describes the data the attribute was created.
- The `content` describes the searched attribute (Either a [IdentityAttributePermalink]({% link _docs_integrate/data-model-overview.md %}#identityattribute)
  or a [RelationshipAttributePermalink]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).
- `succeeds` and `succeededBy` give information about succession state of the attribute.
- The `shareInfo` describes how the attribute was received/sent. [Read more]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo).

## On Success

- A list of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) is returned that matched the description.

## On Failure

--
