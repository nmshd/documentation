Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) that represents arbitrary encrypted data
saved on the backbone.

## Parameters

- `content` describes the to be encoded data.
- `expiresAt` is the ISODateTime the token expires at.
- `epheremal` indicates if the token should be cached.

## On Success

- Returns the created `token`.

## On Failure

- The `content` is malformed.
