This use-case is intended to create and instantly complete an outgoing request
received from a relationship template response.

### Parameters 

- `templateId` identifies the relationship template the response originates from.
- `responseSourceId` references the response either a [message]({% link _docs_integrate/data-model-overview.md %}#Message) 
or a [relationship change]({% link _docs_integrate/data-model-overview.md %}#relationshipchange). 
- `response` is the content of the response.

### On Success

- Creates and completes the outgoing request.
- Returns the corresponding [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest).

### On Failure

- The template could not be found.
- The response source could not be found.
