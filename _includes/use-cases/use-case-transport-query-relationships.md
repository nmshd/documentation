{{properties.description}}

{% include properties_list.html %}

This use-case queries [Relationships]({% link _docs_integrate/data-model-overview.md %}#relationship)
related to the identity.

## Parameters

- `peer` is the enmeshed address of the peer.
- `status` is the status of the relationship.
- `template.id` is the template id that was used to initiate the relationship.

## On Success

- Returns all [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) that match the `query`.
