---
# Start automatic generation
permalink: integrate/respond-to-incoming-requests
published: false
title: "Respond to incoming requests"
type: scenario
toc: true
properties:
  - id: SC041
  - category: Working with requests
  - description:
  - customer: All
  - component: integrate
  - level: Advanced
  - implementation status: DONE
  - documentation status: OPEN
  - published:
  - link: respond-to-incoming-requests
require:
required_by:
# End automatic generation

---

{% include warnings/documentation-is-prerelease %}

# Flow

If one receives structured Requests, one usually needs to process the respective Request and respond to them.

Requests are usually received by standard enmeshed Messages that are automatically processed internally: The Request within the Message is extracted, a LocalRequest is created and an automated decision of the LocalRequest is tried. If the Request cannot be decided automatically, it is set to status `ManualDecisionRequired`. While processing the Request, external systems can listen to certain technical and semantic events propagated by the Connector.

The Request can then be manually accepted or rejected and before that, the respective canAccept or canReject APIs should be called.

Depending on the semantic of the Request and its containing RequestItems, some changes are automatically processed by enmeshed. If IdentityA requests an Attribute of IdentityB, and IdentityB accepts the Request by responding with the respective Attribute, IdentityB automatically creates a shared copy of this specific LocalAttribute and completes the LocalRequest. On the other hand, external systems usually needs to listen to the respective changes based on the sent out enmeshed events.

# Examples

- Organization receives a user request and needs to act manually on it
- Organization receives a user request and it was automatically decided by the Connector
