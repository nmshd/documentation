---
# Start automatic generation
permalink: integrate/attribute-introduction
published: true
title: "Attribute introduction"
type: scenario
toc: true
properties:
  - id: SC047
  - category: Manage Attributes
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DOCS ONLY
  - documentation status: DONE
  - published: true
  - link: attribute-introduction
require:
required_by:
  - integrate/create-attributes-for-yourself
# End automatic generation
---

This guide provides an introduction to [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) in the enmeshed context.
Attributes are used to store information about Identities or data that is relevant in a Relationship between Identities.
There are therefore two types of Attributes, the [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) and the [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), which are designed for these different purposes.
Both have in common that they have a `value` property that contains the actual value of the Attribute, whereby it is possible to select from a long list of possible [Attribute value types]({% link _docs_integrate/attribute-values.md %}).
They define the format, the validation rules and the information display for the stored data.
Furthermore, an Attribute is technically stored as the `content` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute), in whose other properties metadata can be found.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/9e4f8ba6-90c6-48e3-a9a3-75d07e70c51b" id="l2jxcORp9Vuq"></iframe></div>

## IdentityAttributes

[IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) play a pivotal role in the management and exchange of information within the networked ecosystem.
An IdentityAttribute stores specific information about an Identity, which can be a person or an organization.
The semantic meaning of an IdentityAttribute is determined by its [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes).

### IdentityAttribute value types

The [IdentityAttribute value types]({% link _docs_integrate/attribute-values.md %}#identity-attributes) are used to define the type of the `value` property of an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute).
In order to fulfill various purposes, many such IdentityAttribute value types are provided.
If the IdentityAttribute value type used is not sufficient to clearly characterize the IdentityAttribute, `tags` can be used for a more precise description of its meaning.
Apart from custom `tags`, which must have the prefix `x:` or `X:`, Backbone-defined `tags` may be used, which can be queried using the [Get AttributeTagCollection]({% link _docs_use-cases/use-case-consumption-get-attributetagcollection.md %}) use case and which must start with the prefix `bkb:`.
Moreover, the prefixes `urn:`, `language:` and `mimetype:` are supported, and `language:` must be followed by a valid ISO 639 language code and `mimetype:` by a valid MIME type matching the pattern `^[a-z-*]+/[a-z-*]+$`.

The storage of multiple IdentityAttributes of the same value type is possible.
If an Identity receives a [Request for an IdentityAttribute of a certain value type]({% link _docs_integrate/read-attributes-from-peer.md %}#example-of-reading-an-identityattribute), it can choose which of the matching IdentityAttributes it wants to provide for its [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the [Request]({% link _docs_integrate/data-model-overview.md %}#request).
For example, storing multiple IdentityAttributes of the same value type is beneficial if an Identity has more than one residential address.
Using `tags` helps to distinguish such IdentityAttributes from each other.
{: .notice--info}

Depending on what IdentityAttribute value type is used, the associated IdentityAttribute is either a simple IdentityAttribute or a complex IdentityAttribute.

#### Simple IdentityAttributes

A simple IdentityAttribute is an IdentityAttribute with an [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes) for which none of its properties correspond to another IdentityAttribute value type.
In most cases, the IdentityAttribute value type then only has a single property, which often also has the name `value`.
This property stores the actual value of the IdentityAttribute.
In other words, it could be said that simple IdentityAttributes are not composite of other IdentityAttributes.
Examples of simple IdentityAttributes are IdentityAttributes with IdentityAttribute value type [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname) or [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress).

#### Complex IdentityAttributes

A complex IdentityAttribute is an IdentityAttribute with an [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes) for which at least one property corresponds to another IdentityAttribute value type.
An IdentityAttribute value type that contains such a property can be recognized by whether another IdentityAttribute value type is mentioned in its table in the [documentation]({% link _docs_integrate/attribute-values.md %}#identity-attributes) with regard to the validation of the property.
Examples of complex IdentityAttributes are IdentityAttributes with IdentityAttribute value type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) or [StreetAddress]({% link _docs_integrate/attribute-values.md %}#streetaddress).

### LocalAttributes and IdentityAttributes

From a technical perspective, an IdentityAttribute is always stored as the `content` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute).
A LocalAttribute whose `content` is given by an IdentityAttribute can be an [OwnIdentityAttribute](#ownidentityattributes) or a [PeerIdentityAttribute](#peeridentityattributes).

#### OwnIdentityAttributes

When an Identity [creates an IdentityAttribute for itself]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-an-identityattribute-for-yourself), an [OwnIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute) is created.
Its `content` is given by the IdentityAttribute owned by the Identity.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/f22fa64d-6565-4e8e-bc37-7747aaa578f5" id="Ix2-71mPhs~V"></iframe></div>

An Identity may share the underlying IdentityAttribute of an OwnIdentityAttribute with a peer.
This can be done by using a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request).

#### PeerIdentityAttributes

When an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) is shared by its `owner`, [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) associated with the OwnIdentityAttribute are created in the wallet of the `owner`.
They make it possible to record with whom an IdentityAttribute has been shared as the `address` of the peer with whom the IdentityAttribute is shared is contained within their `peer` property.
If an IdentityAttribute is shared by its `owner` with several peers, a corresponding number of AttributeForwardingDetails is generated.
If the OwnIdentityAttribute is [deleted]({% link _docs_integrate/delete-attributes.md %}#delete-emitted-attributes), the associated AttributeForwardingDetails are deleted as well.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/13632447-aad6-483c-826e-d69b5b7d6015" id="-I2-nxKO9t9T"></iframe></div>

If an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) is shared by its `owner`, this not only leads to the creation of associated AttributeForwardingDetails for the `owner` of the IdentityAttribute, but also to the creation of a [PeerIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute) for the peer with whom the IdentityAttribute was shared.
The `address` of the `owner` of the IdentityAttribute is contained within its `peer` property.
Furthermore, note that the `id` of a PeerIdentityAttribute is always the same as the `id` of the associated OwnIdentityAttribute.
To ensure the privacy of an Identity's data, the IdentityAttribute shared by its `owner` with a peer cannot be shared by that peer with a third party.

