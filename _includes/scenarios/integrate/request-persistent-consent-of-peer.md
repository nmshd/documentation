<!-- A general description of the requirement can be given here. -->

Here is an explanation of how to obtain a person's persistent consent on a particular topic

To request an accept/reject decision from a peer to a free text, the ConsentRequestItem is used.

Represents the consent of a person to a specific topic. If you want to obtain a consent, you can send a [`ProposeAttributeRequestItem`]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem) [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with a [Consent]({% link _docs_integrate/attribute-values.md %}#consent) value where the owner is the peer.

<!-- This include inserts the table with the metadata  -->

{% include properties_list.html %}

<!-- here is the description in detail  -->

## Examples {#consentrequestitem-examples}

- "I hereby confirm that I have read the privacy terms of this cloud service and agree to them."
- "The provided EULA has been read and agreed to."
- "Yes, I have backed up all of my data of this PC and you can wipe it."
- "I opt in to the newsletter."

Please do not use the Consent to submit tons of text to the peer Identity. It is meant to be a short consent or summary the user agrees to. Please move longer text to external websites.
The Consent is also not meant for contractual agreements.
{: .notice--info}

## Check your Requests validity

At first you should check if your Request is valid. You can do this by calling the `POST /api/v2/Requests/Outgoing/Validate` route on the Sender Connector with the following body.
For the persistent consent request we use the [ProposeAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#proposeattributerequestitem).

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

## Create the Request

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
