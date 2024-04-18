---
# Start automatic generation
permalink: integrate/create-attribute-for-peer
published: true
title: "Create Attribute for peer"
type: scenario
toc: true
properties:
  - id: SC067
  - category: Manage Attributes
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: CHANGES REQUIRED
  - documentation status: DONE
  - published: true
  - link: create-attribute-for-peer
require:
required_by:
# End automatic generation
---

There are many situations in which an Identity wants to create an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) for another Identity, for example:

- A university wants to send a graduate their degree certificate.
- A company wants to provide an employee with their business email address at the start of their employment.

We will now explain how a Connector, hereinafter referred to as the Sender, can create an Attribute for another Connector, the so-called Recipient. Since understanding this creation process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}) before continuing reading this guide.

Please note that the general procedure is the same if the Connector wants to create an Attribute for an App user instead of another Connector. For reasons of clarity, this guide focuses on the creation process with two Connectors.
{: .notice--info}

The Sender has several options for requesting an Attribute creation. This guide covers how it can request the creation of an Attribute for the Recipient so that the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is only set by the Sender itself and cannot be modified by the Recipient when accepting the Request.

If the Recipient should be able to adjust the Attribute offered for creation, the [Propose Attribute to peer]({% link _docs_integrate/propose-attribute-to-peer.md %}) guide must be consulted instead. Also, it is possible for the Sender to ask the Recipient for an Attribute of a specific Attribute Value Type without offering an Attribute by following the [Read Attribute from peer]({% link _docs_integrate/read-attribute-from-peer.md %}) guide. If the Recipient complies with this request by using the `newAttribute` parameter of the [AcceptReadAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptreadattributerequestitemparameters),
this leads to the creation of an Attribute of the Recipient whose Attribute Value was chosen completely freely by it.
{: .notice--info}

## Request for creating Attributes

The Sender wants to create an Attribute for the Recipient. To do this, the Sender must first create a suitable Request, which it can then send to the Recipient. In the following subsections, we describe the general appearance of a Request for creating Attributes.

### Role of CreateAttributeRequestItem

For requesting the creation of a single Attribute for the Recipient, a single RequestItem of type [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) must be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). It is possible to request the creation of an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), which must be inserted into the `attribute` property of the CreateAttributeRequestItem. Depending on whether an IdentityAttribute or a RelationshipAttribute is to be created for the Recipient, the Sender has a different number of input options when defining the prospective `owner` of the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes). More details on the various input options when creating a Request for creating Attributes and the corresponding application scenarios can be found in the table of the [Combinations and usage scenarios of the CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#combinations-and-usage-scenarios-of-createattributerequestitem).

### Combinations and usage scenarios of CreateAttributeRequestItem

The following table provides an overview of the possible kinds of Attributes that the Sender can create for the Recipient using the CreateAttributeRequestItem. It must be taken into account whether the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) is an IdentityAttribute or a RelationshipAttribute and which Identity is its `owner`.

| Attribute Type | Attribute Owner | Possible? | Automation      | Examples/Reason                                                                                                                                                                                                                                                          |
| -------------- | --------------- | :-------: | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identity       | Sender          |     ✗     | `N/A`           | Use [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) instead.                                                                                                                                                    |
| Identity       | Recipient       |     ✓     | `USER_DECISION` | University sends student their certificate (Propose would be inappropriate in this case, because the student should not be able to return their own value).                                                                                                              |
| Identity       | `<empty>`       |     ✓     | `USER_DECISION` | An empty owner defaults to an Attribute with `owner=<Recipient>`. This is needed for Requests inside of RelationshipTemplates, since you don’t know the enmeshed Address of your peer before the Relationship is established.                                            |
| Relationship   | Sender          |     ✓     | `AUTO_ACCEPT`   | Company sends new customer their customer number.                                                                                                                                                                                                                        |
| Relationship   | Recipient       |     ✓     | `USER_DECISION` | With this combination the **Sender asks the Recipient for the one-time permission** to write a RelationshipAttribute once **and** the **Sender defined a value** which can either be accepted and stored, or rejected. Thus, the user cannot change the value by itself. |
| Relationship   | `<empty>`       |     ✓     | `USER_DECISION` | An empty owner defaults to an Attribute with `owner=<Recipient>`. This is needed for Requests inside of RelationshipTemplates, since you don’t know the enmeshed Address of your peer before the Relationship is established.                                            |

### Example of creating an IdentityAttribute

