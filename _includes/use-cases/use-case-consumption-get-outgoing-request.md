{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve an outgoing [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)
by its id. The differences of outgoing and an incoming Requests are defined [here]({% link _docs_integrate/data-model-overview.md %}#localrequeststatus).

## Parameters

- The `id` of the outgoing Request.

## On Success

- Returns the outgoing [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) corresponding to the id.

## On Failure

- There is no such outgoing Request.
