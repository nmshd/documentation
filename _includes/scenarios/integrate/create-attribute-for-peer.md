There are many situations in which an Identity wants to create an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) for another Identity, for example:

- A university wants to send a graduate their degree certificate.
- A company wants to provide an employee with their business [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) at the start of their employment.

In this guide, we explain how a Connector, hereinafter referred to as the Sender, can create an Attribute for another Connector, the so-called Recipient. Since understanding this creation process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our Request and Response introduction before continuing reading this guide.

<!--- TODO: Insert Link to "Request and Response introduction" guide --->

There are several ways in which an Identity can create an Attribute for a peer. This guide covers how an Identity can request the creation of an Attribute for a peer so that the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is only set by the Identity itself and cannot be modified by the peer when accepting the [Request]({% link _docs_integrate/data-model-overview.md %}#request). If the peer should be able to adjust the Attribute proposed for creation, the Propose attribute to peer guide must be consulted instead.
{: .notice--info}

<!--- TODO: Insert Link to "Propose attribute to peer" guide --->

## Request for creating Attributes

The Sender wants to create an Attribute for the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. We will now describe the general appearance of such a Request, using the `<...>` notation as a placeholder for the actual data as usual:

| Property      | Value                                                                                                                                                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | `"<title of Request>"`                                                                                                                                                                                                                                                       |
| `description` | `"<description of Request>"`                                                                                                                                                                                                                                                 |
| `expiresAt`   | `"<expiration date of Request>"`                                                                                                                                                                                                                                             |
| `metadata`    | `<custom metadata sent together with Request>`                                                                                                                                                                                                                               |
| `items`       | Array of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem) and [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) that are part of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) |

To ensure that you have created an appropriate Request, you should always test your Request's Validity beforehand.
{: .notice--info}

<!--- TODO: Insert Link to guide "test your Request's Validity" --->

### Description of CreateAttributeRequestItem

For requesting the creation of a single Attribute for the Recipient, a single [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [CreateAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem) must be inserted into the `items` property of the [Request]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes). This looks as follows:

| Property                | Value                                                                                                                                                                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`                 | `"CreateAttributeRequestItem"`                                                                                                                                                                                                                 |
| `title`                 | `"<title of RequestItem>"`                                                                                                                                                                                                                     |
| `description`           | `"<description of RequestItem>"`                                                                                                                                                                                                               |
| `mustBeAccepted`        | `true` or `false`, depending on whether this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) must be accepted by the Recipient                                                                                    |
| `requireManualDecision` | `true` or `false`, depending on whether the Recipient must make a manual decision about accepting or rejecting this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem)                                               |
| `metadata`              | `<custom metadata sent together with RequestItem>`                                                                                                                                                                                             |
| `attribute`             | [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that the Sender wants to create for the Recipient |

It is possible to request the creation of an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), which must be inserted into the `attribute` property of the [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem). Depending on whether an IdentityAttribute or a RelationshipAttribute is to be created for the Recipient, the Sender has a different number of input options when defining the prospective `owner` of the Attribute. More details on the various input options when creating a [Request for creating an Attribute]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) and the corresponding application scenarios can be found in the description of the [Combinations and usage scenarios]({% link _docs_integrate/requests-and-requestitems.md %}#createattributerequestitem-combinationsandusagescenarios) of the CreateAttributeRequestItem.

Please note that not all of the properties listed here have to be specified when creating a Request for creating Attributes. Some of the properties are optional and can therefore be omitted. Only values for the `items` property of the [Request]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes) itself and for the properties `@type`, `mustBeAccepted` and `attribute` of the [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) must be specified.
{: .notice--info}

### Example for creating an IdentityAttribute

We assume that the Integrator of the Sender wants to create an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of type [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) for the Recipient:

<!--- TODO: Insert link to "Create own IdentityAttribute" guide --->

| Property      | Value                                                                 |
| ------------- | --------------------------------------------------------------------- |
| `@type`       | `"IdentityAttribute"`                                                 |
| `owner`       | `"<Address of Recipient>"`                                            |
| `value.@type` | `"EMailAddress"`                                                      |
| `value.value` | `"<email address that the Sender wants to create for the Recipient>"` |

To request the creation of this IdentityAttribute for the Recipient, the Sender needs to insert it into the `attribute` property of the [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) contained within the `items` property of the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/db914817-6b8b-4119-8f5f-f15d48a7854c" id="XmLTn.emFtK~"></iframe></div>

### Example for creating a RelationshipAttribute

We now consider the case in which the Sender has an active [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the Recipient and wants to create a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) of type [ProprietaryString]({% link _docs_integrate/attribute-values.md %}#proprietarystring) for this Relationship, which is owned by the Recipient:

| Property          | Value                                                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@type`           | `"RelationshipAttribute"`                                                                                                                                                            |
| `owner`           | `"<Address of Recipient>"`                                                                                                                                                           |
| `key`             | `"<key of RelationshipAttribute>"`                                                                                                                                                   |
| `confidentiality` | Level of confidentiality the [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) should have (`"public"`, `"protected"` or `"private"`) |
| `value.@type`     | `"ProprietaryString"`                                                                                                                                                                |
| `value.title`     | `"<title of RelationshipAttribute>"`                                                                                                                                                 |
| `value.value`     | `"<actual value of RelationshipAttribute>"`                                                                                                                                          |

