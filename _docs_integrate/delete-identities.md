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

Actively trigger the deletion process by use of the App or the Connector by calling the [Initiate IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-initiate-identitydeletionprocess.md %}) use case.
There is no further approval of the Identity required with this option.
The IdentityDeletionProcess created by successfully executing the use case already has `"Approved"` as `status`.
No new IdentityDeletionProcess can be self-initiated if one already exists.
An error with [code]({% link _docs_integrate/error-codes.md %}) `error.runtime.identityDeletionProcess.activeIdentityDeletionProcessAlreadyExists` is thrown otherwise.

The [Cancel IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}) use case can be called by the Identity within the grace period if it no longer wants to be deleted.
The end of the associated grace period of the IdentityDeletionProcess is specified within its `gracePeriodEndsAt` property.
If the IdentityDeletionProcess is not cancelled by then, the Identity will be irreversibly deleted from the Backbone.

The [error code]({% link _docs_integrate/error-codes.md %}) `error.runtime.identityDeletionProcess.noApprovedIdentityDeletionProcess` occurs if it is tried to cancel an IdentityDeletionProcess that does not have `"Approved"` as `status`.

### Identity Deletion Triggered by the Backbone Admin UI

Actively trigger the deletion process by use of support tickets/e-mails to the Backbone operator (as required by GDPR).
An active approval of the Identity is required with this option, as the Backbone must ensure, that the support ticket creator is the owner of the Identity.
As there is the need of a push notification channel for this, the Connector does not have the ability to trigger the Identity deletion over the Backbone.

If an Identity deletion was triggered by the Backbone Admin UI, it creates an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) with `"WaitingForApproval"` as `status` for the Identity.
Approval is done by using the [Approve IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-approve-identitydeletionprocess.md %}) use case.
However, the Identity can also [reject the IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-reject-identitydeletionprocess.md %}) if it has changed its mind after the process of Identity deletion was triggered by the Backbone Admin UI.
Approving or rejecting an IdentityDeletionProcess with `"WaitingForApproval"` as `status` is only possible until the date specified within the `approvalPeriodEndsAt` property has not been exceeded.
If it is neither approved nor rejected by then, it automatically changes its `status` to `"Cancelled"` and the Identity is not deleted.
The use cases for approving and rejecting IdentityDeletionProcess cannot be executed if there is no IdentityDeletionProcess with `"WaitingForApproval"` as `status`.
The [error code]({% link _docs_integrate/error-codes.md %}) `error.runtime.identityDeletionProcess.noWaitingForApprovalIdentityDeletionProcess` arises otherwise.

After the IdentityDeletionProcess has changed its `status` from `"WaitingForApproval"` to `"Approved"` as a result of the approval, it describes that the Identity will be deleted after the grace period ends.
As with the [self-initiated Identity deletion]({% link _docs_integrate/delete-identities.md %}#self-initiated-identity-deletion), the [Cancel IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}) use case can be called by the Identity within the grace period if it no longer wants to be deleted.
If it is not cancelled by then, the Identity will be irreversibly deleted from the Backbone.

## Side Effects of Identity Deletion on Relationships

The deletion and even the triggering of the deletion of an Identity logically has an impact on the peers who have [established a Relationship]({% link _docs_integrate/establish-relationships.md %}) with it.
All peers of the Identity that is currently in deletion are informed that the deletion of the Identity has been triggered.
Otherwise, they would receive a Backbone error that the Identity is no longer available as soon as they try to perform actions within the Relationship, such as [sending a Message]({% link _docs_integrate/exchange-messages.md %}).

The [error code]({% link _docs_integrate/error-codes.md %}) `error.transport.relationships.activeIdentityDeletionProcessOfOwnerOfRelationshipTemplate` arises if the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) who created the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) is currently in the process of deleting itself. Thus, it is not possible to establish a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) to it.

An Identity can never trigger the process of deletion of another Identity.
