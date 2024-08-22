---
# Start automatic generation
permalink: integrate/create-attributes-for-peer
redirect_from:
  - /integrate/create-attribute-for-peer
published: true
title: "Create Attributes for peer"
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
  - link: create-attributes-for-peer
require:
required_by:
# End automatic generation
---

In various contexts, an Identity may need to create an IdentityAttribute or a RelationshipAttribute for another Identity, such as when a university issues a degree certificate to a graduate or a company assigns a business email address to a new employee. This process involves a Connector, termed the Sender, creating an Attribute for another Connector, referred to as the Recipient. It is crucial to understand the use and structure of Requests in this context, and therefore, prior familiarization with the basics of Requests and Responses is recommended.

The creation of an Attribute by the Sender allows for setting its Attribute Value without alteration by the recipient when the request is accepted. If the situation requires the Recipient to modify the proposed Attribute, other methods detailed in the Propose Attributes to peer guide should be followed. Additionally, the Sender may request the Recipient to create an Attribute of a specific type by using the Read Attributes from peer approach.

When initiating a Attribute creation process, the Sender constructs a Request incorporating a CreateAttributeRequestItem. This item specifies the details of the Attribute to be created, either an IdentityAttribute or a RelationshipAttribute, and identifies the prospective owner of the Attribute. Various scenarios can dictate these details, and understanding the appropriate application is essential for effective implementation.

Instances of attribute creation include scenarios where a university or business needs to create Attributes directly tied to a Relationship or Identity of the Recipient, each requiring user decision or automatic acceptance depending on the nature of the Attribute and its ownership.

The complete process from creating the request for Attribute creation, sending it, having the Recipient receive and optionally accept or reject the Attribute, to finally synchronize and respond appropriately, is covered in detailed steps. This process ensures that the Attributes are managed properly and reflect the intended relationship and permissions between the Sender and the Recipient.

Moreover, for comprehensive implementation, all possible attributes that may be requested in tandem are handled using the RequestItemGroup to efficiently manage multiple attributes within a single request. This method suits scenarios where multiple related Attributes need to be established for the Recipient concurrently.

This guide illustrates how to effectively manage the creation, proposal, and modification of Attributes between different Identities using strategic Request and Response handling, which is core to maintaining the efficiency and relevance of the attributes in various operational contexts. For further exploration on allowing peers to modify proposed Attributes or request persistent consent, additional guides are available.

## Guidelines for Creating Attributes

In this document, the process for a Sender to initiate the creation of an Attribute for a Recipent is outlined. Each of the following subsections detail the necessary steps to compose a Request to create Attributes effectively.

### Function of CreateAttributeRequestItem

To initiate a creation of an Attribute for a Recipient, a `CreateAttributeRequestItem` of type [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) should be included in the `items` array of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). This item can cater to the creation of either an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), which should be specified in the `attribute` property of `CreateAttributeRequestItem`. The choice between creating an IdentityAttribute or a RelationshipAttribute affects the options available for defining the `owner` of the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes). Further specifics on these options and their corresponding usage contexts can be accessed in the overview table in [Combinations and usage scenarios of the CreateAttributeRequestItem]({% link _docs_integrate/create-attributes-for-peer.md %}#combinations-and-usage-scenarios-of-createattributerequestitem).

### Combinations and Scenarios for Using CreateAttributeRequestItem

Below is a table demonstrating various scenarios and Attribute types a Sender might choose to create for a Recipient employing the `CreateAttributeRequestItem`. It is critical to differentiate whether the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) is an IdentityAttribute or a RelationshipAttribute, and decide who the Identity `owner` will be.

