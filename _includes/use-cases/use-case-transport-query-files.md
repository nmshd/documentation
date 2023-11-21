{{properties.description}}

{% include properties_list.html %}

This use-case queries [Files]({% link _docs_integrate/data-model-overview.md %}#file)
related to the identity.

## Parameters

- `createdAt` is the ISODateTime the file was created.
- `createdBy` is the enmeshed address that created the file.
- `createdByDevice` is the device id that created the file.
- `description` of the file.
- `expiresAt` is the date the file expires at.
- `isOwn` indicates if the file is owned by you.
- `filename`
- `filesize`
- `mimetype`
- `title`

## On Success

- Returns all [Files]({% link _docs_integrate/data-model-overview.md %}#file) that match the `query`.
