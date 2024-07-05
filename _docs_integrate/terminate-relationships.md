You can terminate a Relationship to another Identity. Then it's not possible for either side to send messages, but no data is deleted. Either side can request the Reactivation of the Relationship, accepting the reactivation returns the Relationship to the active state.

You can decompose a terminated Relationship to locally delete all messages to/from and data shared with the peer.

## Terminate a Relationship

Terminate a Relationship with the use case [Terminate a Relationship]({% link _docs_use-cases/use-case-transport-terminate-a-relationship.md %}) supplying its relationshipId. No further input is required, the peer is notified (for Connector users: this happens with a RelationshipChangedEvent) but cannot prevent the termination. Then no messages can be sent, this includes requests, notifications and sharing attributes.

## Reactivate a Relationship

At any time, you or your peer can request the reactivation with the use case [Request a Relationship reactivation]({% link _docs_use-cases/use-case-transport-request-a-relationship-reactivation.md %}). If you wish to return the Relationship to an active state, you accept the reactivation with the use case [Accept a Relationship reactivation]({% link _docs_use-cases/use-case-transport-accept-a-relationship-reactivation.md %}). Then it is possible to send messages, requests, notifications and share attributes again.

If your peer requests the reactivation, you will be notified (for Connector users: this happens with the RelationshipReactivationRequestedEvent). If you want to keep the Relationship terminated, you reject the reactivation with the use case [Reject a Relationship reactivation]({% link _docs_use-cases/use-case-transport-reject-a-relationship-reactivation.md %}). If you have requested the reactivation and changed your mind, you revoke it with the use case [Revoke a Relationship reactivation]({% link _docs_use-cases/use-case-transport-revoke-a-relationship-reactivation.md %}). In each case, your peer is notified of the decision (for Connector users: this happens with the RelationshipReactivationCompletedEvent).
You only supply the relationshipId for each use case.

## Decompose a Relationship

Decomposing a Relationship deletes the relationship, all shared attributes, all notifications and all requests to/from the peer from the App/Connector. If the RelationshipTemplate used with the Relationship was single use (its `maxNumberOfAllocations` is 1), it is deleted. If the RelationshipTemplate is not single-use but owned by the peer, it is deleted and you ask for a new Template if you want to create another Relationship. The messages to/from the peer are also deleted with one exception: if you have sent a message to multiple recipients, the message is not deleted but the peer's Id is replaced with a pseudonym.

The use case is [Decompose a Relationship]({% link _docs_use-cases/use-case-transport-decompose-a-relationship.md %}) and takes the relationshipId as input.
The peer is notified of the Decomposition (for Connector users: with a RelationshipChangedEvent) and is expected to follow suit once the shared data is no longer needed. Only after both sides decomposed the Relationship, it and its communication history are deleted from the Backbone.
