{{properties.description}}

{% include properties_list.html %}

This use-case attempts to retrieve a [Token]({% link _docs_integrate/data-model-overview.md %}#token)
by its `id` and `secretKey` without having an account on the Backbone, thus without an authentication.

This can be used to fetch `Tokens` for Device Onboarding or Recovery.

## Parameters

- The `id` of the Token.
- The `secretKey` the Token was encrypted with, Base64URL encoded.

## On Success

- Returns the corresponding [Token]({% link _docs_integrate/data-model-overview.md %}#token).

## On Failure

- There is no `Token` that matches the `id`.
- The `secretKey` is not correct.
