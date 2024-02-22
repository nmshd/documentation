---
permalink: /use-case-consumption-execute-an-identityattributequery
published: true
title: "Execute an IdentityAttributeQuery"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA8
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: executeIdentityAttributeQuery
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
  - api_route_regex: post /api/v2/Attributes/ExecuteIdentityAttributeQuery
  - published: default
  - link: consumption/execute-an-identityattributequery
  - redirect_from:
require:
required_by:
api_route_regex: ^post /api/v2/Attributes/ExecuteIdentityAttributeQuery$
---

{% include use-cases/use-case-consumption-execute-an-identityattributequery.md %}
