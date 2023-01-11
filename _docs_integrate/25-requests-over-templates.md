---
title: "Requests over Templates"
permalink: /integrate/requests-over-templates
toc: true
---

This guide will explain the end to end flow of sharing and answering a [Request]({% link _docs_explore/62-data-model.md %}#request) over a Template. This flow usually happens between the App and a Connector, but for simplicity and more transparency we will use two Connectors. Therefore you have to start two Connectors that don't have a Relationship yet.

You can use the [Connector Installation Guide]({% link _docs_integrate/10-connector-installation.md %}) if you need help for the setup the Connectors.

On the first Connector you will create a Template. This Connector will be called Templator in the in the following steps. The second Connector is called Requestor, because it will create the Relationship and therefore it creates the `RelationshipCreationChangeRequest`.

## Check your Request's validity

At first you should check if your Request is valid. You can do this by calling the `POST /api/v2/Requests/Outgoing/Validate` route on the Templator Connector with the following body.
For simplicity the Request inside the Template only contains an AuthenticationRequestItem, but you can use any [RequestItems]({% link _docs_explore/63-request-items.md %}) you want.

```json
{
  "content": {
    "items": [
      {
        "@type": "AuthenticationRequestItem",
        "mustBeAccepted": true,
        "title": "The templator is asking for an authentication"
      }
    ]
  }
}
```

Even though the Requests are validated during the RelationshipTemplate creation you should not skip this step as it gives you additional information in case of validation errors.
{: .notice--info}

## Create the Template

Create the Relationship Template on the Templator's Connector. You can do so by calling the `POST /api/v2/RelationshipTemplates/Own` route. Use the following JSON in the Request body:

```jsonc
{
  "maxNumberOfAllocations": 1,
  "expiresAt": "2023-06-01T00:00:00.000Z",
  "content": {
    "@type": "RelationshipTemplateContent",
    "title": "Connector Demo Contact",
    "onNewRelationship": {
      // the content property of the payload in the step before
    }
  }
}
```

You will receive a response with the complete RelationshipTemplate.

{% include copy-notice description="Save the `truncatedReference` and the `id` of the RelationshipTemplate. You will need them in the next steps." %}

```jsonc
{
  "id": "RLT..",
  // ...
  "truncatedReference": "UkxU..."
}
```

## Load the Template and get the Request

Now you have to load the Template on the Requestor Connector. You can do so by calling the `POST /api/v2/RelationshipTemplates/Peer` route with the following content. Use the `truncatedReference` you copied before:

```jsonc
{
  "reference": "UkxU..."
}
```

If no Relationship exists, this will trigger a process in the Enmeshed Runtime. It will create a new incoming Request on which we will work in the next step. You can observe this by long polling the incoming Requests or by waiting for the `consumption.incomingRequestReceived` event.

The long polling is done by calling the `GET /api/v2/Requests/Incoming` route. You can use the query params `source.reference=<id-of-the-template>` and `status=ManualDecisionRequired` to filter for Requests that belong to the Template you are currently working on.

For more information about the events you can head over to the [Connector Modules site]({% link _docs_integrate/03-connector-modules.md %}) and read about the [AMQP Publisher module]({% link _docs_integrate/03-connector-modules.md %}#amqppublisher) and the [WebhooksV2 module]({% link _docs_integrate/03-connector-modules.md %}#webhooksv2) that are propagating events.

{% include copy-notice description="After you received the Request, save its `id` for the next step." %}

## Answer the Request

The rejection is explained before the acceptance because you can re-do it as often if you want. If you accept the Request a RelationshipRequest will be sent and no new Request will be created until the RelationshipRequest is answered. If the RelationshipRequest is accepted the Enmeshed Runtime will recognize the existing Relationship and will also not create a new Request.

So if you want to test the full flow, you should first reject the Request. After that you can create a new one, which you can accept.

If there is no open RelationshipRequest or existing Relationship, you can trigger the creation of a new Request by [loading the Template again](#load-the-template-and-get-the-request) with the same truncated reference.

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

In the response you can see the Request has moved to status `Decided`. This is where the Enmeshed Runtime steps in and handles the Request based on you decision. Because you rejected the Request, the Enmeshed Runtime will only move the Request to status completed. This behavior can be observed by querying the Request again after a few seconds (`GET /api/v2/Requests/Incoming/{id}`).

### Accept

If you tried out the Rejection before this step make sure to create a Request by [loading the Template again](#load-the-template-and-get-the-request) with the same truncated reference.

If you want to accept the Request you can do so by calling the `POST /api/v2/Requests/Incoming/{id}/Accept` route. You can use the `id` you saved in the [template loading](#load-the-template-and-get-the-request) step. In the payload you have to accept at least all RequestItems where the `mustBeAccepted` property is set to `true`. In case of the example Request the payload is the following:

```jsonc
{
  "items": [
    {
      "accept": true
    }
  ]
}
```

In the response you can see the Request has moved to status `Decided`. This is where the Enmeshed Runtime steps in and handles the Request based on you decision. Because you accepted the Request, the Enmeshed Runtime will send your Response to the Templator by creating a Relationship. This behavior can be observed by querying the Request again after a few seconds (`GET /api/v2/Requests/Incoming/{id}`). When the Request is in status `Completed` you can query the created Relationship (`GET /api/v2/Relationships`, query parameter `template.id=<id-of-the-template>`).

If you synchronize the Templator Connector (`POST /api/v2/Account/Sync`) you will see a new Relationship in the response. The Relationship looks as follows:

```jsonc
{
  "id": "REL...",
  "template": {
    // ...
  },
  "status": "Active",
  "peer": "id1...",
  // ...
  "changes": [
    {
      "id": "RCH...",
      "request": {
        "createdBy": "id1...",
        "createdByDevice": "DVC...",
        "createdAt": "2022-11-04T13:31:01.360Z",
        "content": {
          "@type": "RelationshipCreationChangeRequestContent",
          "response": {
            "items": [
              {
                "@type": "AcceptResponseItem",
                "result": "Accepted"
              }
            ],
            "requestId": "REQ...",
            "result": "Accepted"
          }
        }
      },
      "status": "Accepted",
      "type": "Creation"
      // ...
    }
  ]
}
```

Pay particular attention to the `changes.0.request.content` property that contains the Response that was generated by the Enmeshed Runtime.

Now you can accept the Relationship on the Templator Connector by calling the `PUT /api/v2/Relationships/{relationshipId}/Changes/{changeId}/Accept` route.

When you synchronize the Requestor Connector (`POST /api/v2/Account/Sync`) you can see that the Relationship is now in status `Active` on both Connectors.
