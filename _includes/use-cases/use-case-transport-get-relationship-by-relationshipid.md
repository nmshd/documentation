{{properties.description}}

{% include properties_list.html %}

This use-case retrieves a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)
by its `id`.

## Parameters

- `id` of the `relationship`.

## On Success

- The `relationship` that corresponds to the `id`.

## On Failure

- The `id` does not resolve to a `relationship`.
