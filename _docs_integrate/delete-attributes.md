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
[Creating an Attribute]({% link _docs_integrate/create-attributes-for-yourself.md %}), we must distinguish between [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) and [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).
In the former case, a so-called [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) is created.
Afterwards, you may [share it]({% link _docs_integrate/share-attributes-with-peer.md %}) with a peer, which yields the creation of associated [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails).
Doing so, also a [PeerIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute) with the same `content` is created for the peer.
In the case of RelationshipAttributes we have [OwnRelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) and [PeerRelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute).
Analogeously, sharing an OwnRelationshipAttribute or a PeerRelationshipAttribute with a third party leads to the the creation of associated AttributeForwardingDetails for the emitter and a [ThirdPartyRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattribute) for the third party.
These different kinds of Attributes have different demands that need to be taken into account, wanting to delete them.
For example, it is straightforward to delete an OwnIdentityAttribute that has not been shared with a peer.
To [delete such an Attribute]({% link _docs_use-cases/use-case-consumption-delete-an-attribute-and-notify.md %}), simply specify its `attributeId`.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/6c6d770c-f6f3-4d70-a4e9-cbfb46cc93a2" id="RT__5TJIaYhp"></iframe></div>

In general, you can only delete data from your own wallet and never from the peer's.
So, for example you can delete Attributes a peer shared with you from your wallet, but you can't delete Attributes you shared with a peer from their wallet.
Wanting to do so, you need to send a Request to the peer, asking them to delete the respective Attribute.
Note that this doesn't automatically delete their Attribute, since the peer may have a valid reason to still keep it for a certain amount of time.

## Request the deletion of emitted Attributes from recipient

Wanting to delete an emitted Attribute from its recipient technically describes the endeavor of withdrawing the permission you gave them to use your Attribute.
To this end, a [Request]({% link _docs_integrate/data-model-overview.md %}#request) must be used with a [DeleteAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#deleteattributerequestitem).
As a parameter, the `attributeId` of the Attribute you would like the recipient to delete must be provided.
Note, that the Attribute at the recipient's side has the same `id` like the emitted Attribute at your side.
A possible Request for deleting an Attribute could look as follows:

```json
{
  "@type": "Request",
  "items": [
    {
      "@type": "DeleteAttributeRequestItem",
      "mustBeAccepted": true,
      "attributeId": "<ID of emitted Attribute>"
    }
  ]
}
```

Of course, it is also possible to request the deletion of multiple Attributes within a single Request.
For this purpose, several DeleteAttributeRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the Request.

Before sending the Request, we recommend to [validate its content]({% link _docs_use-cases/use-case-consumption-check-if-outgoing-request-can-be-created.md %}), since this will give you additional information in case of an error.
{: .notice--info}

Next, send the Request to the Attribute recipient.
You can either do so by [Message]({% link _docs_integrate/data-model-overview.md %}#message) or by a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate), using the `onExistingRelationship` property of a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent).
For a detailed explanation check out our guides on how to send [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) and [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}).
Once the Request is sent, the [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) associated with the emitted Attribute of the Sender or the emitted Attribute itself, in case it is an [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) and the deletion of the [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute) is requested from the `peer`, get an [EmittedAttributeDeletionInfo]({% link _docs_integrate/data-model-overview.md %}#emittedattributedeletioninfo).
There, `"DeletionRequestSent"` is set as `deletionStatus` and the time of sending the Request is stored as `deletionDate`.

When the recipient receives the Request, they can accept or reject it.
If they want to [accept it]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}), they must use the [AcceptDeleteAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptdeleteattributerequestitemparameters).
Doing so, they specify a `deletionDate` on which they plan to delete the received Attribute.
In the given example, the payload would look like the following:

```json
{
  "items": [
    {
      "accept": true,
      "deletionDate": "<date the received Attribute will be deleted>"
    }
  ]
}
```

Now, the [enmeshed Runtime]({% link _docs_explore/61-runtime.md %}) sets the `deletionInfo` of the corresponding Attribute of the recipient with `deletionStatus` `"ToBeDeleted"` and the specified `deletionDate`.
The same is done for all predecessors of the received Attribute.
Then, the appropriate [DeleteAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#deleteattributeacceptresponseitem) is generated and sent back in the [Reponse]({% link _docs_integrate/data-model-overview.md %}#response) to the Sender of the Request.
There, the `deletionInfo` of the corresponding emitted Attribute and its predecessors, in case it is an [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) and the deletion of the [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute) was requested from the `peer`, or of the associated [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) is set with `deletionStatus` `"ToBeDeletedByRecipient"` and the `deletionDate` received in the Response.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/07f8fea4-6276-4cd2-9c72-607454ddd6d9" id="yq__~4ALaJT5"></iframe></div>

It is also possible for the recipient to reject the DeleteAttributeRequestItem, if its `mustBeAccepted` property is set `false`, or to [reject the Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) for deleting a received Attribute as a whole, if they have a valid reason for keeping the respective received Attribute.
In this case, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) must be used and it is advised to provide a `message`, informing the Sender of the Request about the reason not to delete the received Attribute.
Receiving the Response with the [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem), the emitted Attribute of the Sender, in case it is an [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) and the deletion of the [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute) was requested from the `peer`, or the associated [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) are given `"DeletionRequestRejected"` as `deletionStatus` and the receiving time is stored in the property `deletionDate`.
{: .notice--info}

