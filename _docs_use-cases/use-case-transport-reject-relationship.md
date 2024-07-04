{{properties.description}}

{% include properties_list.html %}

Rejects the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.

## Parameters

- `relationshipId`, the id of the Relationship

## On Success

- Rejects the Relationship
- Returns the rejected Relationship

## On Failure

- The `relationshipId` does not resolve to a pending Relationship
- You have tried to reject a Relationship created by yourself
