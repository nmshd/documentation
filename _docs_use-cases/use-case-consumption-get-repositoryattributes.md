---
# Start automatic generation
permalink: use-case-consumption-get-repositoryattributes
published: true
title: "Get RepositoryAttributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA22
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getRepositoryAttributes
  - description: Fetches all RepositoryAttributes
  - feature category: Normalized attributes
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority:
  - complexity:
  - size:
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/v2/Own/Repository
  - published:
  - link: use-case-consumption-get-repositoryattributes
require:
required_by:
api_route_regex: ^GET /api/v2/Own/Repository$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to return all RepositoryAttributes, i.e. [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) you are the `owner` of and whose `shareInfo` is undefined.
In case of Attribute succession, by default only the latest version will be returned.
The LocalAttributes can be specified using a complex query.

## Parameters

- Optionally, `onlyLatestVersions` can be disabled, such that in case of Attribute succession all versions will be returned.
- Furthermore, a `query` may be specified, describing the requested LocalAttributes in detail.

## On Success

- An array of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) will be returned. It contains all own RepositoryAttributes that match the query.

## On Failure

- No Attributes can be returned, if the parameters are malformed.
