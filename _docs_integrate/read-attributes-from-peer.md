---
# Start automatic generation
permalink: integrate/read-attributes-from-peer
redirect_from:
  - /integrate/read-attribute-for-peer
published: true
title: "Read Attributes from peer"
type: scenario
toc: true
properties:
  - id: SC065
  - category: Manage Attributes
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: CHANGES REQUIRED
  - documentation status: DONE
  - published: true
  - link: read-attributes-from-peer
require:
required_by:
# End automatic generation
---

There are many situations in which an Identity is interested in an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of another Identity, for example:

- A company must know the age of a customer in order to carry out an age check if they want to purchase alcohol or other age-restricted goods.
- A company needs the street address of a customer so that it can send them an invoice after the customer has made a purchase from the company.
- An organization is interested in the birth date of a member so that it can wish them a happy birthday every year.
- A university needs to know the email address of a student in order to be able to send them emails.

In this guide, we explain how a Connector, hereinafter referred to as the Sender, can read an [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) of another Connector, the so-called Recipient. Since understanding this reading process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}) before continuing reading this guide.

Please note that the general procedure is the same if the Connector wants to read an Attribute of an App user instead of another Connector. For reasons of clarity, this guide focuses on the reading process with two Connectors.
{: .notice--info}

## Request for reading Attributes

The Sender wants to read an Attribute of the Recipient. To do this, the Sender must first create a suitable Request, which it can then send to the Recipient. In the following subsections, we describe the general appearance of a Request for reading Attributes.

### Role of ReadAttributeRequestItem

For reading a single Attribute, the Sender needs to insert a single RequestItem of type [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem) into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). The input it has to provide for the `query` property of the ReadAttributeRequestItem depends on what type of Attribute it wants to get. If the Sender wants to read an IdentityAttribute, it can use an appropriate [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery). Only IdentityAttributes that are owned by the Recipient can be requested by the Sender. It makes no sense for the Sender to request a RelationshipAttribute from the Recipient that already exists in the context of their [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) to each other. However, the Sender may want to create a RelationshipAttribute for this Relationship whose `value` is set by the Recipient. This can be done by using a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery).

The Sender can use a ReadAttributeRequestItem to create a RelationshipAttribute in the context of a Relationship between itself and the Recipient if it wants the [RelationshipAttributeValue]({% link _docs_integrate/attribute-values.md %}#relationship-attributes) to be set by the Recipient. Even if it seems misleading to use a ReadAttributeRequestItem to create a RelationshipAttribute, this terminology makes sense insofar as the RelationshipAttributeValue should be read from the Recipient in order to be able to create it.
{: .notice--info}

Note that the Sender cannot explicitly specify the Recipient's Address as the value for the `owner` property of the RelationshipAttributeQuery because the Address does not have to be known beforehand. This is the case if the [Request is sent via a RelationshipTemplate]({% link _docs_integrate/read-attributes-from-peer.md %}#request-via-relationshiptemplate) and not via a Message. Therefore, an empty string must be specified as the `owner` instead if the Sender wants the RelationshipAttribute to be owned by the Recipient. If the Sender is interested in a RelationshipAttribute that the Recipient has in the context of a Relationship with a third party, a [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) can be used. In addition, it is also permitted to specify an [IQLQuery]({% link _docs_integrate/data-model-overview.md %}#iqlquery) for the `query` property of the ReadAttributeRequestItem.

### Combinations and usage scenarios of ReadAttributeRequestItem

The following table provides an overview of the possible kinds of Attributes that the Sender can read from the Recipient using the ReadAttributeRequestItem. It must be taken into account whether the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) is an IdentityAttribute or a RelationshipAttribute and which Identity is its `owner`. If the Sender wants to read a RelationshipAttribute from the Recipient, a distinction must be made between which Identities the Relationship in question exists.

