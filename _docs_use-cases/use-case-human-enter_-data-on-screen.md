---
# Start automatic generation
permalink: use-case-human-enter_-data-on-screen
published: true
title: "Enter Data (on screen)"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: A13
  - component: App
  - layer: Human
  - facade: Screen
  - function:
  - description: The user enters data into the current screen. There should be a show/navigation use case before using this use case (to define the screen).
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
  - link: use-case-human-enter_-data-on-screen
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use-case which is triggered by a manual user interaction. Although it is a very generic use-case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use-case describes entering data on the currently shown screen by the user. This is a manual task done by the user.

An example could be the user entering the requested data in a incoming [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest).
