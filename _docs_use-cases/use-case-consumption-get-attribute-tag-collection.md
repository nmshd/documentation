---
# Start automatic generation
permalink: use-case-consumption-get-attribute-tag-collection
published: true
title: "Get Attribute Tag Collection"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA30
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getAttributeTagCollection
  - description: Get Backbone-defined `tags` for IdentityAttributes.
  - feature category: Normalized Attributes
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/v2/Attributes/TagCollection
  - published: default
  - link: use-case-consumption-get-attribute-tag-collection
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/TagCollection$
# End automatic generation
---