## Delete received Attributes

The actual deletion of a received Attribute happens in a separate step.
This can either be triggered if the `deletionInfo.deletionDate` is reached, in case the deletion was requested by the emitter of the Attribute, or if the recipient decides they no longer need it.

To [delete a received Attribute]({% link _docs_use-cases/use-case-consumption-delete-an-attribute-and-notify.md %}), only its `attributeId` must be specified.
Internally, not just the given Attribute is deleted, but also all its predecessors, in case there were any.
Moreover, if the received Attribute had a successor, its `succeeds` property will be set to undefined, as the corresponding predecessor no longer exists.
Then, a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification) with a [ForwardedAttributeDeletedByPeerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#forwardedattributedeletedbypeernotificationitem) or a [PeerRelationshipAttributeDeletedByPeerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#peerrelationshipattributedeletedbypeernotificationitem) is generated and sent to the emitter of the Attribute, informing them that you deleted the Attribute they shared with you.
Consequently, the `deletionInfo` of their corresponding emitted Attribute and of all potential predecessors, in case it is an [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) and the [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute) was deleted by the `peer`, or of the associated [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) is updated with `deletionStatus` `"DeletedByRecipient"` and the time of receiving the Notification as `deletionDate`.
In case the emitter already [deleted their Attribute](#delete-emitted-attributes), nothing happens.
Please further note that the Notification is queued if the [Relationship is currently terminated]({% link _docs_integrate/terminate-relationships.md %}#terminate-an-active-relationship) but not yet [decomposed]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship).
It can then only be received and processed if the [Relationship is reactivated]({% link _docs_integrate/terminate-relationships.md %}#reactivate-a-terminated-relationship).
The Notification is also queued if the [Attribute recipient is currently in deletion]({% link _docs_integrate/delete-identities.md %}#effects-of-identity-deletion-on-relationships) but not yet deleted.
It can then only be received and processed if the Attribute recipient [cancels its deletion]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/136bc4d8-96b5-4cc6-9171-5be3273dc42f" id="GF__p3.F2ywG"></iframe></div>

## Delete emitted Attributes

The emitter can always delete their [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) without having to ask for consent.
Then, associated [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) are deleted as well.
Doing so before the [recipient deleted their copy of the shared Attribute](#delete-received-attributes), however, you lose the information of having shared the Attribute with them and whether they keep their Attribute or delete it.
Thus, we recommend to [request the deletion of emitted Attributes from their recipients](#request-the-deletion-of-emitted-attributes-from-recipient) before deleting them yourself.

If you decide to [delete an emitted Attribute]({% link _docs_use-cases/use-case-consumption-delete-an-attribute-and-notify.md %}), you must specifiy its `attributeId`.
Then, in addition to the emitted Attribute itself, also all its predecessors will be deleted, given there were any.
Moreover, if the emitted Attribute had a successor, its `succeeds` property will be set to undefined, as the corresponding predecessor no longer exists.
Then, a Notification with an [OwnAttributeDeletedByOwnerNotificationItem]({% link _docs_integrate/data-model-overview.md %}#ownattributedeletedbyownernotificationitem) or a [PeerRelationshipAttributeDeletedByPeerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#peerrelationshipattributedeletedbypeernotificationitem) is generated and sent to the recipient you shared the Attribute with, informing them that you deleted that Attribute.
If they already deleted their corresponding Attribute or marked it for deletion, nothing will change.
However, if the `deletionInfo` of their Attribute was undefined before, since you didn't send a Request for Attribute deletion or the Request was rejected, a `deletionInfo` will be set.
Its `deletionStatus` will be set to `"DeletedByEmitter"` and the `deletionDate` will be the time of receiving the Notification.
Please note that the Notification is queued if the [Relationship is currently terminated]({% link _docs_integrate/terminate-relationships.md %}#terminate-an-active-relationship) but not yet [decomposed]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship).
It can then only be received and processed if the [Relationship is reactivated]({% link _docs_integrate/terminate-relationships.md %}#reactivate-a-terminated-relationship).
Furthermore, the Notification is also queued if the [Attribute recipient is currently in deletion]({% link _docs_integrate/delete-identities.md %}#effects-of-identity-deletion-on-relationships) but not yet deleted.
It can then only be received and processed if the Attribute recipient [cancels its deletion]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/ad2da820-7e33-497b-bf8b-2840d0b92fd5" id="2N__0cLJiA6a"></iframe></div>
