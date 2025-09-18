---
# Start automatic generation
permalink: use-case-transport-fill-device-onboarding-token-with-new-device
published: true
title: "Fill Device onboarding Token with new Device"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RD7
  - component: Runtime
  - layer: Transport
  - facade: DevicesFacade
  - function: fillDeviceOnboardingTokenWithNewDevice
  - description: Fill Device onboarding Token with new Device
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
  - link: use-case-transport-fill-device-onboarding-token-with-new-device
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case creates a new Device and fills the given [empty Token]({% link _docs_use-cases/use-case-anonymous-create-empty-token.md %}) with the onboarding information.

## Parameters

- `reference` pointing to an empty [Token]({% link _docs_integrate/data-model-overview.md %}#token).
- `profileName` can be specified optionally.
- `isAdmin` can be specified optionally.

## On Success

- Returns the filled Device onboarding Token.

## On Failure

- The `reference` is not pointing to an empty Token.
