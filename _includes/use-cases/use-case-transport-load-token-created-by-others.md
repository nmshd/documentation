{{properties.description}}

{% include properties_list.html %}

This use-case intends to retrieve a [Token]({% link _docs_integrate/data-model-overview.md %}#token)
that was created by a `peer`.

There are two possible parameters to load a `peer` token.

## Parameters

either:

- `reference` that identifies the token.
- `ephemeral` to indicate if the searched token should be cached.

---

or:

- `id` of the token.
- `secretKey` that was used to encrypt the token.
- `ephemeral` to indicate if the searched token should be cached.

## On Success

- The corresponding [Token]({% link _docs_integrate/data-model-overview.md %}#token).

## On Failure

- The request is malformed.
