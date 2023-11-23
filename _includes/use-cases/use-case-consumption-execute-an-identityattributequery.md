{{properties.description}}

{% include properties_list.html %}

This use-case is intended to query the [identity attributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute)
of the identity.

## Parameters

- The `query` for the searched identity attribute is described in the [data model]({% link _docs_integrate/data-model-overview.md %}#identityattributequery).

## On Success

- Returns all identity [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that conform to the query.

## On Failure

- The query was malformed. Please make sure it complies to the [data model]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery).