| Type and context                                                                                           | Owner       |                 Possible?                  | Automation      | Remarks, reasons and examples                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------- | ----------- | :----------------------------------------: | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IdentityAttribute                                                                                          | Sender      |                     ✗                      | `N/A`           | It makes no sense for the Sender to read IdentityAttributes that are owned by itself. Instead, it can [create IdentityAttributes for itself]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-an-identityattribute-for-yourself).                                                                                                                    |
| IdentityAttribute                                                                                          | Recipient   |                     ✓                      | `USER_DECISION` | Example: A company asks a customer for their delivery address.                                                                                                                                                                                                                                                                                                          |
| IdentityAttribute                                                                                          | Third party |                     ✗                      | `N/A`           | An IdentityAttribute that is owned by a third party cannot be shared by the Recipient.                                                                                                                                                                                                                                                                                  |
| RelationshipAttribute that exists in the context of the Relationship between the Sender and the Recipient  | Sender      |                     ✓                      | `USER_DECISION` | With this combination, the Sender gives the Recipient the **one-time permission to create a RelationshipAttribute** that exists in the context of their Relationship and that is owned by the Sender.<br>Example: An electricity provider asks a new customer for their electricity meter number.                                                                       |
| RelationshipAttribute that exists in the context of the Relationship between the Sender and the Recipient  | Recipient   |                     ✓                      | `USER_DECISION` | With this combination, the Sender gives the Recipient the **one-time permission to create a RelationshipAttribute** that exists in the context of their Relationship and that is owned by the Recipient.<br>Example: A company asks a customer if they want to subscribe to its newsletter.                                                                             |
| RelationshipAttribute that exists in the context of a Relationship between the Recipient and a third party | Recipient   | ✓ or ✗ -<br>depending on `confidentiality` | `USER_DECISION` | If its `confidentiality` is not `"private"`, the Sender is able to request to **read an existing RelationshipAttribute** that exists in a Relationship between the Recipient and a third party and that is owned by the Recipient.<br> Example: A social network asks for the Facebook privacy settings of a user to get senseful defaults of its own privacy settings. |
| RelationshipAttribute that exists in the context of a Relationship between the Recipient and a third party | Third party | ✓ or ✗ -<br>depending on `confidentiality` | `USER_DECISION` | If its `confidentiality` is not `"private"`, the Sender is able to request to **read an existing RelationshipAttribute** that exists in a Relationship between the Recipient and a third party and that is owned by the third party.<br> Example: An online shop asks for the Payback customer ID of a user to book the order on their account.                         |

### Example of reading an IdentityAttribute

We assume that the Sender wants to read an IdentityAttribute of type [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) of the Recipient. To do this, it inserts the corresponding [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery) into the `query` property of the [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem), which is contained within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for reading Attributes. In our example, we have chosen to set the value of the `mustBeAccepted` property of the ReadAttributeRequestItem to `true`.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ReadAttributeRequestItem",
      "mustBeAccepted": true,
      "query": {
        "@type": "IdentityAttributeQuery",
        "valueType": "EMailAddress"
      }
    }
  ]
}
```

### Example of reading a RelationshipAttribute without a third party involved

We now consider the case that the Sender has an active Relationship established with the Recipient and that it wants to create a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) for this Relationship whose `value` is read from the Recipient. Then the associated [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem), which is contained in the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for reading Attributes created by the Sender, must contain an appropriate RelationshipAttributeQuery in its `query` property. For example, if the Sender wants to request a RelationshipAttribute of type [ProprietaryString]({% link _docs_integrate/attribute-values.md %}#proprietarystring) that is owned by the Recipient and whose `confidentiality` is `"public"`, the Request could look like this:

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ReadAttributeRequestItem",
      "mustBeAccepted": true,
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

Note that an empty string must be specified as the value for the `owner` property of the [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) if the Sender wants the requested RelationshipAttribute to be owned by the Recipient and that the `<...>` notation is used as a placeholder for the actual data as usual.

### Example of reading a RelationshipAttribute with a third party involved

If the Sender has established an active Relationship with the Recipient and the Recipient has also established an active Relationship with a third party, the Sender can request to read [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that exist in the context of the Relationship between the Recipient and the third party. To do this, a corresponding [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) must be used. The Sender inserts it into the `query` property of the [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem), which is contained within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for reading Attributes. For example, if the Sender wants to request a RelationshipAttribute that is owned by the Recipient and that exists in the context of the Relationship between the Recipient and a specific third party, the Request could look like this:

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ReadAttributeRequestItem",
      "mustBeAccepted": true,
      "query": {
        "@type": "ThirdPartyRelationshipAttributeQuery",
        "key": "<key of RelationshipAttribute>",
        "owner": "recipient",
        "thirdParty": ["<Address of third party>"]
      }
    }
  ]
}
```

