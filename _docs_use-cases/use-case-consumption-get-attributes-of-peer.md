---
permalink: /use-case-consumption-get-attributes-of-peer
published: true
title: "Get Attributes of peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA3
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getPeerAttributes
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
  - api_route_regex: GET /api/v2/Attributes
  - published: default
  - link: consumption/get-attributes-of-peer
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes$
---

{% include use-cases/use-case-consumption-get-attributes-of-peer.md %}
