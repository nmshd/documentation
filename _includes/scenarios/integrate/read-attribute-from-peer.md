There are many situations in which an Identity is interested in an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of another Identity, for example:

- You are interested in the [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) of another Identity so that you can congratulate this Identity on its birthday.
- You must know the [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) of another Identity in order to be able to send an email to this Identity.

In this guide, we will explain how a Connector, hereinafter referred to as the Sender, can read an Attribute of another Connector, the so-called Recipient. Since understanding this reading process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should check out our Request and Response introduction before you continue reading this guide.

<!--- TODO: Insert Link to [Request and Response introduction] guide --->

## Request for reading Attributes

The Sender wants to read an Attribute from the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. We will now describe the general appearance of such a Request, where we use the notation `<...>` as usual as a placeholder for the actual data:

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

The input you have to provide in the `query` property depends on what kind of Attribute you want to get. If you want to read an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute), you must use an [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery). If, on the other hand, you are interested in a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of the Recipient, you must insert a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or a [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) at this point. This depends on whether you want to read a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that the Recipient has in the context of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Sender or with a third party.

Please note that not all of the properties listed here have to be specified when creating a [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes). Some of the properties are optional and can therefore be omitted. Only values for the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) itself and for the properties `@type`, `mustBeAccepted` and `query` of the [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) are required to be specified.
{: .notice--info}

### Example 1: Read an IdentityAttribute

We assume that the Sender wants to read an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) with an [IdentityAttribute Value]({% link _docs_integrate/attribute-values.md %}#identity-attributes) of a specific type of the Recipient. Then the [associated ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem), which the Sender inserts in the `items` property of the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes), must contain an [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery) in its `query` property:

| Property    | Value                                                               |
| ----------- | ------------------------------------------------------------------- |
| `@type`     | `"IdentityAttributeQuery"`                                          |
| `validFrom` | `"<start of Attribute validity>"`                                   |
| `validTo`   | `"<end of Attribute validity>"`                                     |
| `valueType` | `"<type of IdentityAttribute Value>"`                               |
| `tags`      | `["<additional information 1>", ..., "<additional information m>"]` |

The properties `validFrom`, `validTo` and `tags` are optional, so you can omit them.

### Example 2: Read a RelationshipAttribute

We now consider the case that the Sender has an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) established with the Recipient and that the Sender wants to read a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of this Relationship. Then the [associated ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) contained in the `items` property of the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) created by the Sender, must contain an appropriate [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) in its `query` property:

| Property                 | Value                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `@type`                  | `"RelationshipAttributeQuery"`                                                                                                     |
| `validFrom`              | `"<start of Attribute validity>"`                                                                                                  |
| `validTo`                | `"<end of Attribute validity>"`                                                                                                    |
| `key`                    | `"<key of RelationshipAttribute>"`                                                                                                 |
| `owner`                  | `"<Address of Recipient or Sender>"`                                                                                               |
| `attributeCreationHints` | Specify [RelationshipAttributeCreationHints]({% link _docs_integrate/data-model-overview.md %}#relationshipattributecreationhints) |

Only the properties `@type`, `key`, `owner` and `attributeCreationHints` are required to use. Further details on the purposes for which you can use a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) and how to do this can be found in the description of [Combinations and usage scenarios]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-combinationsandusagescenarios) of the [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem).

### Read multiple Attributes with a RequestItemGroup

It is not necessary to request only a single Attribute. Instead, it is also possible to ask for read access to multiple Attributes at the same time. For this purpose, several [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) as described [above]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes). The general structure of a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) is as follows:

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

The Sender that wants to read an Attribute from the Recipient may or may not already have a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Recipient. Depending on which is the case, a different procedure is more suitable for sending the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) created by the Sender to the Recipient:

- [Request over Template]({% link _docs_integrate/read-attribute-from-peer.md %}#request-over-template): If there is currently no Relationship between the Sender and the Recipient, you must use this approach.
- [Request over Message]({% link _docs_integrate/read-attribute-from-peer.md %}#request-over-message): This procedure is only allowed if there is already an active Relationship between the Sender and the Recipient.

In the following, we briefly describe the procedure of sending the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) created by the Sender to the Recipient separately in both cases.

### Request over Template

First we consider the situation in which there is no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the Sender and the Recipient yet. In order for the Sender to be able to read an Attribute of the Recipient, a Relationship must first be created between them.

For general information about establishing a Relationship between two Connectors, see the guides Prepare enmeshed onboarding package and Process received enmeshed onboarding package and create relationship.
{: .notice--info}

<!--- TODO: Insert links to guide "Prepare enmeshed onboarding package" and guide "Process received enmeshed onboarding package and create relationship" --->

To initiate the establishment of a Relationship between the Sender and the Recipient and at the same time send a Request to read an Attribute of the Recipient, the Sender can create an appropriate [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate). In particular, it is necessary for this purpose that a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) is used in the `content` property of the RelationshipTemplate and that the RelationshipTemplateContent contains the above formulated [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) in its `onNewRelationship` property. After the Sender has created such a RelationshipTemplate, the Recipient can load this onto itself. This causes, that the Recipient receives the underlying [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) of the RelationshipTemplate as a new incoming Request. The Recipient can fetch this Request and read its `id` from the result of the response:

