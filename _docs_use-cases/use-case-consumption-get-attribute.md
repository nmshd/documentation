---
permalink: /use-case-consumption-get-attribute
published: true
title: "Get Attribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA5
  - layer: Consumption
  - facade: AttributesFacade
  - function: getAttribute
  - description: Fetches the attribute with the given 'id'.
  - feature category: Normalized attributes
  - tech category: Attributes
  - status: DONE
  - comments:
  - actor: Identity
  - component: Runtime
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link: consumption/get-attribute
require:
required_by:
api_route_regex: ^get /api/v2/Attributes/{id}$
---

{% include use-cases/use-case-consumption-get-attribute.md %}
