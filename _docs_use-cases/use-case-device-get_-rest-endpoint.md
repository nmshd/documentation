---
# Start automatic generation
permalink: use-case-device-get_-rest-endpoint
published: true
title: "GET REST Endpoint"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: C05
  - component: Connector
  - layer: Device
  - facade: Connector
  - function:
  - description:
  - feature category:
  - tech category: Integration
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
  - api_route_regex:
  - published: default
  - link: use-case-device-get_-rest-endpoint
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is a Connector-specific use-case which is triggered by an http-request. Although it is a very generic use-case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use-case broadly describes REST endpoints using the `GET` HTTP verb that are exposed by the Connector.

Click [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to learn more about HTTP request methods.
