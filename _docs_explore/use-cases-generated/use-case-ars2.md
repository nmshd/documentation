---
permalink: /explore/use-case-ars2
published: true
title: "Notify Backbone of unauthorized Profile access"
type: use-case
properties:
  - id: ARS2
  - layer: Transport
  - facade:
  - function:
  - description: Possible other Devices of the Identity should be notified, if the pin or password has been wrongly entered multiple times. This notification could happen by the use of the Backbone, in addition to a possible central tracking of failed login attempts on Devices.
  - feature category: Identity Hardening
  - tech category: Profiles
  - status: QUESTIONS
  - comments:
  - actor: AppRuntime
  - component: AppRuntime
  - trigger: A wrong pin / password in the Profile Login has been entered multiple times
  - precondition: A pin / password has been set up for this Profile
  - result:
  - priority: LOW
  - complexity: MEDIUM
  - size: L
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link auf demo:
require:
required_by:
---

{% include properties_list.html %}
