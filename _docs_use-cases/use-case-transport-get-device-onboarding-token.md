---
# Start automatic generation
permalink: use-case-transport-get-device-onboarding-token
published: true
title: "Get Device Onboarding Token"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RD5
  - component: Runtime
  - layer: Transport
  - facade: DevicesFacade
  - function: getdeviceOnboardingToken
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
  - link: use-case-transport-get-device-onboarding-token
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case retrieves the [Token]({% link _docs_integrate/data-model-overview.md %}#token)
of a so far not-onboarded Device that corresponds to the given Device `id` in order to onboard the Device to the Identity.

## Parameters

- `id` of the Device.
- `expiresAt` is the ISODateTime the Token expires at.

## On Success

- Returns the Token of the Device to onboard.

## On Failure

- The Device was already onboarded.
