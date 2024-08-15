---
# Start automatic generation
permalink: use-case-consumption-get-repositoryattributes
published: true
title: "Get RepositoryAttributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA22
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getRepositoryAttributes
  - description: Fetches all RepositoryAttributes
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
  - api_route_regex: GET /api/v2/Attributes/Own/Repository
  - published: default
  - link: use-case-consumption-get-repositoryattributes
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/Own/Repository$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to return all RepositoryAttributes.
RepositoryAttributes are own [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) with an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) as `content` that are classified by an undefined `shareInfo`.
In case of [Attribute succession]({% link _docs_integrate/update-attributes-by-succession.md %}), by default only the latest version will be returned.
The LocalAttributes can be specified using a complex query.

## Parameters

- `query` allows to specify the conditions for the returned LocalAttributes. In detail, the following keys may be used:
  - `createdAt` describes the time when the LocalAttribute was created.
  - The fields of `content` can be used to describe the queried IdentityAttribute.
- Optionally, `onlyLatestVersions` can be disabled, such that in case of [Attribute succession]({% link _docs_integrate/update-attributes-by-succession.md %}) all versions will be returned.

## On Success

- An array of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) will be returned. It contains all RepositoryAttributes that match the query.

## On Failure

- No LocalAttributes can be returned if the parameters are malformed.
