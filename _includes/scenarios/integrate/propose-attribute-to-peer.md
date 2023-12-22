An Identity may have received information about a peer in the past that it needs to process a transaction at a later time. To ensure the accuracy of the available information, the Identity can propose [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) to the peer for creation. Depending on whether the peer confirms the validness of a proposed Attribute, it can agree to its creation or correct the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) beforehand. Proposing Attributes to a peer can be useful in many situations, such as:

- A company wants to make sure that the currently stored street address of a customer is valid before using it to ship an item to the customer.
- An organization supports an Identity in setting up an enmeshed account by proposing Attributes to it that was derived from the organization's knowledge about the Identity.

We will now explain how a Connector, hereinafter referred to as the Sender, can propose an Attribute to another Connector, the so-called Recipient. Since understanding this proposing process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our Request and Response introduction before continuing reading this guide.

<!--- TODO: Insert Link to "Request and Response introduction" guide --->

Please note that the general procedure is the same if the Connector wants to propose an Attribute to an App user instead of another Connector. For reasons of clarity, this guide focuses on the proposing process with two Connectors.
{: .notice--info}

## Request for proposing Attributes

The Sender wants to propose an Attribute to the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. In the following subsections, we describe the general appearance of a Request for proposing Attributes.

### Description of ProposeAttributeRequestItem

To propose a single Attribute to the Recipient, a single [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ProposeAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem) must be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). If the `<...>` notation is used as a placeholder for the actual data as usual, this looks as follows:

| Property                | Value                                                                                                                                                                                                                                                                                                                | Required |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| `@type`                 | `"ProposeAttributeRequestItem"`                                                                                                                                                                                                                                                                                      |    ✓     |
| `title`                 | `"<title of ProposeAttributeRequestItem>"`                                                                                                                                                                                                                                                                           |    ✗     |
| `description`           | `"<description of ProposeAttributeRequestItem>"`                                                                                                                                                                                                                                                                     |    ✗     |
| `mustBeAccepted`        | `true` or `false`, depending on whether this ProposeAttributeRequestItem must be accepted by the Recipient                                                                                                                                                                                                           |    ✓     |
| `requireManualDecision` | `true` or `false`, depending on whether the Recipient must make a manual decision about accepting or rejecting this ProposeAttributeRequestItem                                                                                                                                                                      |    ✗     |
| `metadata`              | `<custom metadata sent together with ProposeAttributeRequestItem>`                                                                                                                                                                                                                                                   |    ✗     |
| `attribute`             | [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that the Sender proposes to the Recipient, using an empty string as the value for the `owner` property of the Attribute |    ✓     |
| `query`                 | An appropriate [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery) or [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) that matches the Attribute proposed by the Sender to the Recipient                   |    ✓     |

It is possible to propose an IdentityAttribute or a RelationshipAttribute, which must be inserted into the `attribute` property of the ProposeAttributeRequestItem. As it only makes sense for the Sender to propose an Attribute to the Recipient which is owned by the Recipient, the Sender must specify an empty string as the value for the `owner` property of the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes). The Recipient automatically becomes the owner of the Attribute later on. As the Recipient may wants to change the Attribute Value of the proposed Attribute, the Sender must formulate a `query` matching the `attribute`. If the Sender specifies an `attribute` and a `query` that are incompatible, an [error]({% link _docs_integrate/error-codes.md %}) with the code `error.runtime.requestDeserialization` is to be expected.

### Propose an IdentityAttribute

In the case in which the Sender wants to propose an IdentityAttribute to the Recipient, it must use a [ProposeAttributeRequestItem]({% link _docs_integrate/propose-attribute-to-peer.md %}#description-of-proposeattributerequestitem) which contains the IdentityAttribute in its `attribute` property and a matching IdentityAttributeQuery in its `query` property. This means that the specified value for the `valueType` property of the [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery) must correspond to the Attribute Value type of the IdentityAttribute. The ProposeAttributeRequestItem must then be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for proposing Attributes.

### Propose a RelationshipAttribute

It is also possible to propose a RelationshipAttribute to a peer, as can be seen from the [Combinations and usage scenarios]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem-combinationsandusagescenarios) of the ProposeAttributeRequestItem. Let's consider the case in which the Sender has established an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Recipient and the Sender wants to propose a RelationshipAttribute for this Relationship to the Recipient. Then the Sender needs to insert a corresponding [ProposeAttributeRequestItem]({% link _docs_integrate/propose-attribute-to-peer.md %}#description-of-proposeattributerequestitem), which contains the RelationshipAttribute in its `attribute` property and a matching RelationshipAttributeQuery in its `query` property, into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for proposing Attributes. In particular, it is necessary that the specified value for the `attributeCreationHints.valueType` property of the [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) corresponds to the Attribute Value type of the RelationshipAttribute.

### Propose multiple Attributes

It is not necessary to propose just a single Attribute to a peer. Instead, it is also possible to propose multiple Attributes to a peer at the same time. For this purpose, several ProposeAttributeRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for proposing Attributes. If you want to use a RequestItemGroup in order to propose multiple Attributes to the Recipient at the same time, you must insert corresponding ProposeAttributeRequestItems into the `items` property of it.

