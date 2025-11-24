---
# Start automatic generation
permalink: integrate/share-attributes-with-peer
redirect_from:
  - /integrate/share-own-attribute-to-peer
  - /integrate/share-attribute-with-peer
published: true
title: "Share Attributes with peer"
type: scenario
toc: true
properties:
  - id: SC068
  - category: Manage Attributes
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: share-attributes-with-peer
require:
required_by:
# End automatic generation
---

There are many situations in which an Identity wants to share an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with another Identity, for example:

- A university wants to give a student the street address of its student administration so that they can send it documents by post.
- An organization wants to share its email address with its members in order to be able to receive emails from them.
- A company wants to share the customer number of one of its customers with another company.

In this guide, we explain how a Connector, hereinafter referred to as the Sender, can share an [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) with another Connector, the so-called Recipient.
Since understanding this sharing process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}) before continuing reading this guide.

Please note that the general procedure is the same if the Connector wants to share an Attribute with an App user instead of another Connector.
For reasons of clarity, this guide focuses on the sharing process with two Connectors.
{: .notice--info}

## Request for sharing Attributes

The Sender wants to share an Attribute with the Recipient.
To do this, the Sender must first create a suitable Request, which it can then send to the Recipient.
In the following subsections, we describe the general appearance of a Request for sharing Attributes.

### Role of ShareAttributeRequestItem

For sharing a single Attribute, the Sender needs to insert a single RequestItem of type [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request).
The Sender can only share an Attribute that already exists as a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) and, in the case of IdentityAttributes, is owned by it.
The latter means that the address of the Sender is contained in the `content.owner` property of the corresponding LocalAttribute.
The `id` of the LocalAttribute must be inserted into the `attributeId` property and the `content` of the LocalAttribute into the `attribute` property of the ShareAttributeRequestItem.
If a RelationshipAttribute is to be shared, the `initialAttributePeer` property of the ShareAttributeRequestItem must contain the address of the `peer` with whom the Sender has the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) from which the RelationshipAttribute originates.

To get a list of all LocalAttributes that are owned by the Sender, proceed as described in the [Get Attributes]({% link _docs_use-cases/use-case-consumption-get-attributes.md %}) use case documentation and use `content.owner=<address of Sender>` as query parameter.
Please note that the `<...>` notation is used as a placeholder for the actual data as usual.
If the `id` of a LocalAttribute is known, the underlying IdentityAttribute or RelationshipAttribute within its `content` property can be displayed by consulting the [Get Attribute]({% link _docs_use-cases/use-case-consumption-get-attribute.md %}) use case description and specifying the `id` of the LocalAttribute.
{: .notice--info}

### Combinations and usage scenarios of ShareAttributeRequestItem

The following table provides an overview of the possible kinds of Attributes that the Sender can share with the Recipient using the ShareAttributeRequestItem.
It must be taken into account whether the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) to be shared is an IdentityAttribute or a RelationshipAttribute and which Identity is its `owner`.
If the Sender wants to share a RelationshipAttribute with the Recipient, it must exist in the context of a Relationship between the Sender and a third party, because it makes no sense for the Sender to share a RelationshipAttribute that exists in the context of the Relationship between the Sender and the Recipient with the Recipient.

| Type and context                                                                                        | Owner       |                 Possible?                  | Automation      | Remarks, reasons and examples                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------- | ----------- | :----------------------------------------: | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IdentityAttribute                                                                                       | Sender      |                     ✓                      | `AUTO_ACCEPT`   | Example: A company sends a new customer the company's address.                                                                                                                                                                                                                                                                                                                                                                        |
| IdentityAttribute                                                                                       | Recipient   |                     ✗                      | `N/A`           | It makes no sense for the Sender to share an IdentityAttribute that is owned by the Recipient with the Recipient.                                                                                                                                                                                                                                                                                                                     |
| IdentityAttribute                                                                                       | Third party |                     ✗                      | `N/A`           | The Sender is not allowed to share an IdentityAttribute that is owned by a third party with the Recipient.                                                                                                                                                                                                                                                                                                                            |
| RelationshipAttribute that exists in the context of a Relationship between the Sender and a third party | Sender      | ✓ or ✗ -<br>depending on `confidentiality` | `AUTO_ACCEPT`   | If their `confidentiality` is not `"private"`, the Sender is allowed to share existing RelationshipAttributes of a Relationship between itself and a third party that are owned by itself.<br>Example: A customer shares their customer ID from one company with another company, with the customer being the `owner` of the corresponding RelationshipAttribute.                                                                     |
| RelationshipAttribute that exists in the context of a Relationship between the Sender and a third party | Third party | ✓ or ✗ -<br>depending on `confidentiality` | `USER_DECISION` | If their `confidentiality` is not `"private"`, the Sender is allowed to share existing RelationshipAttributes of a Relationship between itself and a third party that are owned by the third party.<br>Example: A customer shares their customer ID from one company with another company, with the company being the `owner` of the corresponding RelationshipAttribute. Consider the Payback number as a possible concrete example. |

