There are many situations in which an Identity wants to create an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) for another Identity, for example:

- A university wants to send a graduate their degree certificate.
- A company wants to provide an employee with their business [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) at the start of their employment.

In this guide, we explain how a Connector, hereinafter referred to as the Sender, can create an Attribute for another Connector, the so-called Recipient. Since understanding this creation process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our Request and Response introduction before continuing reading this guide.

<!--- TODO: Insert Link to "Request and Response introduction" guide --->

There are several ways in which an Identity can create an Attribute for a peer. This guide covers how an Identity can request the creation of an Attribute for a peer so that the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is only set by the Identity itself and cannot be modified by the peer when accepting the [Request]({% link _docs_integrate/data-model-overview.md %}#request). If the peer should be able to adjust the Attribute offered for creation, the Propose attribute to peer guide must be consulted instead.
{: .notice--info}

<!--- TODO: Insert Link to "Propose attribute to peer" guide --->

## Request for creating Attributes

The Sender wants to create an Attribute for the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. We will now describe the general appearance of such a Request, using the `<...>` notation as a placeholder for the actual data as usual:

| Property      | Value                                                                                                                                                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | `"<title of Request>"`                                                                                                                                                                                                                                                       |
| `description` | `"<description of Request>"`                                                                                                                                                                                                                                                 |
| `expiresAt`   | `"<expiration date of Request>"`                                                                                                                                                                                                                                             |
| `metadata`    | `<custom metadata sent together with Request>`                                                                                                                                                                                                                               |
| `items`       | Array of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) and [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) that are part of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) |

To ensure that you have created an appropriate Request, you should always test your Request's Validity beforehand.
{: .notice--info}

<!--- TODO: Insert Link to guide "test your Request's Validity" --->

### Description of CreateAttributeRequestItem

For requesting the creation of a single Attribute for the Recipient, a single [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [CreateAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem) must be inserted into the `items` property of the [Request]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes). This looks as follows:

| Property                | Value                                                                                                                                                                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`                 | `"CreateAttributeRequestItem"`                                                                                                                                                                                                                 |
| `title`                 | `"<title of RequestItem>"`                                                                                                                                                                                                                     |
| `description`           | `"<description of RequestItem>"`                                                                                                                                                                                                               |
| `mustBeAccepted`        | `true` or `false`, depending on whether this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) must be accepted by the Recipient                                                                                    |
| `requireManualDecision` | `true` or `false`, depending on whether the Recipient must make a manual decision about accepting or rejecting this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem)                                               |
| `metadata`              | `<custom metadata sent together with RequestItem>`                                                                                                                                                                                             |
| `attribute`             | [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that the Sender wants to create for the Recipient |

It is possible to request the creation of an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), which must be inserted into the `attribute` property of the [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem). Depending on whether an IdentityAttribute or a RelationshipAttribute is to be created for the Recipient, the Sender has a different number of input options when defining the prospective `owner` of the Attribute. More details on the various input options when creating a [Request for creating an Attribute]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) and the corresponding application scenarios can be found in the description of the [Combinations and usage scenarios]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem-combinationsandusagescenarios) of the CreateAttributeRequestItem.

Please note that not all of the properties listed here have to be specified when creating a Request for creating Attributes. Some of the properties are optional and can therefore be omitted. Only values for the `items` property of the [Request]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) itself and for the properties `@type`, `mustBeAccepted` and `attribute` of the [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) must be specified.
{: .notice--info}

### Example for creating an IdentityAttribute

We assume that the Integrator of the Sender wants to create an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of type [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) for the Recipient:

<!--- TODO: Insert link to "Create own IdentityAttribute" guide --->

| Property      | Value                                                                 |
| ------------- | --------------------------------------------------------------------- |
| `@type`       | `"IdentityAttribute"`                                                 |
| `owner`       | `"<Address of Recipient>"`                                            |
| `value.@type` | `"EMailAddress"`                                                      |
| `value.value` | `"<email address that the Sender wants to create for the Recipient>"` |

To request the creation of this IdentityAttribute for the Recipient, the Sender needs to insert it into the `attribute` property of the [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) contained within the `items` property of the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/db914817-6b8b-4119-8f5f-f15d48a7854c" id="XmLTn.emFtK~"></iframe></div>

### Example for creating a RelationshipAttribute

We now consider the case in which the Sender has an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Recipient and wants to create a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of type [ProprietaryString]({% link _docs_integrate/attribute-values.md %}#proprietarystring) for this Relationship, which is owned by the Recipient:

| Property          | Value                                                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@type`           | `"RelationshipAttribute"`                                                                                                                                                            |
| `owner`           | `"<Address of Recipient>"`                                                                                                                                                           |
| `key`             | `"<key of RelationshipAttribute>"`                                                                                                                                                   |
| `confidentiality` | Level of confidentiality the [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) should have (`"public"`, `"protected"` or `"private"`) |
| `value.@type`     | `"ProprietaryString"`                                                                                                                                                                |
| `value.title`     | `"<title of RelationshipAttribute>"`                                                                                                                                                 |
| `value.value`     | `"<actual value of RelationshipAttribute>"`                                                                                                                                          |

