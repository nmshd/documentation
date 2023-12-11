There are many situations in which an Identity wants to share an own [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or an own [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with another Identity, for example:

- You want to share your email address in order to be able to receive emails from another Identity.
- You want to give your street address to another Identity so that they can send you documents by post.

In this guide, we explain how a Connector, hereinafter referred to as the Sender, can share an own Attribute with another Connector, the so-called Recipient. Since understanding this sharing process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our Request and Response introduction before continuing reading this guide.

<!--- TODO: Insert Link to "Request and Response introduction" guide --->

Please note that the general procedure is the same if the Connector wants to share an Attribute with an App user instead of another Connector. For reasons of clarity, this guide focuses on the sharing process with two Connectors.
{: .notice--info}

## Request for sharing Attributes

The Sender wants to share an own Attribute with the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. In the following subsections, we describe the general appearance of a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes.

### Description of ShareAttributeRequestItem

For sharing a single Attribute, you need to insert a single [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ShareAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem) into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). If the `<...>` notation is used as a placeholder for the actual data as usual, this looks as follows:

| Property                | Value                                                                                                                                                                                                                               | Required |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| `@type`                 | `"ShareAttributeRequestItem"`                                                                                                                                                                                                       |    ✓     |
| `title`                 | `"<title of RequestItem>"`                                                                                                                                                                                                          |    ✗     |
| `description`           | `"<description of RequestItem>"`                                                                                                                                                                                                    |    ✗     |
| `mustBeAccepted`        | `true` or `false`, depending on whether this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) must be accepted by the Recipient                                                                         |    ✓     |
| `requireManualDecision` | `true` or `false`, depending on whether the Recipient must make a manual decision about accepting or rejecting this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem)                                    |    ✗     |
| `metadata`              | `<custom metadata sent together with RequestItem>`                                                                                                                                                                                  |    ✗     |
| `attribute`             | Own [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or own [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that the Sender wants to share |    ✓     |
| `sourceAttributeId`     | `"<ID of LocalAttribute which is the source of the shared Attribute>"`                                                                                                                                                              |    ✓     |

The Sender can only share an Attribute that already exists as a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) and is owned by it. The latter means that the Address of the Sender is contained in the `content.owner` property of the corresponding LocalAttribute. The `id` of the LocalAttribute must be inserted into the `sourceAttributeId` property and the `content` of the LocalAttribute into the `attribute` property of the [ShareAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem).

To get a list of all LocalAttributes that are owned by the Sender, proceed as described in the [Query Attributes]({% link _docs_use-cases/use-case-consumption-query-attributes.md %}) use case documentation and use `"content.owner=<Address of Sender>"` as query parameter. If the `id` of a LocalAttribute is known, the underlying IdentityAttribute or RelationshipAttribute within its `content` property can be displayed by consulting the [Get Attribute]({% link _docs_use-cases/use-case-consumption-get-attribute.md %}) use case description and specifying the `id` of the LocalAttribute.
{: .notice--info}

### Example for sharing an own IdentityAttribute

We assume that the Integrator of the Sender has created an own [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) for the Sender by following the instructions of our Create own IdentityAttribute scenario documentation:

<!--- TODO: Insert link to "Create own IdentityAttribute" guide --->

| Property      | Value                   |
| ------------- | ----------------------- |
| `@type`       | `"IdentityAttribute"`   |
| `owner`       | `"<Address of Sender>"` |
| `value.@type` | `"BirthDate"`           |
| `value.day`   | `<day of birth date>`   |
| `value.month` | `<month of birth date>` |
| `value.year`  | `<year of birth date>`  |

This IdentityAttribute is stored locally within the `content` property of a corresponding LocalAttribute of the Sender:

| Property    | Value                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`     | `"LocalAttribute"`                                                                                                                                                                           |
| `id`        | `"<ID of LocalAttribute>"`                                                                                                                                                                   |
| `createdAt` | `"<creation date of LocalAttribute>"`                                                                                                                                                        |
| `content`   | Own [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) as just described |

In our example, the Sender wants to share the IdentityAttribute with the Recipient. To do so, it needs to insert the `id` of the corresponding LocalAttribute into the `sourceAttributeId` property and the IdentityAttribute itself into the `attribute` property of the [ShareAttributeRequestItem]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) contained within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/a5a4f7ee-2b39-4d44-9033-af71c54b51fc" id="LL4RTaLG_DZr"></iframe></div>

### Share an own RelationshipAttribute

We now consider the case in which the Sender has an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with another Identity and owns a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of this Relationship. The Sender can request to share this RelationshipAttribute with the Recipient if the `confidentiality` of the RelationshipAttribute is `"protected"` or `"public"`. Details on how to create a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing a RelationshipAttribute in different application scenarios can be found in the description of the [Combinations and usage scenarios]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem-combinationsandusagescenarios) of the ShareAttributeRequestItem.

### Share multiple Attributes with a RequestItemGroup

It is not necessary to share just a single Attribute. Instead, it is also possible to request the sharing of multiple Attributes at the same time. For this purpose, several [ShareAttributeRequestItems]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes. If you want to use a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in order to share multiple Attributes with the Recipient at the same time, you must insert corresponding [ShareAttributeRequestItems]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) into the `items` property of it.

## Send and receive the Request

The Sender that wants to share an Attribute with the Recipient may or may not already have a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Recipient. Depending on which is the case, a different method is more suitable for sending the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes):

- [Request over Template]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-over-template): If there is currently no Relationship between the Sender and the Recipient, you must use this approach.
- [Request over Message]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-over-message): This procedure is only permitted if there is already an active Relationship between the Sender and the Recipient.

In the following, we briefly describe the procedure of sending the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) created by the Sender to the Recipient separately in both cases.

### Request over Template

We first consider the situation in which there is no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the Sender and the Recipient yet. In order for the Sender to be able to share an Attribute with the Recipient, a Relationship must first be created between them.

For general information about establishing a Relationship between two Connectors, see the guides Prepare enmeshed onboarding package and Process received enmeshed onboarding package and create relationship.
{: .notice--info}

<!--- TODO: Insert links to guide "Prepare enmeshed onboarding package" and guide "Process received enmeshed onboarding package and create relationship" --->

To initiate the establishment of a Relationship between the Sender and the Recipient and at the same time send a Request to share an Attribute with the Recipient, the Sender can create an appropriate [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate). In particular, it is necessary for this purpose that a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) is used in the `content` property of the RelationshipTemplate and that the RelationshipTemplateContent contains the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) in its `onNewRelationship` property. Once the Sender has created such a RelationshipTemplate, the Recipient can load it onto itself. This causes the Recipient to receive the underlying [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) of the RelationshipTemplate as a new incoming Request. The Recipient can retrieve this [Request]({% link _docs_integrate/data-model-overview.md %}#request) and read its `id` from the result of the response:

| Property | Value               |
| -------- | ------------------- |
| `id`     | `"<ID of Request>"` |

{% include copy-notice description="Save the `id` of the Request so that you can refer to it in the next step." %}

All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.

It is also possible for the Sender to use a RelationshipTemplate to send a Request to the Recipient if there is already an active Relationship between them. To do this, proceed as just described, but insert the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) into the `onExistingRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent), which is contained in the `content` property of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
{: .notice--info}

