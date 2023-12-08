{{properties.description}}

{% include properties_list.html %}

This use-case queries [RelationshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)
of the Identity.

## Parameters

All parameters are optional. If no parameter is given, all RelationshipTemplates are returned.

- `isOwn` indicates if the RelationshipTemplate was created by the current Identity.
- `createdAt` is the ISODateTime the RelationshipTemplate was created at.
- `expiresAt` is the ISODateTime the RelationshipTemplate expires.
- `createdBy` is the enmeshed Address of the Identity that created the RelationshipTemplate.
- `createdByDevice` is the `id` of the Device that created the RelationshipTemplate.
- `maxNumberOfAllocations` is the number of times the RelationshipTemplate can be accessed by different Identities to initiate a Relationship. The Backbone returns an error, if one accesses a RelationshipTemplate with no allocations left. Accessing the same RelationshipTemplate with the same Identity multiple times doesn't affect the number of allocations. The allocation counts, even if the Identity does not accept the RelationshipTemplate by discarding it.

## On Success

- Returns all [RelationshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) that match the `query`.

## On Failure

- The parameters are malformed.
