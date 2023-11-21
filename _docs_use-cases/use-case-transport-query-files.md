---
permalink: /use-case-transport-query-files
published: true
title: "Query Files"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF2
  - layer: Transport
  - facade: FilesFacade
  - function: getFiles
  - description: Queries metadata of files owned by this Connector.
  - feature category:
  - tech category: Files
  - status: DONE
  - comments:
  - actor: Identity
  - component: Runtime
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link: transport/query-files
require:
required_by:
api_route_regex: ^GET /api/v2/Files$
---

{% include use-cases/use-case-transport-query-files.md %}
