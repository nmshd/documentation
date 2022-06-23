---
title: "Transport Layer"
permalink: /explore/layers/transport
toc: true
---

The transport layer is located between the backbone layer and the consumption layer. Thus it acts as the interface between the trusted environment (own device/network) and the untrusted environment (Backbone). It is usually hosted as a REST API by the [Connector]({% link _docs_explore/52-connector.md %}) or programmatically accessed by the [App]({% link _docs_explore/50-app.md %}). The [Runtime]({% link _docs_explore/60-runtime.md %}) is the primary technical building block, containing the transport library, the content library and the crypto library.

**Components**

-   App
-   Connector

# Tasks

## Data Handling

The transport layer introduces a local storage based on a document database. In this database all relevant data is persisted or cached. In addition to the database, the transport layer takes care of serializing and deserializing data structures.

## Syntactical validation of plaintext data

Inbound and outbound data must be validated by the transport layer. It is responsible for checking the syntactical correctness of all data within the local or communicated data structures.

## Encryption

All encryption-relevant topics like key handling and signature verification are encapsulated by the transport layer. The transport layer communicates in plaintext to the consumers building on top of the transport layer. All traffic to the backbone layer is encrypted or "zero knowledge".

## Key Handling

As the transport layer encapsulates all encryption-relevant topics, keys are generated, used and stored within the transport layer.

## Cross-Device Synchronization

The synchronization between the devices is completely encrypted and works a bit like the communication with other identities. When an identity is created, a random synchronization key is generated and used to encrypt and synchronize all local data to the backbone. This synchronization key is then shared when onboarding a new device, allowing the new device to have access to the complete (encrypted) history of the identity on the backbone which can then be downloaded and applied.

Changes on one device are directly synchronized with the backbone and thus communicated to and reflected on other devices. The synchronization service (we also call it datawallet service) only adds information to the identity's history. Therefore, Enmeshed would even be able to roll back local changes on user errors, as we have a kind of local data versioning across devices with this approach.

We have a blocking mechanism in place that only one device can update the identity's history on a single point in time.

## Cross-Device Versioning

The transport layer is also responsible to keep track of the versions used on the actual devices and the possible upgrade of the respective data structures locally and for the device synchronization.

# Entities

## Identity

The identity semantically is the "digital twin" of the actual real-world person or organization.

Technically, the identity primarily consists of one keypair. By signing with the identity's private key, one is able to prove the ownership of the identity and thus manage the identity completely. Based on the identity's public key, the primary identification property, the address is created.

One has to keep in mind that Enmeshed doesn't enforce the validation of the real-world entities. Thus one real-world entity could create fake identities.

Additionally, Enmeshed cannot enforce a uniqueness of real-world entities, i.e. one real-world entity could create multiple Enmeshed identities for itself.

### Address

The identity's address is the primary way to identify an identity. It is a calculated property based on the identity's public key and thus cannot be changed for an identity.

## Devices

A device is a technical part of the identity. One identity can use multiple devices to interact with the outside world. The outside world however usually doesn't care about the devices of one identity. An example of an exception would be multi-device authentication in business processes, where the devices (actually their signatures) would take part in the process itself.

Thus devices are usually handled within the identity, just like one person uses multiple devices for reading mails or browsing the web.

A very interesting part of Enmeshed is, that devices are usually kept in synchronization with each other over a synchronization service. This is a big difference to other communication providers where there is usually a "main" device which is remotely controlled by other devices.

Thus, every device has the complete access on the identity and its data without relying on another device. This is a great backup and recovery mechanism, as having two devices for an identity means an automatic backup device if one device is broken.

### Device Structure

Devices in the Transport Layer have a different set of attributes as devices in the Backbone Layer. The devices of one identity know each other and this is the information which is shared accross the devices.

-   id
-   publicKey (optional)
-   certificate (optional)
-   name
-   description (optional)
-   createdAt
-   createdByDevice
-   operatingSystem (optional)
-   lastLoginAt (optional)
-   type
-   username

### Device Onboarding Info

