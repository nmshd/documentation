{{properties.description}}

{% include properties_list.html %}

This use-case is intended to execute an incoming
[IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery) (e.g. of a ReadAttributeRequestItem) which returns a list of matching [Identity Attributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute).

## Parameters

- The `query` for the IdentityAttributes as described in the [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery).

## On Success

- Returns the `IdentityAttributes` as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that match the given query.

## On Failure

- The query was malformed.
