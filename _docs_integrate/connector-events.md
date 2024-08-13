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

| Event                                                                          | Data                                                                                           | Description (This event is triggered when ...)                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| consumption.attributeCreated                                                   | [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute)             | ... an Attribute was created manually or through a Request.                                                                                                                                                                                                                                                                                                                                                                                         |
| consumption.attributeDeleted                                                   | [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute)             | ... an Attribute was deleted manually or through a Request.                                                                                                                                                                                                                                                                                                                                                                                         |
| consumption.attributeSucceeded                                                 | [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute)             | ... an Attribute was succeeded manually or through a Request.                                                                                                                                                                                                                                                                                                                                                                                       |
| consumption.attributeUpdated                                                   | [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute)             | ... an Attribute was updated manually or through a Request.                                                                                                                                                                                                                                                                                                                                                                                         |
| consumption.incomingRequestReceived                                            | [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#LocalRequest)                 | ... an incoming Request was received either by loading a RelationshipTemplate or by receiving a Message                                                                                                                                                                                                                                                                                                                                             |
| consumption.incomingRequestStatusChanged                                       | [RequestStatusChangedEventData](#requeststatuschangedeventdata)                                | ... the status of an incoming Request has changed.                                                                                                                                                                                                                                                                                                                                                                                                  |
| consumption.messageProcessed                                                   | [MessageProcessedEventData](#messageprocessedeventdata)                                        | ... a Message was processed by Modules like the `RequestModule` or `DeciderModule`.                                                                                                                                                                                                                                                                                                                                                                 |
| consumption.outgoingRequestCreated                                             | [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#LocalRequest)                 | ... any outgoing Request was created by the Connector API or Connector Module.                                                                                                                                                                                                                                                                                                                                                                      |
| consumption.outgoingRequestCreatedAndCompleted                                 | [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#LocalRequest)                 | ... any outgoing Request was transferred via a RelationshipTemplate.<br>This event could either be triggered:<br> • by an incoming Relationship creation change using the `onNewRelationship` property within the RelationshipTemplate<br>Content<br> • by an incoming Message using the `onExistingRelationship` property within the RelationshipTemplate<br>Content, if the user already has a Relationship with the RelationshipTemplate creator |
| consumption.<br>outgoingRequestFromRelationshipCreation<br>CreatedAndCompleted | [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#LocalRequest)                 | ... a `consumption.`<br>`outgoingRequest`<br>`CreatedAndCompleted` event is fired and it was fired due to a RelationshipCreation Change. This convenience event is especially useful to act on incoming RelationshipRequests.                                                                                                                                                                                                                       |
| consumption.outgoingRequestStatusChanged                                       | [RequestStatusChangedEventData](#requeststatuschangedeventdata)                                | ... the status of an outgoing Request has changed.                                                                                                                                                                                                                                                                                                                                                                                                  |
| consumption.relationshipTemplateProcessed                                      | [RelationshipTemplateProcessedEventData](#relationshiptemplateprocessedeventdata)              | ... a RelationshipTemplate was processed by Modules like the `RequestModule` or `DeciderModule`.                                                                                                                                                                                                                                                                                                                                                    |
| consumption.sharedAttributeCopyCreated                                         | [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute)             | ... an Attribute is copied for sharing with another Identity.                                                                                                                                                                                                                                                                                                                                                                                       |
| transport.messageReceived                                                      | [Message]({% link _docs_integrate/data-model-overview.md %}#Message)                           | ... a Message is received during synchronization.                                                                                                                                                                                                                                                                                                                                                                                                   |
| transport.messageSent                                                          | [Message]({% link _docs_integrate/data-model-overview.md %}#Message)                           | ... a Message was sent.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| transport.peerRelationshipTemplateLoaded                                       | [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#RelationshipTemplate) | ... a RelationshipTemplate was loaded that belongs to another Identity.                                                                                                                                                                                                                                                                                                                                                                             |
| transport.relationshipChanged                                                  | [Relationship]({% link _docs_integrate/data-model-overview.md %}#Relationship)                 | ... a Relationship has changed. This can be due to one of the following cases:<br> • you create a Relationship<br> • you accept, reject or revoke a Relationship Change<br> • a Relationship Change is received during synchronization                                                                                                                                                                                                              |
| transport.relationshipDecomposedBySelf                                         | [Relationship]({% link _docs_integrate/data-model-overview.md %}#Relationship)                 | ... a terminated Relationship has been decomposed by yourself.                                                                                                                                                                                                                                                                                                                                                                                      |
| transport.relationshipReactivationCompleted                                    | [Relationship]({% link _docs_integrate/data-model-overview.md %}#Relationship)                 | ... a terminated Relationship has been reactivated and this reactivation is completed.                                                                                                                                                                                                                                                                                                                                                              |
| transport.relationshipReactivationRequested                                    | [Relationship]({% link _docs_integrate/data-model-overview.md %}#Relationship)                 | ... a terminated Relationship has been requested to be reactivated.                                                                                                                                                                                                                                                                                                                                                                                 |

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

> [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#LocalRequest)

```ts
export interface RequestStatusChangedEventData {
  request: LocalRequest;
  oldStatus: LocalRequestStatus;
  newStatus: LocalRequestStatus;
}
```

### MessageProcessedEventData

> [Message]({% link _docs_integrate/data-model-overview.md %}#Message)

```ts
export interface MessageProcessedEventData {
  message: MessageDTO;
  result: "ManualRequestDecisionRequired" | "NoRequest" | "Error";
}
```

### RelationshipTemplateProcessedEventData

> [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#RelationshipTemplate)

```ts
export interface RelationshipTemplateProcessedEventData {
  template: RelationshipTemplateDTO;
  result: "ManualRequestDecisionRequired" | "NonCompletedRequestExists" | "RelationshipExists" | "NoRequest" | "Error";
}
```
