---
# Start automatic generation
permalink: use-case-consumption-check-if-repositoryattribute-can-be-created
published: true
title: "Check if RepositoryAttribute can be created"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA31
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: canCreateRepositoryAttribute
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
  - api_route_regex: PUT /api/v2/Attributes/CanCreate
  - published: default
  - link: use-case-consumption-check-if-repositoryattribute-can-be-created
require:
required_by:
api_route_regex: ^PUT /api/v2/Attributes/CanCreate$
# End automatic generation
---
