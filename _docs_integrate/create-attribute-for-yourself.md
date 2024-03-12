---
# Start automatic generation
permalink: integrate/create-attribute-for-yourself
published: false
title: "Create Attribute for yourself"
type: scenario
toc: true
properties:
  - id: SC049
  - category: Manage attributes of yourself
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DONE
  - documentation status: OPEN
  - published:
  - link: create-attribute-for-yourself
require:
  - integrate/identityattribute-introduction
required_by:
  - integrate/test-your-requests-validity
# End automatic generation

---

This guide explains the end to end flow of creating an [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) for your own Connector as its Integrator. As there are two types of Attributes, [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) and [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), a distinction must be made between them when creating an Attribute for yourself.

## Create an IdentityAttribute for yourself

This section is about how to create an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) for your own Connector that is not initially shared with any other Identity. From a technical point of view, this corresponds to the creation of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) whose `content` is given by the IdentityAttribute that is intended to be created and whose `shareInfo` is undefined. Such a LocalAttribute is referred to as a RepositoryAttribute.

Since knowledge about IdentityAttributes is required in the following, you should take a look at our IdentityAttribute introduction before you continue reading this guide. In particular, a description of the two kinds of IdentityAttributes, the simple IdentityAttributes and the complex IdentityAttributes, can be found there.
{: .notice--info}

<!--- TODO: Insert link to "IdentityAttribute introduction" --->

### Input for creating a RepositoryAttribute

To create a RepositoryAttribute, proceed as described in the [Create a RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-create-a-repositoryattribute.md %}) use case documentation. As input for the creation of a RepositoryAttribute, the following `content` must be used:

```jsonc
{
  "content": {
    "validFrom": "<start of IdentityAttribute's validity>",
    "validTo": "<end of IdentityAttribute's validity>",
    "value": {
      // IdentityAttributeValue
      ...
    },
    "tags": ["<additional information 1>", ..., "<additional information n>"]
  }
}
```

