{{properties.description}}

{% include properties_list.html %}

Accepts a [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipChange) with the given changeId.

## Parameters

- `relationshipId` the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)'s id which should be changed by the RelationshipChange
- `changeId` the RelationshipChange's id
- `content` a possible answer to the respective RelationshipChange which the peer can fetch

## On Success

- The RelationshipChange is accepted and the given `content` made available for the peer.
- Returns the changed [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)

## On Failure

- There is no such Relationship or RelationshipChange.
- The `changeId` is not related to the `relationshipId`.
