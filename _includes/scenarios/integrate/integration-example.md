In this tutorial we go through the basic steps necessary to establish a Relationship to another Identity and send Messages between two Identities with an existing Relationship.
This will create a better understanding of these processes, which will help you on automating them for your organization.

It is not mandatory to have an own Connector installed.
The individual steps link to pages, which include small interactive pieces of the Connector's API documentation that, when executed, fire requests on a Connector we provided for testing purposes.
If you would like to use it, start by [checking the health of the Connector]<span style="color:red">(TODO: insert link)</span>.
However, you are welcome to use your own Connector, either with a REST client (e.g. Insomnia or Postman) or by using the RapiDoc documentation (/docs/rapidoc) hosted on your Connector.

[//]: # "{link _docs_operate/check-health-of-connector.md}"

The payloads for the requests that are sent during this tutorial contain placeholders marked with `<...>`.
You need to replace them with values before you send the requests.

## Prerequisites

- If you want to use your own Connector for executing the examples:
  - [Install the Connector](https://enmeshed.eu/integrate/connector-installation)
  - Make sure the [Sync Module is disabled](https://enmeshed.eu/operate/configuration#sync) (because in this tutorial we will synchronize manually via the HTTP endpoint)
  - Make sure the [docs are enabled](https://enmeshed.eu/operate/configuration#corehttpapi) for the documentation route to work
  - Get the API key that was configured during installation of the Connector (it needs to be sent in the `X-API-KEY` header of every HTTP request)
- You need **version 2** of the [enmeshed App]({% link _docs_use/install-the-app.md %}) installed on your mobile device.

## Establishing Relationships

In order to communicate with another Identity, a Relationship to that Identity is required.
Thus, in this first part of the tutorial you will learn how to establish a Relationship between your Connector and another Identity.
In our example the other Identity will be the App.
However, it could be another Connector, as well, e.g. if two companies want to exchange data securily without opening a port or network.

The way we are going to establish the Relationship is via a Relationship Template.
This is created by the Connector and contains its name, as well as the data it would like to have from the other Identity.
Then, the App fills out all required information of the template and sends the Relationship Request to the Connector.
It in turn accepts the Request, which results in the creation of a new Relationship.

### Connector: Create an Attribute

As an example, we want to create a display name for our Connector. While communicating with the other Identity in the subsequent steps, we will choose to share this display name with the other Identity. Technically, we therefore need to create an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) with an Identity Attribute Value of type [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname) for our Connector. To do this, proceed as described in the [Create own IdentityAttribute]({% link _docs_integrate/create-own-identityattribute.md %}) guide and use the table values

| Property of Identity Attribute Value | Input value                         |
| ------------------------------------ | ----------------------------------- |
| `@type`                              | `"DisplayName"`                     |
| `value`                              | `"<your Connector's display name>"` |

in the appropriate place.

{% include copy-notice description="Save the `id` of the Attribute that you can find in the response. You will need it in the next step." %}

### Connector: Test your Request's Validity

Next, we want to create a Relationship Template, that can be used by the App to send a Relationship Request to our Connector.
The content of the template can be widely configured, but for simplicity we are gonna use just two [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in our example.
On the one hand, we want to share data with the App, namely the display name of our Connector we created in the previous step.
For this, we use a [ShareAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem).
On the other hand, we use [ReadAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#readattributerequestitem)s to query information of the App.
Let's assume the Connector needs to know the given name and surname of its contact to create a Relationship and, additionally, offers the option to specify an e-mail address for communication.

| RequestItemGroups |                               |                               |
| ----------------- | ----------------------------- | ----------------------------- |
| `title`           | `"Shared Attributes"`         | `"Requested Attributes"`      |
| `items`           | `<ShareAttributeRequestItem>` | `<ReadAttributeRequestItems>` |
| `mustBeAccepted`  | `true`                        | `true`                        |

| ShareAttributeRequestItem |                                                        |
| ------------------------- | ------------------------------------------------------ |
| `attribute`               | `<IdentityAttribute created in the previous step>`     |
| `sourceAttributeId`       | `"<id of the attribute created in the previous step>"` |
| `mustBeAccepted`          | `true`                                                 |

| ReadAttributeRequestItems |                            |
| ------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `query type`              | `"IdentityAttributeQuery"` | `"IdentityAttributeQuery"` | `"IdentityAttributeQuery"` |
| `query valueType`         | `"GivenName"`              | `"Surname"`                | `"EMailAddress"`           |
| `mustBeAccepted`          | `true`                     | `true`                     | `false`                    |

Before we actually create the template, we want to ensure the [validity of the Request] and its items.
<span style="color:red">(TODO: insert link)</span>

[//]: # "{ link _docs_integrate/test-your-request's-validity.md }"

Even though the Requests are validated during the RelationshipTemplate creation, you should not skip this step, as it gives you additional information in case of validation errors.
{: .notice--info}

### Connector: Create a Relationship Template

If the response is successful, we can [create the Relationship Template]<span style="color:red">(TODO: insert link)</span>.
To do so, we use the content we just validated.
Furthermore, we specify an expiration date, which is located in the future, and restrict the access to a single allocation.

[//]: # "{ link _docs_integrate/request-and-process-attributes-by-code-or-link-of-new-contacts.md }"

| RelationshipTemplate        |                                                            |
| --------------------------- | ---------------------------------------------------------- |
| `content type`              | `RelationshipTemplateContent`                              |
| `content title`             | `"Connector Demo Contact"`                                 |
| `content onNewRelationship` | `<RelationshipTemplateContent validated in previous step>` |
| `expiresAt`                 | `"<date in future>"`                                       |
| `maxNumberOfAllocations`    | `1`                                                        |

{% include copy-notice description="Save the `id` of the Relationship Template that you can find in the response. You will need it in the next step." %}

### Connector: Create a QR Code for the Relationship Template

Now, to allow the App to retrieve the Relationship Template, we [create a QR Code]<span style="color:red">(TODO: insert link)</span>, that can be scanned by the App.
For this, we use the ID of our Relationship Template.

[//]: # "{ link _docs_use/create-own-enmeshed-codes-to-share-with-your-peers.md }"

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

All three paths should result in a screen similar to the one below, where you can see the information that you added as content to the Relationship Template.

!["Add contact" screen]( {{ '/assets/images/add-contact-screen.jpg' | relative_url }} )

Finally, fill out the required fields and click on "Add contact" to send the Relationship Request. This will create a new Relationship between the App and the Connector. This Relationship has the status `Pending` for now.

### Connector: Accept the Relationship Request

In order to move the Relationship into the `Active` state, we now need to [accept the Relationship Request]<span style="color:red">(TODO: insert link)</span> with the Connector.
To do so, we synchronize the account <span style="color:red">(TODO: Link scenario)</span>, which will fetch all changes that occurred since the last time this endpoint was executed.
In the response we will receive the created Relationship, which contains the corresponding Relationship Creation Change.
To accept the Relationship Request, save the ID of the Relationship, as well as the ID of the Relationship Change.
<span style="color:red">(TODO: Link scenario, the request body is not of concern)</span>

[//]: # "{ link _docs_integrate/respond-to-incoming-requests.md }"

Now the Relationship is in the `Active` state, so we can start to communicate with the opposite Identity, which we will do in the next part of this tutorial.
To do so, we will need the Address of that Identity.
This can be found in the response, when accepting the Relationship.

{% include copy-notice description="Save the `peer` property of the response. You will need it in the next step." %}

## Sending and Receiving Messages

After we have established a Relationship to an Identity, we can start to exchange Messages.
Enmeshed defines [different types of Messages]({% link _docs_integrate/data-model-overview.md %}#message).
In this tutorial we will focus on Messages of type [Mail]({% link _docs_integrate/data-model-overview.md %}#mail), which can be compared to a classic email: it is possible to specify one or more recipients, a subject and a body, as well as add attachments.

### Sending a Message with a Connector

Firstly, we will [send a Message]({% link _docs_integrate/sending-messages.md %}) from the Connector to the App.
For this, we need the Address of our peer and must specify a Message subject and body.

| Message           |                                                           |
| ----------------- | --------------------------------------------------------- |
| `recipients`      | `<peer address>`                                          |
| `content type`    | `"Mail"`                                                  |
| `content to`      | `<peer address>`                                          |
| `content subject` | `"Welcome"`                                               |
| `content body`    | `"Hello. We are pleased to welcome you as our customer."` |

After having sent the Message, you should receive a push notification on your phone.
Open the enmeshed App, navigate to "Contacts" and select the Relationship.
You should see the Message in the list.
Tapping on it reveals more details.

### Receiving a Message with a Connector

Next, we are going to send a Message from the App to the Connector.
So, open the enmeshed App, navigate to "Contacts" and select your Relationship.
Then, tap on "New Message", enter a subject and body and tap on "Send".

In order to fetch the Message, we need synchronize the Connector again.
<span style="color:red">(TODO: Link scenario)</span>
The response should contain a Message with the content you entered in the App.

## What's next?

Now that you have successfully established a Relationship and exchanged Messages, you can further explore the enmeshed API. You can for example:

- explore the [enmeshed data model]({% link _docs_integrate/data-model-overview.md %}) and learn more about the objects you used during this tutorial and the objects you will encounter in the future
- learn how to send [Requests over Messages]({% link _docs_integrate/sending-messages.md %}) with your established Relationship
- dive deeper into creating and sending [Requests over RelationshipTemplates]({% link _docs_integrate/requests-over-templates.md %})
