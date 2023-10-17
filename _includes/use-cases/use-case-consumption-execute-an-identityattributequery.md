{{properties.description}}

{% include properties_list.html %}

This use-case is intended to query the [identity attributes](/integrate/data-model-overview#identityattribute)
of the identity.

## Parameters

- The `query` for the searched identity attribute is described in the [data model](/integrate/data-model-overview#identityattributequery).

## On Success

- Returns all identity attributes that conform to the query.

## On Failure

- No corresponding attributes could be found.
- The query was malformed. Please make sure it complies to the [data model](/integrate/data-model-overview#relationshipattributequery).
