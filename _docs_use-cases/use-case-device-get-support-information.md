---
permalink: /use-case-device-get-support-information
published: true
title: "Get support Information"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: CR3
  - component: ConnectorRuntime
  - layer: Device
  - facade: ConnectorRuntime
  - function: getSupportInformation
  - description:
  - feature category:
  - tech category: Monitoring
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Integrator
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /Monitoring/Support
  - published: default
  - link: device/get-support-information
  - redirect_from:
require:
required_by:
api_route_regex: ^GET /Monitoring/Support$
---

{% include use-cases/use-case-device-get-support-information.md %}
