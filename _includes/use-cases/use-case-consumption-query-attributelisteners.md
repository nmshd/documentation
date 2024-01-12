{{properties.description}}

{% include properties_list.html %}

This use-case is intended to query all [Attribute Listeners]({% link _docs_integrate/data-model-overview.md %}#localattributelistener)
based on a query.

## Parameter

- The `query` optionally describes the searched Attribute Listeners. If no query is given all Attribute Listeners are returned.

## On Success

- Returns a list of [LocalAttributeListeners]({% link _docs_integrate/data-model-overview.md %}#localattributelistener) that match the query.

## On Failure

- The parameters are malformed.
