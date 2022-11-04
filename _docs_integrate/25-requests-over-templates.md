---
title: "Requests over Templates"
permalink: /integrate/requests-over-templates
toc: true
---

This guide will explain the E2E flow of sharing and answering a Request over a Template. This is mostly done with one App and one Connector, but for simplicity and more transperancy we will use two Connectors. Therefore you have to start two Connectors that doesn't have a Relationship yet. You can use the [Connector Installation Guide]({% link _docs_integrate/10-connector-installation.md %}) if you need help for the setup.

On the first Connector you will create a Template. This Connector will be called Templator in the in the following steps. The second Connector is called Requestor, because it will create the Relationship and therefore it creates the `RelationshipCreationChangeRequest`.

## Check your Requests validity

Before you start with the Request over Template flow, you should check if your Request is valid. You can do this by calling the `POST /api/v2/Requests/Outgoing/Validate` route on the Templator Connector with the following body.
For simplicity the Request inside the Template only contains a AuthenticationRequestItem, but you can use any RequestItems you want.

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

## Create the Template

Create the Relationship Template on the Templators Connector. You can do so by calling the `POST /api/v2/RelationshipTemplates/Own` route. Use the following JSON in the Request body:

```jsonc
{
    "maxNumberOfAllocations": 1,
    "expiresAt": "2023-06-01T00:00:00.000Z",
    "content": {
        "@type": "RelationshipTemplateContent",
        "title": "Connector Demo Contact",
        "onNewRelationship": {
            // <the content validated in the step before>
        }
    }
}
```

You will receive a response with the complete RelationshipTemplate. In this guide we will only use the Templates truncated reference and its id. Thus make sure to save the `truncatedReference` and the `id` for the next steps.

```jsonc
{
    "id": "RLT..",
    // ...
    "truncatedReference": "UkxU..."
}
```

## Load the Template on the Requestor Connector

Now you have to load the Template on the Requestor Connector. You can do so by calling the `POST /api/v2/RelationshipTemplates/Peer` route with the following content. Use the truncated reference you copied before:

```jsonc
{
    "reference": "UkxU..."
}
```

If no Relationship exists this will trigger a process in the Request module. The Request module will create a new incoming Request on that we will work in the next step. You can observe this by long polling the incoming Requests or by waiting for the `consumption.incomingRequestReceived` event.

The long polling is done by calling the `GET /api/v2/Requests/Incoming` route. You can use the query params `source.reference=<id-of-the-template>` and `status=ManualDecisionRequired` to filter only for Requests that belong to the Template you are currently working on.

For more information about the events you can head over to the [Connector Modules site]({% link _docs_integrate/03-connector-modules.md %}) and read about the `AMQP Publisher` and the `WebhooksV2` module that are handling events.

If you got the Request save the `id` of the Request for the next step.

## Answer the Request

The rejection is explained before the acceptance because you can re-do it as often if you want. If you accept the Request a RelationshipRequest will be sent and no new Request will be created until the RelationshipRequest is answered. If it is accepted the Request module will recognize the existing Relationship and will also not create a new Request.

We therefore recommend to first reject the Request and then accept it if you want to test the full flow.

If there is no open RelationshipRequest or existing Relationship, you can trigger the creation of a new Request by [loading the Template again](#load-the-template-on-the-requestor-connector) with the same truncated reference.

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

You receive a Request in status `Decided`. This is where the Request module steps in and handles the Request based on you decision. Because you rejected the Request, the Request module will only move the Request to status completed. This behavior can be observed by querying the Request again after a short waiting time (`GET /api/v2/Requests/Incoming/{id}`).

### Accept

If you want to accept the Request you can do so by calling the `POST /api/v2/Requests/Incoming/{id}/Accept` route. You can use the `id` you saved in the previous step. In the payload you have to accept all RequestItems where the `mustBeAccepted` property is set to `true`. In case of the example Request the payload is the following:

```jsonc
{
    "items": [
        {
            "accept": true
        }
    ]
}
```

You receive a Request in status `Decided`. This is where the Request module steps in and handles the Request based on you decision. Because you accepted the Request, the Request module will send your Response to the Templator by creating a Relationship. This behavior can be observed by querying the Request again after a short waiting time (`GET /api/v2/Requests/Incoming/{id}`). When the Request is in status `Completed` you can query the created Relationship (`GET /api/v2/Relationships`, param `template.id=<id-of-the-template>`).

If you sync the Templator Connector you will see a new Relationship in the Response. The Relationship looks as follows:

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

Especially pay attention for the `changes.0.request.content` property that was generated by the Request module from your Response.

Now you can accept the Relationship by calling the `PUT /api/v2/Relationships/{relationshipId}/Changes/{changeId}/Accept` route. You can now sync the Requestor Connector and see that the Relationship is now in status `Active` on both Connectors.
