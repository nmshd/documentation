---
title: "Enmeshed Data Model"
permalink: /explore/data-model
toc: true
---

The Enmeshed data model can be devided into three parts:

-   Transport types
-   Local types
-   Content types

The following diagram gives you an overview of all the existing types and how they are connected to each other. The subsequent chapters describe these types in more detail.

<div style="width: 100%; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:100%; height:480px" src="https://lucid.app/documents/embedded/66e3002c-335a-4c22-a352-3a7a50a17d37" id="uPhuT48AMcNp"></iframe></div>

At a first glance the amount of types is overwhelming. But in the following chapters all of them are explained in detail.

# Transport Types

Transport types like `RelationshipTemplate`, `Token` or `File` are types that are "exchanged" between Identities via the Backbone. They are created and updated by the [Transport Layer]({% link _docs_explore/42-transport-layer.md %}). In most cases they have a `content` property, which contains the actual payload that should be transferred between the Identities. This payload is being encrypted when it is sent to the Backbone, and decrypted by the other Identity when it is received. The following sections describe the differnt Transport types and their properties.

Note that the properties of the types are the ones that exist locally (aka on the Connector/in the App). The Backbone does not necessarily know about them. The properties that only exist locally are marked accordingly in the tables below. Further there are properties that are confidential and are therefore encrypted before sent to the Backbone, in order to enable end-to-end encryption. Both kinds of these properties are marked accordingly in the "Remarks" coloumn of the property tables below.

## Token

Tokens can be used to save arbitrary structured data on the Backbone, which is encrypted with a random symmetric key. You can then pass the ID of the Token, together with the random key, to another Identity, which can then retrieve the token and decrypt it, e.g. inside of a QR Code, which you send to the recipient via letter. Tokens can be handy in a lot of scenarios, for example:

-   You want to share secret information with someone you don't have a Relationship with.
-   The Enmeshed App currently uses a Token to save a Backup of the Identity. ID and secret key are then encoded in a QR Code, which the user can print out and scan later in order to restore the Identity on a new device.

A token has the following properties:

| Name               | Type      | Description                                                   | Remarks                                       |
| ------------------ | --------- | ------------------------------------------------------------- | --------------------------------------------- |
| id                 | `string`  | {% include descr_id class="Token" prefix="TOK" %}             |
| createdBy          | `string`  | {% include descr_createdBy class="Token" %}                   |                                               |
| createdByDevice    | `string`  | {% include descr_createdByDevice class="Token" %}             |                                               |
| content            | `unknown` | The content of the Token. You can add whatever you want here. | will be encrypted before sent to the Backbone |
| createdAt          | `string`  | {% include descr_createdAt class="Token" %}                   |                                               |
| expiresAt          | `string`  | {% include descr_expiresAt class="Token" %}                   |                                               |
| secretKey          | `string`  | {% include descr_secretKey class="Token" %}                   | saved only locally                            |
| truncatedReference | `string`  | {% include descr_truncatedReference class="Token" %}          | saved only locally                            |

## RelationshipTemplate

A Relationship Template serves to purposes:

1. It represents the permission to establish a Relationship. When sending a Relationship request, the sender has to attach the ID of a valid Relationship Template created by the recipient. Otherwise the Backbone blocks the Relationship request. And since the IDs are randomly generated, you can only obtain such an ID from the recipient.
2. It can contain data which is of intereset for the one who uses the Relationship Template. The Enmeshed App for example expects a Relationship Template content which contains a `Request` which contains e.g. Attributes about the creator of the Template as well as queries for Attributes that the Template creator wants to receive together with the Relationship request.

