{{properties.description}}

{% include properties_list.html %}

This use-case attempts to accept an incoming [Request](/integrate/data-model-overview#request).
It is advised to [check if incoming request can be accepted](/use-case-consumption-check-if-incoming-request-can-be-accepted)
in advance.

## Parameters

- The `id` of the incoming request.
- The decision for each individual [RequestItem](/integrate/data-model-overview#request)
  expressed as the appropriate [Parameters defined in the Data Model](/integrate/requests-and-requestitems).

## On Success

- The request is processed according to the decisions made.
- The sending peer is informed about your decisions.

## On Failure

- The decisions do not match the request items.
- An item that has the mustBeAccepted field set was declined.
