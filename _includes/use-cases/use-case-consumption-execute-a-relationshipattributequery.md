{properties.description}

{% include properties_list.html %}

This use-case is intended to execute an incoming [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) (e.g. received by a ReadAttributeRequestItem) which returns a list of matching [Relationship Attributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).

## Parameters

- The `query` for the RelationshipAttributes as described in the [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery).

## On Success

- Returns the `RelationshipAttributes` as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that match the given query.

## On Failure

- The query was malformed.
