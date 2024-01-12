{{properties.description}}

{% include properties_list.html %}

This use-case queries [Tokens]({% link _docs_integrate/data-model-overview.md %}#token) of the Identity.

## Parameters

- `createdAt` is the ISODateTime the Token was created at.
- `createdBy` is the enmeshed Address of the Identity that created the Token.
- `createdByDevice` is the `id` of the Device that created the Token.
- `expiresAt` is the ISODateTime the Token expires.

## On Success

- Returns all [Tokens]({% link _docs_integrate/data-model-overview.md %}#token) that match the `query`.

## On Failure

- The parameters are malformed.
