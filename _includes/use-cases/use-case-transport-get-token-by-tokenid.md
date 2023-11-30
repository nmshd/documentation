{{properties.description}}

{% include properties_list.html %}

This use-case retieves a [Token]({% link _docs_integrate/data-model-overview.md %}#token)
by its `id`.

## Parameters

- `id` of the token.

## On Success

- The `token` that corresponds to the `id`.

## On Failure

- The `id` doesn't resolve to a `token`.
