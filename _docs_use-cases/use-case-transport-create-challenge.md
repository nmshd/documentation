---
# Start automatic generation
permalink: use-case-transport-create-challenge
published: false
title: "Create Challenge"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RC1
  - component: Runtime
  - layer: Transport
  - facade: ChallengesFacade
  - function: createChallenge
  - description: Create a signed challenge.
  - feature category:
  - tech category: Challenges
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
  - api_route_regex: POST /api/core/v1/Challenges
  - published:
  - link: use-case-transport-create-challenge
require:
required_by:
api_route_regex: ^POST /api/core/v1/Challenges$
# End automatic generation
---
