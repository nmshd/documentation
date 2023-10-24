{{properties.description}}

{% include properties_list.html %}

This use-case is intended to create an [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute)
based on a given `attribute` (as a [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) datastructure).

## Parameters

- The `content` for the to be created attribute is described in the [data model]({% link _docs_integrate/data-model-overview.md %}#attributes)

## On Success

- A [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) is created according to the paramter.

## On Failure

- The attribute cannot be created if the parameter is malformed.
