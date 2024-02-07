<!-- TODO: rename page to "Create an IdentityAttribute" -->

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to create a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute)
based on a given [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute)

## Parameters

- The `content` for the LocalAttribute that ought to be created as IdentityAttribute without the `owner`
  property, since it is automatically set to your Address

## On Success

- A LocalAttribute is created according to the parameters and returned.

## On Failure

- The LocalAttribute cannot be created if the parameter is malformed.
