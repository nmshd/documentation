---
# Start automatic generation
permalink: integrate/exchange-files-using-attributes
published: true
title: "Exchange Files using Attributes"
type: scenario
toc: true
properties:
  - id: SC119
  - category: Manage Attributes
  - description: Upload File, create IdentityAttribute of IdentityFileReference value type for it and share this IdentityAttribute with peer in order to share the File
  - customer:
  - component: integrate
  - level:
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: exchange-files-using-attributes
require:
required_by:
# End automatic generation
---

Communication between Identities involves exchanging [uploaded Files](#upload-a-file) with each other, for example:

- A language school wants to send a student their language certificate.
- A university wants to send a student their certificate of enrollment.
- An applicant wants to send their curriculum vitae to a company.

These examples all represent cases where the [File]({% link _docs_integrate/data-model-overview.md %}#file) ought to be saved by the recipient for further use.
To this end, we store the File in the form of an [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes).
In contrast, it is also possible to send a simple File without an Attribute as an `attachment` of a [Message]({% link _docs_integrate/data-model-overview.md %}#message).
However, in this case the File cannot be further used by the recipient.
Thus, we only recommend to do so for Files that contain one-time-information for the recipient like a flyer.
{: .notice--info}

This guide describes how an Integrator of a Connector can use a certain kind of [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes), the [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference), to exchange Files.
To do so, the respective [File must be uploaded to the Backbone](#upload-a-file) first.
Then, an explanation of how to [share an own File with a peer](#share-an-own-file-with-a-peer) follows.
Also, [further options for exchanging Files](#further-options-for-exchanging-files), such as requesting the reading of a [File]({% link _docs_integrate/data-model-overview.md %}#file) from a peer, are touched upon.
Lastly, the scenario of [transferring the ownership of a File to a peer](#transfer-the-ownership-of-a-file-to-a-peer) is explained.
In contrast to the former case, this way the recipient becomes the owner of the actual File, that was uploaded to the Backbone by the sender.
This use case is especially important for certificates that the sender creates for the recipient.

The peer with whom a [File is exchanged using Attributes]({% link _docs_integrate/exchange-files-using-attributes.md %}) can be an Integrator of another Connector or an App user.
The [File]({% link _docs_integrate/data-model-overview.md %}#file) exchange flow described in this guide remains the same, even if some steps are performed automatically in the App.
{: .notice--info}

# Upload a File

In order to be able to [share a File with a peer](#share-an-own-file-with-a-peer) or to [transfer the ownership of a File to a peer](#transfer-the-ownership-of-a-file-to-a-peer), its content must first be uploaded to the Backbone in encrypted form.
To do this, consult the documentation of the [Upload own File]({% link _docs_use-cases/use-case-transport-upload-own-file.md %}) use case.
By uploading the [File]({% link _docs_integrate/data-model-overview.md %}#file), it is assigned an `id` and a `truncatedReference` with which it can be identified from now on.
Either of them can be specified as a parameter when executing the [Get File metadata]({% link _docs_use-cases/use-case-transport-get-file-metadata.md %}) use case in order to display the metadata information of the File.
In the context of exchanging Files, particular attention should be paid to the `truncatedReference` property of the File.
All Identities that know its value can download the encrypted content of the File from the Backbone and decrypt it.

# Share an Own File With a Peer

After [uploading a File](#upload-a-file), a certain kind of [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) can be used to share the value of the `truncatedReference` property of the [File]({% link _docs_integrate/data-model-overview.md %}#file) with other Identities.
To be more precise, this is an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type`.
An IdentityFileReference stores the value of the `truncatedReference` property of the File within its `value` property.
By [sending a suitable Request]({% link _docs_integrate/share-attributes-with-peer.md %}#send-and-receive-the-request), this IdentityAttribute can be shared with a `peer` of an already existing [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) or in the process of [establishing a Relationship]({% link _docs_integrate/establish-relationships.md %}).
If the peer accepts the Request, a peer shared IdentityAttribute will be created for them and they will gain read access to the underlying File, that was [uploaded to the Backbone](#upload-a-file).
For the sender an own shared IdentityAttribute will be created.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/849a579c-15c6-4b9a-a652-ea51c31bb622" id="bJaM.8pgwNP3"></iframe></div>

## Create an IdentityFileReference

After [uploading the File](#upload-a-file), an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) with an [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` and the `truncatedReference` of the uploaded [File]({% link _docs_integrate/data-model-overview.md %}#file) as its `value.value` can be created by proceeding as described in the documentation on how to [create an IdentityAttribute for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-an-identityattribute-for-yourself).
The following `content` can be used during the creation process, with its properties `validFrom`, `validTo` and `tags` being optional:

```jsonc
{
  "content": {
    "validFrom": "<start of IdentityFileReference's validity>",
    "validTo": "<end of IdentityFileReference's validity>",
    "value": {
      "@type": "IdentityFileReference",
      "value": "<truncatedReference of File>"
    },
    "tags": ["<tag of IdentityFileReference to be created>", ...]
  }
}
```

If an App user [uploads a File](#upload-a-file), such an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) with an [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` and the `truncatedReference` of the uploaded [File]({% link _docs_integrate/data-model-overview.md %}#file) as its `value.value` is created automatically in the background.
For this reason, it is directly available to the App user for sharing.
Furthermore, knowledge of this automation in the App should motivate Integrators of Connectors to strive to [exchange Files using Attributes]({% link _docs_integrate/exchange-files-using-attributes.md %}) in order to achieve File management compatibility between them and App users.
{: .notice--info}

## Share an IdentityFileReference

After the [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` and the `truncatedReference` of the uploaded [File]({% link _docs_integrate/data-model-overview.md %}#file) as its `value.value` has been created, the Integrator of the Connector must send a [suitable Request]({% link _docs_integrate/share-attributes-with-peer.md %}#request-for-sharing-attributes) to share it.
More details on how to share [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) can be found in the [Share Attributes with peer]({% link _docs_integrate/share-attributes-with-peer.md %}) scenario documentation.

## Load a Referenced File

Once the shared [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` has been obtained, its recipient has knowledge of its `value.value` and thus also of the `truncatedReference` of the [File]({% link _docs_integrate/data-model-overview.md %}#file) to be shared.
In order for the recipient to be authorized to [download]({% link _docs_use-cases/use-case-transport-download-file.md %}) the encrypted content of the File from the Backbone and decrypt it, they must first load the metadata information of the File.
This is done by executing the [Load File]({% link _docs_use-cases/use-case-transport-load-file.md %}) use case and specifying the `truncatedReference` of the File as the required `reference`.

Please note that it is also possible to store the `truncatedReference` of a [Token]({% link _docs_integrate/data-model-overview.md %}#token) for the File within the `value.value` property of the [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) `value.@type` instead of the `truncatedReference` of the [File]({% link _docs_integrate/data-model-overview.md %}#file) itself.
In this case, the [Token for the File must be created]({% link _docs_use-cases/use-case-transport-create-token-for-file.md %}) beforehand.
The advantage of using Tokens is that they can be personalized or password protected.
When executing the [Load File]({% link _docs_use-cases/use-case-transport-load-file.md %}) use case, the `truncatedReference` of the Token can be specified as the `reference`.
If the Token is password protected, the `password` must additionally be entered for loading.
{: .notice--info}

# Further Options for Exchanging Files

As for all other kinds of [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes), the [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) `value.@type` can be [read from a peer]({% link _docs_integrate/read-attributes-from-peer.md %}), [created for a peer]({% link _docs_integrate/create-attributes-for-peer.md %}) and [proposed to a peer]({% link _docs_integrate/propose-attributes-to-peer.md %}) by proceeding as described in the corresponding scenario documentation.
In addition, there is the option of [updating by succession]({% link _docs_integrate/update-attributes-by-succession.md %}) and [deletion]({% link _docs_integrate/delete-attributes.md %}).
However, the deletion of an IdentityAttribute that has IdentityFileReference as its `value.@type` does not additionally lead to the deletion of the associated uploaded encrypted content of the File on the Backbone.
This must be done separately if required.

## Utilization of a ProprietaryFileReference

Furthermore, it is possible to represent [uploaded Files](#upload-a-file) within a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) utilizing a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) that has [ProprietaryFileReference]({% link _docs_integrate/attribute-values.md %}#proprietaryfilereference) as its `value.@type` and the `truncatedReference` of the [File]({% link _docs_integrate/data-model-overview.md %}#file) as `value.value`.
It is advantageous to use such a RelationshipAttribute instead of an IdentityAttribute of [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) `value.@type` if the File fits more into the context of the Relationship and is less attributable to a single Identity.
An overview of the available options for [creating a RelationshipAttribute]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-a-relationshipattribute) can be found in the corresponding scenario documentation.

# Transfer the Ownership of a File to a Peer

If the sender creates a File for the recipient, simply [sharing the File](#share-an-own-file-with-a-peer) will not be enough.
That is, because the uploaded File on the Backbone will still belong to the sender.
Instead, the ownership of the File needs to be transferred to the recipient.
To this end, firstly the sender needs to [upload the File](#upload-a-file) to the Backbone.
Then, an appropriate [TransferFileOwnershipRequestItem]({% link _docs_integrate/data-model-overview.md %}#transferfileownershiprequestitem) must be sent to the peer, who shall become the new owner of the File.
If they accept it, the ownership of the File on the Backbone will be transferred to them.
Additionally, a [RepositoryAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) will be created for the recipient, whose `content` is an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) with [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as `value.@type`.
Moreover, this RepositoryAttribute will be shared with the sender, i.e. an own shared IdentityAttribute will be created for the recipient and a peer shared IdentityAttribute will be created for the sender.

## Request for Transferring the Ownership of a File

The sender wants to transfer the ownership of a File to the recipient.
To do so, the sender must first create a suitable Request, which they can then send to the recipient.
In the following subsections, we describe the general appearance of a Request for transferring the ownership of a File.

### Role of TransferFileOwnershipRequestItem

For transferring the ownership of a single File, the sender needs to insert a single RequestItem of type [TransferFileOwnershipRequestItem]({% link _docs_integrate/data-model-overview.md %}#transferfileownershiprequestitem) into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request).
The sender can only transfer the ownership of a File that was already [uploaded to the Backbone](#upload-a-file) and is owned by themselves.
The latter means that the `isOwn` property of the corresponding File is `true`.
To create the TransferFileOwnershipRequestItem, the `truncatedReference` of the File must be inserted into its `fileReference` property.

To get a list of all Files that are owned by the sender, proceed as described in the [Query metadata of own Files]({% link _docs_use-cases/use-case-transport-query-metadata-of-own-files.md %}) use case documentation.
{: .notice--info}

### Example of Transferring the Ownership of a File

We assume that the Integrator of the sender has [uploaded a File to the Backbone](#upload-a-file), whose ownership they want to transfer to the recipient.
To do so, they need to insert the `truncatedReference` of the corresponding File into the `fileReference` property of the [TransferFileOwnershipRequestItem]({% link _docs_integrate/data-model-overview.md %}#transferfileownershiprequestitem).
The value of the `mustBeAccepted` property is set to `true` in this example.
Then, the RequestItem needs to be put into the `item` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for transferring the ownership of Files.

```jsonc
{
  "@type": "Request",
  "items": [
    {
      "@type": "TransferFileOwnershipRequestItem",
      "mustBeAccepted": true,
      "fileReference": "<truncatedReference of the File>"
    }
  ]
}
```

### Transfer Ownership of Multiple Files

Transferring the ownership is not limited to just a single File, but it is possible to request the transfer of ownership of multiple Files at the same time.
For this purpose, several TransferFileOwnershipRequestItems or suitable [RequestItemGroups]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) can be inserted into the `items` property of the [Request]({% link _docs_integrate/data-model-overview.md %}#request) for transferring the File ownership.
If you want to use a RequestItemGroup in order to transfer the ownership of multiple Files to the recipient at the same time, you must insert corresponding TranferFileOwnershipRequestItems into the `items` property of it.

## Send and Receive the Request

The sender that wants to transfer the ownership of a File may or may not already have a Relationship with the recipient.
Depending on which is the case, a different method can be used to send the [Request for transferring the ownership of a File](#request-for-transferring-the-ownership-of-a-file).
There are two ways to send the Request for transferring the ownership of a File to the recipient.

### Request via RelationshipTemplate

If there is currently no Relationship between the sender and the recipient, this approach must be used.
However, it is also possible for the sender to use a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) to send a Request to the recipient if there is already an active Relationship between them.
All details on how to send and receive a Request via a RelationshipTemplate in general can be found in the [Requests via RelationshipTemplates]({% link _docs_integrate/requests-via-relationshiptemplates.md %}) guide.

### Request via Message

The sender only has the option of sending a Request to the recipient via a [Message]({% link _docs_integrate/data-model-overview.md %}#message) if there is already an active Relationship between them.
All information on how to send and receive a Request via a Message can be found in the [Requests via Messages]({% link _docs_integrate/requests-via-messages.md %}) guide.

## Accept the Request

<!-- TODO: insert picture? -->

After the recipient has received the [Request for transferring the ownership of Files](#request-for-transferring-the-ownership-of-a-file), they can accept it to receive the ownership of all or some of the sender's Files.
To do this, proceed as described in the [Accept incoming Request]({% link _docs_use-cases/use-case-consumption-accept-incoming-request.md %}) use case documentation and specify the `id` of the received [Request]({% link _docs_integrate/data-model-overview.md %}#request).
Also, you need to decide and specify for each TransferFileOwnershipRequestItem contained in the Request for transferring the ownership of Files whether you want to accept or reject it.

If the recipient does not want to receive the ownership of any of the sender's Files and, therefore, does not want to accept the Request for transferring the ownership of Files of the sender, they can reject it as a whole, too.
For that, follow the instructions of the [Reject incoming Request]({% link _docs_use-cases/use-case-consumption-reject-incoming-request.md %}) use case.
{: .notice--info}

### Accept a TransferFileOwnershipRequestItem

If the recipient agrees to receive the ownership of one of the sender's Files, they can accept the associated TransferFileOwnershipRequestItem.
The [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters) must be used for this.
The acceptance of a TransferFileOwnershipRequestItem leads to the transfer of the ownership of the File on the Backbone.
Additionally, a [RepositoryAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) will be created for the recipient, whose `content` is an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) with [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as `value.@type`.
The `value` of the IdentityFileReference is the `truncatedReference` of the File that is now owned by the recipient.
Also, the newly created RepositoryAttribute of the recipient will be shared with the sender, i.e. an own shared IdentityAttribute will be created for the recipient.
Based on this, an appropriate AcceptResponseItem of type [TransferFileOwnershipAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#transferfileownershipacceptresponseitem) is generated.
It contains the `id` and the `content` of the created own shared IdentityAttribute in its `attributeId` and `attribute` property, respectively.
This ResponseItem will appear within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for transferring the ownership of Files, which will be sent back to the sender.

Currently, there is no implementation for changing the actual ownership of a File that was uploaded to the Backbone.
Instead, accepting a TransferFileOwnershipRequestItem downloads the corresponding File and uploads it again to the Backbone, such that the recipient is its owner.
The created IdentityAttributes with `value.@type` IdentityFileReference reference this newly uploaded File.
Consequently, after receiving the Response, the sender can [delete their uploaded File]({% link _docs_use-cases/use-case-transport-delete-file.md %}) if they wish to do so, without impacting the File owned by the recipient.
{: .notice--warning}

### Reject a TransferFileOwnershipRequestItem

Even if the recipient accepts the Request for transferring the ownership of Files as a whole, it may decide not to accept the ownership of all of the sender's Files.
To be more precise, the recipient has the option of rejecting [TransferFileOwnershipRequestItems]({% link _docs_integrate/data-model-overview.md %}#transferfileownershiprequestitem) that have the value `false` specified in their `mustBeAccepted` property.
To reject a TransferFileOwnershipRequestItem, use the [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).
The rejection of a TransferFileOwnershipRequestItem leads to the creation of a corresponding ResponseItem of type [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem).
This will be contained within the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) to the Request for transferring the ownership of Files.

## Receive the Response to the Request

We now assume that the recipient has accepted the [Request for transferring the ownership of Files](#request-for-transferring-the-ownership-of-a-file) of the sender.
In order for the sender to receive the Response of the recipient, they need to [synchronize the updates of the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}).
Please note that this synchronization can also be automated by using the [Sync Module]({% link _docs_operate/modules.md %}#sync).

<!-- TODO: insert picture? -->

To view the Response to the Request, proceed as described in the [Query outgoing Requests]({% link _docs_use-cases/use-case-consumption-query-outgoing-requests.md %}) use case documentation and use the following query parameter:

- If the [Request was sent via a RelationshipTemplate]({% link _docs_integrate/share-attributes-with-peer.md %}#request-via-relationshiptemplate): Specify `<ID of RelationshipTemplate>` as the value for the `source.reference` query parameter.
- If the [Request was sent via a Message]({% link _docs_integrate/share-attributes-with-peer.md %}#request-via-message): Specify `<ID of Request>` as the value for the `id` query parameter.

The Integrator of the sender can now get the Response of the recipient from the `response.content` property of the result.
In the `items` property of the [Response]({% link _docs_integrate/data-model-overview.md %}#response) is a [TransferFileOwnershipAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#transferfileownershipacceptresponseitem) for each accepted TransferFileOwnershipRequestItem and a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) for each rejected TransferFileOwnershipRequestItem included.
Note that each accepted TransferFileOwnershipRequestItem leads to the creation of an appropriate [peer shared IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) of the sender.
The `content` and `id` of the LocalAttribute are the underlying `attribute` and `attributeId` of the TransferFileOwnershipAcceptResponseItem, respectively.

In case of an error, [ErrorResponseItems]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) can also be included in the Response.
If the Request for transferring the ownership of Files contains a RequestItemGroup in its `items` property, the Response to this Request contains a corresponding [ResponseItemGroup]({% link _docs_integrate/data-model-overview.md %}#responseitemgroup) in its `items` property.
{: .notice--info}
