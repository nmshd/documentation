---
permalink: /use-case-device-set-up-or-change-password-of-profile
published: false
title: "Set-up or change password of Profile"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARS3
  - component: AppRuntime
  - layer: Device
  - facade:
  - function:
  - description: A password for a Profile can be set up or changed by the User. Additionally, a password hint can be entered to help the User remembering the password.
  - feature category: Identity Hardening
  - tech category: Profile
  - status: IDEA
  - documentation status:
  - comments:
  - actor: User
  - trigger:
  - precondition: Profile has been selected (and has been logged into)
  - result: A (new) password for this Profile is stored
  - priority: LOW
  - complexity: HIGH
  - size: L
  - created_at:
  - changed_at:
  - api_route_regex:
  - published:
  - link: device/set-up-or-change-password-of-profile
  - redirect_from:
require:
required_by:
---

{% include use-cases/use-case-device-set-up-or-change-password-of-profile.md %}
