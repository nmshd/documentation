{{properties.description}}

{% include properties_list.html %}

This use-case attempts to retrieve a [Token]({% link _docs_integrate/data-model-overview.md %}#token)
by its `id` and `secretKey`.

## Parameters

- The `id` of the token.
- The `secretKey` the token was encrypted with.

## On Success

- The corresponding [Token]({% link _docs_integrate/data-model-overview.md %}#token).

## On Failure

- There is no `Token` that matches the `id`.
- The `secretKey` is not correct.
