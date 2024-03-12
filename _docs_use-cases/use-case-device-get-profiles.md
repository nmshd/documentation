---
# Start automatic generation
permalink: use-case-device-get-profiles
published: true
title: "Get Profiles"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARP2
  - component: AppRuntime
  - layer: Device
  - facade: AccountServices
  - function: getAccounts
  - description: The User needs to get all Profiles on the Device and their metadata.
  - feature category: Multi-profile
  - tech category: Profiles
  - status: QUESTIONS
  - documentation status: DONE
  - comments: No Queries?
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
  - link: use-case-device-get-profiles
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case retrieves all LocalAccounts available on this Device.

## Parameters

---

## On Success

- A list of LocalAccounts.
