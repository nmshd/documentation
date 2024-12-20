---
# Start automatic generation
permalink: use-case-consumption-get-identitymetadata
published: true
title: "Get IdentityMetadata"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIDM2
  - component: Runtime
  - layer: Consumption
  - facade: IdentityMetadataFacade
  - function: getIdentityMetadata
  - description: Get IdentityMetadata of Identity
  - feature category: Identity handling
  - tech category: IdentityMetadata
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
  - api_route_regex: GET /api/v2/IdentityMetadata
  - published: default
  - link: use-case-consumption-get-identitymetadata
require:
required_by:
api_route_regex: ^GET /api/v2/IdentityMetadata$
# End automatic generation
---
