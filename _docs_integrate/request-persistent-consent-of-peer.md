---
# Start automatic generation
permalink: integrate/request-persistent-consent-of-peer
published: true
title: "Request persistent consent of peer"
type: scenario
toc: true
properties:
  - id: SC027
  - category: Request consent
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: request-persistent-consent-of-peer
require:
  - integrate/requests-via-relationshiptemplates
  - integrate/requests-via-messages
required_by:
# End automatic generation
---

This guide explains how an Identity can obtain the persistent consent of one of its peers on a particular issue. Technically, this form of consent is stored by a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with [Consent]({% link _docs_integrate/attribute-values.md %}#consent) as `value.@type`, that exists in the context of their [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) and that is usually owned by the peer.

For more information on how to establish Relationships, refer to the [Establish a Relationship to another Identity]({% link _docs_integrate/establish-a-relationship-to-another-identity.md %}) scenario documentation.
{: .notice--info}

If an Identity wants to obtain the persistent consent of one of its peers and thus [create a RelationshipAttribute]({% link _docs_integrate/create-attribute-for-yourself.md %}#create-a-relationshipattribute-for-yourself) with Consent as `value.@type` for their Relationship, it has several options on how to do this. These have in common that the Identity must send a [Request]({% link _docs_integrate/data-model-overview.md %}#request) to create such a RelationshipAttribute to its peer, which must be accepted by the peer. The Identity usually wants to define the values for the properties of the [Consent]({% link _docs_integrate/attribute-values.md %}#consent) itself. This applies in particular to its `consent` property, in which the text is specified to which the peer should persistently agree. The peer should not be able to change this text or the other values for the properties of the Consent. For this purpose, it makes the most sense for the Identity to send a [Request]({% link _docs_integrate/data-model-overview.md %}#request) to the peer that contains a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) within its `items` property. The RelationshipAttribute to be created must then be inserted into the `attribute` property of the CreateAttributeRequestItem. Further information on using the CreateAttributeRequestItem can be found in the [Create Attribute for peer]({% link _docs_integrate/create-attribute-for-peer.md %}) guide.

## Examples of consents

There are many situations in which an Identity needs or wants the persistent consent of one of its peers. The corresponding text that the peer should agree to is contained within the `consent` property of a [Consent]({% link _docs_integrate/attribute-values.md %}#consent), for example:

- "I hereby confirm that I have read and agree to the privacy terms of this cloud service."
- "The provided EULA has been read and agreed to."
- "Yes, I have backed up all of my data on this computer and you can wipe it."
- "Yes, I want to opt-in to the newsletter."

The `consent` property of a Consent is not intended to be used by an Identity to send tons of text to the peer. Instead, it should contain a brief summary of the issue, which the peer should agree to. Longer texts should be placed on external websites. A link to such a website can be specified in the optional `link` property of the Consent. Also note that the Consent should not be used for contractual agreements.

## Request for persistent consent

In the following, we describe how a Connector, hereinafter referred to as the Sender, can create a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with [Consent]({% link _docs_integrate/attribute-values.md %}#consent) as `value.@type` for a Relationship to another Connector, the so-called Recipient, by sending a [Request]({% link _docs_integrate/data-model-overview.md %}#request). As there is already a Relationship between the Sender and the Recipient, the Sender can send the [Request via a Message]({% link _docs_integrate/requests-over-messages.md %}) to the Recipient. Note that the Sender could also send the [Request via a RelationshipTemplate]({% link _docs_integrate/requests-over-templates.md %}), but this is not discussed further below.

### Create the Request

As already indicated, the Request contains a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) within its `items` property. The RelationshipAttribute to be created must be inserted into the `attribute` property of the CreateAttributeRequestItem. The RelationshipAttribute should be owned by the Recipient, which is why an empty string is specified as the value for its `owner` property. The Recipient then automatically becomes the `owner` later on. To create the Request, the Sender must proceed as described in the [Create outgoing Request]({% link _docs_use-cases/use-case-consumption-create-outgoing-request.md %}) use case, specifying a suitable payload as given in the example below. In this example, the `confidentiality` of the RelationshipAttribute is set to `"private"` and the value of the `mustBeAccepted` property of the CreateAttributeRequestItem is set to `true`. Please note that the `<...>` notation is used as a placeholder for the actual data as usual and that the `link` property of the [Consent]({% link _docs_integrate/attribute-values.md %}#consent) is optional and can therefore also be omitted.

```json
{
  "content": {
    "@type": "Request",
    "items": [
      {
        "@type": "CreateAttributeRequestItem",
        "mustBeAccepted": true,
        "attribute": {
          "@type": "RelationshipAttribute",
          "key": "<key of RelationshipAttribute>",
          "owner": "",
          "confidentiality": "private",
          "value": {
            "@type": "Consent",
            "consent": "<issue that the Sender wants the Recipient to agree to>",
            "link": "<link to external website with more information on the issue>"
          }
        }
      }
    ]
  },
  "peer": "<Address of Recipient>"
}
```

Before creating the Request, the Sender should check whether it is valid. This can be done by proceeding as described in the documentation of the [Check if outgoing Request can be created]({% link _docs_use-cases/use-case-consumption-check-if-outgoing-request-can-be-created.md %}) use case. The advantage of checking the validity of the Request first before attempting to create it is that the Sender would receive a more precise [error]({% link _docs_integrate/error-codes.md %}) description in the case of a faulty Request.
{: .notice--info}

### Send the Request

After the Request is created, the Sender can send it to the Recipient. To send the [Request via a Message]({% link _docs_integrate/requests-over-messages.md %}), the Sender have to follow the instructions of the [Send a Message to the Recipient]({% link _docs_use-cases/use-case-transport-send-message-to-recipients.md %}) use case documentation. To continue the example, the following payload must be used by the Sender to send the [created Request]({% link _docs_integrate/request-persistent-consent-of-peer.md %}#create-the-request) to the Recipient via a Message. It is essential that the `id` of the Request is specified, which was generated after the Request was created by the Sender with the [Create outgoing Request]({% link _docs_use-cases/use-case-consumption-create-outgoing-request.md %}) use case. This enables the Request to be processed correctly by the Recipient.

```jsonc
{
  "recipients": ["<Address of Recipient>"],
  "content": {
    "@type": "Request",
    "id": "<ID of Request>",
    "items": [
      {
        "@type": "CreateAttributeRequestItem",
        "mustBeAccepted": true,
        "attribute": {
          "@type": "RelationshipAttribute",
          "key": "<key of RelationshipAttribute>",
          "owner": "",
          "confidentiality": "private",
          "value": {
            "@type": "Consent",
            "consent": "<issue that the Sender wants the Recipient to agree to>",
            "link": "<link to external website with more information on the issue>"
          }
        }
      }
    ]
  }
}
```

### Receive and accept the Request

In order to receive the [Message]({% link _docs_integrate/data-model-overview.md %}#message) that contains the [Request for persistent consent]({% link _docs_integrate/request-persistent-consent-of-peer.md %}#request-for-persistent-consent) as `content`, the Recipient must [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). If the Recipient wants to accept the Request and in particular all its [CreateAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) for which the value of the `mustBeAccepted` property is set to `true`, it must proceed as described in the documentation of the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case. In doing so, the [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) must be used to accept a CreateAttributeRequestItem, which is used in this context to request the creation of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with [Consent]({% link _docs_integrate/attribute-values.md %}#consent) as `value.@type`, if the Recipient persistently consents to the corresponding issue originating from the Sender.

If the Recipient does not want to agree to the issue that the Sender wants the Recipient to agree to, it can of course also reject the corresponding [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) by using the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters), as long as its value of the `mustBeAccepted` property is set to `false`, or [reject the incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) as a whole.
{: .notice--info}

Accepting the CreateAttributeRequestItem leads to the creation of the [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with Consent as `value.@type`. Technically, this is stored as the `content` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute). As the Recipient is the `owner` of the underlying RelationshipAttribute in the example studied, the LocalAttribute is also referred to as own shared RelationshipAttribute. Based on this, an appropriate AcceptResponseItem of type [CreateAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#createattributeacceptresponseitem) is generated, which incorporates the `id` of the created own shared RelationshipAttribute in its `attributeId` property. This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for persistent consent that will be transferred to the Sender.

### Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for persistent consent]({% link _docs_integrate/request-persistent-consent-of-peer.md %}#request-for-persistent-consent) of the Sender and in particular the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem), whose value of the `mustBeAccepted` property is set to `true` and which is used in the example studied to request the creation of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with Consent as `value.@type`. In order for the Sender to receive the Recipient's Response to the Request, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).

Please note that the required synchronization of both Identities can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).
{: .notice--info}

The accepted CreateAttributeRequestItem leads to the creation of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) for the Sender, a so-called peer shared RelationshipAttribute. Its `content` is given by the `attribute` specified within the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem), in other words by the [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with Consent as `value.@type`, which is owned by the Recipient. It represents the necessary counterpart to the Recipient's own shared RelationshipAttribute.

## What's next?

If an Identity asks for a one-time consent instead of a persistent consent of one of its peers, the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) can be used. It must be inserted into the `items` property of an appropriate [Request]({% link _docs_integrate/data-model-overview.md %}#request). Processing the ConsentRequestItem does not lead to the creation of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with Consent as `value.@type` in the background. For more details, the documentation of the [Requesting one-time consents]({% link _docs_integrate/requesting-one-time-consents.md %}) scenario can be consulted.
