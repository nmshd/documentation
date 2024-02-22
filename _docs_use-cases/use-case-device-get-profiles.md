---
permalink: /use-case-device-get-profiles
published: true
title: "Get Profiles"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARP2
  - component: AppRuntime
  - layer: Device
  - facade: AccountServices
  - function: getAccounts
  - description: The User needs to get all Profiles on the Device and their metadata.
  - feature category: Multi-profile
  - tech category: Profiles
  - status: QUESTIONS
  - documentation status: DONE
  - comments: No Queries?
  - actor: App
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
  - link: device/get-profiles
  - redirect_from:
require:
required_by:
---

{% include use-cases/use-case-device-get-profiles.md %}
