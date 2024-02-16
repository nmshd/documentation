Requests are the main instrument in enmeshed to interact with other Identities.
They enable various business processes, e.g. creating, sharing or receiving Attributes, asking a peer for authentication or consent, and much more.
Also, parts of a vaster business process can be implemented with them, like querying all personal information of a user to fill out a tax form.

Requests are unique between Identities and can only be processed once by a single Identity, even across multiple devices associated with them.
Each Request can only have a single Response, which responds to the complete Request and contains all the information the requestor needs.
The Request-Response flow allows to establish transactional behavior between Identities.

Please note that there are some data structures used in the context of enmeshed, that also use the terms "Request" and "Response" in their name, but do not correspond to the objects described on this page, e.g. [RelationshipChangeRequest]({% link _docs_integrate/data-model-overview.md %}#relationshipchangerequest) and [RelationshipChangeResponse]({% link _docs_integrate/data-model-overview.md %}#relationshipchangeresponse).

## Requests

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/03ed5248-af12-4a50-bac1-73831f2c3cf9" id="d~qRE5C7Dqig"></iframe></div>

### Structure of Requests

A [Request]({% link _docs_integrate/data-model-overview.md %}#request) can be created by an Identity and sent to a peer to exchange information with them.
Specifying the exact demands to the peer, [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) are the core of the Request.
In case multiple RequestItems should be answered jointly, e.g. to enhance the structure for the user, they can be combined to a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup).
After creating the Request, it can be transmitted either via a Template (see [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %})) or via a Message (see [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %})).

### Types of RequestItems

To extinguish different scenarios how to use Requests, there are various types of RequestItems tailored to them.

#### AuthenticationRequestItem

With the [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) the sender can request the peer for an authentication in a business context for a certain purpose. The peer can then decide to authenticate or not. This authentication is mostly short-lived and limited in time.

Examples:

- Authentication for a login to a website
- Authentication for opening a door

#### ConsentRequestItem

With the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) it is possible to request a consent of the peer to an arbitrary text and thus reach agreement on a certain non machine-processable context.

To request an accept/reject decision from a peer to a free text, the ConsentRequestItem is used.

Please do not use the ConsentRequestItem to submit tons of text to the peer Identity. It is meant to be a short consent or summary the user agrees to. Please move longer text to external websites.
The ConsentRequestItem is also not meant for contractual agreements.
{: .notice--info}

Examples:

- "I hereby confirm that I have read the privacy terms of this cloud service and agree to them."
- "The provided EULA has been read and agreed to."
- "Yes, I have backed up all of my data of this PC and you can wipe it."
- "I opt in to the newsletter."

#### CreateAttributeRequestItem

