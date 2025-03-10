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

This guide provides an introduction to [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) in the enmeshed context. Attributes are used to store information about Identities or data that is relevant in a Relationship between Identities. There are therefore two types of Attributes, the [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) and the [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), which are designed for these different purposes. Both have in common that they have a `value` property that contains the actual value of the Attribute, whereby it is possible to select from a long list of possible [Attribute value types]({% link _docs_integrate/attribute-values.md %}). They define the format, the validation rules and the information display for the stored data. Furthermore, an Attribute is technically stored as the `content` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute), in whose other properties metadata can be found.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/9e4f8ba6-90c6-48e3-a9a3-75d07e70c51b" id="l2jxcORp9Vuq"></iframe></div>

## IdentityAttributes

[IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) play a pivotal role in the management and exchange of information within the networked ecosystem. An IdentityAttribute stores specific information about an Identity, which can be a person or an organization. The semantic meaning of an IdentityAttribute is determined by its [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes).

### IdentityAttribute value types

The [IdentityAttribute value types]({% link _docs_integrate/attribute-values.md %}#identity-attributes) are used to define the type of the `value` property of an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute). In order to fulfill various purposes, many such IdentityAttribute value types are provided. If the IdentityAttribute value type used is not sufficient to clearly characterize the IdentityAttribute, `tags` can be used for a more precise description of its meaning.

The storage of multiple IdentityAttributes of the same value type is possible. If an Identity receives a [Request for an IdentityAttribute of a certain value type]({% link _docs_integrate/read-attributes-from-peer.md %}#example-of-reading-an-identityattribute), it can choose which of the matching IdentityAttributes it wants to provide for its [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the [Request]({% link _docs_integrate/data-model-overview.md %}#request). For example, storing multiple IdentityAttributes of the same value type is beneficial if an Identity has more than one residential address. Using `tags` helps to distinguish such IdentityAttributes from each other.
{: .notice--info}

Depending on what IdentityAttribute value type is used, the associated IdentityAttribute is either a simple IdentityAttribute or a complex IdentityAttribute.

#### Simple IdentityAttributes

A simple IdentityAttribute is an IdentityAttribute with an [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes) for which none of its properties correspond to another IdentityAttribute value type. In most cases, the IdentityAttribute value type then only has a single property, which often also has the name `value`. This property stores the actual value of the IdentityAttribute. From a technical point of view, it can be stated that the `id` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) whose `content` is given by a simple IdentityAttribute cannot be the `parentId` of another LocalAttribute. In other words, it could be said that simple IdentityAttributes are not composite of other IdentityAttributes. Examples of simple IdentityAttributes are IdentityAttributes with IdentityAttribute value type [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname) or [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress).

#### Complex IdentityAttributes

A complex IdentityAttribute is an IdentityAttribute with an [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes) for which at least one property corresponds to another IdentityAttribute value type. An IdentityAttribute value type that contains such a property can be recognized by whether another IdentityAttribute value type is mentioned in its table in the [documentation]({% link _docs_integrate/attribute-values.md %}#identity-attributes) with regard to the validation of the property. Examples of complex IdentityAttributes are IdentityAttributes with IdentityAttribute value type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) or [StreetAddress]({% link _docs_integrate/attribute-values.md %}#streetaddress). When [creating a complex IdentityAttribute for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}#example-of-creating-a-complex-identityattribute), there is an important detail to note in contrast to the [creation of a simple IdentityAttribute for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}#example-of-creating-a-simple-identityattribute). Creating an IdentityAttribute for yourself always leads to the creation of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) whose `shareInfo` property is undefined and whose `content` is given by the IdentityAttribute owned by yourself. Such a LocalAttribute is also referred to as a RepositoryAttribute. If a RepositoryAttribute is created that contains a complex IdentityAttribute within its `content` property, additional RepositoryAttributes are automatically created for each property of its IdentityAttribute value type that corresponds to another IdentityAttribute value type. These RepositoryAttributes are also referred to as children of the RepositoryAttribute belonging to the complex IdentityAttribute. The `id` of their parent is contained within their `parentId` property. The creation of these RepositoryAttributes makes it possible to share individual components of a complex IdentityAttribute. For example, if an IdentityAttribute of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) has been created, it is possible to share only the `year` of birth with peers, instead of the full date of birth. The corresponding IdentityAttribute of type [BirthYear]({% link _docs_integrate/attribute-values.md %}#birthyear) does not have to be created manually, but is created automatically after the IdentityAttribute of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) has been created.

Please note that when creating a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) that contains a complex IdentityAttribute in its `content` property, additional LocalAttributes are only created automatically if the LocalAttribute is a RepositoryAttribute. However, if the LocalAttribute is an own shared IdentityAttribute or a peer shared IdentityAttribute, no additional LocalAttributes are created. More details on the terminology related to [LocalAttributes and IdentityAttributes]({% link _docs_integrate/attribute-introduction.md %}#localattributes-and-identityattributes) can be found in the next section.
{: .notice--info}

### LocalAttributes and IdentityAttributes

From a technical perspective, an IdentityAttribute is always stored as the `content` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute). Depending on the values of certain properties of the LocalAttribute, a LocalAttribute whose `content` is given by an IdentityAttribute is also referred to as a **RepositoryAttribute**, an **own shared IdentityAttribute** or a **peer shared IdentityAttribute**.

#### RepositoryAttributes

As already mentioned in the section on [complex IdentityAttributes]({% link _docs_integrate/attribute-introduction.md %}#complex-identityattributes), a RepositoryAttribute is a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) whose `content` is given by an IdentityAttribute owned by yourself and whose `shareInfo` property is undefined.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/62b3b352-a6d7-4826-8693-e8527b0370e4" id="zVGxoOkr.UEQ"></iframe></div>

A RepositoryAttribute is created when an Identity [creates an IdentityAttribute for itself]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-an-identityattribute-for-yourself).
If the IdentityAttribute is a complex IdentityAttribute, RepositoryAttributes are also created for the properties of the IdentityAttribute value type that correspond to other IdentityAttribute value types.
An Identity may share the underlying IdentityAttribute of a RepositoryAttribute with a peer.
This can be done by using a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request).

