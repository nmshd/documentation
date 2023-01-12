---
title: "Requests over Messages"
permalink: /integrate/requests-over-messages
toc: true
---

This guide assumes that you already have an active Relationship between two Connectors. If you don't, you should follow the [Requests over Templates]({% link _docs_integrate/25-requests-over-templates.md %}) guide first. If you created a Relationship during the [Connector Tutorial]({% link _docs_integrate/01-connector-tutorial.md %}) this will also work.

In this guide, the first Connector will be called Sender and the second Connector will be called Recipient. The Sender will send a Request to the Recipient. For the next steps you will need the Enmeshed Address of the Recipient. You can find it out by calling the `GET /api/v2/Relationships` route on the Sender Connector.

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

{% include copy-notice description="Look for the correct Relationship and then take its `peer` property. Save it for later." %}

## Check your Requests validity

At first you should check if your Request is valid. You can do this by calling the `POST /api/v2/Requests/Outgoing/Validate` route on the Sender Connector with the following body.
For simplicity the Request inside the Template only contains an AuthenticationRequestItem, but you can use any [RequestItems]({% link _docs_explore/63-request-items.md %}) you want.

Even though the `peer` property is optional, it is recommended to specify it whenever possible. This allows additional validation rules to execute. When you are sending a Request over Messages you always know your peer.

```json
{
  "content": {
    "items": [
      {
        "@type": "AuthenticationRequestItem",
        "mustBeAccepted": true,
        "title": "The Sender is asking for an authentication"
      }
    ]
  },
  "peer": "<the address of the Recipient Connector>"
}
```

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

{% include copy-notice description="Save the complete `content` of the response. You will need it in the next step." %}

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

## Send the Request

Now you have to send the Request to the Recipient. You can do so by calling the `POST /api/v2/Messages` route on the Sender Connector. Use the following JSON in the Request body:

```jsonc
{
  "recipients": ["<the address of the Recipient Connector>"],
  "content": {
    // the content you copied in the step before
  }
}
```

This is where the automation of the Enmeshed Runtime steps in and moves the Request from status `Draft` to status `Open`. You can observe this behaviour by querying the Request via `GET /api/v2/Requests/Outgoing/{id}` on the Sender Connector.

## Fetch the Request

In order to fetch the Message with the Request, you have to synchronize the Recipient Connector (`GET /api/v2/Account/Sync`).

The Enmeshed Runtime will read the Message and create a new incoming Request. You can observe this by long polling the incoming Requests or by waiting for the `consumption.incomingRequestReceived` event.

The long polling is done by calling the `GET /api/v2/Requests/Incoming` route. You can use the query params `source.reference=<id-of-the-message>` and `status=ManualDecisionRequired` to filter for Requests that belong to the Message that contained the Request.

For more information about the events you can head over to the [Connector Modules site]({% link _docs_integrate/03-connector-modules.md %}) and read about the [AMQP Publisher module]({% link _docs_integrate/03-connector-modules.md %}#amqppublisher) and the [WebhooksV2 module]({% link _docs_integrate/03-connector-modules.md %}#webhooksv2) that are propagating events.

{% include copy-notice description="After you received the Request, save its `id` for the next step." %}

## Answer the Request

### Accept

If you want to accept the Request you can do so by calling the `POST /api/v2/Requests/Incoming/{id}/Accept` route. You can use the `id` you saved in the previous step. In the payload you have to accept at least all RequestItems where the `mustBeAccepted` property is set to `true`. In case of the example Request the payload is the following:

```jsonc
{
  "items": [
    {
      "accept": true
    }
  ]
}
```

### Reject

If you want to reject the Request you can do so by calling the `POST /api/v2/Requests/Incoming/{id}/Reject` route. You can use the `id` you saved in the previous step. In the payload you have to reject all RequestItems. In case of the example Request the payload is the following:

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

No matter if you accepted or rejected the Request: the response is similar. You can see that the Request moved to status `Decided`. This is where the Enmeshed Runtime steps in and handles the Request based on you decision. It will move the Request to status `Completed` and send the Response to the Sender via a Message. This behavior can be observed by querying the Request again after a few seconds (`GET /api/v2/Requests/Incoming/{id}`).

## Sync the Response

The Sender will receive the Response as a Message. Therefore you have to synchronize the Sender Connector (`GET /api/v2/Account/Sync`).

After a few seconds the Request has moved to status `Completed` and the Response is available in the `response` property of the Request. You can observe this by querying the Request via `GET /api/v2/Requests/Outgoing/{id}` on the Sender Connector.
