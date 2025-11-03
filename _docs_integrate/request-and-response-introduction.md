---
# Start automatic generation
permalink: integrate/request-and-response-introduction
published: true
title: "Request and Response introduction"
type: scenario
toc: true
properties:
  - id: SC036
  - category: Working With Requests
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DOCS ONLY
  - documentation status: DONE
  - published: true
  - link: request-and-response-introduction
require:
required_by:
# End automatic generation
---

Requests are the main instrument in enmeshed to interact with other Identities.
They enable various business processes, e.g. creating, sharing or receiving Attributes, asking a peer for authentication or consent, and much more.
Also, parts of a vaster business process can be implemented with them, like querying all personal information of a user to fill out a tax form.

Requests are unique between Identities and can only be processed once by a single Identity, even across multiple devices associated with them.
Each Request can only have a single Response, which responds to the complete Request and contains all the information the requestor needs.
The Request-Response flow allows to establish transactional behavior between Identities.

## Requests

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/03ed5248-af12-4a50-bac1-73831f2c3cf9" id="d~qRE5C7Dqig"></iframe></div>

### Structure of Requests

A [Request]({% link _docs_integrate/data-model-overview.md %}#request) can be created by an Identity and sent to a peer to exchange information with them.
Specifying the exact demands to the peer, [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) are the core of the Request.
In case multiple RequestItems should be answered jointly, e.g. to enhance the structure for the user, they can be combined to a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup).
After creating the Request, it can be transmitted either via a RelationshipTemplate (see [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %})) or via a Message (see [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %})).

### Types of RequestItems

To extinguish different scenarios how to use Requests, there are various types of RequestItems tailored to them.

#### AuthenticationRequestItem

With the [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) the Sender can request the peer for an authentication in a business context for a certain purpose.
The peer can then decide to authenticate or not.
This authentication is mostly short-lived and limited in time.
Possible examples are:

- Authentication for a login to a website.
- Authentication for opening a door.

Depending on whether the AuthenticationRequestItem is to be accepted or rejected, its Recipient has different parameters to choose from for responding to it:

- To accept this RequestItem, the [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) can be utilized.
- To reject this RequestItem, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) can be utilized.

After the Recipient has responded to the AuthenticationRequestItem, a suitable [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitems) is generated and transferred to the Sender of the Request:

- After accepting this RequestItem, an [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) will be transferred.
- After rejecting this RequestItem, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### ConsentRequestItem

With the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) it is possible to request the one-time consent of a peer to an arbitrary text and thus reach agreement on a certain non-machine-processable context.
All details on how to use the ConsentRequestItem and examples of use cases for it can be found in the [Request one-time consent of peer]({% link _docs_integrate/request-one-time-consent-of-peer.md %}) guide.

Note that the ConsentRequestItem cannot be used if intending to [request persistent consent from a peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}).
{: .notice--info}

Depending on whether the ConsentRequestItem is to be accepted or rejected, its Recipient has different parameters to choose from for responding to it:

- To accept this RequestItem, the [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) can be utilized.
- To reject this RequestItem, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) can be utilized.

After the Recipient has responded to the ConsentRequestItem, a suitable [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitems) is generated and transferred to the Sender of the Request:

- After accepting this RequestItem, an [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) will be transferred.
- After rejecting this RequestItem, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### CreateAttributeRequestItem

If you want to create IdentityAttributes or RelationshipAttributes for the peer, the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) can be used.
Please have a look at the [ProposeAttributeRequestItem](#proposeattributerequestitem) if the peer should be able to overwrite the Attribute.
To create an Attribute with a fixed value defined by the Sender, an Identity uses the CreateAttributeRequestItem.
A fixed value in this case means, that the Recipient is not allowed to change the value when accepting the Request.
All details on how to use the CreateAttributeRequestItem and examples of use cases for it can be found in the [Create Attributes for peer]({% link _docs_integrate/create-attributes-for-peer.md %}) guide.

Depending on whether the CreateAttributeRequestItem is to be accepted or rejected, its Recipient has different parameters to choose from for responding to it:

- To accept this RequestItem, the [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) can be utilized.
- To reject this RequestItem, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) can be utilized.