It would also be possible to specify the Address of the Sender as the value for the `owner` property if you want that the [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) is owned by the Sender instead of the Recipient.
{: .notice--info}

The Sender can request the creation of this RelationshipAttribute by inserting it into the `attribute` property of the [CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) included in the `items` property of the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/e1b8cefc-6968-479b-9a1b-7d35088d753a" id="keMT2BRBKzrb"></iframe></div>

### Create multiple Attributes with a RequestItemGroup

It is not necessary to create just a single Attribute for a peer. Instead, it is also possible to request the creation of multiple Attributes at the same time. For this purpose, several [CreateAttributeRequestItems]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request for creating Attributes]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes). The general structure of a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) is as follows:

| Property         | Value                                                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`          | `"RequestItemGroup"`                                                                                                                                                  |
| `title`          | `"<title of RequestItemGroup>"`                                                                                                                                       |
| `description`    | `"<description of RequestItemGroup>"`                                                                                                                                 |
| `mustBeAccepted` | `true` or `false`, depending on whether this [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) must be accepted by the Recipient |
| `metadata`       | `<custom metadata sent together with RequestItemGroup>`                                                                                                               |
| `items`          | Array of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitem)                                                                                |

So if you want to use a [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) in order to create multiple Attributes for the Recipient at the same time, you must insert corresponding [CreateAttributeRequestItems]({% link _docs_integrate/create-attribute-for-peer.md %}#description-of-createattributerequestitem) into the `items` property of it. Note that the properties `title`, `description` and `metadata` are optional, so you can omit them.

## What's next?

As already mentioned, this guide covers how an Identity can request the creation of an Attribute for a peer so that the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is only set by the Identity itself and cannot be modified by the peer when accepting the [Request]({% link _docs_integrate/create-attribute-for-peer.md %}#request-for-creating-attributes). In many cases, it makes more sense if the peer can adjust the Attribute that was proposed for creation. For this, take a look at the Propose attribute to peer guide.

<!--- TODO: Insert link to scenario description "Propose attribute to peer" --->

<!--- Prerelease:
 {% include warnings/documentation-is-prerelease %}

# Flow

It is possible for an Identity to create an Attribute for another Identity. To achieve this, a Request must be sent to the peer Identity with respective RequestItems. The peer identity must manually accept the Request. Options to create Attributes:

- A CreateAttributeRequestItem to create a given Attribute that the peer can accept and thus an attribute is created. The peer is not able to change/overrule this Attribute value. This is great for reusable information which shouldn't be changed by the Identity, e.g. a certificate.
- A ProposeAttributeRequestItem to propose a given Attribute to the peer. The peer is able to overrule this Attribute and instead select a different Attribute to use. This comes in handy if one knows personal information of a peer, but does not know if this personal information is still valid.

To avoid misunderstandings and conflicts, usually it is better to use ProposeAttributeRequestItems for changing data of the peer, so that the peer has the option of overruling the Attribute to be saved.

# Examples

- An organization onboards an already known account to enmeshed, i.e. it knows the peer and thus could create/propose attribute to the enmeshed Identity
- An organization would like to submit something to the peer, which is reuseable, e.g. a certificate which the peer can share to others
--->
