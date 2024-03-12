---
# Start automatic generation
permalink: use-case-device-get-profile
published: true
title: "Get Profile"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARP3
  - component: AppRuntime
  - layer: Device
  - facade: AccountServices
  - function: getProfile
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
  - link: use-case-device-get-profile
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case retrieves one LocalAccount by its `id`.

## Parameters

- The `id` of the LocalAccount.

## On Success

- The LocalAccount corresponding to the `id`.

## On Failure

- There is no such account.

{{properties.description}}

{% include properties_list.html %}

This use-case retrieves one LocalAccount by its `id`.

## Parameters

- The `id` of the LocalAccount.

## On Success

- The LocalAccount corresponding to the `id`.

## On Failure

- There is no such account.
