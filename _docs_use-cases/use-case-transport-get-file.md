---
# Start automatic generation
permalink: use-case-transport-get-file
published: true
title: "Get File"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF2
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: getFile
  - description: Gets the File with the given `id` or `reference`.
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
  - link: use-case-transport-get-file
require:
required_by:
api_route_regex: ^GET /api/v2/Files/{idOrReference}$
# End automatic generation
---