### Request over Message

We will now look at the case in which a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) already exists between the Sender and the Recipient. In this case, the Sender has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message). To do this, the Sender must first create an outgoing Request locally that is based on the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) described above. The Sender must then send a [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the Recipient that contains the created outgoing Request in its `content` property. After the Message is sent, the Recipient needs to synchronize the updates of the Backbone in order to receive the Message. This causes the Recipient to also receive the underlying [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) of the Message as a new incoming Request. The Recipient can retrieve this [Request]({% link _docs_integrate/data-model-overview.md %}#request) and read its `id` from the result of the response:

| Property | Value               |
| -------- | ------------------- |
| `id`     | `"<ID of Request>"` |

{% include copy-notice description="Save the `id` of the Request so that you can refer to it in the next step." %}

All details on how to send and receive a Request via a Message in general can be found in the [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) guide.

## Accept the Request and get the Attributes

After the Sender has sent the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) to the Recipient and the Recipient has received this Request, the Recipient can accept it to get all or some of the Sender's shared Attributes. To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the ID of the received Request. Also, you need to decide and specify for each [ShareAttributeRequestItem]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) contained in the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) whether you want to accept or reject it.

If the Recipient does not want to get any of the Sender's shared Attributes and therefore does not want to accept the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) of the Sender, it can reject it as a whole too. For that, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

In the next subsections, we will describe the process of accepting a [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes). The following diagram provides an overview of this process.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/b79abea1-1062-4f0d-8929-85dd4d728a59" id="7SfSSvpj.eT3"></iframe></div>

### Accept a ShareAttributeRequestItem

If the Recipient agrees to get one of the Sender's shared Attributes, it can accept the associated [ShareAttributeRequestItem]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) contained in the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes). The following [parameter]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem-response-parameters) must be used for this:

| Property | Value  |
| -------- | ------ |
| accept   | `true` |

The acception of a ShareAttributeRequestItem leads to the creation of a corresponding [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) contained within its `shareInfo` property. The `content` of the LocalAttribute is the underlying `attribute` of the ShareAttributeRequestItem. Based on this, an appropriate [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) of type [ShareAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem-response-itemproperties) is generated:

| Property      | Value                                                           |
| ------------- | --------------------------------------------------------------- |
| `@type`       | `"ShareAttributeAcceptResponseItem"`                            |
| `result`      | `"Accepted"`                                                    |
| `attributeId` | `"<ID of created LocalAttribute with LocalAttributeShareInfo>"` |

This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) that will be transferred to the Sender.

