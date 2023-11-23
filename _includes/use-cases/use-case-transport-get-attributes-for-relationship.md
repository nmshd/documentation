{{properties.description}}

{% include properties_list.html %}

Retrieve all [localattributes]({% link _docs_integrate/data-model-overview.md %}#localattributes) that are related to the given relationship id.

## Parameters

- `id` of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).
- `hideTechnical` indicates if [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes)
  marked as `technical` should be hidden.

## On Success

- All [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattributes) that are related to
  the relationship.

## On Failure

- The `id` did not resolve to a relationship.
