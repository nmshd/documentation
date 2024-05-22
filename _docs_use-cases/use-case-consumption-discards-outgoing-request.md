---
# Start automatic generation
permalink: use-case-consumption-discards-outgoing-request
published: true
title: "Discards outgoing Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR8
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: discard
  - description:
  - feature category: Normalized Requests/Responses to and from users
  - tech category: Requests
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex:
  - published: default
  - link: use-case-consumption-discards-outgoing-request
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to discard an outgoing [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) that has not been sent to the peer yet and is thus still in status `Draft`.

## Parameters

- `id` references the outgoing LocalRequest that is to be discarded.

## On Success

- The LocalRequest is deleted and returned.

## On Failure

- The LocalRequest could not be found.
- The LocalRequest is not in status `Draft`.
