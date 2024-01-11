<!-- TODO: rename page to "Create an IdentityAttribute" -->

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to create a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute)
based on a given [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute).

## Parameters

- The `content` for the to be created LocalAttribute as [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) without the `owner`
  property, since it is automatically set to your address

## On Success

- A [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) is created according to the parameters and returned.

## On Failure

- The Attribute cannot be created if the parameter is malformed.