After the Recipient has responded to the CreateAttributeRequestItem, a suitable [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitems) is generated and transferred to the Sender of the Request:

- After accepting this RequestItem, a [CreateAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#createattributeacceptresponseitem) will be transferred.
- After rejecting this RequestItem, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### DeleteAttributeRequestItem

If you want to [request the deletion of an own Attribute from a peer]({% link _docs_integrate/delete-attributes.md %}#request-the-deletion-of-own-attributes-from-peer), the [DeleteAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#deleteattributerequestitem) must be used.

Depending on whether the DeleteAttributeRequestItem is to be accepted or rejected, its Recipient has different parameters to choose from for responding to it:

- To accept this RequestItem, the [AcceptDeleteAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptdeleteattributerequestitemparameters) can be utilized.
- To reject this RequestItem, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) can be utilized.

After the Recipient has responded to the DeleteAttributeRequestItem, a suitable [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitems) is generated and transferred to the Sender of the Request:

- After accepting this RequestItem, a [DeleteAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#deleteattributeacceptresponseitem) will be transferred.
- After rejecting this RequestItem, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### FormFieldRequestItem

With the [FormFieldRequestItem]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem) it is possible to define a form field.
Depending on which `settings` the FormFieldRequestItem is configured with, the type of values with which the form field can be filled out and the UI of the form field in the App change.
All details on how to use the FormFieldRequestItem and examples of use cases for it can be found in the [Form Fields Within Requests]({% link _docs_integrate/form-fields-within-requests.md %}) scenario documentation.

Depending on whether the FormFieldRequestItem is to be accepted or rejected, its Recipient has different parameters to choose from for responding to it:

- To accept this RequestItem, the [AcceptFormFieldRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptformfieldrequestitemparameters) can be utilized.
- To reject this RequestItem, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) can be utilized.

After the Recipient has responded to the FormFieldRequestItem, a suitable [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitems) is generated and transferred to the Sender of the Request:

