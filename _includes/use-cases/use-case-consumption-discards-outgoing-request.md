{{properties.description}}

{% include properties_list.html %}

This use-case is intended to discard an outgoing [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) that has not been sent to the peer yet and is thus still in status `Draft`.

## Parameters

- `id` references the outgoing LocalRequest that is to be discarded.

## On Success

- The LocalRequest is deleted and returned.

## On Failure

- The LocalRequest could not be found.
- The LocalRequest is not in status `Draft`.
