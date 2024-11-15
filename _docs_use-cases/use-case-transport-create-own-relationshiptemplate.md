---
# Start automatic generation
permalink: use-case-transport-create-own-relationshiptemplate
published: true
title: "Create own RelationshipTemplate"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RT1
  - component: Runtime
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: createOwnRelationshipTemplate
  - description:
  - feature category: Consent required before any data is shared
  - tech category: RelationshipTemplates
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
  - api_route_regex: POST /api/v2/RelationshipTemplates/Own
  - published: default
  - link: use-case-transport-create-own-relationshiptemplate
require:
required_by:
api_route_regex: ^POST /api/v2/RelationshipTemplates/Own$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Creates a RelationshipTemplate with the given parameters and submits it to the Backbone for other [Identities]({% link _docs_integrate/data-model-overview.md %}#identity) to use.

A [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) can be used by any party to either initiate a Relationship with the current Identity or retrieve a Request from an existing Relationship by a side-channel.

## Parameters

- `expiresAt` is the ISODateTime the RelationshipTemplate expires at. This should be set as small as possible and cannot be in the past.
- `content` describes the structure of the RelationshipTemplate. If an enmeshed App user shall receive this RelationshipTemplate, a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) is required as structure, otherwise an [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent) containing any data can be used.
- `maxNumberOfAllocations` is the number of times the RelationshipTemplate can be accessed by different Identities to initiate a Relationship. The Backbone returns an error, if one accesses a RelationshipTemplate with no allocations left. Accessing the same RelationshipTemplate with the same Identity multiple times doesn't affect the number of allocations. The allocation counts, even if the Identity does not accept the RelationshipTemplate by discarding it.
- `forIdentity` can be set to an enmeshed address. If set, only the Identity with that `address` can access the RelationshipTemplate.

## On Success

- Returns the created [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) on the Backbone.

## On Failure

- The `content` is malformed.
- `expiresAt` lies in the past
