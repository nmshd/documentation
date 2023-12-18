---
permalink: /use-case-transport-upload-own-file
published: true
title: "Upload own File"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF1
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: uploadOwnFile
  - description: Uploads a new own file with metadata.
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
  - api_route_regex: POST /api/v2/Files/Own
  - published: default
  - link: transport/upload-own-file
  - redirect_from:
require:
required_by:
api_route_regex: ^POST /api/v2/Files/Own$
---

{% include use-cases/use-case-transport-upload-own-file.md %}
