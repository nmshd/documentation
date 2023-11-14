{{properties.description}}

{% include properties_list.html %}

This use-case retrieves the metadata of a [File]({% link _docs_integrate/data-model-overview.md %}#file) that matches the `id`.

## Paramers 

- `id` of the file.

## On Success

- The file that corresponds to the `id`.

## On Failure

- The `id` does not resolve to a file.
