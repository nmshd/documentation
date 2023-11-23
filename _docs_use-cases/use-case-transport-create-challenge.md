---
permalink: /use-case-transport-create-challenge
published: true
title: "Create Challenge"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RC1
  - layer: Transport
  - facade: ChallengesFacade
  - function: createChallenge
  - description: Create a signed challenge.
  - feature category:
  - tech category: Challenges
  - status: DONE
  - comments:
  - actor: Identity
  - component: Runtime
  - trigger: Runtime
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link: transport/create-challenge
require:
required_by:
api_route_regex: ^POST /api/v2/Challenges$
---

{% include use-cases/use-case-transport-create-challenge.md %}
