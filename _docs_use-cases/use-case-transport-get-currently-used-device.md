---
# Start automatic generation
permalink: use-case-transport-get-currently-used-device
published: true
title: "Get currently used Device"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RU2
  - component: Runtime
  - layer: Transport
  - facade: AccountFacade
  - function: getDeviceInfo
  - description:
  - feature category: Multi-device
  - tech category: Account
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
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
  - link: use-case-transport-get-currently-used-device
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves information about the currently used Device.
