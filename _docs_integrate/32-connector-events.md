---
title: "Connector Events"
permalink: /integrate/connector-events
---

<!-- TODO: JSSNMSHDD-3061 => replace {{ '/versions/2.0.0/explore/data-model' }} with {\% link _docs_explore/61-data-model.md %} -->

| Event                                                                                | Data                                                                          | Description (This event is triggered when ...)                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| consumption.attributeCreated                                                         | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#LocalAttribute)       | ... an Attribute was created manually or through a Request.                                                                                                                                                                            |
| consumption.attributeDeleted                                                         | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#LocalAttribute)       | ... an Attribute was deleted manually or through a Request.                                                                                                                                                                            |
| consumption.attributeSucceded                                                        | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#LocalAttribute)       | ... an Attribute was succeeded manually or through a Request.                                                                                                                                                                          |
| consumption.attributeUpdated                                                         | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#LocalAttribute)       | ... an Attribute was updated manually or through a Request.                                                                                                                                                                            |
| consumption.incomingRequestReceived                                                  | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#LocalRequest)         | ... an incoming Request was received either by loading a RelationshipTemplate or by receiving a Message                                                                                                                                |
| consumption.incomingRequestStatusChanged                                             | [Event Data](#requeststatuschangedeventdata)                                  | ... the status of an incoming Request has changed.                                                                                                                                                                                     |
| consumption.outgoingRquestCreated                                                    | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#LocalRequest)         | ... an outgoing Request was created.                                                                                                                                                                                                   |
| consumption.<br>outgoingRequestFromRelationshipCreationChange<br>CreatedAndCompleted | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#LocalRequest)         | ... an outgoing Request was created and directly completed.<br>This happens if the Response came in from a new Relationship.                                                                                                           |
| consumption.outgoingRequestStatusChanged                                             | [Event Data](#requeststatuschangedeventdata)                                  | ... the status of an outgoing Request has changed.                                                                                                                                                                                     |
| consumption.sharedAttributeCopyCreated                                               | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#LocalAttribute)       | ... an Attribute is copied for sharing with another identity.                                                                                                                                                                          |
| transport.MessageReceived                                                            | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#Message)              | ... a Message is received during synchonization.                                                                                                                                                                                       |
| transport.MessageSent                                                                | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#Message)              | ... a Message is sent.                                                                                                                                                                                                                 |
| transport.peerRelationshipTemplateLoaded                                             | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#RelationshipTemplate) | ... a RelationshipTemplate is loaded that belongs to another identity.                                                                                                                                                                 |
| transport.relationshipChanged                                                        | [Event Data]({{ '/versions/2.0.0/explore/data-model' }}#Relationship)         | ... a Relationship has changed. This can be due to one of the following cases:<br> • you create a Relationship<br> • you accept, reject or revoke a Relationship Change<br> • a Relationship Change is received during synchronization |

## Event Data

### RequestStatusChangedEventData

```ts
export interface RequestStatusChangedEventData {
    Request: LocalRequestDTO;
    oldStatus: LocalRequestStatus;
    newStatus: LocalRequestStatus;
}
```
