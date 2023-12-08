{{properties.description}}

{% include properties_list.html %}

Creates a [Token]({% link _docs_integrate/data-model-overview.md %}#token) that represents arbitrary encrypted data saved on the Backbone.

## Parameters

- `content` an arbitrary JSON structure of the data to share via the Token.
- `expiresAt` is the ISODateTime the Token expires at.
- `ephemeral` indicates if the Token should be ephemeral and thus not be stored and cached on the local database. This is especially useful for Tokens which are created regularly, e.g. for RelationshipTemplates and doesn't need to be stored.

## On Success

- Returns the created `Token`.

## On Failure

- The `content` is malformed.
- `expiresAt` lies in the past
