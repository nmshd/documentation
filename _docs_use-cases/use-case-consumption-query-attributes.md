---
# Start automatic generation
permalink: use-case-consumption-query-attributes
published: true
title: "Query Attributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA2
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getAttributes
  - description:
  - feature category: Normalized attributes
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
  - api_route_regex: get /api/v2/Attributes
  - published: default
  - link: use-case-consumption-query-attributes
require:
required_by:
# Start automatic generation
api_route_regex: ^get /api/v2/Attributes$
---

{% include use-cases/use-case-consumption-query-attributes.md %}
