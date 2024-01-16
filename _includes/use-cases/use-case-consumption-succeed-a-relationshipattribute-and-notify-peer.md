{{properties.description}}

{% include properties_list.html %}

This use case allows the owner to update a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), while automatically handling the coherent versioning at both your and your peer's side.
[Succeeding an own RelationshipAttribute]({% link _docs_integrate/updating-identityattributes-of-yourself.md %}#succeeding-own-relationshipattributes), a new version with the updated content will be created at your side.
In its `succeeds` property it links to the predecessing version, which in turn is also updated and links to the newly created version in its `succeededBy` property.
Thus, a doubly linked list is established, ensuring every version to have not more that one predecessor or successor.
Once the succession at your side is completed, a Notification is sent to your peer, triggering the succession at their side, such that both your succession chains coincide.

## Parameters

- `predecessorId`: the ID of the RelationshipAttribute you want to succeed
- The `successorContent` of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), limited to its `value`, `validFrom` and `validTo` properties that may be changed by a succession

## On Success

- The response returns a `predecessor` and a `successor` Attribute, as well as the `notificationId` of the notification sent to the peer.
- The `predecessor` is an updated version of the own shared RelationshipAttribute, having the `succeededBy` field set to the `successor`'s ID.
- The `successor` is a new own shared RelationshipAttribute version with the specified `successorContent`. Its `succeeds` property links to the `predecessor`.

## On Failure

- The response cannot be created, if the `predecessorId` doesn't belong to a valid own RelationshipAttribute.
- The response cannot be created, if the RelationshipAttribute belonging to the `predecessorId` already has a successor.
- The response cannot be created, if the parameters are malformed.
