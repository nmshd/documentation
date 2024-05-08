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
  - documentation status: OPEN
  - published:
  - link: attribute-introduction
require:
required_by:
  - integrate/create-attributes-for-yourself
# End automatic generation
---

This guide provides an introduction to [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) in the enmeshed context. Attributes are used to store information about Identities or data that is relevant in a Relationship between Identities. There are therefore two types of Attributes, the [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) and the [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), which are designed for these different purposes. Both have in common that they have a `value` property that contains the actual value of the Attribute, whereby it is possible to select from a long list of possible [Attribute value types]({% link _docs_integrate/attribute-values.md %}). They define the format, the validation rules and the information display for the stored data. Furthermore, an Attribute is technically stored as the `content` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute), in whose other properties metadata can be found.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/9e4f8ba6-90c6-48e3-a9a3-75d07e70c51b" id="l2jxcORp9Vuq"></iframe></div>

## IdentityAttributes

[IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) play a pivotal role in the management and exchange of information within the networked ecosystem. An IdentityAttribute is specific information associated with an Identity, which can be a person or an entity. The semantic meaning of an IdentityAttribute is determined by its [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes).

### IdentityAttribute value types

The [IdentityAttribute value types]({% link _docs_integrate/attribute-values.md %}#identity-attributes) are used to define the type of the `value` property of an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute). In order to fulfill various purposes, many such IdentityAttribute value types are provided. If the IdentityAttribute value type used is not sufficient to clearly characterize the IdentityAttribute, `tags` can be used for a more precise description of its meaning.

The storage of multiple IdentityAttributes of the same value type is possible. If an Identity receives a [Request for an IdentityAttribute of a certain value type]({% link _docs_integrate/read-attributes-from-peer.md %}#example-of-reading-an-identityattribute), it can choose which of the matching IdentityAttributes it wants to provide for its [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the [Request]({% link _docs_integrate/data-model-overview.md %}#request). For example, storing multiple IdentityAttributes of the same value type is beneficial if an Identity has more than one residential address. In order to be able to distinguish such IdentityAttributes from each other, it is crucial to specify appropriate `tags` for them.
{: .notice--info}

Depending on what IdentityAttribute value type is used, the associated IdentityAttribute is either a simple IdentityAttribute or a complex IdentityAttribute.

#### Simple IdentityAttributes

A simple IdentityAttribute is an IdentityAttribute with an [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes) for which none of its properties can be interpreted as another IdentityAttribute value type. In most cases, the IdentityAttribute value type then only has a single property, which often also has the name `value`. This property stores the actual value of the IdentityAttribute. From a technical point of view, it can be stated that the `id` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) whose `content` is given by a simple IdentityAttribute cannot be the `parentId` of another LocalAttribute. In other words, it could be said that simple IdentityAttributes are not composite. Examples of simple IdentityAttributes are IdentityAttributes for which [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname) or [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) is used as the IdentityAttribute value type.

#### Complex IdentityAttributes

A complex IdentityAttribute is an IdentityAttribute with an [IdentityAttribute value type]({% link _docs_integrate/attribute-values.md %}#identity-attributes) for which at least one property can be interpreted as another IdentityAttribute value type. Whether an IdentityAttribute value type includes such a property can be determined by whether another IdentityAttribute value type is mentioned in its table in the [documentation]({% link _docs_integrate/attribute-values.md %}#identity-attributes) with regard to the validation of the property. Examples of complex IdentityAttributes are IdentityAttributes for which [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) or [StreetAddress]({% link _docs_integrate/attribute-values.md %}#streetaddress) is used as the IdentityAttribute value type. When [creating a complex IdentityAttribute for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}#example-of-creating-a-complex-identityattribute), there is an important detail to note in contrast to the [creation of a simple IdentityAttribute for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}#example-of-creating-a-simple-identityattribute). Creating an IdentityAttribute for yourself always leads to the creation of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) whose `shareInfo` property is undefined and whose `content` is given by the IdentityAttribute owned by yourself. Such a LocalAttribute is also referred to as a RepositoryAttribute. If a RepositoryAttribute is created that contains a complex IdentityAttribute within its `content` property, additional RepositoryAttributes are automatically created for each property of its IdentityAttribute value type that can be interpreted as another IdentityAttribute value type. These RepositoryAttributes are also referred to as children of the RepositoryAttribute belonging to the complex IdentityAttribute. The `id` of their parent is contained within their `parentId` property. The generation of these RepositoryAttributes makes it possible to share individual components of a complex IdentityAttribute. For example, if an IdentityAttribute of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) has been created, it is possible to share only the `year` of birth with peers, instead of the full date of birth. The corresponding IdentityAttribute of type [BirthYear]({% link _docs_integrate/attribute-values.md %}#birthyear) does not have to be created manually, but is created automatically after the IdentityAttribute of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) has been created.

Please note that when creating a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) that contains a complex IdentityAttribute in its `content` property, additional LocalAttributes are only created automatically if the LocalAttribute is a RepositoryAttribute. However, if the LocalAttribute is an own shared IdentityAttribute or peer shared IdentityAttribute, no additional LocalAttributes are created. More details on the terminology relating to [LocalAttributes and IdentityAttributes]({% link _docs_integrate/attribute-introduction.md %}#localattributes-and-identityattributes) can be found in the next section.
{: .notice--info}

### LocalAttributes and IdentityAttributes

From a technical perspective, an IdentityAttribute is always stored as the `content` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute). Depending on the values of certain properties of the LocalAttribute, a LocalAttribute whose `content` is given by an IdentityAttribute is also referred to as a **RepositoryAttribute**, an **own shared IdentityAttribute** or a **peer shared IdentityAttribute**.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/62b3b352-a6d7-4826-8693-e8527b0370e4" id="zVGxoOkr.UEQ"></iframe></div>

#### RepositoryAttributes

As already mentioned in the section on [complex IdentityAttributes]({% link _docs_integrate/attribute-introduction.md %}#complex-identityattributes), a RepositoryAttribute is a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) whose `shareInfo` property is undefined and whose `content` is given by an IdentityAttribute owned by yourself. A RepositoryAttribute is created when an Identity [creates an IdentityAttribute for itself]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-an-identityattribute-for-yourself). If the IdentityAttribute is a complex IdentityAttribute, RepositoryAttributes are also created for the properties of the IdentityAttribute value type, which can be interpreted as other IdentityAttribute value types. An Identity may share the underlying IdentityAttribute of a RepositoryAttribute with one of its peers. This can be done by using a suitable Request.

#### Own shared IdentityAttributes

When [exchanging the underlying IdentityAttribute of a RepositoryAttribute with a peer](#exchange-attributes-with-peers), two corresponding copies of the RepositoryAttribute, the own shared IdentityAttribute and the peer shared IdentityAttribute, are created. This makes it possible to record with whom an IdentityAttribute has been shared or from whom an IdentityAttribute has been received. If an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) is shared by its `owner`, an own shared IdentityAttribute is created as a copy of the associated RepositoryAttribute. An own shared IdentityAttribute is a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) for which, in contrast to the RepositoryAttribute, the `shareInfo` property is set. The `content` of the own shared IdentityAttribute is the same as that of the RepositoryAttribute. The Address of the peer with whom the IdentityAttribute is shared is contained within its `shareInfo.peer` property. Furthermore, the `id` of the RepositoryAttribute used as the source is stored in its `shareInfo.sourceAttribute` property. This is the case at least until the RepositoryAttribute used as the source has not been [deleted]({% link _docs_integrate/delete-attributes.md %}#delete-repositoryattributes). If an IdentityAttribute is shared by its `owner` with several peers, a corresponding number of own shared IdentityAttributes are generated.

#### Peer shared IdentityAttributes

If an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) is shared by its `owner`, this not only leads to the creation of an own shared IdentityAttribute as a copy of the associated RepositoryAttribute for the `owner` of the IdentityAttribute, but also to the creation of a peer shared IdentityAttribute for the peer with whom the IdentityAttribute was shared. A peer shared IdentityAttribute is a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) for which the `shareInfo` property is set. The Address of the `owner` of the IdentityAttribute is contained within its `shareInfo.peer` property. The `shareInfo.sourceAttribute` property of a peer shared IdentityAttribute is always undefined, as the RepositoryAttribute used as the source is only stored locally for the `owner` of the IdentityAttribute. Furthermore, note that the `id` of a peer shared IdentityAttribute is always the same as the `id` of the associated own shared IdentityAttribute. To ensure the privacy of an Identity's data, the IdentityAttribute shared by its `owner` with a peer cannot be shared by that peer with a third party.

## RelationshipAttributes

A [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) is used to store data that is relevant in the context of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between two Identities. Both Identities involved in the Relationship must agree to its creation. RelationshipAttributes are specific to a Relationship. In the context of a single Relationship, each RelationshipAttribute has its unique `key` for identification. RelationshipAttributes can be shared with third parties as long as their `confidentiality` is not `"private"`. Sharing a RelationshipAttribute with third parties that are not involved in the Relationship in which the RelationshipAttribute exists leads to the creation of ThirdPartyRelationshipAttributes.

For information on how to establish Relationships, refer to the [Establish Relationships]({% link _docs_integrate/establish-relationships.md %}) scenario documentation.
{: .notice--info}

### RelationshipAttribute value types

The [RelationshipAttribute value types]({% link _docs_integrate/attribute-values.md %}#relationship-attributes) are used to define the type of the `value` property of a RelationshipAttribute. In order to fulfill various purposes, many such RelationshipAttribute value types are provided. Examples of RelationshipAttribute value types are [ProprietaryString]({% link _docs_integrate/attribute-values.md %}#proprietarystring) and [ProprietaryEMailAddress]({% link _docs_integrate/attribute-values.md %}#proprietaryemailaddress). In contrast to IdentityAttributes, RelationshipAttributes are not divided into simple RelationshipAttributes and complex RelationshipAttributes depending on the value type. Nevertheless, the RelationshipAttribute value type [Consent]({% link _docs_integrate/attribute-values.md %}#consent) should be highlighted, as it differs slightly from the other RelationshipAttribute value types. Accordingly, with the [Request persistent consent of peer]({% link _docs_integrate/request-persistent-consent-of-peer.md %}) scenario documentation, there is a separate guide for creating RelationshipAttributes with Consent as RelationshipAttribute value type.

### LocalAttributes and RelationshipAttributes

From a technical perspective, a RelationshipAttribute is always stored as the `content` of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute). Depending on the values of certain properties of the LocalAttribute, a LocalAttribute whose `content` is given by a RelationshipAttribute is also referred to as an **own shared RelationshipAttribute**, a **peer shared RelationshipAttribute** or a **third party owned RelationshipAttribute**.

In the context of sharing a RelationshipAttribute with third parties that are not involved in the Relationship in which the RelationshipAttribute exists, an own shared RelationshipAttribute that is originated from another own shared RelationshipAttribute is also referred to as an **own shared ThirdPartyRelationshipAttribute**. Its counterpart is then also referred to as a **peer shared ThirdPartyRelationshipAttribute**. Since third party owned RelationshipAttributes always originate from peer shared RelationshipAttributes, it is not at all necessary to introduce the term third party owned ThirdPartyRelationshipAttributes.
{: .notice--info}

<div style="width: 640px; height: 720px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:720px" src="https://lucid.app/documents/embedded/dd79b31c-0404-48bb-9773-9b989801c03c" id="RbDyLSjh7BzY"></iframe></div>

#### Own shared RelationshipAttributes

A [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) can only exist in the context of a Relationship and must therefore be stored locally for both Identities involved in the Relationship.
Accordingly, the [creation of a RelationshipAttribute]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-a-relationshipattribute) corresponds to the creation of one [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) for its `owner` and one LocalAttribute for the peer with whom the `owner` has established a Relationship. The own shared RelationshipAttribute is the LocalAttribute of the `owner` of the RelationshipAttribute. Of course, the `shareInfo` property of the own shared RelationshipAttribute is set. Within the `shareInfo.peer` property, the Address of the peer to which the RelationshipAttribute `owner` has established the Relationship is specified. If the RelationshipAttribute is initially created for a specific Relationship and does not originate from another RelationshipAttribute, the `shareInfo.sourceAttribute` property is undefined. Note that it is possible to share the underlying RelationshipAttribute of an own shared RelationshipAttribute with third parties, provided that the `confidentiality` of the RelationshipAttribute is not `"private"`. The sharing of the RelationshipAttribute by its `owner` with a third party would in turn be technically documented by the creation of another own shared RelationshipAttribute, which contains the Address of the third party within its `shareInfo.peer` property. However, as this own shared RelationshipAttribute originates from another own shared RelationshipAttribute, it contains the `id` of the source own shared RelationshipAttribute within its `shareInfo.sourceAttribute` property.

