---
# Start automatic generation
permalink: use-case-transport-get-active-identitydeletionprocess
published: false
title: "Get active IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID6
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: getActiveIdentityDeletionProcess
  - description: Get IdentityDeletionProcess that is in status 'Waiting for Approval' or 'Approved'
  - feature category: Identity handling
  - tech category: IdentityDeletionProcesses
  - status: DONE
  - documentation status: OPEN
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
  - api_route_regex:
  - published:
  - link: use-case-transport-get-active-identitydeletionprocess
require:
required_by:
# End automatic generation
---
