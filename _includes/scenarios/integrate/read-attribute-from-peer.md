There are many situations in which an Identity is interested in an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of another Identity, for example:

- You are interested in the [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) of another Identity so that you can congratulate this Identity on its birthday.
- You must know the [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) of another Identity in order to be able to send an email to this Identity.

<!--- Maybe: Insert Link to [Attribute Values] page --->

In this guide, we will explain how a Connector, hereinafter referred to as the Sender, can read an Attribute of another Connector, the so-called Recipient. Since understanding this reading process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should check out our Request and Response introduction before you continue reading this guide.

<!--- TODO: Insert Link to [Request and Response introduction] guide --->

## Request for reading an Attribute

The Sender wants to read an Attribute from the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. We will now describe the general appearance of such a Request. The use of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) plays a central role in this context:

- Table...

### Example 1: Read an IdentityAttribute

We assume that the Recipient has an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of type [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname) and that the Sender wants to read this Attribute. Then the associated [Request]({% link _docs_integrate/data-model-overview.md %}#request), which the Sender must create, has the following form:

- Table...

### Example 2: Read a RelationshipAttribute

- Idea for example: [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of type [Consent]({% link _docs_integrate/attribute-values.md %}#consent)
- Compare with [Requesting one-time consents]({% link _docs_integrate/requesting-one-time-consents.md %}) guide or [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) guide
- Table...

### Example 3: Read multiple Attributes

It is not necessary to request only a single Attribute. Instead, it is also possible to ask for read access to multiple Attributes at the same time. For this purpose, several [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be used in the Request for reading an Attribute.

- Example...
- Table...

## Send the Request

### Case 1: No Relationship established yet

Essential here: [Requests over Templates] guide. Summary:

- Use case: Create RelationshipTemplate
- Insert Request into RelationshipTemplate
- Use case: Load RelationshipTemplate onto Recipient

More general information about how to create a Relationship: Compare with [Prepare enmeshed onboarding package] guide and [Process received enmeshed onboarding package and create relationship] guide.
{: .notice--info}

### Case 2: Relationship already established

Essential here: [Requests over Messages] guide. Summary:

- Use case: Create outgoing Request
- Use Request described above for that
- Use case: Send outgoing Request through Message
- Use case: Synchronization of Recipient

## Answer the Request

After the Sender has sent the Request for reading an Attribute to the Recipient, the Recipient can accept this Request to give the Sender read access to the requested Attribute.

- Use case: Get incoming Request

<!---## Response to Request for reading an Attribute--->

- For respond to a ReadAttributeRequestItem, [ResponseItems] are important: [AcceptResponseItem], [ReadAttributeAcceptResponseItem] and [RejectResponseItem].
- Respond to multiple read attribute requests: [ResponseItemGroup]
- Maybe also see: [ErrorResponseItem] in case of error, and [Response] and [Responsewrapper] in general.

### Accept a ReadAttributeRequestItem

- Use case: Accept incoming Request
- [ReadAttributeAcceptResponseItem]

### Reject a ReadAttributeRequestItem

- [RejectResponseItem]

It is possible to reject to, if you don't want the Sender to read your attribute.
{: .notice--info}

## Get the Attribute

- Use case: Synchronization of Sender

## What's next?

Take a look at our [Integration example]({% link _docs_integrate/integration-example.md %}) if you want to see how an Attribute from a peer is read by an Identity in the context of a larger process.
