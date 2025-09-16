---
# Start automatic generation
permalink: use-case-anonymous-create-empty-token
published: true
title: "Create empty Token"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RY2
  - component: Runtime
  - layer: Anonymous
  - facade: AnonymousTokensFacade
  - function: createEmptyToken
  - description:
  - feature category: Create empty Token for Device onboarding
  - tech category: AnonymousTokens
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
  - api_route_regex:
  - published: default
  - link: use-case-anonymous-create-empty-token
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case creates an empty [Token]({% link _docs_integrate/data-model-overview.md %}#token).

## On Success

- Returns an empty Token.
