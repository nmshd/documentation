---
title: "Connector Tutorial"
permalink: /integrate/connector-tutorial
toc: true
---

In this tutorial we go through the basic steps necessary to establish a Relationship to another Identity and send Messages between two Identities with an existing Relationship. This will create a better understanding of these processes, which will help you on automating them for your organization.

The following steps include small interactive pieces of the Connector's API documentation that, when executed, fire requests on a Connector we provided for testing purposes. Example:

{% include rapidoc api_route_regex="^get /health$" title="" %}

So if you don't have your own Connector installed, feel free to use the samples directly by unfolding them and clicking on "Try". Otherwise you can use your own Connector either with a REST client (e.g. Insomnia or Postman) or by using the RapiDoc documentation (/docs/rapidoc) hosted on your Connector.

The payloads for the requests that are sent during this tutorial contain placeholders marked with `<...>`. You need to replace them with values before you send the request.

## Prerequisites

- If you want to use your own Connector for executing the examples:
  - [Install the Connector](https://enmeshed.eu/integrate/connector-installation)
  - Make sure the [Sync Module is disabled](https://enmeshed.eu/integrate/connector-configuration#sync) (because in this tutorial we will synchronize manually via the HTTP endpoint)
  - Make sure the [docs are enabled](https://enmeshed.eu/integrate/connector-configuration#corehttpapi) for the documentation route to work
  - Get the API key that was configured during installation of the Connector (it needs to be sent in the `X-API-KEY` header of every HTTP request)
- You need **version 2** of the [Enmeshed App]({% link _docs_use/01-basics.md %}) installed on your mobile device.

## Establishing Relationships

In order to communicate with another Identity, a Relationship to that Identity is required. In this first part of the tutorial you will learn how to establish a Relationship between your Connector and another Identity. In this case the other Identity will be the App, but it could be another Connector as well.

### Connector: Create an Attribute

In order to share an Attribute via a Relationship Template, we need to create one by executing `POST /api/v2/Attributes` with the following payload:

```json
{
  "content": {
    "@type": "IdentityAttribute",
    "owner": "<your connector's Address>",
    "value": {
      "@type": "DisplayName",
      "value": "Connector Tutorial"
    }
  }
}
```

You can query the Connector's Address under the route `/api/v2/Account/IdentityInfo`. If you are using the Demo Connector of this Tutorial, the Address is `id134nJmN7E4Carb6KyRJyePVnXxVHEYQgWD`.
{: .notice--info}

{% include rapidoc api_route_regex="^post /api/v2/Attributes$" %}

{% include copy-notice description="Save the `id` of the Attribute that you can find in the response. You will need it in the next step." %}

### Connector: Test your Request's Validity

In order to make sure the Request and its items are valid you can validate it by calling the `POST /api/v2/Requests/Outgoing/Validate` route. You can define your own payload for this Request, or you can just use the one below, which contains two [RequestItemGroups]({% link _docs_integrate/61-data-model.md %}#requestitemgroup):

- one with a [ShareAttributeRequestItem]({% link _docs_integrate/61-data-model.md %}#shareattributerequestitem) that contains Attributes that will be shared with the peer
- one with [ReadAttributeRequestItem]({% link _docs_integrate/61-data-model.md %}#readattributerequestitem)s that query Attributes of the peer

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
                "value": "Connector Tutorial"
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

{% include rapidoc api_route_regex="^post /api/v2/Requests/Outgoing/Validate$" %}

Even though the Requests are validated during the RelationshipTemplate creation you should not skip this step as it gives you additional information in case of validation errors.
{: .notice--info}

### Connector: Create a Relationship Template

Start by creating a so called Relationship Template on the Connector. You can do so by calling the `POST /api/v2/RelationshipTemplates/Own` route. Use the following JSON in the request body:

```jsonc
{
  "maxNumberOfAllocations": 1,
  "expiresAt": "2023-06-01T00:00:00.000Z",
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

{% include copy-notice description="Save the `id` of the Relationship Template that you can find in the response. You will need it in the next step." %}

### Connector: Create a QRCode for the Relationship Template

Since we will use the Enmeshed App to send a Relationship Request to the Connector, we now have to create a QR Code one can scan with the App to retrieve the Relationship Template and send a Relationship Request to the Connector.

For this, execute the `GET /api/v2/RelationshipTemplates/{id}` route (Accept Header: `image/png`) to create a QRCode. Use the ID of the Relationship Template from the previous step as the value for `id`.

{% include rapidoc api_route_regex="^get /api/v2/RelationshipTemplates/{id}$" %}

### App: Send a Relationship Request

Open the created QR Code and start the Enmeshed App. Depending on what you already did with the App, choose one of the following paths:

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

All three paths should result in a screen similar to the one below, where you can see the information that you added as content to the Relationship Template.

!["Add contact" screen]( {{ '/assets/images/add-contact-screen.jpg' | relative_url }} )

Finally, fill out the required fields and click on "Add contact" to send the Relationship Request. This will create a new Relationship between the App and the Connector. This Relationship has the status `Pending` for now.

### Connector: Accept the Relationship Request

In order to move the Relationship into the `Active` state, you now need to accept the Relationship Request with the Connector. In order to do so, first execute the `POST /api/v2/Account/Sync` route, which will fetch all changes that occurred since the last time this endpoint was executed.

{% include rapidoc api_route_regex="^post /api/v2/Account/Sync$" %}

In the response you will receive the created Relationship, which contains corresponding Relationship Creation Change.

Example:

```json
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

{% include copy-notice description="Save the `id` of the Relationship (`REL_________________`) as well as the `id` of the first Relationship Change (`RCH_________________`) in the `changes` array and use them as input to the `PUT /api/v2/Relationships/{id}/Changes/{changeId}/Accept` route. You can leave that request body as it is." %}

{% include rapidoc api_route_regex="^put /api/v2/Relationships/{id}/Changes/{changeId}/Accept$" %}

Now the Relationship is in the `Active` state, so we can start to communicate with the opposite Identity, which we will do in the next part of this tutorial. In order to do so we will need the Address of that Identity. So in the response of the last request look for the `peer` property and write down its value. It should start with `id1`.

## Sending and Receiving Messages

After you have established a Relationship to an Identity, you can start to exchange Messages. Enmeshed defines [different types of Messages]({% link _docs_integrate/61-data-model.md %}#message). For this tutorial we will focus on Messages of type [Mail]({% link _docs_integrate/61-data-model.md %}#mail), which you can compare to a classic email: you can specify one or more recipients, a subject and a body, as well as add some attachments.

### Sending a Message with a Connector

To send a Message, all you need to do is call the `POST /api/v2/Messages` endpoint. You can use the content below, while replacing the placeholders in `recipients` and `to` with the Address you copied previously. You can further modify the `subject` and `body` properties to add some custom content.

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

After you have sent this request, you should receive a push notification on your phone. Open the Enmeshed App, navigate to "Contacts" and select your Relationship. You should see the Message in the list. You can show details by tapping on it.

### Receiving a Message with a Connector

Next we are going to send a Message from the App to the Connector. Therefore, open the App, navigate to "Contacts" and select your Relationship. Next, tap on "New Message". Enter subject and body an tap on "Send".

In order to fetch the Message, we need to call the `POST /api/v2/Account/Sync` endpoint again.

{% include rapidoc api_route_regex="^post /api/v2/Account/Sync$" %}

The response should contain a Message with the content you entered in the App.

## What's next?

Now that you have successfully established a Relationship and exchanged Messages, you can further explore the Enmeshed API. You can for example:

- explore the [Enmeshed data model]({% link _docs_integrate/61-data-model.md %}) and learn more about the objects you used during this tutorial and the objects you will encounter in the future
- learn how to send [Requests over Messages]({% link _docs_integrate/26-requests-over-messages.md %}) with your established Relationship
- dive deeper into creating and sending [Requests over RelationshipTemplates]({% link _docs_integrate/25-requests-over-templates.md %})