If a new device is onboarded, the device onboarding info is shared via a side channel. Within this information, all key material is exchanged to access the identity. So this should be kept very secure.

-   id
-   createdAt
-   createdByDevice
-   name (optional)
-   description (optional)
-   secretBaseKey
-   deviceIndex
-   synchronizationKey
-   identityPrivateKey (optional)
-   identity
-   password
-   username

## Files

Abbreviated: FIL

A file is an Enmeshed representation of any binary-large object (BLOB). Handling files is similar to handling tokens, the big difference is, that tokens provide a means to share structured content whereas files are uploaded to and downloaded from the backbone by the help of binary transfer methods.

The actual file is then shared by a file reference to a recipient. Files can be short-lived or long-lived, depending on the business case - use the expiresAt property to define the expiry of a file.

### File Structure

-   id: Random file id generated by the backbone once the upload was finished
-   title: Human readable file title
-   description: Description of the file
-   filename: Filename of the original file (used for storing the file on local systems)
-   filesize: Plaintext size of the original file's payload
-   createdAt: ISO String when the file has been created
-   createdBy: Address of the identity which created the file
-   createdByDevice: Device id of the device which created the file
-   expiresAt: ISO String when the file expires
-   mimetype: Mimetype of the file's payload
-   isOwn: Whether or not the file was uploaded by the current identity
-   deletedAt: ISO String when the file has been deleted
-   deletedBy: Address of the identity which deleted the file
-   deletedByDevice: Device id of the device which deleted the file

### File Reference

The file id and the generated metadata secret key are the only two properties which need to be submitted to another user. Both properties are usually sent within a message to the recipients.

## Messages

Abbreviated: MSG

A message is any kind of structured content which should be securely transmitted to relationships. Messages can be submitted to multiple recipients and can deliver multiple attachments (in form of file references).
Depending on the content of the message, a message could act as a technical message (e.g. a multi-factor authentication request) which shouldn't be rendered.

### Message Structure

-   id: random message id generated by the backbone once the message has been created
-   createdAt: ISO String when the message has been created
-   createdBy: Address of the identity which created the message
-   createdByDevice: Device id of the device which created the message
-   recipients: Array of recipients
    -   address: Address of one of the identity which should receive the message
    -   receivedAt: ISO String when the recipient received the message
    -   receivedByDevice: Device id of the recipient's device which received the message
-   relationshipIds: Array of relationship ids of the recipients (same order as recipients)
-   content: The content of the message
-   attachments: Array of files which are attached to this message

## Relationships

The link between two identities is called relationship. From the view of one identity or its device, the "own" keyword decribes content created by its own. The "peer" keyword describes content of the other party.

Relationships are usually used as the technical term, whereas contact is used as a business terminology. To be more strict, one could say that contacts are active relationships, as a relationship could also be terminated (thus a communication would no longer be possible).

### Relationship Structure

-   id
-   template
-   status
-   peer
-   changes
    -   id
    -   type
    -   status
    -   request
        -   createdBy
        -   createdByDevice
        -   createdAt
        -   content
    -   response
        -   createdBy
        -   createdByDevice
        -   createdAt
        -   content
-   lastMessageSentAt
-   lastMessageReceivedAt

## Relationship Changes

Relationships are agreements between two identities. Thus, to change a relationship both parties have to accept on the new "terms". This is done by requesting a change which the other party can accept or reject. The requestor could also revoke a requested change, as long as the other party did not react to the change yet.

The very first agreement between both parties is to actually create the relationship, the "relationship request". Technically, the term "relationship creation change request" would be more correct but is seldomly used in the documentation because of readability.

### Relationship Creation Change Requests

The relationship request - next to the required technical information - usually contains:

-   Requested information from the requestor
    -   Required/optional attributes
    -   Certificates
    -   Signatures
    -   Answers to questionnaire
-   Websession information
-   OK to privacy statement
-   OK to EULA

## Relationship Templates

A relationship template is a structured representation of data which is required for a relationship to be established. Thus, it is usually also addressing the required information for a business process to start.

