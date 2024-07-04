{{properties.description}}

{% include properties_list.html %}

Accepts the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.

## Parameters

- `relationshipId`, the id of the Relationship

## On Success

- Accepts the Relationship
- Returns the accepted Relationship

## On Failure

- The `relationshipId` does not resolve to a pending Relationship
- You have tried to accept a Relationship created by yourself
