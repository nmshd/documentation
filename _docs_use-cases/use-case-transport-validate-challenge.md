---
# Start automatic generation
permalink: use-case-transport-validate-challenge
published: false
title: "Validate Challenge"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RC2
  - component: Runtime
  - layer: Transport
  - facade: ChallengesFacade
  - function: validateChallenge
  - description: Validate a challenge.
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
  - api_route_regex: POST /api/core/v1/Challenges/Validate
  - published:
  - link: use-case-transport-validate-challenge
require:
required_by:
api_route_regex: ^POST /api/core/v1/Challenges/Validate$
# End automatic generation
---
