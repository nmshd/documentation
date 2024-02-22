---
permalink: /use-case-transport-remove-profile-from-device
published: false
title: "Remove Profile from Device"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARS4
  - component: AppRuntime
  - layer: Transport
  - facade:
  - function:
  - description: An Identity can be removed from the current Device (but will be kept for other Devices, e.g. to offboard one Device). Additionally, a Profile can be removed from another onboarded Device (e.g. for wiping another Device). If no other Device has been set up for the Profile, removing the Profile would trigger the Delete Identity from Backbone use case.
  - feature category: Multi-profile
  - tech category: Profile
  - status: IDEA
  - documentation status:
  - comments:
  - actor: User
  - trigger:
  - precondition: Profile has been selected (and has been logged into) Other Devices has been onboarded for this Identity
  - result: The Profile is removed from the Device
  - priority: HIGH
  - complexity: LOW
  - size: S
  - created_at:
  - changed_at:
  - api_route_regex:
  - published:
  - link: transport/remove-profile-from-device
  - redirect_from:
require:
required_by:
---

{% include use-cases/use-case-transport-remove-profile-from-device.md %}
