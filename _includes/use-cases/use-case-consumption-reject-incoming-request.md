{{properties.description}}

{% include properties_list.html %}

This use-case attempts to reject an incoming [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest).

It is advised to [check if the incoming Request can be accepted](/use-case-consumption-check-if-incoming-request-can-be-rejected) in advance.

## Parameters

- The `id` of the incoming LocalRequest.
- The decision for each individual [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem)
  expressed as the appropriate [Parameters defined in the Data Model]({% link _docs_integrate/data-model-overview.md %}deciderequestitemparameters).

## On Success

- All RequestItems of the Request are rejected
- A Message is sent to the requesting peer which contains the Response to the Request.
- The LocalRequest is returned

## On Failure

- The decisions do not match the request items.
- The parameters are malformed.
