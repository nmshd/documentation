There are many situations in which an Identity is interested in an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of another Identity, for example:

- You are interested in the birth date of another Identity so that you can wish this Identity a happy birthday every year.
- You must know the email address of another Identity in order to be able to send an email to this Identity.

In this guide, we explain how a Connector, hereinafter referred to as the Sender, can read an Attribute of another Connector, the so-called Recipient. Since understanding this reading process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our Request and Response introduction before continuing reading this guide.

<!--- TODO: Insert Link to "Request and Response introduction" guide --->

Please note that the general procedure is the same if the Connector wants to read an Attribute of an App user instead of another Connector. For reasons of clarity, this guide focuses on the reading process with two Connectors.
{: .notice--info}

## Request for reading Attributes

The Sender wants to read an Attribute of the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. In the following subsections, we describe the general appearance of a Request for reading Attributes.

### Description of ReadAttributeRequestItem

For reading a single Attribute, you need to insert a single [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem) into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). If the `<...>` notation is used as a placeholder for the actual data as usual, this looks as follows:

| Property                | Value                                                                                                                                                                                                                                                                                                                                            | Required |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: |
| `@type`                 | `"ReadAttributeRequestItem"`                                                                                                                                                                                                                                                                                                                     |    ✓     |
| `title`                 | `"<title of ReadAttributeRequestItem>"`                                                                                                                                                                                                                                                                                                          |    ✗     |
| `description`           | `"<description of ReadAttributeRequestItem>"`                                                                                                                                                                                                                                                                                                    |    ✗     |
| `mustBeAccepted`        | `true` or `false`, depending on whether this ReadAttributeRequestItem must be accepted by the Recipient                                                                                                                                                                                                                                          |    ✓     |
| `requireManualDecision` | `true` or `false`, depending on whether the Recipient must make a manual decision about accepting or rejecting this ReadAttributeRequestItem                                                                                                                                                                                                     |    ✗     |
| `metadata`              | `<custom metadata sent together with ReadAttributeRequestItem>`                                                                                                                                                                                                                                                                                  |    ✗     |
| `query`                 | [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery), [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) |    ✓     |

The input you have to provide for the `query` property depends on what kind of Attribute you want to get. If you want to read an IdentityAttribute, you must use an [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery). If, on the other hand, you are interested in a RelationshipAttribute of the Recipient, you must insert a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or a [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) at this point. This depends on whether you want to read a RelationshipAttribute that the Recipient has in the context of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Sender or with a third party.

### Example of reading an IdentityAttribute

We assume that the Sender wants to read an IdentityAttribute of type [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) of the Recipient:

| Property    | Value                      |
| ----------- | -------------------------- |
| `@type`     | `"IdentityAttributeQuery"` |
| `valueType` | `"EMailAddress"`           |

The corresponding IdentityAttributeQuery must then be inserted into the `query` property of the [ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem), which is contained within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for reading Attributes.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/b287c0e8-9f7b-47b1-9f3a-a749b2ab4857" id="W5jVHiTYvN.P"></iframe></div>

### Read a RelationshipAttribute

We now consider the case that the Sender has an active Relationship established with the Recipient and that the Sender wants to read a RelationshipAttribute of this Relationship. Then the associated [ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem), which is contained in the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for reading Attributes created by the Sender, must contain an appropriate RelationshipAttributeQuery in its `query` property. Further details on the purposes for which you can use a RelationshipAttributeQuery and how you can use it can be found in the description of the [Combinations and usage scenarios]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-combinationsandusagescenarios) of the ReadAttributeRequestItem. For information on using the ThirdPartyRelationshipAttributeQuery, you should also refer to this description.

### Read multiple Attributes

It is not necessary to request just a single Attribute. Instead, it is also possible to request read access to multiple Attributes at the same time. Several ReadAttributeRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for reading Attributes for this purpose. If you want to use a RequestItemGroup in order to request read access to multiple Attributes of the Recipient at the same time, you must insert corresponding ReadAttributeRequestItems into the `items` property of it.

## Send and receive the Request

The Sender that wants to read an Attribute of the Recipient may or may not already have a Relationship with the Recipient. Depending on which is the case, a different method is more suitable for sending the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes). There are basically two ways to send the Request for reading Attributes created by the Sender to the Recipient.

### Request over Template

If there is currently no Relationship between the Sender and the Recipient, this approach must be used. But it is also possible for the Sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the Recipient if there is already an active Relationship between them. All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.

### Request over Message

The Sender only has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between the Sender and the Recipient. All information on how to send and receive a Request via a Message can be found in the [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) guide.

## Accept the Request

After the Sender has sent the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) to the Recipient and the Recipient has received this Request, the Recipient can accept it to give the Sender read access to all or some of the requested Attributes. To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request). You must also decide and specify for each ReadAttributeRequestItem contained in the Request for reading Attributes whether you want to accept or reject it.

If the Recipient does not want the Sender to read any Attributes of it and therefore does not want to accept the Request for reading Attributes of the Sender, it can reject it as a whole as well. For this, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/164e1c68-0997-4a16-832c-c1e53bb55571" id="NypRt8MoA-HR"></iframe></div>

### Accept a ReadAttributeRequestItem

If the Recipient agrees to share a requested Attribute with the Sender, it can accept the associated ReadAttributeRequestItem contained in the Request for reading Attributes. In particular, it must then provide the requested Attribute for its response to the Request. Depending on whether the Recipient wants to share an Attribute that already exists as a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) or that has to be created first, different [parameters]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-response-parameters) for this must be used:

- Share an existing Attribute:

  | Property              | Value                      |
  | --------------------- | -------------------------- |
  | `accept`              | `true`                     |
  | `existingAttributeId` | `"<ID of LocalAttribute>"` |

