{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve an [incoming request](/integrate/data-model-overview#request)
by it's id. The differences of an outgoing and an incoming request are defined [here](/integrate/data-model-overview#localrequeststatus).

## Parameters

- The `id` of the incoming request.

## On Success

- The [LocalRequest](/integrate/data-model-overview#localrequest) corresponding to the id.

## On Failure

- There is no such incoming request.
