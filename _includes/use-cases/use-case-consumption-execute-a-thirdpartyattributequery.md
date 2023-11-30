{{properties.description}}

{% include properties_list.html %}

This use-case is intended to execute an incoming ThirdPartyRelationshipAttributeQuery 
(e.g. of a ReadAttributeRequestItem) which returns a list of matching 
[Relationship Attributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute)
of another contact.

## Parameters

- The `query` for the to be searched attribute is described in the [data model]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery).

## On Success

- A list of attributes that conform to the query is returned.

## On Failure

- The query is malformed.
