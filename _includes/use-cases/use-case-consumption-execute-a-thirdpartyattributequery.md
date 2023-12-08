{{properties.description}}

{% include properties_list.html %}

This use-case is intended to execute an incoming [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery)
(e.g. received by a ReadAttributeRequestItem) which returns a list of matching
[Relationship Attributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute)
of another peer.

## Parameters

- The `query` for the RelationshipAttributes as described in the [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery).

## On Success

- Returns the `RelationshipAttributes` as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that match the given query.

## On Failure

- The query is malformed.
