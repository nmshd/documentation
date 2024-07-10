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

You can terminate an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) to another Identity. Then it's not possible for either side to send messages, but no data is deleted. Either side can request the reactivation of the Relationship, accepting the reactivation returns the Relationship to an active state.

You can decompose a terminated Relationship to delete the Relationship and all communication history from the App/Connector.

<!-- TODO: Add "for app users:" -->

## Terminate an active Relationship

Terminate an active Relationship with the use case [Terminate Relationship]({% link _docs_use-cases/use-case-transport-terminate-relationship.md %}) with the relationshipId as input. The peer is notified (for Connector users: this happens with a RelationshipChangedEvent) but cannot prevent the termination. Then no Messages can be sent from either side, this includes Requests, Notifications and sharing Attributes. The status of the Relationship is changed to `Terminated`.

## Reactivate a terminated Relationship

At any time, you or your peer can request the reactivation with the use case [Request Relationship reactivation]({% link _docs_use-cases/use-case-transport-request-relationship-reactivation.md %}).

If your peer requests the reactivation, you will be notified (for Connector users: this happens with the RelationshipReactivationRequestedEvent).
If you then wish to return the Relationship to an active state, you accept the reactivation with the use case [Accept Relationship reactivation]({% link _docs_use-cases/use-case-transport-accept-relationship-reactivation.md %}).
If you want to keep the Relationship terminated, you reject the reactivation with the use case [Reject Relationship reactivation]({% link _docs_use-cases/use-case-transport-reject-relationship-reactivation.md %}).

If you have requested the reactivation and changed your mind, you revoke it with the use case [Revoke Relationship reactivation]({% link _docs_use-cases/use-case-transport-revoke-relationship-reactivation.md %}).

In each case (accept/reject/revoke), your peer is notified of the decision (for Connector users: this happens with the RelationshipReactivationCompletedEvent).
Each use case has the relationshipId as input. Only accepting the reactivation changes the status of the Relationship (from `Terminated` to `Active`), requesting/rejecting/revoking the reactivation don't change it. However, they still are recorded in the [Relationship's audit log]({% link _docs_integrate/data-model-overview.md %}#auditlogentry).

## Decompose a Relationship

Decomposing a Relationship deletes the Relationship, all shared attributes, all notifications and all requests to/from the peer from the App/Connector. If the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationship-template) used with the Relationship was single use (its `maxNumberOfAllocations` is 1), it is deleted. If the RelationshipTemplate is not single-use but owned by the peer, it is deleted and you ask for a new Template if you want to create another Relationship. The messages to/from the peer are also deleted with one exception: if you have sent a message to multiple recipients, the message is not deleted but the peer's address is replaced with a pseudonym.

After one side has decomposed, reactivating the Relationship is impossible.

The use case is [Decompose Relationship]({% link _docs_use-cases/use-case-transport-decompose-relationship.md %}) and takes the relationshipId as input.
The peer is notified of the Decomposition (for Connector users: with a RelationshipChangedEvent) and is expected to follow suit once the shared data is no longer needed. Only after both sides decomposed the Relationship, it and its communication history are deleted from the Backbone.
