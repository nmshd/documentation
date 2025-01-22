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
By [sending a suitable Request]({% link _docs_integrate/share-attributes-with-peer.md %}#send-and-receive-the-request), this IdentityAttribute can be shared with a `peer` of an already existing [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) or in the process of establishing a new Relationship.

For information on how to establish Relationships, refer to the [Establish Relationships]({% link _docs_integrate/establish-relationships.md %}) scenario documentation.
{: .notice--info}

## Create IdentityFileReference

Create the [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` by proceeding as described in the documentation on [creating an IdentityAttribute for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-an-identityattribute-for-yourself).
Provide the value of the `truncatedReference` property of the [uploaded File](#upload-a-file) as the `value` of the IdentityFileReference.

Other than with Connector Integrators, this IdentityAttribute is automatically created when an App user [uploads a File](#upload-a-file). For this reason, it is directly available to the App user for sharing.
{: .notice--info}

## Share IdentityFileReference

To share a File, share the [created IdentityAttribute](#create-identityfilereference) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` by sending a [suitable Request]({% link _docs_integrate/share-attributes-with-peer.md %}#request-for-sharing-attributes).
Details on how to share Attributes can be found in the [Share Attributes with peer]({% link _docs_integrate/share-attributes-with-peer.md %}) scenario documentation.

## Load the Referenced File

The recipient of the [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) `value.@type` can provide the `value` of the IdentityFileReference when utilizing the [Load File]({% link _docs_use-cases/use-case-transport-load-file.md %}) use case to load the File.
After the peer File has been loaded, it is possible to [download]({% link _docs_use-cases/use-case-transport-download-file.md %}) its actual decrypted binary content from the Backbone.

# Further Options for Exchanging Files

As for all other kinds of [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes), the [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) of [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) `value.@type` can be [read from the peer]({% link _docs_integrate/read-attributes-from-peer.md %}), [created for the peer]({% link _docs_integrate/create-attributes-for-peer.md %}) and [proposed to the peer]({% link _docs_integrate/propose-attributes-to-peer.md %}) by proceeding as described in the corresponding scenario documentation.
In addition, there is the option of [updating by succession]({% link _docs_integrate/update-attributes-by-succession.md %}) and [deletion]({% link _docs_integrate/delete-attributes.md %}).
However, the deletion of an IdentityAttribute that has IdentityFileReference as its `value.@type` does not additionally lead to the deletion of the associated uploaded encrypted File on the Backbone.
This must be done separately if required.
