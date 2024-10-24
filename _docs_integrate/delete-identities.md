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

Every [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) has the option of deleting itself from the Backbone.
It does not matter whether this Identity is an App user or a Connector.

Usually Identity deletion takes place with a grace period in which the owner of the Identity can revoke the decision to be deleted.

## IdentityDeletionProcesses

From a technical perspective, the process of Identity deletion is described by a data object of type [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess). It can be uniquely identified by its `id`.
An IdentityDeletionProcess can have `"WaitingForApproval"`, `"Rejected"`, `"Approved"` or `"Cancelled"` as its `status`.
If it has `"WaitingForApproval"` or `"Approved"` as `status`, it is also referred to as an **active IdentityDeletionProcess**.
There can be at most one active IdentityDeletionProcess per Identity.

### Getters

There are three [use cases]({% link _docs_integrate/use-cases.md %}) for getting one or more [IdentityDeletionProcesses]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess):

- If the `id` of an IdentityDeletionProcess is known, it can be viewed by calling the [Get IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-get-identitydeletionprocess.md %}) use case.
- All IdentityDeletionProcesses of an Identity can be viewed by utilizing the [Get IdentityDeletionProcesses]({% link _docs_use-cases/use-case-transport-get-identitydeletionprocesses.md %}) use case. This includes IdentityDeletionProcesses with `"Cancelled"` or `"Rejected"` as `status` in particular.
- The [Get active IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-get-active-identitydeletionprocess.md %}) use case can be used to view the currently active IdentityDeletionProcess if one exists.

### Events

Whenever a new [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) has been created due to a [self-initiated Identity deletion]({% link _docs_integrate/delete-identities.md %}#self-initiated-identity-deletion) or by the Backbone Admin UI after requesting the [Identity deletion via a support channel]({% link _docs_integrate/delete-identities.md %}#identity-deletion-via-a-support-channel) or the `status` of an existing IdentityDeletionProcess has changed, a `transport.identityDeletionProcessStatusChanged` [Connector event]({% link _docs_integrate/connector-events.md %}) is raised. In addition, an external `IdentityDeletionProcessStarted` event can be received when a new IdentityDeletionProcess is created by the Backbone Admin UI.

### Error Codes

The following [error codes]({% link _docs_integrate/error-codes.md %}) can occur in connection with IdentityDeletionProcesses and the use of their use cases:

- `error.runtime.identityDeletionProcess.noActiveIdentityDeletionProcess`
- `error.runtime.identityDeletionProcess.activeIdentityDeletionProcessAlreadyExists`
- `error.runtime.identityDeletionProcess.noApprovedIdentityDeletionProcess`
- `error.runtime.identityDeletionProcess.noWaitingForApprovalIdentityDeletionProcess`
- `error.transport.relationships.activeIdentityDeletionProcessOfOwnerOfRelationshipTemplate`

## Options for Identity Deletion

An Identity can be deleted in two different ways:

- Initiating the process of Identity deletion yourself.
- Use of a support channel to trigger the process of Identity deletion and subsequent approval of the triggered Identity deletion.

However, depending on the Backbone environment, it is also conceivable to set up automatic Identity deletion after a long period of Identity inactivity.
{: .notice--info}

### Self-Initiated Identity Deletion

Actively trigger the deletion process by use of the App or the Connector by calling the [Initiate IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-initiate-identitydeletionprocess.md %}) use case.
There is no further approval of the Identity required with this option.

The [Cancel IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}) use case can be called if it is no longer wanted to delete the Identity.

### Identity Deletion via a Support Channel

Actively trigger the deletion process by use of support tickets/e-mails to the Backbone operator (as required by GDPR).
An active approval of the Identity is required with this option, as the Backbone must ensure, that the support ticket creator is the owner of the Identity.
As there is the need of a push notification channel for this, the Connector does not have the ability to trigger the Identity deletion over the Backbone.

Approval is done by using the [Approve IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-approve-identitydeletionprocess.md %}) use case.
However, the Identity can also [reject the IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-reject-identitydeletionprocess.md %}) if it has changed its mind after triggering the process of Identity deletion via the support channel.

After the IdentityDeletionProcess has changed its `status` from `"WaitingForApproval"` to `"Approved"` as a result of the approval, it describes that the Identity will be deleted after the grace period ends.

As with the [self-initiated Identity deletion]({% link _docs_integrate/delete-identities.md %}#self-initiated-identity-deletion), the [Cancel IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}) use case can be called by the Identity within the grace period if it is no longer wanted to delete the Identity.

## Side Effects of Identity Deletion on Relationships

The deletion and even the triggering of the deletion of an Identity logically has an impact on the peers who have [established a Relationship]({% link _docs_integrate/establish-relationships.md %}) with it.
All peers of the Identity that is currently in deletion are informed that the deletion of the Identity has been triggered.
Otherwise, they would receive a Backbone error that the Identity is no longer available as soon as they try to perform actions within the Relationship, such as [sending a Message]({% link _docs_integrate/exchange-messages.md %}).

The [error code]({% link _docs_integrate/error-codes.md %}) `error.transport.relationships.activeIdentityDeletionProcessOfOwnerOfRelationshipTemplate` arises if the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) who created the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) is currently in the process of deleting itself. Thus, it is not possible to establish a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) to it.
