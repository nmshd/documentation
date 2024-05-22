---
# Start automatic generation
permalink: integrate/request-one-time-consent-of-peer
redirect_from:
  - /integrate/requesting-one-time-consents
published: true
title: "Request one-time consent of peer"
type: scenario
toc: true
properties:
  - id: SC025
  - category: Request consent
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: request-one-time-consent-of-peer
require:
  - integrate/requests-via-relationshiptemplates
  - integrate/requests-via-messages
required_by:
# End automatic generation
---

With the ConsentRequestItem it is possible to request a consent of the peer to an arbitrary text and thus reach agreement on a certain non machine-processable context.

To request an accept-reject-decision from a peer to a free text, the ConsentRequestItem is used.

<!-- This include inserts the table with the metadata  -->

{% include properties_list.html %}

## Examples of consents {#consentrequestitem-examples}

- "I hereby confirm the login to the website."
- "I confirm my presence in the course."

Please do not use the ConsentRequestItem to submit tons of text to the peer Identity. It is meant to be a short consent or summary the user agrees to. Please move longer text to external websites.
The ConsentRequestItem is also not meant for contractual agreements.
{: .notice--info}

## Request for one-time consent

In the following, we describe how a Connector, hereinafter referred to as the Sender, can get the one-time consent of another Connector, the so-called Recipient, by using a [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) within a [Request]({% link _docs_integrate/data-model-overview.md %}#request).

### Check the Request's validity

At first you should check if your Request is valid. You can do this by calling the `POST /api/v2/Requests/Outgoing/Validate` route on the Sender Connector with the following body.
For the one-time consent request we use the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem).
Even though the `peer` property is optional, it is recommended to specify it whenever possible. This allows additional validation rules to execute. When you are sending a Request via Messages you always know your peer.
Please note that the `<...>` notation is used as a placeholder for the actual data as usual and that the `link` property of the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) is optional and can therefore also be omitted.
In our example, we have chosen to set the value of the `mustBeAccepted` property of the ConsentRequestItem to `true`.

```json
{
  "content": {
    "items": [
      {
        "@type": "ConsentRequestItem",
        "mustBeAccepted": true,
        "consent": "<issue that the Sender wants the Recipient to agree to>",
        "link": "<link to external website with more information on the issue>"
      }
    ]
  },
  "peer": "<Address of Recipient>"
}
```

### Create the Request

To create the Request you have to call the `POST /api/v2/Requests/Outgoing` route on the Sender Connector. Use the following JSON in the Request body:

```jsonc
{
  "content": {
    // the content property of the payload in the step before
  },
  "peer": "<Address of Recipient>"
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
        "@type": "ConsentRequestItem",
        "mustBeAccepted": true,
        "consent": "<issue that the Sender wants the Recipient to agree to>",
        "link": "<link to external website with more information on the issue>"
      }
    ]
  }
}
```

### Send the Request

There are two ways for the Sender to send the Request to the Recipient. Either when creating a [RelationshipTemplate]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) or with a contact who already has a Relationship, via a [Message]({% link _docs_integrate/requests-via-messages.md %}).

### Receive and accept the Request

In order to receive the [Message]({% link _docs_integrate/data-model-overview.md %}#message) that contains the [Request for one-time consent]({% link _docs_integrate/request-one-time-consent-of-peer.md %}#request-for-one-time-consent) as `content`, the Recipient must [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).
If the Recipient wants to accept the Request and in particular all its [ConsentRequestItems]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) for which the value of the `mustBeAccepted` property is set to `true`, it must proceed as described in the documentation of the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case. In doing so, the [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) must be used to accept a ConsentRequestItem if the Recipient give the Sender one-time consent to the corresponding issue originating from the Sender.

### Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for one-time consent]({% link _docs_integrate/request-one-time-consent-of-peer.md %}#request-for-one-time-consent) of the Sender and in particular the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem), whose value of the `mustBeAccepted` property is set to `true` and which is used in the example studied to request an one-time consent. In order for the Sender to receive the Recipient's Response to the Request, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).

Please note that the required synchronization of both Identities can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).
{: .notice--info}

The accepted ConsentRequestItem does not lead to the creation of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) as `content` for the Sender.

## What's next?

If an Identity asks for a persistent consent instead of a one-time consent of one of its peers, the ConsentRequestItem cannot be used. For persistent consent, it is necessary that the Identity sends a [Request]({% link _docs_integrate/data-model-overview.md %}#request) to its peer, which leads to the creation of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with [Consent]({% link _docs_integrate/attribute-values.md %}#consent) as `value.@type` in the background. For more details, the documentation of the [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) scenario can be consulted.
