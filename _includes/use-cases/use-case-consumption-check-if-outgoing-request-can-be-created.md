{{properties.description}}

{% include properties_list.html %}

This use-case is intended to check if a [LocalRequest](integrate/data-model-overview#localrequest) can be created
based on a given `request` (as a [Request](integrate/data-model-overview#localrequest) datastructure) for a given `peer`.

## Parameters

- The `content` for the to be created request is described in the [data model](integrate/data-model-overview#request).
- The `peer` is the address of the recipient of this request. There can only be one peer per request.

## On Success
 Please [check if the outgoing request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) for more details.
- A [LocalRequest](integrate/data-model-overview#localrequest) for the given parameters can be created.

## On Failure

- The request cannot be created if the peer is unknown.
- The request cannot be created if the request content is malformed.
- The response contains a detailed error message.
