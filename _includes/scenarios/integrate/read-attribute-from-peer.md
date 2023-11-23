There are many situations in which an Identity is interested in an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of another Identity, for example:

- You are interested in the [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) of another Identity so that you can congratulate this Identity on its birthday.
- You must know the [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) of another Identity in order to be able to send an email to this Identity.

<!--- Maybe: Insert Link to [Attribute Values] page --->

In this guide, we will explain how a Connector, hereinafter referred to as the Sender, can read an Attribute of another Connector, the so-called Recipient. Since understanding this reading process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should check out our Request and Response introduction before you continue reading this guide.

<!--- TODO: Insert Link to [Request and Response introduction] guide --->

## Request for reading an Attribute

The Sender wants to read an Attribute from the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. We will now describe the general appearance of such a Request, where we use the notation `<...>` as usual as a placeholder for the actual data:

<!--- The use of an appropriate [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) plays a central role in this context --->

| Property of [Request]({% link _docs_integrate/data-model-overview.md %}#request) | Value                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                          | `"<title of Request>"`                                                                                                                                                                                                                                                       |
| `description`                                                                    | `"<description of Request>"`                                                                                                                                                                                                                                                 |
| `expiresAt`                                                                      | `"<expiration date of Request>"`                                                                                                                                                                                                                                             |
| `metadata`                                                                       | `<custom metadata sent together with Request>`                                                                                                                                                                                                                               |
| `items`                                                                          | Array of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) and [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) that are part of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) |

### Description of ReadAttributeRequestItem

For reading a single Attribute, you need to insert a single [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). This looks as follows:

| Property of [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) | Value                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@type`                                                                                  | `"ReadAttributeRequestItem"`                                                                                                                                                                                                                                                                                                                     |
| `title`                                                                                  | `"<title of RequestItem>"`                                                                                                                                                                                                                                                                                                                       |
| `description`                                                                            | `"<description of RequestItem>"`                                                                                                                                                                                                                                                                                                                 |
| `mustBeAccepted`                                                                         | `true` or `false`, depending on whether this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) must be accepted by the Recipient                                                                                                                                                                                      |
| `requireManualDecision`                                                                  | `true` or `false`, depending on whether the Recipient must make a manual decision about accepting or rejecting this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem)                                                                                                                                                 |
| `metadata`                                                                               | `<custom metadata sent together with RequestItem>`                                                                                                                                                                                                                                                                                               |
| `query`                                                                                  | [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery), [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) |

The input you have to provide in the `query` property depends on what kind of Attribute you want to get. If you want to read an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute), you must use an [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery). If, on the other hand, you are interested in a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of the Recipient, you must insert a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or a [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) at this point, depending on whether you want to read an [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that the Recipient has in the context of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Sender or with a third party.

Please note that not all of the properties listed here have to be specified when creating a [Request]({% link _docs_integrate/data-model-overview.md %}#request) with an associated [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) for reading an Attribute. Some of the properties are optional and can therefore be omitted. Only values for the properties `items`, `...` and `...` of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) itself and for the properties `@type`, `...` and `...` of the [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) are required to be specified.
{: .notice--info}

### Example 1: Read an IdentityAttribute

We assume that the Recipient has an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of type [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname) and that the Sender wants to read this Attribute. Then the associated [Request]({% link _docs_integrate/data-model-overview.md %}#request), which the Sender must create, has the following form:

- [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery)
- Table...

### Example 2: Read a RelationshipAttribute

- Idea for example: [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of type [Consent]({% link _docs_integrate/attribute-values.md %}#consent)
- Compare with [Requesting one-time consents]({% link _docs_integrate/requesting-one-time-consents.md %}) guide or [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) guide

- [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or a [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery)
- Table...

### Read multiple Attributes

It is not necessary to request only a single Attribute. Instead, it is also possible to ask for read access to multiple Attributes at the same time. For this purpose, several [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) as described [above]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute). The general structure of a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) is as follows:

| Property of [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) | Value                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`                                                                                            | `"RequestItemGroup"`                                                                                                                                                  |
| `title`                                                                                            | `"<title of RequestItemGroup>"`                                                                                                                                       |
| `description`                                                                                      | `"<description of RequestItemGroup>"`                                                                                                                                 |
| `mustBeAccepted`                                                                                   | `true` or `false`, depending on whether this [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) must be accepted by the Recipient |
| `metadata`                                                                                         | `<custom metadata sent together with RequestItemGroup>`                                                                                                               |
| `items`                                                                                            | Array of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem)                                                                                |

So if you want to use a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in order to ask for read access to multiple Attributes of the Recipient at the same time, you must insert corresponding [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) as described [above]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) into the `items` property of it.

## Send the Request

If an Identity wants to read an Attribute of another Identity, a distinction must be made between two cases that can occur with regard to the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between them:

- Case 1: There is currently no Relationship between them.
- Case 2: There is already an active Relationship between them.

<!---The first one is, that there is already an active Relationship established between these two Identities. In the other case, there isn't an active Relationship between these two Identities existing yet. --->

Depending on what is the case for the Sender and the Recipient, a different procedure is necessary in order to be able to send the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) created by the Sender to the Recipient. In the following, we briefly describe the procedure in both cases.

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

You will get a response from which you can read the `id` of the created [Request]({% link _docs_integrate/data-model-overview.md %}#request), so that you can refer to it later:

| Property of [Request]({% link _docs_integrate/data-model-overview.md %}#request) | Value               |
| -------------------------------------------------------------------------------- | ------------------- |
| `id`                                                                             | `"<ID of Request>"` |

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
