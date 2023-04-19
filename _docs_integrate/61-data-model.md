---
title: "Enmeshed Data Model"
permalink: /integrate/data-model-overview
toc: true
---

The Enmeshed data model can be divided into three parts:

- Transport types
- Local types
- Content types

The following diagram gives you an overview of all the existing types and how they are connected to each other. The subsequent chapters describe these types in more detail.

<div style="width: 100%; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:100%; height:480px" src="https://lucid.app/documents/embedded/66e3002c-335a-4c22-a352-3a7a50a17d37" id="uPhuT48AMcNp"></iframe></div>
(note that you can click on each type in order to navigate to the paragraph with the corresponding description)

At a first glance the amount of types is overwhelming. But in the following chapters all of them are explained in detail.

# Transport Types

Transport types like `RelationshipTemplate`, `Token` or `File` are types that are "exchanged" between Identities via the Backbone. They are created and updated by the [Transport Layer]({% link _docs_explore/42-transport-layer.md %}). In most cases they have a `content` property, which contains the actual payload that should be transferred between the Identities. This payload is being encrypted when it is sent to the Backbone, and decrypted by the other Identity when it is received. The following sections describe the different Transport types and their properties.

Note that the properties of the types are the ones that exist locally (aka on the Connector/in the App). The Backbone does not necessarily know about them. The properties that only exist locally are marked accordingly in the tables below. Further there are properties that are confidential and are therefore encrypted before sent to the Backbone, in order to enable end-to-end encryption. Both kinds of these properties are marked accordingly in the "Remarks" column of the property tables below.

## Token

Tokens can be used to save arbitrary structured data on the Backbone, which is encrypted with a random symmetric key. You can then pass the ID of the Token, together with the random key, to another Identity, which can then retrieve the token and decrypt it, e.g. inside of a QR Code, which you send to the recipient via letter. Tokens can be handy in a lot of scenarios, for example:

- You want to share secret information with someone you don't have a Relationship with.
- The Enmeshed App currently uses a Token to save a Backup of the Identity. ID and secret key are then encoded in a QR Code, which the user can print out and scan later in order to restore the Identity on a new device.

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
| isEphemeral        | `boolean` | //TODO                                                        |

## RelationshipTemplate

A Relationship Template serves two purposes:

1. It represents the permission to establish a Relationship. When sending a Relationship request, the sender has to attach the ID of a valid Relationship Template created by the recipient. Otherwise the Backbone blocks the Relationship request. And since the IDs are randomly generated, you can only obtain such an ID from the recipient.
2. It can contain data which is of interest for the one who uses the Relationship Template. The Enmeshed App for example expects a Relationship Template content which contains a `Request` which contains e.g. Attributes about the creator of the Template as well as queries for Attributes that the Template creator wants to receive together with the Relationship request.

