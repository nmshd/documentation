---
# Start automatic generation
permalink: use-case-consumption-share-a-repositoryattribute
published: true
title: "Share a RepositoryAttribute"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RA13
  - component: Runtime
  - layer: Consumption
  - facade: AttributesFacade
  - function: shareRepositoryAttribute
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
  - link: use-case-consumption-share-a-repositoryattribute
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

If you wish to share one of your private [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute), called RepositoryAttributes, with a peer, this use case allows you to do so.
Internally, a [Request]({% link _docs_integrate/data-model-overview.md %}#request) with a [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) will be created and will be sent via [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the peer.
Assuming your peer accepts the Request, at their side a peer shared IdentityAttribute will be created.
The corresponding [Response]({% link _docs_integrate/data-model-overview.md %}#response) informs you about their acceptance and creates a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) with a copy of the RepositoryAttribute's `content` you shared.
This own shared IdentityAttribute copy, however, in addition has a defined `shareInfo` property.
It stores information about the `peer` you shared the Attribute with, the `id` of the original RepositoryAttribute in the field `sourceAttribute`, and a reference to the Request used to share the Attribute.
Note that the own shared IdentityAttribute at your side and the peer shared IdentityAttribute at your peer's side are identical, except for the value in the `shareInfo.peer` field: on your side it will have the peer's Address and on the peer's side it will have your Address.
Please note further, that this use case is meant to be used to share a version of a RepositoryAttribute for the first time.
If you have already shared another version of a succeeded Attribute with the peer and you want to let them know about the changes to its `value`, use the [NotifyPeerAboutIdentityAttributeSuccession use-case]({% link _docs_use-cases/use-case-consumption-notify-peer-about-repositoryattribute-succession.md %}).

## Parameters

- The `attributeId` of your RepositoryAttribute
- The address of the `peer`
- Optionally `requestMetadata` as described in the [data model]({% link _docs_integrate/data-model-overview.md %}#request), except for the `id` and `items`, which are handled automatically

## On Success

- The [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest) is returned, that is associated with the Request which was sent to the peer.

## On Failure

- The Request cannot be created, if the `peer` is unknown.
- The Request cannot be created, if the `attributeId` belongs to a RelationshipAttribute.
- The Request cannot be created, if the `attributeId` belongs to an IdentityAttribute with a `shareInfo`.
- The Request cannot be created, if the Attribute has already been shared with the peer.
- The Request cannot be created, if another version of the Attribute regarding succession has already been shared with the peer.
- The Request cannot be created, if the parameters are malformed.
