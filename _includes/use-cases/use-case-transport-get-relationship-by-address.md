{{properties.description}}

{% include properties_list.html %}

This use-case retrieves a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)
by the `address` of the `peer`.

## Parameters

- `address` of the peer.

## On Success

- The `Relationship` that was inititated with the `peer`.

## On Failure

- There is no `Relationship` linked to the `peer`.
