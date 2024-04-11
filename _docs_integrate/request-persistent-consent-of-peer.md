---
# Start automatic generation
permalink: integrate/request-persistent-consent-of-peer
published: true
title: "Request persistent consent of peer"
type: scenario
toc: true
properties:
  - id: SC027
  - category: Requesting consent of users
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: request-persistent-consent-of-peer
require:
  - integrate/requests-over-templates
  - integrate/requests-over-messages
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

The `consent` property of a Consent is not intended to be used by an Identity to send tons of text to the peer. Instead, it should contain a brief summary of the issue, which the peer should agree with. Longer texts should be placed on external websites. A link to such a website can be specified in the optional `link` property of the Consent. Also note that the Consent should not be used for contractual agreements.

## Request for persistent consent

In the following, we describe how a Connector, hereinafter referred to as the Sender, can create a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with [Consent]({% link _docs_integrate/attribute-values.md %}#consent) as `value.@type` for a Relationship to another Connector, the so-called Recipient, by sending a [Request]({% link _docs_integrate/data-model-overview.md %}#request). As there is already a Relationship between the Sender and the Recipient, the Sender can send the [Request via a Message]({% link _docs_integrate/requests-over-messages.md %}) to the Recipient. Note that the Sender could also send the [Request via a RelationshipTemplate]({% link _docs_integrate/requests-over-templates.md %}), but this is not discussed further below.

### Create the Request

We assume that the Request contains a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) within its `items` property. The RelationshipAttribute to be created must be inserted into the `attribute` property of the CreateAttributeRequestItem. The RelationshipAttribute should be owned by the Recipient, which is why an empty string is specified for its `owner`. For creating the Request, we proceed as described in the [create outgoing Request]({% link _docs_use-cases/use-case-consumption-create-outgoing-request.md %}) use case. Please note that the `<...>` notation is used as a placeholder for the actual data as usual and that the `link` property of the [Consent]({% link _docs_integrate/attribute-values.md %}#consent) is optional and can therefore be omitted.

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
  }
}
```

At first the Sender should check if the Request is valid. This can be done by proceeding as described in the documentation of the [Check if outgoing Request can be created]({% link _docs_use-cases/use-case-consumption-check-if-outgoing-request-can-be-created.md %}) use case.
{: .notice--info}

### Send the Request

After the Sender has created the Request, it can send it to the Recipient. To send the [Request via a Message]({% link _docs_integrate/requests-over-messages.md %}), the Sender have to follow the instructions of the [Send a Message to the Recipient]({% link _docs_use-cases/use-case-transport-send-message-to-recipients.md %}) use case documentation, using the Request specified in the `content` property of the payload in the step before. Use the following JSON payload in the body:

```jsonc
{
  "recipients": ["<Address of Recipient>"],
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
  }
}
```

Note that the Request is currently in status `Draft`.

**Example accepted response:**

```jsonc
{
  "requestId": "REQ...",
  "result": "Accepted"
  "items": [
    {
      "@type": "CreateAttributeAcceptResponseItem",
      "result": "Accepted",
      "attributeId": "ATT..."
    }
  ]
}
```

## What's next?

If an Identity asks for a one-time consent instead of a persistent consent of one of its peers, the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) can be used. It must be inserted into the `items` property of an appropriate [Request]({% link _docs_integrate/data-model-overview.md %}#request). Processing the ConsentRequestItem does not lead to the creation of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with Consent as `value.@type` in the background. For more details, the documentation of the [Requesting one-time consents]({% link _docs_integrate/requesting-one-time-consents.md %}) scenario can be consulted.
