{{properties.description}}

{% include properties_list.html %}

Create a relationship template.

A relationship template can be used by a third party to initiate a relationship with you.
Read [more]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).

## Parameters

- `expiresAt` is the ISODateTime the template expires at.
- `content` describes the structure of the template for [example]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent).
- `maxNumberOfAllocations` is the number of times the QR-Code can be used to initiate a relationship.

## On Success

- Returns the created [relationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).

## On Failure

- The `content` is malformed.
