---
# Start automatic generation
permalink: use-case-transport-get-device
published: true
title: "Get Device"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RD3
  - component: Runtime
  - layer: Transport
  - facade: DevicesFacade
  - function: getDevice
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
  - link: use-case-transport-get-device
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves the Device with the given `id`.

## Parameters

- `id` of the Device.

## On Success

- The Device that corresponds to the `id`.

## On Failure

- No Device corresponds to the `id`.
