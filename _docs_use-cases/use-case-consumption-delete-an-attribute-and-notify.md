---
# Start automatic generation
permalink: use-case-consumption-delete-an-attribute-and-notify
published: true
title: "Delete an Attribute and notify"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA6
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: deleteAttributeAndNotify
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
  - api_route_regex: DELETE /api/core/v1/Attributes/{id}
  - published: default
  - link: use-case-consumption-delete-an-attribute-and-notify
require:
required_by:
api_route_regex: ^DELETE /api/core/v1/Attributes/{id}$
# End automatic generation
---
