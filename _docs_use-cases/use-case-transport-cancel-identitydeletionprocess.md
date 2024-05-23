---
# Start automatic generation
permalink: use-case-transport-cancel-identitydeletionprocess
published: false
title: "Cancel IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID2
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: cancelIdentityDeletionProcess
  - description: Cancel an IdentityDeletionProcess that has status 'Approved' within grace period
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
  - link: use-case-transport-cancel-identitydeletionprocess
require:
required_by:
# End automatic generation
---
