---
# Start automatic generation
permalink: use-case-device-create-profile-with-new-identity
published: true
title: "Create Profile with new Identity"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARP1
  - component: AppRuntime
  - layer: Device
  - facade: AccountServices
  - function: createAccount
  - description: A Profile needs to be created in order to use the App. Without a Profile, a very limited set of features is available. In order to create a Profile, the App's privacy policy and possibly end-user license agreements needs to be accepted.
  - feature category: Multi-profile
  - tech category: Profiles
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: User
  - trigger:
  - precondition:
  - result: A Profile has been set up
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex:
  - published: default
  - link: use-case-device-create-profile-with-new-identity
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case triggers the creation of a new Identity by the App or Connector.

{{properties.description}}

{% include properties_list.html %}

This use-case triggers the creation of a new Identity by the App or Connector.
