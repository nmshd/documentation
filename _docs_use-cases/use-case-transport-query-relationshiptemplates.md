---
# Start automatic generation
permalink: use-case-transport-query-relationshiptemplates
redirect_from:
  - use-case-transport-query-relationship-templates
published: true
title: "Query RelationshipTemplates"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RT3
  - component: Runtime
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: getRelationshipTemplates
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
  - api_route_regex: GET /api/core/v1/RelationshipTemplates
  - published: default
  - link: use-case-transport-query-relationshiptemplates
require:
required_by:
api_route_regex: ^GET /api/core/v1/RelationshipTemplates$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case queries [RelationshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) of the Identity.

## Parameters

All parameters are optional. If no parameter is given, all RelationshipTemplates are returned.

- `isOwn` indicates if the RelationshipTemplate was created by the current Identity.
- `createdAt` is the ISODateTime the RelationshipTemplate was created at.
- `expiresAt` is the ISODateTime the RelationshipTemplate expires.
- `createdBy` is the enmeshed `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that created the RelationshipTemplate.
- `createdByDevice` is the `id` of the Device that created the RelationshipTemplate.
- `maxNumberOfAllocations` is the number of times the RelationshipTemplate can be accessed by different Identities to initiate a Relationship. The Backbone returns an error if one accesses a RelationshipTemplate with no allocations left. Accessing the same RelationshipTemplate with the same Identity multiple times doesn't affect the number of allocations. The allocation counts, even if the Identity does not accept the RelationshipTemplate by discarding it.
- `forIdentity` is the enmeshed `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) for which the RelationshipTemplate is intended.
- `passwordProtection` is an object for [PasswordProtection]({% link _docs_integrate/data-model-overview.md %}#passwordprotection) of a RelationshipTemplate.

## On Success

- Returns all [RelationshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) that match the `query`.

## On Failure

- The parameters are malformed.
