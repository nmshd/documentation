{{properties.description}}

{% include properties_list.html %}

This use-case queries [Files]({% link _docs_integrate/data-model-overview.md %}#file) of the Identity.

## Parameters

All parameters are optional. If no parameter is given, all Files are returned.

- `createdAt` is the ISODateTime the File was created at.
- `createdBy` is the enmeshed Address of the Identity that created the File.
- `createdByDevice` is the `id` of the Device that created the File.
- `description` of the File.
- `expiresAt` is the ISODateTime the File expires.
- `filename` is the name of the actual file from the operating system.
- `filesize` is the size of the respective file in bytes
- `mimetype` of the respective file
- `title` of the File
- `isOwn` indicates if the File is owned by you.

## On Success

- Returns all [Files]({% link _docs_integrate/data-model-overview.md %}#file) that match the `query`.

## On Failure

- The parameters are malformed.
