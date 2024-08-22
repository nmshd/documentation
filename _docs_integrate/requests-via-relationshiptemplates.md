---
# Start automatic generation
permalink: integrate/requests-via-relationshiptemplates
redirect_from:
  - /integrate/requests-over-templates
published: true
title: "Requests via RelationshipTemplates"
type: scenario
toc: true
properties:
  - id: SC059
  - category: Working with Requests
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: OLD
  - published: true
  - link: requests-via-relationshiptemplates
require:
required_by:
  - integrate/request-one-time-consent-of-peer
  - integrate/request-persistent-consent-of-peer
  - integrate/request-authentication
  - integrate/requests-via-messages
# End automatic generation
---

This guide explains the end-to-end flow of sending a [Request]({% link _docs_integrate/data-model-overview.md %}#request) via a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) and responding to it.
Usually, this flow happens between a [Connector]({% link _docs_explore/52-connector.md %}) and the [App]({% link _docs_explore/50-app.md %}), but for simplicity and more transparency, two Connectors are used here.
To try out the examples in this guide on your own, you therefore need two Connectors.

You can use the [Connector Setup]({% link _docs_operate/setup-with-docker-compose.md %}) guide if you need help installing the Connectors. Since understanding the process of sending a Request via a RelationshipTemplate requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) in general, you should also take a look at our [Request and Response introduction]({% link _docs_integrate/request-and-response-introduction.md %}).
{: .notice--info}

