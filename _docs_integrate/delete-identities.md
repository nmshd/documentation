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

It is not yet possible to utilize the use cases regarding the [IdentityDeletionProcesses]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) mentioned below as an Integrator of a Connector. Instead, these functionalities are currently only offered to App users in order to be able to delete their [Identity]({% link _docs_integrate/data-model-overview.md %}#identity). Even if some use cases still have to be provided to the Integrators of Connectors for deleting their Identity, they benefit from the description of the process of Identity deletion given in this guide. Indeed, if an App user with whom a Connector has established a Relationship deletes their Identity, it is affected by [side effects on this Relationship]({% link _docs_integrate/delete-identities.md %}#side-effects-of-identity-deletion-on-relationships).
{: .notice--warning}

Regardless of whether an [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) is an App user or a Connector, it is stored on the Backbone.
This guide describes the different [options for Identity deletion]({% link _docs_integrate/delete-identities.md %}#options-for-identity-deletion) from the Backbone.
There is usually a predefined grace period in each process of Identity deletion, during which the Identity can cancel its deletion if it no longer wants to be deleted.
Please note that an Identity can never trigger the process of deletion of another Identity.

## IdentityDeletionProcesses

From a technical perspective, the process of Identity deletion is described by a data object of type [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess). It can be uniquely identified by its `id`.
An IdentityDeletionProcess can have `"WaitingForApproval"`, `"Rejected"`, `"Approved"` or `"Cancelled"` as its `status`.
If it has `"WaitingForApproval"` or `"Approved"` as `status`, it is also referred to as an **active IdentityDeletionProcess**.
There can be at most one active IdentityDeletionProcess per Identity.
There are three [use cases]({% link _docs_integrate/use-cases.md %}) for getting one or more already existing [IdentityDeletionProcesses]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess):

- If the `id` of an IdentityDeletionProcess is known, it can be viewed by calling the [Get IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-get-identitydeletionprocess.md %}) use case.
- All IdentityDeletionProcesses of an Identity can be viewed by utilizing the [Get IdentityDeletionProcesses]({% link _docs_use-cases/use-case-transport-get-identitydeletionprocesses.md %}) use case. This includes IdentityDeletionProcesses with `"Cancelled"` or `"Rejected"` as `status` in particular.
- The [Get active IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-get-active-identitydeletionprocess.md %}) use case can be executed to view the currently active IdentityDeletionProcess if one exists. If none exists, the [error code]({% link _docs_integrate/error-codes.md %}) `error.runtime.identityDeletionProcess.noActiveIdentityDeletionProcess` arises if an attempt is made to apply the use case anyway.

## Options for Identity Deletion

In principle, there are several options for deleting an Identity from the Backbone.
For example, depending on the Backbone environment, it is conceivable to set up automatic Identity deletion after a long period of Identity inactivity.
More essential are the two options for actively deciding to delete an Identity from the Backbone:

- Initiation of the process of Identity deletion by the Identity itself.
- The Backbone Admin UI triggers the process of Identity deletion and the Identity subsequently approves the triggered deletion of its Identity.

Whenever a new [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) has been created due to a [self-initiated Identity deletion]({% link _docs_integrate/delete-identities.md %}#self-initiated-identity-deletion) or an [Identity deletion triggered by the Backbone Admin UI]({% link _docs_integrate/delete-identities.md %}#identity-deletion-triggered-by-the-backbone-admin-ui) or the `status` of an existing IdentityDeletionProcess has changed, the [Connector event]({% link _docs_integrate/connector-events.md %}) `transport.identityDeletionProcessStatusChanged` is raised. In addition, an external `IdentityDeletionProcessStarted` event can be received when an Identity deletion is triggered by the Backbone Admin UI.

### Self-Initiated Identity Deletion

An Identity can actively trigger its own process of deletion by executing the [Initiate IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-initiate-identitydeletionprocess.md %}) use case.
Successful execution leads to the creation of an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) with `"Approved"` as `status`.
In contrast to the [Identity deletion triggered by the Backbone Admin UI]({% link _docs_integrate/delete-identities.md %}#identity-deletion-triggered-by-the-backbone-admin-ui), no further approval of the Identity is therefore required.
Instead, the Identity is immediately in deletion and will be irreversibly deleted from the Backbone once the end of the associated grace period of the IdentityDeletionProcess specified within its `gracePeriodEndsAt` property has been exceeded.
Within the grace period, the [Cancel IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}) use case can be applied by the Identity if it no longer wants to be deleted.
In this case, the `status` of the IdentityDeletionProcess changes to `"Cancelled"`.
Trying to cancel an IdentityDeletionProcess that does not have `"Approved"` as `status` causes an error with `error.runtime.identityDeletionProcess.noApprovedIdentityDeletionProcess` as [error code]({% link _docs_integrate/error-codes.md %}) to be thrown.
Furthermore, please note that the use of the [Initiate IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-initiate-identitydeletionprocess.md %}) use case is not permitted if there is already an active IdentityDeletionProcess.
The corresponding [error code]({% link _docs_integrate/error-codes.md %}) is given by `error.runtime.identityDeletionProcess.activeIdentityDeletionProcessAlreadyExists`.

### Identity Deletion Triggered by the Backbone Admin UI

