Requests are the main instrument in enmeshed to interact with other Identities.
They enable various business processes, e.g. creating, sharing or receiving Attributes, asking a peer for authentication or consent, and much more.
Also, parts of a vaster business process can be implemented with them, like querying all personal information of a user to fill out a tax form.

Requests are unique between Identities and can only be processed once by a single Identity, even across multiple devices associated with the same Identity.
One Request can have one Response, which responds to the complete Request and contains all the information the requestor needs.
The Request-Response flow allows to establish transactional behavior between Identities.

Please note that there are some data structures used in the context of enmeshed, that also use the words "Request" and "Response" in their name, but do not correspond to the objects described on this page, e.g. [RelationshipChangeRequest]({% link _docs_integrate/data-model-overview.md %}#relationshipchangerequest) and [RelationshipChangeResponse]({% link _docs_integrate/data-model-overview.md %}#relationshipchangeresponse).

## Requests

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/03ed5248-af12-4a50-bac1-73831f2c3cf9" id="d~qRE5C7Dqig"></iframe></div>

### Structure of Requests

A [Request]({% link _docs_integrate/data-model-overview.md %}#request) can be created by an Identity and sent to a peer to exchange information with them.
Specifying the exact demands to the peer, [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) are the core of the Request.
In case multiple RequestItems should be answered jointly, e.g. to enhance the structure for the user, they can be combined to a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup).
After creating the Request, it can be transmitted either via a Template (see [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %})) or via a Message (see [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %})).

### Types of RequestItems

To extinguish different scenarios how to use Requests, there are various types of RequestItems tailored to them.
They are all described in detail on the [Requests and RequestItems]({% link _docs_integrate/requests-and-requestitems.md %}) page.
Here, we just want to give a brief overview:

