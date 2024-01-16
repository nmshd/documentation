There are many situations in which an Identity wants to share an own [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or an own [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with another Identity, for example:

- A university wants to give a student the street address of its student administration so that they can send it documents by post.
- An organization wants to share its email address with its members in order to be able to receive emails from them.
- A company wants to share the customer number of one of its customers with another company.

In this guide, we explain how a Connector, hereinafter referred to as the Sender, can share an own [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) with another Connector, the so-called Recipient. Since understanding this sharing process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}) before continuing reading this guide.

Please note that the general procedure is the same if the Connector wants to share an own Attribute with an App user instead of another Connector. For reasons of clarity, this guide focuses on the sharing process with two Connectors.
{: .notice--info}

## Request for sharing Attributes

The Sender wants to share an own Attribute with the Recipient. To do this, the Sender must first create a suitable Request, which it can then send to the Recipient. In the following subsections, we describe the general appearance of a Request for sharing Attributes.

### Role of ShareAttributeRequestItem

For sharing a single Attribute, the Sender needs to insert a single RequestItem of type [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). The Sender can only share an Attribute that already exists as a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) and is owned by it. The latter means that the Address of the Sender is contained in the `content.owner` property of the corresponding LocalAttribute. The `id` of the LocalAttribute must be inserted into the `sourceAttributeId` property and the `content` of the LocalAttribute into the `attribute` property of the ShareAttributeRequestItem.

To get a list of all LocalAttributes that are owned by the Sender, proceed as described in the [Query Attributes]({% link _docs_use-cases/use-case-consumption-query-attributes.md %}) use case documentation and use `"content.owner=<Address of Sender>"` as query parameter. Please note that the `<...>` notation is used as a placeholder for the actual data as usual. If the `id` of a LocalAttribute is known, the underlying IdentityAttribute or RelationshipAttribute within its `content` property can be displayed by consulting the [Get Attribute]({% link _docs_use-cases/use-case-consumption-get-attribute.md %}) use case description and specifying the `id` of the LocalAttribute.
{: .notice--info}

### Combinations and usage scenarios of ShareAttributeRequestItem

The following table provides an overview of the possible kinds of Attributes that the Sender can share with the Recipient using the ShareAttributeRequestItem. It must be taken into account whether the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) is an IdentityAttribute or a RelationshipAttribute and which Identity is its `owner`. If the Sender wants to share a RelationshipAttribute with the Recipient, a distinction must be made between which Identities the Relationship in question exists.

| Attribute Type | Attribute Owner | Possible? | Automation                                                     | Examples/Reason                                                                                                                                                                                                                                                                                      |
| -------------- | --------------- | :-------: | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity       | Sender          |     ✓     | `AUTO ACCEPT`                                                  | Company sends new customer the address of the company.                                                                                                                                                                                                                                               |
| Identity       | Recipient       |     ✗     | `N/A`                                                          | It makes no sense to share the Attribute to the Recipient, because he already owns it.                                                                                                                                                                                                               |
| Identity       | Third Party     |     ✗     | `N/A`                                                          | You cannot share an Attribute of which you are not the owner.                                                                                                                                                                                                                                        |
| Identity       | `<empty>`       |     ✓     | `AUTO ACCEPT`                                                  | An empty owner defaults to an Attribute with owner=`<Sender>`.                                                                                                                                                                                                                                       |
| Relationship   | Sender          |     ✓     | `USER DECISION` / `NOT ALLOWED` (depending on confidentiality) | A user can share own RelationshipAttributes of any Relationship to any other Relationship (if the confidentiality of the RelationshipAttribute is protected or public).<br>Example: Share Customer ID from Company A with Company B (User is owner of RelationshipAttribute).                        |
| Relationship   | Recipient       |     ✗     | `N/A`                                                          | It makes no sense to share the Attribute to the Recipient, because he already owns it.                                                                                                                                                                                                               |
| Relationship   | Third Party     |     ✓     | `USER DECISION` / `NOT ALLOWED` (depending on confidentiality) | A user can share RelationshipAttributes of any Relationship to any other Relationship (if the confidentiality of the RelationshipAttribute is protected or public).<br> Example: Share Customer ID from Company A with Company B (Company A is owner of RelationshipAttribute), e.g. Payback number. |
| Relationship   | `<empty>`       |     ✓     | `AUTO ACCEPT`                                                  | An empty owner defaults to an Attribute with owner=`<Sender>`.                                                                                                                                                                                                                                       |

### Example of sharing an own IdentityAttribute

