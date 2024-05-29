---
# Start automatic generation
permalink: use-case-device-get-the-connector-version-information
published: true
title: "Get the Connector version information"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: C01
  - component: Connector
  - layer: Device
  - facade: Connector
  - function:
  - description:
  - feature category:
  - tech category: Monitoring
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Integrator
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /Monitoring/Version
  - published: default
  - link: use-case-device-get-the-connector-version-information
require:
required_by:
api_route_regex: ^GET /Monitoring/Version$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves the version information of the Connector, including the `build` number, underlying git `commit`, the Connector's semantic `version` and its release `date`.
