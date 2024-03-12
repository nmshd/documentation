---
# Start automatic generation
permalink: use-case-consumption-query-attributelisteners
published: true
title: "Query AttributeListeners"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RAL1
  - component: Runtime
  - layer: Consumption
  - facade: AttributeListenersFacade
  - function: getAttributeListeners
  - description:
  - feature category: Attribute automation
  - tech category: AttributeListeners
  - status: PRERELEASE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger: Runtime
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex:
  - published:
  - link: use-case-consumption-query-attributelisteners
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to query all [Attribute Listeners]({% link _docs_integrate/data-model-overview.md %}#localattributelistener)
based on a query.

## Parameter

- The `query` optionally describes the searched Attribute Listeners. If no query is given all Attribute Listeners are returned.

## On Success

- Returns a list of [LocalAttributeListeners]({% link _docs_integrate/data-model-overview.md %}#localattributelistener) that match the query.

## On Failure

- The parameters are malformed.
