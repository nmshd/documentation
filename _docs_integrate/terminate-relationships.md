You can terminate a Relationship to another Identity. Then it's not possible for either side to send messages, requests, notifications or share attributes. No data is deleted. Either side can request the Reactivation of the Relationship, accepting the Reactivation returns the Relationship to the Active state.

You can decompose a Terminated Relationship. This deletes the relationship, messages, requests, notifications and shared attributes from/to the peer.

## Terminate a Relationship

Terminate a Relationship with the use case [Terminate a Relationship]({% link _docs_use-cases/use-case-transport-terminate-a-relationship.md %}) supplying its relationshipId. No further input is required, the peer is notified but cannot prevent the termination.

## Reactivate a Relationship

Reactivating a Relationship requires you or the peer to request the reactivation and the other side to accept it. Requesting is done with the use case [Request a Relationship reactivation]({% link _docs_use-cases/use-case-transport-request-a-relationship-reactivation.md %}) and accepting is done with the use case [Accept a Relationship reactivation]({% link _docs_use-cases/use-case-transport-accept-a-relationship-reactivation.md %}). You reject the reactivation with the use case [Reject a Relationship reactivation]({% link _docs_use-cases/use-case-transport-reject-a-relationship-reactivation.md %}). If you have requested the reactivation and changed your mind, you revoke it with the use case [Revoke a Relationship reactivation]({% link _docs_use-cases/use-case-transport-revoke-a-relationship-reactivation.md %}).
You only supply the relationshipId for each use case.

## Decompose a Relationship

Decomposing a Relationship deletes all shared data. An exception are messages you have sent to multiple recipients: Instead of deleting them, the peer's ID is replaced with a pseudonym instead. The use case is [Decompose a Relationship]({% link _docs_use-cases/use-case-transport-decompose-a-relationship.md %}) and takes the relationshipId as input.
The peer is notified of the Decomposition and is expected to follow suit once the shared data is no longer needed. Only after both sides decomposed the Relationship, it is deleted from the Backbone.
