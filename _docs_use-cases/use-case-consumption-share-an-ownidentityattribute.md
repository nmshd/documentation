---
# Start automatic generation
permalink: use-case-consumption-share-an-ownidentityattribute
redirect_from:
  - /use-case-consumption-share-a-repositoryattribute
published: true
title: "Share an OwnIdentityAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA3
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: shareOwnIdentityAttribute
  - description:
  - feature category: Cross-Identity Attribute sharing
  - tech category: Attributes
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority:
  - complexity:
  - size:
  - created_at:
  - changed_at:
  - api_route_regex:
  - published: default
  - link: use-case-consumption-share-an-ownidentityattribute
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

If you wish to share one of your [OwnIdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) with a peer, this use case allows you to do so.
Internally, a [Request]({% link _docs_integrate/data-model-overview.md %}#request) with a [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) will be created and will be sent via [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the peer.
Assuming your peer accepts the Request, at their side a [PeerIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute) will be created.
The corresponding [Response]({% link _docs_integrate/data-model-overview.md %}#response) informs you about their acceptance and creates [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) associated with the OwnIdentityAttribute.

Please note further, that this use case is meant to be used to share a version of an OwnIdentityAttribute for the first time.
If you have already shared another version of a succeeded Attribute with the peer and you want to let them know about the changes to its `value`, use the [Notify peer about OwnIdentityAttribute succession use case]({% link _docs_use-cases/use-case-consumption-notify-peer-about-ownidentityattribute-succession.md %}).
{: .notice--info}

## Parameters

- The `attributeId` of your OwnIdentityAttribute.
- The address of the `peer`.
- Optionally `requestMetadata` as described in the [data model]({% link _docs_integrate/data-model-overview.md %}#request), except for the `id` and `items`, which are handled automatically.

## On Success

- The [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) is returned, that is associated with the Request which was sent to the peer.

## On Failure

- The Request cannot be created if the `peer` is unknown.
- The Request cannot be created if the `attributeId` doesn't belong to an OwnIdentityAttribute.
- The Request cannot be created if the OwnIdentityAttribute has already been shared with the peer and it doesn't have `"DeletedByRecipient"` or `"ToBeDeletedByRecipient"` as `deletionInfo.deletionStatus`.
- The Request cannot be created if another version of the OwnIdentityAttribute regarding succession has already been shared with the peer, unless the latest shared version has `"DeletedByRecipient"` as `deletionInfo.deletionStatus`.
- The Request cannot be created if the parameters are malformed.