| Name                   | Type                                                                       | Description                                                                                                                                                                                                                                                                                                                                                        | Remarks                                       |
| ---------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| id                     | `string`                                                                   | {% include descr_id class="Relationship Template" prefix="RLT" %}                                                                                                                                                                                                                                                                                                  |                                               |
| isOwn                  | `boolean`                                                                  | {% include descr_isOwn class="Relationship Template" %}                                                                                                                                                                                                                                                                                                            | saved only locally                            |
| createdBy              | `string`                                                                   | {% include descr_createdBy class="Relationship Template" %}                                                                                                                                                                                                                                                                                                        |                                               |
| createdByDevice        | `string`                                                                   | {% include descr_createdByDevice class="Relationship Template" %}                                                                                                                                                                                                                                                                                                  |                                               |
| createdAt              | `string`                                                                   | {% include descr_createdAt class="Token" %}                                                                                                                                                                                                                                                                                                                        |                                               |
| content                | [`RelationshipTemplateContent`](#relationshiptemplatecontent) \| `unknown` | The content of the Relationship Template. You can add whatever you want here. However, if it is intended for a User of the Enmeshed App, `RelationshipTemplateContent` has to be used. Otherwise feel free to insert whatever you want or need.                                                                                                                    |                                               |
| expiresAt              | `string`                                                                   | {% include descr_expiresAt class="Token" %}                                                                                                                                                                                                                                                                                                                        | will be encrypted before sent to the Backbone |
| maxNumberOfAllocations | `number` \| `undefined`                                                    | Can be set to limit the number of allocations of this template. A Relationship Template is allocated by another Identity when it is first retrieved by it from the Backbone. After this value is reached, the Backbone rejects each request of any new Identity that wants to retrieve it. Identities that already allocated it will still be able to retrieve it. |                                               |
| truncatedReference     | `string`                                                                   | {% include descr_truncatedReference class="RelationshipTemplate" %}                                                                                                                                                                                                                                                                                                |                                               |

## Relationship

A Relationships between two Identities is the prerequisite for them to exchange Messages. If there is no Relationship, the Backbone blocks all Messages that are tried to be sent. This ensures that you only receive Messages from Identities you know, so you are protected from any harmful Messages like spam or phishing mails.

| Name     | Type                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Remarks            |
| -------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| id       | `string`                                                                                      | {% include descr_id class="Relationship" prefix="REL" %}                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                    |
| template | `RelationshipTemplate`                                                                        | The Relationship Template that was used to establish this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                             |                    |
| status   | `"Pending"` \| `"Active"` \| `"Rejected"` \| `"Revoked"` \| `"Terminating"` \| `"Terminated"` | The status of this Relationship. <br>{::nomarkdown}<ul><li>Pending: the Relationship was created, but not yet accepted the recipient. In this state you cannot send Messages yet.</li><li>Active: this means that the Relationship is active. As long as it is active, both participants can exchange Messages.</li><li>Rejected: the Relationship was rejected by the recipient.</li><li>Revoked: the Relationship was revoked by the sender.</li><li>Terminating: //TODO</li><li>Terminated: //TODO</li></ul>{:/} |                    |
| changes  | [`RelationshipChange`](#relationshipchange)`[]`                                               | The history of changes made to this Relationship. You can find the definition of a Relationship Change below.                                                                                                                                                                                                                                                                                                                                                                                                       |                    |
| peer     | `string`                                                                                      | The Address of the Identity with which you have this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                  | saved only locally |

### RelationshipChange

Since a Relationship "belongs" to two Identities, each change on such a Relationship demands for the agreement of both parties. That's where Relationship Changes come into play. Whenever one party wants to make a change to the Relationship (like create or terminate it), it sends a Relationship Change to the other party, which has to accept it in order for the change to take effect. If the other party doesn't want to accept it, it can also reject it. And if the party that created the Relationship Change changes its mind, it can revoke the Relationship Change. The Backbone makes sure that a Relationship Change can only be completed in one of those three ways (accepted, rejected, revoked). So for example if you try to accept a Relationship Change that is already revoked, you will receive an error.

| Name     | Type                                                                       | Description                                                                                                                                                                                             | Remarks |
| -------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| id       | `string`                                                                   | {% include descr_id class="Relationship Change" prefix="RCH" %}                                                                                                                                         |         |
| status   | `"Pending"` \|`"Accepted"` \|`"Rejected"` \|`"Revoked"`                    | The current status of the Relationship Change.                                                                                                                                                          |         |
| type     | `"Creation"`                                                               | The type of the Relationship Change. Currently the only existing type is `Creation`. As soon as the termination of Relationships is supported, `Termination` will be a second Relationship Change type. |         |
| request  | [`RelationshipChangeRequest`](#relationshipchangerequest)                  | Information about the request of the Relationship Change.                                                                                                                                               |         |
| response | [`RelationshipChangeResponse`](#relationshipchangeresponse) \| `undefined` | Information about the response of the Relationship Change.                                                                                                                                              |         |

Note that RelationshipChangeRequest and RelationshipChangeResponse have nothing to do with [Requests](#request) and [Responses](#response), which we will discuss later.

### RelationshipChangeRequest

| Name            | Type                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                    | Remarks                                       |
| --------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| createdBy       | `string`                                                                                             | {% include descr_createdBy class="Relationship Change Request" %}                                                                                                                                                                                                                                                                                              |                                               |
| createdByDevice | `string`                                                                                             | {% include descr_createdByDevice class="Relationship Change Request" %}                                                                                                                                                                                                                                                                                        |                                               |
| createdAt       | `string`                                                                                             | {% include descr_createdAt class="Relationship Change Request" %}                                                                                                                                                                                                                                                                                              |                                               |
| content         | [`RelationshipCreationChangeRequestContent`](#relationshipcreationchangerequestcontent) \| `unknown` | The content of the Relationship Change Request. You can add whatever you want here. However, if the other party uses the Enmeshed App, and the type of the Relationship Change is `Creation`, [`RelationshipCreationChangeRequestContent`](#relationshipcreationchangerequestcontent) has to be used. Otherwise feel free to insert whatever you want or need. | will be encrypted before sent to the Backbone |

### RelationshipChangeResponse

| Name            | Type      | Description                                                                                                                                                                         | Remarks                                       |
| --------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| createdBy       | `string`  | {% include descr_createdBy class="Relationship Change Response" %}                                                                                                                  |                                               |
| createdByDevice | `string`  | {% include descr_createdByDevice class="Relationship Change Response" %}                                                                                                            |                                               |
| createdAt       | `string`  | {% include descr_createdAt class="Relationship Change Response" %}                                                                                                                  |                                               |
| content         | `unknown` | The content of the Relationship Change Response. You can add whatever you want here. Since the Enmeshed App doesn't expect any special content here, there is no need to watch out. | will be encrypted before sent to the Backbone |

## Message

A Message is a piece of data that can be sent to one or more recipients. The sender is completely free in what the content of the Message looks like. Though in order to enable a normalized communication, Enmeshed defines some content structures for Messages, and in the future there will be more of those. Consider that the Enmeshed App only supports those normalized Message contents. Currently there are:

- [`Mail`](#mail)
- [`Request`](#request)
- [`ResponseWrapper`](#responsewrapper)

You can read more details about each of these in the corresponding sections of the "Content Types" chapter.

But if you are communicating with another Connector, feel free to settle on any content structure that fits your needs.

| Name            | Type                          | Description                                                                                                                                                                                                                                               | Remarks                                       |
| --------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| id              | `string`                      | {% include descr_id class="Message" prefix="MSG" %}                                                                                                                                                                                                       |                                               |
| content         | `unknown`                     | The content of the Message. You can add whatever you want here. However, if it is intended for a User of the Enmeshed App, use either `Mail`, `Request` or `Response`. Otherwise feel free to insert whatever you want or need.                           | will be encrypted before sent to the Backbone |
| createdBy       | `string`                      | {% include descr_createdBy class="Message" %}                                                                                                                                                                                                             |                                               |
| createdByDevice | `string`                      | {% include descr_createdByDevice class="Message" %}                                                                                                                                                                                                       |                                               |
| recipients      | [`Recipient`](#recipient)`[]` | An array of recipients of this Message.                                                                                                                                                                                                                   |                                               |
| createdAt       | `string`                      | {% include descr_createdAt class="Message" %}                                                                                                                                                                                                             |                                               |
| attachments     | `string[]`                    | An array of [File](#file) IDs you want to attach to your Message. You receive the File ID after you uploaded a file to the Backbone. By attaching a File to a Message, you share the secret key used to encrypt/decrypt the File, which cannot be undone. |                                               |

### Recipient

| Name             | Type                    | Description                                                                                                                                                                                                                                          | Remarks            |
| ---------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| address          | `string`                | The Address of the recipient of the Message.                                                                                                                                                                                                         |                    |
| relationshipId   | `string`                | The ID of the Relationship between the recipient and the sender of the Message.                                                                                                                                                                      | saved only locally |
| receivedAt       | `string` \| `undefined` | A timestamp that describes when the recipient retrieved the Message from the Backbone. `undefined` when the Message wasn't received yet. Caution: "received" does not mean that it was read, so don't mix this up with a read receipt.               |                    |
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

- LocalRequest
- LocalAttribute

Each of them further describes some sub types.

This chapter explains all of those types, together with their properties.

## LocalRequest

A Local Request contains the local metadata for a [Request](#request).

| Name      | Type                                                       | Description                                                                                                                                  |
| --------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | `string`                                                   | {% include descr_id class="LocalRequest" prefix="FIL" %}                                                                                     |
| isOwn     | `boolean`                                                  | `true` if you sent the Request, `false` if you received it.                                                                                  |
| peer      | `string`                                                   | The Identity that sent you the corresponding Request/that you sent the Request to.                                                           |
| createdAt | `string`                                                   | {% include descr_createdAt class="LocalRequest" %}                                                                                           |
| status    | [`LocalRequestStatus`](#localrequeststatus)                | The current status of the Request. See [below](#localrequeststatus) for a list of all possible values.                                       |
| content   | [`Request`](#request)                                      | The actual Content object this Local Request defines the metadata for.                                                                       |
| source    | [`LocalRequestSource`](#localrequestsource) \| `undefined` | Information about the Transport object with which the Request came in/was sent. This property is `undefined` if the Request is not sent yet. |
| response  | [`LocalResponse`](#localresponse) \| `undefined`           | Metadata + Content object of the response. If there is no response yet, this property is `undefined`.                                        |

### LocalRequestStatus

Depending on whether it is an incoming or an outgoing Request, there can be different statuses. The following state diagram shows which status exists in both cases and when there are transitions from one state to another:

![State diagram for Local Request Status]( {{ '/assets/images/explore/RequestStatus%20-%20State%20Diagram.png' | relative_url }} )

Draft
: This status only exists for outgoing Requests. It means that the Local Request was created, but not yet sent.

Open
: In case of an outgoing Request, `Open` means that the Request was sent. The transition to `Open` happens automatically when you send the Request with a Message.
: In case of an incoming Request, `Open` means that the Local Request was received.

DecisionRequired
: After the prerequisites of the Request and all of its Request Items were checked, a decision can be made. At first, the [Decider Module]({% link _docs_explore/61-runtime.md %}#decider-module) tries to make an automatic decision. It therefore checks all LocalRequests in status `DecisionRequired`.

ManualDecisionRequired
: If the Decider Module cannot make a decision, it moves the Local Request to `ManualDecisionRequired`. When the Local Request is in this status, it's the User's turn to decide whether they want to accept or reject the Request.

Decided
: When the User or the Decider Module accepts or rejects the Request, the Response and ResponseItems are generated based on the passed parameters. This Response is saved in the `response` property of the `LocalRequest`, but not yet sent.

Completed
: In case of an incoming Request, the Runtime Module listens to an Event saying that a Request moved to status `Decided`. It then checks on which way the Request was received (Message/RelationshipTemplate) and sends the Response on the corresponding way (by sending a message or creating a Relationship). After the Response was successfully sent, it moves the Local Request to `Completed`.
: In case of an outgoing Request, the Runtime Module listens to the `MessageReceivedEvent` and checks the content of the sent Message for a Response. If there is one, it moves the corresponding Local Request to `Completed`.

Expired
: When the timestamp in `expiresAt` of a Request is reached, the Request automatically moves to the status `Expired`.

### LocalRequestSource

With the information in this type you can clearly identify the Transport object the Request was sent/received in. Currently there are only two possibilities: Message and Relationship Template.

| Name      | Type                                | Description                                                      |
| --------- | ----------------------------------- | ---------------------------------------------------------------- |
| type      | "Message" \| "RelationshipTemplate" | The type of Transport object the Request was sent/received in.   |
| reference | `string`                            | The ID of the Transport object the Request was sent/received in. |

### LocalResponse

When a Local Request is decided/received, a Local Response is generated, which contains the Response, together with some metadata.

| Name      | Type                                                         | Description                                                                                                                                             |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| createdAt | `string`                                                     | {% include descr_createdAt class="LocalResponse" %}                                                                                                     |
| content   | [`Response`](#response)                                      | The actual Content object this Local Response defines the metadata for.                                                                                 |
| source    | [`LocalResponseSource`](#localresponsesource) \| `undefined` | Information about the Transport object with which the Response came in/was sent. This property is `undefined` if the Response is not sent/received yet. |

### LocalResponseSource

With the information in this type you can clearly identify the Transport object the Response was sent/received in. Currently there are only two possibilities: Message and Relationship Change.

| Name      | Type                              | Description                                                       |
| --------- | --------------------------------- | ----------------------------------------------------------------- |
| type      | "Message" \| "RelationshipChange" | The type of Transport object the Response was sent/received in.   |
| reference | `string`                          | The ID of the Transport object the Response was sent/received in. |

## LocalAttribute

A Local Attribute contains the local metadata for an [Attribute](#attributes). There are three situations a Local Attribute is created in the database:

- The Identity maintains an Attribute about itself (e.g. sets its first name). We call such a Local Attribute "Repository Attribute".
- The Identity shares an Attribute of itself with another Identity (e.g. sends it in a Request). In that case, a _copy of the original Local Attribute_ is created, where the `shareInfo` property is set.
- The Identity receives an Attribute from another Identity (e.g. receives it in a Request). In that case a _new Local Attribute_ is created, where the `shareInfo` is set.

| Name        | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | `string`                                                                                       | {% include descr_id class="LocalAttribute" prefix="ATT" %}                                                                                                                                                                                                                                                                                                                                                                             |
| parentId    | `string` \| `undefined`                                                                        | If the Attribute referenced by this Local Attribute is a component of a composite Attribute, the `parentId` property is set to the id of the composite Attribute. Example: if a Local Attribute is created with the content `StreetAddress`, for each property of the `StreetAddress` an additional Local Attribute is created. And each of these will have `parentId` set to the `id` of the Local Attribute for the `StreetAddress`. |
| createdAt   | `string`                                                                                       | {% include descr_createdAt class="LocalAttribute" %}                                                                                                                                                                                                                                                                                                                                                                                   |
| content     | [`IdentityAttribute`](#identityattribute) \| [`RelationshipAttribute`](#relationshipattribute) | The actual Content object this Local Attribute defines the metadata for.                                                                                                                                                                                                                                                                                                                                                               |
| succeeds    | `string` \| `undefined`                                                                        | The ID of the Local Attribute that succeeds the current one.                                                                                                                                                                                                                                                                                                                                                                           |
| succeededBy | `string` \| `undefined`                                                                        | The ID of the Local Attribute that is succeeded by the current one.                                                                                                                                                                                                                                                                                                                                                                    |
| shareInfo   | [`LocalAttributeShareInfo`](#localattributeshareinfo) \| `undefined`                           | Information about the peer this Local Attribute was received from/shared with, as well as via which Local Request it was received/sent. If the Local Attribute refers to a Repository Attribute, this property is `undefined`.                                                                                                                                                                                                         |

### LocalAttributeShareInfo

The Local Attribute Share Info helps to keep track of how the Local Attribute was received/sent, from whom it was received/who sent it, as well as which Local Attribute it was copied from (in case of a shared Repository Attribute). For example, this enables us to track back who we shared a certain Repository Attribute with, so we are able to notify each of them when changing the Repository Attribute.

| Name             | Type                    | Description                                                                                                                 |
| ---------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| requestReference | `string`                | The ID of the Local Request the Local Attribute was received in/sent with.                                                  |
| peer             | `string`                | The Address of the Identity the Local Attribute was received from/shared with.                                              |
| sourceAttribute  | `string` \| `undefined` | If the Local Attribute is a copy of a Repository Attribute, then this property contains the ID of the Repository Attribute. |

## LocalAttributeListener

A LocalAttributeListener is created when you accept an incoming Request with a [`RegisterAttributeListenerRequestItem`]({% link _docs_integrate/62-request-items.md %}#registerattributelistenerrequestitem). It is used to keep track of which Attribute Listeners currently exist and what they are listening for.

| Name  | Type                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                           |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id    | `string`                                                                                                                               | {% include descr_id class="LocalAttributeListener" prefix="ATL" %}                                                                                                                                                                                                                                                                                    |
| query | [`IdentityAttributeQuery`](#identityattributequery) \| [`ThirdPartyRelationshipAttributeQuery`](#thirdpartyrelationshipattributequery) | The query the Attribute that is listened to must match. Note that you cannot send a [`RelationshipAttributeQuery`](#relationshipattributequery) here, because it doesn't make sense: by definition, both parties know about a Relationship Attribute right from the beginning, because one party requests its creation, and the other one accepts it. |
| peer  | `string`                                                                                                                               | The Address of the peer that requested the Attribute Listener.                                                                                                                                                                                                                                                                                        |

# Content Types

Content Types can be seen as a data contract between Identities. The medium through which this data is exchanged are the [Transport types](#transport-types) (e.g. Messages, Tokens, ...). This chapter shows all the Content types and describes their intended usage.

## Request

A Request allows you to ask another Identity to do something. What this "something" is depends on which of the so called [Request Items](#requestitem) were added to the Request (e.g. [`CreateAttributeRequestItem`]({% link _docs_integrate/62-request-items.md %}#createattributerequestitem), [`ReadAttributeRequestItem`]({% link _docs_integrate/62-request-items.md %}#readattributerequestitem), ...). The Request is then sent to the peer via Message or Relationship Template. The peer can then review the Request and decide whether they want to accept or reject it. And if they accept it, they can even choose which of the Items they want to accept. You can also put multiple Items into a [group](#requestitemgroup) in order to ensure that they can only be accepted/rejected as a unit.

| Name        | Type                                        | Description                                                                                                                                                                                                                                                                           |
| ----------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| id          | `string` \| `undefined`                     | Unique identifier of this object. This property is `undefined` if the Request is inside of a Relationship Template. <br>_Remark: the ID of each Request starts with the letters "REQ". This way you can tell apart a Request ID from any other ID just by looking at the prefix._<br> |
| title       | `string` \| `undefined`                     | An optional, human readable title for the Request.                                                                                                                                                                                                                                    |
| description | `string` \| `undefined`                     | An optional, human readable description for the Request.                                                                                                                                                                                                                              |
| expiresAt   | `string` \| `undefined`                     | {% include descr_expiresAt class="Request" %}                                                                                                                                                                                                                                         |
| items       | `(`[`RequestItemGroup`](#requestitemgroup)` | `[`RequestItem`](#requestitem)`)[]`                                                                                                                                                                                                                                                   | An array of Request Items and Groups that are part of the Request. There must be at least one Item or Group per Request. |
| metadata    | `string` \| `undefined`                     | Optional custom metadata that can be sent together with the Request. This property is meant purely for developers who integrate with Enmeshed. They can write for example some kind of key into this property, which can be used later to identify the content of this Request.       |

### RequestItem

Request Items can be sent inside of a Request and specify what should be done when the Request is accepted. `RequestItem` itself only defines some common properties. There are multiple types that inherit from `RequestItem`, like `CreateAttributeRequestItem` or `ReadAttributeRequestItem`.

The base properties are:

| Name                  | Type                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                 | `string` \| `undefined` | An optional, human readable title for the Request Item.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| description           | `string` \| `undefined` | An optional, human readable description for the Request Item.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| metadata              | `object` \| `undefined` | The metadata property can be used to provide arbitrary JSON content by the sender of the request. The metadata is not processed by Enmeshed. It is a great way to use your own process descriptors at the time of sending the request which helps you identify the correct internal process at the time of receiving the response.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| mustBeAccepted        | `boolean`               | The mandatory mustBeAccepted property is used to differentiate between required and optional Request Items within the Request. In other words, if the peer Identity may or may not decide to ignore this specific Request Item. If set to true, the peer cannot accept the Request without accepting this item. For example, some Attributes are mandatory for the business process and thus the respective Request Items must be accepted (mustBeAccepted = true). A consent to a newsletter is optional and thus only can be accepted (mustBeAccepted = false). Keep in mind that if the Request Item is inside of a Request Item Group, then this flag takes effect only when the Group is accepted. So as long as the Group is not accepted, the Item does not have to be accepted either. |
| requireManualDecision | `boolean`               | To block the automated acceptance of Requests, the requireManualDecision property can be set to true. The default is, that each Request Item may be automatically processed on the peer side. If the sender would like to have an enforced manual acceptance step of for example an [AuthenticationRequestItem]({% link _docs_integrate/62-request-items.md %}#authenticationrequestitem) or a [ConsentRequestItem]({% link _docs_integrate/62-request-items.md %}#consentrequestitem), the requireManualDecision property can be set to true.                                                                                                                                                                                                                                                 |

There is a [dedicated site]({% link _docs_integrate/62-request-items.md %}) that lists all available kinds of Request Items.

### RequestItemGroup

| Name           | Type                              | Description                                                                                                                                                                                                                                                                                                                             |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title          | `string` \| `undefined`           | An optional, human readable title for the Request Item Group.                                                                                                                                                                                                                                                                           |
| description    | `string` \| `undefined`           | An optional, human readable description for the RequestItem.                                                                                                                                                                                                                                                                            |
| metadata       | `object` \| `undefined`           | Optional metadata that can be sent together with this RequestItem. The intended usage is the same as of the metadata property of the Request.                                                                                                                                                                                           |
| mustBeAccepted | `boolean`                         | If set to `true`, then this Request Item Group has to be accepted when the Request is accepted.                                                                                                                                                                                                                                         |
| items          | [`RequestItem`](#requestitem)`[]` | The items inside of this Group. There has to be at least one Request Item per Group. Note that we do not support nested Groups at the moment. If you need this feature, you can [raise a feature request](https://github.com/nmshd/feedback/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=%5BFEATURE%5D+). |

## Response

| Name      | Type                                                                                 | Description                                                                                                                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| result    | `"Accepted"` \| `"Rejected"`                                                         | Whether the Response was accepted or rejected by the recipient of the Request.                                                                                                                                                                                 |
| requestId | `string`                                                                             | The `id` of the Request this Response belongs to. The Sender of the Request needs this information to map the Response to the corresponding Request.                                                                                                           |
| items     | `(`[`ResponseItemGroup`](#responseitemgroup)`\|`[`ResponseItem`](#responseitem)`)[]` | An array of Response Items and Groups that are part of the Response. For each Request Item (Group) of the Request, there must be one Response Item (Group) in the Response. Note that the indices have to be the same for matching Request and Response Items. |

### ResponseItem

Response Items are sent inside of a Response. They contain the response data that is sent by the recipient of the Request. There are three different kinds of Response Items: `AcceptResponseItem`, `RejectResponseItem` and `ErrorResponseItem`. Depending on the actual Request Item, there can be different derivations of these three items. For example, in case of a [`CreateAttributeRequestItem`]({% link _docs_integrate/62-request-items.md %}#createattributerequestitem), there is a special [`CreateAttributeAcceptResponseItem`]({% link _docs_integrate/62-request-items.md %}#createattributerequestitem-response-itemproperties), while for an [`AuthenticationRequestItem`]({% link _docs_integrate/62-request-items.md %}#authenticationrequestitem), the [`AcceptResponseItem`](#acceptresponseitem) can be used, because there is no additional information necessary next to whether it was accepted or rejected.

The [site documenting the Request Items]({% link _docs_integrate/62-request-items.md %}) shows which Response Item is required for each Request Item.

#### AcceptResponseItem

The properties of the `AcceptResponseItem` are:

| Name   | Type         | Description                                              |
| ------ | ------------ | -------------------------------------------------------- |
| result | `"Accepted"` | The only possible value here is the string `"Accepted"`. |

#### RejectResponseItem

The properties of the `RejectResponseItem` are:

| Name     | Type                    | Description                                                   |
| -------- | ----------------------- | ------------------------------------------------------------- |
| result   | `"Rejected"`            | The only possible value here is the string `"Rejected"`.      |
| code?    | `string` \| `undefined` | A code telling the sender about the reason for the rejection. |
| message? | `string` \| `undefined` | A human readable message with details about the rejection.    |

#### ErrorResponseItem

The `ErrorResponseItem` is only created by the Enmeshed Runtime, in case something happens which hinders you from further processing of the Request Item. It will never be created manually. The properties are:

| Name    | Type      | Description                                                             |
| ------- | --------- | ----------------------------------------------------------------------- |
| result  | `"Error"` | The only possible value here is the string `"Error"`.                   |
| code    | `string`  | An error code telling the sender about the kind of error that occurred. |
| message | `string`  | A human readable error message with details about the error.            |

### ResponseItemGroup

| Name  | Type                                | Description                                                                                                                                                                                                                     |
| ----- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items | [`ResponseItem`](#responseitem)`[]` | The items inside of this Group. For each Request Item of the Request Item Group, there must be one Response Item in the Response Item Group. Note that the indices have to be the same for matching Request and Response Items. |

## ResponseWrapper

The ResponseWrapper is a wrapper around the Response that is sent by the recipient of the Request. It contains the Response itself, but also some additional information that is required for the Request to be processed correctly.

| Name                   | Type                                    | Description                                                                                                        |
| ---------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| requestId              | `string`                                | The `id` of the Request this Response belongs to.                                                                  |
| requestSourceReference | `string`                                | The reference to the Message or RelationshipTemplate the Request was received with.                                |
| requestSourceType      | `"Message"` \| `"RelationshipTemplate"` | Specifies if the Request was transferred via [Message](#message) or [RelationshipTemplate](#relationshiptemplate). |
| response               | [`Response`](#response)                 | The Response that is sent by the recipient of the Request.                                                         |

## Attributes

An Attribute is some piece of information about an Identity itself (e.g. its name, address, birth date, etc.) or about an Identity in the context of a Relationship (e.g. the customer id the of the user the Relationship). Since the two scenarios differ quite a lot, there are two different types for them: IdentityAttribute and RelationshipAttribute.

### IdentityAttribute

Identity Attributes describe an Identity itself. Their values are strongly normalized. There is a list of available values [here]({% link _docs_integrate/63-attribute-values.md %}).

| Name      | Type                                                                                              | Description                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| owner     | `string`                                                                                          | The Identity that owns this Attribute. Only the owner of an Attribute is allowed to change it after its creation. |
| validFrom | `string` \| `undefined`                                                                           | The date from which on the Attribute is valid. Could be in the future if the Attribute is not yet valid.          |
| validTo   | `string` \| `undefined`                                                                           | The date until this Attribute is valid. Could be in the past if the Attribute is already expired.                 |
| value     | [`IdentityAttributeValue`]({% link _docs_integrate/63-attribute-values.md %}#identity-attributes) | The Attribute's value.                                                                                            |
| tags      | `string[]` \| `undefined`                                                                         | To specify additional information.                                                                                |

### RelationshipAttribute

Relationship Attributes describe an Identity in the context of a Relationship. While there are some types that can be used as a value for a RelationshipAttribute, these types are rather generic (e.g. `ProprietaryString`, `ProprietaryInteger`, ...).

| Name            | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| owner           | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | The Identity that owns this Attribute. Only the owner of an Attribute is allowed to change it after its creation.                                                                                                         |
| validFrom       | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The date from which on the Attribute is valid. Could be in the future if the Attribute is not yet valid.                                                                                                                  |
| validTo         | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The date until this Attribute is valid. Could be in the past if the Attribute is already expired.                                                                                                                         |
| key             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | An arbitrary key that is set by the creator of this Attribute. It is used to identify the Attribute in a query, especially by a third party. Example: you could set something like `customerId` in case of a customer id. |
| isTechnical     | `boolean` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Defines whether the Relationship Attribute contains data that is actually relevant for the user (`isTechnical=false`) or whether it should be hidden in the UI (`isTechnical=true`).                                      |
| value           | [`RelationshipAttributeValue`]({% link _docs_integrate/63-attribute-values.md %}#relationship-attributes)                                                                                                                                                                                                                                                                                                                                                                                                                                 | The Attribute's value.                                                                                                                                                                                                    |
| confidentiality | `"public"` \| `"protected"` \| `"private"` \| When this property is set to `"private"`, it means that third parties are not able to query this Relationship Attribute. It therefore only exists in the Relationship it was created in. If the confidentiality is `"protected"`, third parties can query the Relationship Attribute, but the App shows a warning saying that you should only share it with someone you trust. If the confidentiality is `"public"`, everybody can query the Attribute, without anything special to happen. |                                                                                                                                                                                                                           |

## AttributeQueries

One of the main features of Enmeshed is sharing Attributes. For this, an Identity either proactively sends its Attributes to a peer. Or, if let's say a company wants to know the birth date of its customer, it can ask for it. Depending on the exact use case, the latter can be achieved with one of a bunch of Request Items, like for example a [`ReadAttributeRequestItem`]({% link _docs_integrate/62-request-items.md %}#readattributerequestitem), or a [`CreateAttributeListenerRequestItem`]({% link _docs_integrate/62-request-items.md %}#createattributerequestitem). All of them have in common that they define a `query` property, which contains either an [`IdentityAttributeQuery`](#identityattributequery) or a [`RelationshipAttributeQuery`](#relationshipattributequery).

### IdentityAttributeQuery

An Identity Attribute Query is used to query for Identity Attributes. For that, it defines the following properties:

| Name      | Type                      | Description                                                                                         |
| --------- | ------------------------- | --------------------------------------------------------------------------------------------------- |
| validFrom | `string` \| `undefined`   | The start date of the time frame the returned Attribute should be valid in.                         |
| validTo   | `string` \| `undefined`   | The end date of the time frame the returned Attribute should be valid in.                           |
| valueType | `string`                  | The type of value that should be queried, e.g. `"StreetAddress"`, `"BirthDate"` or `"Nationality"`. |
| tags      | `string[]` \| `undefined` | To specify additional information.                                                                  |

You can only query Identity Attributes owned by the recipient of the query.

### RelationshipAttributeQuery

There are cases in which you want to query some data from your peer that is not an Identity Attribute. An example for this is when an electricity provider asks for the electric meter number of a new customer. Since this information is only relevant in the context of the Relationship, an Identity Attribute wouldn't make any sense here. That's why you would send a RelationshipAttributeQuery. Its properties are:

| Name                   | Type                                                                        | Description                                                                                            |
| ---------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| validFrom              | `string` \| `undefined`                                                     | The start date of the time frame the returned Attribute should be valid in.                            |
| validTo                | `string` \| `undefined`                                                     | The end date of the time frame the returned Attribute should be valid in.                              |
| key                    | `string`                                                                    | The key of the Relationship Attribute that should be queried.                                          |
| owner                  | `string`                                                                    | The owner of the queried Relationship Attribute.                                                       |
| attributeCreationHints | [`RelationshipAttributeCreationHints`](#relationshipattributecreationhints) | Contains information about the value that will be created, like the value type or its confidentiality. |

#### RelationshipAttributeCreationHints

| Name            | Type                                        | Description                                                                                                                                                     |
| --------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title           | `string`                                    | A short text describing the purpose of the Attribute that is about to be created.                                                                               |
| description     | `string` \| `undefined`                     | A long text describing the purpose of the Attribute that is about to be created.                                                                                |
| valueType       | `string`                                    | The value type of the Attribute to be created (e.g. `"ProprietaryInteger"`, `"ProprietaryString"`, ...)                                                         |
| confidentiality | `"public"` \|`"protected"` \|`"private"` \| | The confidentiality of the Attribute to be created. See [`RelationshipAttribute`](#relationshipattribute) for a more detailed description of confidentialities. |
| valueHints      | [`ValueHints`](#valuehints) \| `undefined`  | Hints for validating the value, e.g. a regular expression or a min/max length.                                                                                  |

#### ValueHints

| Name           | Type                                          | Description                                                                                                                                               |
| -------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| editHelp?      | `string`                                      | A help text you can use to describe the purpose of the Attribute.                                                                                         |
| min?           | `number`                                      | In case of a string: the minimum length of the string. In case of an integer: the minimum value.                                                          |
| max?           | `number`                                      | In case of a string: the maximum length of the string. In case of an integer: the maximum value.                                                          |
| pattern?       | `string`                                      | A [regular expression](https://en.wikipedia.org/wiki/Regular_expression) that is used to validate the value. Only applicable if the value is a string.    |
| values?        | [`ValueHintsValue`](#valuehintsvalue)`[]`     | An array of allowed values.                                                                                                                               |
| defaultValue?  | `string` \| `number` \| `boolean`             | The default value that is used if no value is provided.                                                                                                   |
| propertyHints? | `Record<string,` [`ValueHints>`](#valuehints) | A set of Value Hints of all properties. The key is the name of the property and the value a `ValueHints` object. Only applicable if the value is complex. |

#### ValueHintsOverride

Has the same properties as [`ValueHints`](#valuehints), except that all of them are optional. This type is used for some [Relationship Attribute values]({% link _docs_integrate/63-attribute-values.md %}#relationship-attributes)

#### ValueHintsValue

| Name        | Type                              | Description                                  |
| ----------- | --------------------------------- | -------------------------------------------- |
| key         | `string` \| `number` \| `boolean` | The actual value.                            |
| displayName | `string`                          | How the value should be displayed on the UI. |

### ThirdPartyRelationshipAttributeQuery

If you want to query Attributes the user has in the context of a Relationship with a third party, you can use the `ThirdPartyRelationshipAttributeQuery`. An example would be the query for the number of a bonus card managed by another company (like Payback). A ThirdPartyRelationshipAttributeQuery has the following properties:

| Name       | Type                    | Description                                                                                                                                                                          |
| ---------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| validFrom  | `string` \| `undefined` | The start date of the time frame the returned Attribute should be valid in.                                                                                                          |
| validTo    | `string` \| `undefined` | The end date of the time frame the returned Attribute should be valid in.                                                                                                            |
| key        | `string`                | The key of the Relationship Attribute that should be queried.                                                                                                                        |
| owner      | `string`                | The owner of the queried Relationship Attribute. Can be an empty string (`""`), if the owner is unknown or you are querying from multiple thirdParties that could own the attribute. |
| thirdParty | `string[]`              | The Address of the third parties the Relationship Attribute should be queried from.                                                                                                  |

## RelationshipTemplateContent

Theoretically you can send any kind of data in a Relationship Template. However, if your peer uses the Enmeshed App, it will only be able to process Relationship Templates that contain a `RelationshipTemplateContent`, which looks like this:

| Name                   | Type                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                  | `string` \| `undefined`              | An optional, human readable title that should be rendered in the UI.                                                                                                                                                                                                                                                                                                                                                       |
| metadata               | `object` \| `undefined`              | Optional custom metadata that can be sent together with the Relationship Template. This property is meant purely for developers who integrate with Enmeshed. They can write for example some kind of key into this property, which can be used later to identify the content of this Template.                                                                                                                             |
| onNewRelationship      | [`Request`](#request)                | The Request that should pop up to the user in case there is no Relationship yet. In this Request you can send Attributes of yourself the user needs to in order to know who's Template it is (e.g. company name, address, ...), as ask for Attributes of the user you need to know in the Relationship, or send some information you already know about the user, so it can be saved in its wallet (e.g. the customer id). |
| onExistingRelationship | [`Request`](#request) \| `undefined` | The Request that should pop up to the user in case a Relationship already exists. An example usage is a Request with an `AuthenticationRequestItem` for the sake of two-factor authentication.                                                                                                                                                                                                                             |

## RelationshipCreationChangeRequestContent

The naming on this one in combination with its `response` property is a bit confusing. Even though the `RelationshipCreationChangeRequestContent` contains the word "Request", it has a `response` property.
This is because in the context of Relationships, there are [Relationship Changes](#relationshipchange), which have a `request` and a `response` property. But caution: these have nothing to do with the Content-types `Request` and `Response`.

| Name     | Type                    | Description                                                                                                                                                                                                 |
| -------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| response | [`Response`](#response) | The Response to the Request that was contained in the [RelationshipTemplateContent](#relationshiptemplatecontent) (either in the `onExistingRelationship` property or in the `onNewRelationship` property). |

## Mail

A Mail can be sent as the content of a [Message](#message). It is comparable with the classic email, so its properties should not contain any surprise.

| Name    | Type                      | Description                                                                                                 |
| ------- | ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| to      | `string[]`                | The Enmeshed Addresses of the main recipients of this Mail.                                                 |
| cc      | `string[]` \| `undefined` | The Enmeshed Addresses that should receive a copy of this Mail, additionally to the ones specified in `to`. |
| subject | `string`                  | The subject of the Mail.                                                                                    |
| body    | `string`                  | The body of the Mail.                                                                                       |
