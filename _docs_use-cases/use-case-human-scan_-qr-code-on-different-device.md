---
# Start automatic generation
permalink: use-case-human-scan_-qr-code-on-different-device
published: true
title: "Scan QR code (on different device)"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: A14
  - component: App
  - layer: Human
  - facade: Screen
  - function:
  - description: The user scans a QR code from a different device by the app.
  - feature category:
  - tech category: User Action
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: User
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
  - link: use-case-human-scan_-qr-code-on-different-device
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is an App-specific use case which is triggered by a manual user interaction. Although it is a very generic use case which one would normally not describe, we introduced it because we require it in our overarching scenarios.
{: .notice--info}

This use case describes the process of using the Device's camera to scan a QR code.
Typically, the QR code encodes a link starting with `nmshd://`.
