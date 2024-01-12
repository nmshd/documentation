{{properties.description}}

{% include properties_list.html %}

This use-case retrieves a [File]({% link _docs_integrate/data-model-overview.md %}#file) by an `id` or the `reference`. This is usually the case, when a reference to a File was received by a peer (over a Message or by any side channel).

## Paramers

- `id` or `reference` that identify the File.

## On Success

- The File that corresponds to the `id` or the `reference`.

## On Failure

- The given `id` or `reference` does not resolve to a File.
