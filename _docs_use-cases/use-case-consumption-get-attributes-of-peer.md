---
# Start automatic generation
permalink: use-case-consumption-get-attributes-of-peer
published: true
title: "Get Attributes of peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA3
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getPeerSharedAttributes
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
  - api_route_regex: GET /api/v2/Attributes/Peer/Shared/Identity
  - published: default
  - link: use-case-consumption-get-attributes-of-peer
require:
required_by:
api_route_regex: ^GET /api/v2/Attributes/Peer/Shared/Identity$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case is intended to retrieve Attributes that a peer has shared with the current Identity as [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute). The LocalAttributes can be specified using a complex query.

## Parameters

- `peer` is the Address of the Identity that shared the LocalAttributes.
- `onlyValid` filters the requested LocalAttributes to only consider currently valid LocalAttributes if set.
- `query` describes the requested LocalAttributes in detail.
- `hideTechnical` filters out technical LocalAttributes if set.

## On Success

- Returns a list of [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#LocalAttribute) shared by the peer that match the query.

## On Failure

- The parameters are malformed.
