{{properties.description}}

{% include properties_list.html %}

This use-case queries [RelatonshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)
created by a `peer`.

## Paramters

- `createdAt` is the ISODateTime the relationship template was created at.
- `expiresAt` is the date the relationship template expires at.
- `createdBy` is the enmeshed address that created the relationship template.
- `createdByDevice` is the `id` of the device that created the relationship template.
- `maxNumberOfAllocations` is the amount of times the template can be used.

## On Success

- Returns all [relationship templates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)
  that match the `query`.