We assume that the Integrator of the Sender wants to create an IdentityAttribute of type [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) for the Recipient. To request the creation of this IdentityAttribute for the Recipient, the Sender needs to insert it into the `attribute` property of the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) contained within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for creating Attributes. In our example, we have chosen to set the value of the `mustBeAccepted` property of the CreateAttributeRequestItem to `true`. Please note that the `<...>` notation is used as a placeholder for the actual data as usual.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "CreateAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "<Address of Recipient>",
        "value": {
          "@type": "EMailAddress",
          "value": "<email address that the Sender wants to create for the Recipient>"
        }
      }
    }
  ]
}
```

### Example of creating a RelationshipAttribute

We now consider the case in which the Sender has an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Recipient and wants to create a RelationshipAttribute of type [ProprietaryString]({% link _docs_integrate/attribute-values.md %}#proprietarystring) for this Relationship that is owned by the Recipient. The Sender can request the creation of this RelationshipAttribute by inserting it into the `attribute` property of the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) included in the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for creating Attributes. In our example, we have chosen to set the value of the `mustBeAccepted` property of the CreateAttributeRequestItem to true and the value of the `confidentiality` property of the RelationshipAttribute to `"public"`.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "CreateAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "RelationshipAttribute",
        "owner": "<Address of Recipient>",
        "key": "<key of RelationshipAttribute>",
        "confidentiality": "public",
        "value": {
          "@type": "ProprietaryString",
          "title": "<title of RelationshipAttribute>",
          "value": "<actual value of RelationshipAttribute>"
        }
      }
    }
  ]
}
```

It would also be possible to specify the Address of the Sender as the value for the `owner` property if you want the RelationshipAttribute to be owned by the Sender instead of the Recipient.
{: .notice--info}

### Create multiple Attributes

Requesting the creation of Attributes for a peer is not limited to just a single Attribute, but it is possible to request the creation of multiple Attributes at the same time. For this purpose, several CreateAttributeRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for creating Attributes. If you want to use a RequestItemGroup in order to create multiple Attributes for the Recipient at the same time, you must insert corresponding CreateAttributeRequestItems into the `items` property of it.

## Send and receive the Request

The Sender that wants to create an Attribute for the Recipient may or may not already have a Relationship with the Recipient. Depending on which is the case, a different method can be used to send the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes). There are two ways to send the Request for creating Attributes created by the Sender to the Recipient.

### Request over Template

If there is currently no Relationship between the Sender and the Recipient, this approach must be used. However, it is also possible for the Sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the Recipient if there is already an active Relationship between them. All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.

### Request over Message

The Sender only has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between them. All information on how to send and receive a Request via a Message can be found in the [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) guide.

## Accept the Request and create the Attributes

After the Recipient has received the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes), it can accept it to create all or some of the Attributes that were offered for creation by the Sender. To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request). Also, you need to decide and specify for each CreateAttributeRequestItem and RequestItemGroup contained in the Request for creating Attributes whether you want to accept or reject it.

If the Recipient does not want to create any of the Attributes offered by the Sender and, therefore, does not want to accept the Request for creating Attributes of the Sender, it can reject it as a whole as well. For that, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c2e1db15-8377-43bc-9ada-42623e5e938f" id="RROTOBMS1a-2"></iframe></div>

### Accept a CreateAttributeRequestItem

If the Recipient agrees to the creation of one of the Attributes offered by the Sender, it can accept the associated CreateAttributeRequestItem contained in the Request for creating Attributes. The [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) must be used for that. The acceptance of a CreateAttributeRequestItem leads to the creation of a corresponding [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) contained within its `shareInfo` property. The `content` of the LocalAttribute is the underlying `attribute` of the CreateAttributeRequestItem. Based on this, an appropriate AcceptResponseItem of type [CreateAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#createattributeacceptresponseitem) is generated, which incorporates the `id` of the LocalAttribute with the LocalAttributeShareInfo in its `attributeId` property. This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for creating Attributes that will be transferred to the Sender. If the underlying `attribute` of the accepted [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) is an IdentityAttribute, a corresponding LocalAttribute without a LocalAttributeShareInfo is additionally created for the Recipient beforehand.

### Reject a CreateAttributeRequestItem

Even if the Recipient accepts the Request for creating Attributes as a whole, it may decide not to accept all of the Attributes offered by the Sender. To be more precise, the Recipient has the option of rejecting [CreateAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) that have the value `false` specified in their `mustBeAccepted` property. To reject a CreateAttributeRequestItem, use the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters). The rejection of a CreateAttributeRequestItem leads to the creation of a corresponding ResponseItem of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem). This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for creating Attributes.

