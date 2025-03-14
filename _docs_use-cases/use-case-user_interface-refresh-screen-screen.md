---
# Start automatic generation
permalink: use-case-user_interface-refresh-screen-screen
published: false
title: "Refresh (screen) Screen"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: A10
  - component: App
  - layer: User Interface
  - facade:
  - function:
  - description: The App refreshes the current screen.
  - feature category:
  - tech category: App
  - status: DONE
  - documentation status:
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
  - link: use-case-user_interface-refresh-screen-screen
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use case which is triggered without a user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use case describes an internal App behavior whenever a screen needs to refresh itself without user interaction.

To keep the screen's data in sync with what is actually happening (i.e. if the status of a LocalRequest changes or a new Mail is received) the App refreshes its screen when necessary.
