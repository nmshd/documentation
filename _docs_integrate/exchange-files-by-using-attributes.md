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
An understanding of this kind of Attribute is also necessary to [request the reading of a File from a peer](#read-a-file-from-a-peer).

# Upload a File

In order to be able to [share a File with a peer](#share-a-file-with-a-peer), the [File]({% link _docs_integrate/data-model-overview.md %}#file) must first be uploaded to the Backbone in encrypted form.
To do this, consult the documentation of the [Upload own File]({% link _docs_use-cases/use-case-transport-upload-own-file.md %}) use case.
By uploading the File, it has been assigned an `id` with which it can be identified from now on.
This `id` can, for example, be specified as a parameter when executing the [Get own File]({% link _docs_use-cases/use-case-transport-get-own-file.md %}) use case in order to display the metadata information of the File.
In the context of exchanging Files, particular attention should be paid to the `truncatedReference` property of the File.
All Identities that know its value can load the File from the Backbone and decrypt it.

# Share a File with a peer

After [uploading a File](#upload-a-file), a certain kind of [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) can be used to share the value of the `truncatedReference` property of the [File]({% link _docs_integrate/data-model-overview.md %}#file) with other Identities.
To be more precise, this is an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type`.
An IdentityFileReference stores the value of the `truncatedReference` property of the File within its `value` property.
By [sending a suitable Request]({% link _docs_integrate/share-attributes-with-peer.md %}#send-and-receive-the-request), this IdentityAttribute can be shared with a `peer` of an already existing [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) or in the process of establishing a new Relationship.

For information on how to establish Relationships, refer to the [Establish Relationships]({% link _docs_integrate/establish-relationships.md %}) scenario documentation.
{: .notice--info}

## Create IdentityFileReference

Create the IdentityAttribute that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` by proceeding as described in the documentation on [creating an IdentityAttribute for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}#create-an-identityattribute-for-yourself).

Other than with Connector Integrators, this IdentityAttribute is automatically created when an App user [uploads a File](#upload-a-file) so that it is directly available for sharing.
{: .notice--info}

## Share IdentityFileReference

To share a File, share the [created IdentityAttribute](#create-identityfilereference) that has [IdentityFileReference]({% link _docs_integrate/attribute-values.md %}#identityfilereference) as its `value.@type` by sending a [suitable Request]({% link _docs_integrate/share-attributes-with-peer.md %}#request-for-sharing-attributes).
Details on how to share Attributes can be found in the [Share Attributes with peer]({% link _docs_integrate/share-attributes-with-peer.md %}) scenario documentation.
The recipient of the IdentityAttribute of IdentityFileReference `value.@type` can provide the `value` of the IdentityFileReference when utilizing the [Load peer File]({% link _docs_use-cases/use-case-transport-load-peer-file.md %}) use case to load the File.

# Read a File from a peer

Refer to the [Read Attributes from peer]({% link _docs_integrate/read-attributes-from-peer.md %}) scenario documentation.
