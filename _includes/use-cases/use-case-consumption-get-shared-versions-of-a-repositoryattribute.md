{{properties.description}}

{% include properties_list.html %}

This use-case allows you to retrieve a list of own shared [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) for a specified RepositoryAttribute.

## Parameters

- The `attributeId` belonging to a RepositoryAttribute you would like to know all shared versions of
- Optionally the returned [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) can be limited to those shared with specific `peers`.
- `onlyLatestVersions` omits succeeded versions; by default this is set to be `true`.

## On Success

- A list of own shared IdentityAttribute versions of the RepositoryAttribute given as input will be returned.
- If `peers` were speficied, the list is limited to the entries shared with those peers.
- If `onlyLatestVersions` is disabled, all versions will be returned, even if they already have successors.

## On Failure

- No LocalAttributes can be returned, if the `attributeId` correlates to a RelationshipAttribute.
- No LocalAttributes can be returned, if the `attributeId` correlates to an IdentityAttribute with a `shareInfo`.
- No LocalAttributes can be returned, if the an empty list is provided for `peers`.
- No LocalAttributes can be returned, if the `peers` are unknown.
- No LocalAttributes can be returned, if the parameters are malformed.