You need to replace the placeholders marked with `<...>` appropriately. Also, it is necessary that you insert one of the available [IdentityAttributeValues]({% link _docs_integrate/attribute-values.md %}#identity-attributes) into the `value` property. Note that the properties `validFrom`, `validTo` and `tags` are optional, so you can omit them.

### Process of creating a RepositoryAttribute

As you can see from the diagram below, after you have entered the [input for creating a RepositoryAttribute]({% link _docs_integrate/create-attribute-for-yourself.md %}#input-for-creating-a-repositoryattribute), a check is performed whether the input values for the properties of the specified [IdentityAttributeValue]({% link _docs_integrate/attribute-values.md %}#identity-attributes) meet the validation criteria documented on the [Attribute Values]({% link _docs_integrate/attribute-values.md %}) page. If the validation is not successful, an [error message]({% link _docs_integrate/error-codes.md %}) is sent in response. Otherwise, a RepositoryAttribute is created that contains the IdentityAttribute in its `content` property. If it is a simple IdentityAttribute, a success response is sent directly. In the case of a complex IdentityAttribute, on the other hand, another RepositoryAttribute is created beforehand for each of its appropriate properties. These RepositoryAttributes for the properties are also referred to as children of the RepositoryAttribute belonging to the complex IdentityAttribute. The `id` of their parent is contained within their `parentId` property. Note that the successful creation of a LocalAttribute, and therefore in particular the creation of a RepositoryAttribute, triggers the `consumption.attributeCreated` [Connector event]({% link _docs_integrate/connector-events.md %}).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/310cea0e-6f6f-4ee0-9efd-55e180ec5dda" id="WT4OFNWd3bcS"></iframe></div>

### Example of creating a simple IdentityAttribute

An example of a simple IdentityAttribute is one of type [DisplayName]({% link _docs_integrate/attribute-values.md %}#displayname). To create one for your own Connector without specifying optional parameters, the following `content` must be used:

```jsonc
{
  "content": {
    "value": {
      "@type": "DisplayName",
      "value": "<display name of your own Connector>"
    }
  }
}
```

Assuming that the input value for the Connector's display name specified in the `value.value` property meets the [validation criterion]({% link _docs_integrate/attribute-values.md %}#displayname), which means that the entered name does not have more than 100 characters, the IdentityAttribute is saved as a RepositoryAttribute and a success response is sent.

### Example of creating a complex IdentityAttribute

An example of a complex IdentityAttribute is one of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate). To create one for your own Connector without specifying optional parameters, the following `content` must be used:

```jsonc
{
  "content": {
    "value": {
      "@type": "BirthDate",
      "day": <day of birth date>,
      "month": <month of birth date>,
      "year": <year of birth date>
    }
  }
}
```

Assuming that the input values ​​for the properties `value.day`, `value.month` and `value.year` meet the [validation criteria]({% link _docs_integrate/attribute-values.md %}#birthdate), which means, for example, that the input value for `value.month` is an integer between 1 and 12, the IdentityAttribute is saved as a RepositoryAttribute. The properties `value.day`, `value.month` and `value.year` can each be understood as an additional simple IdentityAttribute of type [BirthDay]({% link _docs_integrate/attribute-values.md %}#birthday), [BirthMonth]({% link _docs_integrate/attribute-values.md %}#birthmonth) and [BirthYear]({% link _docs_integrate/attribute-values.md %}#birthyear), respectively. For this reason, another RepositoryAttribute is created internally for each of these properties before a success response is sent. So for the RepositoryAttribute, which belongs to the complex IdentityAttribute of type BirthDate, a total of three children are created.

### What's next?

When you have successfully created an IdentityAttribute for your own Connector, you will receive a success response. From the result, you can get the `id` of the corresponding RepositoryAttribute belonging to the IdentityAttribute. You will need this `id`, for example, if you want to share the underlying IdentityAttribute with other Identities later, as in the [Share own Attribute to peer]({% link _docs_integrate/share-own-attribute-to-peer.md %}) scenario.

## Create a RelationshipAttribute for yourself

If you want to create a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), you must proceed differently than when [creating an IdentityAttribute for yourself]({% link _docs_integrate/create-attribute-for-yourself.md %}#create-an-identityattribute-for-yourself). This is because a RelationshipAttribute can only exist in the context of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with a peer, which means that they must also agree to the creation of it. This is achieved by sending a [Request]({% link _docs_integrate/data-model-overview.md %}#request) whose `items` property contains an appropriate [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitems), which must be accepted by the peer. Depending on whether you or your peer should set the [RelationshipAttributeValue]({% link _docs_integrate/attribute-values.md %}#relationship-attributes) and depending on other factors, a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem), [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem), [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) or [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) should be used for this.

From a technical point of view, the creation of a RelationshipAttribute corresponds to the creation of one [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) for yourself and one LocalAttribute for your peer, whereby their `content` is given by the RelationshipAttribute that is intended to be created and the `shareInfo` of both LocalAttributes contains a correspondingly suitable [LocalAttributeShareInfo]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo).
{: .notice--info}

### Utilization of a CreateAttributeRequestItem

You can use a [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) to create a RelationshipAttribute in the context of a Relationship between you and your peer if you want the RelationshipAttributeValue to be set by yourself. Your peer can only accept or reject the creation of the RelationshipAttribute, but cannot modify the RelationshipAttributeValue. A RelationshipAttribute that you want to create using a CreateAttributeRequestItem can be owned by yourself or by your peer. For full details on how to create a RelationshipAttribute using a CreateAttributeRequestItem, please refer to the [Create Attribute for peer]({% link _docs_integrate/create-attribute-for-peer.md %}) guide.

### Utilization of a ReadAttributeRequestItem

You can use a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem) to create a RelationshipAttribute in the context of a Relationship between you and your peer if you want the RelationshipAttributeValue to be set by your peer. Even if it seems misleading to use a ReadAttributeRequestItem to create a RelationshipAttribute, this terminology makes sense insofar as the RelationshipAttributeValue should be read from the peer in order to be able to create the RelationshipAttribute. A RelationshipAttribute that you want to create using a ReadAttributeRequestItem can be owned by yourself, your peer or even a third party. For full details on how to create a RelationshipAttribute using a ReadAttributeRequestItem, please refer to the [Read Attribute from peer]({% link _docs_integrate/read-attribute-from-peer.md %}) guide.

### Utilization of a ProposeAttributeRequestItem

You can use a [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) to create a RelationshipAttribute in the context of a Relationship between you and your peer if you want to propose a potentially suitable RelationshipAttributeValue to your peer, but your peer has the option to modify it before the RelationshipAttribute is created. A RelationshipAttribute that you want to create using a ProposeAttributeRequestItem must be owned by your peer. All details on how to create a RelationshipAttribute using a ProposeAttributeRequestItem can be found in the [Propose Attribute to peer]({% link _docs_integrate/propose-attribute-to-peer.md %}) guide.

### Utilization of a ShareAttributeRequestItem

You can use a [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) to create a RelationshipAttribute in the context of a Relationship between you and your peer if you want to use an existing RelationshipAttribute between you and a third party as the source for creating the new RelationshipAttribute. Your peer can only accept or reject the creation of it, but cannot modify it. A RelationshipAttribute that you want to create using a ShareAttributeRequestItem can be owned by yourself or the third party, but not by your peer. All details on how to create a RelationshipAttribute using a ShareAttributeRequestItem can be found in the [Share own Attribute to peer]({% link _docs_integrate/share-own-attribute-to-peer.md %}) guide.
