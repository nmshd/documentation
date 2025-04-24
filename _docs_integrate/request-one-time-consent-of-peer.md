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
  - category: Request Consent
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

This guide explains how an Identity can obtain the one-time consent of one of its peers on a particular issue using the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem). With the ConsentRequestItem it is possible to request the consent of a peer to an arbitrary text and thus reach agreement on a certain non-machine-processable context. The text for which the peer is asked for a one-time consent is specified in its `consent` property. To obtain a one-time consent, the Identity must send a [Request]({% link _docs_integrate/data-model-overview.md %}#request) to its peer that contains the corresponding ConsentRequestItem within its `items` property. The peer can accept or reject the ConsentRequestItem depending on whether or not the peer gives one-time consent to the text.

Since understanding the process of asking a peer for a one-time consent requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) in general, you should take a look at our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}) before continuing to read this guide. Further information on the [ConsentRequestItem]({% link _docs_integrate/request-and-response-introduction.md %}#consentrequestitem) can be found there as well.
{: .notice--info}

<!-- This include inserts the table with the metadata  -->

{% include properties_list.html %}

## Examples of consents

There are many situations in which an Identity needs or wants the one-time consent of one of its peers.
The corresponding text that the peer should agree to is contained within the `consent` property of a [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem), for example:

- "I confirm my attendance at the course."
- "By attending this event, I consent to being photographed."

The `consent` property of a [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) is not intended to be used by an Identity to send a lot of text to the peer.
Instead, it should contain a brief summary of the issue, which the peer should agree to.
Longer texts should be placed on external websites.
A link to such a website can be specified in the optional `link` property of the ConsentRequestItem.
Also note that the ConsentRequestItem should not be used for contractual agreements.

## Request for one-time consent

In the following, we describe how a Connector, hereinafter referred to as the Sender, can get the one-time consent of another Connector, with which it has already established a Relationship and which is also referred to as the Recipient. To do this, the Sender sends an appropriate [Request]({% link _docs_integrate/data-model-overview.md %}#request), which contains a [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) within its `items` property, to the Recipient.

The general procedure is the same if the Connector wants to obtain the one-time consent of an App user instead of another Connector. For reasons of clarity, this guide focuses on the process with two Connectors. For information on how to establish Relationships, refer to the [Establish Relationships]({% link _docs_integrate/establish-relationships.md %}) scenario documentation.
{: .notice--info}

As there is already a Relationship between the Sender and the Recipient, the Sender can send the [Request via a Message]({% link _docs_integrate/requests-via-messages.md %}) to the Recipient. Even if the Relationship has already been established, the Sender could also send the [Request via a RelationshipTemplate]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) to the Recipient, but this is not discussed further here.

Please note that if there is no active Relationship between the Sender and the Recipient, the Request for one-time consent must be sent via a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) instead of a [Message]({% link _docs_integrate/data-model-overview.md %}#message). The process of [establishing a Relationship]({% link _docs_integrate/establish-relationships.md %}) is then initiated at the same time.
{: .notice--info}

### Create the Request

As already indicated, the Request contains a [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) within its `items` property.
To create the Request, the Sender must proceed as described in the [Create outgoing Request]({% link _docs_use-cases/use-case-consumption-create-outgoing-request.md %}) use case, specifying a suitable payload as given in the example below.
In this example, the value of the `mustBeAccepted` property of the ConsentRequestItem is set to `true`.
Please note that the `<...>` notation is used as a placeholder for the actual data as usual and that the `link` property of the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) is optional and can therefore also be omitted.
In addition to the `link`, a `linkDisplayText` could optionally be specified, which would be displayed in the App instead of the URL of the `link`.

```jsonc
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
  "peer": "<address of Recipient>"
}
```

Before creating the Request, the Sender should check whether it is valid. This can be done by proceeding as described in the documentation of the [Check if outgoing Request can be created]({% link _docs_use-cases/use-case-consumption-check-if-outgoing-request-can-be-created.md %}) use case. The advantage of checking the validity of the Request first before attempting to create it is that the Sender will receive a more precise [error]({% link _docs_integrate/error-codes.md %}) description in the case of a faulty Request.
{: .notice--info}

### Send the Request

After the Request has been created, the Sender can send it to the Recipient. To send the [Request via a Message]({% link _docs_integrate/requests-via-messages.md %}), the Sender has to follow the instructions of the [Send a Message to the Recipient]({% link _docs_use-cases/use-case-transport-send-message-to-recipients.md %}) use case documentation. To continue the example, the following payload must be used by the Sender to send the [created Request]({% link _docs_integrate/request-one-time-consent-of-peer.md %}#create-the-request) to the Recipient via a Message. It is essential that the `id` of the Request is specified, which was generated after the Request was created by the Sender with the [Create outgoing Request]({% link _docs_use-cases/use-case-consumption-create-outgoing-request.md %}) use case. This enables the Request to be processed correctly by the Recipient.

```jsonc
{
  "recipients": ["<address of Recipient>"],
  "content": {
    "@type": "Request",
    "id": "<ID of Request>",
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

### Receive and accept the Request

In order to receive the [Message]({% link _docs_integrate/data-model-overview.md %}#message) that contains the [Request for one-time consent]({% link _docs_integrate/request-one-time-consent-of-peer.md %}#request-for-one-time-consent) as `content`, the Recipient must [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).
If the Recipient wants to accept the Request and in particular all its [ConsentRequestItems]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) for which the value of the `mustBeAccepted` property is set to `true`, it must proceed as described in the documentation of the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case.
In doing so, the [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) must be used to accept a ConsentRequestItem. If the Recipient gives the Sender one-time consent to an issue, it should accept the corresponding ConsentRequestItem.

If the Recipient does not want to agree to the issue that the Sender wants the Recipient to agree to, it can of course also reject the corresponding [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) by using the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters), as long as its value of the `mustBeAccepted` property is set to `false`, or [reject the incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) as a whole.
{: .notice--info}

Accepting the ConsentRequestItem leads to the creation of an [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem). This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for one-time consent that will be transferred to the Sender.

### Receive the Response to the Request

We now assume that the Recipient has accepted the [Request for one-time consent]({% link _docs_integrate/request-one-time-consent-of-peer.md %}#request-for-one-time-consent) of the Sender and in particular the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem), whose value of the `mustBeAccepted` property is set to `true` and which is used in the example studied to request a one-time consent. In order for the Sender to receive the Recipient's Response to the Request, it needs to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}). The Sender is then informed whether or not the Recipient has given one-time consent to the issue originating from the Sender.

Please note that the required synchronization of both Identities can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).
{: .notice--info}

## What's next?

If an Identity asks for a persistent consent instead of a one-time consent of one of its peers, the ConsentRequestItem cannot be used. For persistent consent, it is necessary that the Identity sends a [Request]({% link _docs_integrate/data-model-overview.md %}#request) to its peer, which leads to the creation of a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with [Consent]({% link _docs_integrate/attribute-values.md %}#consent) as `value.@type`. For more details, the documentation of the [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) scenario can be consulted.
