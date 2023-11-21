{{properties.description}}

{% include properties_list.html %}

This use-case queries [RelationshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)
related to the identity.

## Parameters

- `isOwn` indicates if the template was created by you.
- `createdAt` is the ISODateTime the template was created at.
- `expiresAt` is the date the template expires at.
- `createdBy` is the enmeshed address that created the template.
- `createdByDevice` is the device id that created the template.
- `maxNumberOfAllocations` is the maximum number of times the template can be used.

## On Success

- Returns all [RelationshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) that match the `query`.
