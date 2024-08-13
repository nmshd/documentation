---
# Start automatic generation
permalink: integrate/succeed-attribute-of-peer
published: false
title: "Succeed Attribute of peer"
type: scenario
toc: true
properties:
  - id: SC062
  - category: Manage Attributes
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: OPEN
  - documentation status: OPEN
  - published:
  - link: succeed-attribute-of-peer
require:
required_by:
# End automatic generation
---

{% include warnings/feature-work-in-progress %}

# Flow

If IdentityA has a more up-to-date value of an Attribute of IdentityB, a RequestSucceedAttributeRequestItem can actively request an Attribute succession of someone else.

To ensure traceability, Attributes cannot be overwritten directly, but only a new version can be saved, which is linked to the predecessors.
