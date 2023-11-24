There are many situations in which an Identity is interested in an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of another Identity, for example:

- You are interested in the [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) of another Identity so that you can congratulate this Identity on its birthday.
- You must know the [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) of another Identity in order to be able to send an email to this Identity.

<!--- Maybe: Insert Link to [Attribute Values] page --->

In this guide, we will explain how a Connector, hereinafter referred to as the Sender, can read an Attribute of another Connector, the so-called Recipient. Since understanding this reading process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should check out our Request and Response introduction before you continue reading this guide.

<!--- TODO: Insert Link to [Request and Response introduction] guide --->

## Request for reading an Attribute

The Sender wants to read an Attribute from the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. We will now describe the general appearance of such a Request, where we use the notation `<...>` as usual as a placeholder for the actual data:

<!--- The use of an appropriate [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) plays a central role in this context --->

| Property      | Value                                                                                                                                                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | `"<title of Request>"`                                                                                                                                                                                                                                                       |
| `description` | `"<description of Request>"`                                                                                                                                                                                                                                                 |
| `expiresAt`   | `"<expiration date of Request>"`                                                                                                                                                                                                                                             |
| `metadata`    | `<custom metadata sent together with Request>`                                                                                                                                                                                                                               |
| `items`       | Array of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) and [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) that are part of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) |

To ensure that you have created a syntactically correct Request, you should always test your Request's Validity beforehand.
{: .notice--info}

<!--- TODO: Insert Link to guide "test your Request's Validity" --->

### Description of ReadAttributeRequestItem

For reading a single Attribute, you need to insert a single [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). This looks as follows:

| Property                | Value                                                                                                                                                                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@type`                 | `"ReadAttributeRequestItem"`                                                                                                                                                                                                                                                                                                                     |
| `title`                 | `"<title of RequestItem>"`                                                                                                                                                                                                                                                                                                                       |
| `description`           | `"<description of RequestItem>"`                                                                                                                                                                                                                                                                                                                 |
| `mustBeAccepted`        | `true` or `false`, depending on whether this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) must be accepted by the Recipient                                                                                                                                                                                      |
| `requireManualDecision` | `true` or `false`, depending on whether the Recipient must make a manual decision about accepting or rejecting this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem)                                                                                                                                                 |
| `metadata`              | `<custom metadata sent together with RequestItem>`                                                                                                                                                                                                                                                                                               |
| `query`                 | [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery), [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) |

The input you have to provide in the `query` property depends on what kind of Attribute you want to get. If you want to read an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute), you must use an [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery). If, on the other hand, you are interested in a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of the Recipient, you must insert a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or a [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) at this point, depending on whether you want to read a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that the Recipient has in the context of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Sender or with a third party.

Please note that not all of the properties listed here have to be specified when creating a [Request]({% link _docs_integrate/data-model-overview.md %}#request) with an associated [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) for reading an Attribute. Some of the properties are optional and can therefore be omitted. Only values for the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) itself and for the properties `@type`, `mustBeAccepted` and `query` of the [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) are required to be specified.
{: .notice--info}

### Example 1: Read an IdentityAttribute

We assume that the Sender wants to read an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) with an [IdentityAttribute Value]({% link _docs_integrate/attribute-values.md %}#identity-attributes) of a specific type of the Recipient. Then the [associated ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem), which the Sender inserts in the `items` property of the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute), must contain an [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery) in its `query` property:

| Property    | Value                                                               |
| ----------- | ------------------------------------------------------------------- |
| `@type`     | `"IdentityAttributeQuery"`                                          |
| `validFrom` | `"<start of Attribute validity>"`                                   |
| `validTo`   | `"<end of Attribute validity>"`                                     |
| `valueType` | `"<type of IdentityAttribute Value>"`                               |
| `tags`      | `["<additional information 1>", ..., "<additional information m>"]` |

The properties `validFrom`, `validTo` and `tags` are optional, so you can omit them.

### Example 2: Read a RelationshipAttribute

We now consider the case that the Sender has an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) established with the Recipient and that the Sender wants to read a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of this Relationship. Then the [associated ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) contained in the `items` property of the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) created by the Sender, must contain an appropriate [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) in its `query` property:

| Property                 | Value                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `@type`                  | `"RelationshipAttributeQuery"`                                                                                                     |
| `validFrom`              | `"<start of Attribute validity>"`                                                                                                  |
| `validTo`                | `"<end of Attribute validity>"`                                                                                                    |
| `key`                    | `"<key of RelationshipAttribute>"`                                                                                                 |
| `owner`                  | `"<Address of Recipient or Sender>"`                                                                                               |
| `attributeCreationHints` | Specify [RelationshipAttributeCreationHints]({% link _docs_integrate/data-model-overview.md %}#relationshipattributecreationhints) |

Only the properties `@type`, `key`, `owner` and `attributeCreationHints` are required to use. Further details on the purposes for which you can use a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) can be found in the description of [Combinations and usage scenarios]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-combinationsandusagescenarios) of the [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem).

### Read multiple Attributes

It is not necessary to request only a single Attribute. Instead, it is also possible to ask for read access to multiple Attributes at the same time. For this purpose, several [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) as described [above]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute). The general structure of a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) is as follows:

| Property         | Value                                                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`          | `"RequestItemGroup"`                                                                                                                                                  |
| `title`          | `"<title of RequestItemGroup>"`                                                                                                                                       |
| `description`    | `"<description of RequestItemGroup>"`                                                                                                                                 |
| `mustBeAccepted` | `true` or `false`, depending on whether this [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) must be accepted by the Recipient |
| `metadata`       | `<custom metadata sent together with RequestItemGroup>`                                                                                                               |
| `items`          | Array of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem)                                                                                |

