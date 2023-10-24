{{properties.description}}

{% include properties_list.html %}

This use-case attempts to reject an incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request).
It is advised to [check if incoming request can be accepted](/use-case-consumption-check-if-incoming-request-can-be-rejectedmd)
in advance.

## Parameters

- The `id` of the incoming request.
- The decision for each individual [RequestItem]({% link _docs_integrate/data-model-overview.md %}#request)
  expressed as the appropriate [Parameters defined in the Data Model]({% link _docs_integrate/requests-and-requestitems.md %}).

## On Failure

- The decisions do not match the request items.
