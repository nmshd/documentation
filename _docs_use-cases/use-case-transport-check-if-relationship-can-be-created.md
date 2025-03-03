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

This use case checks whether a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) can be created based on a received [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to the RelationshipTemplate's creator without actually creating it.
It makes sense to promptly execute this use case in order to prevent the data required to [initiate a Relationship]({% link _docs_integrate/establish-relationships.md %}#initiate-a-relationship) from being provided when this is currently not technically possible anyway.
If a Relationship can be created, this can be achieved by executing the [Create Relationship with RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) use case.
If the [Request Module]({% link _docs_explore/61-runtime.md %}#request-module) is enabled and a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) has been specified as the `content` of the RelationshipTemplate, the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case should be utilized to [initiate a Relationship]({% link _docs_integrate/establish-relationships.md %}#relationshiptemplate-with-relationshiptemplatecontent).

## Parameters

- `templateId` references the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) received from its creator.
- Optionally, `creationContent` can be provided. It is a [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent) or an [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent) depending on whether the RelationshipTemplate's `content` is a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) or an [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent). Specify this parameter if additional validations are wanted for the `creationContent` that would be used to create the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).

## On Success

- Returns a CanCreateRelationshipResponse that indicates if a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) can be created with the given parameters.
- If the `isSuccess` property of the CanCreateRelationshipResponse has the value `true`, a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) can currently be created to the creator of the RelationshipTemplate. This would then initially have `"Pending"` as `status` until the creator of the RelationshipTemplate [accepts the Relationship]({% link _docs_use-cases/use-case-transport-accept-relationship.md %}).
- If the `isSuccess` property of the CanCreateRelationshipResponse has the value `false`, no [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) can currently be created to the creator of the RelationshipTemplate. This can have various causes, for example:<br>
  -- The `templateId` does not resolve to a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) or the associated RelationshipTemplate was not cached correctly.<br>
  -- The [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) has already expired, which means that the timestamp specified in its `expiresAt` property has been exceeded.<br>
  -- A [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"`, `"Active"`, `"Terminated"` or `"DeletionProposed"` as `status` already exists to the creator of the RelationshipTemplate. In particular, the initiation of a new Relationship is prevented if the potential initiator has already [decomposed the former Relationship]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship) to the RelationshipTemplate's creator, but the creator of the RelationshipTemplate has not yet decomposed it and still has the former Relationship with `"DeletionProposed"` as `status`.<br>
  -- The [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) of the creator of the RelationshipTemplate is in deletion or has already been deleted.<br>
  -- The `creationContent`, if specified, is not a [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent), although the RelationshipTemplate's `content` is a RelationshipTemplateContent, or it is not an [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent), although the RelationshipTemplate's `content` is an ArbitraryRelationshipTemplateContent.<br>
  -- A RelationshipCreationContent was specified as `creationContent`, because the RelationshipTemplate's `content` is a RelationshipTemplateContent, but there is no associated accepted incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request).<br>
  -- A RelationshipCreationContent was specified as `creationContent`, because the RelationshipTemplate's `content` is a RelationshipTemplateContent, and there is an associated accepted incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request), but its [Response]({% link _docs_integrate/data-model-overview.md %}#response) was not provided as the `response` of the specified [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent).

## On Failure

- The parameters are malformed.
