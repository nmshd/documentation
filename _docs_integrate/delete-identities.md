---
# Start automatic generation
permalink: integrate/delete-identities
redirect_from:
  - /integrate/delete-identity-from-enmeshed
published: true
title: "Delete Identities"
type: scenario
toc: true
properties:
  - id: SC061
  - category: Identities and Relationships
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: delete-identities
require:
required_by:
  - integrate/exchange-messages
# End automatic generation
---

Regardless of whether an [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) is an App user or a Connector, it is stored on the Backbone.
This guide describes the different [options for Identity deletion](#options-for-identity-deletion) from the Backbone.
There is usually a predefined grace period in each process of Identity deletion, during which the Identity can cancel its deletion if it no longer wants to be deleted.
Please note that an Identity can never trigger the process of deletion of another Identity.

It is not possible to utilize the use cases regarding the [IdentityDeletionProcesses]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) mentioned below using the [Connector REST API]({% link _docs_integrate/access-the-connector.md %}#hosted-api-tooling-by-the-development-connector).
However, Integrators of Connectors can still delete their Identity by using [Connector CLI operations]({% link _docs_operate/connector-cli-operations.md %}).
{: .notice--info}

## IdentityDeletionProcesses

From a technical perspective, the process of Identity deletion is described by a data object of type [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess). It can be uniquely identified by its `id`.
An IdentityDeletionProcess can have `"Active"` or `"Cancelled"` as its `status`.
If an IdentityDeletionProcess has `"Active"` as `status`, it is also referred to as an **active IdentityDeletionProcess**.
There can be at most one active IdentityDeletionProcess per Identity.
There are three [use cases]({% link _docs_integrate/use-cases.md %}) for getting one or more already existing [IdentityDeletionProcesses]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess):

- If the `id` of an IdentityDeletionProcess is known, it can be viewed by calling the [Get IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-get-identitydeletionprocess.md %}) use case.
- All IdentityDeletionProcesses of an Identity can be viewed by utilizing the [Get IdentityDeletionProcesses]({% link _docs_use-cases/use-case-transport-get-identitydeletionprocesses.md %}) use case. This includes IdentityDeletionProcesses with `"Cancelled"` as `status` in particular.
- The [Get active IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-get-active-identitydeletionprocess.md %}) use case can be executed to view the currently active IdentityDeletionProcess if one exists. If none exists, the [error code]({% link _docs_integrate/error-codes.md %}) `error.runtime.identityDeletionProcess.noActiveIdentityDeletionProcess` will arise if an attempt is made to apply the use case anyway.

## Options for Identity Deletion

In principle, there are several options for deleting an Identity from the Backbone.
For example, depending on the Backbone environment, it is conceivable to set up automatic Identity deletion after a long period of Identity inactivity.
More essential is the option of [actively initiating the process of Identity deletion from the Backbone by the Identity itself](#self-initiated-identity-deletion).
Whenever a new [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) has been created or the `status` of an existing IdentityDeletionProcess has changed, the [Connector event]({% link _docs_integrate/connector-events.md %}) `transport.identityDeletionProcessStatusChanged` is raised.

### Self-Initiated Identity Deletion

An Identity can actively trigger its own process of deletion by executing the [Initiate IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-initiate-identitydeletionprocess.md %}) use case.
Successful execution leads to the creation of an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) with `"Active"` as `status`.
The Identity is immediately in deletion and will be irreversibly deleted from the Backbone once the end of the associated grace period of the IdentityDeletionProcess specified within its `gracePeriodEndsAt` property has been reached.
Within the grace period, the [Cancel IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}) use case can be applied by the Identity if it no longer wants to be deleted.
In this case, the `status` of the IdentityDeletionProcess changes to `"Cancelled"`.
Trying to cancel an IdentityDeletionProcess that does not have `"Active"` as `status` causes an error with `error.runtime.identityDeletionProcess.noApprovedIdentityDeletionProcess` as [error code]({% link _docs_integrate/error-codes.md %}) to be thrown.
Furthermore, please note that the use of the [Initiate IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-initiate-identitydeletionprocess.md %}) use case is not permitted if there is already an active IdentityDeletionProcess.
The corresponding [error code]({% link _docs_integrate/error-codes.md %}) is given by `error.runtime.identityDeletionProcess.activeIdentityDeletionProcessAlreadyExists`.

