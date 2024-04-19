---
# Start automatic generation
permalink: integrate/requests-via-messages
redirect_from:
  - /integrate/requests-over-messages
published: true
title: "Requests via Messages"
type: scenario
toc: true
properties:
  - id: SC060
  - category: Work with Requests
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: OLD
  - published: true
  - link: requests-via-messages
require:
  - integrate/requests-via-relationshiptemplates
required_by:
  - integrate/request-one-time-consent-of-peer
  - integrate/request-persistent-consent-of-peer
  - integrate/request-authentication
# End automatic generation
---

This guide explains how to send and receive a [Request]({% link _docs_integrate/data-model-overview.md %}#request) over [enmeshed Messages]({% link _docs_integrate/data-model-overview.md %}#message) using two Connectors.
The first of them, which we will refer to as the Sender, will send the Request.
The second, which we will refer to as the Recipient, can decide, whether they want to accept or reject the Request.
We'll go through the steps of validating and creating the Request, sending and receiving it, and finally accepting or rejecting the Request.

This guide assumes that you already have an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the two Connectors, e.g. from following the [Integration Example]({% link _docs_integrate/integration-example.md %}) or the scenario page [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}).
If that is not the case, either take a look at those guides first or follow the instructions of how to [establish a Relationship]({% link _docs_integrate/establish-relationships.md %}) to another Identity.

In order to send a Message to the Recipient, it is required to know their enmeshed Address.
To retrieve it, the Sender can [query their Relationships]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) and look for the right one.

```jsonc
[
  // ...
  {
    "id": "REL..",
    "status": "Active",
    // ...
    "peer": "id1..."
  }
]
```

{% include copy-notice description="Look for the correct Relationship and save its `peer` property. You are going to need it later." %}

## Check your Request's validity

Firstly, you should [check if your Request is valid]({% link _docs_use-cases/use-case-consumption-check-if-outgoing-request-can-be-created.md %}).
As an example, we use a Request with just an [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem), but you can use any Request you want.
For an overview of the available [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems), check out our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}).

Even though the `peer` property is optional, it is recommended to specify it whenever possible.
This allows additional validation rules to execute.
If you are sending a Request via Message, you'll always know the peer, as it is the `recipient` of the Message.

```json
{
  "content": {
    "items": [
      {
        "@type": "AuthenticationRequestItem",
        "mustBeAccepted": true,
        "title": "The Sender is asking for an authentication."
      }
    ]
  },
  "peer": "<Address of Recipient>"
}
```

## Create the Request

If the previous step was successful, you can [create the Request]({% link _docs_use-cases/use-case-consumption-create-outgoing-request.md %}).
For this, use the same payload you just validated.

In the response, you can see that the Request currently has the `status` `"Draft"`.
Also, note that the `content` was extented by the `@type` property and a generated `id`, that you didn't have to specify manually.

**Example response:**

```jsonc
{
  "id": "REQ...",
  "isOwn": true,
  "peer": "<Address of Recipient>",
  "createdAt": "<time of creation>",
  "content": {
    "@type": "Request",
    "id": "REQ...",
    "items": [
      {
        "@type": "AuthenticationRequestItem",
        "mustBeAccepted": true,
        "title": "The Sender is asking for an authentication."
      }
    ]
  },
  "status": "Draft"
}
```

{% include copy-notice description="Save the complete `content` of the response. You will need it in the next step." %}

## Send the Request

Now let's transmit the Request to the Recipient.
To do so, [send a Message]({% link _docs_use-cases/use-case-transport-send-message-to-recipients.md %}) using the following payload and make sure to use the `content` you copied from the response, which has the `@type` property.
This is important for the Request to be processed correctly, since it is possible to send different types of objects via [Message]({% link _docs_integrate/data-model-overview.md %}#message).

```jsonc
{
  "recipients": ["<Address of Recipient>"],
  "content": {
    // the content you copied from the response in the step before
  }
}
```

This is where the automation of the [enmeshed Runtime]({% link _docs_explore/61-runtime.md %}) steps in and moves the Request from `status` `"Draft"` to `status` `"Open"`.
You can observe this behaviour by [querying the Request]({% link _docs_use-cases/use-case-consumption-get-outgoing-request.md %}) on the Sender Connector.

## Fetch the Request

In order to fetch the Message with the Request, you have to [synchronize the Recipient Connector]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).
The enmeshed Runtime will read the Message and create a new incoming Request.
You can observe this by [long polling the incoming Requests]({% link _docs_use-cases/use-case-consumption-query-incoming-requests.md %}) and optionally use the query parameters `source.reference=<ID of the Message>` and `status=ManualDecisionRequired` to filter for Requests that belong to the Message that contained the Request.

In a productive environment, however, we recommend using the [Sync module]({% link _docs_operate/modules.md %}#sync) and waiting for a `consumption.incomingRequestReceived` [Connector Event]({% link _docs_integrate/connector-events.md %}).
To learn more about events, how to use them in the context of enmeshed and which [modules]({% link _docs_operate/modules.md %}) are supported by enmeshed to help you automating your business process, check out our [Event introduction]({% link _docs_integrate/event-introduction.md %}).

{% include copy-notice description="After you received the Request, save its `id` for the next step." %}

## Answer the Request

### Accept

Firstly, let's consider the case the Recipient wants to [accept the Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}).
For this, use the `id` of the Request you saved in the previous step.
In the payload you have to accept at least all RequestItems where the `mustBeAccepted` property is set to `true`.
In case of the example Request, the payload is the following:

```jsonc
{
  "items": [
    {
      "accept": true
    }
  ]
}
```

Note that if you have multiple [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) or [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup), they must be accepted in the exact order they were specified in in the [Request]({% link _docs_integrate/data-model-overview.md %}#request).

### Reject

Now, let's consider the case the Recipient wants to [reject the Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}).
For this, use the `id` of the Request you saved in the previous step.
In the payload you have to reject all RequestItems.
In case of the example Request, the payload is the following:

```jsonc
{
  "items": [
    {
      "accept": false
    }
  ]
}
```

### Runtime automation

No matter if you accepted or rejected the Request, the response will be similar.
You can see that the Request moved to `status` `"Decided"`.
This is where the enmeshed Runtime steps in and handles the Request based on your decision.
It will send the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Sender via a Message and move the Request to `status` `"Completed"` .
This behavior can be observed by [querying the Request]({% link _docs_use-cases/use-case-consumption-get-incoming-request.md %}) again after a few seconds.

## Sync the Response

The Sender will receive the Response via a Message.
For this, you have to [synchronize the Sender Connector]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).

After a few seconds the Request has moved to `status` `"Completed"` and the Response is available in the `response` property of the Request.
You can observe this by [querying the Request]({% link _docs_use-cases/use-case-consumption-get-outgoing-request.md %}) on the Sender Connector.
