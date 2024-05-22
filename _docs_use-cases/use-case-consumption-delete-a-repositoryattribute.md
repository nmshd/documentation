---
# Start automatic generation
permalink: use-case-consumption-delete-a-repositoryattribute
published: true
title: "Delete a RepositoryAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA7
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: deleteRepositoryAttribute
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
  - api_route_regex: DELETE /api/v2/Attributes/{id}
  - published: default
  - link: use-case-consumption-delete-a-repositoryattribute
require:
required_by:
api_route_regex: ^DELETE /api/v2/Attributes/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows you to delete a RepositoryAttribute, i.e. a [LocalAttribute]({%link _docs_integrate/data-model-overview.md %}#localattribute) that is owned by yourself and whose `shareInfo` property is undefined.

## Parameters

- The `attributeId` of the RepositoryAttribute you want to delete.

## On Success

- The RepositoryAttribute will be deleted.
- All predecessors of the RepositoryAttribute will be deleted.
- If the RepositoryAttribute was succeeded, the `succeeds` property of the successor will be set to undefined.
- If there are shared copies of the RepositoryAttribute or potential predecessors of it, the `shareInfo.sourceAttribute` of those own shared Attributes will be set to undefined.

## On Failure

- No Attribute can be deleted if you don't have a LocalAttribute with given `attributeId`.
- No Attribute can be deleted if the Attribute with given `attributeId` is not a RepositoryAttribute.