## Send and receive the Request

The Sender that wants to propose an Attribute to the Recipient may or may not already have a Relationship with the Recipient. Depending on which is the case, a different method is more suitable for sending the [Request for proposing Attributes]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-for-proposing-attributes). There are basically two ways to send the Request for proposing Attributes created by the Sender to the Recipient.

### Request over Template

If there is currently no Relationship between the Sender and the Recipient, this approach must be used. However, it is also possible for the Sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the Recipient if there is already an active Relationship between them. All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.

### Request over Message

The Sender only has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between the Sender and the Recipient. All information on how to send and receive a Request via a Message can be found in the [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) guide.

## Accept the Request and deal with the proposed Attributes

After the Sender has sent the [Request for proposing Attributes]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-for-proposing-attributes) to the Recipient and the Recipient has received this Request, the Recipient can accept it to create all or some of the Attributes that were proposed for creation by the Sender. The Recipient also has the option of overwriting the Attribute Values beforehand or sending existing Attributes back to the Sender instead of creating new ones. To accept the Request, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request). Also, you need to decide and specify for each ProposeAttributeRequestItem contained in the Request for proposing Attributes whether you want to accept or reject it.

If the Recipient does not want to deal with any of the Attributes proposed by the Sender and therefore does not want to accept the Request for proposing Attributes of the Sender, it can reject it as a whole as well. For that, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/25159913-8e8c-4f65-98eb-f2522b8248a6" id="zk3XNeKG5NpM"></iframe></div>

### Accept a ProposeAttributeRequestItem

If the Recipient wants to give the Sender feedback on the validness of one of the Attributes proposed by the Sender, it can accept the associated ProposeAttributeRequestItem contained in the Request for proposing Attributes. Depending on whether the Recipient confirms the validness of the proposed Attribute, it can agree to its creation and send it back to the Sender unchanged or correct the Attribute Value beforehand:

- Create the proposed Attribute:

  | Property    | Value                                             |
  | ----------- | ------------------------------------------------- |
  | `accept`    | `true`                                            |
  | `attribute` | Attribute proposed by the Sender to the Recipient |

- Create a corrected version of the proposed Attribute:

  | Property    | Value                                                                          |
  | ----------- | ------------------------------------------------------------------------------ |
  | `accept`    | `true`                                                                         |
  | `attribute` | Attribute that differs from the proposed Attribute only by the Attribute Value |

If the Recipient does not want to create a new Attribute, it can also send an existing Attribute back to the Sender. The existing Attribute may only differ from the proposed Attribute by the Attribute Value. The following [parameter]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem-response-parameters) must be used for that:

| Property      | Value                                                                                  |
| ------------- | -------------------------------------------------------------------------------------- |
| `accept`      | `true`                                                                                 |
| `attributeId` | `"<ID of the existing Attribute that the Recipient wants to send back to the Sender>"` |

The acception of a ProposeAttributeRequestItem leads to the creation of a corresponding [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) contained within its `shareInfo` property. The `content` of the LocalAttribute is the Attribute that the Recipient wants to send back to the Sender. Depending on whether the Recipient confirms the validness of the proposed Attribute, it is therefore the proposed Attribute itself or a corrected version of it. Based on this LocalAttribute, an appropriate [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) of type [ProposeAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem-response-itemproperties) is generated:

| Property      | Value                                                           |
| ------------- | --------------------------------------------------------------- |
| `@type`       | `"ProposeAttributeAcceptResponseItem"`                          |
| `result`      | `"Accepted"`                                                    |
| `attributeId` | `"<ID of created LocalAttribute with LocalAttributeShareInfo>"` |
| `attribute`   | Attribute that the Recipient wants to send back to the Sender   |

This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for proposing Attributes that will be transferred to the Sender. If a new IdentityAttribute is to be created and sent back to the Sender, a corresponding LocalAttribute without a LocalAttributeShareInfo is additionally created for the Recipient beforehand.

It is noticeable that accepting a ProposeAttributeRequestItem essentially works in the same way as accepting a [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem). Both types of RequestItems are used when an Identity needs information about a peer. The difference between the two RequestItems is that when using the ProposeAttributeRequestItem, the Identity can bring in existing knowledge about the peer and check its validness by proposing corresponding Attributes to the peer for creation. The ProposeAttributeRequestItem can therefore also be understood as a combination of the ReadAttributeRequestItem and the [CreateAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem). To gain a deeper understanding of these connections, take a look at the Read Attribute from peer guide and the Create Attribute for peer guide.
{: .notice--info}

<!--- TODO: Insert Links to "Read Attribute from peer" and "Create Attribute for peer" guide --->

### Reject a ProposeAttributeRequestItem

