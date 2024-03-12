---
# Start automatic generation
permalink: use-case-device-get-appruntime-health-status
published: false
title: "Get AppRuntime health status"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: AR1
  - component: AppRuntime
  - layer: Device
  - facade: AppRuntime
  - function: getHealth
  - description:
  - feature category:
  - tech category: AppRuntime
  - status: CHANGES REQUIRED
  - documentation status:
  - comments: Only returning true -> could be offline/online indication?
  - actor: App
  - trigger:
  - precondition:
  - result:
  - priority: LOW
  - complexity:
  - size:
  - created_at:
  - changed_at:
  - api_route_regex:
  - published: default
  - link: use-case-device-get-appruntime-health-status
require:
required_by:
# End automatic generation
---

{% include use-cases/use-case-device-get-appruntime-health-status.md %}
