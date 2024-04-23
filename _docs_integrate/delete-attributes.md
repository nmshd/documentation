---
# Start automatic generation
permalink: integrate/delete-attributes
redirect_from:
  - /integrate/delete-an-attribute
published: true
title: "Delete Attributes"
type: scenario
toc: true
properties:
  - id: SC055
  - category: Manage Attributes
  - description:
  - customer: All
  - component: integrate
  - level: Advanced
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: delete-attributes
require:
required_by:
# End automatic generation
---

The exact process of deleting an Attribute depends on the kind of Attribute at hand.
[Creating an Attribute]({% link _docs_integrate/create-attribute-for-yourself.md %}), we must distinguish between [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) and [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).
In the former case, a so-called RepositoryAttribute is created, which is a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) without `shareInfo`, that you are the `owner` of.
Afterwards, you may [share it]({% link _docs_integrate/share-attribute-with-peer.md %}) with a peer, which yields the creation of an own shared IdentityAttribute.
This is a LocalAttribute with the copied `content` of the RepositoryAttribute, but an additional `shareInfo` property.
Doing so, also a LocalAttribute with the same `content` and a respective `shareInfo` is created for the peer, which is referred to as peer shared Attribute.
In the case of RelationshipAttributes we have own shared and peer shared RelationshipAttributes analogeously, however, no unshared LocalAttributes like we have in the case of IdentityAttributes with RepositoryAttributes.
These different kinds of Attributes have different demands that need to be taken into account, wanting to delete them.

In general, you can only delete data from your own wallet and never from the peer's.
So, for example you can delete Attributes a peer shared with you from your wallet, but you can't delete Attributes you shared with a peer from their wallet.
Wanting to do so, you need to send a Request to the peer, asking them to delete the respective Attribute.
Note that this doesn't automatically deletes their Attribute, since the peer may have a valid reason to still keep it for a certain amount of time.

## Request the deletion of own Attributes from peer

Wanting to delete a peer shared Attribute owned by you from the peer technically describes the endeavor of withdrawing the permission you gave them to use your Attribute.
To this end, a [Request]({% link _docs_integrate/data-model-overview.md %}#request) must be used with a [DeleteAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#deleteattributerequestitem).
As a parameter, the `attributeId` of the peer shared Attribute you would like the peer to delete must be provided.
Note, that the peer shared Attribute at the peer's side has the same `id` like the own shared Attribute at your side.
A possible Request for deleting a peer shared Attribute from a peer could look as follows:

```json
{
  "@type": "Request",
  "items": [
    {
      "@type": "DeleteAttributeRequestItem",
      "mustBeAccepted": true,
      "attributeId": "<ID of peer shared Attribute>"
    }
  ]
}
```

Of course, it is also possible to request the deletion of multiple peer shared Attributes within a single Request.
For this purpose, several DeleteAttributeRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the Request.

Before sending the Request, we recommend to [validate its content]({% link _docs_use-cases/use-case-consumption-check-if-outgoing-request-can-be-created.md %}), since this will give you additional information in case of an error.
{: .notice--info}

Next, send the Request to the peer.
You can either do so by [Message]({% link _docs_integrate/data-model-overview.md %}#message) or by a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate), using the `onExistingRelationship` property of a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent).
For a detailed explanation check out our guides on how to send [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) and [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}).

Once the peer received the Request, they can accept or reject it.
If they want to [accept it]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}), they must use the [AcceptDeleteAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptdeleteattributerequestitemparameters).
Doing so, they specify a `deletionDate` on which they plan to delete the peer shared Attribute.
In the given example, the payload would look like the following:

```json
{
  "items": [
    {
      "accept": true,
      "deletionDate": "<date the peer shared Attribute will be deleted>"
    }
  ]
}
```

Now, the [enmeshed Runtime]({% link _docs_explore/61-runtime.md %}) sets the `deletionInfo` of the corresponding peer shared Attribute of the peer with `deletionStatus` `"ToBeDeleted"` and the specified `deletionDate`.
The same is done for all predecessors of the peer shared Attribute.
Then, the appropriate [DeleteAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#deleteattributeacceptresponseitem) is generated and sent back in the [Reponse]({% link _docs_integrate/data-model-overview.md %}#response) to the Sender of the Request.
There, the `deletionInfo` of the corresponding own shared Attribute and its predecessors is set with `deletionStatus` `"ToBeDeletedByPeer"` and the `deletionDate` received in the Response.

It is also possible for the peer to reject the DeleteAttributeRequestItem, if its `mustBeAccepted` property is set `false`, or to [reject the Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) for deleting a peer shared Attribute as a whole, if they have a valid reason for keeping the respective peer shared Attribute.
In this case, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) must be used and it is advised to provide a `message`, informing the Sender of the Request about the reason not to delete the peer shared Attribute.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/a738fd76-2fe0-4e3e-a0fd-bec86b3b7939" id="ZGDlhHzeKlb-"></iframe></div>

## Delete peer shared Attributes

