---
# Start automatic generation
permalink: integrate/propose-attributes-to-peer
redirect_from:
  - /integrate/propose-attribute-to-peer
published: true
title: "Propose Attributes to peer"
type: scenario
toc: true
properties:
  - id: SC066
  - category: Manage Attributes
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: CHANGES REQUIRED
  - documentation status: DONE
  - published: true
  - link: propose-attributes-to-peer
require:
required_by:
# End automatic generation
---

An Identity may have received information about a peer in the past that it needs to process a transaction at a later time. To ensure the accuracy of the available information, the Identity can propose [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) to the peer for creation. Depending on whether the peer confirms the fittingness of a proposed Attribute, it can agree to its creation or correct the [Attribute value]({% link _docs_integrate/attribute-values.md %}) beforehand. Proposing Attributes to a peer can be useful in these and many other situations, such as:

- An organization supports an Identity in setting up an enmeshed account by proposing Attributes to it that was derived from the organization's knowledge about the Identity.
- A company wants to make sure that the currently stored street address of a customer is valid before using it to ship an item to the customer.

We will now explain how a Connector, hereinafter referred to as the Sender, can propose an Attribute to another Connector, the so-called Recipient. Since understanding this proposing process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}) before continuing reading this guide.

Please note that the general procedure is the same if the Connector wants to propose an Attribute to an App user instead of another Connector. For reasons of clarity, this guide focuses on the proposing process with two Connectors.
{: .notice--info}

## Request for proposing Attributes

The Sender wants to propose an Attribute to the Recipient. To do this, the Sender must first create a suitable Request, which it can then send to the Recipient. In the following subsections, we describe the general appearance of a Request for proposing Attributes.

### Role of ProposeAttributeRequestItem

To propose a single Attribute to the Recipient, a single RequestItem of type [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) must be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). It is possible to propose an IdentityAttribute or a RelationshipAttribute, which must be inserted into the `attribute` property of the ProposeAttributeRequestItem. As it only makes sense for the Sender to propose an Attribute to the Recipient which is owned by the Recipient, the Sender must specify an empty string as the value for the `owner` property of the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes). The Recipient automatically becomes the owner of the Attribute later on. As the Recipient may want to change the Attribute value of the proposed Attribute, the Sender must formulate a `query` matching the `attribute`. If the Sender specifies an `attribute` and a `query` that are incompatible, an [error]({% link _docs_integrate/error-codes.md %}) with the code `error.runtime.requestDeserialization` or with the code `error.consumption.requests.attributeQueryMismatch` is to be expected.

### Combinations and usage scenarios of ProposeAttributeRequestItem

The following table provides an overview of the possible kinds of Attributes that the Sender can propose to the Recipient using the ProposeAttributeRequestItem. It must be taken into account whether the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) is an IdentityAttribute or a RelationshipAttribute and that its `owner` must be the Recipient, which is why the Sender must always specify an empty string as the value for the `owner` property of the Attribute contained within the `attribute` property of the ProposeAttributeRequestItem. If a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) is used as the `query` of the ProposeAttributeRequestItem, an empty string must also be specified as the value for its `owner` property. A ProposeAttributeRequestItem can only be used to propose the creation of RelationshipAttributes that exist in the context of the Relationship between the Sender and the Recipient.

| Type and context                                                                                          | Owner     | Possible? | Automation      | Remarks, reasons and examples                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------- | --------- | :-------: | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IdentityAttribute                                                                                         | Sender    |     ✗     | `N/A`           | It makes no sense for the Sender to propose IdentityAttributes to the Recipient that are owned by itself. Using the [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) is appropriate instead. For more details, the [Share Attributes with peer]({% link _docs_integrate/share-attributes-with-peer.md %}) scenario documentation can be consulted.                                                                                                                                                                                                                               |
| IdentityAttribute                                                                                         | Recipient |     ✓     | `USER_DECISION` | Example: A company sends the name and the address of a new customer to them during their onboarding process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| RelationshipAttribute that exists in the context of the Relationship between the Sender and the Recipient | Sender    |     ✗     | `N/A`           | It makes no sense for the Sender to propose RelationshipAttributes to the Recipient that are owned by itself. Instead, it is appropriate to proceed as described in the documentation of the [Create Attributes for peer]({% link _docs_integrate/create-attributes-for-peer.md %}) or [Read Attributes from peer]({% link _docs_integrate/read-attributes-from-peer.md %}) scenario and use the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) or the [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem), respectively. |
| RelationshipAttribute that exists in the context of the Relationship between the Sender and the Recipient | Recipient |     ✓     | `USER_DECISION` | With this combination, the Sender gives the Recipient the **one-time permission to create a RelationshipAttribute**, which is owned by the Recipient, with the Sender **proposing a value** for it as default option that might make sense.                                                                                                                                                                                                                                                                                                                                                                                              |

