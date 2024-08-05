---
# Start automatic generation
permalink: use-case-consumption-query-attributes
published: true
title: "Query Attributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA2
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getAttributes
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
  - api_route_regex: GET /api/v2/Attributes
  - published: default
  - link: use-case-consumption-query-attributes
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to query [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute). The LocalAttributes can be specified using a complex query.

## Parameters

- `query` allows to specify the conditions for the returned LocalAttributes. In detail, the following keys may be used:
  - `createdAt` describes the time when the LocalAttribute was created.
  - `parentId` can be used to find the child Attributes of a [complex IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#complex-identityattributes).
  - The fields of `content` can be used to describe the queried Attribute (either an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute)
    or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute)).
  - `succeeds` and `succeededBy` give information about the [succession state]({% link _docs_integrate/update-attributes-by-succession.md %}) of the LocalAttribute.
  - The fields of the `shareInfo` describe if the LocalAttribute is shared with a peer and specify its [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo).
  - The fields of the `deletionInfo` describe the [LocalAttributeDeletionInfo]({% link _docs_integrate/data-model-overview.md %}#localattributedeletioninfo) of a shared LocalAttribute.
- If `onlyValid` is set to `true`, LocalAttributes that exceed their validity frame defined by `validFrom` and `validTo` will not be returned.
- If `hideTechnical` is set to `true`, RelationshipAttributes with `isTechnical` `true` will not be returned.

## On Success

- Returns a list of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that match the parameters.

## On Failure

- The parameters are malformed.