### Reject a ShareAttributeRequestItem

Even if the Recipient accepts the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) as a whole, it may decide not to accept all of the Sender's shared Attributes. To be more precise, the Recipient has the option of rejecting [ShareAttributeRequestItems]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) that have the value `false` specified in their `mustBeAccepted` property. To reject a ShareAttributeRequestItem, use the [parameter]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem-response-parameters):

| Property | Value   |
| -------- | ------- |
| accept   | `false` |

The rejection of a ShareAttributeRequestItem leads to the creation of a corresponding [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem). This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes).

In addition to [AcceptResponseItems]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) and [RejectResponseItems]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem), [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) are one of the three forms of [ResponseItems]({% link _docs_integrate/data-model-overview.md %}#responseitem). These are never created manually, but can occur due to an error.
{: .notice--info}

### Example of accepting a RequestItemGroup

Let's look at an example where the Sender wants to share its [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname) and contact information in the form of an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) or a [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber) with the Recipient. For this purpose, the Sender creates a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes, which contains a [ShareAttributeRequestItem]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) belonging to the DisplayName and a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) belonging to the contact information in its `items` property. The RequestItemGroup itself includes two ShareAttributeRequestItems in its `items` property, namely one for the EMailAddress and one for the PhoneNumber.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/ab4b085b-b498-4182-bb2a-2b18f6825006" id="YChSfL-aFISG"></iframe></div>

In our example, the Sender only requires the Recipient to accept the DisplayName and the EMailAddress, which is why the individual [ShareAttributeRequestItems]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) and the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) within the Request have specified corresponding values in their `mustBeAccepted` property. We assume that the Recipient wants to accept the Request and all its ShareAttributeRequestItems with the exception of the PhoneNumber.

If the Recipient wants to accept the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes), it must accept all [ShareAttributeRequestItems]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) for which the `mustBeAccepted` property is set to `true`. It is therefore not permitted for the Recipient to refuse to accept the DisplayName or the EMailAddress shared by the Sender.
{: .notice--info}

Because the Recipient accepts the DisplayName of the Sender and also accepts at least one [ShareAttributeRequestItem]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) of the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup), it provides the following values for responding to the two components within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request):

- Accept [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname):

  | Property | Value  |
  | -------- | ------ |
  | accept   | `true` |

- Accept [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup):

  | Property | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
  | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | accept   | `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
  | items    | Responses of the Recipient to the two [ShareAttributeRequestItems]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) belonging to the [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) and the [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber) contained in the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) |

Since the Recipient accepts the EMailAddress and rejects the PhoneNumber of the Sender, it responds to the two [ShareAttributeRequestItems]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) included in the `items` property of the already accepted [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) as follows:

- Accept [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress):

  | Property | Value  |
  | -------- | ------ |
  | accept   | `true` |

- Accept [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber):

  | Property | Value   |
  | -------- | ------- |
  | accept   | `false` |

Note that it is important to respond to [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) and [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in the same order in which they were received.

## Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) of the Sender. In order for the Sender to receive the [Response]({% link _docs_integrate/data-model-overview.md %}#response) of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/14e97556-0a62-417a-9c97-41872d029056" id="DG~Sz6M~q5zO"></iframe></div>

To view the Response to the Request, search for it in the synchronization result or proceed as described in the [Get outgoing Request]({% link _docs_use-cases/use-case-consumption-get-outgoing-request.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a Template]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-over-template): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-over-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the [Response]({% link _docs_integrate/data-model-overview.md %}#response) of the Recipient from the `response.content` property of the result. In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is an [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) of type [ShareAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem-response-itemproperties) for each accepted ShareAttributeRequestItem and a [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected ShareAttributeRequestItem included. Note that each accepted ShareAttributeRequestItem leads to the creation of an appropriate [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) of the Sender. The `content` of the LocalAttribute is the underlying `attribute` of the ShareAttributeRequestItem.

If the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes contains a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in its `items` property, the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's next?

Take a look at our [Integration example]({% link _docs_integrate/integration-example.md %}) if you want to see how an Identity shares an own Attribute with a peer in the context of a larger process. Also note that it is not only possible to share your own Attribute with a peer, but you can also request to read an Attribute from a peer. Consult the Read attribute from peer guide for this.

<!--- TODO: Insert link to scenario description "Read attribute from peer" --->
