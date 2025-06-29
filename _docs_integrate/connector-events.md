---
# Start automatic generation
permalink: integrate/connector-events
redirect_from:
  - /integrate/connector-events
published: true
title: "Connector Events"
type: scenario
toc: true
properties:
  - id: SC043
  - category: Data Model
  - description:
  - customer: All
  - component: integrate
  - level: Advanced
  - implementation status: DOCS ONLY
  - documentation status: OLD
  - published: true
  - link: connector-events
require:
required_by:
# End automatic generation
---

| Event                                                                          | Data                                                                                                 | Description (This event is triggered when ...)                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| consumption.attributeCreated                                                   | [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute)                   | ... an Attribute was created manually or through a Request.                                                                                                                                                                                                                                                                                                                                                                                 |
| consumption.attributeDeleted                                                   | [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute)                   | ... an Attribute was deleted manually or through a Request.                                                                                                                                                                                                                                                                                                                                                                                 |
| consumption.attributeSucceeded                                                 | [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute)                   | ... an Attribute was succeeded manually or through a Request.                                                                                                                                                                                                                                                                                                                                                                               |
| consumption.attributeUpdated                                                   | [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute)                   | ... an Attribute was updated manually or through a Request.                                                                                                                                                                                                                                                                                                                                                                                 |
| consumption.incomingRequestReceived                                            | [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)                       | ... an incoming Request was received either by loading a RelationshipTemplate or by receiving a Message                                                                                                                                                                                                                                                                                                                                     |
| consumption.incomingRequestStatusChanged                                       | [RequestStatusChangedEventData](#requeststatuschangedeventdata)                                      | ... the status of an incoming Request has changed.                                                                                                                                                                                                                                                                                                                                                                                          |
| consumption.messageProcessed                                                   | [MessageProcessedEventData](#messageprocessedeventdata)                                              | ... a Message was processed by Modules like the `RequestModule` or `DeciderModule`.                                                                                                                                                                                                                                                                                                                                                         |
| consumption.outgoingRequestCreated                                             | [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)                       | ... any outgoing Request was created by the Connector API or Connector Module.                                                                                                                                                                                                                                                                                                                                                              |
| consumption.outgoingRequestCreatedAndCompleted                                 | [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)                       | ... any outgoing Request was transferred via a RelationshipTemplate.<br>This event could either be triggered:<br> • by an incoming pending Relationship using the `onNewRelationship` property within the RelationshipTemplate<br>Content<br> • by an incoming Message using the `onExistingRelationship` property within the RelationshipTemplate<br>Content, if the user already has a Relationship with the RelationshipTemplate creator |
| consumption.<br>outgoingRequestFromRelationshipCreation<br>CreatedAndCompleted | [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)                       | ... a `consumption.`<br>`outgoingRequest`<br>`CreatedAndCompleted` event is fired and it was fired due to an incoming pending Relationship. This convenience event is useful to act on incoming pending Relationships.                                                                                                                                                                                                                      |
| consumption.outgoingRequestStatusChanged                                       | [RequestStatusChangedEventData](#requeststatuschangedeventdata)                                      | ... the status of an outgoing Request has changed.                                                                                                                                                                                                                                                                                                                                                                                          |
| consumption.relationshipTemplateProcessed                                      | [RelationshipTemplateProcessedEventData](#relationshiptemplateprocessedeventdata)                    | ... a RelationshipTemplate was processed by Modules like the `RequestModule` or `DeciderModule`.                                                                                                                                                                                                                                                                                                                                            |
| consumption.sharedAttributeCopyCreated                                         | [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute)                   | ... an Attribute is copied for sharing with another Identity.                                                                                                                                                                                                                                                                                                                                                                               |
| transport.fileOwnershipClaimed                                                 | [File]({% link _docs_integrate/data-model-overview.md %}#file)                                       | ... the ownership of the File was claimed by another Identity. This happens when they accept a corresponding [TransferFileOwnershipRequestItem]({% link _docs_integrate/data-model-overview.md %}#transferfileownershiprequestitem).                                                                                                                                                                                                        |
| transport.fileOwnershipLocked                                                  | [File]({% link _docs_integrate/data-model-overview.md %}#file)                                       | ... the ownership of the File is locked and can only be claimed once the [`ownershipToken` is regenerated]({% link _docs_use-cases/use-case-transport-regenerate-file-ownership-token.md %}).                                                                                                                                                                                                                                               |
| transport.identityDeletionProcessStatusChanged                                 | [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) | ... a new IdentityDeletionProcess has been created or the status of an existing IdentityDeletionProcess has changed.                                                                                                                                                                                                                                                                                                                        |
| transport.messageReceived                                                      | [Message]({% link _docs_integrate/data-model-overview.md %}#message)                                 | ... a Message is received during synchronization.                                                                                                                                                                                                                                                                                                                                                                                           |
| transport.messageSent                                                          | [Message]({% link _docs_integrate/data-model-overview.md %}#message)                                 | ... a Message was sent.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| transport.peerRelationshipTemplateLoaded                                       | [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)       | ... a RelationshipTemplate was loaded that belongs to another Identity.                                                                                                                                                                                                                                                                                                                                                                     |
| transport.relationshipChanged                                                  | [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)                       | ... a Relationship has changed. This can be due to one of the following cases:<br> • you create a Relationship<br> • you accept, reject or revoke a pending Relationship<br> • you terminate an active Relationship<br> • you request the reactivation of a terminated Relationship or accept, reject or revoke such a reactivation request<br> • a new Relationship is received or an existing one changed during synchronization          |
| transport.relationshipReactivationRequested                                    | [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)                       | ... the reactivation of a terminated Relationship has been requested by you or the peer.                                                                                                                                                                                                                                                                                                                                                    |
| transport.relationshipReactivationCompleted                                    | [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)                       | ... the reactivation of a terminated Relationship has been accepted, rejected or revoked by you or the peer.                                                                                                                                                                                                                                                                                                                                |
| transport.relationshipDecomposedBySelf                                         | [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)                       | ... you have decomposed a terminated Relationship.                                                                                                                                                                                                                                                                                                                                                                                          |
| transport.relationshipTemplateAllocationsExhausted                             | [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)       | ... an own RelationshipTemplate has reached its `maxNumberOfAllocations` and can therefore no longer be allocated by further peers.                                                                                                                                                                                                                                                                                                         |
| transport.peerToBeDeleted                                                      | [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)                       | ... your Relationship's peer triggered their deletion.                                                                                                                                                                                                                                                                                                                                                                                      |
| transport.peerDeleted                                                          | [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)                       | ... your Relationship's peer was deleted.                                                                                                                                                                                                                                                                                                                                                                                                   |
| transport.peerDeletionCancelled                                                | [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship)                       | ... your Relationship's peer cancelled their deletion.                                                                                                                                                                                                                                                                                                                                                                                      |

## Event structure

Every event is structured as follows (TData depends on the actual event, e.g. `LocalAttribute`):

```ts
interface Event<TData> {
  namespace: string;
  eventTargetAddress: string;
  data: TData;
}
```

### RequestStatusChangedEventData

> [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest)

```ts
export interface RequestStatusChangedEventData {
  request: LocalRequest;
  oldStatus: LocalRequestStatus;
  newStatus: LocalRequestStatus;
}
```

### MessageProcessedEventData

> [Message]({% link _docs_integrate/data-model-overview.md %}#message)

```ts
export interface MessageProcessedEventData {
  message: MessageDTO;
  result: "ManualRequestDecisionRequired" | "NoRequest" | "Error";
}
```

### RelationshipTemplateProcessedEventData

> [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)

```ts
export interface RelationshipTemplateProcessedEventData {
  template: RelationshipTemplateDTO;
  result: "ManualRequestDecisionRequired" | "NonCompletedRequestExists" | "RelationshipExists" | "NoRequest" | "Error";
}
```
