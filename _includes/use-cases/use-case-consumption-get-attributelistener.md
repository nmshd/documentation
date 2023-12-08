{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve an [Attribute Listener]({% link _docs_integrate/data-model-overview.md %}#localattributelistener) by its id.

## Parameter

- The unique `id` identifying the Attribute Listener.

## On Success

- Returns the [LocalAttributeListener]({% link _docs_integrate/data-model-overview.md %}#localattributelistener) that corresponds to the `id`.

## On Failure

- There is no such Attribute Listener.
