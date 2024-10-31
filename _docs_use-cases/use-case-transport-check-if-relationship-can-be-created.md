---
# Start automatic generation
permalink: use-case-transport-check-if-relationship-can-be-created
published: true
title: "Check if Relationship can be created"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR16
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: canCreateRelationship
  - description: Checks if a Relationship with the given `templateId` and `creationContent` can be created.
  - feature category: Mutual peer-to-peer Relationships
  - tech category: Relationships
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: PUT /api/v2/Relationships/CanCreate
  - published: default
  - link: use-case-transport-check-if-relationship-can-be-created
require:
required_by:
api_route_regex: ^PUT /api/v2/Relationships/CanCreate$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case checks whether a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) can be created based on a received [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) and a provided `creationContent`.
The Relationship would be established with the RelationshipTemplate's creator.
If a Relationship can be created to the RelationshipTemplate's creator, this can be achieved by executing the [Create Relationship with RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) use case.
In the case that the [Request Module]({% link _docs_explore/61-runtime.md %}#request-module) is enabled and a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) has been specified as the `content` of the RelationshipTemplate, the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case can be utilized to [initiate a Relationship]({% link _docs_integrate/establish-relationships.md %}#relationshiptemplate-with-relationshiptemplatecontent).

## Parameters

- `templateId` references the RelationshipTemplate received from its creator.
- `creationContent` is a provided [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent) or an [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent) depending on whether the [RelationshipTemplate's]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) `content` is a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) or an [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent) and would be used to create the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).

## On Success

- Returns a CanCreateRelationshipResponse that indicates if a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) can be created with the given parameters.
- If the `isSuccess` property of the CanCreateRelationshipResponse has the value `true`, a Relationship can currently be created to the creator of the RelationshipTemplate. This would then initially have `"Pending"` as `status` until the creator of the RelationshipTemplate [accepts the Relationship]({% link _docs_use-cases/use-case-transport-accept-relationship.md %}).
- If the `isSuccess` property of the CanCreateRelationshipResponse has the value `false`, no Relationship can currently be created to the creator of the RelationshipTemplate. This can have various causes, for example:

  -- The `templateId` does not resolve to a RelationshipTemplate or the associated RelationshipTemplate is malformed.

  -- The provided `creationContent` is not a RelationshipCreationContent or an ArbitraryRelationshipCreationContent.

## On Failure

- The parameters are malformed.
