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

## Create the Request for persistent consent

In the following, we describe how a Connector, hereinafter referred to as the Sender, can create a RelationshipAttribute with Consent as `value.@type` for a Relationship to another Connector, the so-called Recipient, by sending a Request. The Recipient should be the `owner` of the RelationshipAttribute. We assume that it contains a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) within its `items` property.

### Check the Request's validity

At first you should check if your Request is valid. You can do this by calling the `POST /api/v2/Requests/Outgoing/Validate` route on the Sender Connector with the following body.

```json
{
  "content": {
    "@type": "Request",
    "items": [
      {
        "@type": "ProposeAttributeRequestItem",
        "mustBeAccepted": true,
        "attribute": {
          "@type": "RelationshipAttribute",
          "key": "MyConsent",
          "owner": "",
          "confidentiality": "private",
          "value": {
            "@type": "Consent",
            "consent": "I hereby confirm that I have read the privacy terms of this cloud service and agree to them."
          }
        },
        "query": {
          "@type": "RelationshipAttributeQuery",
          "key": "MyConsent",
          "owner": "",
          "attributeCreationHints": {
            "title": "consent to content",
            "valueType": "Consent",
            "confidentiality": "private"
          }
        }
      }
    ]
  }
}
```

### Create the Request for persistent consent

To create the Request you have to call the `POST /api/v2/Messages` route on the Sender Connector, with the content property of the payload in the step before. Use the following JSON in the body:

```jsonc
{
  "recipients": ["<the address of the Recipient Connector>"],
  "content": {
    "@type": "Request",
    "items": [
      {
        "@type": "ProposeAttributeRequestItem",
        "mustBeAccepted": true,
        "attribute": {
          "@type": "RelationshipAttribute",
          "key": "MyConsent",
          "owner": "<the address of the Recipient Connector>",
          "confidentiality": "private",
          "value": {
            "@type": "Consent",
            "consent": "I hereby confirm that I have read the privacy terms of this cloud service and agree to them."
          }
        },
        "query": {
          "@type": "RelationshipAttributeQuery",
          "key": "MyConsent",
          "owner": "<the address of the Recipient Connector>",
          "attributeCreationHints": {
            "title": "consent to content",
            "valueType": "Consent",
            "confidentiality": "private"
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
"items": [
  {
    "@type": "ProposeAttributeAcceptResponseItem",
    "attribute": {
      "@type": "RelationshipAttribute",
      "confidentiality": "private",
      "isTechnical": false,
      "key": "MyConsent",
      "owner": "<the address of the Recipient Connector>",
      "value": {
        "@type": "Consent",
        "consent": "I hereby confirm that I have read the privacy terms of this cloud service and agree to them."
      }
    },
    "attributeId": "ATT...",
    "result": "Accepted"
  }
],
"requestId": "REQ...",
"result": "Accepted"
```

## What's next?

If an Identity asks for a one-time consent instead of a persistent consent of one of its peers, the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) can be used. It must be inserted into the `items` property of an appropriate [Request]({% link _docs_integrate/data-model-overview.md %}#request). Processing the ConsentRequestItem does not lead to the creation of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with Consent as `value.@type` in the background. For more details, the documentation of the [Requesting one-time consents]({% link _docs_integrate/requesting-one-time-consents.md %}) scenario can be consulted.
