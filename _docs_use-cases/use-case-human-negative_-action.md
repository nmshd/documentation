---
# Start automatic generation
permalink: use-case-human-negative_-action
published: true
title: "Negative Action"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: A17
  - component: App
  - layer: Human
  - facade: Screen
  - function:
  - description: The user triggers a negative action on the current screen, i.e. a reject. There should be a show/navigation use case before using this use case (to define the screen).
  - feature category:
  - tech category: User Action
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: User
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
  - link: use-case-human-negative_-action
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This App use case broadly describes a dissent of the user with the information on a screen, and thus triggers a negative action on the screen.

For example, the user manually rejects an incoming Request or RelationshipTemplate, because too much personal data is requested.
