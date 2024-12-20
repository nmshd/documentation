---
# Start automatic generation
permalink: integrate/terminate-relationships
published: true
title: "Terminate Relationships"
type: scenario
toc: true
properties:
  - id: SC115
  - category: Identities and Relationships
  - description: Terminate, reactivate (request, accept, reject, revoke) and decompose Relationship
  - customer:
  - component: integrate
  - level:
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: terminate-relationships
require:
required_by:
# End automatic generation
---

In order for two Identities to communicate with each other and exchange data, they must [establish a Relationship]({% link _docs_integrate/establish-relationships.md %}) between them. If an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) to another Identity is no longer wanted, it can be terminated.

[Terminating an active Relationship]({% link _docs_integrate/terminate-relationships.md %}#terminate-an-active-relationship) initially blocks regular communication for both Identities, but does not yet delete any Relationship data.
The only possible communication between them is to request the [reactivation of the terminated Relationship]({% link _docs_integrate/terminate-relationships.md %}#reactivate-a-terminated-relationship), which can be done by both Identities.
Accepting the reactivation request returns the Relationship to an active status.

An already [terminated Relationship can be decomposed]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship) to delete the Relationship and all data transmitted during the Relationship from the Connector or the App, respectively.
It is then no longer possible to reactivate the Relationship.
[Getting to an active Relationship again]({% link _docs_integrate/establish-relationships.md %}) means starting from scratch.

## Terminate an active Relationship

An active Relationship can be terminated by executing the use case [Terminate Relationship]({% link _docs_use-cases/use-case-transport-terminate-relationship.md %}) providing the `relationshipId` as input.
The termination of the Relationship does not require the permission of the peer.
After the Relationship has been terminated, its `status` changes to `"Terminated"`.
The Identity which terminated the Relationship and its peer receive a `transport.relationshipChanged` [event]({% link _docs_integrate/connector-events.md %}).
Then no [Messages]({% link _docs_integrate/data-model-overview.md %}#message) can be sent from either side. This includes [sending or responding to Requests]({% link _docs_integrate/requests-via-messages.md %}) and [exchanging Attributes]({% link _docs_integrate/attribute-introduction.md %}#attribute-management-options).
However, please note that Messages whose `content` is a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification) are still sent on terminated Relationships.
Such Notifications cannot be received directly, but they are queued in case the Relationship is [reactivated](#reactivate-a-terminated-relationship).
For example, if certain [Attributes were deleted]({% link _docs_integrate/attribute-introduction.md %}#delete-attributes) or [Attributes were updated by succession]({% link _docs_integrate/attribute-introduction.md %}#update-attributes-by-succession) while the Relationship was terminated, the associated Notifications are transmitted after the reactivation.
Therefore, the loss of relevant information is prevented.

## Reactivate a terminated Relationship

At any time, you or your peer can request the reactivation of the terminated Relationship with the use case [Request Relationship reactivation]({% link _docs_use-cases/use-case-transport-request-relationship-reactivation.md %}).

If your peer requests the reactivation, you will receive a `transport.relationshipReactivationRequested` [event]({% link _docs_integrate/connector-events.md %}) in addition to a `transport.relationshipChanged` event, which the peer also receives if they use a Connector.
If you then wish to return the Relationship to an active status, you accept the reactivation with the use case [Accept Relationship reactivation]({% link _docs_use-cases/use-case-transport-accept-relationship-reactivation.md %}).
In this case, all Notifications that were sent while the Relationship was terminated are transmitted.
If you want to keep the Relationship terminated, you reject the reactivation with the use case [Reject Relationship reactivation]({% link _docs_use-cases/use-case-transport-reject-relationship-reactivation.md %}).

If you have requested the reactivation and changed your mind, you revoke it with the use case [Revoke Relationship reactivation]({% link _docs_use-cases/use-case-transport-revoke-relationship-reactivation.md %}).

Each use case has the `relationshipId` as input. Only accepting the reactivation changes the `status` of the Relationship, namely from `"Terminated"` to `"Active"`. Requesting, rejecting or revoking the reactivation don't change its `status`. However, they still are recorded as an [AuditLogEntry]({% link _docs_integrate/data-model-overview.md %}#auditlogentry) in the `auditLog` of the Relationship. Regardless of whether the reactivation is accepted, rejected or revoked, you receive a `transport.relationshipReactivationCompleted` [event]({% link _docs_integrate/connector-events.md %}) in addition to a `transport.relationshipChanged` event and the peer as well if they use a Connector.

## Decompose a Relationship

Decomposing a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) deletes all data associated with the peer that was transmitted during the Relationship:

- The Relationship itself.
- The [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) used to establish the Relationship if it was for single use, which means that the value of its `maxNumberOfAllocations` property is one, or is owned by the peer. A RelationshipTemplate must be exchanged again to establish a new Relationship.
- In any case, all RelationshipTemplates of the peer. During a Relationship, several RelationshipTemplates may have been exchanged, as [Requests can be sent via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}#create-the-relationshiptemplate) both when establishing new Relationships and for existing Relationships.
- Both the sent and the received shared [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes), [Notifications]({% link _docs_integrate/data-model-overview.md %}#notification) and [Requests]({% link _docs_integrate/data-model-overview.md %}#request).
- Sent and received [Messages]({% link _docs_integrate/data-model-overview.md %}#message) with one exception: If a Message has been sent to multiple `recipients`, the Message is not deleted but the peer's address is replaced with a pseudonym. The pseudonym is the same for every peer.
- The [IdentityMetadata]({% link _docs_integrate/data-model-overview.md %}#identitymetadata) that have the peer as their `reference`.
- Furthermore, the corresponding [Tokens]({% link _docs_integrate/data-model-overview.md %}#token) and [AttributeListeners]({% link _docs_integrate/data-model-overview.md %}#localattributelistener).

The use case is [Decompose Relationship]({% link _docs_use-cases/use-case-transport-decompose-relationship.md %}), which takes the `relationshipId` as input. For the peer, the Relationship is not deleted, but its `status` now is `"DeletionProposed"`.
If the peer uses a Connector, they receive a `transport.relationshipChanged` [event]({% link _docs_integrate/connector-events.md %}). You receive a `transport.relationshipDecomposedBySelf` event. The peer is expected to follow suit once the shared data is no longer needed. Only after both Identities involved in the Relationship have decomposed it, the Relationship itself and data transmitted during it are deleted from the Backbone. To get to an active Relationship again after one involved Identity has decomposed, the other Identity must decompose as well. After that, the two have to start from scratch to [establish a Relationship]({% link _docs_integrate/establish-relationships.md %}), as reactivation of the former Relationship is no longer possible.
