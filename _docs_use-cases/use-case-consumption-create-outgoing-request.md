---
# Start automatic generation
permalink: use-case-consumption-create-outgoing-request
published: true
title: "Create outgoing Request"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: ROR2
  - component: Runtime
  - layer: Consumption
  - facade: OutgoingRequestsFacade
  - function: create
  - description: Creates a new outgoing `Request`.
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
  - api_route_regex: POST /api/v2/Requests/Outgoing
  - published: default
  - link: use-case-consumption-create-outgoing-request
require:
required_by:
api_route_regex: ^POST /api/v2/Requests/Outgoing$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case is intended to create an actionable [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) based on a given [Request]({% link _docs_integrate/data-model-overview.md %}#localrequest) for a given `peer`.
The created LocalRequest needs to be manually submitted to the peer, for example by sending it [via a Message]({% link _docs_integrate/requests-via-messages.md %}).
One can and should [check if the outgoing Request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) before creating the LocalRequest with this use case, because a more precise error description is provided in the case of a faulty Request.

## Parameters

- The `content` as a [Request]({% link _docs_integrate/data-model-overview.md %}#request) for the to be created [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest).
- The `peer` is the address for which the LocalRequest should be created. There can only be one peer per LocalRequest.

## On Success

- A new [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) for the given parameters is created in status `Draft` and returned, but so far not sent to the given peer.

## On Failure

- The LocalRequest cannot be created if the `peer` is unknown.
- The LocalRequest cannot be created if the Request specified as `content` is malformed.
- The LocalRequest cannot be created if its acceptance would lead to the creation of more than one [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) in the context of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) to the `peer` with the same `key`, `owner` and `value.@type`.

For more details on the failure to create a LocalRequest, execute the [Check if outgoing Request can be created](use-case-consumption-check-if-outgoing-request-can-be-created) use case.
{: .notice--info}
