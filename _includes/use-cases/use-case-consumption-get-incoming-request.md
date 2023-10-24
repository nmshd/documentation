{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve an [incomming request]({% link _docs_integrate/data-model-overview %}#request)
by it's id. The differences of an outgoing and an incomming request are defined [here]({% link _docs_integrate/data-model-overview %}#localrequeststatus).

## Parameters

- The `id` of the incoming request.

## On Success

- The [LocalRequest]({% link _docs_integrate/data-model-overview %}#localrequest) corresponding to the id.

## On Failure

- There is no such incoming request.
