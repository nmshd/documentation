{{properties.description}}

{% include properties_list.html %}

Retrieve all [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattributes) that are related to the given Relationship id.

## Parameters

- `id` of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).
- `hideTechnical` indicates if [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute)
  marked as `isTechnical` should be filtered out.

## On Success

- All [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that are related to the Relationship.

## On Failure

- The `id` did not resolve to a Relationship.
