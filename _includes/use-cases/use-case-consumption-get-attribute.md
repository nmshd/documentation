{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute)
by it's id.

## Parameters

- The `id` of the attribute.

## On Success

- The [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute) corresponding to the `id`.

## On Failure

- The attribute does not exist.
