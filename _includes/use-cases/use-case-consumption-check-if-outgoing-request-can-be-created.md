{{properties.description}}

{% include properties_list.html %}

This use-case is intended to check if a [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) can be created
based on a given [Request]({% link _docs_integrate/data-model-overview.md %}#request) for a given `peer`.

## Parameters

- The `content` as a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for the to be created [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)
- The `peer` is the address for which the LocalRequest should be created. There can only be one peer per LocalRequest.

## On Success

- Returns a `RequestValidationResult` that indicates if the given Request is valid.

## On Failure

- The LocalRequest cannot be created if the peer is unknown.
- The LocalRequest cannot be created if the Request is malformed.
