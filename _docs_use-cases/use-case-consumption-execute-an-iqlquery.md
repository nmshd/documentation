---
# Start automatic generation
permalink: use-case-consumption-execute-an-iqlquery
published: true
title: "Execute an IQLQuery"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA19
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: executeIQLQuery
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
  - api_route_regex: POST /api/core/v1/Attributes/ExecuteIQLQuery
  - published: default
  - link: use-case-consumption-execute-an-iqlquery
require:
required_by:
api_route_regex: ^POST /api/core/v1/Attributes/ExecuteIQLQuery$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case executes an IQLQuery which returns a list of matching [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute).

## Parameters

- The `query` field of the IQLQuery as described in [IQLQuery]({% link _docs_integrate/data-model-overview.md %}#iqlquery).

## On Success

- Returns the IdentityAttributes as [OwnIdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) that match the given query.

## On Failure

- The query was malformed.