It would also be possible to specify the Address of the Sender as the value for the `owner` property if you want that the [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) is owned by the Sender instead of the Recipient.
{: .notice--info}

The Sender can request the creation of this RelationshipAttribute by inserting it into the `attribute` property of the [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) included in the `items` property of the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/e1b8cefc-6968-479b-9a1b-7d35088d753a" id="keMT2BRBKzrb"></iframe></div>

### Create multiple Attributes with a RequestItemGroup

It is not necessary to create just a single Attribute for a peer. Instead, it is also possible to request the creation of multiple Attributes at the same time. For this purpose, several [CreateAttributeRequestItems]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes). The general structure of a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) is as follows:

| Property         | Value                                                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`          | `"RequestItemGroup"`                                                                                                                                                  |
| `title`          | `"<title of RequestItemGroup>"`                                                                                                                                       |
| `description`    | `"<description of RequestItemGroup>"`                                                                                                                                 |
| `mustBeAccepted` | `true` or `false`, depending on whether this [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) must be accepted by the Recipient |
| `metadata`       | `<custom metadata sent together with RequestItemGroup>`                                                                                                               |
| `items`          | Array of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem)                                                                                |

So if you want to use a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in order to create multiple Attributes for the Recipient at the same time, you must insert corresponding [CreateAttributeRequestItems]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) into the `items` property of it. Note that the properties `title`, `description` and `metadata` are optional, so you can omit them.

## Send and receive the Request

The Sender that wants to create an Attribute for the Recipient may or may not already have a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Recipient. Depending on which is the case, a different method is more suitable for sending the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes):

- [Request over Template]({% link _docs_integrate/create-attribute-for-peer.md %}#request-over-template): If there is currently no Relationship between the Sender and the Recipient, you must use this approach.
- [Request over Message]({% link _docs_integrate/create-attribute-for-peer.md %}#request-over-message): This procedure is only permitted if there is already an active Relationship between the Sender and the Recipient.

In the following, we briefly describe the procedure of sending the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) created by the Sender to the Recipient separately in both cases.

### Request over Template

We first consider the situation in which there is no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the Sender and the Recipient yet. In order for the Sender to be able to create an Attribute for the Recipient, a Relationship must first be created between them.

For general information about establishing a Relationship between two Connectors, see the guides Prepare enmeshed onboarding package and Process received enmeshed onboarding package and create relationship.
{: .notice--info}

<!--- TODO: Insert links to guide "Prepare enmeshed onboarding package" and guide "Process received enmeshed onboarding package and create relationship" --->

To initiate the establishment of a Relationship between the Sender and the Recipient and at the same time send a Request for creating Attributes for the Recipient, the Sender can create an appropriate [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate). In particular, it is necessary for this purpose that a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) is used in the `content` property of the RelationshipTemplate and that the RelationshipTemplateContent contains the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) formulated above in its `onNewRelationship` property. Once the Sender has created such a RelationshipTemplate, the Recipient can load it onto itself. This causes the Recipient to receive the underlying [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) of the RelationshipTemplate as a new incoming Request. The Recipient can retrieve this Request and read its `id` from the result of the response:

| Property | Value               |
| -------- | ------------------- |
| `id`     | `"<ID of Request>"` |

{% include copy-notice description="Save the `id` of the Request so that you can refer to it in the next step." %}

All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.

It is also possible for the Sender to use a RelationshipTemplate to send a Request to the Recipient if there is already an active Relationship between them. To do this, proceed as just described, but insert the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) into the `onExistingRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent), which is contained in the `content` property of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
{: .notice--info}