### Example of accepting a RequestItemGroup

Let's look at an example where the Sender wants to create an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress), a [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) and a [BirthPlace]({% link _docs_integrate/attribute-values.md %}#birthplace) for the Recipient. For this purpose, the Sender creates a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for creating Attributes, which contains a CreateAttributeRequestItem belonging to the EMailAddress and a RequestItemGroup belonging to the birth information in its `items` property. The [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) itself includes two CreateAttributeRequestItems in its `items` property, namely one for the BirthDate and one for the BirthPlace.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "CreateAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "<Address of Recipient>",
        "value": {
          "@type": "EMailAddress",
          "value": "<email address that the Sender wants to create for the Recipient>"
        }
      }
    },
    {
      "@type": "RequestItemGroup",
      "mustBeAccepted": true,
      "items": [
        {
          "@type": "CreateAttributeRequestItem",
          "mustBeAccepted": true,
          "attribute": {
            "@type": "IdentityAttribute",
            "owner": "<Address of Recipient>",
            "value": {
              "@type": "BirthDate",
              "day": <day of birth date that the Sender wants to create for the Recipient>,
              "month": <month of birth date that the Sender wants to create for the Recipient>,
              "year": <year of birth date that the Sender wants to create for the Recipient>
            }
          }
        },
        {
          "@type": "CreateAttributeRequestItem",
          "mustBeAccepted": false,
          "attribute": {
            "@type": "IdentityAttribute",
            "owner": "<Address of Recipient>",
            "value": {
              "@type": "BirthPlace",
              "city": "<city of birth place that the Sender wants to create for the Recipient>",
              "country": "<country of birth place that the Sender wants to create for the Recipient>"
            }
          }
        }
      ]
    }
  ]
}
```

In our example, the Sender only requires the Recipient to accept the EMailAddress and the BirthDate, which is why the individual [CreateAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) and the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) within the Request have specified corresponding values in their `mustBeAccepted` property. We assume that the Recipient wants to accept the Request and all its CreateAttributeRequestItems with the exception of the BirthPlace.

If the Recipient wants to accept the Request for creating Attributes, it must accept all CreateAttributeRequestItems for which the `mustBeAccepted` property is set to `true`. It is therefore not permitted for the Recipient to refuse to accept the EMailAddress or the BirthDate offered by the Sender.
{: .notice--info}

The Recipient accepts the EMailAddress of the Sender and accepts at least one CreateAttributeRequestItem of the RequestItemGroup. Also, the Recipient accepts the BirthDate and rejects the BirthPlace of the Sender. It therefore responds to the Request for creating Attributes as follows:

```jsonc
{
  "items": [
    {
      // Accept EMailAddress
      "accept": true
    },
    {
      // Accept RequestItemGroup
      "accept": true,
      "items": [
        {
          // Accept BirthDate
          "accept": true
        },
        {
          // Reject BirthPlace
          "accept": false
        }
      ]
    }
  ]
}
```

Note that it is important to respond to RequestItems and RequestItemGroups in the same order in which they were received.

## Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) of the Sender. In order for the Sender to receive the Response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/49329630-b44c-4aa7-9e27-69f4d1d01aaa" id=".VPTa-Da-0ir"></iframe></div>

To view the Response to the Request, search for it in the synchronization result or proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a Template]({% link _docs_integrate/create-attribute-for-peer.md %}#request-over-template): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/create-attribute-for-peer.md %}#request-over-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the Response of the Recipient from the `response.content` property of the result. In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is a [CreateAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#createattributeacceptresponseitem) for each accepted CreateAttributeRequestItem and a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected CreateAttributeRequestItem included. Note that each accepted CreateAttributeRequestItem leads to the creation of an appropriate LocalAttribute with a LocalAttributeShareInfo of the Sender. The `content` of the [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) is the underlying `attribute` of the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem).

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response. If the Request for creating Attributes contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's next?

As already mentioned, this guide covers how an Identity can request the creation of an Attribute for a peer so that the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is only set by the Identity itself and cannot be modified by the peer when accepting the Request. For a typical example of an application of this procedure, refer to the documentation of the [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) scenario. In many cases, however, it makes more sense if the peer can adjust the Attribute that was offered for creation. For that, take a look at the [Propose Attribute to peer]({% link _docs_integrate/propose-attribute-to-peer.md %}) guide.
