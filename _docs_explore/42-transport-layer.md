---
title: "Transport Layer"
permalink: /explore/layers/transport
toc: true
---

The transport layer is located between the Backbone layer and the consumption layer. Thus it acts as the interface between the trusted environment (own device/network) and the untrusted environment (Backbone). It is usually hosted as a REST API by the [Connector]({% link _docs_explore/52-connector.md %}) or programmatically accessed by the [App]({% link _docs_explore/50-app.md %}). The [Runtime]({% link _docs_explore/61-runtime.md %}) is the primary technical building block, containing the transport library, the content library and the crypto library.

**Components**

- App
- Connector

# Tasks

## Data Handling

The transport layer introduces a local storage based on a document database. In this database all relevant data is persisted or cached. In addition to the database, the transport layer takes care of serializing and deserializing data structures.

## Syntactical validation of plaintext data

Inbound and outbound data must be validated by the transport layer. It is responsible for checking the syntactical correctness of all data within the local or communicated data structures.

## Encryption

All encryption-relevant topics like key handling and signature verification are encapsulated by the transport layer. The transport layer communicates in plaintext to the consumers building on top of the transport layer. All traffic to the Backbone layer is encrypted or "least knowledge".

## Key Handling

As the transport layer encapsulates all encryption-relevant topics, keys are generated, used and stored within the transport layer.

## Cross-Device Synchronization

The synchronization between the devices is completely encrypted and works a bit like the communication with other Identities. When an Identity is created, a random synchronization key is generated and used to encrypt and synchronize all local data to the backbone. This synchronization key is then shared when onboarding a new device, allowing the new device to have access to the complete (encrypted) history of the Identity on the Backbone which can then be downloaded and applied.

Changes on one device are directly synchronized with the Backbone and thus communicated to and reflected on other devices. The synchronization service (we also call it datawallet service) only adds information to the Identity's history. Therefore, enmeshed would even be able to roll back local changes on user errors, as we have a kind of local data versioning across devices with this approach.

We have a blocking mechanism in place that allows only one device to update the Identity's history on a single point in time.

## Cross-Device Versioning

The transport layer is also responsible for keeping track of the versions used on the actual devices and the possible upgrade of the respective data structures locally and for the device synchronization.

# Entities

## Identity

The Identity semantically is the "digital twin" of the actual real-world person or organization.

Technically, the Identity primarily consists of one keypair. By signing with the Identity's private key, one is able to prove the ownership of the Identity and thus manage the Identity completely. Based on the Identity's public key, the primary identification property, the address is created.

One has to keep in mind that enmeshed doesn't enforce the validation of the real-world entities. Thus one real-world entity could create fake Identities.

Additionally, enmeshed cannot enforce a uniqueness of real-world entities, i.e. one real-world entity could create multiple enmeshed Identities for itself.

### Address

The Identity's address is the primary way to identify an Identity. It is a calculated property based on the Identity's public key and thus cannot be changed for an Identity.

## Devices

A device is a technical part of the Identity. One Identity can use multiple devices to interact with the outside world. The outside world however usually doesn't care about the devices of one Identity. An example of an exception would be multi-device authentication in business processes, where the devices (actually their signatures) would take part in the process itself.

Thus devices are usually handled within the Identity, just like one person uses multiple devices for reading mails or browsing the web.

A very interesting part of enmeshed is, that devices are usually kept in synchronization with each other over a synchronization service. This is a big difference from other communication providers where there is usually a "main" device which is remotely controlled by other devices.

Thus, every device has the complete access on the Identity and its data without relying on another device. This is a great backup and recovery mechanism, as having two devices for an Identity means an automatic backup device if one device is broken or replaced.

### Device Structure

Devices in the Transport Layer have a different set of Attributes from devices in the Backbone Layer. The devices of one Identity know each other and this is the information which is shared accross the devices.

- id
- publicKey (optional)
- certificate (optional)
- name
- description (optional)
- createdAt
- createdByDevice
- operatingSystem (optional)
- lastLoginAt (optional)
- type
- username

### Device Onboarding Info

If a new device is onboarded, the device onboarding info is shared via a side channel. With this information, all necessary data is exchanged to access the Identity. So this should be kept very secure.

