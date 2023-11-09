{{properties.description}}

{% include properties_list.html %}

This use-case intends to create a relationship based on a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)
whith the sender.

## Parameters

- `templateId` references the template that was received from a party a relationship
  will be initiated with.
- `content` is data needed to create the relationship this is based on the template.

## On Success

- Creates and returns the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).

## On Failure

- The `templateId` does not resolve to a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