Templates solve the problem of linking Enmeshed identities to a currently existing real world context, e.g. an existing customer account or an anonymous web session.

In addition to technical information like public keys, certificates or signatures, it usually contains:

-   Information which the templator would like to share about itself
    -   Templator attributes (e.g. company name, address, phone numbers)
    -   Contact details
-   Private information which the templator would like to share about the requestor
    -   Requestor attributes
    -   Websession information
-   Requested additional information about the requestor
    -   Required/optional attributes
    -   Certificates
    -   Signatures
    -   Questionnaires
-   Meta information
    -   Data privacy guidelines
    -   EULAs

A relationship template needs to be created in order to receive relationship requests and ultimately create an active relationship between two identities. The relationship template is then usually shared with the user via a token.

Relationship templates can be both: identity-specific (template is personalized for one specific identity - which might not exist yet) or identity-agnostic (template is open for multiple identities).

### Generic Templates

Generic templates are used if the counterpart is not known at all. They include the own data which one like to share (e.g. the name of the company) and also data required for the business process.

It does not matter however, who is using the template, as there is no sensitive data stored in the template. Anyone could scan the template and create a relationship with it.

It is possible to use a generic template multiple times, e.g. for anonymous web sites or printed flyers.

It is also possible to create a generic template for every user accesing an anonymous website including a unique id of the web session. This is handy if the website should for example redirect the user to the profile page once the user scanned in the QR-code and the relationship was accepted.

### Personalized Templates

Personalized templates are short-lived relationship templates including sensitive or personal data of a specific person. They are meant to be used by this specific person only, in order to share personalized data when onboarding.

This is usually combined with an upfront digital authentication of the person, e.g. existing web sessions of the user. Only this specific user would then have access to the personalized template within the secured website (e.g. over an QR-code).

Personalized templates are primary used for a much better onboarding experience of net-new Enmeshed users: they won't need to enter their data again, even if the data is already stored somehow.

Personalized templates can only be used if the person is authenticated upfront or it is ensured that only the respective person can receive the template.

It should also be clear that personalized templates should expire as soon as possible, depending on the context. The `maxNumberOfRelationships` property when creating the template should be set to 1, so that the template can only be used once. Careful, it could still be scanned in multiple times - including the access of the personalized data - as long as it is not expired.

**Example 1**
Horst has an online account of his favorite webshop and is already logged in there. The webshop can create a personalized template for Horst which includes Horst's private address. If Horst scans this template, the app can automatically fill Horst's datawallet with the private address. The personalized relationship template might expire after 5 minutes.

**Example 2**
A company has no customer system where customers can log in but would still like to submit information digitally to its customers. The company creates a personalized template for a customer, e.g. Susan and prints the QR-Code on a letter. Susan can then scan in the QR-Code and can establish a secure connection to the company, although there is no online customer system. The personalized relationship template might expire after two weeks.

### Relationship Template Structure

-   id
-   maxNumberOfRelationships
-   isOwn
-   createdBy
-   createdByDevice
-   createdAt
-   expiresAt
-   content

## Tokens

Commonly used data-sharing possibilities like links (URIs) or QR codes are limited in size. Thus, even compressed representations of - e.g. relationship templates - are too big to be stored in a QR code. In addition, the data which is shared usually should expire after a certain period in time. For example, a personalized relationship template containing sensitive data should be deleted after 5 minutes.

To overcome these technical limitations, an indirection with a shared token is introduced. The token acts as a small data-reference object: The actual to-be-shared data is encrypted with a random key and the corresponding cipher is stored on the central platform with additional information like an expiry date.

Tokens can be accessed by everyone (having a correct token id and the respective token secret key). Tokens are usually short lived content, however the expiry of tokens can be set to any date.

### Token References

The token id and the generated secret key are then the only two properties which need to be submitted to another user. Both properties are usually encoded into a base64url-encoded format which is called token reference. This token reference is usually transfered to another user in the shape of a link or a QR code.

### Token Structure

-   id
-   createdBy
-   createdByDevice
-   createdAt
-   expiresAt
-   content
-   secretKey
-   truncatedReference
