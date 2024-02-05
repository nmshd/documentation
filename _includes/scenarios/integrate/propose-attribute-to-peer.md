An Identity may have received information about a peer in the past that it needs to process a transaction at a later time. To ensure the accuracy of the available information, the Identity can propose [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) to the peer for creation. Depending on whether the peer confirms the fittingness of a proposed Attribute, it can agree to its creation or correct the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) beforehand. Proposing Attributes to a peer can be useful in these and many other situations, such as:

- An organization supports an Identity in setting up an enmeshed account by proposing Attributes to it that was derived from the organization's knowledge about the Identity.
- A company wants to make sure that the currently stored street address of a customer is valid before using it to ship an item to the customer.
- A company proposes subscribing to its newsletter to one of its customers.

We will now explain how a Connector, hereinafter referred to as the Sender, can propose an Attribute to another Connector, the so-called Recipient. Since understanding this proposing process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}) before continuing reading this guide.

Please note that the general procedure is the same if the Connector wants to propose an Attribute to an App user instead of another Connector. For reasons of clarity, this guide focuses on the proposing process with two Connectors.
{: .notice--info}

## Request for proposing Attributes

The Sender wants to propose an Attribute to the Recipient. To do this, the Sender must first create a suitable Request, which it can then send to the Recipient. In the following subsections, we describe the general appearance of a Request for proposing Attributes.

### Role of ProposeAttributeRequestItem

To propose a single Attribute to the Recipient, a single RequestItem of type [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) must be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). It is possible to propose an IdentityAttribute or a RelationshipAttribute, which must be inserted into the `attribute` property of the ProposeAttributeRequestItem. As it only makes sense for the Sender to propose an Attribute to the Recipient which is owned by the Recipient, the Sender must specify an empty string as the value for the `owner` property of the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes). The Recipient automatically becomes the owner of the Attribute later on. As the Recipient may want to change the Attribute Value of the proposed Attribute, the Sender must formulate a `query` matching the `attribute`. If the Sender specifies an `attribute` and a `query` that are incompatible, an [error]({% link _docs_integrate/error-codes.md %}) with the code `error.runtime.requestDeserialization` is to be expected.

### Combinations and usage scenarios of ProposeAttributeRequestItem

The following table provides an overview of the possible kinds of Attributes that the Sender can propose to the Recipient using the ProposeAttributeRequestItem. It must be taken into account whether the Attribute is an IdentityAttribute or a RelationshipAttribute and that its owner must be the Recipient, which is why the Sender must always specify an empty string as the value for the `owner` property of the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) contained within the `attribute` property of the ProposeAttributeRequestItem.

| Attribute Type | Attribute Owner | Possible? | Automation      | Examples/Reason                                                                                                                                                                                                                                                                                                                                              |
| -------------- | --------------- | :-------: | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identity       | Sender          |     ✗     | `N/A`           | It makes no sense to propose own Attributes, use [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) instead.                                                                                                                                                                                           |
| Identity       | Recipient       |     ✓     | `USER_DECISION` | Company sends name and address to new customer during its onboarding process.                                                                                                                                                                                                                                                                                |
| Relationship   | Sender          |     ✗     | `N/A`           | It makes no sense to propose own Attributes, use [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) or [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem) instead.                                                                               |
| Relationship   | Recipient       |     ✓     | `USER_DECISION` | With this combination the **Sender asks the Recipient for the one-time permission** to write a RelationshipAttribute, which is owned by the Recipient, once **and** the **Sender proposes a value** which might make sense as a default.<br>Example: Company asks new customer to subscribe to the newsletter and proposes the subscription as default once. |

### Example of proposing an IdentityAttribute

In the case in which the Sender wants to propose an IdentityAttribute to the Recipient, it must use a [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) which contains the IdentityAttribute in its `attribute` property and a matching [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery) in its `query` property. This means that the specified value for the `valueType` property of the IdentityAttributeQuery must correspond to the Attribute Value type of the IdentityAttribute. The ProposeAttributeRequestItem must then be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for proposing Attributes. For example, the Sender wants to propose an IdentityAttribute of type [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) to the Recipient. The value of the `mustBeAccepted` property of the ProposeAttributeRequestItem is set to `true` in our example and the `<...>` notation is used as a placeholder for the actual data as usual.

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

