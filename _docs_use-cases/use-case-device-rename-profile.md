---
# Start automatic generation
permalink: use-case-device-rename-profile
published: true
title: "Rename Profile"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARS7
  - component: AppRuntime
  - layer: Device
  - facade: AccountServices
  - function: renameAccount
  - description: Profiles can be renamed by the User to an arbitrary name in order to distinguish them.
  - feature category: Multi-profile
  - tech category: Profile
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: User
  - trigger:
  - precondition:
  - result: The Profile has been renamed
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex:
  - published: default
  - link: use-case-device-rename-profile
require:
required_by:
# End automatic generation
---

{% include use-cases/use-case-device-rename-profile.md %}