| Property | Value               |
| -------- | ------------------- |
| `id`     | `"<ID of Request>"` |

{% include copy-notice description="Save the `id` of the Request so that you can refer to it in the next step." %}

All details on how to send a Request via a RelationshipTemplate and how to receive it in general can be found in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.

It is also possible that the Sender uses a RelationshipTemplate to send a Request to the Recipient if an active Relationship already exists between them. To do this, proceed as described [above]({% link _docs_integrate/read-attribute-from-peer.md %}#request-over-template), but insert the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) into the `onExistingRelationship` property instead of the `onNewRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) contained in the `content` property of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
{: .notice--info}

### Request over Message

We will now look at the case in which a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) already exists between the Sender and the Recipient. In this case, the Sender has the opportunity to send a Request to the Recipient over a [Message]({% link _docs_integrate/data-model-overview.md %}#message). To do this, the Sender must first create an outgoing Request locally based on the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) as described above. The Sender must then send a [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the Recipient which contains the created outgoing Request in its `content` property. After the Message was sent, the Recipient needs to synchronize the updates of the Backbone in order to receive the Message. This causes, that the Recipient receives also the underlying [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) of the Message as a new incoming Request. The Recipient can fetch this Request and read its `id` from the result of the response:

| Property | Value               |
| -------- | ------------------- |
| `id`     | `"<ID of Request>"` |

{% include copy-notice description="Save the `id` of the Request so that you can refer to it in the next step." %}

All details on how to send a Request via a Message and how to receive it in general can be found in the [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) guide.

## Accept the Request

After the Sender has sent the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) to the Recipient and the Recipient has received this Request, the Recipient can accept it to give the Sender read access to the requested Attributes. To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the ID of the received Request. Also, you need to decide and specify for every [ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) contained in the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes), whether you want to accept or reject it.

If the Recipient does not want the Sender to read any Attributes of it and therefore does not want to accept the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) of the Sender, it can reject it as a whole too. For this, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

### Accept a ReadAttributeRequestItem

If the Recipient accepts a [ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) contained in the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) of the Sender, it must provide the requested Attribute in its response to the Request. Depending on whether the Recipient wants to share an Attribute that is already existing or that must be created first, different [parameters]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-response-parameters) for this must be use:

- Share an existing Attribute:

  | Property            | Value                 |
  | ------------------- | --------------------- |
  | accept              | `true`                |
  | existingAttributeId | `"<ID of Attribute>"` |

- Create and share a new Attribute:

  | Property     | Value                                                                                                                                                                                                                                       |
  | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | accept       | `true`                                                                                                                                                                                                                                      |
  | newAttribute | Specify an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that should be created and shared |

A corresponding [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) of type [ReadAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-response-itemproperties) will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) transferred to the Sender.

### Reject a ReadAttributeRequestItem

Even though you want to accept the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) as a whole, it could be possible that you want to reject some [ReadAttributeRequestItems]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) containted in it. This is allowed, if the ReadAttributeRequestItem has the value `false` specified in its `mustBeAccepted` property. To reject a ReadAttributeRequestItem, you must specify the following [parameter]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-response-parameters):

| Property | Value   |
| -------- | ------- |
| accept   | `false` |

A corresponding [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) transferred to the Sender.

In addition to [AcceptResponseItems]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) and [RejectResponseItems]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem), [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) are one of the three forms of [ResponseItems]({% link _docs_integrate/data-model-overview.md %}#responseitem). These are never created manually, but can occur due to an error.
{: .notice--info}

### Example: Accept a RequestItemGroup

Let's look at an example where the Sender is interested in the Recipient's [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) and contact information in the form of an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) or a [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber). To ask the Recipient for this data, the Sender creates a [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes), which contains in its `items` property a [ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) belonging to the [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) and a [RequestItemGroup]({% link _docs_integrate/read-attribute-from-peer.md %}#read-multiple-attributes-with-a-requestitemgroup) belonging to the contact information. The RequestItemGroup itself contains two ReadAttributeRequestItems in its `items` property, namely one for the [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) and one for the [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/ad95a301-b853-4d97-9ca4-bd8f13568d89" id="PB9Qbh0ucKut"></iframe></div>

In our example, the Sender only requires the Recipient to share its [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress), which is why the values of the `mustBeAccepted` property of the single [ReadAttributeRequestItems]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) and the [RequestItemGroup]({% link _docs_integrate/read-attribute-from-peer.md %}#read-multiple-attributes-with-a-requestitemgroup) within the Request are specified accordingly. We assume that the Recipient wants to accept the Request and actually only wants to share its [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress), which is already stored locally as an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute).

If the Recipient wants to accept the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes), it must accept all [ReadAttributeRequestItems]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) for which the `mustBeAccepted` property is set to `true`. It is therefore not permitted, for example, for the Recipient to refuse to share its [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) and instead share its [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber).
{: .notice--info}

