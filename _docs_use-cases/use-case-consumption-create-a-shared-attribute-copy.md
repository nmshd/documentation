---
# Start automatic generation
permalink: use-case-consumption-create-a-shared-attribute-copy
published: true
title: "Create a shared Attribute copy"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA6
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: createSharedAttributeCopy
  - description:
  - feature category: Cross-Identity Attribute sharing
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments: Internal
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
  - published: default
  - link: use-case-consumption-create-a-shared-attribute-copy
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

Be advised that this is a Runtime-internal use case which is automatically used by the module system. You should not call this use case without having good reason.
{: .notice--warning}

This use case is intended to create a copy of a LocalAttribute with the intent to share it. The copy references the original [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo).

## Parameters

- `attributeId` is the ID of the Attribute that the copy is made of.
- `peer` is the address of the peer the copy will be sent to.
- `requestReference` is a reference to the Request the copy will be sent with.

## On Success

- The copy is created and returned as a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute).

## On Failure

- The parameters are malformed.
