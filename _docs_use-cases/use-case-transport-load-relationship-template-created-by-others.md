---
permalink: /use-case-transport-load-relationship-template-created-by-others
published: true
title: "Load Relationship Template created by others"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RT2
  - component: Runtime
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: loadPeerRelationshipTemplate
  - description: Loads a 'RelationshipTemplate' created by others. This is a prerequisite for using the template while creating a new 'Relationship'.
  - feature category: Consent required before any data is shared
  - tech category: RelationshipTemplates
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
  - api_route_regex: POST /api/v2/RelationshipTemplates/Peer
  - published: default
  - link: transport/load-relationship-template-created-by-others
  - redirect_from:
require:
required_by:
api_route_regex: ^POST /api/v2/RelationshipTemplates/Peer$
---

{% include use-cases/use-case-transport-load-relationship-template-created-by-others.md %}
