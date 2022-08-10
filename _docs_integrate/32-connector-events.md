---
title: "Connector Events"
permalink: /integrate/connector-events
---

| Event                                                                                | Data                                                                                   | Description (This event is triggered when ...)                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| consumption.attributeCreated                                                         | [LocalAttribute]({% link _docs_explore/61-data-model.md %}#LocalAttribute)             | ... an Attribute was created manually or through a Request.                                                                                                                                                                            |
| consumption.attributeDeleted                                                         | [LocalAttribute]({% link _docs_explore/61-data-model.md %}#LocalAttribute)             | ... an Attribute was deleted manually or through a Request.                                                                                                                                                                            |
| consumption.attributeSucceded                                                        | [LocalAttribute]({% link _docs_explore/61-data-model.md %}#LocalAttribute)             | ... an Attribute was succeeded manually or through a Request.                                                                                                                                                                          |
| consumption.attributeUpdated                                                         | [LocalAttribute]({% link _docs_explore/61-data-model.md %}#LocalAttribute)             | ... an Attribute was updated manually or through a Request.                                                                                                                                                                            |
| consumption.incomingRequestReceived                                                  | [LocalRequest]({% link _docs_explore/61-data-model.md %}#LocalRequest)                 | ... an incoming Request was received either by loading a Relationship Template or by receiving a Message                                                                                                                               |
| consumption.incomingRequestStatusChanged                                             | [RequestStatusChangedEventData](#requeststatuschangedeventdata)                        | ... the status of an incoming Request has changed.                                                                                                                                                                                     |
| consumption.outgoingRquestCreated                                                    | [LocalRequest]({% link _docs_explore/61-data-model.md %}#LocalRequest)                 | ... an outgoing Request was created.                                                                                                                                                                                                   |
| consumption.<br>outgoingRequestFromRelationshipCreationChange<br>CreatedAndCompleted | [LocalRequest]({% link _docs_explore/61-data-model.md %}#LocalRequest)                 | ... an outgoing Request was created and directly completed.<br>This happens if the Response came in with a new Relationship.                                                                                                           |
| consumption.outgoingRequestStatusChanged                                             | [RequestStatusChangedEventData](#requeststatuschangedeventdata)                        | ... the status of an outgoing Request has changed.                                                                                                                                                                                     |
| consumption.sharedAttributeCopyCreated                                               | [LocalAttribute]({% link _docs_explore/61-data-model.md %}#LocalAttribute)             | ... an Attribute is copied for sharing with another identity.                                                                                                                                                                          |
| transport.messageReceived                                                            | [Message]({% link _docs_explore/61-data-model.md %}#Message)                           | ... a Message is received during synchronization.                                                                                                                                                                                      |
| transport.messageSent                                                                | [Message]({% link _docs_explore/61-data-model.md %}#Message)                           | ... a Message was sent.                                                                                                                                                                                                                |
| transport.peerRelationshipTemplateLoaded                                             | [RelationshipTemplate]({% link _docs_explore/61-data-model.md %}#RelationshipTemplate) | ... a Relationship Template was loaded that belongs to another identity.                                                                                                                                                               |
| transport.relationshipChanged                                                        | [Relationship]({% link _docs_explore/61-data-model.md %}#Relationship)                 | ... a Relationship has changed. This can be due to one of the following cases:<br> • you create a Relationship<br> • you accept, reject or revoke a Relationship Change<br> • a Relationship Change is received during synchronization |

## RequestStatusChangedEventData

Every event is structured as follows (TData depends on the actual event, e.g. `LocalAttribute`):

```ts
interface Event<TData> {
    namespace: string;
    eventTargetAddress: string;
    data: TData;
}
```

### RequestStatusChangedEventData

```ts
export interface RequestStatusChangedEventData {
    Request: LocalRequestDTO;
    oldStatus: LocalRequestStatus;
    newStatus: LocalRequestStatus;
}
```
