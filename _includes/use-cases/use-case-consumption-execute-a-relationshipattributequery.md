{properties.description}

{% include properties_list.html %}

This use-case is intended to execute an incoming RelationshipAttributeQuery (e.g. of a ReadAttributeRequestItem)
which returns a list of matching [Relationship Attributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).

## Parameters

- The `query` for the searched relationship attribute is described in the [data model]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery).

## On Success

- Returns the `RelationshipAttribute` that matches the query.

## On Failure

- The query was malformed. Please make sure it complies to the [data model]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery).