Because the Recipient refuses to share its date of birth and accepts at least one [ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) of the [RequestItemGroup]({% link _docs_integrate/read-attribute-from-peer.md %}#read-multiple-attributes-with-a-requestitemgroup), it provides the following [parameters]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-response-parameters) in order to respond to the two components within the `items` property of the Request:

- Reject sharing of [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate):

  | Property | Value   |
  | -------- | ------- |
  | accept   | `false` |

- Accept [RequestItemGroup]({% link _docs_integrate/read-attribute-from-peer.md %}#read-multiple-attributes-with-a-requestitemgroup):

  | Property | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
  | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | accept   | `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
  | items    | Responses of the Recipient to the two [ReadAttributeRequestItems]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) belonging to the [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) and the [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber) contained in the [RequestItemGroup]({% link _docs_integrate/read-attribute-from-peer.md %}#read-multiple-attributes-with-a-requestitemgroup) |

Because the Recipient accepts the sharing of its [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) and rejects the sharing of its [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber), it responds to the two [ReadAttributeRequestItems]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) contained in the `items` property of the already accepted [RequestItemGroup]({% link _docs_integrate/read-attribute-from-peer.md %}#read-multiple-attributes-with-a-requestitemgroup) as follows:

- Accept sharing of existing [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress):

  | Property            | Value                                      |
  | ------------------- | ------------------------------------------ |
  | accept              | `true`                                     |
  | existingAttributeId | `"<ID of Attribute of type EMailAddress>"` |

- Reject sharing of [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber):

  | Property | Value   |
  | -------- | ------- |
  | accept   | `false` |

Note that it is important to respond to [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) and [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in the same order as they have been received.

## Get the Attributes

We now assume, that the Recipient has accepted the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) of the Sender and provided an appropriate response to it. In order for the Sender to receive the response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). To view the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request, proceed as described in the [Get outgoing Request]({% link _docs_use-cases/use-case-consumption-get-outgoing-request.md %}) use case documentation and specify `source.reference=<ID of RelationshipTemplate>`, if the [Request was sent over a Template]({% link _docs_integrate/read-attribute-from-peer.md %}#request-over-template), or `id=<ID of Request>`, if the [Request was sent over a Message]({% link _docs_integrate/read-attribute-from-peer.md %}#request-over-message), as a query parameter. The Sender can now get the requested and accepted Attributes each as a [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) of type [ReadAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-response-itemproperties) from the `response.content.items` property of the result of the response:

| Property      | Value                                                                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`       | `"ReadAttributeAcceptResponseItem"`                                                                                                                                                                 |
| `result`      | `"Accepted"`                                                                                                                                                                                        |
| `attributeId` | `"<ID of shared Attribute>"`                                                                                                                                                                        |
| `attribute`   | Shared [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) |

In contrast, the requested and rejected Attributes are wrapped as a [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem). They can be read from the `response.content.items` property of the result of the response too.

If the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) contains a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in its `items` property, the response to this Request will contain a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `response.content.items` property.
{: .notice--info}

The [Responsewrapper]({% link _docs_integrate/data-model-overview.md %}#responsewrapper) is a wrapper around the [Response]({% link _docs_integrate/data-model-overview.md %}#response) that is sent by the Recipient of the Request.
{: .notice--info}

<!--- Either in the `relationships` property or in the `messages` property of the synchronization result, the Sender can find the response of the Recipient. This depends on whether there is an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the Sender and the Recipient already. To identify the Request and corresponding response of interest in the synchronization result, the Sender needs to search for the corresponding RelationshipTemplates' ID or the corresponding Request's ID, respectively. But to view the response at any later point again, it is also possible to proceed as described in the [Get outgoing Request]({% link _docs_use-cases/use-case-consumption-get-outgoing-request.md %}) use case documentation. For identifying the Request and corresponding response of interest, use the ID of the RelationshipTemplate, if the Request was sent over a Template, or of the Request itself, if the Request was sent over a Message, as a query parameter. --->

## What's next?

Take a look at our [Integration example]({% link _docs_integrate/integration-example.md %}) if you want to see how an Attribute from a peer is read by an Identity in the context of a larger process.
