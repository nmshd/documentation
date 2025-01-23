---
# Start automatic generation
permalink: integrate/exchange-files-by-using-attributes
published: true
title: "Exchange Files by using Attributes"
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
  - link: exchange-files-by-using-attributes
require:
required_by:
# End automatic generation
---

Communication between Identities involves exchanging [uploaded Files](#upload-a-file) with each other, for example:

- A language school wants to send a student their language certificate.
- A university wants to send a student their certificate of enrollment.
- An applicant wants to send their curriculum vitae to a company.

This guide describes how an Integrator of a Connector can use a certain kind of [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) to [share a File with a peer](#share-a-file-with-a-peer).
Furthermore, an understanding of this kind of Attribute is also necessary to make use of [further options for exchanging Files](#further-options-for-exchanging-files), such as requesting the reading of a [File]({% link _docs_integrate/data-model-overview.md %}#file) from a peer.

The peer with whom a File is exchanged by using Attributes can be an Integrator of another Connector or an App user.
The File exchange flow described in this guide remains the same, even if some steps are performed automatically in the App.
{: .notice--info}

# Upload a File

In order to be able to [share a File with a peer](#share-a-file-with-a-peer), the [File]({% link _docs_integrate/data-model-overview.md %}#file) must first be uploaded to the Backbone in encrypted form.
To do this, consult the documentation of the [Upload own File]({% link _docs_use-cases/use-case-transport-upload-own-file.md %}) use case.
By uploading the File, it has been assigned an `id` and a `truncatedReference` with which it can be identified from now on.
Both can be specified as a parameter when executing the [Get File]({% link _docs_use-cases/use-case-transport-get-file.md %}) use case in order to display the metadata information of the File.
In the context of exchanging Files, particular attention should be paid to the `truncatedReference` property of the File.
All Identities that know its value can load the File from the Backbone and decrypt it.

# Share a File With a Peer

After [uploading a File](#upload-a-file), a certain kind of [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) can be used to share the value of the `truncatedReference` property of the [File]({% link _docs_integrate/data-model-overview.md %}#file) with other Identities.
To be more precise, this is an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type`.
An IdentityFileReference stores the value of the `truncatedReference` property of the File within its `value` property.
By [sending a suitable Request]({% link _docs_integrate/share-attributes-with-peer.md %}#send-and-receive-the-request), this IdentityAttribute can be shared with a `peer` of an already existing [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) or in the process of [establishing a Relationship]({% link _docs_integrate/establish-relationships.md %}).

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/849a579c-15c6-4b9a-a652-ea51c31bb622" id="bJaM.8pgwNP3"></iframe></div>

## Create IdentityFileReference

Create the [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` by proceeding as described in the documentation on [creating an IdentityAttribute for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-an-identityattribute-for-yourself).
Provide the value of the `truncatedReference` property of the [uploaded File](#upload-a-file) as the `value` of the IdentityFileReference.

Other than with Connector Integrators, this IdentityAttribute is automatically created when an App user [uploads a File](#upload-a-file).
For this reason, it is directly available to the App user for sharing.
{: .notice--info}

## Share IdentityFileReference

To share a File, share the created IdentityAttribute that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` by sending a [suitable Request]({% link _docs_integrate/share-attributes-with-peer.md %}#request-for-sharing-attributes).
Details on how to share Attributes can be found in the [Share Attributes with peer]({% link _docs_integrate/share-attributes-with-peer.md %}) scenario documentation.

## Load the Referenced File

After the shared [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` has been received, its recipient has knowledge of its `value.value` and thus also of the `truncatedReference` of the [File]({% link _docs_integrate/data-model-overview.md %}#file) to be shared.
In order for the recipient to be authorized to [download]({% link _docs_use-cases/use-case-transport-download-file.md %}) the actual binary content of the File from the Backbone and decrypt it, they must first load the metadata information of the File.
This is done by executing the [Load File]({% link _docs_use-cases/use-case-transport-load-file.md %}) use case and specifying the `truncatedReference` of the File as the required `reference`.

Please note that it is also possible to store the `truncatedReference` of a [Token]({% link _docs_integrate/data-model-overview.md %}#token) for the File within the [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) `value.@type` instead of the `truncatedReference` of the [File]({% link _docs_integrate/data-model-overview.md %}#file) itself.
In this case, the [Token for the File must be created]({% link _docs_use-cases/use-case-transport-create-token-for-file.md %}) beforehand.
The advantage of using Tokens is that they can be personalized or password protected.
When executing the [Load File]({% link _docs_use-cases/use-case-transport-load-file.md %}) use case, the `truncatedReference` of the Token can be specified as the `reference`.
If the Token is password protected, the `password` must also be entered for loading.
{: .notice--info}

# Further Options for Exchanging Files

As for all other kinds of [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes), the [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) `value.@type` can be [read from the peer]({% link _docs_integrate/read-attributes-from-peer.md %}), [created for the peer]({% link _docs_integrate/create-attributes-for-peer.md %}) and [proposed to the peer]({% link _docs_integrate/propose-attributes-to-peer.md %}) by proceeding as described in the corresponding scenario documentation.
In addition, there is the option of [updating by succession]({% link _docs_integrate/update-attributes-by-succession.md %}) and [deletion]({% link _docs_integrate/delete-attributes.md %}).
However, the deletion of an IdentityAttribute that has IdentityFileReference as its `value.@type` does not additionally lead to the deletion of the associated uploaded encrypted File on the Backbone.
This must be done separately if required.
