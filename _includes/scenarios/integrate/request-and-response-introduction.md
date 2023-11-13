Requests are the main instrument in enmeshed to interact with other Identities.
They enable various business processes, e.g. creating, sharing or receiving Attributes, asking a peer for authentication or consent, and much more.
Also, parts of a vaster business process can be implemented with them, like querying all personal information of a user to fill out a tax form.

Requests are unique between Identities and can only be processed once by a single Identity, even across multiple devices associated with the same Identity.
One Request can have one Response, which responds to the complete Request and contains all the information the requestor needs.
The Request-Response flow allows to establish transactional behavior between Identities.

Please note that there are some data structures used in the context of enmeshed, that also use the words "Request" and "Response" in their name, but do not correspond to the objects described on this page, e.g. [RelationshipChangeRequest]({% link _docs_integrate/data-model-overview.md %}#relationshipchangerequest) and [RelationshipChangeResponse]({% link _docs_integrate/data-model-overview.md %}#relationshipchangeresponse).

## Requests

### Structure of Requests

A [Request]({% link _docs_integrate/data-model-overview.md %}#request) can be created by an Identity and sent to a peer to exchange information with them.
The prerequisite for this is an already existing Relationship to prevent mischievous usage.
Specifying the exact demands to the peer, [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem)s are the core of the Request.
In case multiple RequestItems should be answered jointly, e.g. to enhance the structure for the user, they can be combined to a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup).
After creating the Request, it can be transmitted either via a Template (see [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %})) or via a Message (see [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %})).

### Types of RequestItems

To extinguish different scenarios, how you would like to use Requests, there are different types of RequestItems tailored to them.
They are all described in detail on the [Requests and RequestItems]({% link _docs_integrate/requests-and-requestitems.md %}) page.
Here, we just want to give a brief overview:

- [AuthenticationRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#authenticationrequestitem)s can be used to request an authentication, e.g. for a login to a website
- [ConsentRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#consentrequestitem)s can be used to request a consent to a freely configurable text, e.g. to receive a newsletter
- [CreateAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem)s can be used to create an Identity- or RelationshipAttribute with a fixed value for a peer, e.g. a certificate
- [FreeTextRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#freetextrequestitem)s can be used to send a free text to a contact, that in turn can accept it with a free text as well
- [ProposeAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem)s can be used to ask the peer for Attributes, already suggesting answers, e.g. asking for an address and setting the country of the organization as default
- [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem)s can be used to ask a peer for Attributes, e.g. asking for an address
- [ShareAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem)s can be used to share own Attributes with a contact, e.g. the DisplayName when requesting a new Relationship

### Properties associated with Requests

Each Request has an unambiguous `id`, enabling a clear assignment.
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
Depending on the kind of RequestItem, additional properties may be available.

## Responses

### Structure of Responses

Once the other Identity receives a Request, it can decide whether or not to accept it.
If so, a [Response]({% link _docs_integrate/data-model-overview.md %}#response) will be created, containing a [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) or [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) for every RequestItem or RequestItemGroup, respectively.
The Response, then, is wrapped in a [ResponseWrapper]({% link _docs_integrate/data-model-overview.md %}#responsewrapper), which holds additional information about the corresponding Request, so that it can be processed correctly once it is returned.

### Types of ResponseItems

There are three different categories of ResponseItems.
If a RequestItem is accepted, an [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) will be created.
Depending on the kind of RequestItem, it might be a specific AcceptResponseItem, extending the actual AcceptResponseItem to answer to RequestItems demanding additional information.
For example, a ReadAttributeRequestItem is accepted using a [ReadAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-response).
If a RequestItem is rejected, however, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) is created.
Lastly, in case the enmeshed Runtime detects a problem, an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) is generated.

### Properties associated with Responses

Since each Response is associated with a specific Request, the corresponding `requestId` is indicated in the Response.
Its `result` property declares whether the Request was accepted or rejected.
Also, each ResponseItem has a `result` property, which value depends on the kind of ResponseItem and can either be `Accepted`, `Rejected` or `Error`.
In addition, RejectResponseItems and ErrorResponseItems may have a `code` and a `message` specified, providing more details about the rejection or error.
The ResponseWrapper holds additional information about the Request, namely its ID, the `requestSourceType`, i.e. if the Request was transmitted via a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) or a [Message]({% link _docs_integrate/data-model-overview.md %}#message), and the `requestSourceReference`, containing its ID.

## Some Examples

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/8989a397-d7e8-4c3c-b447-0d9043da8ceb" id="hXLLJn2hUyg7"></iframe></div>

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/4ac53380-b21a-4e33-982a-aa9167c471f3" id="nxLL6~4OyYam"></iframe></div>
