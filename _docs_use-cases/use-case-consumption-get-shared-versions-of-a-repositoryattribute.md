---
# Start automatic generation
permalink: use-case-consumption-get-shared-versions-of-a-repositoryattribute
published: true
title: "Get shared versions of a RepositoryAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA20
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getSharedVersionsOfRepositoryAttribute
  - description:
  - feature category: Cross-Identity Attribute sharing
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments: deprecated, will be removed with v5
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
  - link: use-case-consumption-get-shared-versions-of-a-repositoryattribute
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/{id}/Versions/Shared$
# End automatic generation
---
