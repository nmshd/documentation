---
# Start automatic generation
permalink: use-case-device-get-support-information
published: true
title: "Get support Information"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: CR3
  - component: ConnectorRuntime
  - layer: Device
  - facade: ConnectorRuntime
  - function: getSupportInformation
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
  - api_route_regex: GET /Monitoring/Support
  - published: default
  - link: use-case-device-get-support-information
require:
required_by:
api_route_regex: ^GET /Monitoring/Support$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves support information of the Connector, which can be used to receive support by the community / developers.

It contains the Connector's version information, its health, its configuration parameters and its Identity information (address and public key). Although, secrets out of the configuration are blanked out, you should take care to whom this information is shared.
