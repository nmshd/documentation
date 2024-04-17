---
# Start automatic generation
permalink: use-case-human-device_-external-usecase
published: true
title: "Device External UseCase"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: A15
  - component: App
  - layer: Human
  - facade: Screen
  - function:
  - description: The user processes an external use case on the device, e.g. share something by another app or select a file to upload.
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
  - link: use-case-human-device_-external-usecase
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use-case which is triggered by a manual user interaction. Although it is a very generic use-case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use-case describes any required manual user interaction on the Device, which might be required in order to to use the App.

Examples:

- Selecting a file with the native filesystem picker
- Allow the App to use Camera, Push Notification, or equivalent
- Copy and paste information across apps
