---
# Start automatic generation
permalink: use-case-transport-query-devices
published: true
title: "Query Devices"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RD2
  - component: Runtime
  - layer: Transport
  - facade: DevicesFacade
  - function: getDevices
  - description:
  - feature category: Multi-device
  - tech category: Devices
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger: Runtime
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex:
  - published: default
  - link: use-case-transport-query-devices
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case queries all [Devices]({% link _docs_integrate/data-model-overview.md %}#device) of the Identity.

## On Success

- Returns all Devices.

{{properties.description}}

{% include properties_list.html %}

This use-case queries all [Devices]({% link _docs_integrate/data-model-overview.md %}#device) of the Identity.

## On Success

- Returns all Devices.