If you want to create Identity- or RelationshipAttributes for the peer, the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) can be used. Please have a look at the [ProposeAttributeRequestItem](#proposeattributerequestitem) if the peer should be able to overwrite the Attribute.

To create an Attribute with a fixed value defined by the sender, an Identity uses the CreateAttributeRequestItem. A fixed value in this case means, that the recipient is not allowed to change the value when accepting the request.

Examples of use cases for the CreateAttributeRequestItem can be found in the [Create Attribute for peer]({% link _docs_integrate/create-attribute-for-peer.md %}) guide.

#### FreeTextRequestItem

With the [FreeTextRequestItem]({% link _docs_integrate/data-model-overview.md %}#freetextrequestitem) it is possible to send a free text to the peer. The peer itself can accept this with a free text as well.

#### ProposeAttributeRequestItem

The [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) is a combination of [ReadAttributeRequestItem](#readattributerequestitem) and [CreateAttributeRequestItem](#createattributerequestitem). The sender would like to receive a correct Attribute from the peer, thinks it has a possible value but the peer might overrule this value with an existing or new one.

To create an Attribute with a value proposed by the sender, an Identity uses the ProposeAttributeRequestItem. A proposed value in this case means, that the recipient is allowed to change the value if accepting the request.

Examples of use cases for the ProposeAttributeRequestItem can be found in the [Propose Attribute to peer]({% link _docs_integrate/propose-attribute-to-peer.md %}) guide.

#### ReadAttributeRequestItem

If you want to query an Identity's Attributes this is done with the [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem).

To query Attributes which are not known to the sender, an Identity uses the ReadAttributeRequestItem.

Examples of use cases for the ReadAttributeRequestItem can be found in the [Read Attribute from peer]({% link _docs_integrate/read-attribute-from-peer.md %}) guide.

#### RegisterAttributeListenerRequestItem

This item is used to register a [Listener]({% link _docs_integrate/data-model-overview.md %}#localattributelistener) for a specific Attribute. The Listener will create a Request in status `Draft` if an Attribute was created that matches the given query and the user is able to send the Request to the creator of the [RegisterAttributeListenerRequestItem]({% link _docs_integrate/data-model-overview.md %}#registerattributelistenerrequestitem).

Examples:

- Asking for a specific RelationshipAttribute of a partner organization.

#### ShareAttributeRequestItem

If you want to share the own DisplayName and possibly other Attributes this is done with the [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem).

To share own IdentityAttributes (owner = self) an Identity uses the ShareAttributeRequestItem. The Identity needs to create the IdentityAttribute separately before the Attribute can be shared.

Examples of use cases for the ShareAttributeRequestItem can be found in the [Share own Attribute to peer]({% link _docs_integrate/share-own-attribute-to-peer.md %}) guide.

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

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/1d3f3866-4d85-46b5-8523-ecc581052f4b" id="NCvNTKLN71pl"></iframe></div>

If a RequestItem is rejected, however, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) is created.
Lastly, in case the enmeshed Runtime detects a problem, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) is generated.
It will never be created manually.

## Request-Response flow

### LocalRequests and LocalResponses

Requests and Responses as discussed above refer to the data structures that are exchanged between Identities.
Locally, each Identity stores them in [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest) and [LocalResponses]({% link _docs_integrate/data-model-overview.md %}#localresponse).
Note that the LocalResponse is stored within the respective LocalRequest, besides properties that are common for both peers like the [LocalRequestStatus]({% link _docs_integrate/data-model-overview.md %}#localrequeststatus) and others that are distinct for each Identity, e.g. the address of the peer or whether the Request was sent by you or received from the peer.

### Sending Requests via Messages

Requests can only be send via Message, if you already have an active Relationship with the recipient.
Otherwise, you need to utilize a [RelationshipTemplate](#sending-requests-via-relationshiptemplates).
{: .notice--info}

If you want to send a [Request via Message]({% link _docs_integrate/requests-over-messages.md %}), firstly you need to create a LocalRequest.
Its ID equals the one of the associated Request that is sent in a [Message]({% link _docs_integrate/data-model-overview.md %}#message) to your peer.
If the peer accepts the Request and reponds to it, at their side a LocalRequest will be created, having the same ID, however, opposite values for the fields `peer` and `isOwn`.
Also, a LocalResponse will be created and stored directly within the LocalRequest.
Then, a Message will transfer the Response wrapped in a [ResponseWrapper]({% link _docs_integrate/data-model-overview.md %}#responsewrapper) back to you, where it can be mapped to your initially created LocalRequest.

You can find an [example for the Request-Response flow via Message](#working-with-required-and-optional-requestitems) below.

### Sending Requests via RelationshipTemplates

If you don't have a Relationship with the Recipient yet, the Request needs to be formulated within the `onNewRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent).
Otherwise, utilize the `onExistingRelationship` property.
{: .notice--info}

Alternatively, you can transfer [Requests via RelationshipTemplates]({% link _docs_integrate/requests-over-templates.md %}).
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
It contains the RelationshipTemplate, as well as the changes the peer made to it, i.e. the created Request and Response.
Only after you accept the RelationshipCreationChangeRequest (not the kind of Request discussed on this page), the LocalRequest with LocalResponse is created at your side and the peer will receive the information about the status change via a `consumption.incomingRequestStatusChanged` [event]({% link _docs_integrate/connector-events.md %}).

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
For this, they provide a QR-code, linking to a RelationshipTemplate.
In its `content.onNewRelationship` property it holds a Request with two RequestItemGroups.
One of them contains Attributes the company shares with the peer, e.g. the company name.
The other contains Attributes it would like to query from the peer.
In this example they are the given and surname and optionally an e-mail address, following the [Integration example]({% link _docs_integrate/integration-example.md %}).
Now, an interested person can scan the QR-code, provide their information and send their Response inside a RelationshipCreationChangeRequest.
Once the company accepts the new Relationship, they can exchange messages or other data using enmeshed.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/4ac53380-b21a-4e33-982a-aa9167c471f3" id="iDvN-GT-yvbN"></iframe></div>