### Example of proposing an IdentityAttribute

In the case in which the Sender wants to propose an IdentityAttribute to the Recipient, it must use a [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) which contains the IdentityAttribute in its `attribute` property and a matching [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery) in its `query` property. This means that the specified value for the `valueType` property of the IdentityAttributeQuery must correspond to the Attribute value type of the IdentityAttribute. The ProposeAttributeRequestItem must then be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for proposing Attributes. For example, the Sender wants to propose an IdentityAttribute of type [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) to the Recipient. The value of the `mustBeAccepted` property of the ProposeAttributeRequestItem is set to `true` in our example and the `<...>` notation is used as a placeholder for the actual data as usual.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ProposeAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "",
        "value": {
          "@type": "EMailAddress",
          "value": "<email address that the Sender proposes to the Recipient>"
        }
      },
      "query": {
        "@type": "IdentityAttributeQuery",
        "valueType": "EMailAddress"
      }
    }
  ]
}
```

It is also possible to use an appropriate [IQLQuery]({% link _docs_integrate/data-model-overview.md %}#iqlquery) instead of an IdentityAttributeQuery as the `query` when proposing an IdentityAttribute with a [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem).

### Example of proposing a RelationshipAttribute

Let's consider the case in which the Sender has established an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Recipient and the Sender wants to propose a RelationshipAttribute for this Relationship to the Recipient. Then the Sender needs to insert a corresponding [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem), which contains the RelationshipAttribute in its `attribute` property and a matching [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) in its `query` property, into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for proposing Attributes. In particular, it is necessary that the specified value for the `attributeCreationHints.valueType` property of the RelationshipAttributeQuery corresponds to the Attribute value type of the RelationshipAttribute. For example, the Sender wants to propose a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of type [ProprietaryString]({% link _docs_integrate/attribute-values.md %}#proprietarystring) to the Recipient whose `confidentiality` is `"public"`, whereby the value of the `mustBeAccepted` property of the associated ProposeAttributeRequestItem is set to `true`.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ProposeAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "RelationshipAttribute",
        "owner": "",
        "key": "<key of RelationshipAttribute>",
        "confidentiality": "public",
        "value": {
          "@type": "ProprietaryString",
          "title": "<title of RelationshipAttribute>",
          "value": "<actual value of RelationshipAttribute that the Sender proposes to the Recipient>"
        }
      },
      "query": {
        "@type": "RelationshipAttributeQuery",
        "key": "<key of RelationshipAttribute>",
        "owner": "",
        "attributeCreationHints": {
          "title": "<title of RelationshipAttribute>",
          "valueType": "ProprietaryString",
          "confidentiality": "public"
        }
      }
    }
  ]
}
```

### Propose multiple Attributes

Proposing Attributes to a peer is not limited to just a single Attribute, but it is possible to propose multiple Attributes to a peer at the same time. For this purpose, several ProposeAttributeRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for proposing Attributes. If you want to use a RequestItemGroup in order to propose multiple Attributes to the Recipient at the same time, you must insert corresponding ProposeAttributeRequestItems into the `items` property of it.

## Send and receive the Request

The Sender that wants to propose an Attribute to the Recipient may or may not already have a Relationship with the Recipient. Depending on which is the case, a different method can be used to send the [Request for proposing Attributes]({% link _docs_integrate/propose-attributes-to-peer.md %}#request-for-proposing-attributes). There are two ways to send the Request for proposing Attributes created by the Sender to the Recipient.

### Request via RelationshipTemplate

If there is currently no Relationship between the Sender and the Recipient, this approach must be used. However, it is also possible for the Sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the Recipient if there is already an active Relationship between them. All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) guide.

### Request via Message