### Example of sharing an IdentityAttribute

We assume that the Integrator of the Sender has created an IdentityAttribute of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) for the Sender by following the instructions of our [Create Attributes for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}) scenario documentation.
This IdentityAttribute is stored locally within the `content` property of a corresponding [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) of the Sender, which is also referred to as an [OwnIdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#ownidentityattributes).

```jsonc
{
  "@type": "LocalAttribute",
  "id": "<ID of OwnIdentityAttribute>",
  "createdAt": "<creation date of OwnIdentityAttribute>",
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<address of Sender>",
    "value": {
      "@type": "BirthDate",
      "day": <day of birth date>,
      "month": <month of birth date>,
      "year": <year of birth date>
    }
  }
}
```

In our example, the Sender wants to share the IdentityAttribute with the Recipient.
To do so, it needs to insert the `id` of the corresponding OwnIdentityAttribute into the `attributeId` property and the IdentityAttribute itself into the `attribute` property of the [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) contained within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes.
The value of the `mustBeAccepted` property of the ShareAttributeRequestItem is set to `true` in this example.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ShareAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "<address of Sender>",
        "value": {
          "@type": "BirthDate",
          "day": <day of birth date>,
          "month": <month of birth date>,
          "year": <year of birth date>
        }
      },
      "attributeId": "<ID of OwnIdentityAttribute>"
    }
  ]
}
```

### Example of sharing a RelationshipAttribute

We now consider the case in which the Sender has an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with a third party and owns a RelationshipAttribute, which has already been created by using an appropriate Request, of type [ProprietaryString]({% link _docs_integrate/attribute-values.md %}#proprietarystring) of this Relationship.
The Sender can request to share this RelationshipAttribute with the Recipient if its `confidentiality` is `"protected"` or `"public"`.
In our example, we assume that the `confidentiality` of the RelationshipAttribute is `"public"` and that it is stored locally within the `content` property of an [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) of the Sender.

```jsonc
{
  "@type": "OwnRelationshipAttribute",
  "id": "<ID of OwnRelationshipAttribute>",
  "createdAt": "<creation date of OwnRelationshipAttribute>",
  "content": {
    "@type": "RelationshipAttribute",
    "owner": "<address of Sender>",
    "key": "<key of RelationshipAttribute>",
    "confidentiality": "public",
    "value": {
      "@type": "ProprietaryString",
      "title": "<title of RelationshipAttribute>",
      "value": "<actual value of RelationshipAttribute>"
    }
  },
  "peer": "<address of third party>",
  "sourceReference": "<ID of Request or Notification used for creation of OwnRelationshipAttribute>"
}
```

To share the RelationshipAttribute with the Recipient, the Sender needs to insert the `id` of the corresponding OwnRelationshipAttribute into the `attributeId` property and the RelationshipAttribute itself into the `attribute` property of the [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) contained within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes.
Furthermore, the address of the third party, which corresponds to the `peer` of the OwnRelationshipAttribute, must be specified as the `initialAttributePeer` of the ShareAttributeRequestItem.
The value of the `mustBeAccepted` property is set to `true` in this example.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ShareAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "RelationshipAttribute",
        "owner": "<address of Sender>",
        "key": "<key of RelationshipAttribute>",
        "confidentiality": "public",
        "value": {
          "@type": "ProprietaryString",
          "title": "<title of RelationshipAttribute>",
          "value": "<actual value of RelationshipAttribute>"
        }
      },
      "attributeId": "<ID of OwnRelationshipAttribute>",
      "initialAttributePeer": "<address of third party>"
    }
  ]
}
```

