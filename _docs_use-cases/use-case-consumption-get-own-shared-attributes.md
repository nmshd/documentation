---
# Start automatic generation
permalink: use-case-consumption-get-own-shared-attributes
redirect_from:
  - /use-case-consumption-get-attributes-shared-to-peer
published: true
title: "Get own shared Attributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA4
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getOwnSharedAttributes
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
  - api_route_regex: GET /api/v2/Attributes/Own/Shared/Identity
  - published: default
  - link: use-case-consumption-get-own-shared-attributes
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/Own/Shared/Identity$
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
  - The fields of the `shareInfo` describe if the LocalAttribute is shared with a peer and specify its [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo).
  - The fields of the `deletionInfo` describe the [LocalAttributeDeletionInfo]({% link _docs_integrate/data-model-overview.md %}#localattributedeletioninfo) of a shared LocalAttribute.
- If `onlyValid` is set to `true`, LocalAttributes that exceed their validity frame defined by `validFrom` and `validTo` will not be returned.
- If `hideTechnical` is set to `true`, RelationshipAttributes with `isTechnical` `true` will not be returned.
- Optionally, `onlyLatestVersions` can be disabled, such that in case of [Attribute succession]({% link _docs_integrate/update-attributes-by-succession.md %}) all versions will be returned.

## On Success

- Returns a list of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) shared to the peer that matches the query.

## On Failure

- The parameters are malformed.