The Sender only has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between them. All information on how to send and receive a Request via a Message can be found in the [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) guide.

## Accept the Request and deal with the proposed Attributes

After the Recipient has received the [Request for proposing Attributes]({% link _docs_integrate/propose-attributes-to-peer.md %}#request-for-proposing-attributes), it can accept it to create all or some of the Attributes that were proposed for creation by the Sender. The Recipient also has the option of overwriting the Attribute values beforehand or sending existing Attributes back to the Sender instead of creating new ones. To accept the Request, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request). Also, you need to decide and specify for each ProposeAttributeRequestItem contained in the Request for proposing Attributes whether you want to accept or reject it.

If the Recipient does not want to deal with any of the Attributes proposed by the Sender and, therefore, does not want to accept the Request for proposing Attributes of the Sender, it can reject it as a whole as well. For that, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

<div style="width: 640px; height: 720px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:720px" src="https://lucid.app/documents/embedded/29d3e823-243d-461d-adc5-bf7a0c9dc9cd" id="wXPVli~HoyKf"></iframe></div>

### Accept a ProposeAttributeRequestItem

Using appropriate [AcceptProposeAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptproposeattributerequestitemparameters), the Recipient can accept a ProposeAttributeRequestItem contained in the Request for proposing Attributes.
Depending on whether the Recipient confirms the fittingness of the associated proposed Attribute, it can agree to its creation and send it back to the Sender unchanged or correct the Attribute Value beforehand.
To do this, the Recipient needs to specify the proposed Attribute or an Attribute that differs from the proposed Attribute only by the Attribute value as the value for the `attribute` parameter of the AcceptProposeAttributeRequestItemParameters.
If the Recipient does not want to create a new Attribute, it can alternatively send an existing Attribute back to the Sender.
The `attributeId` parameter of the AcceptProposeAttributeRequestItemParameters must be used for that.
The existing Attribute may only differ from the proposed Attribute by its Attribute value.
As it makes no sense for the Sender to request a RelationshipAttribute from the Recipient that already exists in the context of their Relationship to each other, a RelationshipAttributeQuery that is potentially specified in the `query` property of the ProposeAttributeRequestItem can only be validly answered by the Recipient with a new Attribute.

Otherwise, the [error code]({% link _docs_integrate/error-codes.md %}) `error.consumption.requests.invalidAcceptParameters` arises. Furthermore, an error with the code `error.consumption.requests.attributeQueryMismatch` will be thrown if the Attribute provided by the Recipient does not match the [AttributeQuery]({% link _docs_integrate/data-model-overview.md %}#attributequeries) specified in the `query` property of the ProposeAttributeRequestItem.
{: .notice--info}

Accepting a ProposeAttributeRequestItem with a new Attribute or an existing, that isn’t shared with the Sender already neither itself nor any of its predecessing versions, leads to the creation of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) contained within its `shareInfo` property.
The `content` of the LocalAttribute is the Attribute that the Recipient wants to send back to the Sender, that is, the proposed Attribute itself or a corrected version of it.
Depending on whether the Recipient sends back an IdentityAttribute or a RelationshipAttribute, it is referred to as either an [own shared IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#own-shared-and-peer-shared-identityattributes) or an [own shared RelationshipAttribute]({% link _docs_integrate/attribute-introduction.md %}#own-shared-and-peer-shared-relationshipattributes).
An appropriate AcceptResponseItem of type [ProposeAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributeacceptresponseitem) is generated, which incorporates the `id` of the LocalAttribute in its `attributeId` property and the Attribute that the Recipient wants to send back to the Sender in its `attribute` property.
If a new IdentityAttribute is to be created and sent back to the Sender, a [RepositoryAttribute]({% link _docs_integrate/attribute-introduction.md %}#repositoryattributes) will additionally be created for the Recipient beforehand.

If the ProposeAttributeRequestItem is accepted with an existing Attribute that the Recipient already shared with the Sender and the corresponding [own shared IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#own-shared-and-peer-shared-identityattributes) does not have `"DeletedByPeer"` or `"ToBeDeletedByPeer"` as `deletionInfo.deletionStatus`, an [AttributeAlreadySharedAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#attributealreadysharedacceptresponseitem) will be generated.
Instead of creating a further pair consisting of an [own shared and a peer shared IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#own-shared-and-peer-shared-identityattributes), the `id` of the already existing [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) is returned.
Note that the `id` of the LocalAttribute of the Sender matches the `id` of the corresponding LocalAttribute of the Recipient.

Lastly, if the ProposeAttributeRequestItem is accepted with an existing Attribute of which the Recipient already shared a predecessor with the Sender, an [AttributeSuccessionAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#attributesuccessionacceptresponseitem) will be generated, given that it is an [own shared IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#own-shared-and-peer-shared-identityattributes) that does not have `"DeletedByPeer"` or `"ToBeDeletedByPeer"` as `deletionInfo.deletionStatus`.
Instead of creating an independent pair consisting of an [own shared and a peer shared IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#own-shared-and-peer-shared-identityattributes), internally an [Attribute succession]({% link _docs_integrate/update-attributes-by-succession.md %}) is performed.
The `id` of the already existing [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) predecessor is returned, as well as the `id` and `content` of the newly created LocalAttribute successor.

In any case, the respective AcceptResponseItem will be included in the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for proposing Attributes that will be transferred to the Sender.

It is noticeable that accepting a ProposeAttributeRequestItem essentially works in the same way as accepting a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem). Both types of RequestItems are used when an Identity needs information from a peer. The difference between the two RequestItems is that when using the ProposeAttributeRequestItem, the Identity not only asks for an Attribute of a certain Attribute value type, but also proposes a specific Attribute to the peer for creation that might be suitable. The ProposeAttributeRequestItem can therefore also be understood as a combination of the ReadAttributeRequestItem and the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem). To gain a deeper understanding of these connections, take a look at the [Read Attributes from peer]({% link _docs_integrate/read-attributes-from-peer.md %}) guide and the [Create Attributes for peer]({% link _docs_integrate/create-attributes-for-peer.md %}) guide.
{: .notice--info}

### Reject a ProposeAttributeRequestItem

Even if the Recipient accepts the Request for proposing Attributes as a whole, it may decide not to accept all of the [ProposeAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) it contains. To be more precise, the Recipient has the option of rejecting ProposeAttributeRequestItems that have the value `false` specified in their `mustBeAccepted` property. To reject a ProposeAttributeRequestItem, use the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters). The rejection of a ProposeAttributeRequestItem leads to the creation of a corresponding ResponseItem of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem). This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for proposing Attributes.

### Example of accepting a RequestItemGroup

Let's look at an example where the Sender proposes the Recipient's [PersonName]({% link _docs_integrate/attribute-values.md %}#personname) and contact information in the form of an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) and a [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber) to the Recipient during its onboarding process. For this purpose, the Sender creates a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for proposing Attributes, which contains a ProposeAttributeRequestItem belonging to the PersonName and a RequestItemGroup belonging to the contact information in its `items` property. The [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) itself includes two ProposeAttributeRequestItems in its `items` property, namely one for the EMailAddress and one for the PhoneNumber.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ProposeAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "",
        "value": {
          "@type": "PersonName",
          "givenName": "<given name that the Sender proposes to the Recipient>",
          "surname": "<surname that the Sender proposes to the Recipient>"
        }
      },
      "query": {
        "@type": "IdentityAttributeQuery",
        "valueType": "PersonName"
      }
    },
    {
      "@type": "RequestItemGroup",
      "items": [
        {
          "@type": "ProposeAttributeRequestItem",
          "mustBeAccepted": true,
          "attribute": {
            "@type": "IdentityAttribute",
            "owner": "",
            "value": {
              "@type": "EMailAddress",
              "value": "<email address that the Sender proposes to the Recipient>"
            }
          },
          "query": {
            "@type": "IdentityAttributeQuery",
            "valueType": "EMailAddress"
          }
        },
        {
          "@type": "ProposeAttributeRequestItem",
          "mustBeAccepted": false,
          "attribute": {
            "@type": "IdentityAttribute",
            "owner": "",
            "value": {
              "@type": "PhoneNumber",
              "value": "<phone number that the Sender proposes to the Recipient>"
            }
          },
          "query": {
            "@type": "IdentityAttributeQuery",
            "valueType": "PhoneNumber"
          }
        }
      ]
    }
  ]
}
```

In our example, the Sender only requires the Recipient to accept the ProposeAttributeRequestItems belonging to the PersonName and the EMailAddress, which is why the individual [ProposeAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) within the Request have specified corresponding values in their `mustBeAccepted` property. We assume that the Recipient wants to accept the Request and all its ProposeAttributeRequestItems with the exception of the PhoneNumber.

If the Recipient wants to accept the Request for proposing Attributes, it must accept all ProposeAttributeRequestItems for which the `mustBeAccepted` property is set to `true`. It is therefore not permitted for the Recipient to refuse to accept the ProposeAttributeRequestItem belonging to the PersonName or the EMailAddress.
{: .notice--info}

We assume that the Recipient confirms the fittingness of the PersonName proposed by the Sender and that the Sender has proposed an outdated EMailAddress to the Recipient for creation. The Recipient therefore wants to create a corrected version of the EMailAddress and send it back to the Sender. The Recipient rejects the PhoneNumber and accepts the ProposeAttributeRequestItems belonging to the PersonName and the EMailAddress. Consequently, it responds to the Request for proposing Attributes as follows:

```jsonc
{
  "items": [
    {
      // Accept the creation of the proposed PersonName
      "accept": true,
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "<address of Recipient>",
        "value": {
          "@type": "PersonName",
          "givenName": "<given name that the Sender proposes to the Recipient>",
          "surname": "<surname that the Sender proposes to the Recipient>"
        }
      }
    },
    {
      "items": [
        {
          // Create a corrected version of the proposed EMailAddress
          "accept": true,
          "attribute": {
            "@type": "IdentityAttribute",
            "owner": "<address of Recipient>",
            "value": {
              "@type": "EMailAddress",
              "value": "<Recipient's corrected version of the email address>"
            }
          }
        },
        {
          // Reject PhoneNumber
          "accept": false
        }
      ]
    }
  ]
}
```

Note that it is important to respond to RequestItems, some of which may be contained in a RequestItemGroup, in the same order in which they were received.

## Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for proposing Attributes]({% link _docs_integrate/propose-attributes-to-peer.md %}#request-for-proposing-attributes) of the Sender. In order for the Sender to receive the Response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/91eaacd7-42db-48f9-80fc-72352d47dfc5" id="_XPVA7pau0KH"></iframe></div>
s
To view the Response to the Request, proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a RelationshipTemplate]({% link _docs_integrate/propose-attributes-to-peer.md %}#request-via-relationshiptemplate): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/propose-attributes-to-peer.md %}#request-via-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the Response of the Recipient from the `response.content` property of the result.
In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is a [ProposeAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributeacceptresponseitem), an [AttributeAlreadySharedAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#attributealreadysharedacceptresponseitem) or an [AttributeSuccessionAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#attributesuccessionacceptresponseitem) for each accepted and a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected ProposeAttributeRequestItem included.
Internally, a returned `attribute` that can be read from a ProposeAttributeAcceptResponseItem is used to create an appropriate LocalAttribute with a LocalAttributeShareInfo of the Sender.
Depending on whether the Recipient has sent back an IdentityAttribute or a RelationshipAttribute to the Sender, it is referred to as either a [peer shared IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#own-shared-and-peer-shared-identityattributes) or a [peer shared RelationshipAttribute]({% link _docs_integrate/attribute-introduction.md %}#own-shared-and-peer-shared-relationshipattributes).
The `content` of the LocalAttribute is the Attribute that the Recipient has sent back to the Sender.
Depending on whether the Recipient has confirmed the fittingness of the Attribute proposed by the Sender, it is therefore the proposed Attribute itself or a corrected version of it.
When receiving an AttributeSuccessionAcceptResponseItem, the according [Attribute succession]({% link _docs_integrate/update-attributes-by-succession.md %}) is automatically performed.

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response. If the Request for proposing Attributes contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's next?

An Identity has several options for requesting an Attribute creation. This guide covers how an Identity can request the creation of an Attribute for a peer so that the [Attribute value]({% link _docs_integrate/attribute-values.md %}) is proposed by the Identity, but can be modified by the peer when accepting the Request. In some cases, it makes more sense if the peer cannot change the proposed Attribute value. For that, take a look at the [Create Attributes for peer]({% link _docs_integrate/create-attributes-for-peer.md %}) guide.
