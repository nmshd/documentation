---
# Start automatic generation
permalink: use-case-consumption-get-own-attributes-shared-with-peer
redirect_from:
  - /use-case-consumption-get-own-shared-attributes
published: true
title: "Get own Attributes shared with peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA10
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getOwnAttributesSharedWithPeer
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
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/core/v1/Attributes/Own/Shared/{peer}
  - published: default
  - link: use-case-consumption-get-own-attributes-shared-with-peer
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes/Own/Shared/{peer}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to retrieve Attributes that the current Identity shared to a peer as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute). The LocalAttributes can be specified using a complex query.

## Parameters

- `peer` is the `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that the LocalAttributes are shared with.
- `query` allows to specify the conditions for the returned LocalAttributes. In detail, the following keys may be used:
  - `createdAt` describes the time when the LocalAttribute was created.
  - The fields of `content` can be used to describe the queried Attribute (either an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute)
    or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute)).
  - The fields of the `deletionInfo` describe the [EmittedAttributeDeletionInfo]({% link _docs_integrate/data-model-overview.md %}#emittedattributedeletioninfo) of a shared LocalAttribute.
- If `hideTechnical` is set to `true`, RelationshipAttributes with `isTechnical` `true` will not be returned.
- Optionally, `onlyLatestVersions` can be disabled, such that in case of [Attribute succession]({% link _docs_integrate/update-attributes-by-succession.md %}) all versions will be returned.

## On Success

- Returns a list of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) shared to the peer that matches the query.

## On Failure

- The parameters are malformed.
