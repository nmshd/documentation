{{properties.description}}

{% include properties_list.html %}

This use-case intends to create a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) based on a received [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).

## Parameters

- `templateId` references the RelationshipTemplate that was received from a party.
- `content` can be used as a response with arbitrary data to the peer. This response is usually related to the data received by the RelationshipTemplate, e.g. the RelationshipTemplate contains [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and the content here contains the respective [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request.

## On Success

- Creates and returns the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).

## On Failure

- The `templateId` does not resolve to a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
