---
# Start automatic generation
permalink: use-case-transport-load-item-from-truncated-reference
published: true
title: "Load item from truncated reference"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RU9
  - component: Runtime
  - layer: Transport
  - facade: AccountFacade
  - function: loadItemFromTruncatedReference
  - description:
  - feature category: Share information over side-channel
  - tech category: Account
  - status: QUESTIONS
  - documentation status: DONE
  - comments: rather somewhere else?
  - actor: Identity
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
  - link: use-case-transport-load-item-from-truncated-reference
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case intends to load an entity by its `reference` received by peer. It is internally using the specific use cases of each entity:

- If the `reference` references a Token, fetches the Token just like [Load Token created by others](use-case-transport-load-token-created-by-others.md).
- If the `reference` references a RelationshipTemplate, fetches the RelationshipTemplate just like [Load RelationshipTemplate created by others](use-case-transport-load-relationshiptemplate-created-by-others.md).
- If the `reference` references a File, fetches the File just like [Get or load File](use-case-transport-get-or-load-file.md).
- If the `reference` references a DeviceOnboardingInformation, fetches the DeviceOnboardingInformation just like [Create Device Onboarding Token](use-case-transport-create-device-onboarding-token.md).
