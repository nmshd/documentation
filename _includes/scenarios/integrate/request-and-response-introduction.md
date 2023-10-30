You want to share Attributes with a contact or receive Attributes from them?
You need an authentication or a consent from a peer?
You wish to make edits to a Relationship or ensure the correctness of data?
All of these endeavors and more can be achieved by the means of Requests.
They are the main instrument when it comes to interacting with other Identities going beyond the simple exchange of messages.

Requests are always associated with a specific Relationship, i.e. they are sent to exactly one other Identity.
Also, Responses are unique.
Once a Request is answered, it cannot be answered again, e.g. on another device, if the App is installed on multiple ones, having all received the Request.
This ensures an unambiguous functioning.

## Types of Request- and ResponseItems

The core of a [Request]({% link _docs_integrate/data-model-overview.md %}#request) is the [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem).
It specifies what you want from the other Identity.
There are many different types all described in detail in the [Requests and RequestItems]({% link _docs_integrate/requests-and-requestitems.md %}) section.
Here, we just want to give a brief overview:

- [AuthenticationRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#authenticationrequestitem)s can be used to request an authentication, e.g. for a login to a website
- [ConsentRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#consentrequestitem)s can be used to request a consent to an freely configurable text, e.g. to receive a newsletter
- [CreateAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem)s can be used to create an Identity- or RelationshipAttribute with a fixed value for a peer, e.g. a certificate
- [FreeTextRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#freetextrequestitem)s can be used to send a free text to a contact, that in turn can accept this with a free text as well
- [ProposeAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem)s can be used to ask the peer for Attributes, already suggesting answers, e.g. asking for an address and setting the country of the organization as default
- [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem)s can be used to ask a peer for Attributes, e.g. asking for an address
- [ShareAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem)s can be used to share own IdentityAttributes with a contact, e.g. sharing the own DisplayName when requesting a new Relationship

In case multiple RequestItems should be answered jointly, you can combine them to a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup).
RequestItems or RequestItemGroups are then embedded in a Request, which can be sent to the other Identity.
This happens either via a Message (see [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %})) or via a Template (see [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %})).

Once the other Identity receives a Request, they can decide whether they want to accept or reject the corresponding RequestItems or RequestItemGroups.
Consequently, the associated [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem)s are created.
They can either be a [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) or a special variant of it, a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) or an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) in case the enmeshed Runtime detects a problem.
If additional information is necessary to accept a Request, e.g. an Attribute is queried with a ReadAttributeRequestItem, it is attached to the AcceptResponseItem.
In the given example, it will be a part of the returned ReadAttributeAcceptResponseItem.
For every RequestItem or RequestItemGroup, exactly one ResponseItem or [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) will be created, respectively.
The [Response]({% link _docs_integrate/data-model-overview.md %}#response), then, is wrapped in a [ResponseWrapper]({% link _docs_integrate/data-model-overview.md %}#responsewrapper), which holds additional information about the corresponding Request, so that it can be processed correctly once it is returned.

## Example: Request-Response-Process for a CreateAttributeRequestItem

Let's take a detailed look at an exemplary Request-Response-process for a CreateAttributeRequestItem.
Firstly, the sender creates a Request with a CreateAttributeRequestItem and sends it via a Message to the recipient.
This triggers the creation of a [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) at their side.
If the recipient accepts the Request and the CreateAttributeRequestItem, a new own [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) will be created with the content of the CreateAttributeRequestItem.
Additionally, a shared LocalAttribute will be created, since this Attribute is shared with a contact, namely the sender of the Request.
Thereafter, a Response is returned to the sender, containing the status `accepted` alongside the corresponding Request.
Then, the sender will save them as a LocalRequest and, like the recipient, create a LocalAttribute with the content of the CreateAttributeRequestItem to store, as well.
The whole process is, also, depicted below.

[![Request-Response-Process for CreateAttributeRequestItem]( {{ '/assets/images/integrate/Requests - Handling of CreateConsumptionAttributeRequestItem .svg' | relative_url }} )]( {{ '/assets/images/integrate/Requests - Handling of CreateConsumptionAttributeRequestItem .svg' | relative_url }} )