Further information on sharing RelationshipAttributes in different application scenarios is contained in the table of the [combinations and usage scenarios of the ShareAttributeRequestItem]({% link _docs_integrate/share-attributes-with-peer.md %}#combinations-and-usage-scenarios-of-shareattributerequestitem).

### Share multiple Attributes

Sharing is not limited to just a single Attribute, but it is possible to request the sharing of multiple Attributes at the same time.
For this purpose, several ShareAttributeRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes.
If you want to use a RequestItemGroup in order to share multiple Attributes with the Recipient at the same time, you must insert corresponding ShareAttributeRequestItems into the `items` property of it.

## Send and receive the Request

The Sender that wants to share an Attribute with the Recipient may or may not already have a Relationship with the Recipient.
Depending on which is the case, a different method can be used to send the [Request for sharing Attributes]({% link _docs_integrate/share-attributes-with-peer.md %}#request-for-sharing-attributes).
There are two ways to send the Request for sharing Attributes created by the Sender to the Recipient.

### Request via RelationshipTemplate

If there is currently no Relationship between the Sender and the Recipient, this approach must be used.
However, it is also possible for the Sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the Recipient if there is already an active Relationship between them.
All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) guide.

### Request via Message

The Sender only has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between them.
All information on how to send and receive a Request via a Message can be found in the [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) guide.

## Accept the Request and get the Attributes

After the Recipient has received the [Request for sharing Attributes]({% link _docs_integrate/share-attributes-with-peer.md %}#request-for-sharing-attributes), it can accept it to get all or some of the Sender's shared Attributes.
To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request).
Also, you need to decide and specify for each ShareAttributeRequestItem contained in the Request for sharing Attributes whether you want to accept or reject it.

If the Recipient does not want to get any of the Sender's shared Attributes and, therefore, does not want to accept the Request for sharing Attributes of the Sender, it can reject it as a whole too.
For that, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/9f9ad94d-1b83-46a5-90b0-5cbd064511e4" id="GrR_LR94fm6N"></iframe></div>

### Accept a ShareAttributeRequestItem

If the Recipient agrees to get one of the Sender's shared Attributes, it can accept the associated ShareAttributeRequestItem contained in the Request for sharing Attributes.
The [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) must be used for this.
The acceptance of a ShareAttributeRequestItem leads to the creation of a corresponding LocalAttribute.
Depending on whether an IdentityAttribute or a RelationshipAttribute has been shared by the Sender, it is referred to as either a [PeerIdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#peeridentityattributes) or a [ThirdPartyRelationshipAttribute]({% link _docs_integrate/attribute-introduction.md %}#thirdpartyrelationshipattributes).
The `content` of the LocalAttribute corresponds to the underlying `attribute` of the ShareAttributeRequestItem.
Based on this, an appropriate AcceptResponseItem of type [ShareAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#shareattributeacceptresponseitem) is generated, which incorporates the `id` of the created LocalAttribute in its `attributeId` property.
This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for sharing Attributes that will be transferred to the Sender.

### Reject a ShareAttributeRequestItem

Even if the Recipient accepts the Request for sharing Attributes as a whole, it may decide not to accept all of the Sender's shared Attributes.
To be more precise, the Recipient has the option of rejecting [ShareAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) that have the value `false` specified in their `mustBeAccepted` property.
To reject a ShareAttributeRequestItem, use the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).
The rejection of a ShareAttributeRequestItem leads to the creation of a corresponding ResponseItem of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem).
This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for sharing Attributes.

### Example of accepting a RequestItemGroup

Let's look at an example where the Sender wants to share its [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname) and contact information in the form of an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) or a [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber) with the Recipient.
For this purpose, the Sender creates a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes, which contains a ShareAttributeRequestItem belonging to the DisplayName and a RequestItemGroup belonging to the contact information in its `items` property.
The [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) itself includes two ShareAttributeRequestItems in its `items` property, namely one for the EMailAddress and one for the PhoneNumber.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ShareAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "<address of Sender>",
        "value": {
          "@type": "DisplayName",
          "value": "<display name that the Sender wants to share>"
        }
      },
      "attributeId": "<ID of source OwnIdentityAttribute of DisplayName>"
    },
    {
      "@type": "RequestItemGroup",
      "items": [
        {
          "@type": "ShareAttributeRequestItem",
          "mustBeAccepted": true,
          "attribute": {
            "@type": "IdentityAttribute",
            "owner": "<address of Sender>",
            "value": {
              "@type": "EMailAddress",
              "value": "<email address that the Sender wants to share>"
            }
          },
          "attributeId": "<ID of source OwnIdentityAttribute of EMailAddress>"
        },
        {
          "@type": "ShareAttributeRequestItem",
          "mustBeAccepted": false,
          "attribute": {
            "@type": "IdentityAttribute",
            "owner": "<address of Sender>",
            "value": {
              "@type": "PhoneNumber",
              "value": "<phone number that the Sender wants to share>"
            }
          },
          "attributeId": "<ID of source OwnIdentityAttribute of PhoneNumber>"
        }
      ]
    }
  ]
}
```

In our example, the Sender only requires the Recipient to accept the DisplayName and the EMailAddress, which is why the individual [ShareAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) within the Request have specified corresponding values in their `mustBeAccepted` property.
We assume that the Recipient wants to accept the Request and all its ShareAttributeRequestItems with the exception of the PhoneNumber.

If the Recipient wants to accept the Request for sharing Attributes, it must accept all ShareAttributeRequestItems for which the `mustBeAccepted` property is set to `true`.
It is therefore not permitted for the Recipient to refuse to accept the DisplayName or the EMailAddress shared by the Sender.
{: .notice--info}

The Recipient accepts the DisplayName of the Sender.
Also, the Recipient accepts the EMailAddress and rejects the PhoneNumber of the Sender.
It therefore responds to the Request for sharing Attributes as follows:

```jsonc
{
  "items": [
    {
      // Accept DisplayName
      "accept": true
    },
    {
      "items": [
        {
          // Accept EMailAddress
          "accept": true
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

We now assume that the Recipient has accepted the [Request for sharing Attributes]({% link _docs_integrate/share-attributes-with-peer.md %}#request-for-sharing-attributes) of the Sender.
In order for the Sender to receive the Response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).
Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/6d75dbf7-4ab2-4924-b579-ede8a889a0cb" id="1tR_SCPGgYJ-"></iframe></div>

To view the Response to the Request, proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a RelationshipTemplate]({% link _docs_integrate/share-attributes-with-peer.md %}#request-via-relationshiptemplate): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/share-attributes-with-peer.md %}#request-via-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the Response of the Recipient from the `response.content` property of the result.
In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is a [ShareAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#shareattributeacceptresponseitem) for each accepted ShareAttributeRequestItem and a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected ShareAttributeRequestItem included.
Note that each accepted ShareAttributeRequestItem leads to the creation of appropriate [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails).
Depending on whether an IdentityAttribute or a RelationshipAttribute has been shared by the Sender, they refer either to an [OwnIdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#ownidentityattributes), an [OwnRelationshipAttribute]({% link _docs_integrate/attribute-introduction.md %}#ownrelationshipattributes-and-peerrelationshipattributes) or a [PeerRelationshipAttribute]({% link _docs_integrate/attribute-introduction.md %}#ownrelationshipattributes-and-peerrelationshipattributes).
The `content` of the LocalAttribute is the underlying `attribute` of the ShareAttributeRequestItem.

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response.
If the Request for sharing Attributes contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's next?

Take a look at our [Integration example]({% link _docs_integrate/integration-example.md %}) if you want to see how an Identity shares an Attribute with a peer in the context of a larger process.
Also note that it is not only possible to share an Attribute with a peer, but you can also request to read an Attribute from a peer.
Consult the [Read Attributes from peer]({% link _docs_integrate/read-attributes-from-peer.md %}) guide for this.