Sometimes an own shared RelationshipAttribute is referred to as an own shared ThirdPartyRelationshipAttribute. This is the case if it originates from another own shared RelationshipAttribute that exists in the context of a different Relationship. An own shared ThirdPartyRelationshipAttribute can be identified by the fact that the `id` of the own shared RelationshipAttribute used as the source is stored in its `shareInfo.sourceAttribute` property. This is the case at least until the own shared RelationshipAttribute used as the source has not been [deleted]({% link _docs_integrate/delete-attributes.md %}#delete-own-shared-attributes).
{: .notice--info}

#### Peer shared RelationshipAttributes

As already mentioned, the creation of a RelationshipAttribute corresponds to the creation of one LocalAttribute for its `owner` and one LocalAttribute for the peer with whom the `owner` has established a Relationship. The peer shared RelationshipAttribute is the peer's LocalAttribute and therefore forms the counterpart of the own shared RelationshipAttribute. The `id` of a peer shared RelationshipAttribute is always the same as the `id` of the associated own shared RelationshipAttribute. As with the own shared RelationshipAttribute, the `shareInfo` property of a peer shared RelationshipAttribute is of course set. Within the `shareInfo.peer` property, the Address of the `owner` of the RelationshipAttribute is specified. In any case, the `shareInfo.sourceAttribute` property of a peer shared RelationshipAttribute is undefined. This is plausible if the RelationshipAttribute is initially created for a specific Relationship and does not originate from another RelationshipAttribute, but this is also the case if it originates from another.

Sometimes a peer shared RelationshipAttribute is referred to as a peer shared ThirdPartyRelationshipAttribute. This is the case if it can be interpreted as a counterpart of an own shared ThirdPartyRelationshipAttribute. Note that the `shareInfo.sourceAttribute` property of a peer shared ThirdPartyRelationshipAttribute is always undefined, as the own shared RelationshipAttribute used as the source can only be available locally to its owner.
{: .notice--info}

Although the peer is not its `owner`, the underlying RelationshipAttribute of a peer shared RelationshipAttribute can be shared with third parties if its `confidentiality` is not `"private"`. The sharing of the RelationshipAttribute by the peer with another Identity is technically documented by the creation of a so-called third party owned RelationshipAttribute.

#### Third party owned RelationshipAttributes

This contains the Address of the third party within its `shareInfo.peer` property. However, as this third party owned RelationshipAttribute originates from a peer shared RelationshipAttribute, it contains the `id` of the source peer shared RelationshipAttribute within its `shareInfo.sourceAttribute` property.

The so-called third party owned RelationshipAttributes originate from peer shared RelationshipAttributes.

Note that the `shareInfo.sourceAttribute` property of a third party owned ThirdPartyRelationshipAttribute is only defined for the peer for that the peer shared RelationshipAttribute used as the source exists in the Relationship to a third party. This is the case at least until the peer shared RelationshipAttribute used as the source has not been [deleted]({% link _docs_integrate/delete-attributes.md %}#delete-peer-shared-attributes).

RelationshipAttributes owned by third parties could always be referred to as ThirdPartyRelationshipAttributes. Therefore, instead of third party owned ThirdPartyRelationshipAttributes, it is simply referred to as third party owned RelationshipAttributes. We do not need to speak of third party owned ThirdPartyRelationshipAttributes at all.
{: .notice--info}

## Attribute management options

The IdentityAttributes and RelationshipAttributes were previously introduced. Regardless of whether an Attribute is an IdentityAttribute or a RelationshipAttribute, various operations can be performed with Attributes. These are described on separate documentation pages. In the following, the most important Attribute management options are briefly described.

### Create Attributes for yourself

Obviously, it is not possible to work with Attributes that have not yet been created. Therefore, the most important feature is the [creation of Attributes for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}).

### Exchange Attributes with peers

Attributes can not only be managed locally, but can also be exchanged with peers. There is the option of [sharing Attributes with peers]({% link _docs_integrate/share-attributes-with-peer.md %}), [reading Attributes from peers]({% link _docs_integrate/read-attributes-from-peer.md %}), [creating Attributes for peers]({% link _docs_integrate/create-attributes-for-peer.md %}) and [proposing Attributes to peers]({% link _docs_integrate/propose-attributes-to-peer.md %}).

### Update Attributes by succession

If an Identity has created an Attribute that is owned by itself and is no longer valid, it has the option of [updating the Attribute by succession]({% link _docs_integrate/update-attributes-by-succession.md %}). The peers with whom the Identity may have shared the Attribute can be notified about the update of the Attribute.

### Delete Attributes

An Identity may have created an Attribute or received an Attribute from a peer that it does not need any longer. In this case, it can [delete the Attribute]({% link _docs_integrate/delete-attributes.md %}). If an Identity has shared an Attribute that is owned by itself with a peer, it can [request the deletion of this Attribute from the peer]({% link _docs_integrate/delete-attributes.md %}#request-the-deletion-of-own-attributes-from-peer) in order to withdraw their permission to use the Attribute.
