{{properties.description}}

{% include properties_list.html %}

This use-case is intended to create a RepositoryAttribute, i.e. an unshared [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute)
based on a given [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute).

## Parameters

- The `content` for the LocalAttribute that ought to be created as IdentityAttribute without the `owner`
  property, since it is automatically set to your Address

## On Success

- A LocalAttribute is created according to the parameters and returned with an undefined `shareInfo`.

## On Failure

- The LocalAttribute cannot be created if the parameter is malformed.