Let's consider the case in which the Sender has established an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Recipient and the Sender wants to propose a RelationshipAttribute for this Relationship to the Recipient. Then the Sender needs to insert a corresponding [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem), which contains the RelationshipAttribute in its `attribute` property and a matching [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) in its `query` property, into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for proposing Attributes. In particular, it is necessary that the specified value for the `attributeCreationHints.valueType` property of the RelationshipAttributeQuery corresponds to the Attribute Value type of the RelationshipAttribute. For example, the Sender wants to propose a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of type [ProprietaryString]({% link _docs_integrate/attribute-values.md %}#proprietarystring) to the Recipient whose `confidentiality` is `"public"`, whereby the value of the `mustBeAccepted` property of the associated ProposeAttributeRequestItem is set to `true`.

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

The Sender that wants to propose an Attribute to the Recipient may or may not already have a Relationship with the Recipient. Depending on which is the case, a different method can be used to send the [Request for proposing Attributes]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-for-proposing-attributes). There are two ways to send the Request for proposing Attributes created by the Sender to the Recipient.

### Request over Template

If there is currently no Relationship between the Sender and the Recipient, this approach must be used. However, it is also possible for the Sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the Recipient if there is already an active Relationship between them. All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.

### Request over Message

The Sender only has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between them. All information on how to send and receive a Request via a Message can be found in the [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) guide.

## Accept the Request and deal with the proposed Attributes

After the Recipient has received the [Request for proposing Attributes]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-for-proposing-attributes), it can accept it to create all or some of the Attributes that were proposed for creation by the Sender. The Recipient also has the option of overwriting the Attribute Values beforehand or sending existing Attributes back to the Sender instead of creating new ones. To accept the Request, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request). Also, you need to decide and specify for each ProposeAttributeRequestItem and RequestItemGroup contained in the Request for proposing Attributes whether you want to accept or reject it.

If the Recipient does not want to deal with any of the Attributes proposed by the Sender and, therefore, does not want to accept the Request for proposing Attributes of the Sender, it can reject it as a whole as well. For that, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/25159913-8e8c-4f65-98eb-f2522b8248a6" id="zk3XNeKG5NpM"></iframe></div>

### Accept a ProposeAttributeRequestItem

The Recipient can accept a ProposeAttributeRequestItem contained in the Request for proposing Attributes using an appropriate [AcceptProposeAttributeRequestItemParameter]({% link _docs_integrate/data-model-overview.md %}#acceptproposeattributerequestitemparameters). Depending on whether the Recipient confirms the fittingness of the associated proposed Attribute, it can agree to its creation and send it back to the Sender unchanged or correct the Attribute Value beforehand. To do this, the Recipient needs to specify the proposed Attribute or an Attribute that differs from the proposed Attribute only by the Attribute Value as the value for the `attribute` parameter of the AcceptProposeAttributeRequestItemParameters. If the Recipient does not want to create a new Attribute, it can alternatively send an existing Attribute back to the Sender. The `attributeId` parameter of the AcceptProposeAttributeRequestItemParameters must be used for that. The existing Attribute may only differ from the proposed Attribute by the Attribute Value. The acceptance of a ProposeAttributeRequestItem leads to the creation of a corresponding [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) contained within its `shareInfo` property. The `content` of the LocalAttribute is the Attribute that the Recipient wants to send back to the Sender. Depending on whether the Recipient confirms the fittingness of the proposed Attribute, it is therefore the proposed Attribute itself or a corrected version of it. Based on this LocalAttribute, an appropriate AcceptResponseItem of type [ProposeAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributeacceptresponseitem) is generated, which incorporates the `id` of the LocalAttribute with the LocalAttributeShareInfo in its `attributeId` property and the Attribute that the Recipient wants to send back to the Sender in its `attribute` property. This ProposeAttributeAcceptResponseItem will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for proposing Attributes that will be transferred to the Sender. If a new IdentityAttribute is to be created and sent back to the Sender, a corresponding LocalAttribute without a LocalAttributeShareInfo is additionally created for the Recipient beforehand.

It is noticeable that accepting a ProposeAttributeRequestItem essentially works in the same way as accepting a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem). Both types of RequestItems are used when an Identity needs information from a peer. The difference between the two RequestItems is that when using the ProposeAttributeRequestItem, the Identity not only asks for an Attribute of a certain Attribute Value Type, but also proposes a specific Attribute to the peer for creation that might be suitable. The ProposeAttributeRequestItem can therefore also be understood as a combination of the ReadAttributeRequestItem and the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem). To gain a deeper understanding of these connections, take a look at the [Read Attribute from peer]({% link _docs_integrate/read-attribute-from-peer.md %}) guide and the [Create Attribute for peer]({% link _docs_integrate/create-attribute-for-peer.md %}) guide.
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
      "mustBeAccepted": true,
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

