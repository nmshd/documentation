---
# Start automatic generation
permalink: use-case-consumption-get-attributes-shared-to-peer
published: true
title: "Get Attributes shared to peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA4
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getOwnSharedAttributes
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
  - api_route_regex: GET /api/v2/Attributes/Own/Shared/Identity
  - published: default
  - link: use-case-consumption-get-attributes-shared-to-peer
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/Own/Shared/Identity$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve Attributes that the current Idenity shared to a peer as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute). The LocalAttributes can be specified using a complex query.

## Parameters

- `peer` is the Address of the Identity that shared the LocalAttributes.
- `onlyValid` filters the requested LocalAttributes to only consider currently valid LocalAttributes if set.
- `query` describes the requested LocalAttributes in detail.
- `hideTechnical` filters out technical LocalAttributes if set.

## On Success

- Returns a list of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute) shared to the peer that match the query.

## On Failure

- The parameters are malformed.
