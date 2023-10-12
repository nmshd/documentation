{{properties.description}}

{% include properties_list.html %}

This use-case is intended to create one request for a single peer. One should [check if outgoing request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) before creating the request with this use-case.

## Parameters

- The content for the to be created request is described in the [data model](/integrate/data-model-overview#request).
- The peer is the address of the recipient of this request. There can only be one peer per request.

## On Success

- The [LocalRequest](http://localhost:4000/integrate/data-model-overview#localrequest) is created but so far not sent to the peer. It needs to be manually submitted to the peer, e.g. [by sending a message](http://localhost:4000/integrate/requests-over-messages).

## On Failure

- The request cannot be created if the peer is unknown.
- The request cannot be created if the request content is malformed. Please [check if the outgoing request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) for more details.

{% include usecase_connector_intro %}

{% include rapidoc %}
