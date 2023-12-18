{{properties.description}}

{% include properties_list.html %}

This use case allows you to retrieve a list of shared [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) for a specified private IdentityAttribute without `shareInfo`.

## Parameters

- The `attributeId` belonging to an IdentityAttribute without `shareInfo` you would like to know all shared versions of
- Optionally the returned IdentityAttributes can be limited to those shared with specific `peers`
- `onlyLatestVersionPerPeer` omits succeeded versions; by default this is set to be `true`

## On Success

- A list of the latest version per peer of the IdentityAttribute given as input for all peers will be returned. The returned IdentityAttributes have the `shareInfo` field set.
- If `peers` were speficied, the list is limited to the entries shared with those peers.
- If `onlyLatestVersionPerPeer` is disabled, all versions will be returned, even if they already have successors.

## On Failure

- No Attributes can be returned, if the `attributeId` belongs to a RelationshipAttribute.
- No Attributes can be returned, if the `attributeId` belongs to an IdentityAttribute with a `shareInfo`.
- No Attributes can be returned, if the `peers` are unknown.
- No Attributes can be returned, if the parameters are malformed.
