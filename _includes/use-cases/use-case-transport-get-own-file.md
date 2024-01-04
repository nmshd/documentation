{{properties.description}}

{% include properties_list.html %}

This use-case retrieves an own File.

## Parameters

- `id` of the File which should be retrieved.

## On Success

- The metadata of the [File]({% link _docs_integrate/data-model-overview.md %}#file) that match the `id`.

## On Failure

- No File corresponds to the `id`.
