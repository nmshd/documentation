---
# Start automatic generation
permalink: use-case-consumption-delete-a-peer-shared-attribute-and-notify-peer
published: false
title: "Delete a peer shared Attribute and notify peer"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA24
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: deletePeerSharedAttributeAndNotifyPeer
  - description:
  - feature category: Cross-identity attribute sharing
  - tech category: Attributes
  - status: DONE
  - documentation status:
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
  - api_route_regex:
  - published: default
  - link: use-case-consumption-delete-a-peer-shared-attribute-and-notify-peer
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use-case allows you to delete a [LocalAttribute] a peer shared with you.

## Parameters

- The `attributeId` of the LocalAttribute you want to delete.

## On Success

- The LocalAttribute will be deleted.
- All predecessors of the LocalAttribute will be deleted.
- A [Notification] is sent to the owner of the Attribute, informing them that you deleted their Attribute. Technically, the own shared Attribute of the owner and all predecessors will get a `deletionInfo` with `deletionStatus` `"DeletedByPeer"` and the time of receiving the Notification as `deletionDate`.

## On Failure

- No Attribute can be deleted, if you don't have a LocalAttribute with given `attributeId`.
- No Attribute can be deleted, if the Attribute with given `attributeId` is not a peer shared Attribute.