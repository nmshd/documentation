{{properties.description}}

{% include properties_list.html %}

This use-case queries [Relationships]({% link _docs_integrate/data-model-overview.md %}#relationship) of the Identity.

## Parameters

- `peer` is the enmeshed Address of the peer.
- `status` is the status of the Relationship.
- `template.id` is the id of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) that was used to initiate the Relationship.

## On Success

- Returns all [Relationships]({% link _docs_integrate/data-model-overview.md %}#relationship) that match the `query`.

## On Failure

- The parameters are malformed.
