---
# Start automatic generation
permalink: use-case-transport-create-identity-recovery-data
published: false
title: "Create Identity recovery data"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ARS6
  - component: AppRuntime
  - layer: Transport
  - facade:
  - function:
  - description: The User can (and should) create a local and offline backup of the selected Profile. The backup contains enough information to restore the complete Identity on a future Device and thus needs to be exported to the current Device in order to be shared, printed out or stored on a secure media. The backup contains very sensitive data and thus needs to be kept secret and securely stored. It should be explained to the User how the backup should be handled and that it only keeps private information about a single Profile.
  - feature category: Identity Hardening
  - tech category: Profile
  - status: IDEA
  - documentation status:
  - comments:
  - actor: User
  - trigger:
  - precondition: Profile has been selected (and has been logged into)
  - result: A backup has been created
  - priority: LOW
  - complexity: HIGH
  - size: L
  - created_at:
  - changed_at:
  - api_route_regex:
  - published:
  - link: use-case-transport-create-identity-recovery-data
require:
required_by:
# End automatic generation
---
