---
# Start automatic generation
permalink: use-case-transport-accept-relationship-reactivation
published: true
title: "Accept Relationship reactivation"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR12
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: acceptRelationshipReactivation
  - description: Accepts the reactivation of the Relationship with the given `relationshipId`.
  - feature category: Mutual peer-to-peer Relationships
  - tech category: Relationships
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority:
  - complexity:
  - size:
  - created_at:
  - changed_at:
  - api_route_regex: PUT /api/v2/Relationships/{id}/Reactivate/Accept
  - published: default
  - link: use-case-transport-accept-relationship-reactivation
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/{id}/Reactivate/Accept$
# End automatic generation
---
