---
# Start automatic generation
permalink: use-case-consumption-delete-identitymetadata
published: true
title: "Delete IdentityMetadata"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RIDM3
  - component: Runtime
  - layer: Consumption
  - facade: IdentityMetadataFacade
  - function: deleteIdentityMetadata
  - description: Delete existing IdentityMetadata of Identity
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
  - api_route_regex: DELETE /api/v2/IdentityMetadata
  - published: default
  - link: use-case-consumption-delete-identitymetadata
require:
required_by:
api_route_regex: ^DELETE /api/v2/IdentityMetadata$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

[IdentityMetadata]({% link _docs_integrate/data-model-overview.md %}#identitymetadata) is used to store arbitrary auxiliary metadata related to an [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) within the Connector.
This use case deletes the IdentityMetadata for a given `reference` or a given combination of `reference` and `key` if the IdentityMetadata is equipped with the additional `key` identifier.
As there is at most one IdentityMetadata per `reference` and `key` combination, the IdentityMetadata that can be deleted by this use case is uniquely determined.

## Parameters

- `reference` is the `address` of the Identity about which the IdentityMetadata is to be deleted.
- Optionally, `key` is the additional identifier of the IdentityMetadata to be deleted.

## On Success

- Deletes the IdentityMetadata for the specified combination of `reference` and `key`.

## On Failure

- There is no stored IdentityMetadata for the specified combination of `reference` and `key`.
