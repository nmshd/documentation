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

You can terminate an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) to another Identity. Then communication is blocked for both sides, but no data is deleted. Either side can only request the reactivation of the Relationship, accepting the reactivation returns the Relationship to an active state.

You can decompose a terminated Relationship to delete the Relationship and all data transmitted during the Relationship from the App/Connector. Then reactivating the Relationship is impossible - [getting to an active Relationship again]({% link _docs_integrate/establish-relationships.md %}) will have to start from scratch.

## Terminate an active Relationship

Terminate an active Relationship with the use case [Terminate Relationship]({% link _docs_use-cases/use-case-transport-terminate-relationship.md %}) with the relationshipId as input. The `status` of the Relationship is changed to `"Terminated"`. You receive a `transport.relationshipChanged` [event]({% link _docs_integrate/connector-events.md %}), and the peer as well if they use a Connector. Then no Messages can be sent from either side, this includes Requests, Notifications and sharing Attributes. The peer cannot prevent the termination.

## Reactivate a terminated Relationship

At any time, you or your peer can request the reactivation with the use case [Request Relationship reactivation]({% link _docs_use-cases/use-case-transport-request-relationship-reactivation.md %}).

If your peer requests the reactivation, you will receive a `transport.relationshipReactivationRequested` [event]({% link _docs_integrate/connector-events.md %}), which the peer also receives if they use a Connector.
If you then wish to return the Relationship to an active state, you accept the reactivation with the use case [Accept Relationship reactivation]({% link _docs_use-cases/use-case-transport-accept-relationship-reactivation.md %}).
If you want to keep the Relationship terminated, you reject the reactivation with the use case [Reject Relationship reactivation]({% link _docs_use-cases/use-case-transport-reject-relationship-reactivation.md %}).

If you have requested the reactivation and changed your mind, you revoke it with the use case [Revoke Relationship reactivation]({% link _docs_use-cases/use-case-transport-revoke-relationship-reactivation.md %}).

Each use case has the relationshipId as input. Only accepting the reactivation changes the `status` of the Relationship (from `"Terminated"` to `"Active"`), requesting/rejecting/revoking the reactivation don't change it. However, they still are recorded in the [`auditLog` of the Relationship]({% link _docs_integrate/data-model-overview.md %}#auditlogentry). In each case (accept/reject/revoke), you receive a `transport.relationshipReactivationCompleted` [event]({% link _docs_integrate/connector-events.md %}) and the peer as well if they use a Connector.

## Decompose a Relationship

Decomposing a Relationship deletes from your Connector

- the Relationship
- the peer's RelationshipTemplates
- the Relationship's [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) if it was single use (its `maxNumberOfAllocations` is 1) or owned by the peer - for a new Relationship you will have to exchange a Template again
- shared [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes), [Notifications]({% link _docs_integrate/data-model-overview.md %}#notification), [Requests]({% link _docs_integrate/data-model-overview.md %}#request) (in each case both sent and received)
- sent and received [Messages]({% link _docs_integrate/data-model-overview.md %}#message) with one exception: If you have sent a message to multiple recipients, the message is not deleted but the peer's address is replaced with a pseudonym. The pseudonym is the same for every peer.
- more obscurely, [Tokens]({% link _docs_integrate/data-model-overview.md %}#token) and [AttributeListeners]({% link _docs_integrate/data-model-overview.md %}#localattributelistener) (it's quite possible you haven't used them yet).

The use case is [Decompose Relationship]({% link _docs_use-cases/use-case-transport-decompose-relationship.md %}) and takes the relationshipId as input. For the peer the Relationship is not deleted, but its status now is `DeletionProposed`.
If the peer uses a Connector, they receive a `transport.relationshipChanged` [event]({% link _docs_integrate/connector-events.md %}). You receive a `transport.relationshipDecomposedBySelf` [event]({% link _docs_integrate/connector-events.md %}). The peer is expected to follow suit once the shared data is no longer needed. Only after both sides decomposed the Relationship, it and data transmitted during it are deleted from the Backbone. To get to an active Relationship again after one side has decomposed, the other side must decompose as well and you two start over with [establishing a Relationship]({% link _docs_integrate/establish-relationships.md %}) (reactivating is no longer possible).
