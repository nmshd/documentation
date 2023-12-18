---
permalink: /use-case-transport-request-deletion-of-identity
published: false
title: "Request Deletion of Identity"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARS5
  - component: AppRuntime
  - layer: Transport
  - facade:
  - function:
  - description: An Identity can be deleted from the Backbone completely.
  - feature category:
  - tech category: Profile
  - status: OPEN
  - documentation status:
  - comments: Only AppRuntime or where to find this UseCases inside the Runtime (Connector also needs to remove its Identity)
  - actor: User
  - trigger:
  - precondition: Profile has been selected (and has been logged into)
  - result: The Identity has been removed from the Identity
  - priority: HIGH
  - complexity: HIGH
  - size: L
  - created_at:
  - changed_at:
  - api_route_regex:
  - published:
  - link: transport/request-deletion-of-identity
  - redirect_from:
require:
required_by:
---

{% include use-cases/use-case-transport-request-deletion-of-identity.md %}
