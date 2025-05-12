---
# Start automatic generation
permalink: use-case-consumption-check-if-repositoryattribute-can-be-created
published: true
title: "Check if RepositoryAttribute can be created"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA31
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: canCreateRepositoryAttribute
  - description:
  - feature category: Normalized Attributes
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: PUT /api/v2/Attributes/CanCreate
  - published: default
  - link: use-case-consumption-check-if-repositoryattribute-can-be-created
require:
required_by:
api_route_regex: ^PUT /api/v2/Attributes/CanCreate$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case checks whether a [RepositoryAttribute]({% link _docs_integrate/attribute-introduction.md %}#repositoryattributes), which is an unshared [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) whose `content` is an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute), can be created without actually creating it.
If a RepositoryAttribute can be created, this can be achieved by executing the [Create a RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-create-a-repositoryattribute.md %}) use case.

## Parameters

- The `content` is an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) without the `owner` property, since its value would automatically be set to the `address` of your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) during the potential [creation of the RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-create-a-repositoryattribute.md %}).
