{{properties.description}}

{% include properties_list.html %}

This use-case is intended to search for a peer's relationship attribute that was created
in a relationship with a third party.

## Parameters

- The `query` for the to be searched attribute is described in the [data model](/integrate/data-model-overview#thirdpartyrelationshipattributequery).

## On Success

- A list of attributes that conform to the query is returned.

## On Failure

- There are no attributes that match the query.
- You are not allowed to query a given third party.
- The query is malformed.
