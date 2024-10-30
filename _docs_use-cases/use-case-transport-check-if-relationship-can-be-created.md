---
# Start automatic generation
permalink: use-case-transport-check-if-relationship-can-be-created
published: true
title: "Check if Relationship can be created"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR16
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: canCreateRelationship
  - description: Checks if a Relationship with the given `templateId` and `creationContent` can be created.
  - feature category: Mutual peer-to-peer Relationships
  - tech category: Relationships
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: PUT /api/v2/Relationships/CanCreate
  - published: default
  - link: use-case-transport-check-if-relationship-can-be-created
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/CanCreate$
# End automatic generation
---
