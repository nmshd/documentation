---
# Start automatic generation
permalink: use-case-consumption-delete-a-peer-shared-attribute-and-notify-peer
published: true
title: "Delete a peer shared Attribute and notify peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA24
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: deletePeerSharedAttributeAndNotifyPeer
  - description:
  - feature category: Cross-Identity Attribute sharing
  - tech category: Attributes
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
  - api_route_regex: DELETE /api/v2/Attributes/Peer/Shared/{id}
  - published: default
  - link: use-case-consumption-delete-a-peer-shared-attribute-and-notify-peer
require:
required_by:
api_route_regex: ^DELETE /api/v2/Attributes/Peer/Shared/{id}$
# End automatic generation
---