Note that the string `"recipient"` must be specified as the value for the `owner` property of the ThirdPartyRelationshipAttributeQuery if the Sender wants the requested RelationshipAttribute to be owned by the Recipient. RelationshipAttributes that exist in the context of the Relationship between the Recipient and the third party and whose `confidentitality` is `"private"` cannot be sent by the Recipient to the Sender.

### Read multiple Attributes

Requesting read access is not limited to just a single Attribute, but it is possible to request read access to multiple Attributes at the same time. Several ReadAttributeRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for reading Attributes for this purpose. If you want to use a RequestItemGroup in order to request read access to multiple Attributes of the Recipient at the same time, you must insert corresponding ReadAttributeRequestItems into the `items` property of it.

## Send and receive the Request

The Sender that wants to read an Attribute of the Recipient may or may not already have a Relationship with the Recipient. Depending on which is the case, a different method can be used to send the [Request for reading Attributes]({% link _docs_integrate/read-attributes-from-peer.md %}#request-for-reading-attributes). There are two ways to send the Request for reading Attributes created by the Sender to the Recipient.

### Request via RelationshipTemplate

If there is currently no Relationship between the Sender and the Recipient, this approach must be used. But it is also possible for the Sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the Recipient if there is already an active Relationship between them. All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) guide.

### Request via Message

The Sender only has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between them. All information on how to send and receive a Request via a Message can be found in the [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) guide.

## Accept the Request

After the Recipient has received the [Request for reading Attributes]({% link _docs_integrate/read-attributes-from-peer.md %}#request-for-reading-attributes), it can accept it to give the Sender read access to all or some of the requested Attributes. To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request). You must also decide and specify for each ReadAttributeRequestItem contained in the Request for reading Attributes whether you want to accept or reject it.

If the Recipient does not want the Sender to read any of its Attributes and, therefore, does not want to accept the Request for reading Attributes of the Sender, it can reject it as a whole as well. For this, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/164e1c68-0997-4a16-832c-c1e53bb55571" id="NypRt8MoA-HR"></iframe></div>

### Accept a ReadAttributeRequestItem

If the Recipient agrees to share a requested Attribute with the Sender, it can accept the associated ReadAttributeRequestItem contained in the Request for reading Attributes. In particular, it must then provide the Attribute requested via the `query` property of the ReadAttributeRequestItem for its Response to the Request. Depending on whether the Recipient wants to share an Attribute that already exists as a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) or that has to be created first, different [AcceptReadAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptreadattributerequestitemparameters) for this must be used. As already indicated, a RelationshipAttributeQuery can only be validly answered with a new Attribute, and a ThirdPartyRelationshipAttributeQuery can only be validly answered with an existing Attribute.

Otherwise, the [error code]({% link _docs_integrate/error-codes.md %}) `error.consumption.requests.invalidAcceptParameters` arises. Furthermore, an error with the code `error.consumption.requests.attributeQueryMismatch` is thrown if the Attribute provided by the Recipient does not match the [AttributeQuery]({% link _docs_integrate/data-model-overview.md %}#attributequeries) specified in the `query` property of the ReadAttributeRequestItem.
{: .notice--info}

The acceptance of a ReadAttributeRequestItem always leads to the creation of a LocalAttribute with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) contained within its `shareInfo` property, whose underlying `content` is given by the shared Attribute. An appropriate AcceptResponseItem of type [ReadAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#readattributeacceptresponseitem) is generated, which incorporates the `id` of the LocalAttribute with the LocalAttributeShareInfo in its `attributeId` property and the shared Attribute in its `attribute` property. This ReadAttributeAcceptResponseItem will be included in the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for reading Attributes that will be transferred to the Sender. If a new IdentityAttribute is to be shared, a corresponding LocalAttribute without a LocalAttributeShareInfo is additionally created for the Recipient beforehand.

### Reject a ReadAttributeRequestItem

Even if the Recipient accepts the Request for reading Attributes as a whole, it may decide not to share every requested Attribute with the Sender. To be more precise, the Recipient has the option of rejecting [ReadAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem) that have the value `false` specified in their `mustBeAccepted` property. To reject a ReadAttributeRequestItem, use the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters). The rejection of a ReadAttributeRequestItem leads to the creation of a ResponseItem of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem). This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for reading Attributes.

