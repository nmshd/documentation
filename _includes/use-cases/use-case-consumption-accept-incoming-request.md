{{properties.description}}

{% include properties_list.html %}

This use-case attempts to accept an incomming [Request]({% link _docs_integrate/data-model-overview.md %}#request).
It is advised to [check if incoming request can be accepted](/use-case-consumption-check-if-incoming-request-can-be-accepted)
in advance.

## Parameters

- The `id` of the incomming request.
- The decision for each individual [RequestItem]({% link _docs_integrate/data-model-overview %}#request)
  expressed as the appropriate [Parameters defined in the Data Model]({% link _docs_integrate/requests-and-requestitems).

## On Success

- The request is processed according to the decisions made.
- The sending peer is informed about your decisions.

## On Failure

- The decisions do not match the request items.
- An item that has the mustBeAccepted field set was declined.
