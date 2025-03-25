---
# Start automatic generation
permalink: use-case-user_interface-show-screen-screen
published: false
title: "Show (screen) Screen"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: A04
  - component: App
  - layer: User Interface
  - facade:
  - function:
  - description: The App navigates to the desired screen by itself.
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
  - link: use-case-user_interface-show-screen-screen
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use case which is triggered without a user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use case describes an internal App behavior when a specific screen should be shown or navigated to, based on an internal event and without a user interaction. The context of the App updates to show the content of the screen in question.

Examples would be to show an error page if something really bad happens or an automated navigation to a specific screen because a RelationshipTemplate has been accepted.
