---
# Start automatic generation
permalink: use-case-consumption-get-attributelistener
published: true
title: "Get AttributeListener"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RAL2
  - component: Runtime
  - layer: Consumption
  - facade: AttributeListenersFacade
  - function: getAttributeListener
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
  - link: use-case-consumption-get-attributelistener
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to retrieve an [Attribute Listener]({% link _docs_integrate/data-model-overview.md %}#localattributelistener) by its id.

## Parameter

- The unique `id` identifying the Attribute Listener.

## On Success

- Returns the [LocalAttributeListener]({% link _docs_integrate/data-model-overview.md %}#localattributelistener) that corresponds to the `id`.

## On Failure

- There is no such Attribute Listener.