#### Own shared and peer shared IdentityAttributes

When [exchanging the underlying IdentityAttribute of a RepositoryAttribute with a peer](#attribute-management-options), two corresponding copies of the RepositoryAttribute, the own shared IdentityAttribute and the peer shared IdentityAttribute, are created. This makes it possible to record with whom an IdentityAttribute has been shared or from whom an IdentityAttribute has been received. When an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) is shared by its `owner`, an own shared IdentityAttribute is created as a copy of the associated RepositoryAttribute in the wallet of the `owner`. An own shared IdentityAttribute is a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) for which, in contrast to the RepositoryAttribute, the `shareInfo` property is set. The `content` of the own shared IdentityAttribute is the same as that of the RepositoryAttribute. The `address` of the peer with whom the IdentityAttribute is shared is contained within its `shareInfo.peer` property. Furthermore, the `id` of the RepositoryAttribute used as the source is stored in its `shareInfo.sourceAttribute` property. This is the case as long as the RepositoryAttribute used as the source has not been [deleted]({% link _docs_integrate/delete-attributes.md %}#delete-repositoryattributes). If an IdentityAttribute is shared by its `owner` with several peers, a corresponding number of own shared IdentityAttributes are generated.

<div style="width: 640px; height: 600px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:600px" src="https://lucid.app/documents/embedded/95394e3a-b857-4165-9b1a-824ad81e04d9" id="QViE651IOP3n"></iframe></div>

If an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) is shared by its `owner`, this not only leads to the creation of an own shared IdentityAttribute as a copy of the associated RepositoryAttribute for the `owner` of the IdentityAttribute, but also to the creation of a peer shared IdentityAttribute for the peer with whom the IdentityAttribute was shared. A peer shared IdentityAttribute is a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) for which the `shareInfo` property is set. The `address` of the `owner` of the IdentityAttribute is contained within its `shareInfo.peer` property. The `shareInfo.sourceAttribute` property of a peer shared IdentityAttribute is always undefined, as the RepositoryAttribute used as the source is only stored locally for the `owner` of the IdentityAttribute. Furthermore, note that the `id` of a peer shared IdentityAttribute is always the same as the `id` of the associated own shared IdentityAttribute. To ensure the privacy of an Identity's data, the IdentityAttribute shared by its `owner` with a peer cannot be shared by that peer with a third party.

## RelationshipAttributes

A [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) is used to store data that is relevant in the context of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between two Identities. Both Identities involved in the Relationship must agree to its creation.
In the context of a single Relationship, each RelationshipAttribute has its unique `key` for identification.
RelationshipAttributes can be shared with peers who are not involved in the Relationship in which the RelationshipAttribute exists as long as their `confidentiality` is not `"private"`.
Such sharing leads to the creation of ThirdPartyRelationshipAttributes.

