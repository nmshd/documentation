---
# Start automatic generation
permalink: use-case-consumption-delete-a-repositoryattribute
published: true
title: "Delete a RepositoryAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA7
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: deleteRepositoryAttribute
  - description:
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
  - api_route_regex: DELETE /api/v2/Attributes/{id}
  - published: default
  - link: use-case-consumption-delete-a-repositoryattribute
require:
required_by:
api_route_regex: ^DELETE /api/v2/Attributes/{id}$
# End automatic generation
---