We assume that the Integrator of the Sender has created an own IdentityAttribute of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) for the Sender by following the instructions of our Create own IdentityAttribute scenario documentation. This IdentityAttribute is stored locally within the `content` property of a corresponding [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) of the Sender.

<!--- TODO: Insert link to "Create own IdentityAttribute" guide --->

```jsonc
{
  "@type": "LocalAttribute",
  "id": "<ID of LocalAttribute>",
  "createdAt": "<creation date of LocalAttribute>",
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<Address of Sender>",
    "value": {
      "@type": "BirthDate",
      "day": <day of birth date>,
      "month": <month of birth date>,
      "year": <year of birth date>
    }
  }
}
```

In our example, the Sender wants to share the IdentityAttribute with the Recipient. To do so, it needs to insert the `id` of the corresponding LocalAttribute into the `sourceAttributeId` property and the IdentityAttribute itself into the `attribute` property of the [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) contained within the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes. The value of the `mustBeAccepted` property of the ShareAttributeRequestItem is set to `true` in this example.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ShareAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "<Address of Sender>",
        "value": {
          "@type": "BirthDate",
          "day": <day of birth date>,
          "month": <month of birth date>,
          "year": <year of birth date>
        }
      },
      "sourceAttributeId": "<ID of LocalAttribute>"
    }
  ]
}
```

### Share an own RelationshipAttribute

We now consider the case in which the Sender has an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with another Identity and owns a RelationshipAttribute of this Relationship. The Sender can request to share this RelationshipAttribute with the Recipient if the `confidentiality` of the RelationshipAttribute is `"protected"` or `"public"`. Further information on sharing RelationshipAttributes in different application scenarios can be found in the table of the [Combinations and usage scenarios of the ShareAttributeRequestItem]({% link _docs_integrate/share-own-attribute-to-peer.md %}#combinations-and-usage-scenarios-of-shareattributerequestitem).

### Share multiple Attributes

Sharing is not limited to just a single Attribute, but it is possible to request the sharing of multiple Attributes at the same time. For this purpose, several ShareAttributeRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes. If you want to use a RequestItemGroup in order to share multiple Attributes with the Recipient at the same time, you must insert corresponding ShareAttributeRequestItems into the `items` property of it.

## Send and receive the Request

The Sender that wants to share an Attribute with the Recipient may or may not already have a Relationship with the Recipient. Depending on which is the case, a different method can be used to send the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes). There are two ways to send the Request for sharing Attributes created by the Sender to the Recipient.

### Request over Template

If there is currently no Relationship between the Sender and the Recipient, this approach must be used. However, it is also possible for the Sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the Recipient if there is already an active Relationship between them. All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests over Templates]({% link _docs_integrate/requests-over-templates.md %}) guide.

### Request over Message

The Sender only has the option of sending a Request to the Recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between them. All information on how to send and receive a Request via a Message can be found in the [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) guide.

## Accept the Request and get the Attributes

After the Recipient has received the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes), it can accept it to get all or some of the Sender's shared Attributes. To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request). Also, you need to decide and specify for each ShareAttributeRequestItem and RequestItemGroup contained in the Request for sharing Attributes whether you want to accept or reject it.

If the Recipient does not want to get any of the Sender's shared Attributes and, therefore, does not want to accept the Request for sharing Attributes of the Sender, it can reject it as a whole too. For that, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/b79abea1-1062-4f0d-8929-85dd4d728a59" id="7SfSSvpj.eT3"></iframe></div>

### Accept a ShareAttributeRequestItem

If the Recipient agrees to get one of the Sender's shared Attributes, it can accept the associated ShareAttributeRequestItem contained in the Request for sharing Attributes. The [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) must be used for this. The acception of a ShareAttributeRequestItem leads to the creation of a corresponding LocalAttribute with a [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) contained within its `shareInfo` property. The `content` of the LocalAttribute is the underlying `attribute` of the ShareAttributeRequestItem. Based on this, an appropriate AcceptResponseItem of type [ShareAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#shareattributeacceptresponseitem) is generated, which incorporates the `id` of the created LocalAttribute with the LocalAttributeShareInfo in its `attributeId` property. This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for sharing Attributes that will be transferred to the Sender.

### Reject a ShareAttributeRequestItem

Even if the Recipient accepts the Request for sharing Attributes as a whole, it may decide not to accept all of the Sender's shared Attributes. To be more precise, the Recipient has the option of rejecting [ShareAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) that have the value `false` specified in their `mustBeAccepted` property. To reject a ShareAttributeRequestItem, use the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters). The rejection of a ShareAttributeRequestItem leads to the creation of a corresponding ResponseItem of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem). This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for sharing Attributes.

### Example of accepting a RequestItemGroup

Let's look at an example where the Sender wants to share its [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname) and contact information in the form of an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) or a [PhoneNumber]({% link _docs_integrate/attribute-values.md %}#phonenumber) with the Recipient. For this purpose, the Sender creates a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for sharing Attributes, which contains a ShareAttributeRequestItem belonging to the DisplayName and a RequestItemGroup belonging to the contact information in its `items` property. The [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) itself includes two ShareAttributeRequestItems in its `items` property, namely one for the EMailAddress and one for the PhoneNumber.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "ShareAttributeRequestItem",
      "mustBeAccepted": true,
      "attribute": {
        "@type": "IdentityAttribute",
        "owner": "<Address of Sender>",
        "value": {
          "@type": "DisplayName",
          "value": "<display name that the Sender wants to share>"
        }
      },
      "sourceAttributeId": "<ID of LocalAttribute which is the source of the DisplayName>"
    },
    {
      "@type": "RequestItemGroup",
      "mustBeAccepted": true,
      "items": [
        {
          "@type": "ShareAttributeRequestItem",
          "mustBeAccepted": true,
          "attribute": {
            "@type": "IdentityAttribute",
            "owner": "<Address of Sender>",
            "value": {
              "@type": "EMailAddress",
              "value": "<email address that the Sender wants to share>"
            }
          },
          "sourceAttributeId": "<ID of LocalAttribute which is the source of the EMailAddress>"
        },
        {
          "@type": "ShareAttributeRequestItem",
          "mustBeAccepted": false,
          "attribute": {
            "@type": "IdentityAttribute",
            "owner": "<Address of Sender>",
            "value": {
              "@type": "PhoneNumber",
              "value": "<phone number that the Sender wants to share>"
            }
          },
          "sourceAttributeId": "<ID of LocalAttribute which is the source of the PhoneNumber>"
        }
      ]
    }
  ]
}
```

