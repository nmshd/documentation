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

Every [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) has the option of deleting itself from the Backbone.
It does not matter whether this Identity is an App user or a Connector.

Usually Identity deletion takes place with a grace period in which the owner of the Identity can revoke the decision to be deleted. The Identity deletion can be triggered by the runtime.

## IdentityDeletionProcesses

From a technical perspective, the process of Identity deletion is described by a data object of type [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess).

## Identity Deletion Options

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

As with the [self-initiated Identity deletion]({% link _docs_integrate/delete-identities.md %}#self-initiated-identity-deletion), the [Cancel IdentityDeletionProcess]({% link _docs_use-cases/use-case-transport-cancel-identitydeletionprocess.md %}) use case can be called if it is no longer wanted to delete the Identity.

## Side Effects of Identity Deletion on Relationships

The deletion and even the triggering of the deletion of an Identity logically has an impact on the peers who have [established a Relationship]({% link _docs_integrate/establish-relationships.md %}) with it.
All peers of the Identity that is currently in deletion are informed that the deletion of the Identity has been triggered.
Otherwise, they would receive a Backbone error that the Identity is no longer available as soon as they try to perform actions within the Relationship, such as [sending a Message]({% link _docs_integrate/exchange-messages.md %}).
