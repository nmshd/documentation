{{properties.description}}

{% include properties_list.html %}

This use-case retrieves the metadata of a [File]({% link _docs_integrate/data-model-overview.md %}#file) that matches the `id` or the `reference`.

## Paramers

- `id` or `reference` that identify the file.

## On Success

- The file that corresponds to the `id`.

## On Failure

- The `id` / `reference` does not resolve to a file.
