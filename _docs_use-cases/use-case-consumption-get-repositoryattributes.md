---
# Start automatic generation
permalink: use-case-consumption-get-repositoryattributes
published: true
title: "Get RepositoryAttributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA22
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getRepositoryAttributes
  - description: Fetches all RepositoryAttributes
  - feature category: Normalized Attributes
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
  - api_route_regex: GET /api/v2/Attributes/Own/Repository
  - published: default
  - link: use-case-consumption-get-repositoryattributes
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/Own/Repository$
# End automatic generation
---