Even if the Recipient accepts the Request for proposing Attributes as a whole, it may decide not to deal with all of the Attributes proposed by the Sender. To be more precise, the Recipient has the option of rejecting [ProposeAttributeRequestItems]({% link _docs_integrate/propose-attribute-to-peer.md %}#description-of-proposeattributerequestitem) that have the value `false` specified in their `mustBeAccepted` property. To reject a ProposeAttributeRequestItem, use the [parameter]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem-response-parameters):

| Property | Value   |
| -------- | ------- |
| `accept` | `false` |

The rejection of a ProposeAttributeRequestItem leads to the creation of a corresponding [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem). This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for proposing Attributes.

### Example of accepting a RequestItemGroup

Let's look at an example where the Sender proposes the Recipient's [PersonName]({% link _docs_integrate/attribute-values.md %}#personname) and contact information in the form of an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) and a [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber) to the Recipient during its onboarding process. For this purpose, the Sender creates a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for proposing Attributes, which contains a ProposeAttributeRequestItem belonging to the PersonName and a RequestItemGroup belonging to the contact information in its `items` property. The [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) itself includes two ProposeAttributeRequestItems in its `items` property, namely one for the EMailAddress and one for the PhoneNumber.

--- TODO: Insert diagram ---

In our example, the Sender only requires the Recipient to accept the ProposeAttributeRequestItems belonging to the PersonName and the EMailAddress, which is why the individual [ProposeAttributeRequestItems]({% link _docs_integrate/propose-attribute-to-peer.md %}#description-of-proposeattributerequestitem) and the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) within the Request have specified corresponding values in their `mustBeAccepted` property. We assume that the Recipient wants to accept the Request and all its ProposeAttributeRequestItems with the exception of the PhoneNumber.

If the Recipient wants to accept the Request for proposing Attributes, it must accept all [ProposeAttributeRequestItems]({% link _docs_integrate/propose-attribute-to-peer.md %}#description-of-proposeattributerequestitem) for which the `mustBeAccepted` property is set to `true`. It is therefore not permitted for the Recipient to refuse to accept the ProposeAttributeRequestItem belonging to the PersonName or the EMailAddress.
{: .notice--info}

In our example, the Recipient confirms the validness of the PersonName proposed by the Sender. As it also accepts at least one ProposeAttributeRequestItem of the RequestItemGroup, it provides the following values for responding to the two components within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request):

- Accept the creation of the proposed PersonName:

  | Property    | Value                                              |
  | ----------- | -------------------------------------------------- |
  | `accept`    | `true`                                             |
  | `attribute` | PersonName proposed by the Sender to the Recipient |

- Accept RequestItemGroup:

  | Property | Value                                                                                                                                                  |
  | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `accept` | `true`                                                                                                                                                 |
  | `items`  | Responses of the Recipient to the two ProposeAttributeRequestItems belonging to the EMailAddress and the PhoneNumber contained in the RequestItemGroup |

We assume that the Sender has proposed an outdated EMailAddress to the Recipient for creation. The Recipient therefore wants to create a corrected version of the EMailAddress and send it back to the Sender. Since the Recipient accepts the ProposeAttributeRequestItem belonging to the EMailAddress and rejects the PhoneNumber, it responds to the two ProposeAttributeRequestItems included in the `items` property of the already accepted [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) as follows:

- Create a corrected version of the proposed EMailAddress:

  | Property    | Value                                          |
  | ----------- | ---------------------------------------------- |
  | `accept`    | `true`                                         |
  | `attribute` | Corrected version of the proposed EMailAddress |

- Reject PhoneNumber:

  | Property | Value   |
  | -------- | ------- |
  | `accept` | `false` |

Note that it is important to respond to RequestItems and RequestItemGroups in the same order in which they were received.

## Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for proposing Attributes]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-for-proposing-attributes) of the Sender. In order for the Sender to receive the Response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/f3818539-0050-42a4-a343-fb410d4134fc" id="bzlYC7NrKA9y"></iframe></div>

To view the Response to the Request, search for it in the synchronization result or proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a Template]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-over-template): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-over-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the Response of the Recipient from the `response.content` property of the result. In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is a [ProposeAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem-response-itemproperties) for each accepted ProposeAttributeRequestItem and a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected ProposeAttributeRequestItem included. Note that each accepted ProposeAttributeRequestItem leads to the creation of an appropriate LocalAttribute with a LocalAttributeShareInfo of the Sender. The `content` of the [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) is the Attribute that the Recipient has sent back to the Sender. Depending on whether the Recipient has confirmed the validness of the Attribute proposed by the Sender, it is therefore the proposed Attribute itself or a corrected version of it.

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response. If the Request for proposing Attributes contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's next?

An Identity has several options for requesting an Attribute creation. This guide covers how an Identity can request the creation of an Attribute for a peer so that the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is proposed by the Identity, but can be modified by the peer when accepting the Request. In some cases, it makes more sense if the peer cannot change the proposed Attribute Value. For that, take a look at the Create Attribute for peer guide.

<!--- TODO: Insert Link to "Create Attribute for peer" guide --->

<!--- {% include warnings/documentation-is-prerelease %}

The connector would like to save an attribute for another identity and has 2 options for this.

The Create Attribute creates a request that the peer can accept and thus an attribute is created. To avoid errors, it is better to use the "Propose attribute" request for some attributes, so that the user has the option of customizing the attribute to be saved. --->
