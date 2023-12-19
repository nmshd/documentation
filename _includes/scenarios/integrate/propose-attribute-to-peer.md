An Identity may have received information about a peer in the past that it needs to process a transaction at a later time. To ensure the accuracy of the available information, the Identity can propose [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) to the peer for creation. Depending on whether the peer confirms the validity of a proposed Attribute, it can agree to its creation or correct the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) beforehand. Proposing Attributes to a peer can be useful in many situations, such as:

- A company wants to make sure that the currently stored street address of a customer is valid before using it to ship an item to the customer.
- An organization supports an Identity in setting up an enmeshed account by proposing Attributes to it that are derived from the organization's knowledge about the Identity.

We will now explain how a Connector, hereinafter referred to as the Sender, can propose an Attribute to another Connector, the so-called Recipient. Since understanding this proposing process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our Request and Response introduction before continuing reading this guide.

<!--- TODO: Insert Link to "Request and Response introduction" guide --->

Please note that the general procedure is the same if the Connector wants to propose an Attribute to an App user instead of another Connector. For reasons of clarity, this guide focuses on the proposing process with two Connectors.
{: .notice--info}

## Request for proposing Attributes

The Sender wants to propose an Attribute to the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. In the following subsections, we describe the general appearance of a Request for proposing Attributes.

### Description of ProposeAttributeRequestItem

To propose a single Attribute to the Recipient, a single [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ProposeAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem) must be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). If the `<...>` notation is used as a placeholder for the actual data as usual, this looks as follows:

| Property                | Value                                                                                                                                                                                                                                                                                                                                                                                               | Required |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| `@type`                 | `"ProposeAttributeRequestItem"`                                                                                                                                                                                                                                                                                                                                                                     |    ✓     |
| `title`                 | `"<title of ProposeAttributeRequestItem>"`                                                                                                                                                                                                                                                                                                                                                          |    ✗     |
| `description`           | `"<description of ProposeAttributeRequestItem>"`                                                                                                                                                                                                                                                                                                                                                    |    ✗     |
| `mustBeAccepted`        | `true` or `false`, depending on whether this ProposeAttributeRequestItem must be accepted by the Recipient                                                                                                                                                                                                                                                                                          |    ✓     |
| `requireManualDecision` | `true` or `false`, depending on whether the Recipient must make a manual decision about accepting or rejecting this ProposeAttributeRequestItem                                                                                                                                                                                                                                                     |    ✗     |
| `metadata`              | `<custom metadata sent together with ProposeAttributeRequestItem>`                                                                                                                                                                                                                                                                                                                                  |    ✗     |
| `attribute`             | [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that the Sender proposes to the Recipient for creation, using an empty string as the value for the `owner` property of the Attribute                                                                   |    ✓     |
| `query`                 | An appropriate [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery), [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) that matches the proposed Attribute |    ✓     |

It is possible to propose an IdentityAttribute or a RelationshipAttribute for creation, which must be inserted into the `attribute` property of the ProposeAttributeRequestItem. As it only makes sense for the Sender to propose an Attribute to the Recipient which is owned by the Recipient, the Sender must specify an empty string as the value for the `owner` property of the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes). The Recipient automatically becomes the owner of the Attribute later on. As the Recipient may wants to change the Attribute Value of the proposed Attribute, the Sender must formulate a `query` matching the `attribute`. If the Sender specifies an `attribute` and a `query` that are incompatible, an [error]({% link _docs_integrate/error-codes.md %}) with the code `error.runtime.requestDeserialization` is to be expected.

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

After the Sender has sent the [Request for proposing Attributes]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-for-proposing-attributes) to the Recipient and the Recipient has received this Request, the Recipient can accept it to create all or some of the Attributes that were proposed for creation by the Sender. The Recipient also has the option of overwriting the Attribute Values beforehand. To accept the Request, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request). Also, you need to decide and specify for each ProposeAttributeRequestItem contained in the Request for proposing Attributes whether you want to accept or reject it.

If the Recipient does not want to deal with any of the Attributes proposed by the Sender and therefore does not want to accept the Request for proposing Attributes of the Sender, it can reject it as a whole as well. For that, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

--- TODO: Create and insert diagram ---

## What's next?

An Identity has several options for requesting an Attribute creation. This guide covers how an Identity can request the creation of an Attribute for a peer so that the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is proposed by the Identity, but can be modified by the peer when accepting the Request. In some cases, it makes more sense if the peer cannot change the proposed Attribute Value. For that, take a look at the Create Attribute for peer guide.

<!--- TODO: Insert Link to "Create Attribute for peer" guide --->

<!--- {% include warnings/documentation-is-prerelease %}

The connector would like to save an attribute for another identity and has 2 options for this.

The Create Attribute creates a request that the peer can accept and thus an attribute is created. To avoid errors, it is better to use the "Propose attribute" request for some attributes, so that the user has the option of customizing the attribute to be saved. --->
