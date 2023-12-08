{{properties.description}}

{% include properties_list.html %}

This use-case is intended to query outgoing [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest).

## Parameters

- The `id` of the LocalRequest.
- The `peer` is the Address of the Identity that the LocalRequest was sent to.
- `createdAt` indicates the date of LocalRequest creation.
- The `status` of the LocalRequest.
- The `content` describes the [Request]({% link _docs_integrate/data-model-overview.md %}#request) wrapped by the LocalRequest.
- The `response` describes the [Response]({% link _docs_integrate/data-model-overview.md %}#request) that might exist for the Request.

## On Success

- Returns a list of outgoing [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest) that match the query.

## On Failure

- The parameters are malformed.
