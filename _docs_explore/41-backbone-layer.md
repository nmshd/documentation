---
title: "Backbone Layer"
permalink: /explore/layers/backbone
---

From a user perspective, the outmost or deepest layer is the backbone layer. It handles the "untrusted" communication with the backbone. Payload sent to and received from the Backbone is encrypted.

The Backbone itself requires metadata to work, thus there is also unencrypted data sent and received between the transport layer and the Backbone. However, this data is non-personal and cannot be linked back to any real-world persons by the Backbone operator.

# Challenges

Abbreviated: CHL

Stored data on Backbone:

-   id
-   createdBy
-   createdByDevice
-   expiresAt

Submitted data to Backbone:

-   id

# Datawallet Modifications

Stored data on Backbone:

-   Datawallet Modifications
    -   id: string
    -   index: number
    -   objectIdentifier: string
    -   payloadCategory?: string
    -   createdAt: string
    -   createdByDevice: string
    -   collection: string
    -   type: string
    -   encryptedPayload?: string
-   External Events
    -   id: string
    -   type: string
    -   index: number
    -   createdAt: string
    -   syncErrorCount: number
    -   payload: object
-   Backbone sync run
    -   id: string
    -   expiresAt: string
    -   index: number
    -   createdAt: string
    -   createdBy: string
    -   createdByDevice: string
    -   eventCount: number

Data submitted to Backbone:

-   Datawallet Modifications
    -   localIndex
    -   modifications[]
        -   objectIdentifier: string
        -   payloadCategory?: string
        -   collection: string
        -   type: string
        -   encryptedPayload?: string
-   FinalizeSyncRun
    -   externalEventResults[]
        -   externalEventId: string
        -   errorCode?: string
    -   datawalletModifications[]
        -   objectIdentifier?: string
        -   payloadCategory?: string
        -   collection: string
        -   type: string
        -   encryptedPayload?: string

# Devices

Abbreviated: DEV

Stored data on Backbone:

-   id
-   createdAt
-   createdByDevice
-   devicePassword
-   username
-   platform
-   handle
-   installationId

Submitted data to Backbone:

-   devicePassword
-   signedChallenge
-   platform
-   handle
-   installationId

# Identities

Stored data on Backbone:

-   address
-   createdAt
-   identityPublicKey

Submitted data to Backbone:

-   devicePassword
-   signedChallenge
-   clientId
-   clientSecret

# Tokens

Abbreviated: TOK

Stored data on Backbone:

-   id: string
-   content: string
-   createdAt: string
-   createdBy: string
-   createdByDevice: string
-   expiresAt: string

Submitted data to Backbone:

-   content
-   expiresAt

# Files

Abbreviated: FIL

Stored data on Backbone:

-   id
-   createdAt
-   createdBy
-   createdByDevice
-   modifiedAt
-   modifiedBy
-   modifiedByDevice
-   deletedAt
-   deletedBy
-   deletedByDevice
-   owner
-   ownerSignature
-   cipherSize: number
-   cipherHash
-   expiresAt
-   encryptedProperties
-   file cipher

Submitted data to Backbone:

-   file cipher
-   cipherHash
-   owner
-   ownerSignature
-   expiresAt
-   encryptedProperties

## File Structure

# Messages

Abbreviated: MSG

Data stored on Backbone:

-   id
-   createdAt
-   createdBy
-   createdByDevice
-   body
-   attachments[]
    -   file id
-   recipients[]
    -   address
    -   encryptedKey
    -   receivedAt
    -   receivedByDevice

Data submitted to Backbone:

-   body
-   recipients[]
    -   address
    -   encryptedKey
-   attachments[]
    -   file id

# Relationships

Abbreviated: REL

Data stored on Backbone:

-   id
-   relationshipTemplateId
-   from
-   to
-   changes[]

    -   id
    -   relationshipId
    -   request
        -   createdBy
        -   createdByDevice
        -   createdAt
        -   content?
    -   response?: BackboneGetRelationshipsChangesSingleChangeResponse
        -   createdBy
        -   createdByDevice
        -   createdAt
        -   content?
    -   status: RelationshipChangeStatus
    -   type: RelationshipChangeType

-   createdAt
-   status

Data submitted to Backbone:

-   relationshipTemplateId
-   relationshipChangeContent

# Relationship Templates

Abbreviated: RLT

Data stored on Backbone:

-   id: string
-   createdBy: string
-   createdByDevice: string
-   maxNumberOfRelationships?: number
-   expiresAt?: string
-   content: string
-   createdAt: string
-   deletedAt?: string

Data submitted to Backbone:

-   expiresAt?: string
-   maxNumberOfRelationships?: number
-   content: string
