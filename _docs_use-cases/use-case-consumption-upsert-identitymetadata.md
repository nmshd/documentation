---
# Start automatic generation
permalink: use-case-consumption-upsert-identitymetadata
published: true
title: "Upsert IdentityMetadata"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIDM1
  - component: Runtime
  - layer: Consumption
  - facade: IdentityMetadataFacade
  - function: upsertIdentityMetadata
  - description: Insert or update IdentityMetadata of Identity
  - feature category: Identity handling
  - tech category: IdentityMetadata
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
  - api_route_regex: PUT /api/core/v1/IdentityMetadata
  - published: default
  - link: use-case-consumption-upsert-identitymetadata
require:
required_by:
api_route_regex: ^PUT /api/core/v1/IdentityMetadata$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

[IdentityMetadata]({% link _docs_integrate/data-model-overview.md %}#identitymetadata) is used to store arbitrary auxiliary metadata related to an [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) within the Connector.
This use case creates or updates an IdentityMetadata that relates to the Identity whose `address` is specified within the `reference` property of the IdentityMetadata.
IdentityMetadata may only be created or updated for a `peer` of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) or the own Identity, or in other words, sufficiently familiar Identities.
If there is no IdentityMetadata for a given `reference` and `key` combination, a new IdentityMetadata will be created.
Otherwise, the existing IdentityMetadata is updated inplace with the new `value` provided.
Therefore, there can be at most one IdentityMetadata per `reference` and `key` combination.
In particular, there can be at most one IdentityMetadata without a `key` for each Identity.

## Parameters

- `reference` is the `address` of the Identity about which metadata is to be created or updated.
- Optionally, a `key` can be specified as an additional identifier to store and distinguish multiple IdentityMetadata for the same Identity.
- `value` is the arbitrary metadata to be stored about the Identity. It must be compatible with the JSON data types `string`, `number`, `boolean`, `object`, `array` and `null`.

## On Success

- Returns the created or updated IdentityMetadata.

## On Failure

- The `reference` resolves neither to the `address` of a `peer` of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) nor the `address` of the own Identity.
