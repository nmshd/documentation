---
# Start automatic generation
permalink: use-case-consumption-get-shared-versions-of-an-attribute
published: true
title: "Get shared versions of an Attribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA27
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getSharedVersionsOfAttribute
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
  - api_route_regex: GET /api/v2/Attributes/{id}/Versions/Shared
  - published: default
  - link: use-case-consumption-get-shared-versions-of-an-attribute
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/{id}/Versions/Shared$
# End automatic generation
---
