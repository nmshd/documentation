---
permalink: /use-case-consumption-execute-a-relationshipattributequery
published: true
title: "Execute a RelationshipAttributeQuery"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA9
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: executeRelationshipAttributeQuery
  - description:
  - feature category: Cross-identity attribute sharing
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
  - api_route_regex: post /api/v2/Attributes/ExecuteRelationshipAttributeQuery
  - published: default
  - link: consumption/execute-a-relationshipattributequery
require:
required_by:
api_route_regex: ^post /api/v2/Attributes/ExecuteRelationshipAttributeQuery$
---

{% include use-cases/use-case-consumption-execute-a-relationshipattributequery.md %}
