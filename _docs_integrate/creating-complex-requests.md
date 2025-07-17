---
# Start automatic generation
permalink: integrate/creating-complex-requests
published: false
title: "Creating complex requests"
type: scenario
toc: true
properties:
  - id: SC039
  - category: Working With Requests
  - description:
  - customer: All
  - component: integrate
  - level: Advanced
  - implementation status: DONE
  - documentation status: OPEN
  - published:
  - link: creating-complex-requests
require:
required_by:
# End automatic generation
---

{% include warnings/documentation-is-prerelease %}

# Flow

One enmeshed Request can contain several semantically different RequestItems. Each RequestItem is atomic in how the RequestItem is processed by enmeshed. The Request itself is then the transactional boundary: Either the whole Request is accepted as a complete construct or it is rejected (same as expiry). This also means that all required fields from all RequestItems inside the Request must be filled.

Optional RequestItems can be flagged with the help of the `mustBeAccepted` property for every RequestItem: If a RequestItem must be accepted, it means it is a required item which needs to be filled out. If `mustBeAccepted` is false, the RequestItem is counted as optional and thus can be omitted. A Request must contain at least one `mustBeAccepted` RequestItem, otherwise the Request wouldn't make sense.

There is also the option to use RequestItemGroups to semantically cluster a big Request into several parts. For example, one could split up a Request into semantic groups like "things I'd like to share", "things I need to know", "things I'd like to know" and "things we must agree on".

# Examples

- The very first Request between two Identities is a very important one, as Attributes should be shared between each other and at least some privacy consent should be given. Only if the user agrees to this Request, the actual Relationship is created.
- Upgrading a contract or moving a user to a different role, might require personal information and consents to be shared as a whole. Only if the Identity agrees to this Request, the actual contract or role can be switched.
