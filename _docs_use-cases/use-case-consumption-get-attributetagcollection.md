---
# Start automatic generation
permalink: use-case-consumption-get-attributetagcollection
published: true
title: "Get AttributeTagCollection"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA15
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
  - api_route_regex: GET /api/core/v1/Attributes/TagCollection
  - published: default
  - link: use-case-consumption-get-attributetagcollection
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes/TagCollection$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to query the [AttributeTagCollection]({% link _docs_integrate/data-model-overview.md %}#attributetagcollection) from the Backbone.

## On Success

- Returns the [AttributeTagCollection]({% link _docs_integrate/data-model-overview.md %}#attributetagcollection).
