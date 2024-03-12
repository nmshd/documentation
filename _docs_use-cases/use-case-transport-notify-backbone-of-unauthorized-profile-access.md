---
# Start automatic generation
permalink: use-case-transport-notify-backbone-of-unauthorized-profile-access
published: false
title: "Notify Backbone of unauthorized Profile access"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARS2
  - component: AppRuntime
  - layer: Transport
  - facade:
  - function:
  - description: Possible other Devices of the Identity should be notified, if the pin or password has been wrongly entered multiple times. This notification could happen by the use of the Backbone, in addition to a possible central tracking of failed login attempts on Devices.
  - feature category: Identity Hardening
  - tech category: Profiles
  - status: IDEA
  - documentation status:
  - comments:
  - actor: AppRuntime
  - trigger: A wrong pin / password in the Profile Login has been entered multiple times
  - precondition: A pin / password has been set up for this Profile
  - result:
  - priority: LOW
  - complexity: MEDIUM
  - size: L
  - created_at:
  - changed_at:
  - api_route_regex:
  - published:
  - link: use-case-transport-notify-backbone-of-unauthorized-profile-access
require:
required_by:
# End automatic generation

---

{% include use-cases/use-case-transport-notify-backbone-of-unauthorized-profile-access.md %}
