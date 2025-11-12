---
# Start automatic generation
permalink: use-case-consumption-get-ownidentityattributes
redirect_from:
  - /use-case-consumption-get-repositoryattributes
published: true
title: "Get OwnIdentityAttributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA9
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getOwnIdentityAttributes
  - description: Fetches all OwnIdentityAttributes
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
  - api_route_regex: GET /api/core/v1/Attributes/Own/Identity
  - published: default
  - link: use-case-consumption-get-ownidentityattributes
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes/Own/Identity$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to return all [OwnIdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute).
In case of [Attribute succession]({% link _docs_integrate/update-attributes-by-succession.md %}), by default only the latest version will be returned.
The OwnIdentityAttributes can be specified using a complex query.

## Parameters

- `query` allows to specify the conditions for the returned OwnIdentityAttributes. In detail, the following keys may be used:
  - `createdAt` describes the time when the OwnIdentityAttributes was created.
  - The fields `content.value.@type` and `content.tags` can be used to describe the queried [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute).
  - `isDefault` states whether an OwnIdentityAttribute is the default for its value type.
  - `wasViewedAt` describes the time when the OwnIdentityAttributes was firstly viewed.
- Optionally, `onlyLatestVersions` can be disabled, such that in case of [Attribute succession]({% link _docs_integrate/update-attributes-by-succession.md %}) all versions will be returned.

## On Success

- An array of [OwnIdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) will be returned. It contains all OwnIdentityAttributes that match the query.

## On Failure

- No OwnIdentityAttributes can be returned if the parameters are malformed.
