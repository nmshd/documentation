{{properties.description}}

{% include properties_list.html %}

This use-case is intended to create a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute)
based on a given [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes).

## Parameters

- The `content` for the to be created LocalAttribute as [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes)

## On Success

- A [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) is created according to the parameters and returned.

## On Failure

- The Attribute cannot be created if the parameter is malformed.
