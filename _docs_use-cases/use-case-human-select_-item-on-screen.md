---
# Start automatic generation
permalink: use-case-human-select_-item-on-screen
published: true
title: "Select Item (on screen)"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: A12
  - component: App
  - layer: Human
  - facade: Screen
  - function:
  - description: The user selects an item or action from the current screen. There should be a show/navigation use case before using this use case (to define the screen).
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
  - link: use-case-human-select_-item-on-screen
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use case broadly describes the manual action of a user that selects a specific item on the screen in order to receive more information about it or navigate to a specific page. Usually it triggers a navigation or a popup displaying this information.
