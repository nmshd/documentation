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
  - api_route_regex: POST /api/v2/Relationships
  - published: default
  - link: use-case-transport-create-relationship-with-relationshiptemplate
require:
required_by:
api_route_regex: ^POST /api/v2/Relationships$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case intends to create a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) based on a received [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) where its `content` is an [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent). The Relationship will be established with the RelationshipTemplate's creator. For information on how to [establish a Relationship]({% link _docs_integrate/establish-relationships.md %}) based on a [RelationshipTemplate with RelationshipTemplateContent]({% link _docs_integrate/establish-relationships.md %}#relationshiptemplate-with-relationshiptemplatecontent), refer to the corresponding scenario documentation.

## Parameters

- `templateId` references the RelationshipTemplate that was received from a party.
- `creationContent` is an [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent) and will be stored inside the Relationship. It can be analyzed by the RelationshipTemplate's creator to decide whether to accept the Relationship.

## On Success

- Creates and returns the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).

## On Failure

- The `templateId` does not resolve to a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
