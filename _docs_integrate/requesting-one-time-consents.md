---
# Start automatic generation
permalink: integrate/requesting-one-time-consents
published: true
title: "Requesting one-time consents"
type: scenario
toc: true
properties:
  - id: SC025
  - category: Requesting consent of users
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: requesting-one-time-consents
require:
  - integrate/requests-over-templates
  - integrate/requests-over-messages
required_by:
# End automatic generation
---

<!-- A general description of the requirement can be given here. -->

With the ConsentRequest it is possible to request a consent of the peer to an arbitrary text and thus reach agreement on a certain non machine-processable context.

To request an accept/reject decision from a peer to a free text, the ConsentRequestItem is used.

<!-- This include inserts the table with the metadata  -->

{% include properties_list.html %}

<!-- here is the description in detail  -->

## Check your Requests validity

At first you should check if your Request is valid. You can do this by calling the `POST /api/v2/Requests/Outgoing/Validate` route on the Sender Connector with the following body.
For the one-time consent request we use the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem).
Even though the `peer` property is optional, it is recommended to specify it whenever possible. This allows additional validation rules to execute. When you are sending a Request over Messages you always know your peer.

```json
{
  "content": {
    "items": [
      {
        "@type": "ConsentRequestItem",
        "mustBeAccepted": true,
        "title": "The Sender is asking for an one time consent",
        "consent": "I hereby confirm that I have read the privacy terms of this cloud service and agree to them.",
        "link": "privacy.demo"
      }
    ]
  },
  "peer": "<the address of the Recipient Connector>"
}
```

### Examples {#consentrequestitem-examples}

- "I hereby confirm the login to the website"
- "I confirm my presence in the course"

Please do not use the ConsentRequest to submit tons of text to the peer Identity. It is meant to be a short consent or summary the user agrees to. Please move longer text to external websites.
The ConsentRequest is also not meant for contractual agreements.
{: .notice--info}

## Create the Request

To create the Request you have to call the `POST /api/v2/Requests/Outgoing` route on the Sender Connector. Use the following JSON in the Request body:

```jsonc
{
  "content": {
    // the content property of the payload in the step before
  },
  "peer": "<the address of the Recipient Connector>"
}
```

Note that the Request is currently in status `Draft`.

{% include copy-notice description="Save the complete `content` of the response. You will need it in the sending Request step." %}

**Example response:**

```jsonc
{
  "id": "REQ...",
  "status": "Draft",
  // ...
  "content": {
    "@type": "Request",
    "id": "REQ...",
    "items": [
      {
        "@type": "AuthenticationRequestItem",
        "mustBeAccepted": true,
        "title": "The Sender is asking for an authentication"
      }
    ]
  }
}
```

## Sending Request

There are 2 ways to send the request to the user. Either when creating a [RelationshipTemplate]({% link _docs_integrate/requests-over-templates.md %}) or with a contact who already has a relationship, via a [message]({% link _docs_integrate/requests-over-messages.md %}).