| Attribute Type | Attribute Owner | Possible? | Automation | Examples/Reason                                                      |
| -------------- | --------------- | :-------: | ---------- | -------------------------------------------------------------------- |
| Identity       | Sender          |     ✗     | `N/A`      | Use [ShareAttributeRequestItem]({% link \_docs_integra...(continued) |

## Sending and Receiving Requests

A Sender who wishes to establish an Attribute for a Recipient might either have an existing Relationship with the Recipient or not. The method to send the [Request for creating Attributes]({% link _docs_integrate/create-attributes-for-peer.md %}#request-for-creating-attributes) varies depending on the existence of such a Relationship. There are two main approaches for transmitting the Request for creating Attributes from the Sender to the Recipient.

### Request via RelationshipTemplate

In cases where there is no existing Relationship between the Sender and the Recipient, this method is necessary. Moreover, even if there is an active Relationship, the Sender can still utilize a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to issue a Request to the Recipient. Comprehensive guidance on how to transmit and receive a Request through a RelationshipTemplate is available in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) documentation.

### Request via Message

If there is an established Relationship between the Sender and the Recipient, the Sender can opt to send a Request using a [Message]({% link _docs_integrate/data-model-overview.md %}#message). Detailed instructions on how to manage and process a Request via a Message can be found in the [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) guide.

## Handling and Processing Attribute Creation Requests

Upon receipt of the [Request for creating Attributes]({% link _docs_integrate/create-attributes-for-peer.md %}#request-for-creating-attributes), the Recipient can either accept it partially or fully, depending on whether it wishes to create some or all of the Attributes proposed by the Sender. Detailed instructions on processing an incoming request can be found in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) documentation, which includes specifying the `id` of the [Request]({% link _docs_integrate/data-model-overview.md %}#request). Each CreateAttributeRequestItem and RequestItemGroup within the Request must be evaluated to determine acceptance or rejection.

If the Recipient chooses not to create any Attributes and opts out of the Sender's Request for creating Attributes, the entire request can be rejected following the procedures in the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) documentation.
{: .notice--info}

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c2e1db15-8377-43bc-9ada-42623e5e938f" id="RROTOBMS1a-2"></iframe></div>

### Approving a CreateAttributeRequestItem

When the Recipient approves the creation of an Attribute proposed by the Sender, it must accept the CreateAttributeRequestItem within the Request. Utilizing [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) is mandatory for this process. This approval triggers the generation of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with appropriate [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo) listed under the `shareInfo` attribute. The `content` of the LocalAttribute represents the `attribute` from the CreateAttributeRequestItem. Consequently, a CreateAttributeAcceptResponseItem of [CreateAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#createattributeacceptresponseitem) type is created, detailing the `id` of the LocalAttribute within the `items` section of the Sender's [Response]({% link _docs_integrate/data-model-overview.md %}#response).

### Declining a CreateAttributeRequestItem

If the Recipient accepts the Request overall but chooses to decline certain Attributes proposed by the Sender, it may reject specifically those [CreateAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) designated with a `mustBeAccepted` value of `false`. This action, which involves using [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters), results in a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) within the `items` section of the [Response]({% link _docs_integrate/data-model-overview.md %}#response).

### Example Scenario: Handling a RequestItemGroup

Consider a scenario where the Sender proposes creating attributes such as an [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress), a [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate), and a [BirthPlace]({% link _docs_integrate/attribute-values.md %}#birthplace) for the Recipient. The Sender organizes a [Request]({% link _docs_integrate/data-model-overview.md %}#request) that includes a CreateAttributeRequestItem for the EMailAddress along with a RequestItemGroup for birth information. The latter comprises CreateAttributeRequestItems for both BirthDate and BirthPlace.

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
          "@DIFFICULTY ACCEPTED TYPE",
          "value": "<email address proposed by the Sender for the Recipient>"
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
              "day": <proposed day of birth>,
              "month": <proposed month of birth>,
              "year": <proposed year of birth>
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
              "city": "<proposed city of birth>",
              "country": "<proposed country of birth>"
            }
          }
        }
      ]
    }
  ]
}
```

In our example, the Sender insists on the acceptance of both the EMailAddress and the BirthDate, thus assigning the `mustBeaAccepted` attribute appropriately in their respective [CreateAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) and [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup). Should the Recipient agree to the Request, it aligns by accepting all crucial Attributes and excluding any optional ones like the BirthPlace.

Here is how the Recipient might respond, considering the guidelines set forth:

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

It is paramount to adhere to the sequence of the original RequestItems and RequestItemGroups when formulating responses.
{: .notice--info}

## Handling the Recipient's Response

Upon the Recipient's acceptance of the [Request to create Attributes]({% link _pdocs_intendance/create-attributes-for-peer.md%}#request-for-creating-attributes) initiated by the Sender, it becomes essential for the Sender to [synchronize with the Backbone's updates]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) to receive the Recipient's Response. This synchronization process can be further streamlined through the utilization of the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/49329630-b44c-4aa7-9e27-69f4d1d01aaa" id=".VPTa-Da-0ir"></iframe></div>

To access the Response, one may either inspect the synchronization outcome or follow the procedures outlined in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) documentation, applying the corresponding query parameters:

- For Requests made via a Template, use `<ID of RelationshipTemplate>` for the `source.reference` query parameter.
- For Requests issued through a Message, use `<ID of Request>` for the `id` query parameter.

Afterwards, the Sender's Integrator can retrieve the Recipient's Response from the `response.content` attribute within the result. Within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response), there will be a [CreateAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#createattributeacceptresponseitem) for each accepted CreateAttributeRequestItem and a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for every declined item. It is important to note that every accepted CreateAttributeRequestItem results in the establishment of a corresponding LocalAttribute, equipped with a LocalAttributeShareInfo from the Sender. The `content` of this [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) represents the original `attribute` from the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem).

In instances where errors occur, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) may be present in the Response. Should the original Request for creating Attributes incorporate a RequestItemGroup in its `items`, the corresponding Response will feature a matching [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) within its `items`.
{: .notice--info}

## Next Steps

As previously discussed, this tutorial explains the process by which an Identity may initiate the creation of an Attribute for a peer wherein the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is established solely by the Identity and remains immutable by the peer upon acceptance of the Request. For an illustrative example of how this approach is implemented, please refer to the [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) guide. However, in various scenarios, it may be more pragmatic to allow the peer the flexibility to modify the presented Attribute. For guidance on this alternative approach, explore the [Propose Attributes to peer]({% link _docs_integrate/propose-attributes-to-peer.md %}) documentation.
