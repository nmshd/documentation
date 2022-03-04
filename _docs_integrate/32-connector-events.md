---
title: "Connector Events"
permalink: /integrate/connector-events
---

| Event                         | Data                          | Description                                                                                                                                                                                                                                                        |
| ----------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| transport.messageReceived     | [Message](#message)           | This event is triggered when a Message is received during synchonization.                                                                                                                                                                                          |
| transport.messageSent         | [Message](#message)           | This event is triggered whenever a Message is sent.                                                                                                                                                                                                                |
| transport.relationshipChanged | [Relationship](#relationship) | This event is triggered when a Relationship has changed. This can be due to one of the following cases: <br> • you create a Relationship <br> • you accept, reject or revoke a Relationship Change <br> • a Relationship Change is received during synchronization |

## Type definitions

### Message

```ts
interface Message {
    id: string;
    content: unknown;
    createdBy: string;
    createdByDevice: string;
    recipients: Recipient[];
    relationshipIds: string[];
    createdAt: string;
    attachments: string[];
}

interface Recipient {
    address: string;
    receivedAt?: string;
    receivedByDevice?: string;
}
```

### Relationship

```ts
interface Relationship {
    id: string;
    template: RelationshipTemplate;
    status: RelationshipStatus;
    peer: string;
    peerIdentity: Identity;
    changes: RelationshipChange[];
    lastMessageSentAt?: string;
    lastMessageReceivedAt?: string;
}

interface RelationshipTemplate {
    id: string;
    isOwn: boolean;
    createdBy: string;
    createdByDevice: string;
    createdAt: string;
    content: unknown;
    expiresAt?: string;
    maxNumberOfRelationships?: number;
}

enum RelationshipStatus {
    Pending = "Pending",
    Active = "Active",
    Rejected = "Rejected",
    Revoked = "Revoked",
    Terminating = "Terminating",
    Terminated = "Terminated"
}

interface Identity {
    address: string;
    publicKey: string;
    realm: string;
}

interface RelationshipChange {
    id: string;
    request: RelationshipChangeRequest;
    status: RelationshipChangeStatus;
    type: RelationshipChangeType;
    response?: RelationshipChangeResponse;
}

interface RelationshipChangeRequest {
    createdBy: string;
    createdByDevice: string;
    createdAt: string;
    content?: unknown;
}

enum RelationshipChangeStatus {
    Pending = "Pending",
    Rejected = "Rejected",
    Revoked = "Revoked",
    Accepted = "Accepted"
}

enum RelationshipChangeType {
    Creation = "Creation",
    Termination = "Termination",
    TerminationCancellation = "TerminationCancellation"
}

interface RelationshipChangeResponse {
    createdBy: string;
    createdByDevice: string;
    createdAt: string;
    content?: unknown;
}
```