As required by the General Data Protection Regulation, abbreviated GDPR, it is possible for an Identity to actively trigger its process of deletion by using support tickets or writing e-mails to the Operator of the Backbone.
In order to be able to offer an Identity this option in addition to the possibility of [self-initiated Identity deletion]({% link _docs_integrate/delete-identities.md %}#self-initiated-identity-deletion), it must be possible for the Backbone Operator to trigger the Identity deletion via the Backbone Admin UI.
Successful triggering leads to the creation of an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) with `"WaitingForApproval"` as `status` for the Identity.
As the Backbone Operator must ensure that the creator of the support ticket or the writer of the e-mail is actually the Identity whose deletion was requested, the Identity must additionally [approve the IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-approve-identitydeletionprocess.md %}) afterwards.
However, the Identity can also [reject the IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-reject-identitydeletionprocess.md %}) if it has changed its mind about its deletion after the process of Identity deletion was triggered by the Backbone Admin UI.
Approving or rejecting an IdentityDeletionProcess with `"WaitingForApproval"` as `status` is only possible until the date specified within the `approvalPeriodEndsAt` property has not been exceeded.
If it is neither approved nor rejected by then, it automatically changes its `status` to `"Cancelled"` and the Identity will not be deleted.
Moreover, please note that the use cases for approving or rejecting an IdentityDeletionProcess cannot be executed by the Identity if there is no IdentityDeletionProcess with `"WaitingForApproval"` as `status`.
An error with [code]({% link _docs_integrate/error-codes.md %}) `error.runtime.identityDeletionProcess.noWaitingForApprovalIdentityDeletionProcess` is otherwise thrown.
After the IdentityDeletionProcess has changed its `status` from `"WaitingForApproval"` to `"Approved"` as a result of the approval, it embodies that the Identity will be deleted after the grace period ends.
As with the [self-initiated Identity deletion]({% link _docs_integrate/delete-identities.md %}#self-initiated-identity-deletion), the [Cancel IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}) use case can be executed by the Identity within the grace period if it no longer wants to be deleted.
If it is not cancelled by then, the Identity will be irreversibly deleted from the Backbone.

## Side Effects of Identity Deletion on Relationships

The deletion and even the triggering of the deletion of an Identity logically has an impact on the peers who have [established a Relationship]({% link _docs_integrate/establish-relationships.md %}) with it.
All peers of the Identity that is currently in deletion are informed that the deletion of the Identity has been triggered.
This is done via the `transport.peerToBeDeleted` [Connector event]({% link _docs_integrate/connector-events.md %}).
In addition, it is stored within the `peerDeletionInfo` property of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) that the Identity currently has `"ToBeDeleted"` as `deletionStatus`.
The `status` of the Relationship remains `"Active"` for the moment.
If the Identity is finally deleted, the `deletionStatus` changes to `"Deleted"` and the `transport.peerDeleted` Connector event can be received.
Since the deletion of an Identity leads to the [decomposition of its Relationships]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship), the `status` of the Relationship is changed to `"DeletionProposed"` and `"DecompositionDueToIdentityDeletion"` is specified as the `reason` of the associated [RelationshipAuditLogEntry]({% link _docs_integrate/data-model-overview.md %}#relationshipauditlogentry).
Otherwise, if the Identity decides against its deletion within the grace period, the `peerDeletionInfo` of the Relationship is set back to `undefined` and the `transport.peerDeletionCancelledEvent` Connector event is triggered.
The deletion of an Identity has effects on [creating a new Relationship]({% link _docs_integrate/delete-identities.md %}#creation-of-new-relationships) to it, [sending Messages]({% link _docs_integrate/delete-identities.md %}#sending-messages) to it, [sending Requests to it and responding to Requests from it]({% link _docs_integrate/delete-identities.md %}#sending-and-responding-to-requests).

### Creation of New Relationships

To [establish a Relationship]({% link _docs_integrate/establish-relationships.md %}), an Identity must first create a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate), which is then used by its peer to create a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status`.
However, if the creator of the RelationshipTemplate is meanwhile in deletion or has even deleted itself beforehand, the peer receives an error with [error code]({% link _docs_integrate/error-codes.md %}) `error.transport.relationships.activeIdentityDeletionProcessOfOwnerOfRelationshipTemplate` when trying to create a new Relationship using the RelationshipTemplate.

### Sending Messages

An Identity is not permitted to [send a Message]({% link _docs_use-cases/use-case-transport-send-message-to-recipients.md %}) to a peer with which a Relationship has been established and which has already been deleted.
As long as the `content` of a [Message]({% link _docs_integrate/data-model-overview.md %}#message) is not a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification), this also applies to a peer in deletion.
If the Identity tries to send a Message anyway to such a peer, an error with [error code]({% link _docs_integrate/error-codes.md %}) `error.runtime.messages.peerIsInDeletion` or `error.transport.messages.peerIsDeleted` is thrown.
Sent Messages whose `content` is a Notification cannot be received by a peer which is in deletion, but they are queued in case the peer cancels its deletion. After the peer has cancelled its deletion, it receives the queued Notifications.

### Sending and Responding to Requests

An incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request) sent by an Identity with which a Relationship has been established and which is in deletion or has already been deleted cannot be responded to.
If an attempt is nevertheless made to [accept]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) or [reject]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) the incoming Request, an error with [code]({% link _docs_integrate/error-codes.md %}) `error.consumption.requests.peerIsInDeletion` or `error.consumption.requests.peerIsDeleted`, respectively, is thrown.
Similarly, it is not possible to [create an outgoing Request]({% link _docs_use-cases/use-case-consumption-create-outgoing-request.md %}) to be sent to an Identity with which a Relationship has been established and which is in deletion or has already been deleted.