### Request over Message

We will now look at the case in which a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) already exists between the Sender and the Recipient. In this case, the Sender has the option of sending a Request to the Recipient over a [Message]({% link _docs_integrate/data-model-overview.md %}#message). To do this, the Sender must first create an outgoing Request locally that is based on the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) described above. The Sender must then send a [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the Recipient that contains the created outgoing Request in its `content` property. After the Message is sent, the Recipient needs to synchronize the updates of the Backbone in order to receive the Message. This causes the Recipient to also receive the underlying [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) of the Message as a new incoming Request. The Recipient can retrieve this Request and read its `id` from the result of the response:

| Property | Value               |
| -------- | ------------------- |
| `id`     | `"<ID of Request>"` |

{% include copy-notice description="Save the `id` of the Request so that you can refer to it in the next step." %}

All details on how to send and receive a Request via a Message in general can be found in the [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) guide.

## Accept the Request and create the Attributes

After the Sender has sent the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) to the Recipient and the Recipient has received this Request, the Recipient can accept it to create all or some of the Attributes that were offered for creation by the Sender. To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the ID of the received Request. Also, you need to decide and specify for each [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) contained in the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) whether you want to accept or reject it.

If the Recipient does not want to create any of the Attributes offered by the Sender and therefore does not want to accept the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) of the Sender, it can reject it as a whole too. For that, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

In the next subsections, we will describe the process of accepting a [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes). The following diagram provides an overview of this process.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c2e1db15-8377-43bc-9ada-42623e5e938f" id="RROTOBMS1a-2"></iframe></div>

### Accept a CreateAttributeRequestItem

If the Recipient agrees to create one of the Attributes offered by the Sender, it can accept the associated [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) contained in the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes). The following [parameter]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem-response-parameters) must be used for this:

| Property | Value  |
| -------- | ------ |
| accept   | `true` |

The acception of a CreateAttributeRequestItem leads to the creation of a corresponding [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) contained within its `shareInfo` property. The `content` of the LocalAttribute is the underlying `attribute` of the CreateAttributeRequestItem. Based on this, an appropriate [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) of type [CreateAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem-response-itemproperties) is generated:

| Property      | Value                                                           |
| ------------- | --------------------------------------------------------------- |
| `@type`       | `"CreateAttributeAcceptResponseItem"`                           |
| `result`      | `"Accepted"`                                                    |
| `attributeId` | `"<ID of created LocalAttribute with LocalAttributeShareInfo>"` |

This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) that will be transferred to the Sender. If a new [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) is to be created, a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) without a LocalAttributeShareInfo is additionally created for the Recipient beforehand.

### Reject a CreateAttributeRequestItem

Even if the Recipient accepts the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) as a whole, it may decide not to accept all of the Attributes offered by the Sender. To be more precise, the Recipient has the option of rejecting [CreateAttributeRequestItems]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) that have the value `false` specified in their `mustBeAccepted` property. To reject a CreateAttributeRequestItem, use the [parameter]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem-response-parameters):

| Property | Value   |
| -------- | ------- |
| accept   | `false` |

The rejection of a CreateAttributeRequestItem leads to the creation of a corresponding [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem). This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes).

In addition to [AcceptResponseItems]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) and [RejectResponseItems]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem), [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) are one of the three forms of [ResponseItems]({% link _docs_integrate/data-model-overview.md %}#responseitem). These are never created manually, but can occur due to an error.
{: .notice--info}

### Example of accepting a RequestItemGroup

Let's look at an example where the Sender wants to create an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress), a [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) and a [BirthPlace]({% link _docs_integrate/attribute-values.md %}#birthplace) for the Recipient. For this purpose, the Sender creates a [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes), which contains a [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) belonging to the EMailAddress and a [RequestItemGroup]({% link _docs_integrate/create-attribute-for-peer.md %}#create-multiple-attributes-with-a-requestitemgroup) belonging to the birth information in its `items` property. The RequestItemGroup itself includes two CreateAttributeRequestItems in its `items` property, namely one for the BirthDate and one for the BirthPlace.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/cf9fca09-e5ef-4505-acd4-c31f1fa0e488" id="oPQTV0-AaDyp"></iframe></div>

In our example, the Sender only requires the Recipient to accept the EMailAddress and the BirthDate, which is why the individual [CreateAttributeRequestItems]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) and the [RequestItemGroup]({% link _docs_integrate/create-attribute-for-peer.md %}#create-multiple-attributes-with-a-requestitemgroup) within the Request have specified corresponding values in their `mustBeAccepted` property. We assume that the Recipient wants to accept the Request and all its CreateAttributeRequestItems with the exception of the BirthPlace.

If the Recipient wants to accept the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes), it must accept all [CreateAttributeRequestItems]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) for which the `mustBeAccepted` property is set to `true`. It is therefore not permitted for the Recipient to refuse to accept the EMailAddress or the BirthDate offered by the Sender.
{: .notice--info}

