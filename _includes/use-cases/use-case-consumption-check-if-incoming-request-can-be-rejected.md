{{properties.description}}

{% include properties_list.html %}

This use-case tests if an incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request)
can be rejected with the given parameters without actually rejecting it.

It is advised to call canReject before actually rejecting a Request, however canReject will usually be successful, as there are only rare cases which block a rejection.

## Parameters

- The `id` of the incoming request.
- The decision for each individual [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitems)
  expressed as the appropriate [Parameters defined in the Data Model]({% link _docs_integrate/data-model-overview.md %}deciderequestitemparameters).

## On Success

- Returns a `RequestValidationResult` that indicates if Request can be rejected with the given parameters.

## On Failure

- The decisions do not match the RequestItems.
