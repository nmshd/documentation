Queries the metadata of a owned file.

The `query` describes the files that should be returned.

All parameters are **optional**.

## Parameters

- `createdAt` is the ISODateTime the file was created at.
- `createdBy` is the enmeshed address that created the file.
- `createdByDevice` is the `id` of the device that created the file.token
- `description` corresponds to the describtion of the file.
- `expiresAt` is the date the file expires at.
- `filename` of the file.
- `filesize` of the file.
- `mimetype` of the file.
- `title` of the file.

## On Success

- The metadata of all [Files]({% link _docs_integrate/data-model-overview.md %}#file)
  that match the `query`.
