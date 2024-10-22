---
# Start automatic generation
permalink: integrate/process-responses-to-outgoing-requests
published: false
title: "Process responses to outgoing requests"
type: scenario
toc: true
properties:
  - id: SC040
  - category: Working With Requests
  - description:
  - customer: All
  - component: integrate
  - level: Advanced
  - implementation status: DONE
  - documentation status: OPEN
  - published:
  - link: process-responses-to-outgoing-requests
require:
required_by:
# End automatic generation
---

{% include warnings/documentation-is-prerelease %}

# Flow

If one sents out structured Requests, one usually wants to process the respective Responses to those Requests.

Responses to Requests are received by standard enmeshed Messages that are automatically processed internally: The Response within the Message is extracted, converted to a LocalResponse and stored to the already existing LocalRequest. The LocalRequest is then set to status `Completed`. While processing the Response, external systems can listen to certain technical and semantic events propagated by the Connector.

Depending on the semantic of the Request and its containing RequestItems, some changes are automatically processed by enmeshed. If IdentityA requests an Attribute of IdentityB, and IdentityB accepts the Request by responding with the respective Attribute, IdentityA automatically processes the Response and thus stores the additional Attribute for IdentityB. On the other hand, external systems usually needs to listen to the respective changes based on the sent out enmeshed events.

# Examples

- Organization receives a single user consent to an updated privacy consent
- Organization receives the birthdate of a single user because it has been missing