- id
- createdAt
- createdByDevice
- name (optional)
- description (optional)
- secretBaseKey
- deviceIndex
- synchronizationKey
- IdentityPrivateKey (optional)
- Identity
- password
- username

## Files

Abbreviated: FIL

A file is an enmeshed representation of any binary-large object (BLOB). Handling files is similar to handling tokens, the big difference is, that tokens provide a means to share structured content whereas files are uploaded to and downloaded from the Backbone by the help of binary transfer methods.

The actual file is then shared by a file reference to a recipient. Files can be short-lived or long-lived, depending on the business case - use the expiresAt property to define the expiry of a file.

### File Structure

- id: Random file id generated by the Backbone once the upload was finished
- title: Human readable file title
- description: Description of the file
- filename: Filename of the original file (used for storing the file on local systems)
- filesize: Plaintext size of the original file's payload
- createdAt: ISO String when the file has been created
- createdBy: Address of the Identity which created the file
- createdByDevice: Device id of the device which created the file
- expiresAt: ISO String when the file expires
- mimetype: Mimetype of the file's payload
- isOwn: Whether or not the file was uploaded by the current Identity
- reference: The reference of the file
- deletedAt: ISO String when the file has been deleted
- deletedBy: Address of the Identity which deleted the file
- deletedByDevice: Device id of the device which deleted the file

### File Reference

The file id and the generated metadata secret key are the only two properties which need to be submitted to another user. Both properties are usually sent within a Message to the recipients.

## Messages

Abbreviated: MSG

A Message is any kind of structured content which should be securely transmitted to Relationships. Messages can be submitted to multiple recipients and can deliver multiple attachments (in form of file references).
Depending on the content of the Message, a Message could act as a technical Message (e.g. a multi-factor authentication request) which shouldn't be rendered.

### Message Structure

- id: random Message id generated by the Backbone once the Message has been created
- createdAt: ISO String when the Message has been created
- createdBy: Address of the Identity which created the Message
- createdByDevice: Device id of the device which created the Message
- recipients: Array of recipients
  - address: Address of one of the Identity which should receive the Message
  - receivedAt: ISO String when the recipient received the Message
  - receivedByDevice: Device id of the recipient's device which received the Message
- relationshipIds: Array of Relationship IDs of the recipients (same order as recipients)
- content: The content of the Message
- attachments: Array of files which are attached to this Message
- isOwn: Whether or not the Message was sent by the current Identity
- wasReadAt: ISO String indicating when the Message was firstly read

## Relationships

The link between two Identities is called Relationship. From the view of one Identity or its device, the "own" keyword decribes content created by its own. The "peer" keyword describes content of the other party.

Relationships are usually used as the technical term, whereas contact is used as a business terminology. To be more strict, one could say that contacts are active Relationships, as a Relationship could also be terminated (thus a communication would no longer be possible).

### Relationship Structure

- id
- templateId
- status
- peer
- peerIdentity
- peerDeletionInfo
- creationContent
- auditLog
  - createdAt
  - createdBy
  - createdByDevice
  - reason
  - oldStatus
  - newStatus
- lastMessageSentAt
- lastMessageReceivedAt

## Relationship Audit Log

Any time either side changes the status of the Relationship, it is recorded in the audit log. Reactivation requests of a terminated Relationship and responses to those requests are also recorded.
The very first recorded operation is the creation of the then pending Relationship, a second operation could be the acceptance resulting in an active Relationship.

### Relationship Creation Content

The Relationship creation content usually contains:

- Requested information from the requestor
  - Required/optional Attributes
  - Certificates
  - Signatures
  - Answers to questionnaire
- Websession information
- OK to privacy statement
- OK to EULA

## RelationshipTemplates

A RelationshipTemplate is a structured representation of data which is required for a Relationship to be established. Thus, it is usually also addressing the required information for a business process to start.

RelationshipTemplates solve the problem of linking enmeshed Identities to a currently existing real world context, e.g. an existing customer account or an anonymous web session.

In addition to technical information like public keys, certificates or signatures, it usually contains:

- Information which the templator would like to share about itself
  - Templator Attributes (e.g. company name, address, phone numbers)
  - Contact details
- Private information which the templator would like to share about the requestor
  - Requestor Attributes
  - Websession information
