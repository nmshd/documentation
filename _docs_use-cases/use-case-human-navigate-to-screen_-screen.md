---
# Start automatic generation
permalink: use-case-human-navigate-to-screen_-screen
published: true
title: "Navigate to (screen) Screen"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: A11
  - component: App
  - layer: Human
  - facade: Screen
  - function:
  - description: The user navigates manually to the desired screen. If the screen has preconditions, these preconditions are considered to be fulfilled (e.g. a Profile has been selected and authenticated first).
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
  - link: use-case-human-navigate-to-screen_-screen
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use-case which is triggered by a manual user interaction. Although it is a very generic use-case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use-case describes the manual navigation of the App to a specific screen by the user. It includes all the actions the user needs to do in order to reach the specific screen.
