{{properties.description}}

{% include properties_list.html %}

This use-case is intended to query all incoming [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest).

## Parameters

- The `id` of the request.
- The `peer` is the address of the identity that sent the request.
- `createdAt` indicates the date of request creation.
- The `status` of the request.
- The `content` describes the structure of the searched request.
- The `response` that might have been given to the request.

## On Success

- A list of incoming [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest) that match the query.

## On Failure

--
