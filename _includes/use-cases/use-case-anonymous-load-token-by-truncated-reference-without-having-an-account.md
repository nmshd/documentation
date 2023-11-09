{{properties.description}}

{% include properties_list.html %}

This use-case attempts to retrieve a [Token]({% link _docs_integrate/data-model-overview.md %}#token)
by its `truncatedReference`.

## Parameters

- The `truncatedReference` that contains all infortmation to load a token.

## On Success

- The corresponding [Token]({% link _docs_integrate/data-model-overview.md %}#token).

## On Failure

- There is no `Token` that matches the `truncatedReference`.
