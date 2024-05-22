---
# Start automatic generation
permalink: use-case-consumption-execute-an-identityattributequery
published: true
title: "Execute an IdentityAttributeQuery"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA8
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: executeIdentityAttributeQuery
  - description:
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
  - api_route_regex: POST /api/v2/Attributes/ExecuteIdentityAttributeQuery
  - published: default
  - link: use-case-consumption-execute-an-identityattributequery
require:
required_by:
api_route_regex: ^POST /api/v2/Attributes/ExecuteIdentityAttributeQuery$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to execute an incoming
[IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery) (e.g. of a ReadAttributeRequestItem) which returns a list of matching [Identity Attributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute).

## Parameters

- The `query` for the IdentityAttributes as described in the [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery).

## On Success

- Returns the `IdentityAttributes` as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that match the given query.

## On Failure

- The query was malformed.