So if you want to use a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in order to ask for read access to multiple Attributes of the Recipient at the same time, you must insert corresponding [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) as described [above]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) into the `items` property of it. Note that the properties `title`, `description` and `metadata` are optional, so you can omit them.

## Send and receive the Request

The Sender that wants to read an Attribute from the Recipient may or may not already have a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Recipient. Depending on which is the case, a different procedure is more suitable for sending the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) created by the Sender to the Recipient:

- [Requests over Templates:]({% link _docs_integrate/read-attribute-from-peer.md %}#requests-over-templates) If there is currently no Relationship between the Sender and the Recipient, you must use this approach.
- [Requests over Messages:]({% link _docs_integrate/read-attribute-from-peer.md %}#requests-over-messages) This procedure is only allowed if there is already an active Relationship between the Sender and the Recipient.

In the following, we briefly describe the procedure of sending the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) created by the Sender to the Recipient separately in both cases.

### Requests over Templates

First we consider the situation in which there is no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the Sender and the Recipient yet. In order for the Sender to be able to read an Attribute of the Recipient, a Relationship must first be created between them.

For general information about establishing a Relationship between two Connectors, see the guides Prepare enmeshed onboarding package and Process received enmeshed onboarding package and create relationship.
{: .notice--info}

<!--- TODO: Insert links to guide "Prepare enmeshed onboarding package" and guide "Process received enmeshed onboarding package and create relationship" --->

To initiate the establishment of a Relationship between the Sender and the Recipient and at the same time send a Request to read an Attribute of the Recipient, the Sender can create an appropriate [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate). In particular, it is necessary for this purpose that a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) is used in the `content` property of the RelationshipTemplate and that the RelationshipTemplateContent contains the above formulated [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) in its `onNewRelationship` property. After the Sender has created such a RelationshipTemplate, the Recipient can load this onto itself. This causes, that the Recipient receives the underlying [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) of the RelationshipTemplate as a new incoming Request. The Recipient can fetch this Request and read its `id` from the result of the response:

| Property | Value               |
| -------- | ------------------- |
| `id`     | `"<ID of Request>"` |

{% include copy-notice description="Save the `id` of the Request so that you can refer to it in the next step." %}

All details on how to send a Request via a RelationshipTemplate and how to receive it in general can be found in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.

<!--- Summary: Use case "Create RelationshipTemplate", insert Request into RelationshipTemplate, use case "Load RelationshipTemplate onto Recipient" --->

It is also possible that the Sender uses a RelationshipTemplate to send a Request to the Recipient if an active Relationship already exists between them. To do this, proceed as described [above]({% link _docs_integrate/read-attribute-from-peer.md %}#requests-over-templates), but insert the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) into the `onExistingRelationship` property instead of the `onNewRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) contained in the `content` property of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
{: .notice--info}

### Requests over Messages

We will now look at the case in which a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) already exists between the Sender and the Recipient. In this case, the Sender has the opportunity to send a Request to the Recipient over a [Message]({% link _docs_integrate/data-model-overview.md %}#message). To do this, the Sender must first create an outgoing Request locally based on the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) as described above. The Sender must then send a [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the Recipient which contains the created outgoing Request in its `content` property. After the Message was sent, the Recipient needs to synchronize the updates of the Backbone in order to receive the Message. This causes, that the Recipient receives also the underlying [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) of the Message as a new incoming Request. The Recipient can fetch this Request and read its `id` from the result of the response:

<!--- Summary: Use case "Create outgoing Request" (use Request described above for that), you will get a response from which you can read the `id` of the created Request, so that you can refer to it later, use case "Send outgoing Request through Message", use case "Synchronization of Recipient", use case "Get incoming Request" --->

| Property | Value               |
| -------- | ------------------- |
| `id`     | `"<ID of Request>"` |

{% include copy-notice description="Save the `id` of the Request so that you can refer to it in the next step." %}

All details on how to send a Request via a Message and how to receive it in general can be found in the [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) guide.

## Answer the Request

After the Sender has sent the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) to the Recipient and the Recipient has received this Request, the Recipient can accept it to give the Sender read access to the requested Attribute.

- Use case: Get incoming Request

<!---## Response to Request for reading an Attribute--->

- For respond to a ReadAttributeRequestItem, [ResponseItems] are important: [AcceptResponseItem], [ReadAttributeAcceptResponseItem] and [RejectResponseItem].
- Respond to multiple read attribute requests: [ResponseItemGroup]
- Maybe also see: [ErrorResponseItem] in case of error, and [Response] and [Responsewrapper] in general.

### Accept a ReadAttributeRequestItem

- Use case: Accept incoming Request

- Use existing attribute/create new attribute

- A [ReadAttributeAcceptResponseItem] will be transfered

### Reject a ReadAttributeRequestItem

- [RejectResponseItem]

It is possible to reject to, if you don't want the Sender to read your attribute.
{: .notice--info}

## Get the Attribute

We now assume, that the Recipient has accepted the [Request for reading an Attribute]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-an-attribute) of the Sender.

- Use case: Synchronization of Sender
- Receive Message sent back from Recipient or Relationship
- Link to other guides on how to identitfy the right Message/Relationship in the sync response
- get the attribute from the [AcceptResponseItem] of type [ReadAttributeAcceptResponseItem]

## What's next?

Take a look at our [Integration example]({% link _docs_integrate/integration-example.md %}) if you want to see how an Attribute from a peer is read by an Identity in the context of a larger process.
