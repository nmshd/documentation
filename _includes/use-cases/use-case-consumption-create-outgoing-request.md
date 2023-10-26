{{properties.description}}

{% include properties_list.html %}

This use-case is intended to create an actionable [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) based on a given `request` (as a [Request]({% link _docs_integrate/data-model-overview.md %}#localrequest) datastructure) for a given `peer`.
One can (and should) [check if the outgoing request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) before creating the request with this use-case.

## Parameters

- The `content` for the to be created request is described in the [data model]({% link _docs_integrate/data-model-overview.md %}#request).
- The `peer` is the address of the recipient of this request. There can only be one peer per request.

## On Success

- A [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) for the given parameters is created in status `Draft` but so far not sent to the given peer.
- It needs to be manually submitted to the peer, e.g. [by sending a message]({% link _docs_integrate/requests-over-messages.md %}).

## On Failure

- The request cannot be created if the peer is unknown.
- The request cannot be created if the request content is malformed. Please [check if the outgoing request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) for more details.

Please [check if the outgoing request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) for more details.
