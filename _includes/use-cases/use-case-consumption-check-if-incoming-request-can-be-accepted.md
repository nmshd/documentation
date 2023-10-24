{{properties.description}}

{% include properties_list.html %}

This use-case tests if an incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request)
can be accepted with the given parameters without actually accepting it.

## Parameters

- The `id` of the incoming request.
- The decision for each individual [RequestItem]({% link _docs_integrate/data-model-overview.md %}#request)
  expressed as the appropriate [Parameters defined in the Data Model]({% link _docs_integrate/requests-and-requestitems.md %}).

## On Success

- The request can be accepted with the given parameters.

## On Failure

- The request can not be accepted.
- A detailed error describes the problem.