- Create and share a new Attribute:

  | Property       | Value                                                                                     |
  | -------------- | ----------------------------------------------------------------------------------------- |
  | `accept`       | `true`                                                                                    |
  | `newAttribute` | Specify an IdentityAttribute or a RelationshipAttribute that should be created and shared |

The acception of a ReadAttributeRequestItem leads to the creation of a corresponding LocalAttribute with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) contained within its `shareInfo` property. Based on this, an appropriate [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) of type [ReadAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-response-itemproperties) is also generated:

| Property      | Value                                                   |
| ------------- | ------------------------------------------------------- |
| `@type`       | `"ReadAttributeAcceptResponseItem"`                     |
| `result`      | `"Accepted"`                                            |
| `attributeId` | `"<ID of LocalAttribute with LocalAttributeShareInfo>"` |
| `attribute`   | Shared IdentityAttribute or RelationshipAttribute       |

This will be included in the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for reading Attributes that will be transferred to the Sender. If a new IdentityAttribute is to be shared, a LocalAttribute without a LocalAttributeShareInfo is additionally created for the Recipient beforehand.

### Reject a ReadAttributeRequestItem

Even if the Recipient accepts the Request for reading Attributes as a whole, it may decide not to share every requested Attribute with the Sender. To be more precise, the Recipient has the option of rejecting [ReadAttributeRequestItems]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) that have the value `false` specified in their `mustBeAccepted` property. To reject a ReadAttributeRequestItem, use the following [parameter]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-response-parameters):

| Property | Value   |
| -------- | ------- |
| `accept` | `false` |

The rejection of a ReadAttributeRequestItem leads to the creation of a corresponding [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem). This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for reading Attributes.

### Example of accepting a RequestItemGroup

Let's look at an example where the Sender is interested in the Recipient's [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) and contact information in the form of an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) or a [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber). To ask the Recipient for this data, the Sender creates a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for reading Attributes, which contains a ReadAttributeRequestItem belonging to the BirthDate and a RequestItemGroup belonging to the contact information in its `items` property. The [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) itself contains two ReadAttributeRequestItems in its `items` property, namely one for the EMailAddress and one for the PhoneNumber.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/ad95a301-b853-4d97-9ca4-bd8f13568d89" id="PB9Qbh0ucKut"></iframe></div>

In our example, the Sender only requires the Recipient to share its EMailAddress, which is why the individual [ReadAttributeRequestItems]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) and the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) within the Request have specified corresponding values in their `mustBeAccepted` property. We assume that the Recipient wants to accept the Request and only wants to share its EMailAddress, which is already saved as an appropriate LocalAttribute, with the Sender.

If the Recipient wants to accept the Request for reading Attributes, it must accept all [ReadAttributeRequestItems]({% link _docs_integrate/read-attribute-from-peer.md %}#description-of-readattributerequestitem) for which the `mustBeAccepted` property is set to `true`. It is therefore not permitted, for example, for the Recipient to refuse to share its EMailAddress and instead share its PhoneNumber.
{: .notice--info}

Because the Recipient refuses to share its BirthDate with the Sender, but also accepts at least one ReadAttributeRequestItem of the RequestItemGroup, it provides the following values for responding to the two components within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request):

- Reject sharing of BirthDate:

  | Property | Value   |
  | -------- | ------- |
  | `accept` | `false` |

- Accept RequestItemGroup:

  | Property | Value                                                                                                                                               |
  | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `accept` | `true`                                                                                                                                              |
  | `items`  | Responses of the Recipient to the two ReadAttributeRequestItems belonging to the EMailAddress and the PhoneNumber contained in the RequestItemGroup |

Since the Recipient accepts the sharing of its EMailAddress and rejects the sharing of its PhoneNumber, it responds to the two ReadAttributeRequestItems included in the `items` property of the already accepted [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) as follows:

- Accept sharing of existing EMailAddress:

  | Property              | Value                                      |
  | --------------------- | ------------------------------------------ |
  | `accept`              | `true`                                     |
  | `existingAttributeId` | `"<ID of LocalAttribute of EMailAddress>"` |

- Reject sharing of PhoneNumber:

  | Property | Value   |
  | -------- | ------- |
  | `accept` | `false` |

Note that it is important to respond to RequestItems and RequestItemGroups in the same order in which they were received.

## Get the Attributes

We now assume that the Recipient has accepted the [Request for reading Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}#request-for-reading-attributes) of the Sender. In order for the Sender to receive the Response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c8e5575e-ed55-48c2-897e-68e99d5df932" id="jbZRol4VVGZQ"></iframe></div>

To view the Response to the Request, search for it in the synchronization result or proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a Template]({% link _docs_integrate/read-attribute-from-peer.md %}#request-over-template): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/read-attribute-from-peer.md %}#request-over-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the Response of the Recipient from the `response.content` property of the result. In particular, each requested and shared Attribute that belongs to an accepted ReadAttributeRequestItem can be read from a corresponding [ReadAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem-response-itemproperties) within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response). Internally, the shared `attribute` that can be read from the ReadAttributeAcceptResponseItem is used to create an appropriate LocalAttribute with a LocalAttributeShareInfo of the Sender. On the other hand, there is a corresponding [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) in the `items` property of the Response for each rejected ReadAttributeRequestItem.

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response. If the Request for reading Attributes contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's next?

Take a look at our [Integration example]({% link _docs_integrate/integration-example.md %}) if you want to see how an Attribute of a peer is read by an Identity in the context of a larger process. Also note that it is not only possible to request the reading of an Attribute from a peer, but that you can share your own Attribute with a peer as well. Consult the Share own Attribute to peer guide for this.

<!--- TODO: Insert link to scenario desription "Share own Attribute to peer" --->
