---
# Start automatic generation
permalink: use-case-consumption-upsert-identitymetadata
published: true
title: "Upsert IdentityMetadata"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIDM1
  - component: Runtime
  - layer: Consumption
  - facade: IdentityMetadataFacade
  - function: upsertIdentityMetadata
  - description: Insert or update IdentityMetadata of Identity
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
  - api_route_regex: PUT /api/v2/IdentityMetadata
  - published: default
  - link: use-case-consumption-upsert-identitymetadata
require:
required_by:
api_route_regex: ^PUT /api/v2/IdentityMetadata$
# End automatic generation
---
