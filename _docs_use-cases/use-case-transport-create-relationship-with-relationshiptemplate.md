---
# Start automatic generation
permalink: use-case-transport-create-relationship-with-relationshiptemplate
published: true
title: "Create Relationship with RelationshipTemplate"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RR1
  - component: Runtime
  - layer: Transport
  - facade: RelationshipsFacade
  - function: createRelationship
  - description: Creates a `Relationship` to the creator of a given relationshipTemplateId. The `RelationshipTemplate` of the given `relationshipTemplateId` must come from another identity and must be loaded by `POST /RelationshipTemplates/Peer` first.
  - feature category: Mutual peer-to-peer relationships
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

This use case intends to create a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) based on a received [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).

## Parameters

- `templateId` references the RelationshipTemplate that was received from a party.
- `content` can be used as a response with arbitrary data to the peer. This response is usually related to the data received by the RelationshipTemplate, e.g. the RelationshipTemplate contains [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and the content here contains the respective [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request.

## On Success

- Creates and returns the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).

## On Failure

- The `templateId` does not resolve to a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).
