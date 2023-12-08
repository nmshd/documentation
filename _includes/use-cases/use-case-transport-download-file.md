{{properties.description}}

{% include properties_list.html %}

Download the File's binary content that corresponds to the `fileId`. As the File is not stored/cached within the Connector, the encrypted File is downloaded from the Backbone, decrypted and returned every time this use-case is called.

## Parameters

- `id` of the File.

## On Success

- Downloads the binary content of the File that corresponds to the `id`.

## On Failure

- There is no File with the given `id`.
- The File is expired on the Backbone.
