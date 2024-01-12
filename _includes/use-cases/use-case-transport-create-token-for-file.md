{{properties.description}}

{% include properties_list.html %}

Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) for a given file that
corresponds to the given id.

## Parameters

- `fileId` is the id of the File the Token should be created for.
- `expiresAt` is the ISODateTime the Token expires at.
- `ephemeral` indicates if the Token should be ephemeral and thus not be stored and cached on the local database. This is especially useful for Tokens which are created regularly, e.g. for RelationshipTemplates and doesn't need to be stored.

## On Success

- Returns the created `Token`.

## On Failure

- `fileId` does not resolve to a file.
- `expiresAt` lies in the past
