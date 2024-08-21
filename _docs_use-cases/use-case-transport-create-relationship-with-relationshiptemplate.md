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

This use case intends to create a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) based on a received [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate). The Relationship will be with the Template's creator.

## Parameters

- `templateId` references the RelationshipTemplate that was received from a party.
- `creationContent` is stored inside the Relationship. It's a [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent) if the received Template contained a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent), otherwise it is an [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent). It can be used by the Template's creator to decide whether to accept the Relationship.

## On Success

- Creates and returns the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).

## On Failure

- The `templateId` does not resolve to a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