On the first Connector, which is referred to as the Sender, you construct the Request and [create the RelationshipTemplate](#create-the-relationshiptemplate) that contains the Request.
The second Connector, which is referred to as the Recipient, [receives the Request by loading the RelationshipTemplate](#receive-the-request-by-loading-the-relationshiptemplate). The Recipient then [responds to the Request](#respond-to-the-request).
Note that the Sender and the Recipient may or may not have already established a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) at the beginning.

A RelationshipTemplate is generally used to establish a Relationship between two Identities. A Request can be sent in this process of establishing a Relationship.
Nevertheless, a RelationshipTemplate can also be used to exchange Requests between Identities that have already established a Relationship.
For more information on how to establish Relationships, refer to the [Establish Relationships]({% link _docs_integrate/establish-relationships.md %}) scenario documentation.
{: .notice--info}

## Check the Request's validity

The Sender wants to construct a Request that it can send to the Recipient by inserting it into a RelationshipTemplate.
Before the [RelationshipTemplate is created](#create-the-relationshiptemplate), the Sender should first check the Request's validity by proceeding as described in the documentation of the [Check if outgoing Request can be created]({% link _docs_use-cases/use-case-consumption-check-if-outgoing-request-can-be-created.md %}) use case.
To do this, the Request must be specified in the `content` property of the payload.
In this guide, an example [Request]({% link _docs_integrate/data-model-overview.md %}#request) is given that contains only a single [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) within its `items` property. However, you can use any Request that suits you.

```jsonc
{
  "content": {
    // Specification of a Request
    "title": "Example of a Request",
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

If a Request is contained within a RelationshipTemplate, its validity is automatically checked when the [RelationshipTemplate is created](#create-the-relationshiptemplate). The RelationshipTemplate cannot be created if the Request is faulty.
Nevertheless, the Request's validity should be checked before attempting to create the RelationshipTemplate in order to obtain additional information about the reasons for the error in the case of a faulty Request.
{: .notice--info}

## Create the RelationshipTemplate

Next, the Sender wants to create the RelationshipTemplate, which contains the Request it wants to send to the Recipient. To specify a Request within a RelationshipTemplate, a data object of type [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) must be used within the `content` property of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
A Request can be specified in the `onNewRelationship` property or the `onExistingRelationship` property of the RelationshipTemplateContent.
If no Relationship has yet been established between the Sender and the Recipient, the Recipient will receive the Request specified in the `onNewRelationship` property when loading the RelationshipTemplate.
However, if an active Relationship already exists, the Recipient will receive the Request specified in the `onExistingRelationship` property, if such is specified. The specification of a Request in the `onNewRelationship` property is mandatory in contrast to the specification of a Request in the `onExistingRelationship` property.

Note that the same Request can be specified in the `onExistingRelationship` property as in the `onNewRelationship` property, but a different Request can also be used.
These customization options are useful as the Recipient that loads the RelationshipTemplate may not be known in advance.
It is therefore possible that a Relationship between the Sender and the Recipient already exists or not.
In addition, it is possible to configure the RelationshipTemplate in such a way that it can be loaded by multiple Identities.
The creator of the RelationshipTemplate may have a Relationship to some of these Identities and none to others.
{: .notice--info}

To create a RelationshipTemplate, the instructions of the [Create own RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-own-relationshiptemplate.md %}) use case documentation must be followed.
A RelationshipTemplateContent needs to be specified in the `content` of the payload because the Sender wants to send the Recipient a Request via the RelationshipTemplate.
In the payload example below, the [Request whose validity was already checked](#check-the-requests-validity) is contained both within the `onNewRelationship` property and within the `onExistingRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent). The same Request should therefore be sent regardless of whether a Relationship to the Recipient already exists or not.

```jsonc
{
  "maxNumberOfAllocations": 1,
  "expiresAt": "2026-01-01T00:00:00.000Z",
  "content": {
    // RelationshipTemplateContent
    "@type": "RelationshipTemplateContent",
    "onNewRelationship": {
      // Specification of the Request whose validity was checked in the previous step.
      // This Request is used if no active Relationship yet exists.
      "title": "Example of a Request",
      "items": [
        {
          "@type": "AuthenticationRequestItem",
          "mustBeAccepted": true,
          "title": "The Sender is asking for an authentication"
        }
      ]
    },
    "onExistingRelationship": {
      // Specification of the Request whose validity was checked in the previous step.
      // This Request is used if an active Relationship already exists.
      "title": "Example of a Request",
      "items": [
        {
          "@type": "AuthenticationRequestItem",
          "mustBeAccepted": true,
          "title": "The Sender is asking for an authentication"
        }
      ]
    }
  }
}
```

If the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) has been successfully created, the Sender receives a success response from which its `id` and `truncatedReference` can be read. Note that the creation of a RelationshipTemplate which contains a Request does not yet lead to the creation of a corresponding [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest). This is only created after the Recipient of the Request has responded to it.

{% include copy-notice description="Save the `id` and the `truncatedReference` of the RelationshipTemplate because these values are needed in the next steps." %}

## Receive the Request by loading the RelationshipTemplate

To receive a Request that is contained within a RelationshipTemplate, the Recipient has to [load the RelationshipTemplate created by the Sender]({% link _docs_use-cases/use-case-transport-load-relationshiptemplate-created-by-others.md %}) using the following payload, whereby the `<...>` notation is used as a placeholder for the actual data as usual:

```jsonc
{
  "reference": "<truncated reference of RelationshipTemplate>"
}
```

Loading the RelationshipTemplate triggers a process in the [enmeshed Runtime]({% link _docs_explore/61-runtime.md %}) that creates a new incoming Request for the Recipient. Depending on whether a Relationship has already been established between the Sender and the Recipient, the Recipient receives the Request specified in the `onNewRelationship` property or in the `onExistingRelationship` property of the [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent).

If a Relationship has already been established between the Sender and the Recipient and no Request has been specified in the `onExistingRelationship` property, the Recipient will not receive an incoming Request when the RelationshipTemplate is loaded.
{: .notice--info}

By proceeding as described in the [Query incoming Requests]({% link _docs_use-cases/use-case-consumption-query-incoming-requests.md %}) use case documentation and specifying `source.reference=<ID of RelationshipTemplate>` and `status=ManualDecisionRequired` as query parameters, the new incoming Request can be queried. The `result` contains the corresponding [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest), from which you can read the `id` of the Request.

{% include copy-notice description="Save the `id` of the incoming Request so that you can accept or reject it." %}

In a productive environment, however, we recommend using the [Sync Module]({% link _docs_operate/modules.md %}#sync) and waiting for a `consumption.incomingRequestReceived` [Connector Event]({% link _docs_integrate/connector-events.md %}).
To learn more about events, how to use them in the context of enmeshed and which [Modules]({% link _docs_operate/modules.md %}) are supported by enmeshed to help you automating your business processes, check out our [Event introduction]({% link _docs_integrate/event-introduction.md %}).

## Respond to the Request

After the Request has been received, the Recipient can [reject](#reject) or [accept](#accept) it.
If you want to test the full flow, we recommend to reject the Request first.
Afterwards, you can create a new one by [loading the RelationshipTemplate](#receive-the-request-by-loading-the-relationshiptemplate) again and accept it.

### Reject

Let's consider the case the Recipient wants to [reject the Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}).
For this, use the `id` of the Request you saved in the previous step.
In the payload you have to reject all RequestItems.
An [AuthenticationRequestItem]({% link _docs_integrate/request-and-response-introduction.md %}#authenticationrequestitem) can be rejected by using the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).
In the case of the above example Request, the payload is therefore as follows:

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
Then, it moves the Request to `status` `"Completed"`.
This can be observed by [querying the Request]({% link _docs_use-cases/use-case-consumption-get-incoming-request.md %}) again after a few seconds.

### Accept

If you tried out the rejection before this step, make sure to create a new Request by [loading the RelationshipTemplate](#receive-the-request-by-loading-the-relationshiptemplate) again with the same `truncatedReference`.

To [accept the Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}), you need its `id` that you saved in a previous step.
In the payload you have to accept at least all RequestItems where the `mustBeAccepted` property is set to `true`.
An [AuthenticationRequestItem]({% link _docs_integrate/request-and-response-introduction.md %}#authenticationrequestitem) can be accepted by using the [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters).
In the case of the above example Request, the payload is therefore as follows:

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

However, if there is no active Relationship between the Connectors yet, a Relationship will be created, which has the `status` `"Pending"` for now.
Its creation content is of type [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent) and contains the Response to the Request.
This Relationship is sent back to the Sender via a Message.
Then, the Request is set to `status` `"Completed"` and you can [query the Relationship]({% link _docs_use-cases/use-case-transport-query-relationships.md %}) using the query parameter `template.id=<ID of RelationshipTemplate>`.
As long as the Relationship is `"Pending"`, no new Request is created by [loading the RelationshipTemplate](#receive-the-request-by-loading-the-relationshiptemplate).

The Sender can fetch the Relationship by [synchronizing the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).
In the response you can see a new Relationship, which looks as follows:

```jsonc
{
  "id": "REL...",
  "template": {
    // ...
  },
  "status": "Pending",
  "peer": "did:e:...",
  "creationContent": {
    "@type": "RelationshipCreationContent",
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
}
```

{% include copy-notice description="Save the `id` of the Relationship to accept the Relationship." %}

Now you can [accept the Relationship]({% link _docs_use-cases/use-case-transport-accept-relationship.md %}) on the Sender Connector with the `id` of the Relationship.

When you [synchronize the Recipient Connector]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}), you can see that the Relationship now has the `status` `"Active"` on both Connectors.
