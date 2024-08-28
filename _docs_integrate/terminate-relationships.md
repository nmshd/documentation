---
# Start automatic generation
permalink: integrate/terminate-relationships
published: true
title: "Terminate Relationships"
type: scenario
toc: true
properties:
  - id: SC115
  - category: Relationships between Identities
  - description: Terminate Relationship Reactivate Relationship (request, accept, reject, revoke) Decompose Relationship
  - customer:
  - component: integrate
  - level:
  - implementation status:
  - documentation status: DONE
  - published:
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

Terminate an active Relationship with the use case [Terminate Relationship]({% link _docs_use-cases/use-case-transport-terminate-relationship.md %}) with the `relationshipId` as input. The `status` of the Relationship is changed to `"Terminated"`. You receive a `transport.relationshipChanged` [event]({% link _docs_integrate/connector-events.md %}), and the peer as well if they use a Connector. Then no Messages can be sent from either side, this includes Requests, Notifications and sharing Attributes. The peer cannot prevent the termination.

## Reactivate a terminated Relationship

At any time, you or your peer can request the reactivation of the terminated Relationship with the use case [Request Relationship reactivation]({% link _docs_use-cases/use-case-transport-request-relationship-reactivation.md %}).

If your peer requests the reactivation, you will receive a `transport.relationshipReactivationRequested` [event]({% link _docs_integrate/connector-events.md %}) in addition to a `transport.relationshipChanged` event, which the peer also receives if they use a Connector.
If you then wish to return the Relationship to an active status, you accept the reactivation with the use case [Accept Relationship reactivation]({% link _docs_use-cases/use-case-transport-accept-relationship-reactivation.md %}).
If you want to keep the Relationship terminated, you reject the reactivation with the use case [Reject Relationship reactivation]({% link _docs_use-cases/use-case-transport-reject-relationship-reactivation.md %}).

If you have requested the reactivation and changed your mind, you revoke it with the use case [Revoke Relationship reactivation]({% link _docs_use-cases/use-case-transport-revoke-relationship-reactivation.md %}).

Each use case has the `relationshipId` as input. Only accepting the reactivation changes the `status` of the Relationship, namely from `"Terminated"` to `"Active"`. Requesting, rejecting or revoking the reactivation don't change its `status`. However, they still are recorded as an [AuditLogEntry]({% link _docs_integrate/data-model-overview.md %}#auditlogentry) in the `auditLog` of the Relationship. Regardless of whether the reactivation is accepted, rejected or revoked, you receive a `transport.relationshipReactivationCompleted` [event]({% link _docs_integrate/connector-events.md %}) in addition to a `transport.relationshipChanged` event and the peer as well if they use a Connector.

## Decompose a Relationship

Decomposing a Relationship deletes from your Connector

- the Relationship
- the peer's RelationshipTemplates
- the Relationship's [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) if it was single use (its `maxNumberOfAllocations` is 1) or owned by the peer - for a new Relationship you will have to exchange a RelationshipTemplate again
- shared [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes), [Notifications]({% link _docs_integrate/data-model-overview.md %}#notification), [Requests]({% link _docs_integrate/data-model-overview.md %}#request) (in each case both sent and received)
- sent and received [Messages]({% link _docs_integrate/data-model-overview.md %}#message) with one exception: If you have sent a Message to multiple recipients, the Message is not deleted but the peer's address is replaced with a pseudonym. The pseudonym is the same for every peer.
- furthermore, [Tokens]({% link _docs_integrate/data-model-overview.md %}#token) and [AttributeListeners]({% link _docs_integrate/data-model-overview.md %}#localattributelistener).

The use case is [Decompose Relationship]({% link _docs_use-cases/use-case-transport-decompose-relationship.md %}), which takes the `relationshipId` as input. For the peer, the Relationship is not deleted, but its `status` now is `"DeletionProposed"`.
If the peer uses a Connector, they receive a `transport.relationshipChanged` [event]({% link _docs_integrate/connector-events.md %}). You receive a `transport.relationshipDecomposedBySelf` event. The peer is expected to follow suit once the shared data is no longer needed. Only after both Identities involved in the Relationship have decomposed it, the Relationship itself and data transmitted during it are deleted from the Backbone. To get to an active Relationship again after one involved Identity has decomposed, the other Identity must decompose as well. After that, the two have to start from scratch to [establish a Relationship]({% link _docs_integrate/establish-relationships.md %}), as reactivation of the former Relationship is no longer possible.