- Requested additional information about the requestor
  - Required/optional Attributes
  - Certificates
  - Signatures
  - Questionnaires
- Meta information
  - Data privacy guidelines
  - EULAs

A RelationshipTemplate needs to be created in order to receive pending Relationships and ultimately create an active Relationship between two Identities. The RelationshipTemplate is then usually shared with the user via a token.

RelationshipTemplates can be both: Identity-specific (RelationshipTemplate is personalized for one specific Identity - which might not exist yet) or Identity-agnostic (RelationshipTemplate is open for multiple Identities).

### Generic RelationshipTemplates

Generic RelationshipTemplates are used if the counterpart is not known at all. They include their own data which they would like to share (e.g. the name of the company) and also data required for the business process.

It does not matter however, who is using the RelationshipTemplate, as there is no sensitive data stored in the RelationshipTemplate. Anyone could scan the RelationshipTemplate and create a Relationship with it.

It is possible to use a generic RelationshipTemplate multiple times, e.g. for anonymous web sites or printed flyers.

It is also possible to create a generic RelationshipTemplate for every user accessing an anonymous website including a unique id of the web session. This could be handy if the website should for example redirect the user to the profile page once the user scanned the QR code and the Relationship was accepted.

### Personalized RelationshipTemplates

Personalized RelationshipTemplates are short-lived RelationshipTemplates including sensitive or personal data of a specific person. They are meant to be used by this specific person only, in order to share personalized data when onboarding.

This is usually combined with an upfront digital authentication of the person, e.g. existing web sessions of the user. Only this specific user would then have access to the personalized RelationshipTemplate within the secured website (e.g. over an QR code).

Personalized RelationshipTemplates are primary used for a much better onboarding experience of net-new enmeshed users: they won't need to enter their data again, even if the data is already stored somehow.

Personalized RelationshipTemplates can only be used if the person is authenticated upfront or it is ensured that only the respective person can receive the RelationshipTemplate.

It should also be clear that personalized RelationshipTemplates should expire as soon as possible, depending on the context. The `maxNumberOfAllocations` property when creating the RelationshipTemplate should be set to 1, so that the RelationshipTemplate can only be used once. Keep in mind that it could still be scanned multiple times - including the access of the personalized data - as long as it is not expired.

**Example 1**
Horst has an online account of his favorite webshop and is already logged in there. The webshop can create a personalized RelationshipTemplate for Horst which includes Horst's private address. If Horst scans this RelationshipTemplate, the App can automatically fill Horst's datawallet with the private address. The personalized RelationshipTemplate might expire after 5 minutes.

**Example 2**
A company has no customer system where customers can log in but would still like to submit information digitally to its customers. The company creates a personalized RelationshipTemplate for a customer, e.g. Susan and prints the QR code on a letter. Susan can then scan in the QR code and can establish a secure connection to the company, although there is no online customer system. The personalized RelationshipTemplate might expire after two weeks.

### RelationshipTemplate Structure

- id
- maxNumberOfAllocations
- isOwn
- createdBy
- createdByDevice
- createdAt
- expiresAt
- content
- forIdentity
- passwordProtection
- reference

## Tokens

Commonly used data-sharing possibilities like links (URIs) or QR codes are limited in size. Thus, even compressed representations of - e.g. RelationshipTemplates - are too big to be stored in a QR code. In addition, the data which is shared usually should expire after a certain period of time. For example, a personalized RelationshipTemplate containing sensitive data should be deleted after 5 minutes.

To overcome these technical limitations, an indirection with a shared token is introduced. The token acts as a small data-reference object: The actual to-be-shared data is encrypted with a random key and the corresponding cipher is stored on the central platform with additional information like an expiry date.

Tokens can be accessed by everyone (having a correct token id and the respective token secret key). Tokens are usually short lived content, however the expiry of tokens can be set to any date.

### Token References

The token id and the generated secret key are then the only two properties which need to be submitted to another user. Both properties are usually encoded into a Base64URL-encoded format which is called token reference. This token reference is usually transferred to another user in the shape of a link or a QR code.

### Token Structure

- id
- isOwn
- createdBy
- createdByDevice
- createdAt
- expiresAt
- content
- forIdentity
- passwordProtection
- reference
