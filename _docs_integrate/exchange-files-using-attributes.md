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

These examples all represent cases where the [File]({% link _docs_integrate/data-model-overview.md %}#file) should be stored by the recipient for further use.
To this end, we store the File in the form of an [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes).
In contrast, it is also possible to send a simple File without an Attribute as an `attachment` of a [Message]({% link _docs_integrate/data-model-overview.md %}#message).
However, in this case the File cannot be further used by the recipient.
Thus, we only recommend to do so for Files that contain one-time-information for the recipient like a flyer.
{: .notice--info}

This guide describes how an Integrator of a Connector can use a certain kind of [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes), the [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference), to exchange Files.
To do so, the repective [File must be uploaded to the Backbone](#upload-a-file) first.
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
Either one can be specified as a parameter when executing the [Get File metadata]({% link _docs_use-cases/use-case-transport-get-file-metadata.md %}) use case in order to display the metadata information of the File.
In the context of exchanging Files, particular attention should be paid to the `truncatedReference` property of the File.
All Identities that know its value can download the encrypted content of the File from the Backbone and decrypt it.

# Share an Own File With a Peer

After [uploading a File](#upload-a-file), a certain kind of [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) can be used to share the value of the `truncatedReference` property of the [File]({% link _docs_integrate/data-model-overview.md %}#file) with other Identities.
To be more precise, this is an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type`.
An IdentityFileReference stores the value of the `truncatedReference` property of the File within its `value` property.
By [sending a suitable Request]({% link _docs_integrate/share-attributes-with-peer.md %}#send-and-receive-the-request), this IdentityAttribute can be shared with a `peer` of an already existing [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) or in the process of [establishing a Relationship]({% link _docs_integrate/establish-relationships.md %}).
If the peer accepts the Request, a peer shared IdentityAttribute will be created for them and they will gain read access to the underlying File, that was [uploaded to the Backbone](#upload-a-file).

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

<!-- TOOD: -->
