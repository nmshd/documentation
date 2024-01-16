{{properties.description}}

{% include properties_list.html %}

If the value of a private [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) changes, this can be replicated in enmeshed with the SucceedIdentityAttribute use case.
It allows you to update the content and keeps a coherent history of all versions by establishing a doubly linked list, using the Attribute parameters `succeeds` and `succeededBy`.
Hence, every Attribute may have exactly one predecessor and one successor.
In case you shared the predecessing version of the IdentityAttribute, own shared IdentityAttribute copies will only be succeeded, too, if you decide to [notify the peer]({% link _docs_use-cases/use-case-consumption-notify-peer-about-identityattribute-succession.md %}) of the respective shared IdentityAttribute about the succession.

## Parameters

- `predecessorId`: the ID of the privat IdentityAttribute without `shareInfo` you want to succeed
- The `successorContent` according to the parameters of an IdentityAttribute as described in the [data model]({% link _docs_integrate/data-model-overview.md %}#identityattribute), except for the `owner`, which is automatically set to your address

## On Success

- The response returns a `predecessor` and a `successor` Attribute.
- The `predecessor` is an updated version of the IdentityAttribute without `shareInfo` belonging to `predecessorId`, having the `succeededBy` field set to the `successor`'s ID.
- The `successor` is a new IdentityAttribute without `shareInfo` with the updated `successorContent`. Its `succeeds` property links to the `predecessor`.

## On Failure

- The response cannot be created, if the `predecessorId` belongs to a RelationshipAttribute.
- The response cannot be created, if the `predecessorId` belongs to an IdentityAttribute with a `shareInfo`.
- The response cannot be created, if the Attribute already has a successor.
- The response cannot be created, if the successorContent contains invalid changes, e.g. of the value type.
- The response cannot be created, if the parameters are malformed.
