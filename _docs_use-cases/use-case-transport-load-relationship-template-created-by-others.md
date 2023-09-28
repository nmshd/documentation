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
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: loadPeerRelationshipTemplate
  - description: Loads a 'RelationshipTemplate' created by others. This is a prerequisite for using the template while creating a new 'Relationship'.
  - feature category: Consent required before any data is shared
  - tech category: RelationshipTemplates
  - status: DONE
  - comments:
  - actor: Identity
  - component: Runtime
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link: transport/load-relationship-template-created-by-others
require:
required_by:
---

{% include use-cases/use-case-transport-load-relationship-template-created-by-others.md %}
