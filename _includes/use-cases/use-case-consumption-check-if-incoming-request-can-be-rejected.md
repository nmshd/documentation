{{properties.description}}

{% include properties_list.html %}

This use-case tests if an incomming [Request](/integrate/data-model-overview#request)
can be rejected with the given parameters without actually rejecting it.

## Parameters

- The `id` of the incomming request.
- The decision for each individual [RequestItem](/integrate/data-model-overview#request)
expressed as the appropriate [Parameters defined in the Data Model](/integrate/requests-and-requestitems).

## On Success 

- The request can be requected with the given parameters.

## On Failure

- The request can not be rejected with the given parameters.
- A detailed error describes the problem.
