---
permalink: /explore/use-case-ars4
published: true
title: "Remove Profile from Device"
type: use-case
properties:
  - id: ARS4
  - layer: Transport
  - facade:
  - function:
  - description: An Identity can be removed from the current Device (but will be kept for other Devices, e.g. to offboard one Device). Additionally, a Profile can be removed from another onboarded Device (e.g. for wiping another Device). If no other Device has been set up for the Profile, removing the Profile would trigger the Delete Identity from Backbone use case.
  - feature category: Multi-profile
  - tech category: Profile
  - status: OPEN
  - comments:
  - actor: User
  - component: AppRuntime
  - trigger:
  - precondition: Profile has been selected (and has been logged into) Other Devices has been onboarded for this Identity
  - result: The Profile is removed from the Device
  - priority: HIGH
  - complexity: LOW
  - size: S
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link auf demo:
require:
required_by:
---

{% include properties_list.html %}
