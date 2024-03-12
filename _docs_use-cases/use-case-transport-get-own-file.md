---
# Start automatic generation
permalink: use-case-transport-get-own-file
published: true
title: "Get own File"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF3
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: getFile
  - description:
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
  - api_route_regex: GET /api/v2/Files/Own
  - published: default
  - link: use-case-transport-get-own-file
require:
required_by:
# Start automatic generation
api_route_regex: ^GET /api/v2/Files/Own$
---

{% include use-cases/use-case-transport-get-own-file.md %}