The actual deletion of a peer shared Attribute happens in a separate step.
This can either be triggered if the `deletionInfo.deletionDate` is reached, in case the deletion was requested by the owner of the peer shared Attribute, or if the peer decides they no longer need it.

To [delete a peer shared Attribute]({% link _docs_use-cases/use-case-consumption-delete-a-peer-shared-attribute-and-notify-peer.md %}), only its `attributeId` must be specified.
Internally, not just the given peer shared Attribute is deleted, but also all its predecessors, in case there were any.
Moreover, if the peer shared Attribute had a successor, its `succeeds` property will be set to undefined, as the corresponding predecessor no longer exists.
Then, a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification) with a [PeerSharedAttributeDeletedByPeerNotificationItem]({% link _docs_integrate/data-model-overview.md %}#peersharedattributedeletedbypeernotificationitem) is generated and sent to the owner of the peer shared Attribute, informing them that you deleted the Attribute they shared with you.
Consequently, the `deletionInfo` of their corresponding own shared Attribute and of all potential predecessors is updated with `deletionStatus` `"DeletedByPeer"` and the time of receiving the Notification as `deletionDate`.
In case the owner already [deleted their own shared Attribute](#delete-own-shared-attributes), nothing happens.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/2385af4a-4bfa-43f4-a119-afb51273194d" id="HNEl2zIWWLxc"></iframe></div>

If you want to [delete a RelationshipAttribute that is owned by a third party]({% link _docs_use-cases/use-case-consumption-delete-a-third-party-owned-relationshipattribute-and-notify-peer.md %}), i.e. neither you nor the peer you have the according Relationship with, the process will work analogously.
In this case, a [ThirdPartyOwnedRelationshipAttributeDeletedByPeerNotificationItem]({% link _docs_integrate/data-model-overview.md %}#thirdpartyownedrelationshipattributedeletedbypeernotificationitem) will be sent.
{: .notice--info}

## Delete own shared Attributes

The `owner` can always delete their LocalAttributes without having to ask for consent, even if there are shared copies of it.
Hence, it is always possible to delete own shared Attributes.
Doing so before the [peer deleted their copy of the shared Attribute](#delete-peer-shared-attributes), however, you lose the information of having shared the Attribute with them and whether they keep their peer shared Attribute or delete it.
Thus, we recommend to [request the deletion of own Attributes from the peer](#request-the-deletion-of-own-attributes-from-peer) before deleting them yourself.

If you decide to [delete an own shared Attribute]({% link _docs_use-cases/use-case-consumption-delete-an-own-shared-attribute-and-notify-peer.md %}), you must specifiy its `attributeId`.
Then, in addition to the own shared Attribute itself, also all its predecessors will be deleted, given there were any.
Moreover, if the own shared Attribute had a successor, its `succeeds` property will be set to undefined, as the corresponding predecessor no longer exists.
Then, a Notification with an [OwnSharedAttributeDeletedByOwnerNotificationItem]({% link _docs_integrate/data-model-overview.md %}#ownsharedattributedeletedbyownernotificationitem) is generated and sent to the peer you shared the Attribute with, informing them that you deleted that own shared Attribute.
If they already deleted their corresponding peer shared Attribute or marked it for deletion, nothing will change.
However, if the `deletionInfo` of their peer shared Attribute was undefined before, since you didn't send a Request for Attribute deletion or the Request was rejected, a `deletionInfo` will be set.
Its `deletionStatus` will be set to `"DeletedByOwner"` and the `deletionDate` will be the time of receiving the Notification.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/9aaf5a91-803b-4180-b0c7-4adb7bc5ced6" id="xQEl1j.jqJxq"></iframe></div>

## Delete RepositoryAttributes

Lastly, you can also [delete RepositoryAttributes]({% link _docs_use-cases/use-case-consumption-delete-a-repositoryattribute.md %}), i.e. LocalAttributes that are owned by yourself and whose `shareInfo` property is undefined.
Analogously to the cases above, also all predecessors of the RepositoryAttribute with specified `attributeId` will be deleted.
Additionally, the `succeeds` property of the successor will be removed in case of [Attribute succession]({% link _docs_integrate/succeed-attribute-to-update-its-value.md %}).

Furthermore, if there are any shared copies of the RepositoryAttribute, their `shareInfo` will be updated such that `sourceAttribute` doesn't link to the deleted RepositoryAttribute anymore.
As a consequence, the [get shared versions of a RepositoryAttribute use case]({% link _docs_use-cases/use-case-consumption-get-shared-versions-of-a-repositoryattribute.md %}) will no longer return those shared versions.
Now, in case you shared a RepositoryAttribute with a peer, succeeded it without notifying the peer and then delete the source Attribute of the predecessor, you won't be able to [notify the peer about the succession]({% link _docs_use-cases/use-case-consumption-notify-peer-about-repositoryattribute-succession.md %}) of this no longer existing RepositoryAttribute anymore.
Instead, if you want to inform them about a newer version of this RepositoryAttribute, you must [share that version]({% link _docs_use-cases/use-case-consumption-share-a-repositoryattribute.md %}) again.
