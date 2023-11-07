{{properties.description}}

{% include properties_list.html %}

This use-case is intended to discard a outgoing request that has not been sent yet and 
is thus in `draft`.

### Parameters

- `id` references the outgoing request that is to be discarded.

### On Success

- The request is deleted.

### On Failure

- The request could not be found.
- The request is not in status `Draft`.
