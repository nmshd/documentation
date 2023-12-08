{{properties.description}}

{% include properties_list.html %}

This use-case loads a peer's [RelatonshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) from the Backbone by a given reference to the RelationshipTemplate.

## Parameters

There are three different options to use this use-case, depending on the actual information received by the peer:

- by knowing an `id` and the `secretKey` of the peer's RelationshipTemplate (RelationshipTemplateReference)
  - `id` of the RelationshipTemplate
  - `secretKey` as Base64URL encoding for decrypting the RelationshipTemplate
- by knowing a `reference` of the peer's RelationshipTemplate (RelationshipTemplateReferenceTruncated)
  - `reference` as string
- by knowing a `reference` of the peer's Token, which references to the peer's RelationshipTemplate TokenReferenceTruncated
  - `reference` as string

## On Success

- Returns the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).

## On Failure

- The parameters are malformed.
- The RelationshipTemplate does not exist.
- The RelationshipTemplate is expired.
- The `maxNumberOfAllocations` of the RelationshipTemplate are depleted.
