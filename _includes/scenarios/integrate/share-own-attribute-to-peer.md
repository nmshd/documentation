There are many situations in which an Identity wants to share an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) with another Identity, for example:

- You want to share your [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) in order to be able to receive emails from another Identity.
- You want to tell another Identity about your [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) so that you can possibly get special vouchers from this Identity on your birthday.

In this guide, we will explain how a Connector, hereinafter referred to as the Sender, can share an own Attribute with another Connector, the so-called Recipient. Since understanding this sharing process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should check out our Request and Response introduction before you continue reading this guide.

<!--- TODO: Insert Link to "Request and Response introduction" guide --->

## Request for sharing Attributes

The Sender wants to share an own Attribute with the Recipient. To do this, the Sender must first create a suitable [Request]({% link _docs_integrate/data-model-overview.md %}#request), which it can then send to the Recipient. We will now describe the general appearance of such a Request, where we use the notation `<...>` as usual as a placeholder for the actual data:

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

### Description of ShareAttributeRequestItem

For sharing a single Attribute, you need to insert a single [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) of type [ShareAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem) into the `items` property of the [Request]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes). This looks as follows:

| Property                | Value                                                                                                                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`                 | `"ShareAttributeRequestItem"`                                                                                                                                                                                                 |
| `title`                 | `"<title of RequestItem>"`                                                                                                                                                                                                    |
| `description`           | `"<description of RequestItem>"`                                                                                                                                                                                              |
| `mustBeAccepted`        | `true` or `false`, depending on whether this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem) must be accepted by the Recipient                                                                   |
| `requireManualDecision` | `true` or `false`, depending on whether the Recipient must make a manual decision about accepting or rejecting this [RequestItem]({% link _docs_integrate/data-model-overview.md %}#requestitem)                              |
| `metadata`              | `<custom metadata sent together with RequestItem>`                                                                                                                                                                            |
| `attribute`             | Own [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribut) or own [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) the Sender wants to share |
| `sourceAttributeId`     | `"<ID of LocalAttribute which is the source of the shared Attribute>"`                                                                                                                                                        |

The Sender can only share an Attribute that already exists as a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) and that belongs to itself. The latter means that the Address of the Sender is contained in the `content.owner` property of the corresponding LocalAttribute. The `id` of the LocalAttribute must be inserted into the `sourceAttributeId` property and the `content` of the LocalAttribute into the `attribute` property of the [ShareAttributeRequestItem]({% link _docs_integrate/requests-and-requestitems.md %}#shareattributerequestitem).

Please note that not all of the properties listed here have to be specified when creating a Request for sharing Attributes. Some of the properties are optional and can therefore be omitted. Only values for the `items` property of the [Request]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes) itself and for the properties `@type`, `mustBeAccepted`, `attribute` and `sourceAttributeId` of the RequestItem of type [ShareAttributeRequestItem]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) are required to be specified.
{: .notice--info}

### Example for sharing an IdentityAttribute

We assume that the Integrator of the Sender has created an own [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) for the Sender by following the instructions of our Create own IdentityAttribute scenario documentation:

<!--- TODO: Insert link to "Create own IdentityAttribute" guide --->

| Property      | Value                   |
| ------------- | ----------------------- |
| `@type`       | `"IdentityAttribute"`   |
| `owner`       | `"<Address of Sender>"` |
| `value.@type` | `"BirthDate"`           |
| `value.day`   | `<day>`                 |
| `value.month` | `<month>`               |
| `value.year`  | `<year>`                |

This IdentityAttribute is stored locally within the `content` property of a corresponding LocalAttribute of the Sender:

| Property    | Value                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`     | `"LocalAttribute"`                                                                                                                                                                           |
| `id`        | `"<ID of LocalAttribute>"`                                                                                                                                                                   |
| `createdAt` | `"<creation date of LocalAttribute>"`                                                                                                                                                        |
| `content`   | Own [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of type [BirthDate]({% link _docs_integrate/attribute-values.md %}#birthdate) as just described |

In our example, the Sender wants to share this IdentityAttribute with the Recipient. To do so, insert the `id` of the LocalAttribute into the `sourceAttributeId` property and the `content` of the LocalAttribute into the `attribute` property of the [ShareAttributeRequestItem]({% link _docs_integrate/share-own-attribute-to-peer.md %}#description-of-shareattributerequestitem) contained within the `items` property of the [Request for sharing Attributes]({% link _docs_integrate/share-own-attribute-to-peer.md %}#request-for-sharing-attributes):
