---
permalink: /use-case-transport-download-file
published: true
title: "Download File"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF5
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: downloadFile
  - description: Downloads the file with the given 'id'.
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
  - api_route_regex: GET /api/v2/Files/{id}/Download
  - published: default
  - link: transport/download-file
  - redirect_from:
require:
required_by:
api_route_regex: ^GET /api/v2/Files/{id}/Download$
---

{% include use-cases/use-case-transport-download-file.md %}
