{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute) by its id.

## Parameters

- The `id` of the LocalAttribute.

## On Success

- Returns the [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute) corresponding to the `id`.

## On Failure

- The LocalAttribute does not exist.
