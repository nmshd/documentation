---
# Start automatic generation
permalink: use-case-transport-reject-identitydeletionprocess
published: false
title: "Reject IdentityDeletionProcess"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RID4
  - component: Runtime
  - layer: Transport
  - facade: IdentityDeletionProcessFacade
  - function: rejectIdentityDeletionProcess
  - description: Reject an IdentityDeletionProcess that has status 'Waiting for Approval' that was started by external support channel (from Backbone Admin UI)
  - feature category: Identity Handling
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
  - link: use-case-transport-reject-identitydeletionprocess
require:
required_by:
# End automatic generation
---