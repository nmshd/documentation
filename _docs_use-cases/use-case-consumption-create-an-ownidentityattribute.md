---
# Start automatic generation
permalink: use-case-consumption-create-an-ownidentityattribute
redirect_from:
  - /use-case-consumption-create-a-repositoryattribute
published: true
title: "Create an OwnIdentityAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA1
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: createOwnIdentityAttribute
  - description:
  - feature category: Normalized Attributes
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments: We cannot create RelationshipAttributes with this UseCase
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: POST /api/core/v1/Attributes
  - published: default
  - link: use-case-consumption-create-an-ownidentityattribute
require:
required_by:
api_route_regex: ^POST /api/core/v1/Attributes$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to create a RepositoryAttribute, i.e. an unshared [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) based on a given [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute).

## Parameters

- The `content` for the LocalAttribute that ought to be created as IdentityAttribute without the `owner` property, since it is automatically set to the `address` of your [Identity]({% link _docs_integrate/data-model-overview.md %}#identity).

## On Success

- A LocalAttribute is created according to the parameters and returned with an undefined `shareInfo`.

## On Failure

- The LocalAttribute cannot be created if the provided `content.value.@type` does not match one of the allowed [IdentityAttribute value types]({% link _docs_integrate/attribute-values.md %}#identity-attributes).
- The LocalAttribute cannot be created if invalid `content.tags` were specified. A tag is invalid if it is neither contained in the [AttributeTagCollection]({% link _docs_integrate/data-model-overview.md %}#attributetagcollection) for the `content.value.@type` and starts with the prefix `bkb:` nor starts with the custom tag prefix `x:` or `X:`, the prefix `urn:`, the prefix `language:` followed by a valid ISO 639 language code nor the prefix `mimetype:` followed by a valid MIME type matching the pattern `^[a-z-*]+/[a-z-*]+$`.
- The LocalAttribute cannot be created if there is already an existing RepositoryAttribute whose `succeededBy` property is undefined that has the exact same `content.value`.
