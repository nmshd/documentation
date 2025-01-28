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

This use case intends to load an entity by its `reference` received by a peer. Internally, it is using the specific use cases of each entity:

- If the `reference` refers to a [Token]({% link _docs_integrate/data-model-overview.md %}#token), it fetches the Token just like the [Load Token created by others]({% link _docs_use-cases/use-case-transport-load-token-created-by-others.md %}) use case. For example, if the `content` of the Token is a TokenContentDeviceSharedSecret, a DeviceOnboardingInfo is returned after the successful execution of the use case. A TokenContentDeviceSharedSecret is created by the [Create Device Onboarding Token]({% link _docs_use-cases/use-case-transport-create-device-onboarding-token.md %}) use case.
- If the `reference` refers to a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate), it fetches the RelationshipTemplate just like the [Load RelationshipTemplate created by others]({% link _docs_use-cases/use-case-transport-load-relationshiptemplate-created-by-others.md %}) use case.
- If the `reference` refers to a [File]({% link _docs_integrate/data-model-overview.md %}#file), it fetches the File just like the [Load File]({% link _docs_use-cases/use-case-transport-load-file.md %}) use case.