For information on how to establish Relationships, refer to the [Establish Relationships]({% link _docs_integrate/establish-relationships.md %}) scenario documentation.
{: .notice--info}

### RelationshipAttribute value types

The [RelationshipAttribute value types]({% link _docs_integrate/attribute-values.md %}#relationship-attributes) are used to define the type of the `value` property of a RelationshipAttribute. In order to fulfill various purposes, many such RelationshipAttribute value types are provided. Examples of RelationshipAttribute value types are [ProprietaryString]({% link _docs_integrate/attribute-values.md %}#proprietarystring) and [ProprietaryEMailAddress]({% link _docs_integrate/attribute-values.md %}#proprietaryemailaddress). In contrast to IdentityAttributes, RelationshipAttributes are not divided into simple RelationshipAttributes and complex RelationshipAttributes depending on the value type. Nevertheless, the RelationshipAttribute value type [Consent]({% link _docs_integrate/attribute-values.md %}#consent) should be highlighted, as it differs slightly from the other RelationshipAttribute value types. Accordingly, with the [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) scenario documentation, there is a separate guide for creating RelationshipAttributes with Consent as RelationshipAttribute value type.

### LocalAttributes and RelationshipAttributes

From a technical perspective, a RelationshipAttribute is always stored as the `content` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute). Depending on the values of certain properties of the LocalAttribute, a LocalAttribute whose `content` is given by a RelationshipAttribute is also referred to as an **own shared RelationshipAttribute**, a **peer shared RelationshipAttribute**, an **emitted ThirdPartyRelationshipAttribute** or a **received ThirdPartyRelationshipAttribute**. For the simple initial creation of a RelationshipAttribute within a given Relationship, the terms [own shared RelationshipAttribute and peer shared RelationshipAttribute](#own-shared-and-peer-shared-relationshipattributes) are relevant. The terms [emitted ThirdPartyRelationshipAttribute and received ThirdPartyRelationshipAttribute](#emitted-and-received-shared-thirdpartyrelationshipattributes) are used if an existing RelationshipAttribute from one Relationship is shared with a peer from another Relationship.

#### Own shared and peer shared RelationshipAttributes

A [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) can only exist in the context of a Relationship and must therefore be stored locally for both Identities involved in the Relationship.
Accordingly, the [creation of a RelationshipAttribute]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-a-relationshipattribute) corresponds to the creation of one [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) for its `owner` and one LocalAttribute for the peer with whom the `owner` has established the Relationship in whose context the RelationshipAttribute is to exist.
The own shared RelationshipAttribute is the LocalAttribute of the `owner` of the RelationshipAttribute and the peer's LocalAttribute is referred to as a peer shared RelationshipAttribute.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/dd79b31c-0404-48bb-9773-9b989801c03c" id="RbDyLSjh7BzY"></iframe></div>

Of course, the `shareInfo` property of the own shared RelationshipAttribute is set. Within the `shareInfo.peer` property, the `address` of the peer to whom the RelationshipAttribute's `owner` has established the Relationship in whose context the RelationshipAttribute exists is specified.
If the RelationshipAttribute is initially created for a specific Relationship and does not originate from another RelationshipAttribute, the `shareInfo.sourceAttribute` property is undefined.
The peer shared RelationshipAttribute is the peer's [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) and forms the counterpart of the own shared RelationshipAttribute. The `id` of a peer shared RelationshipAttribute is always the same as the `id` of the associated own shared RelationshipAttribute. As with the own shared RelationshipAttribute, the `shareInfo` property of a peer shared RelationshipAttribute is of course set.
Within the `shareInfo.peer` property, the `address` of the `owner` of the RelationshipAttribute is specified.
Furthermore, the `shareInfo.sourceAttribute` property of a peer shared RelationshipAttribute is undefined.
Also, for both the own shared and peer shared RelationshipAttribute, the `shareInfo.thirdPartyAddress` property is undefined, as it is only used for ThirdPartyRelationshipAttributes.

#### Emitted and received ThirdPartyRelationshipAttributes

