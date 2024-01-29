{{properties.description}}

{% include properties_list.html %}

This use-case retrieves a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)
by the Address of a peer.

## Parameters

- `address` of the peer.

## On Success

- The Relationship that was inititated with the `address`.

## On Failure

- There is no Relationship linked to the given `address`.
