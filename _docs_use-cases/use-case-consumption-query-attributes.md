---
# Start automatic generation
permalink: use-case-consumption-query-attributes
published: true
title: "Query Attributes"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA2
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getAttributes
  - description:
  - feature category: Normalized attributes
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

- The `createdAt` parameter describes the time when the LocalAttribute was created.
- The `content` describes the searched Attribute (either a [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute)
  or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).
- `succeeds` and `succeededBy` give information about succession state of the LocalAttribute.
- The `shareInfo` describes if the LocalAttribute was received or sent, to whom and when. [Read more]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo).

## On Success

- Returns a list of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that match the parameters.

## On Failure

- The parameters are malformed.