## Effects of Identity Deletion on Relationships

The initiation of the deletion of an Identity as well as the actual deletion logically have an impact on the peers who have [established a Relationship]({% link _docs_integrate/establish-relationships.md %}) with it.
All peers of the Identity that is currently in deletion are informed that the deletion of the Identity has been initiated.
This is done via the `transport.peerToBeDeleted` [Connector event]({% link _docs_integrate/connector-events.md %}).
In addition, it is stored within the `peerDeletionInfo` property of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) that the Identity currently has `"ToBeDeleted"` as `deletionStatus`.
The `status` of the Relationship remains `"Active"` for the time being.
If the Identity is finally deleted, the `deletionStatus` will change to `"Deleted"` and the Connector event `transport.peerDeleted` can be received.
Since the deletion of an Identity leads to the [decomposition of its Relationships]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship), the `status` of the Relationship is changed to `"DeletionProposed"` and `"DecompositionDueToIdentityDeletion"` is specified as the `reason` of the associated [RelationshipAuditLogEntry]({% link _docs_integrate/data-model-overview.md %}#relationshipauditlogentry).
Otherwise, if the Identity decides against its deletion within the grace period, the `peerDeletionInfo` of the Relationship is set back to `undefined` and the `transport.peerDeletionCancelled` Connector event is triggered.
The deletion of an Identity has effects on [creating a new Relationship](#creation-of-new-relationships) to it, [sending Messages](#sending-messages) to it, [sending Requests to it and responding to Requests from it](#sending-and-responding-to-requests).

### Creation of New Relationships

To [establish a Relationship]({% link _docs_integrate/establish-relationships.md %}), an Identity must first create a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate), which is then used by its peer to create a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status`.
However, if the creator of the RelationshipTemplate is meanwhile in deletion or has already deleted itself, the peer will receive an error with [error code]({% link _docs_integrate/error-codes.md %}) `error.transport.relationships.activeIdentityDeletionProcessOfOwnerOfRelationshipTemplate` or `error.transport.relationships.deletedOwnerOfRelationshipTemplate`, respectively, when trying to create a new Relationship using the RelationshipTemplate.

### Sending Messages

An Identity is not permitted to [send a Message]({% link _docs_use-cases/use-case-transport-send-message-to-recipients.md %}) to a peer with which a Relationship has been established if the peer has already been deleted.
As long as the `content` of a [Message]({% link _docs_integrate/data-model-overview.md %}#message) is not a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification), this also applies to a peer in deletion.
If the Identity tries to send a Message anyway to such a peer, an error with [error code]({% link _docs_integrate/error-codes.md %}) `error.runtime.messages.peerIsInDeletion` or `error.transport.messages.peerIsDeleted` is thrown.
Sent Messages whose `content` is a Notification cannot be received by a peer which is in deletion, but they are queued in case the peer cancels its deletion. After the peer has cancelled its deletion, it receives the queued Notifications.

### Sending and Responding to Requests

An incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request) sent by an Identity with which a Relationship has been established cannot be responded to if the Identity is in deletion or has already been deleted.
If an attempt is nevertheless made to [accept]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) or [reject]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) the incoming Request, an error with [code]({% link _docs_integrate/error-codes.md %}) `error.consumption.requests.peerIsInDeletion` or `error.consumption.requests.peerIsDeleted`, respectively, is thrown.
Similarly, it is not possible to [create an outgoing Request]({% link _docs_use-cases/use-case-consumption-create-outgoing-request.md %}) to be sent to an Identity with which a Relationship has been established and which is in deletion or has already been deleted.