### Example of accepting a RequestItemGroup

Let's look at an example where the Sender is interested in the Recipient's [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) and contact information in the form of an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) or a [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber). To ask the Recipient for this data, the Sender creates a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for reading Attributes, which contains a ReadAttributeRequestItem belonging to the BirthDate and a RequestItemGroup belonging to the contact information in its `items` property. The [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) itself contains two ReadAttributeRequestItems in its `items` property, namely one for the EMailAddress and one for the PhoneNumber.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ReadAttributeRequestItem",
      "mustBeAccepted": false,
      "query": {
        "@type": "IdentityAttributeQuery",
        "valueType": "BirthDate"
      }
    },
    {
      "@type": "RequestItemGroup",
      "items": [
        {
          "@type": "ReadAttributeRequestItem",
          "mustBeAccepted": true,
          "query": {
            "@type": "IdentityAttributeQuery",
            "valueType": "EMailAddress"
          }
        },
        {
          "@type": "ReadAttributeRequestItem",
          "mustBeAccepted": false,
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

In our example, the Sender only requires the Recipient to share its EMailAddress, which is why the individual [ReadAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem) within the Request have specified corresponding values in their `mustBeAccepted` property. We assume that the Recipient wants to accept the Request and only wants to share its EMailAddress, which is already saved as an appropriate LocalAttribute, with the Sender.

If the Recipient wants to accept the Request for reading Attributes, it must accept all ReadAttributeRequestItems for which the `mustBeAccepted` property is set to `true`. It is therefore not permitted, for example, for the Recipient to refuse to share its EMailAddress and instead share its PhoneNumber.
{: .notice--info}

The Recipient refuses to share its BirthDate with the Sender and accepts at least one ReadAttributeRequestItem of the RequestItemGroup. Also, the Recipient accepts the sharing of its EMailAddress and rejects the sharing of its PhoneNumber. Thus, it responds to the Request for reading Attributes as follows:

```jsonc
{
  "items": [
    {
      // Reject sharing of BirthDate
      "accept": false
    },
    {
      "items": [
        {
          // Accept sharing of existing EMailAddress
          "accept": true,
          "existingAttributeId": "<ID of LocalAttribute of EMailAddress>"
        },
        {
          // Reject sharing of PhoneNumber
          "accept": false
        }
      ]
    }
  ]
}
```

Note that it is important to respond to RequestItems, some of which may be contained in a RequestItemGroup, in the same order in which they were received.

## Get the Attributes

We now assume that the Recipient has accepted the [Request for reading Attributes]({% link _docs_integrate/read-attributes-from-peer.md %}#request-for-reading-attributes) of the Sender. In order for the Sender to receive the Response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c8e5575e-ed55-48c2-897e-68e99d5df932" id="jbZRol4VVGZQ"></iframe></div>

To view the Response to the Request, search for it in the synchronization result or proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a RelationshipTemplate]({% link _docs_integrate/read-attributes-from-peer.md %}#request-via-relationshiptemplate): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/read-attributes-from-peer.md %}#request-via-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the Response of the Recipient from the `response.content` property of the result. In particular, each requested and shared Attribute that belongs to an accepted ReadAttributeRequestItem can be read from a corresponding ReadAttributeAcceptResponseItem within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response). Internally, the shared `attribute` that can be read from the [ReadAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#readattributeacceptresponseitem) is used to create an appropriate LocalAttribute with a LocalAttributeShareInfo of the Sender. On the other hand, there is a corresponding RejectResponseItem in the `items` property of the Response for each rejected ReadAttributeRequestItem.

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response. If the Request for reading Attributes contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's next?

Take a look at our [Integration example]({% link _docs_integrate/integration-example.md %}) if you want to see how an Attribute of a peer is read by an Identity in the context of a larger process. Also note that it is not only possible to request the reading of an Attribute from a peer, but that you can share an Attribute with a peer as well. Consult the [Share Attributes with peer]({% link _docs_integrate/share-attributes-with-peer.md %}) guide for this.
