---
# Start automatic generation
permalink: use-case-transport-query-peer-files
published: true
title: "Query peer Files"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RF5
  - component: Runtime
  - layer: Transport
  - facade: FilesFacade
  - function: getFiles
  - description: Queries metadata of Files owned by any peer.
  - feature category:
  - tech category: Files
  - status: DONE
  - documentation status: DONE
  - comments: Query Files restricted to peer Files
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/v2/Files/Peer
  - published: default
  - link: use-case-transport-query-peer-files
require:
required_by:
api_route_regex: ^GET /api/v2/Files/Peer$
# End automatic generation
---
