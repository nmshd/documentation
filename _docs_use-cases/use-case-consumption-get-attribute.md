---
# Start automatic generation
permalink: use-case-consumption-get-attribute
published: true
title: "Get Attribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA5
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getAttribute
  - description: Fetches the attribute with the given `id`.
  - feature category: Cross-identity attribute sharing
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
  - api_route_regex: get /api/v2/Attributes/{id}
  - published: default
  - link: use-case-consumption-get-attribute
require:
required_by:
# Start automatic generation
api_route_regex: ^get /api/v2/Attributes/{id}$
---

{% include use-cases/use-case-consumption-get-attribute.md %}
