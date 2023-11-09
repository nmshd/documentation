{{properties.description}}

{% include properties_list.html %}

Creates a [token]({% link _docs_integrate/data-model-overview.md %}#token) for a given owned file that
corresponds to the given id.

## Parameters

- `fileId` is the id of the file the token should be created for.
- `expiresAt` is the ISODateTime the token expires at.
- `epheremal` indicates if the token should be cached.

## On Success

- Returns the created `token`.

## On Failure

- `fileID` does not resolve to a file.
