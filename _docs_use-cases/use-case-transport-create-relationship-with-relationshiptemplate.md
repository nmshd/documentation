---
# Start automatic generation
permalink: use-case-transport-create-relationship-with-relationshiptemplate
published: true
title: "Create Relationship with RelationshipTemplate"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR1
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: createRelationship
  - description: Creates a `Relationship` to the creator of a given relationshipTemplateId. The `RelationshipTemplate` of the given `relationshipTemplateId` must come from another Identity and must be loaded by `POST /RelationshipTemplates/Peer` first.
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
  - api_route_regex: POST /api/core/v1/Relationships
  - published: default
  - link: use-case-transport-create-relationship-with-relationshiptemplate
require:
required_by:
api_route_regex: ^POST /api/core/v1/Relationships$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case intends to create a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) based on a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate), which was previously received.
The Relationship will be established with the RelationshipTemplate's creator.
This use case must always be applied if the `content` of the RelationshipTemplate is an [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent).
However, if it is a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent), it usually does not have to be executed manually anymore.
Instead, the [Request Module]({% link _docs_explore/61-runtime.md %}#request-module), which is enabled by default, takes care of this automatically.
For information on how to [establish a Relationship]({% link _docs_integrate/establish-relationships.md %}) based on a [RelationshipTemplate with RelationshipTemplateContent]({% link _docs_integrate/establish-relationships.md %}#relationshiptemplate-with-relationshiptemplatecontent) and an enabled Request Module, refer to the corresponding scenario documentation.
To check whether a Relationship can be created without actually creating it, the [Check if Relationship can be created]({% link _docs_use-cases/use-case-transport-check-if-relationship-can-be-created.md %}) use case can be executed.

## Parameters

- `templateId` references the RelationshipTemplate that was received from its creator.
- `creationContent` is an [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent) if the RelationshipTemplate's `content` is an ArbitraryRelationshipTemplateContent and the use case is applied manually. It is a [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent) if the RelationshipTemplate's `content` is a RelationshipTemplateContent and the [Request Module]({% link _docs_explore/61-runtime.md %}#request-module) automatically takes care of the execution of the use case. It will be stored inside the Relationship and can be analyzed by the creator of the RelationshipTemplate to decide whether to [accept the Relationship]({% link _docs_use-cases/use-case-transport-accept-relationship.md %}).

## On Success

- Creates and returns the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).

## On Failure

- The `templateId` does not resolve to a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
- The [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) has already expired, which means that the timestamp specified in its `expiresAt` property has been exceeded.
- A [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"`, `"Active"`, `"Terminated"` or `"DeletionProposed"` as `status` already exists to the creator of the RelationshipTemplate. In particular, the initiation of a new Relationship is prevented if the potential initiator has already [decomposed the former Relationship]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship) to the RelationshipTemplate's creator, but the creator of the RelationshipTemplate has not yet decomposed it and still has the former Relationship with `"DeletionProposed"` as `status`.
- The [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) of the creator of the RelationshipTemplate is in deletion or has already been deleted.
- The `creationContent` is not a [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent), although the RelationshipTemplate's `content` is a RelationshipTemplateContent, or it is not an [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent), although the RelationshipTemplate's `content` is an ArbitraryRelationshipTemplateContent.
- The RelationshipTemplate's `content` is a RelationshipTemplateContent, but there is no associated accepted incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request).
- The RelationshipTemplate's `content` is a RelationshipTemplateContent and there is an associated accepted incoming [Request]({% link _docs_integrate/data-model-overview.md %}#request), but its [Response]({% link _docs_integrate/data-model-overview.md %}#response) was not provided as the `response` of the specified [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent).
