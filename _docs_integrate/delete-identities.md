---
# Start automatic generation
permalink: integrate/delete-identities
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

{% include warnings/feature-work-in-progress %}

# Flow

Every Identity has the option of deleting itself from the Backbone. There are three options to delete the Identity:

- Actively trigger the deletion process by use of the App or the Connector. There is no further approval of the Identity required with this option.
- Actively trigger the deletion process by use of support tickets/e-mails to the Backbone operator (as required by GDPR). An active approval of the Identity is required with this option, as the Backbone must ensure, that the support ticket creator is the owner of the Identity. As there is the need of a push notification channel for this, the Connector does not have the ability to trigger the Identity deletion over the Backbone.
- Be inactive for a long period of time: Depending on the Backbone environment, deleting inactive Identities is possible.

All peers of the to-be-deleted Identity are informed about this deletion, otherwise they will end up getting Backbone errors that the Identity is no longer available.

Usually Identity deletion takes place with a grace period in which the owner of the Identity can revoke the decision to be deleted. The Identity deletion can be triggered by the runtime.