- [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem)s can be used to request an authentication, e.g. for a login to a website
- [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem)s can be used to request consent to a freely configurable text, e.g. to receive a newsletter
- [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem)s can be used to create an Identity- or RelationshipAttribute with a fixed value for a peer, e.g. a certificate
- [FreeTextRequestItem]({% link _docs_integrate/data-model-overview.md %}#freetextrequestitem)s can be used to send a free text to a contact, that in turn can accept it with a free text as well
- [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem)s can be used to ask the peer for Attributes, already suggesting answers, e.g. asking for an address and setting the country of the organization as default
- [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem)s can be used to ask a peer for Attributes, e.g. asking for an address
- [RegisterAttributeListenerRequestItem]({% link _docs_integrate/data-model-overview.md %}#registerattributelistenerrequestitem)s can be used to create LocalAttributeListeners, e.g. to be informed about the creation of a specific RelationshipAttribute of a partner organization
- [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem)s can be used to share own Attributes with a contact, e.g. the DisplayName

<!-- ### Properties associated with Requests

A Request can have an unambiguous `id`, enabling a clear assignment, if the Request can be mapped to a specific [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest).
Also, a date can be specified, at which the Request expires and from when on it can't be answered anymore.
Furthermore, Requests, RequestItems and RequestItemGroups have the properties `title`, `description` and `metadata`.
While the former two may be used to express the demands of the Request in a human-readable manner to the recipient, the latter is meant for developers integrating with enmeshed to provide them with the opportunity to use their own process descriptors.
An example could be a key, coding the content of the Request, which helps to identfify the correct internal process at the time of receiving the Response.
The metadata content is not processed by enmeshed.
RequestItems and RequestItemGroups have the required `mustBeAccepted` property.
If it is enabled, the Request can't be accepted without accepting the respective RequestItems or RequestItemGroups.
Note that the `mustBeAccepted` property of a RequestItem inside a RequestItemGroup will only be assessed, if the RequestItemGroup itself is accepted.
By default RequestItems can be accepted automatically.
However, the sender may enforce a manual acceptance step using `requireManualDecision`.
Depending on the kind of RequestItem, additional properties may be available. -->

## Responses

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/b42bc3d1-bb48-4bd5-a645-016dce559b30" id="Y.qRU24GDTrY"></iframe></div>

### Structure of Responses

Once the other Identity receives a Request, they can decide whether to accept or reject it.
Then, a [Response]({% link _docs_integrate/data-model-overview.md %}#response) will be created, containing a [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) or [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) for every RequestItem or RequestItemGroup, respectively.
The kind of ResponseItem depends on the decision of the Recipient, as well as on the kind of RequestItem.

<!-- The Response, then, is wrapped in a [ResponseWrapper]({% link _docs_integrate/data-model-overview.md %}#responsewrapper), which holds additional information about the corresponding Request, so that it can be processed correctly once it is returned. -->

### Types of ResponseItems

There are three different categories of ResponseItems.
If a RequestItem is accepted, an [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) will be created.
Depending on the kind of RequestItem, it might be a specific AcceptResponseItem, extending the actual AcceptResponseItem to answer to RequestItems demanding additional information.
For example, a ReadAttributeRequestItem is accepted using a [ReadAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#readattributeacceptresponseitem).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/1d3f3866-4d85-46b5-8523-ecc581052f4b" id="NCvNTKLN71pl"></iframe></div>

If a RequestItem is rejected, however, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) is created.
Lastly, in case the enmeshed Runtime detects a problem, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) is generated.

<!-- ### Properties associated with Responses

Since each Response is associated with a specific Request, the corresponding `requestId` is indicated in the Response.
Its `result` property declares whether the Request was accepted or rejected.
Also, each ResponseItem has a `result` property itself, whose value depends on the kind of ResponseItem and can either be `Accepted`, `Rejected` or `Error`.
In addition, RejectResponseItems and ErrorResponseItems may have a `code` and a `message` specified, providing more details about the rejection or error.
The ResponseWrapper holds additional information about the Request, namely its ID, the `requestSourceType`, i.e. if the Request was transmitted via a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) or a [Message]({% link _docs_integrate/data-model-overview.md %}#message), and the `requestSourceReference`, containing the respective ID. -->

## LocalRequests and LocalResponses

Requests and Responses as discussed above refer to the data structures that are exchanged between Identities.
Locally, each Identity stores them in [LocalRequests]({% link _docs_integrate/data-model-overview.md %}#localrequest) and [LocalResponses]({% link _docs_integrate/data-model-overview.md %}#localresponse).
They contain additional metadata that is distinct for each Identity.
For example, a LocalRequest stores the address of the opposite Identity in the `peer` property and `isOwn` declares whether the Request was sent by you or received from the peer.
Moreover, a timestamp indicates when it was created and the current `status` is saved.
Also, the `id` of a LocalRequest will match its counterpart stored at the other Identity and the exchanged Request, stored in the field `content`, will have the same `id`, too.
The information about its Transport object, i.e. whether the Request was transmitted via Message or RelationshipTemplates and the associated ID, are denoted in the `source` property.
Lastly, as soon as available the corresponding `response` will be stored within the `LocalRequest`, comprising the Response's `content`, the timestamp when it was created and its `source`.

### Process of sending Requests via Messages

If you want to send a Request via Message, firstly you need to create a LocalRequest.
Its ID equals the one of the associated Request that is sent in a Message to your peer.
If the peer accepts the Request and reponds to it, at their side a LocalRequest will be created, having the same ID, however, opposite values for the fields `peer` and `isOwn`.
Also, a LocalResponse will be created and stored directly within the LocalRequest.
Then, a Message will transfer the Response wrapped in a ResponseWrapper back to you, where it can be mapped to your initially created LocalRequest.

### Process of sending Requests via RelationshipTemplates

Alternatively, you can transfer Requests via RelationshipTemplates.
To do so, you locally create the RelationshipTemplate and in the process the Request, however, no LocalRequest, yet.
Hence, the Request your peer receives also doesn't have an ID, yet.
Now, there are two possibilities: either you already have a Relationship with the peer or you wish to establish one, given the condition the peer accepts your Request.
For this, you formulate the Request in the `content.onExistingRelationship` or the `content.onNewRelationship` property of the RelationshipTemplate, respectively.
Note, however, that the `content.onNewRelationship` property is required and, therefore, must always be set, in order to avoid unstable behavior, e.g. if someone you don't have a Relationship with yet opens your RelationshipTemplate.

Firstly, let's consider the case where you already have a Relationship with the peer.
Receiving your RelationshipTemplate, thus, at their side the `content.onExistingRelationship` property will be processed, containing your Request.
If the peer decides to accept and to respond to the Request, a LocalRequest will be created, comprising the LocalResponse.
Its content, i.e. the Response, is wrapped in a ResponseWrapper and sent via Message back to you.
Only now, a LocalRequest at your side will be created, having the same ID like its counterpart at your peer's side, since it was transmitted within the Response.
Also, the LocalResponse is stored directly within the LocalRequest, so that the LocalRequest you just created already has the status `accepted`.

In the case where you don't have a Relationship with the peer yet, the `content.onNewRelationship` property of the RelationshipTemplate will be processed.
If the peer decides to accept and to respond to your Request, again a LocalRequest and LocalResponse will be created at their side.
However, the returned data differ.
Instead of a ResponseWrapper inside a Message, a Relationship is returned which is in the status `pending` for now.
It contains the RelationshipTemplate, as well as the changes the peer made to it, i.e. the created Request and Response.
Only after you accept the RelationshipCreationChangeRequest (not the kind of Request discussed on this page), the LocalRequest with LocalResponse is created at your side and the peer will receive the information about the status change via a `consumption.incomingRequestStatusChanged` [event]({% link _docs_integrate/connector-events.md %}).

## Examples

### Required and optional RequestItems

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
