---
permalink: /explore/use-case-ars1
published: true
title: "Select Profile / Profile Login / Create Profile Session"
type: use-case
properties:
  - id: ARS1
  - layer: Device
  - facade: AppRuntime
  - function: selectAccount
  - description:
  - feature category: Multi-profile
  - tech category: Profiles
  - status: CHANGES REQUIRED
  - comments: Why is this not within AccountServices? Password needs to be taken into consideration
  - actor: User
  - component: AppRuntime
  - trigger:
  - precondition: A pin / password has been set up for this Profile
  - result: The Device knows which Profile should be used for the user interface or any action.     If a specific action was triggered to select the Profile, the action is now executed     If not, the User is redirected to the Profile's Start Screen
  - priority: LOW
  - complexity:
  - size:
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link auf demo:
require:
required_by:
---

{% include properties_list.html %}
