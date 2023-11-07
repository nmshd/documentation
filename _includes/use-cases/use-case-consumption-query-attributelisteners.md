{{properties.description}}

{% include properties_list.html %}

This use-case is intended to query all [attribute listeners]({% link _docs_integrate/data-model-overview.md %}#localattributelistener)
based on a query.

### Parameter

- The `query` optionally describes the searched attribute listeners, if no
  query is given all attribute listeners are returned.

### On Success

- The [LocalAttributeListeners]({% link _docs_integrate/data-model-overview.md %}#localattributelistener)
  that match the query.
