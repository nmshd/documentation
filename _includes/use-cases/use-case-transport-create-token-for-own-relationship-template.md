{{properties.description}}

{% include properties_list.html %}

Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) for a given [relationship template]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)

## Parameters

- `templateId` is the id of the `relationship template` the token should be created for.
- `expiresAt` is the ISODateTime the token expires at.
- `epheremal` indicates if the token should be cached.

## On Success

- Returns the created `Token`.

## On Failure

- `templateId` does not resolve to a `relationship template`.