- After accepting this RequestItem, a [FormFieldAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#formfieldacceptresponseitem) will be transferred.
- After rejecting this RequestItem, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### ProposeAttributeRequestItem

The [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) is a combination of a [ReadAttributeRequestItem](#readattributerequestitem) and a [CreateAttributeRequestItem](#createattributerequestitem).
The Sender would like to receive a correct Attribute from the peer, thinks it has a possible value but the peer might overrule this value with an existing or new one.
To create an Attribute with a value proposed by the Sender, an Identity uses the ProposeAttributeRequestItem.
A proposed value in this case means, that the Recipient is allowed to change the value if accepting the Request.
All details on how to use the ProposeAttributeRequestItem and examples of use cases for it can be found in the [Propose Attributes to peer]({% link _docs_integrate/propose-attributes-to-peer.md %}) guide.

Depending on whether the ProposeAttributeRequestItem is to be accepted or rejected, its Recipient has different parameters to choose from for responding to it:

- To accept this RequestItem, the [AcceptProposeAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptproposeattributerequestitemparameters) can be utilized.
- To reject this RequestItem, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) can be utilized.

After the Recipient has responded to the ProposeAttributeRequestItem, a suitable [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitems) is generated and transferred to the Sender of the Request:

- After accepting this RequestItem with a new Attribute or an existing one that isn't shared with the peer already neither itself nor any of its predecessing versions, a [ProposeAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributeacceptresponseitem) will be transferred.
- After accepting this RequestItem with an existing Attribute that was shared with the peer already, an [AttributeAlreadySharedAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#attributealreadysharedacceptresponseitem) will be transferred, given that the own shared LocalAttribute doesn't have `"DeletedByRecipient"` or `"ToBeDeletedByRecipient"` as `deletionInfo.deletionStatus`.
- After accepting this RequestItem with an existing Attribute of which a predecessor was shared with the peer already, an [AttributeSuccessionAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#attributesuccessionacceptresponseitem) will be transferred, given that the own shared predecessor doesn't have `"DeletedByRecipient"` or `"ToBeDeletedByRecipient"` as `deletionInfo.deletionStatus`.
- After rejecting this RequestItem, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### ReadAttributeRequestItem

If you want to query an Identity's Attributes, this is done with the [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem).
To query Attributes which are not known to the Sender, an Identity uses the ReadAttributeRequestItem.
All details on how to use the ReadAttributeRequestItem and examples of use cases for it can be found in the [Read Attributes from peer]({% link _docs_integrate/read-attributes-from-peer.md %}) guide.

Depending on whether the ReadAttributeRequestItem is to be accepted or rejected, its Recipient has different parameters to choose from for responding to it:

- To accept this RequestItem, the [AcceptReadAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptreadattributerequestitemparameters) can be utilized.
- To reject this RequestItem, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) can be utilized.

After the Recipient has responded to the ReadAttributeRequestItem, a suitable [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitems) is generated and transferred to the Sender of the Request:

- After accepting this RequestItem with a new Attribute or an existing one that isn't shared with the peer already neither itself nor any of its predecessing versions, a [ReadAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#readattributeacceptresponseitem) will be transferred.
- After accepting this RequestItem with an existing Attribute that was shared with the peer already, an [AttributeAlreadySharedAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#attributealreadysharedacceptresponseitem) will be transferred, given that the own shared LocalAttribute doesn't have `DeletedByPeer` as `deletionInfo.deletionStatus`.
- After accepting this RequestItem with an existing Attribute of which a predecessor was shared with the peer already, an [AttributeSuccessionAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#attributesuccessionacceptresponseitem) will be transferred, given that the own shared predecessor doesn't have `"DeletedByRecipient"` or `"ToBeDeletedByRecipient"` as `deletionInfo.deletionStatus`.
- After rejecting this RequestItem, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### ShareAttributeRequestItem

If you want to share the own DisplayName and possibly other Attributes, this is done with the [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem).
To share own IdentityAttributes (owner = self) an Identity uses the ShareAttributeRequestItem.
The Identity needs to create the IdentityAttribute separately before the Attribute can be shared.
All details on how to use the ShareAttributeRequestItem and examples of use cases for it can be found in the [Share Attributes with peer]({% link _docs_integrate/share-attributes-with-peer.md %}) guide.

Depending on whether the ShareAttributeRequestItem is to be accepted or rejected, its Recipient has different parameters to choose from for responding to it:

- To accept this RequestItem, the [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) can be utilized.
- To reject this RequestItem, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) can be utilized.

After the Recipient has responded to the ShareAttributeRequestItem, a suitable [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitems) is generated and transferred to the Sender of the Request:

- After accepting this RequestItem, a [ShareAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#shareattributeacceptresponseitem) will be transferred.
- After rejecting this RequestItem, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### TransferFileOwnershipRequestItem

If you want to transfer the ownership of a [File]({% link _docs_integrate/data-model-overview.md %}#file), this is done with the [TransferFileOwnershipRequestItem]({% link _docs_integrate/data-model-overview.md %}#transferfileownershiprequestitem).
The File needs to be uploaded to the Backbone beforehand.
All details on how to use the TransferFileOwnershipRequestItem and examples of use cases for it can be found in the [Exchange Files using Attributes]({% link _docs_integrate/exchange-files-using-attributes.md %}#transfer-the-ownership-of-a-file-to-a-peer) guide.

Depending on whether the TransferFileOwnershipRequestItem is to be accepted or rejected, its Recipient has different parameters to choose from for responding to it:

- To accept this RequestItem, the [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) can be utilized.
- To reject this RequestItem, the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) can be utilized.

After the Recipient has responded to the TransferFileOwnershipRequestItem, a suitable [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitems) is generated and transferred to the Sender of the Request:

- After accepting this RequestItem, a [TransferFileOwnershipAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#transferfileownershipacceptresponseitem) will be transferred.
- After rejecting this RequestItem, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

### Rendering of RequestItems

Please note that the rendering of the [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) in the App is currently being revised.
As soon as the changes to the App have been made, the example here will also be adapted.
{: .notice--warning}

This section gives an example of a [Request]({% link _docs_integrate/data-model-overview.md %}#request) that contains various [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems), namely an [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem), a [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem), a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem), a [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem), a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem) and a [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem), within its `items` property.
This Request can be sent from a Sender to an App user.
A screenshot from the App showing how the Request is displayed to the App user is provided afterwards.

```json
{
  "title": "<title of Request>",
  "description": "<description of Request>",
  "items": [
    {
      "@type": "AuthenticationRequestItem",
      "mustBeAccepted": true,
      "title": "<title of AuthenticationRequestItem>",
      "description": "<description of AuthenticationRequestItem>"
    },
    {
      "@type": "ConsentRequestItem",
      "mustBeAccepted": true,
      "description": "<description of ConsentRequestItem>",
      "consent": "<consent issue originating from the Sender>",
      "link": "<link to external website with more information on the issue>"
    },
    {
      "@type": "CreateAttributeRequestItem",
      "mustBeAccepted": true,
      "description": "<description of CreateAttributeRequestItem>",
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "",
        "value": {
          "@type": "Surname",
          "value": "<surname created for the App user by the Sender>"
        },
        "tags": ["<tag of surname to be created>"]
      }
    },
    {
      "@type": "ProposeAttributeRequestItem",
      "mustBeAccepted": false,
      "description": "<description of ProposeAttributeRequestItem>",
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "",
        "value": {
          "@type": "GivenName",
          "value": "<given name proposed by the Sender>"
        },
        "tags": ["<tag of proposed given name>"]
      },
      "query": {
        "@type": "IdentityAttributeQuery",
        "valueType": "GivenName"
      }
    },
    {
      "@type": "ReadAttributeRequestItem",
      "mustBeAccepted": false,
      "description": "<description of ReadAttributeRequestItem>",
      "query": {
        "@type": "IdentityAttributeQuery",
        "valueType": "BirthDate",
        "tags": ["<tag of date of birth to be read>"]
      }
    },
    {
      "@type": "ShareAttributeRequestItem",
      "mustBeAccepted": true,
      "description": "<description of ShareAttributeRequestItem>",
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "<address of Sender>",
        "value": {
          "@type": "DisplayName",
          "value": "<display name shared by the Sender>"
        },
        "tags": ["<tag of shared display name>"]
      },
      "sourceAttributeId": "<ID of source RepositoryAttribute>"
    }
  ]
}
```

The `<...>` notation is used as a placeholder for the actual data as usual.
Also note that in the example Request, the [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) have been used for test purposes instead of the [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) for those RequestItems that relate to [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes).
For an overview of the different types of Attributes, consult the [Attribute introduction]({% link _docs_integrate/attribute-introduction.md %}).
{: .notice--info}

After the Sender has created the Request and sent it to the App user [via a Message]({% link _docs_integrate/requests-via-messages.md %}) or [via a RelationshipTemplate]({% link _docs_integrate/requests-via-relationshiptemplates.md %}), the Request is displayed to the App user.
The following screenshot shows the rendering of the example Request in the App.
The order in which the RequestItems are rendered corresponds to the order in which they appear in the example Request.

<div style="width: 640px; height: 600px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:600px" src="https://lucid.app/documents/embedded/cefb2b00-928c-431b-8bf6-3086534f891c" id="bN9IW2Drzrx."></iframe></div>

At the bottom of the App screen, there is a "Reject" button to [reject the Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) and an "Accept" button to [accept the Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}).
If no Relationship has been established between the Sender and the App user, and the Request was sent [via a RelationshipTemplate]({% link _docs_integrate/requests-via-relationshiptemplates.md %}), the "Accept" button is labeled "Add Contact" instead.
{: .notice--info}

The screenshot demonstrates that the rendering of the individual kinds of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) differs from one another.
However, the display of a RequestItem in the App depends not only on its properties, but also on which [DecideRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#deciderequestitemparameters) must be used to accept it.

For instance, when accepting a ProposeAttributeRequestItem, the [AcceptProposeAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptproposeattributerequestitemparameters) must be utilized.
These parameters enable acceptance of the ProposeAttributeRequestItem with either an existing Attribute or a new one, which could be the Attribute proposed by the Sender.
In the App, a small arrow icon is displayed to the right of the ProposeAttributeRequestItem, which leads the App user to a list of existing Attributes that would be suitable for accepting the ProposeAttributeRequestItem, too.
In addition, further new Attributes suitable for accepting the ProposeAttributeRequestItem can be created there.
{: .notice--info}

In principle, a RequestItem can not only be accepted, but also rejected, for which the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters) are used.
The App user can reject a RequestItem by unticking the checkbox to its left, and accept it by ticking the checkbox.
However, any RequestItem whose value of the property `mustBeAccepted` is set to `true` must be accepted and cannot be rejected.
In the App, this is shown by a ticked and greyed-out checkbox, indicating that the RequestItem cannot be rejected.
In our example Request, this is the case for the [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem), the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem), the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) and the [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem).
If you do not agree to accept a RequestItem whose value of its `mustBeAccepted` property is set to `true`, you are forced to reject the Request as a whole.

Some RequestItems exhibit particular characteristics.
For the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem), for example, setting the optional property `requiresInteraction` to `true` means that the checkbox in the App associated with it is not preselected and must be explicitly ticked, even if `mustBeAccepted` is set to `true`.
Furthermore, a `link` to an external website with more information on the `consent` issue originating from the Sender can optionally be specified for the ConsentRequestItem.
This causes an icon to appear to the right of it.
Clicking on this icon redirects to the corresponding website.
The ConsentRequestItem from our example Request provides a `link`.
For this reason, the mentioned icon can be found in the screenshot of the App.
{: .notice--info}

## Responses

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/b42bc3d1-bb48-4bd5-a645-016dce559b30" id="Y.qRU24GDTrY"></iframe></div>

### Structure of Responses

Once the other Identity receives a Request, they can decide whether to accept or reject it.
Then, a [Response]({% link _docs_integrate/data-model-overview.md %}#response) will be created, containing a [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) or [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) for every RequestItem or RequestItemGroup, respectively.
The kind of ResponseItem depends on the decision of the Recipient, as well as on the kind of RequestItem.

### Types of ResponseItems

There are three different categories of ResponseItems.
If a RequestItem is accepted, an [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) will be created.
Depending on the kind of RequestItem, it might be a specific AcceptResponseItem, extending the base AcceptResponseItem to answer to RequestItems demanding additional information.
For example, a ReadAttributeRequestItem is accepted using a [ReadAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#readattributeacceptresponseitem), additionally transmitting information about the respective Attribute.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/95b2ef47-7044-4ccd-a2f2-381cbd39231d" id="qUbBRbvLjxvP"></iframe></div>

If a RequestItem is rejected, however, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) is created.
Lastly, in case the enmeshed Runtime detects a problem, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) is generated.
It will never be created manually.

## Request-Response flow

### LocalRequests and LocalResponses

Requests and Responses as discussed above refer to the data structures that are exchanged between Identities.
Locally, each Identity stores them in [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest) and [LocalResponses]({% link _docs_integrate/data-model-overview.md %}#localresponse).
Note that the LocalResponse is stored within the respective LocalRequest, besides properties that are common for both peers like the [LocalRequestStatus]({% link _docs_integrate/data-model-overview.md %}#localrequeststatus) and others that are distinct for each Identity, e.g. the address of the peer or whether the Request was sent by you or received from the peer.

### Sending Requests via Messages

Requests can only be send via Message, if you already have an active Relationship with the Recipient.
Otherwise, you need to utilize a [RelationshipTemplate](#sending-requests-via-relationshiptemplates).
{: .notice--info}

If you want to send a [Request via Message]({% link _docs_integrate/requests-via-messages.md %}), firstly you need to create a LocalRequest.
Its ID equals the one of the associated Request that is sent in a [Message]({% link _docs_integrate/data-model-overview.md %}#message) to your peer.
If the peer accepts the Request and reponds to it, at their side a LocalRequest will be created, having the same ID, however, opposite values for the fields `peer` and `isOwn`.
Also, a LocalResponse will be created and stored directly within the LocalRequest.
Then, a Message will transfer the Response wrapped in a [ResponseWrapper]({% link _docs_integrate/data-model-overview.md %}#responsewrapper) back to you, where it can be mapped to your initially created LocalRequest.

You can find an [example for the Request-Response flow via Message](#working-with-required-and-optional-requestitems) below.

### Sending Requests via RelationshipTemplates

If you don't have a Relationship with the Recipient yet, the Request needs to be formulated within the `onNewRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent).
Otherwise, utilize the `onExistingRelationship` property.
{: .notice--info}

Alternatively, you can transfer [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}).
To do so, you locally create the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) and in the process the Request, however, no LocalRequest will be created, yet.
Hence, the Request your peer receives also doesn't have an ID, yet.
Now, there are two possibilities: either you already have a Relationship with the peer or you wish to establish one, given the condition the peer accepts your Request.
For this, you formulate the Request in the `content.onExistingRelationship` or the `content.onNewRelationship` property of the RelationshipTemplate, respectively.
Note, however, that the `content.onNewRelationship` property is required and, therefore, must always be set, in order to avoid unstable behavior, if someone you don't have a Relationship with opens the RelationshipTemplate.

Firstly, let's consider the case you already have a Relationship with the peer.
Receiving your RelationshipTemplate, thus, at their side the `content.onExistingRelationship` property will be processed, containing your Request.
If the peer decides to accept and to respond to the Request, a LocalRequest will be created, comprising the LocalResponse.
Its content, i.e. the Response, is wrapped in a ResponseWrapper and sent via Message back to you.
Only now, a LocalRequest at your side will be created, having the same ID like its counterpart at your peer's side, since it was transmitted within the Response.
Also, the LocalResponse is stored directly within the LocalRequest, so that the LocalRequest you just created already has the status `accepted`.

In case you don't have a Relationship with the peer yet, opening the RelationshipTemplate, its `content.onNewRelationship` property will be processed.
If the peer decides to accept and to respond to your Request, again a LocalRequest and LocalResponse will be created at their side.
However, the returned data differ.
Instead of a ResponseWrapper inside a Message, a Relationship is returned which is in the status `pending` for now.
It contains the RelationshipTemplate, as well as the Response to the Request.
Only after you accept the Relationship, the LocalRequest with LocalResponse is created at your side and the peer will receive the information about the status change via a `consumption.incomingRequestStatusChanged` [event]({% link _docs_integrate/connector-events.md %}).
You can find an [example for the Request-Response flow via RelationshipTemplate](#working-with-requestitemgroups) below.

## Examples

### Working with required and optional RequestItems

An organization has a Relationship with a customer and needs their consent to the privacy terms.
Additionally, the organization would like to know, if the customer is interested in optionally receiving a newsletter.
Thus, they send a Request via Message, containing two ConsentRequestItems.
On the one hand, the RequestItem regarding consent to the Privacy Terms has the `mustBeAccepted` flag enabled, indicating that the Request can't be accepted without accepting this item.
On the other hand, the RequestItem regarding the Newsletter has the `mustBeAccepted` flag disabled.
Hence, the customer can freely choose whether or not they would like to give their consent to it.
Let's consider the case the Request and, therefore, the privacy terms are accepted, but the consent to the newsletter is denied.
The resulting Request-Response flow is depicted in the following graphic.
For simplicity some properties are omitted.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/8989a397-d7e8-4c3c-b447-0d9043da8ceb" id="7CvNv9u5~~Sl"></iframe></div>

### Working with RequestItemGroups

At a job fair a company wants to offer a convenient way to get in touch with interested jobseekers.
For this, they provide a QR code, linking to a RelationshipTemplate.
In its `content.onNewRelationship` property it holds a Request with two RequestItemGroups.
One of them contains Attributes the company shares with the peer, e.g. the company name.
The other contains Attributes it would like to query from the peer.
In this example they are the given and surname and optionally an email address, following the [Integration example]({% link _docs_integrate/integration-example.md %}).
Now, an interested person can scan the QR code, provide their information and send their Response inside a Relationship's creation content.
Once the company accepts the new Relationship, they can exchange Messages or other data using enmeshed.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/4ac53380-b21a-4e33-982a-aa9167c471f3" id="iDvN-GT-yvbN"></iframe></div>
