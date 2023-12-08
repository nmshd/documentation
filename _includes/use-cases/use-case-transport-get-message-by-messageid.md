{{properties.description}}

{% include properties_list.html %}

This use-case retrieves a [Message]({% link _docs_integrate/data-model-overview.md %}#message)
by its `id`.

## Parameters

- `id` of the Message.

## On Success

- Returns the Message that corresponds to the `id`.

## On Failure

- `id` does not resolve to a Message.
