---
permalink: /use-case-transport-create-token-for-file
published: true
title: "Create Token for File"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF6
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: createTokenForFile
  - description: Creates a 'Token' for the 'File' with the given 'id'.
  - feature category: Arbitrary large data support
  - tech category: Files
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
  - api_route_regex: POST /api/v2/Files/{id}/Token
  - published: default
  - link: transport/create-token-for-file
require:
required_by:
api_route_regex: ^POST /api/v2/Files/{id}/Token$
---

{% include use-cases/use-case-transport-create-token-for-file.md %}
