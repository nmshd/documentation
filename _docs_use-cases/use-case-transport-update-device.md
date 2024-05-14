---
# Start automatic generation
permalink: use-case-transport-update-device
published: true
title: "Update Device"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RD9
  - component: Runtime
  - layer: Transport
  - facade: DevicesFacade
  - function: updateDevice
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
  - link: use-case-transport-update-device
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case updates the `name` or `description` of a Device using its `id`.

## Parameters

- The `id` of the Device.
- The new `name` of the Device
- The new `description` of the Device

## On Success

- The corresponding Device is updated to the given `name` and `description`.

## On Failure

- There is no such Device.
