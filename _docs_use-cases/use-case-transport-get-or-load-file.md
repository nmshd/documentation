---
permalink: /use-case-transport-get-or-load-file
published: true
title: "Get or load File"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF4
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: getOrLoadFile
  - description: Loads a file of another identity. After it is loaded once, you can retrieve it without the need for the secret key by calling one of the GET-routes.
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
  - api_route_regex: GET /api/v2/Files/{idOrReference}
  - published: default
  - link: transport/get-or-load-file
  - redirect_from:
require:
required_by:
api_route_regex: ^GET /api/v2/Files/{idOrReference}$
---

{% include use-cases/use-case-transport-get-or-load-file.md %}
