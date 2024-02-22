---
permalink: /use-case-device-select-profile---profile-login---create-profile-session
published: false
title: "Select Profile / Profile Login / Create Profile Session"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARS1
  - component: AppRuntime
  - layer: Device
  - facade: AppRuntime
  - function: selectAccount
  - description:
  - feature category: Multi-profile
  - tech category: Profiles
  - status: CHANGES REQUIRED
  - documentation status:
  - comments: Why is this not within AccountServices? Password needs to be taken into consideration
  - actor: User
  - trigger:
  - precondition: A pin / password has been set up for this Profile
  - result: The Device knows which Profile should be used for the user interface or any action.     If a specific action was triggered to select the Profile, the action is now executed     If not, the User is redirected to the Profile's Start Screen
  - priority: LOW
  - complexity:
  - size:
  - created_at:
  - changed_at:
  - api_route_regex:
  - published: default
  - link: device/select-profile-/-profile-login-/-create-profile-session
  - redirect_from:
require:
required_by:
---

{% include use-cases/use-case-device-select-profile---profile-login---create-profile-session.md %}