| Name                     | Type                                                                 | Description                                                                                                                                                                                                                                                                                                                                                        | Remarks                                                                                              |
| ------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| id                       | `string`                                                             | {% include descr_id class="Relationship Template" prefix="RLT" %}                                                                                                                                                                                                                                                                                                  |                                                                                                      |
| isOwn                    | `boolean`                                                            | {% include descr_isOwn class="Relationship Template" %}                                                                                                                                                                                                                                                                                                            | saved only locally                                                                                   |
| createdBy                | `string`                                                             | {% include descr_createdBy class="Relationship Template" %}                                                                                                                                                                                                                                                                                                        | remark                                                                                               |
| createdByDevice          | `string`                                                             | {% include descr_createdByDevice class="Relationship Template" %}                                                                                                                                                                                                                                                                                                  | remark                                                                                               |
| createdAt                | `string`                                                             | {% include descr_createdAt class="Token" %}                                                                                                                                                                                                                                                                                                                        | remark                                                                                               |
| content                  | [`RelationshipTemplateBody`](#RelationshipTemplateBody) \| `unknown` | The content of the Relationship Template. You can add whatever you want here. However, if it is intendend for a User of the Enmeshed App, `RelationshipTemplateBody` has to be used. Otherwise feel free to insert whatever you want or need.                                                                                                                      | remark                                                                                               |
| expiresAt                | `string`                                                             | {% include descr_expiresAt class="Token" %}                                                                                                                                                                                                                                                                                                                        | will be encrypted before sent to the Backbone                                                        |
| maxNumberOfRelationships | `number` \| `undefined`                                              | Can be set to limit the number of Relationships that can be established using this Relationship Template. After this value is reached, the Backbone rejects each request of any new Identity that wants to establish a new Relationship with this Template.                                                                                                        | _This property is deprecated and will be removed in the future - use maxNumberOfAllocations instead_ |
| maxNumberOfAllocations   | `number` \| `undefined`                                              | Can be set to limit the number of allocations of this template. A Relationship Template is allocated by another Identity when it is first retrieved by it from the Backbone. After this value is reached, the Backbone rejects each request of any new Identity that wants to retrieve it. Identities that already allocated it will still be able to retrieve it. |                                                                                                      |

## Relationship

A Relationshipsss between two Identities is the prerequisite for them to exchange Messages. If there is no Relationship, the Backbone blocks all Messages that are tried to be sent. This ensures that you only receive Messages from Identities you know, so you are protected from any harmful Messages like spam or fishing mails.

| Name                  | Type                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Remarks                                  |
| --------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------ |
| id                    | `string`                                                 | {% include descr_id class="Relationship" prefix="REL" %}                                                                                                                                                                                                                                                                                                                                                                                                     |                                          |
| template              | `RelationshipTemplate`                                   | The Relationship Template that was used to establish this Relationship.                                                                                                                                                                                                                                                                                                                                                                                      |                                          |
| status                | `"Pending"` \| `"Active"` \| `"Rejected"` \| `"Revoked"` | The status of this Relationship. <br>{::nomarkdown}<ul><li>Pending: the Relationship was created, but not yet accepted the recipient. In this state you cannot send Messages yet.</li><li>Active: this means that the Relationship is active. As long as it is active, both participants can exchange Messages.</li><li>Rejected: the Relationship was rejected by the recipient.</li><li>Revoked: the Relationship was revoked by the sender.</li></ul>{:/} |                                          |
| changes               | `RelationshipChange[]`                                   | The history of changes made to this Relationship. You can find the definition of a Relationship Change below.                                                                                                                                                                                                                                                                                                                                                |                                          |
| peer                  | `string`                                                 | The Address of the Identity with which you have this Relationship.                                                                                                                                                                                                                                                                                                                                                                                           | saved only locally                       |
| lastMessageSentAt     | `string`                                                 | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                  | A timestamp that describes when you last | saved only locally |
| lastMessageReceivedAt | `string`                                                 | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Relationship Change

Since a Relationship "belongs" to two Identities, each change on such a Relationship demands for the agreement of both parties. That's where Relationship Changes come into play. Whenenver one party wants to make a change to the Relationship (like create or terminate it), it sends a Relationship Change to the other party, which has to accept it in order for the change to take effect. If the other party doesn't want to accept it, it can also reject it. And if the party that created the Relationship Change changes its mind, it can revoke the Relationship Change. The Backbone makes sure that a Relationship Change can only be completed in one of those three ways (accepted, rejected, revoked). So for example if you try to accept a Relationship Change that is already revoked, you will receive an error.

| Name     | Type                                                    | Description                                                                                                                                                                                             | Remarks |
| -------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| id       | `string`                                                | {% include descr_id class="Relationship Change" prefix="RCH" %}                                                                                                                                         |         |
| status   | `"Pending"` \|`"Accepted"` \|`"Rejected"` \|`"Revoked"` | The current status of the Relationship Change.                                                                                                                                                          |         |
| type     | `"Creation"`                                            | The type of the Relationship Change. Currently the only existing type is `Creation`. As soon as the termination of Relationships is supported, `Termination` will be a second Relationship Change type. |         |
| request  | `RelationshipChangeRequest`                             | Information about the request of the Relationship Change.                                                                                                                                               |         |
| response | `RelationshipChangeResponse` \| `undefined`             | Information about the response of the Relationship Change.                                                                                                                                              |         |

Note that RelationshipChangeRequest and RelationshipChangeResponse have nothing to do with [Requests](#request) and [Responses](#response), which we will discuss later.

### RelationshipChangeRequest

| Name            | Type      | Description                                                                                                                                                                                                                                                                                                    | Remarks                                       |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| createdBy       | `string`  | {% include descr_createdBy class="Relationship Change Request" %}                                                                                                                                                                                                                                              |                                               |
| createdByDevice | `string`  | {% include descr_createdByDevice class="Relationship Change Request" %}                                                                                                                                                                                                                                        |                                               |
| createdAt       | `string`  | {% include descr_createdAt class="Relationship Change Request" %}                                                                                                                                                                                                                                              |                                               |
| content         | `unknown` | The content of the Relationship Change Request. You can add whatever you want here. However, if the other party uses the Enmeshed App, and the type of the Relationship Change is `Creation`, `RelationshipCreationChangeRequestBody` has to be used. Otherwise feel free to insert whatever you want or need. | will be encrypted before sent to the Backbone |

### RelationshipChangeResponse

| Name            | Type      | Description                                                                                                                                                                         | Remarks                                       |
| --------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| createdBy       | `string`  | {% include descr_createdBy class="Relationship Change Response" %}                                                                                                                  |                                               |
| createdByDevice | `string`  | {% include descr_createdByDevice class="Relationship Change Response" %}                                                                                                            |                                               |
| createdAt       | `string`  | {% include descr_createdAt class="Relationship Change Response" %}                                                                                                                  |                                               |
| content         | `unknown` | The content of the Relationship Change Response. You can add whatever you want here. Since the Enmeshed App doesn't expect any special content here, there is no need to watch out. | will be encrypted before sent to the Backbone |

## Message

A Message is a piece of data that can be sent to one or more recipients. The sender is completely free in what the content of the Message looks like. Though in order to enable a normalized communication, Enmeshed defines some content structures for Messages, and in the future there will be more of those. Consider that the Enmeshed App only supports those normalized Message contents. Currently there are:

-   [`Mail`](#Mail)
-   [`Request`](#Request)
-   [`Response`](#Response)

You can read more details about each of these in the corresponding sections of the "Content Types" chapter.

But if you are communicating with another Connector, feel free to settle on any content structure that fits your needs.

| Name            | Type          | Description                                                                                                                                                                                                                                             | Remarks                                       |
| --------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| id              | `string`      | {% include descr_id class="Message" prefix="MSG" %}                                                                                                                                                                                                     |                                               |
| content         | `unknown`     | The content of the Message. You can add whatever you want here. However, if it is intendend for a User of the Enmeshed App, use either `Mail`, `Request` or `Response`. Otherwise feel free to insert whatever you want or need.                        | will be encrypted before sent to the Backbone |
| createdBy       | `string`      | {% include descr_createdBy class="Message" %}                                                                                                                                                                                                           |                                               |
| createdByDevice | `string`      | {% include descr_createdByDevice class="Message" %}                                                                                                                                                                                                     |                                               |
| recipients      | `Recipient[]` | A list of recipients of this Message.                                                                                                                                                                                                                   |                                               |
| createdAt       | `string`      | {% include descr_createdAt class="Message" %}                                                                                                                                                                                                           |                                               |
| attachments     | `string[]`    | A list of [File](#file) IDs you want to attach to your Message. You receive the File ID after you uploaded a file to the Backbone. By attaching a File to a Message, you share the secret key used to encrypt/decrypt the File, which cannot be undone. |                                               |

### Recipient

| Name             | Type                    | Description                                                                                                                                                                                                                                          | Remarks            |
| ---------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| address          | `string`                | The Address of the recipient of the Message.                                                                                                                                                                                                         |                    |
| relationshipId   | `string`                | The ID of the Relationship between the recipient and the sender of the Message.                                                                                                                                                                      | saved only locally |
| receivedAt       | `string` \| `undefined` | A timestamp that describes when the recipient retrieved the Message from the Backbone. `undefined` when the Message wasn't received yet. Caution: "received"" does not mean that it was read, so don't mix this up with a read receipt.              |                    |
| receivedByDevice | `string` \| `undefined` | The ID of the Device that first retrieved the Message. `undefined` when the Message wasn't received yet. This is of no interest for the sender of the Message, but rather for the recipient itself, since they can use it for audit purposes. sender |                    |

## File

The Backbone allows you to upload files, which are saved as - you guessed it - `Files`.

| Name               | Type                    | Description                                                                                                           | Remarks                                       |
| ------------------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| id                 | `string`                | {% include descr_id class="File" prefix="FIL" %}                                                                      |                                               |
| createdAt          | `string`                | {% include descr_createdAt class="File" %}                                                                            |                                               |
| createdBy          | `string`                | {% include descr_createdBy class="File" %}                                                                            |                                               |
| createdByDevice    | `string`                | {% include descr_createdByDevice class="File" %}                                                                      |                                               |
| expiresAt          | `string`                | {% include descr_expiresAt class="File" %}                                                                            |                                               |
| filename           | `string`                | The name of the file as it was on the device that uploaded it.                                                        | will be encrypted before sent to the Backbone |
| filesize           | `number`                | The size of the plaintext file in bytes.                                                                              | will be encrypted before sent to the Backbone |
| mimetype           | `string`                | The [mimetype](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) of the file. | will be encrypted before sent to the Backbone |
| title              | `string`                | A human readable title of the file, which can be defined when uploading the File.                                     | will be encrypted before sent to the Backbone |
| description        | `string` \| `undefined` | A human readable description of the file, which can be defined when uploading the File.                               | will be encrypted before sent to the Backbone |
| secretKey          | `string`                | The key that was used to encrypt the File.                                                                            | saved only locally                            |
| isOwn              | `boolean`               | {% include descr_isOwn class="File" %}                                                                                | saved only locally                            |
| truncatedReference | `string`                | {% include descr_truncatedReference class="File" %}                                                                   | saved only locally                            |

A File further has its content, of course. But since this is not a JSON property, it is not included in this table. You can download the content of the File separately.

# Local Types

In addition to the types that are shared between Identities via the Backbone, there are certain types that only exist within one Identity. These types usually contain metadata about [Content types](#content-types) that should not be transferred to other Identities. They are created and updated by the [Consumption Layer]({% link _docs_explore/43-consumption-layer.md %}).

Currently there are two main Local types:

-   LocalRequest
-   LocalAttribute

Each of them further describes some sub types.

This chapter explains all of those types, together with their properties.

## LocalRequest

A Local Request contains the local metadata for a [Request](#request).

| Name      | Type                                                       | Description                                                                                                                                  | Remarks |
| --------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| id        | `string`                                                   | {% include descr_id class="LocalRequest" prefix="FIL" %}                                                                                     |         |
| isOwn     | `boolean`                                                  | `true` if you sent the Request, `false` if you received it.                                                                                  |         |
| peer      | `string`                                                   | The Identity that sent you the corresponding Request/that you sent the Request to.                                                           |         |
| createdAt | `string`                                                   | {% include descr_createdAt class="LocalRequest" %}                                                                                           |         |
| status    | [`LocalRequestStatus`](#LocalRequestStatus)                | The current status of the Request. See [below](#LocalRequestStatus) for a list of all possible values.                                       |         |
| content   | [`Request`](#Request)                                      | The actual Content object this Local Request defines the metadata for.                                                                       |         |
| source    | [`LocalRequestSource`](#LocalRequestSource) \| `undefined` | Information about the Transport object with which the Request came in/was sent. This property is `undefined` if the Request is not sent yet. |         |
| response  | [`LocalResponse`](#LocalResponse) \| `undefined`           | Metadata + Content object of the response. If there is no response yet, this property is `undefined`.                                        |         |

### LocalRequestStatus

Depending on whether it is an incoming or an outgoing Request, there can be different status. The following state diagram shows which status exist in both cases and when there are transitions from one state to another:

![State diagram for Local Request Status]( {{ '/assets/images/explore/RequestStatus%20-%20State%20Diagram.png' | relative_url }} )

Draft
: This status only exists for outgoing Requests. It means that the Local Request was created, but not yet sent.

Open
: In case of an outgoing Request, `Open` means that the Request was sent. The transition to `Open` happens automatically when you send the Request with a Message.
: In case of an incoming Request, `Open` means that the Local Request was received.

DecisionRequired
: After the prerequisites of the Request and all of its Request Items were checked, a decision can be made. At first, the [Decider Module]({% link _docs_integrate/11-connector-configuration.md %}#decider) tries to make an automatic decision. It therefore checks all LocalRequests in status `DecisionRequired`.

ManualDecisionRequired
: If the Decider Module cannot make a decision, it moves the Local Request to `ManualDecisionRequired`. When the Local Request is in this status, it's the User's turn to decide whether they want to accept or reject the Request.

Decided
: When the User or the Decider Module accepts or rejects the Request, the Response and ResponseItems are generated based on the passed parameters. This Response is saved in the `response` property of the `LocalRequest`, but not yet sent.

Completed
: In case of an incoming Request, the Runtime Module listens to an Event saying that a Request moved to status `Decided`. It then checks on which way the Request was received (Message/RelationshipTemplate) and sends the Response on the corresponding way (by sending a message or creating a Relationship). After the Response was successfuly sent, it moves the Local Request to `Completed`.
: In case of an outgoing Request, the Runtime Module listens to the `MessageReceivedEvent` and checks the content of the sent Message for a Response. If there is one, it moves the corresponding Local Request to `Completed`.

### LocalRequestSource

With the information in this type you can clearly identify the Transport object the Request was sent/received in. Currently there are only two possibilities: Message and Relationship Template.

| Name      | Type                                | Description                                                      | Remarks |
| --------- | ----------------------------------- | ---------------------------------------------------------------- | ------- |
| type      | "Message" \| "RelationshipTemplate" | The type of Transport object the Request was sent/received in.   |         |
| reference | string                              | The ID of the Transport object the Request was sent/received in. |         |

### LocalResponse

When a Local Request is decided/received, a Local Response is generated, which contains the Response, together with some metadata.

| Name      | Type                               | Description                                                                                                                                             | Remarks |
| --------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| createdAt | string                             | {% include descr_createdAt class="LocalResponse" %}                                                                                                     |         |
| content   | Response                           | The actual Content object this Local Response defines the metadata for.                                                                                 |         |
| source    | LocalResponseSource \| `undefined` | Information about the Transport object with which the Response came in/was sent. This property is `undefined` if the Response is not sent/received yet. |         |

### LocalResponseSource

With the information in this type you can clearly identify the Transport object the Response was sent/received in. Currently there are only two possibilities: Message and Relationship Change.

| Name      | Type                              | Description                                                       | Remarks |
| --------- | --------------------------------- | ----------------------------------------------------------------- | ------- |
| type      | "Message" \| "RelationshipChange" | The type of Transport object the Response was sent/received in.   |         |
| reference | string                            | The ID of the Transport object the Response was sent/received in. |         |

## LocalAttribute

A Local Attribute contains the local metadata for an [Attribute](#attribute). There are three situation a Local Attribute is created in the database:

-   The Identity maintains an Attribute about itself (e.g. sets its first name). We call such a Local Attribute "Repository Attribute".
-   The Identity shares an Attribute of itself with another Identity (e.g. sends it in a Request). In that case, a _copy of the original Local Attribute_ is created, where the `shareInfo` property is set.
-   The Identity receives an Attribute from another Identity (e.g. receives it in a Request). In that case a _new Local Attribute_ is created, where the `shareInfo` is set.

| Name        | Type                                           | Description                                                                                                                                                                                                                    | Remarks |
| ----------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| id          | `string`                                       | {% include descr_id class="LocalAttribute" prefix="ATT" %}                                                                                                                                                                     |         |
| createdAt   | `string`                                       | {% include descr_createdAt class="LocalAttribute" %}                                                                                                                                                                           |         |
| content     | `IdentityAttribute` \| `RelationshipAttribute` | The actual Content object this Local Attribute defines the metadata for.                                                                                                                                                       |         |
| succeeds    | `string` \| `undefined`                        | The ID of the Local Attribute that succeeds the current one.                                                                                                                                                                   |         |
| succeededBy | `string` \| `undefined`                        | The ID of the Local Attribute that is succeeded by the current one.                                                                                                                                                            |         |
| shareInfo   | `LocalAttributeShareInfo` \| `undefined`       | Information about the peer this Local Attribute was received from/shared with, as well as via which Local Request it was received/sent. If the Local Attribute refers to a Repository Attribute, this property is `undefined`. |         |

## LocalAttributeShareInfo

The Local Attribute Share Info help to keep track of how the Local Attribute was received/sent, from whom it was received/who sent it, as well as which Local Attribute it was copied from (in case of a shared Repository Attribute). For example, this enables us to track back who we shared a certain Repository Attribute with, so we are able to notify each of them when changing the Repository Attribute.

| Name             | Type                  | Description                                                                                                                 | Remarks |
| ---------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| requestReference | string                | The ID of the Local Request the Local Attribute was received in/sent with.                                                  |         |
| peer             | string                | The Address of the Identity the Local Attribute was received from/shared with.                                              |         |
| sourceAttribute  | string \| `undefined` | If the Local Attribute is a copy of a Repository Attribute, then this property contains the ID of the Repository Attribute. |         |

