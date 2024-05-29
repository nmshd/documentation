---
# Start automatic generation
permalink: use-case-human-positive_-action
published: true
title: "Positive Action"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: A16
  - component: App
  - layer: Human
  - facade: Screen
  - function:
  - description: The user triggers a positive action on the current screen, i.e. a submit or approval . There should be a show/navigation use case before using this use case (to define the screen).
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
  - link: use-case-human-positive_-action
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use case broadly describes the manual action of a user that indicates consent with something shown on the screen and thus a positive action of the screen is triggered.

For example, the user manually accepts an incoming Request or RelationshipTemplate in order to submit the requested data.
