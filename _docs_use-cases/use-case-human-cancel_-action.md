---
# Start automatic generation
permalink: use-case-human-cancel_-action
published: true
title: "Cancel Action"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: A18
  - component: App
  - layer: Human
  - facade: Screen
  - function:
  - description: The user triggers a cancel action on the current screen, e.g. to postpone a decision. There should be a show/navigation use case before using this use case (to define the screen).
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
  - link: use-case-human-cancel_-action
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

The cancel action use case generally describes the action a user manually triggers on an App screen to stop a running process that has already been started, or to cancel the current user interface context by navigating back or close a popup.

An example could be the user started to write a Mail to a contact and decides not to send it and returns to the home screen.