In our example, the Sender only requires the Recipient to accept the DisplayName and the EMailAddress, which is why the individual [ShareAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) and the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) within the Request have specified corresponding values in their `mustBeAccepted` property. We assume that the Recipient wants to accept the Request and all its ShareAttributeRequestItems with the exception of the PhoneNumber.

If the Recipient wants to accept the Request for sharing Attributes, it must accept all ShareAttributeRequestItems for which the `mustBeAccepted` property is set to `true`. It is therefore not permitted for the Recipient to refuse to accept the DisplayName or the EMailAddress shared by the Sender.
{: .notice--info}

The Recipient accepts the DisplayName of the Sender and accepts at least one ShareAttributeRequestItem of the RequestItemGroup. Also, the Recipient accepts the EMailAddress and rejects the PhoneNumber of the Sender. It therefore responds to the Request for sharing Attributes as follows:

```jsonc
{
  "items": [
    {
      //Accept DisplayName
      "accept": true
    },
    {
      //Accept RequestItemGroup
      "accept": true,
      "items": [
        {
          //Accept EMailAddress
          "accept": true
        },
        {
          //Reject PhoneNumber
          "accept": false
        }
      ]
    }
  ]
}
```

Note that it is important to respond to RequestItems and RequestItemGroups in the same order in which they were received.

## Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) of the Sender. In order for the Sender to receive the Response of the Recipient, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/14e97556-0a62-417a-9c97-41872d029056" id="DG~Sz6M~q5zO"></iframe></div>

To view the Response to the Request, search for it in the synchronization result or proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a Template]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-over-template): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-over-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the Sender can now get the Response of the Recipient from the `response.content` property of the result. In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is a [ShareAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#shareattributeacceptresponseitem) for each accepted ShareAttributeRequestItem and a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected ShareAttributeRequestItem included. Note that each accepted ShareAttributeRequestItem leads to the creation of an appropriate LocalAttribute with a LocalAttributeShareInfo of the Sender. The `content` of the LocalAttribute is the underlying `attribute` of the ShareAttributeRequestItem.

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response. If the Request for sharing Attributes contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}

## What's next?

Take a look at our [Integration example]({% link _docs_integrate/integration-example.md %}) if you want to see how an Identity shares an own Attribute with a peer in the context of a larger process. Also note that it is not only possible to share your own Attribute with a peer, but you can also request to read an Attribute from a peer. Consult the Read attribute from peer guide for this.

<!--- TODO: Insert link to scenario description "Read attribute from peer" --->