Because the Recipient accepts the EMailAddress of the Sender and also accepts at least one [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) of the [RequestItemGroup]({% link _docs_integrate/create-attribute-for-peer.md %}#create-multiple-attributes-with-a-requestitemgroup), it provides the following values for responding to the two components within the `items` property of the [Request]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes):

- Accept [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress):

  | Property | Value  |
  | -------- | ------ |
  | accept   | `true` |

- Accept [RequestItemGroup]({% link _docs_integrate/create-attribute-for-peer.md %}#create-multiple-attributes-with-a-requestitemgroup):

  | Property | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
  | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | accept   | `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
  | items    | Responses of the Recipient to the two [CreateAttributeRequestItems]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) belonging to the [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) and the [BirthPlace]({% link _docs_integrate/attribute-values.md %}#birthplace) contained in the [RequestItemGroup]({% link _docs_integrate/create-attribute-for-peer.md %}#create-multiple-attributes-with-a-requestitemgroup) |

Since the Recipient accepts the BirthDate and rejects the BirthPlace of the Sender, it responds to the two [CreateAttributeRequestItems]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) included in the `items` property of the already accepted [RequestItemGroup]({% link _docs_integrate/create-attribute-for-peer.md %}#create-multiple-attributes-with-a-requestitemgroup) as follows:

- Accept [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate):

  | Property | Value  |
  | -------- | ------ |
  | accept   | `true` |

- Accept [BirthPlace]({% link _docs_integrate/attribute-values.md %}#birthplace):

  | Property | Value   |
  | -------- | ------- |
  | accept   | `false` |

Note that it is important to respond to [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) and [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in the same order in which they were received.

## Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) of the Sender. In order for the Sender to receive the response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/49329630-b44c-4aa7-9e27-69f4d1d01aaa" id=".VPTa-Da-0ir"></iframe></div>

To view the response to the Request, search for it in the synchronization result or proceed as described in the [Get outgoing Request]({% link _docs_use-cases/use-case-consumption-get-outgoing-request.md %}) use case documentation and use the following query parameter:

- If the [Request was sent over a Template]({% link _docs_integrate/create-attribute-for-peer.md %}#request-over-template): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent over a Message]({% link _docs_integrate/create-attribute-for-peer.md %}#request-over-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the [Response]({% link _docs_integrate/data-model-overview.md %}#response) of the Recipient from the `response.content` property of the result. In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is an [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) of type [CreateAttributeAcceptResponseItem]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem-response-itemproperties) for each accepted CreateAttributeRequestItem and a [ResponseItem]({% link _docs_integrate/data-model-overview.md %}#responseitem) of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected CreateAttributeRequestItem included. Note that each accepted CreateAttributeRequestItem leads to the creation of an appropriate [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) of the Sender. The `content` of the LocalAttribute is the underlying `attribute` of the CreateAttributeRequestItem.

If the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) contains a [RequestItemGroup]({% link _docs_integrate/create-attribute-for-peer.md %}#create-multiple-attributes-with-a-requestitemgroup) in its `items` property, the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's next?

As already mentioned, this guide covers how an Identity can request the creation of an Attribute for a peer so that the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is only set by the Identity itself and cannot be modified by the peer when accepting the [Request]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes). In many cases, it makes more sense if the peer can adjust the Attribute that was offered for creation. For this, take a look at the Propose attribute to peer guide.

<!--- TODO: Insert link to scenario description "Propose attribute to peer" --->
