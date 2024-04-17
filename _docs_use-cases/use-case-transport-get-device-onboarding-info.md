---
# Start automatic generation
permalink: use-case-transport-get-device-onboarding-info
published: true
title: "Get Device Onboarding Info"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RD4
  - component: Runtime
  - layer: Transport
  - facade: DevicesFacade
  - function: getDeviceOnboardingInfo
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
  - link: use-case-transport-get-device-onboarding-info
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case retrieves the onboarding information a so far not-onboarded Device that corresponds to the given Device `id` in order to onboard the Device to the Identity.

## Parameters

- `id` of the Device.

## On Success

- Returns the onboarding information of the Device.

## On Failure

- The Device was already onboarded.
