{{properties.description}}

{% include properties_list.html %}

This use-case is intended to check if a [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) can be created
based on a given `request` (as a [Request]({% link _docs_integrate/data-model-overview.md %}#localrequest) datastructure) for a given `peer`.

## Parameters

- The `content` for the to be created request is described in the [data model]({% link _docs_integrate/data-model-overview.md %}#request).
- The `peer` is the address of the recipient of this request. There can only be one peer per request.

## On Success

- A [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) for the given parameters can be created.

## On Failure

- The request cannot be created if the peer is unknown.
- The request cannot be created if the request content is malformed.
- The response contains a detailed error message.
