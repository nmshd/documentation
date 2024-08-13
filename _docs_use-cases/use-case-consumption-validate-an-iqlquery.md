---
# Start automatic generation
permalink: use-case-consumption-validate-an-iqlquery
published: true
title: "Validate an IQLQuery"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA26
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: validateIQLQuery
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
  - api_route_regex: POST /api/v2/Attributes/ValidateIQLQuery
  - published: default
  - link: use-case-consumption-validate-an-iqlquery
require:
required_by:
api_route_regex: ^POST /api/v2/Attributes/ValidateIQLQuery$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case validates an [IQLQuery]({% link _docs_integrate/data-model-overview.md %}#iqlquery)'s query string by checking for syntactic errors.

## Parameters

- The `query` field of the IQLQuery as described in [IQLQuery]({% link _docs_integrate/data-model-overview.md %}#iqlquery).

## On Success

- Returns `{ "isValid": true }` if the query string is syntactically valid IQL. Otherwise `{ "isValid": false, "error": { "message": "..." }}` is returned where the message contains additional information. See the [IQL syntax documentation]({% link _docs_integrate/iql-syntax.md %}).

## On Failure

- The query was malformed.
