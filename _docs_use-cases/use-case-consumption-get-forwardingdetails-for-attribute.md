---
# Start automatic generation
permalink: use-case-consumption-get-forwardingdetails-for-attribute
published: true
title: "Get ForwardingDetails for Attribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA12
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: getForwardingDetailsForAttribute
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
  - api_route_regex: GET /api/core/v1/Attributes/{id}/ForwardingDetails
  - published: default
  - link: use-case-consumption-get-forwardingdetails-for-attribute
require:
required_by:
api_route_regex: ^GET /api/core/v1/Attributes/{id}/ForwardingDetails$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case allows you to retrieve a list of [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) for a given [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute).
Since only the LocalAttribute subtypes [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute), [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute), and [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute) represent forwardable Attributes, AttributeForwardingDetails can only exist for such LocalAttributes.

## Parameters

- The `attributeId` belonging to a LocalAttribute you would like to retrieve AttributeForwardingDetails of.
- `query` allows to specify the conditions for the returned AttributeForwardingDetails. In detail, the following keys may be used:
  - `peer` describes the Identity the LocalAttribute is shared with.
  - `sourceReference` describes the `id` of the [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) or [LocalNotification]({% link _docs_integrate/data-model-overview.md %}#localnotification) the LocalAttribute was sent with.
  - `sharedAt` describes the time when the LocalAttribute was shared.
  - The fields of the `deletionInfo` describe the [EmittedAttributeDeletionInfo]({% link _docs_integrate/data-model-overview.md %}#emittedattributedeletioninfo) of the AttributeForwardingDetails.

## On Success

- Returns a list of AttributeForwardingDetails for the LocalAttribute belonging to the given `attributeId` that match the query.

## On Failure

- No AttributeForwardingDetails can be returned if the `attributeId` correlates to an unknown LocalAttribute.
- No AttributeForwardingDetails can be returned if the parameters are malformed.