In our example, the Sender only requires the Recipient to accept the ProposeAttributeRequestItems belonging to the PersonName and the EMailAddress, which is why the individual [ProposeAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) and the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) within the Request have specified corresponding values in their `mustBeAccepted` property. We assume that the Recipient wants to accept the Request and all its ProposeAttributeRequestItems with the exception of the PhoneNumber.

If the Recipient wants to accept the Request for proposing Attributes, it must accept all ProposeAttributeRequestItems for which the `mustBeAccepted` property is set to `true`. It is therefore not permitted for the Recipient to refuse to accept the ProposeAttributeRequestItem belonging to the PersonName or the EMailAddress.
{: .notice--info}

We assume that the Recipient confirms the fittingness of the PersonName proposed by the Sender and that the Sender has proposed an outdated EMailAddress to the Recipient for creation. The Recipient therefore wants to create a corrected version of the EMailAddress and send it back to the Sender. The Recipient accepts at least one ProposeAttributeRequestItem of the RequestItemGroup, rejects the PhoneNumber and accepts the ProposeAttributeRequestItems belonging to the PersonName and the EMailAddress. Consequently, it responds to the Request for proposing Attributes as follows:

```jsonc
{
  "items": [
    {
      // Accept the creation of the proposed PersonName
      "accept": true,
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "",
        "value": {
          "@type": "PersonName",
          "givenName": "<given name that the Sender proposes to the Recipient>",
          "surname": "<surname that the Sender proposes to the Recipient>"
        }
      }
    },
    {
      // Accept RequestItemGroup
      "accept": true,
      "items": [
        {
          // Create a corrected version of the proposed EMailAddress
          "accept": true,
          "attribute": {
            "@type": "IdentityAttribute",
            "owner": "",
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

Note that it is important to respond to RequestItems and RequestItemGroups in the same order in which they were received.

## Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for proposing Attributes]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-for-proposing-attributes) of the Sender. In order for the Sender to receive the Response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/f3818539-0050-42a4-a343-fb410d4134fc" id="bzlYC7NrKA9y"></iframe></div>

To view the Response to the Request, search for it in the synchronization result or proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a Template]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-over-template): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/propose-attribute-to-peer.md %}#request-over-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the Response of the Recipient from the `response.content` property of the result. In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is a [ProposeAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributeacceptresponseitem) for each accepted ProposeAttributeRequestItem and a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected ProposeAttributeRequestItem included. Note that each accepted ProposeAttributeRequestItem leads to the creation of an appropriate LocalAttribute with a LocalAttributeShareInfo of the Sender. The `content` of the [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) is the Attribute that the Recipient has sent back to the Sender. Depending on whether the Recipient has confirmed the fittingness of the Attribute proposed by the Sender, it is therefore the proposed Attribute itself or a corrected version of it.

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response. If the Request for proposing Attributes contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's next?

An Identity has several options for requesting an Attribute creation. This guide covers how an Identity can request the creation of an Attribute for a peer so that the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is proposed by the Identity, but can be modified by the peer when accepting the Request. In some cases, it makes more sense if the peer cannot change the proposed Attribute Value. For that, take a look at the [Create Attribute for peer]({% link _docs_integrate/create-attribute-for-peer.md %}) guide.
