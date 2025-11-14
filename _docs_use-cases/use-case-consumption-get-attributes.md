---
# Start automatic generation
permalink: use-case-consumption-get-attributes
redirect_from:
  - /use-case-consumption-query-attributes
published: true
title: "Get Attributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA8
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
  - api_route_regex: GET /api/core/v1/Attributes
  - published: default
  - link: use-case-consumption-get-attributes
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to query [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute). The LocalAttributes can be specified using a complex query.

## Parameters

- `query` allows to specify the conditions for the returned LocalAttributes. In detail, the following keys may be used:
  - `@type` describes the LocalAttribute subtype.
  - `createdAt` describes the time when the LocalAttribute was created.
  - The fields of `content` can be used to describe the queried Attribute (either an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute)).
  - `succeeds` and `succeededBy` give information about the [succession state]({% link _docs_integrate/update-attributes-by-succession.md %}) of the LocalAttribute.
  - The fields of the `deletionInfo` describe the [EmittedAttributeDeletionInfo]({% link _docs_integrate/data-model-overview.md %}#emittedattributedeletioninfo) or [ReceivedAttributeDeletionInfo]({% link _docs_integrate/data-model-overview.md %}#receivedattributedeletioninfo) of a shared or received LocalAttribute.
  - `wasViewedAt` describes the time when the LocalAttribute was firstly viewed.
  - `isDefault` states whether an [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) is the default for its value type.
  - `peer` is the `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that shared or received the LocalAttribute.
  - `sourceReference` describes the `id` of the [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) or [LocalNotification]({% link _docs_integrate/data-model-overview.md %}#localnotification) a LocalAttribute was sent with or received in.
  - `initialAttributePeer` is a [ThirdPartyRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattribute) property which describes the `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) with whom the peer has the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) in which context the source RelationshipAttribute exists.
- If `hideTechnical` is set to `true`, RelationshipAttributes with `isTechnical` `true` will not be returned.

## On Success

- Returns a list of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that match the parameters.

## On Failure

- The parameters are malformed.
