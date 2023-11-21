{{properties.description}}

{% include properties_list.html %}

Rejects a [RelationshipChange]({% link _docs_integrate/data-model-overview.md %}#relationshipChange) with the given change Id.

## Parameters

- `relationshipId`
- `changeId`
- `content`

## On Success

- The relationship change is rejected.

## On Failure

- No such relationship.
- The `changeId` is not related to the `relationshipId`.
