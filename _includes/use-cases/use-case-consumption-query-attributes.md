{{properties.description}}

{% include properties_list.html %}

This use-case is intenden to query all [attributes](/integrate/data-model-overview#attributes)
related to the identity.

## Parameters

- The `createdAt` parameter describes the data the attribute was created.
- The `content` describes the searched attribute (Either a [IdentityAttributePermalink](/integrate/data-model-overview#identityattribute)
  or a [RelationshipAttributePermalink](/integrate/data-model-overview#relationshipattribute).
- `succeeds` and `succeededBy` give information about succession state of the attribute.
- The `shareInfo` describes how the attribute was received/sent. [Read more](/integrate/data-model-overview#localattributeshareinfo).

## On Success

- A list of [LocalAttributes](/integrate/data-model-overview#localattribute) is returned that matched the description.

## On Failure

--
