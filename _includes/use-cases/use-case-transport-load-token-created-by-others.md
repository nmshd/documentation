{{properties.description}}

{% include properties_list.html %}

This use-case intends to load a peer's [Token]({% link _docs_integrate/data-model-overview.md %}#token) from the Backbone by a given reference to the Token.

## Parameters

There are two possible options to load the Token:

- by knowing the `reference` of the peer's Token
  - `reference` that identifies the Token.
  - `ephemeral` to indicate that the Token should be stored locally.
- by knowing the `id` and the `secretKey` of the peer's Token
  - `id` of the Token.
  - `secretKey` that was used to encrypt the Token.
  - `ephemeral` to indicate if the Token should be stored locally.

## On Success

- Returns the corresponding [Token]({% link _docs_integrate/data-model-overview.md %}#token).

## On Failure

- The parameters are malformed.
- The Token does not exist.
- The Token is expired.
