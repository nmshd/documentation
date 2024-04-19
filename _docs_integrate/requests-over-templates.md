---
# Start automatic generation
permalink: integrate/requests-over-templates
redirect_from:
  - /integrate/requests-over-templates
published: true
title: "Requests over Templates"
type: scenario
toc: true
properties:
  - id: SC059
  - category: Work with Requests
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: OLD
  - published: true
  - link: requests-over-templates
require:
required_by:
  - integrate/request-one-time-consent-of-peer
  - integrate/request-persistent-consent-of-peer
  - integrate/request-authentication
  - integrate/requests-over-messages
# End automatic generation
---

This guide will explain the end-to-end flow of sharing and answering a [Request]({% link _docs_integrate/data-model-overview.md %}#request) via a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
Usually, this flow happens between a [Connector]({% link _docs_explore/52-connector.md %}) and the [App]({% link _docs_explore/50-app.md %}), but for simplicity and more transparency we will use two Connectors in this example.
Thus, you'll need two Connectors, that either already have a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with each other or not yet.

You can use the [Connector Installation Guide]({% link _docs_operate/setup-with-docker-compose.md %}) if you need help setting up the Connectors.

On the first Connector, which we will refer to as the Sender, you will create the Request and the RelationshipTemplate.
The second Connector, which we will refer to as the Recipient, will receive the RelationshipTemplate and respond to the Request.

## Check your Request's validity

Firstly, you should [check if your Request is valid]({% link _docs_use-cases/use-case-consumption-check-if-outgoing-request-can-be-created.md %}).
As an example, we use a Request with just an [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem), but you can use any Request you want.
For an overview of the available [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems), check out our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}).

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
  }
}
```

Even though the Requests are validated during the RelationshipTemplate creation you should not skip this step as it gives you additional information in case of validation errors.
{: .notice--info}

## Create the RelationshipTemplate

Next, [create a RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-own-relationshiptemplate.md %}) on the Sender Connector, using a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent).
If there is no Relationship between the Connectors, yet, you must put the `content` property of the payload of the previous step in the `onNewRelationship` property of the RelationshipTemplateContent.
However, if the Connectors already have a Relationship with each other, you must put it in the `onExistingRelationship` property of the `RelationshipTemplateContent`.
But note, that the `onNewRelationship` property is required and must, therefore, always be set.

```jsonc
{
  "maxNumberOfAllocations": 1,
  "expiresAt": "2025-01-01T00:00:00.000Z",
  "content": {
    "@type": "RelationshipTemplateContent",
    "title": "Requests via RelationshipTemplates example",
    "onNewRelationship": {
      // the content property of the payload of the previous step,
      // if the Connectors don't have a Relationship with each other, yet
      ...
    },
    "onExistingRelationship": {
      // the content property of the payload of the previous step,
      // if the Connectors already have a Relationship with each other
      ...
    }
  }
}
```

You will receive a response with the complete RelationshipTemplate.

```jsonc
{
  "id": "RLT..",
  // ...
  "truncatedReference": "UkxU..."
}
```

{% include copy-notice description="Save the `truncatedReference` and the `id` of the RelationshipTemplate. You will need them in the next steps." %}

## Load the RelationshipTemplate and get the Request

Now you have to [load the RelationshipTemplate on the Recipient Connector]({% link _docs_use-cases/use-case-transport-load-relationship-template-created-by-others.md %}) using the following payload:

```jsonc
{
  "reference": "<truncated reference of RelationshipTemplate>"
}
```

This will trigger a process in the [enmeshed Runtime]({% link _docs_explore/61-runtime.md %}), which will create a new incoming Request.
You can observe this by [long polling the incoming Requests]({% link _docs_use-cases/use-case-consumption-query-incoming-requests.md %}) and optionally use the query parameters `source.reference=<ID of the RelationshipTemplate>` and `status=ManualDecisionRequired` to filter for Requests that belong to the RelationshipTemplate you are currently working on.

In a productive environment, however, we recommend using the [Sync module]({% link _docs_operate/modules.md %}#sync) and waiting for a `consumption.incomingRequestReceived` [Connector Event]({% link _docs_integrate/connector-events.md %}).
To learn more about events, how to use them in the context of enmeshed and which [modules]({% link _docs_operate/modules.md %}) are supported by enmeshed to help you automating your business process, check out our [Event introduction]({% link _docs_integrate/event-introduction.md %}).

{% include copy-notice description="After you received the Request, save its `id` for the next step." %}

## Answer the Request

If you want to test the full flow, we recommend to reject the Request first.
Afterwards, you can create a new one by [loading the RelationshipTemplate](#load-the-relationshiptemplate-and-get-the-request) again and accept it.

### Reject

Let's consider the case the Recipient wants to [reject the Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}).
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

In the response you can see that the Request has moved to `status` `"Decided"`.
This is where the enmeshed Runtime steps in and handles the Request based on your decision.
It creates a [Response]({% link _docs_integrate/data-model-overview.md %}#response) with the appropriate [RejectResponseItems]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) and returns it to the Sender of the Request.
Then, it will move the Request to `status` `"Completed"`.
This can be observed by [querying the Request]({% link _docs_use-cases/use-case-consumption-get-incoming-request.md %}) again after a few seconds.

### Accept

If you tried out the rejection before this step, make sure to create a new Request by [loading the RelationshipTemplate](#load-the-relationshiptemplate-and-get-the-request) again with the same `truncatedReference`.

To [accept the Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}), you need its `id` that you saved in a previous step.
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

In the response you can see the Request has moved to `status` `"Decided"`.
This behavior can be observed by [querying the Request]({% link _docs_use-cases/use-case-consumption-get-incoming-request.md %}) again after a few seconds.
Now, the enmeshed Runtime steps in and handles the Request based on your decision.
The Response is created with the appropriate ResponseItems.

If there is already an active Relationship between the Connectors, the Response will be sent back to the Sender via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) and the Request will move to `status` `"Completed"`.
The Sender, then, can fetch it by [synchronizing the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).

However, if there is no active Relationship between the Connectors, yet, a Relationship will be created, which has the `status` `"Pending"` for now.
It contains a [RelationshipChangeRequest]({% link _docs_integrate/data-model-overview.md %}#relationshipchangerequest) with a `content` of type [RelationshipCreationChangeRequestContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationchangerequestcontent), that in turn contains the Response to the Request.
This Relationship will be sent back to the Sender via a Message.
Then, the Request will be set to `status` `"Completed"` and you can [query the Relationship]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) using the query parameter `template.id=<ID of the RelationshipTemplate>`.
Until the RelationshipChangeRequest is answered, no new Request will be created by [loading the RelationshipTemplate](#load-the-relationshiptemplate-and-get-the-request).

The Sender can fetch the Relationship by [synchronizing the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).
In the response you will see a new Relationship, which looks as follows:

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
        "createdAt": "<time of creation>",
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

{% include copy-notice description="Save the `id` of the Relationship and of the RelationshipChange to accept the RelationshipChange." %}

Now you can [accept the RelationshipChange]({% link _docs_use-cases/use-case-transport-accept-relationshipchange.md %}) on the Sender Connector with the `id` of the Relationship and the `id` of the RelationshipChange.

When you [synchronize the Recipient Connector]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}), you can see that the Relationship now has the `status` `"Active"` on both Connectors.
