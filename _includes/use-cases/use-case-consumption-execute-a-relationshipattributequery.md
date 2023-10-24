{{properties.description}}

{% include properties_list.html %}

This use-case is intended to query a peer's [relationship attributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).

## Parameters

- The `query` for the searched relationship attribute is described in the [data model]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery).

## On Success

- Returns the relationship attribute that matches the query.

## On Failure

- No corresponding attributes could be found.
- The query was malformed. Please make sure it complies to the [data model]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery).
