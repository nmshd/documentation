{{properties.description}}

{% include properties_list.html %}

This use-case queries [Tokens]({% link _docs_integrate/data-model-overview.md %}#token)
related to the identity.

## Parameters

- `createdAt` is the ISODateTime the token was created at.
- `createdBy` is the enmeshed address that created the messsage.
- `createdByDevice` is the device id that created the token.
- `expiresAt` is the date the token expires.

## On Success

- Returns all [Tokens]({% link _docs_integrate/data-model-overview.md %}#token) that match the `query`.
