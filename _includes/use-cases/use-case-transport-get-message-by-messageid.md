{{properties.description}}

{% include properties_list.html %}

This use-case retrieves a [Message]({% link _docs_integrate/data-model-overview.md %}#message)
by it's `id`.

## Parameters

- `id` of the message.

## On Success

- Returns the message that corresponds to the `id`.

## On Failure

- `id` does not resolve to a message.
- The cache of the message is empty.
