---
# Start automatic generation
permalink: integrate/request-and-process-attributes-by-messages
published: false
title: "Request and process attributes by messages"
type: scenario
toc: true
properties:
  - id: SC052
  - category: Manage Attributes
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DOCS ONLY
  - documentation status: OPEN
  - published:
  - link: request-and-process-attributes-by-messages
require:
required_by:
# End automatic generation
---

{% include warnings/documentation-is-prerelease %}

The onExistingRelationship field can also be sent with a RelationshipTemplateContent. The request in this field is processed if this RelationshipTemplate is processed by an identity that already has a Relationship with the Connector.

This can be used, for example, to be able to log in via QR code.
