---
# Start automatic generation
permalink: use-case-transport-create-device-onboarding-token
published: true
title: "Create Device Onboarding Token"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RD5
  - component: Runtime
  - layer: Transport
  - facade: DevicesFacade
  - function: createDeviceOnboardingToken
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
  - link: use-case-transport-create-device-onboarding-token
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is deprecated and will be removed in the next major version. Please use the use case [Fill Device onboarding Token with new Device](use-case-transport-fill-device-onboarding-token-with-new-device) instead.
{: .notice--warning}

This use case retrieves the [Token]({% link _docs_integrate/data-model-overview.md %}#token) of a not yet onboarded Device that corresponds to the given Device `id` in order to onboard the Device to the Identity.

## Parameters

- `id` of the Device.
- `expiresAt` is the ISODateTime the Token expires at.
- `passwordProtection` can be specified as an object for [PasswordProtection]({% link _docs_integrate/data-model-overview.md %}#passwordprotection) of a Token. If set, only the Identities that know the password specified within the `passwordProtection.password` property of the Token can load it from the Backbone. In addition, the optional property `passwordProtection.passwordIsPin` can be used to configure the UI of the App in case the password is a pin.

## On Success

- Returns the Token of the Device to onboard.

## On Failure

- The Device was already onboarded.
- In case of password protection of the Token, a `passwordProtection.password` that does not consist of 4 to 16 digits was specified, but the value of `passwordProtection.passwordIsPin` was nevertheless set to `true`.
