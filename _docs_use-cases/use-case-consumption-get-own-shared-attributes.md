---
# Start automatic generation
permalink: use-case-consumption-get-own-shared-attributes
redirect_from:
  - /use-case-consumption-get-attributes-shared-to-peer
published: true
title: "Get own shared Attributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA4
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getOwnSharedAttributes
  - description:
  - feature category: Cross-Identity Attribute sharing
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
  - api_route_regex: GET /api/v2/Attributes/Own/Shared/Identity
  - published: default
  - link: use-case-consumption-get-own-shared-attributes
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/Own/Shared/Identity$
# End automatic generation
---
