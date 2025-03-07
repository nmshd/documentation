---
# Start automatic generation
permalink: use-case-consumption-succeed-a-repositoryattribute
published: true
title: "Succeed a RepositoryAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA11
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: succeedRepositoryAttribute
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
  - api_route_regex: POST /api/v2/Attributes/{predecessorId}/Succeed
  - published: default
  - link: use-case-consumption-succeed-a-repositoryattribute
require:
required_by:
api_route_regex: ^POST /api/v2/Attributes/{predecessorId}/Succeed$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

If the `value` of a [RepositoryAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) changes, this can be replicated in enmeshed with this use case.
It allows you to [update the `content`]({% link _docs_integrate/update-attributes-by-succession.md %}) and keeps a coherent history of all versions by establishing a doubly linked list, using the [LocalAttribute's]({% link _docs_integrate/data-model-overview.md %}#localattribute) parameters `succeeds` and `succeededBy`.
Hence, every LocalAttribute may have exactly one predecessor and one successor.
In case you shared the preceeding version of the RepositoryAttribute, the corresponding own shared IdentityAttribute copy will only be succeeded, if you decide to [notify the peer]({% link _docs_use-cases/use-case-consumption-notify-peer-about-repositoryattribute-succession.md %}) of the respective shared IdentityAttribute about the succession.

## Parameters

- `predecessorId`: the `id` of the RepositoryAttribute you want to succeed
- The `successorContent` according to the parameters of an IdentityAttribute as described in the [data model]({% link _docs_integrate/data-model-overview.md %}#identityattribute), except for the `owner`, which is automatically set to the `address` of your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity).

## On Success

- The response returns a `predecessor` and a `successor` LocalAttribute.
- The `predecessor` is an updated version of the RepositoryAttribute belonging to `predecessorId`, having the `succeededBy` field set to the `successor`'s `id`.
- The `successor` is a new RepositoryAttribute with the updated `successorContent`. Its `succeeds` property links to the `predecessor`.

## On Failure

- The response cannot be created, if the `predecessorId` belongs to a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).
- The response cannot be created, if the `predecessorId` belongs to an IdentityAttribute with a `shareInfo`.
- The response cannot be created, if the LocalAttribute already has a successor.
- The response cannot be created, if the `successorContent` contains invalid changes, e.g. of the value type.
- The response cannot be created, if the parameters are malformed.
