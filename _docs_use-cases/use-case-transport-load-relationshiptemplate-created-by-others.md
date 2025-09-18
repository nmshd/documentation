---
# Start automatic generation
permalink: use-case-transport-load-relationshiptemplate-created-by-others
redirect_from:
  - use-case-transport-load-relationship-template-created-by-others
published: true
title: "Load RelationshipTemplate created by others"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RT2
  - component: Runtime
  - layer: Transport
  - facade: RelationshipTemplatesFacade
  - function: loadPeerRelationshipTemplate
  - description: Loads a `RelationshipTemplate` created by others. This is a prerequisite for using the RelationshipTemplate while creating a new `Relationship`.
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
  - api_route_regex: POST /api/core/v1/RelationshipTemplates/Peer
  - published: default
  - link: use-case-transport-load-relationshiptemplate-created-by-others
require:
required_by:
api_route_regex: ^POST /api/core/v1/RelationshipTemplates/Peer$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case loads a peer's [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) from the Backbone by a given reference to the RelationshipTemplate.

## Parameters

There are two different options to use this use case, depending on the actual information received by the peer:

- by knowing a `reference.truncated` of the peer's RelationshipTemplate
  - `reference` as string
- by knowing a `reference.truncated` of the peer's [Token]({% link _docs_integrate/data-model-overview.md %}#token), which references to the peer's RelationshipTemplate
  - `reference` as string

If the RelationshipTemplate or the Token, if there is one, is protected by a password via the `passwordProtection` property, it must be entered with the `password` parameter of this use case in order to be authorized to load the RelationshipTemplate.

## On Success

- Returns the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate).

## On Failure

- The parameters are malformed.
- The RelationshipTemplate does not exist.
- The RelationshipTemplate is expired.
- The `maxNumberOfAllocations` of the RelationshipTemplate are depleted.
- The RelationshipTemplate is personalized for a different [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) via the property `forIdentity` of the RelationshipTemplate.
- No `password` or an incorrect `password` was entered in case of a password protected RelationshipTemplate or a password protected Token, if there is one.
