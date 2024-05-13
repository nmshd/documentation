---
# Start automatic generation
permalink: use-case-device-get-the-connector-health-status
published: true
title: "Get the Connector health status"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: CR2
  - component: ConnectorRuntime
  - layer: Device
  - facade: ConnectorRuntime
  - function: getHealth
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
  - api_route_regex: GET /health
  - published: default
  - link: use-case-device-get-the-connector-health-status
require:
required_by:
api_route_regex: ^GET /health$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves the service health information of the Connector.
