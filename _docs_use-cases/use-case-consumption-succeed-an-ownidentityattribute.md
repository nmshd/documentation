---
# Start automatic generation
permalink: use-case-consumption-succeed-an-ownidentityattribute
redirect_from:
  - /use-case-consumption-succeed-a-repositoryattribute
published: true
title: "Succeed an OwnIdentityAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA21
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: succeedOwnIdentityAttribute
  - description:
  - feature category: Cross-Identity Attribute sharing
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: HIGH
  - complexity: MEDIUM
  - size: M
  - created_at:
  - changed_at:
  - api_route_regex: POST /api/core/v1/Attributes/{predecessorId}/Succeed
  - published: default
  - link: use-case-consumption-succeed-an-ownidentityattribute
require:
required_by:
api_route_regex: ^POST /api/core/v1/Attributes/{predecessorId}/Succeed$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

If the `content.value` of an [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) changes, this can be replicated in enmeshed with this use case.
It allows you to [update the `content`]({% link _docs_integrate/update-attributes-by-succession.md %}) and keeps a coherent history of all versions by establishing a doubly linked list, using the [OwnIdentityAttribute's]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) parameters `succeeds` and `succeededBy`.
Hence, every OwnIdentityAttribute may have exactly one predecessor and one successor.
In case you shared the preceeding version of an OwnIdentityAttribute, the corresponding successor will only be shared if you decide to [notify the peer]({% link _docs_use-cases/use-case-consumption-notify-peer-about-ownidentityattribute-succession.md %}) about the succession.

## Parameters

- `predecessorId` describes the `id` of the OwnIdentityAttribute you want to succeed.
- The `successorContent` according to the parameters of an IdentityAttribute as described in the [data model]({% link _docs_integrate/data-model-overview.md %}#identityattribute), except for the `owner`, which is automatically set to the `address` of your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity).

## On Success

- The response returns a `predecessor` and a `successor` OwnIdentityAttribute.
- The `predecessor` is an updated version of the OwnIdentityAttribute belonging to `predecessorId`, having the `succeededBy` field set to the `id` of the `successor`.
- The `successor` is a new OwnIdentityAttribute with the updated `successorContent`.
  Its `succeeds` property links to the `predecessor`.

## On Failure

- The response cannot be created if the `predecessorId` doesn't belong to an OwnIdentityAttribute.
- The response cannot be created if the OwnIdentityAttribute already has a successor.
- The response cannot be created if the `successorContent` contains invalid changes, e.g. of the [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) `value.@type`.
- The response cannot be created if the parameters are malformed.
