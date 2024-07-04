{{properties.description}}

{% include properties_list.html %}

Revokes the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.

## Parameters

- `relationshipId`, the id of the Relationship

## On Success

- Revokes the Relationship
- Returns the revoked Relationship

## On Failure

- The `relationshipId` does not resolve to a pending Relationship
- You have tried to revoke a Relationship created by the peer
