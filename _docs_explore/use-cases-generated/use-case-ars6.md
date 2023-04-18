---
permalink: /explore/use-case-ars6
published: true
title: "Create Identity recovery data"
type: use-case
properties:
  - id: ARS6
  - layer: Transport
  - facade:
  - function:
  - description: The User can (and should) create a local and offline backup of the selected Profile. The backup contains enough information to restore the complete Identity on a future Device and thus needs to be exported to the current Device in order to be shared, printed out or stored on a secure media. The backup contains very sensitive data and thus needs to be kept secret and securely stored. It should be explained to the User how the backup should be handled and that it only keeps private information about a single Profile.
  - feature category: Identity Hardening
  - tech category: Profile
  - status: OPEN
  - comments:
  - actor: User
  - component: AppRuntime
  - trigger:
  - precondition: Profile has been selected (and has been logged into)
  - result: A backup has been created
  - priority: LOW
  - complexity: HIGH
  - size: L
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link auf demo:
require:
required_by:
---

{% include properties_list.html %}
