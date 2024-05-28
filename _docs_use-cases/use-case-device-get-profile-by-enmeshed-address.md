---
# Start automatic generation
permalink: use-case-device-get-profile-by-enmeshed-address
published: true
title: "Get Profile by enmeshed Address"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARP4
  - component: AppRuntime
  - layer: Device
  - facade: AccountServices
  - function: getProfileByAddress
  - description:
  - feature category: Multi-profile
  - tech category: Profiles
  - status: DONE
  - documentation status: DONE
  - comments:
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
  - link: use-case-device-get-profile-by-enmeshed-address
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves the LocalAccount with the corresponding enmeshed Address.

## Parameters

- The `address` of the corresponding Identity of the LocalAccount.

## On Success

- Returns the LocalAccount of the Identity.

## On Failure

- There is no such LocalAccount.