## RelationshipAttributes

A [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) is used to store data that is relevant in the context of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between two Identities.
Both Identities involved in the Relationship must agree to its creation.
In the context of a single Relationship, each RelationshipAttribute has its unique `key` for identification.
RelationshipAttributes can be shared with peers who are not involved in the Relationship in which the RelationshipAttribute exists as long as their `confidentiality` is not `"private"`.
Such sharing leads to the creation of [ThirdPartyRelationshipAttributes](#thirdpartyrelationshipattributes).

For information on how to establish Relationships, refer to the [Establish Relationships]({% link _docs_integrate/establish-relationships.md %}) scenario documentation.
{: .notice--info}

### RelationshipAttribute value types

The [RelationshipAttribute value types]({% link _docs_integrate/attribute-values.md %}#relationship-attributes) are used to define the type of the `value` property of a RelationshipAttribute.
In order to fulfill various purposes, many such RelationshipAttribute value types are provided.
Examples of RelationshipAttribute value types are [ProprietaryString]({% link _docs_integrate/attribute-values.md %}#proprietarystring) and [ProprietaryEMailAddress]({% link _docs_integrate/attribute-values.md %}#proprietaryemailaddress).
In contrast to IdentityAttributes, RelationshipAttributes are not divided into simple RelationshipAttributes and complex RelationshipAttributes depending on the value type.
Nevertheless, the RelationshipAttribute value type [Consent]({% link _docs_integrate/attribute-values.md %}#consent) should be highlighted, as it differs slightly from the other RelationshipAttribute value types.
Accordingly, with the [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) scenario documentation, there is a separate guide for creating RelationshipAttributes with Consent as RelationshipAttribute value type.

### LocalAttributes and RelationshipAttributes

From a technical perspective, a RelationshipAttribute is always stored as the `content` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute).
A LocalAttribute whose `content` is given by a RelationshipAttribute can be an [OwnRelationshipAttribute](#ownrelationshipattributes-and-peerrelationshipattributes), a [PeerRelationshipAttribute](#ownrelationshipattributes-and-peerrelationshipattributes) or a [ThirdPartyRelationshipAttribute](#thirdpartyrelationshipattributes).
For the simple initial creation of a RelationshipAttribute within a given Relationship, the terms [OwnRelationshipAttribute and PeerRelationshipAttribute](#ownrelationshipattributes-and-peerrelationshipattributes) are relevant.
The term [ThirdPartyRelationshipAttribute](#thirdpartyrelationshipattributes) is used if an existing RelationshipAttribute from one Relationship is shared with a peer from another Relationship.

#### OwnRelationshipAttributes and PeerRelationshipAttributes

A [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) can only exist in the context of a Relationship and must therefore be stored locally for both Identities involved in the Relationship.
Accordingly, the [creation of a RelationshipAttribute]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-a-relationshipattribute) corresponds to the creation of one [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) for its `owner` and one LocalAttribute for the peer with whom the `owner` has established the Relationship in whose context the RelationshipAttribute is to exist.
The [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) is the LocalAttribute of the `owner` of the RelationshipAttribute and the peer's LocalAttribute is referred to as a [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/fafb91f9-5b8e-4314-a86b-ac2107d0c39b" id="K72-4MVDLyCI"></iframe></div>

Within the `peer` property of the OwnRelationshipAttribute, the `address` of the peer to whom the RelationshipAttribute's `owner` has established the Relationship in whose context the RelationshipAttribute exists is specified.
The PeerRelationshipAttribute is the peer's [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) and forms the counterpart of the OwnRelationshipAttribute.
The `id` of a PeerRelationshipAttribute is always the same as the `id` of the associated OwnRelationshipAttribute.
Within the `peer` property of the PeerRelationshipAttribute, the `address` of the `owner` of the RelationshipAttribute is specified.

#### ThirdPartyRelationshipAttributes

Note that it is possible to share a RelationshipAttribute with peers who are not involved in the Relationship in which the RelationshipAttribute exists, provided that the `confidentiality` of the RelationshipAttribute is not `"private"`.
The sharing of a RelationshipAttribute with such a peer leads to the creation of associated [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) in the wallet of the Identity who has the source RelationshipAttribute.
They contain the `address` of this peer within their `peer` property.
If the source RelationshipAttribute is [deleted]({% link _docs_integrate/delete-attributes.md %}#delete-emitted-attributes), the associated AttributeForwardingDetails will be deleted as well.
The source RelationshipAttribute is either an [OwnRelationshipAttribute](#ownrelationshipattributes-and-peerrelationshipattributes) or a [PeerRelationshipAttribute](#ownrelationshipattributes-and-peerrelationshipattributes).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c667865f-6cdb-443a-abcd-28d50d839d2a" id="c92-bMMibJ7p"></iframe></div>

In the wallet of the peer with whom the underlying RelationshipAttribute of the source RelationshipAttribute was shared, a so-called [ThirdPartyRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattribute) is created.
The `initialAttributePeer` property of the ThirdPartyRelationshipAttribute is set to the peer of the source RelationshipAttribute.
The `id` of a ThirdPartyRelationshipAttribute is always the same as the `id` of the associated source RelationshipAttribute.

## Attribute management options

The IdentityAttributes and RelationshipAttributes were previously introduced.
Regardless of whether an Attribute is an IdentityAttribute or a RelationshipAttribute, various operations can be performed with Attributes.
These are described on separate documentation pages.
In the following, the Attribute management options are briefly described.

### Create Attributes for yourself

Obviously, it is not possible to work with Attributes that have not yet been created.
Therefore, the most important feature is the [creation of Attributes for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}).

### Share Attributes with peer

Attributes can not only be managed locally, but can also be [shared with peers]({% link _docs_integrate/share-attributes-with-peer.md %}).
The Identity can either share [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) about itself or [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) from a Relationship with another peer, [provided the `confidentiality` allows for it]({% link _docs_integrate/share-attributes-with-peer.md %}#combinations-and-usage-scenarios-of-shareattributerequestitem).

### Read Attributes from peer

If an Identity is interested in Attributes from another Identity and wants to query them, it can send a Request to [read Attributes from the peer]({% link _docs_integrate/read-attributes-from-peer.md %}).
In this case the recipient of the Request can determine the values of the requested Attributes.
An example of a use case would be if a company needs additional information about a customer that it does not have yet.

### Create Attributes for peer

Furthermore, it is possible to [create Attributes for another Identity]({% link _docs_integrate/create-attributes-for-peer.md %}).
In this case, the sender of the Request determines the value of the Attributes.
For example if a school sends the students their certificates, then it is necessary to use [Requests for creating Attributes]({% link _docs_integrate/create-attributes-for-peer.md %}#request-for-creating-attributes).

### Propose Attributes to peer

Lastly, if an Identity wants to [propose an Attribute to a peer]({% link _docs_integrate/propose-attributes-to-peer.md %}), it can send a Request that looks similar to the case where it wants to create an Attribute for the peer.
However, the recipient of the Request has the possibility to answer with an Attribute whose content is determined by itself, similar to the case where the sender requests to read an Attribute from the peer.
The difference to the ReadAttributeRequestItem is that an Identity already has information about a peer and wants them to be confirmed in order to use them.
For example, a company may want to support a customer in setting up an enmeshed account by proposing Attributes derived from the company’s knowledge of the costumer.

### Update Attributes by succession

If an Identity has created an Attribute that is owned by itself and is no longer valid, it has the option of [updating the Attribute by succession]({% link _docs_integrate/update-attributes-by-succession.md %}).
The peers with whom the Identity may have shared the Attribute can be notified about the update of the Attribute.

### Delete Attributes

An Identity may have created an Attribute for itself or received an Attribute from a peer that it does not need any longer.
In both cases, it can [delete the Attribute]({% link _docs_integrate/delete-attributes.md %}).
If an Identity has shared an Attribute with a peer, it can [request the deletion of this Attribute from its recipient]({% link _docs_integrate/delete-attributes.md %}#request-the-deletion-of-emitted-attributes-from-recipient) in order to withdraw their permission to use the Attribute.
Of course, the associated [emitted Attribute can be deleted]({% link _docs_integrate/delete-attributes.md %}#delete-emitted-attributes), too.
