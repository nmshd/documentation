---
# Start automatic generation
permalink: use-case-device-get-the-number-of-requests-and-the-status-codes-that-were-returned-by-the-connector
published: true
title: "Get the number of requests and the status codes that were returned by the Connector"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: C02
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
  - api_route_regex: GET /Monitoring/Requests
  - published: default
  - link: use-case-device-get-the-number-of-requests-and-the-status-codes-that-were-returned-by-the-connector
require:
required_by:
api_route_regex: ^GET /Monitoring/Requests$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case retrieves the overall count of http-requests as `requestCount` sent by the Connector to the Backbone. The returned `requestCountByStatus` is a more detailed view on how many requests succeeded or failed.

{{properties.description}}

{% include properties_list.html %}

This use-case retrieves the overall count of http-requests as `requestCount` sent by the Connector to the Backbone. The returned `requestCountByStatus` is a more detailed view on how many requests succeeded or failed.
