---
# Start automatic generation
permalink: integrate/integration-example
redirect_from:
  - /integrate/connector-tutorial
published: true
title: "Integration example"
type: scenario
toc: true
properties:
  - id: SC095
  - category: Getting Started
  - description:
  - customer:
  - component: integrate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: OLD
  - published: true
  - link: integration-example
require:
required_by:
# End automatic generation
---

In this tutorial we go through the basic steps necessary to establish a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) to another Identity and send [Messages]({% link _docs_integrate/data-model-overview.md %}#message) between two Identities with an existing Relationship.
This will create a better understanding of these processes, which will help you automating them for your organization.

It is not mandatory to have an own Connector installed.
The following steps include small interactive pieces of the Connector's API documentation that, when executed, fire Requests on a Connector we provide for testing purposes.

If you would like to use it, start by checking the health of the Connector:

{% include rapidoc api_route_regex="^get /health$" title="" %}

Nevertheless, you are welcome to use your own Connector, either with a REST client (e.g. Insomnia or Postman) or by using the RapiDoc documentation (/docs/rapidoc) hosted on your Connector.

The payloads for the Requests that are sent during this tutorial contain placeholders marked with `<...>`.
You need to replace them with values before you send the Requests.

## Prerequisites

- If you want to use your own Connector for executing the examples:
  - [Install the Connector](https://enmeshed.eu/integrate/connector-installation)
  - Make sure the [Sync Module is disabled]({% link _docs_operate/configuration.md %}#sync) (because in this tutorial we will synchronize manually via the HTTP endpoint)
  - Make sure the [docs are enabled]({% link _docs_operate/configuration.md %}#corehttpapi) for the documentation route to work
  - Get the API key that was configured during installation of the Connector (it needs to be sent in the `X-API-KEY` header of every HTTP Request)
- You need the [enmeshed App]({% link _docs_use/install-the-app.md %}) installed on your mobile device.

## Establishing Relationships

In order to communicate with another Identity, a Relationship to that Identity is required.
Thus, in this first part of the tutorial you will learn how to establish a Relationship between your Connector and another Identity.
In this example the other Identity will be an App.
However, it could be another Connector, as well, e.g. if two companies want to exchange data securily without opening a port or network.

The way we will establish the Relationship is via a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
This is created by the Connector and contains its display name, as well as the data it would like to receive from the other Identity.
Then, the App user fills out all required information of the template and sends the Relationship Request to the Connector.
It in turn accepts the Request, which results in the creation of a new Relationship.

### Connector: Create an Attribute

Firstly, let's create a display name for our Connector.
While communicating with the other Identity in the subsequent steps, we will choose to share this display name.
Technically, for this we need to create an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) with a value of type [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname) for our Connector.
To do so, execute `POST /api/v2/Attributes` with the following payload:

```json
{
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<your Connector's address>",
    "value": {
      "@type": "DisplayName",
      "value": "Demo Connector of integration example"
    }
  }
}
```

You can query the Connector's address via the route `/api/v2/Account/IdentityInfo`. If you are using the Demo Connector of this Tutorial, the address is `id134nJmN7E4Carb6KyRJyePVnXxVHEYQgWD`.
{: .notice--info}

{% include rapidoc api_route_regex="^post /api/v2/Attributes$" %}

{% include copy-notice description="Save the `id` of the Attribute that you can find in the Response. You will need it in the next step." %}

### Connector: Test your Request's Validity

Next, we want to create a RelationshipTemplate, that can be used by the App to send a Relationship Request to our Connector.
The content of the template can be widely configured, but for simplicity we will use a [Request]({% link _docs_integrate/data-model-overview.md %}#request) with just two [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in our example.
On the one hand, we want to [share an Attribute]({% link _docs_integrate/share-own-attribute-to-peer.md %}) with the App, namely the display name of our Connector we created in the previous step.
For this, we use a [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem).
On the other hand, we use [ReadAttributeRequestItems]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem) to [receive Attributes]({% link _docs_integrate/read-attribute-from-peer.md %}) from the App.
Let's assume the Connector needs to know the given name and surname of its contact to create a Relationship and, additionally, offers the option to specify an e-mail address for communication.

```json
{
  "content": {
    "items": [
      {
        "@type": "RequestItemGroup",
        "mustBeAccepted": true,
        "title": "Shared Attributes",
        "items": [
          {
            "@type": "ShareAttributeRequestItem",
            "mustBeAccepted": true,
            "attribute": {
              "@type": "IdentityAttribute",
              "owner": "",
              "value": {
                "@type": "DisplayName",
                "value": "Demo Connector of integration example"
              }
            },
            "sourceAttributeId": "<the id of the attribute created above>"
          }
        ]
      },
      {
        "@type": "RequestItemGroup",
        "mustBeAccepted": true,
        "title": "Requested Attributes",
        "items": [
          {
            "@type": "ReadAttributeRequestItem",
            "mustBeAccepted": true,
            "query": {
              "@type": "IdentityAttributeQuery",
              "valueType": "GivenName"
            }
          },
          {
            "@type": "ReadAttributeRequestItem",
            "mustBeAccepted": true,
            "query": {
              "@type": "IdentityAttributeQuery",
              "valueType": "Surname"
            }
          },
          {
            "@type": "ReadAttributeRequestItem",
            "mustBeAccepted": false,
            "query": {
              "@type": "IdentityAttributeQuery",
              "valueType": "EMailAddress"
            }
          }
        ]
      }
    ]
  }
}
```

Before we actually create the template, we want to ensure the validity of the Request and its items.

{% include rapidoc api_route_regex="^post /api/v2/Requests/Outgoing/Validate$" %}

Even though the Requests are validated during the RelationshipTemplate creation, you should not skip this step, as it gives you additional information in case of validation errors.
{: .notice--info}

### Connector: Create a RelationshipTemplate

If the Response is successful, we can create the RelationshipTemplate.
To do so, we use the `content` we just validated.
Furthermore, we specify an expiration date, which is located in the future, and restrict the access to a single allocation.

```jsonc
{
  "maxNumberOfAllocations": 1,
  "expiresAt": "2024-12-31T00:00:00.000Z",
  "content": {
    "@type": "RelationshipTemplateContent",
    "title": "Connector Demo Contact",
    "onNewRelationship": {
      // <the value of the 'content' property validated in the previous step>
    }
  }
}
```

{% include rapidoc api_route_regex="^post /api/v2/RelationshipTemplates/Own$" %}

{% include copy-notice description="Save the `id` of the RelationshipTemplate that you can find in the Response. You will need it in the next step." %}

### Connector: Create a QR Code for the RelationshipTemplate

Now, to allow the App to retrieve the RelationshipTemplate, we create a QR Code, that can be scanned by the App.
For this, execute the `GET /api/v2/RelationshipTemplates/{id}` route (Accept Header: `image/png`) and use the `id` of the RelationshipTemplate from the previous step as the value for `id`.

{% include rapidoc api_route_regex="^get /api/v2/RelationshipTemplates/{id}$" %}

### App: Send a Relationship Request

Open the created QR Code and start the enmeshed App. Depending on what you already did with the App, choose one of the following paths:

- If this is the first time you use the App:
  - click on "Scan code"
  - hold the camera in front of the QR code
- If you want to use a new profile:
  - click on the "+ New profile" button
  - click on "Scan code"
  - hold the camera in front of the QR code
- If you want to use an existing profile:
  - select the existing profile
  - navigate to "Contacts"
  - click on "Add contact"
  - hold the camera in front of the QR code

All three paths should result in a screen similar to the one below, where you can see the information that you added as `content` to the RelationshipTemplate.

!["Add contact" screen]( {{ '/assets/images/add-contact-screen.jpg' | relative_url }} )

Finally, fill out the required fields and click on "Add contact" to send the Relationship Request. This will create a new Relationship between the App and the Connector. This Relationship has the status `Pending` for now.

### Connector: Accept the Relationship Request

In order to move the Relationship into the `Active` state, we now need to [accept the Relationship Request]({% link _docs_use-cases/use-case-transport-accept-relationshipchange.md %}) with the Connector.
To do so, we [synchronize updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}), which will fetch all changes that occurred since the last time this endpoint was executed.

{% include rapidoc api_route_regex="^post /api/v2/Account/Sync$" %}

In the Response we will receive the created Relationship, which contains the corresponding [RelationshipCreationChange]({% link _docs_integrate/data-model-overview.md %}#relationshipchange).

Example:

```jsonc
{
  "result": {
    "messages": [],
    "relationships": [
      {
        "id": "RELmJj25x2bZW0VXzAiQ",
        ...
        "status": "Pending",
        "peer": "id19Sy75wjCWhQSxsbMiGLn6iSBfWvQmot5b",
        "changes": [
          {
            "id": "RCHUwBw7BWlROPlEjb51",
            ...
            "status": "Pending",
            "type": "Creation"
          }
        ]
      }
    ]
  }
}
```

{% include copy-notice description="Save the `id` of the Relationship (`REL_________________`), as well as the `id` of the first RelationshipChange (`RCH_________________`) in the `changes` array and use them as input to the `PUT /api/v2/Relationships/{id}/Changes/{changeId}/Accept` route. You can leave that Request body as it is." %}

{% include rapidoc api_route_regex="^put /api/v2/Relationships/{id}/Changes/{changeId}/Accept$" %}

Now the Relationship is in the `Active` state, so we can start to communicate with the opposite Identity, which we will do in the next part of this tutorial.
For this, we will need the address of that Identity.
It can be found in the Response, when accepting the Relationship.

{% include copy-notice description="Save the `peer` property of the Response (`id1_________________`). You will need it in the next step." %}

## Sending and Receiving Messages

After having established a Relationship with an Identity, we can start to exchange [Messages]({% link _docs_integrate/data-model-overview.md %}#message).
Enmeshed defines different types of Messages.
In this tutorial we will focus on Messages of type [Mail]({% link _docs_integrate/data-model-overview.md %}#mail), which can be compared to a classic e-mail: it is possible to specify one or more recipients, a subject and a body, as well as to add attachments.

### Sending a Message with a Connector

Firstly, we will [send a Message]({% link _docs_integrate/sending-messages.md %}) from the Connector to the App.
For this, we need the address of our peer, that we copied in the previous step, and insert it in the fields `recipient` and `to`.
Further, the `subject` and `body` properties can be modified with some custom `content`.

```json
{
  "recipients": ["id_________________________________"],
  "content": {
    "@type": "Mail",
    "to": ["id_________________________________"],
    "subject": "Welcome",
    "body": "Hello. We are pleased to welcome you as our customer."
  }
}
```

{% include rapidoc api_route_regex="^post /api/v2/Messages$" %}

After having sent the Message, you should receive a push notification on your phone.
Open the enmeshed App, navigate to "Contacts" and select the Relationship.
You should see the Message in the list.
Tapping on it reveals more details.

### Receiving a Message with a Connector

Next, we are going to send a Message from the App to the Connector.
So, open the enmeshed App, navigate to "Contacts" and select your Relationship.
Then, tap on "New Message", enter a subject and body and tap on "Send".

In order to fetch the Message, we need to synchronize the Connector with the Backbone again.

{% include rapidoc api_route_regex="^post /api/v2/Account/Sync$" %}
The Response should contain a Message with the `content` you entered in the App.

## What's next?

Now that you have successfully established a Relationship and exchanged Messages, you can further explore the enmeshed API. You can for example:

- explore the [enmeshed data model]({% link _docs_integrate/data-model-overview.md %}) and learn more about the objects you used during this tutorial and the objects you will encounter in the future
- learn how to send [Requests over Messages]({% link _docs_integrate/requests-over-messages.md %}) with your established Relationship
- dive deeper into creating and sending [Requests over RelationshipTemplates]({% link _docs_integrate/requests-over-templates.md %})
