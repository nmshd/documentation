---
# Start automatic generation
permalink: use-case-consumption-get-forwardingdetails-for-attribute
published: true
title: "Get ForwardingDetails for Attribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA12
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getForwardingDetailsForAttribute
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
  - api_route_regex: GET /api/core/v1/Attributes/{id}/ForwardingDetails
  - published: default
  - link: use-case-consumption-get-forwardingdetails-for-attribute
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes/{id}/ForwardingDetails$
# End automatic generation
---