Note that it is possible to share a RelationshipAttribute with peers who are not involved in the Relationship in which the RelationshipAttribute exists, provided that the `confidentiality` of the RelationshipAttribute is not `"private"`.
The sharing of a RelationshipAttribute with such a peer leads to the creation of a so-called emitted ThirdPartyRelationshipAttribute in the wallet of the Identity who has the source RelationshipAttribute.
An emitted ThirdPartyRelationshipAttribute is a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) similar to an own shared RelationshipAttribute that contains the `address` of this peer within its `shareInfo.peer` property.
As it originates from another own shared RelationshipAttribute that exists in the context of a different Relationship, it contains the `id` of the source RelationshipAttribute within its `shareInfo.sourceAttribute` property.
This is the case as long as the own shared RelationshipAttribute used as the source has not been [deleted]({% link _docs_integrate/delete-attributes.md %}#delete-own-shared-attributes).
Furthermore, in the `shareInfo.thirdPartyAddress` the `address` of the peer of the source RelationshipAttribute is stored.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/5c9fc0f6-b5e4-4bfd-90b9-a046447ad47e" id="SsblHmOED0qR"></iframe></div>

In the wallet of the peer with whom the underlying RelationshipAttribute of the source RelationshipAttribute was shared, a so-called received ThirdPartyRelationshipAttribute is created.
It is a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) similar to a peer shared RelationshipAttribute that can be interpreted as the counterpart of an emitted ThirdPartyRelationshipAttribute.
As for the emitted ThirdPartyRelationshipAttribute, the `shareInfo.thirdPartyAddress` property of the received ThirdPartyRelationshipAttribute is set to the peer of the source RelationshipAttribute.
Lastly, the `shareInfo.sourceAttribute` property of a received ThirdPartyRelationshipAttribute is always undefined, as the source RelationshipAttribute can only be available locally to the emitter of the ThirdPartyRelationshipAttribute.

## Attribute management options

The IdentityAttributes and RelationshipAttributes were previously introduced. Regardless of whether an Attribute is an IdentityAttribute or a RelationshipAttribute, various operations can be performed with Attributes. These are described on separate documentation pages. In the following, the Attribute management options are briefly described.

### Create Attributes for yourself

Obviously, it is not possible to work with Attributes that have not yet been created. Therefore, the most important feature is the [creation of Attributes for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}).

### Share Attributes with peer

Attributes can not only be managed locally, but can also be [shared with peers]({% link _docs_integrate/share-attributes-with-peer.md %}). The Identity can either share [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) about itself or [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) from a Relationship with another peer, [provided the `confidentiality` allows for it]({% link _docs_integrate/share-attributes-with-peer.md %}#combinations-and-usage-scenarios-of-shareattributerequestitem).

### Read Attributes from peer

If an Identity is interested in Attributes from another Identity and wants to query them, it can send a Request to [read Attributes from the peer]({% link _docs_integrate/read-attributes-from-peer.md %}). In this case the recipient of the Request can determine the values of the requested Attributes. An example of a use case would be if a company needs additional information about a customer that it does not have yet.

### Create Attributes for peer

Furthermore, it is possible to [create Attributes for another Identity]({% link _docs_integrate/create-attributes-for-peer.md %}). In this case, the sender of the Request determines the value of the Attributes. For example if a school sends the students their certificates, then it is necessary to use [Requests for creating Attributes]({% link _docs_integrate/create-attributes-for-peer.md %}#request-for-creating-attributes).

### Propose Attributes to peer

Lastly, if an Identity wants to [propose an Attribute to a peer]({% link _docs_integrate/propose-attributes-to-peer.md %}), it can send a Request that looks similar to the case where it wants to create an Attribute for the peer. However, the recipient of the Request has the possibility to answer with an Attribute whose content is determined by itself, similar to the case where the sender requests to read an Attribute from the peer.
The difference to the ReadAttributeRequestItem is that an Identity already has information about a peer and wants them to be confirmed in order to use them. For example, a company may want to support a customer in setting up an enmeshed account by proposing Attributes derived from the company’s knowledge of the costumer.

### Update Attributes by succession

If an Identity has created an Attribute that is owned by itself and is no longer valid, it has the option of [updating the Attribute by succession]({% link _docs_integrate/update-attributes-by-succession.md %}). The peers with whom the Identity may have shared the Attribute can be notified about the update of the Attribute.

### Delete Attributes

An Identity may have created an Attribute for itself or received an Attribute from a peer that it does not need any longer. In both cases, it can [delete the Attribute]({% link _docs_integrate/delete-attributes.md %}). If an Identity has shared an Attribute that is owned by itself with a peer, it can [request the deletion of this Attribute from the peer]({% link _docs_integrate/delete-attributes.md %}#request-the-deletion-of-own-attributes-from-peer) in order to withdraw their permission to use the Attribute. Of course, the associated [own shared Attribute can be deleted]({% link _docs_integrate/delete-attributes.md %}#delete-own-shared-attributes), too.
