{{properties.description}}

{% include properties_list.html %}

Be advised that this is a Runtime-internal use-case which is automatically used by the module system. You should not call this use-case without having good reason.
{: .notice--warning}

This use-case is intended to create and instantly complete an outgoing Request which was shared by a RelationshipTemplate and the Response has been received by an incoming RelationshipCreationChange.

## Parameters

- `templateId` identifies the RelationshipTemplate the response originates from.
- `responseSourceId` references the response either a [message]({% link _docs_integrate/data-model-overview.md %}#Message)
  or a [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange).
- `response` is the content of the response.

## On Success

- Creates and completes the outgoing request.
- Returns the corresponding [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest).

## On Failure

- The template could not be found.
- The response source could not be found.
