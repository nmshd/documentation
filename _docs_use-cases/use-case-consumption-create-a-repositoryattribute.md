---
permalink: /use-case-consumption-create-a-repositoryattribute
published: true
title: "Create a RepositoryAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA1
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: createRepositoryAttribute
  - description:
  - feature category: Normalized attributes
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments: We cannot create RelationshipAttributes with this UseCase
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: post /api/v2/Attributes
  - published: default
  - link: consumption/create-a-repositoryattribute
  - redirect_from: /use-case-consumption-create-an-attribute
require:
required_by:
api_route_regex: ^post /api/v2/Attributes$
---

{% include use-cases/use-case-consumption-create-a-repositoryattribute.md %}
