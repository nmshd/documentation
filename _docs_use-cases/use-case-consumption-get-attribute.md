---
# Start automatic generation
permalink: use-case-consumption-get-attribute
published: true
title: "Get Attribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA7
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getAttribute
  - description: Fetches the Attribute with the given `id`.
  - feature category: Cross-Identity Attribute sharing
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger: REST API
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/core/v1/Attributes/{id}
  - published: default
  - link: use-case-consumption-get-attribute
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes/{id}$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to retrieve a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) by its id.

## Parameters

- The `id` of the LocalAttribute.

## On Success

- Returns the [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) corresponding to the `id`.

## On Failure

- The LocalAttribute does not exist.
