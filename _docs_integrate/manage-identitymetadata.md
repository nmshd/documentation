---
# Start automatic generation
permalink: integrate/manage-identitymetadata
published: true
title: "Manage IdentityMetadata"
type: scenario
toc: true
properties:
  - id: SC118
  - category: Identities and Relationships
  - description: Upsert, get and delete IdentityMetadata of the peers of Relationships or the own Identity
  - customer:
  - component: integrate
  - level:
  - implementation status: DONE
  - documentation status: DONE
  - published: true
  - link: manage-identitymetadata
require:
required_by:
# End automatic generation
---

An Integrator of a Connector should be able to store arbitrary auxiliary metadata related to an [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) within the Connector.
The Identity about which metadata is to be stored must be sufficiently familiar to them, which means that it must be a `peer` of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) or their own Identity.

For information on how to establish Relationships, refer to the [Establish Relationships]({% link _docs_integrate/establish-relationships.md %}) scenario documentation.
{: .notice--info}

# Storage of IdentityMetadata

Metadata about an Identity is stored in a data object of type [IdentityMetadata]({% link _docs_integrate/data-model-overview.md %}#identitymetadata).
It has the properties `id`, `reference`, `key` and `value`.

- [Upsert IdentityMetadata]({% link _docs_use-cases/use-case-consumption-upsert-identitymetadata.md %}) use case for creating and updating IdentityMetadata. In case of an error, `error.runtime.identityMetadata.unfamiliarReferencedIdentity` can occur.
- [Get IdentityMetadata]({% link _docs_use-cases/use-case-consumption-get-identitymetadata.md %}) use case. In case of an error, `error.runtime.identityMetadata.notFound` can occur.

# Removal of IdentityMetadata

- [Delete IdentityMetadata]({% link _docs_use-cases/use-case-consumption-delete-identitymetadata.md %}) use case. In case of an error, `error.runtime.identityMetadata.notFound` can occur.

When [decomposing a Relationship]({% link _docs_integrate/terminate-relationships.md %}#decompose-a-relationship), all IdentityMetadata that have the `peer` of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) as their `reference` is deleted.

# Differentiation from IdentityAttributes

In addition to the [IdentityMetadata]({% link _docs_integrate/data-model-overview.md %}#identitymetadata) presented in this guide, enmeshed provides [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) for storing data of an Identity.
These two types of data objects are different from each other and are used for different purposes.
In contrast to IdentityAttributes, IdentityMetadata can only be managed by Integrators of Connectors and not by App users.
This is because IdentityMetadata is intended as a separate option for Integrators of Connectors to store arbitrary auxiliary data of their peers.
IdentityAttributes are strongly interwoven into enmeshed and its features and the `value` of an IdentityAttribute is therefore more strictly typed.
The following table provides an overview of the differences and similarities between IdentityAttributes and IdentityMetadata.

| Comparison criterion                   | IdentityAttribute                                                                                                                                                                                                           | IdentityMetadata                                                                                                                                                                         |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Managing Identity                      | Integrator of Connector or App user                                                                                                                                                                                         | Integrator of Connector                                                                                                                                                                  |
| Possible types of `value`              | There is a predefined list of permitted [IdentityAttribute value types]({% link _docs_integrate/attribute-values.md %}#identity-attributes)                                                                                 | Must only be JSON compatible                                                                                                                                                             |
| Kind of storage                        | Local storage within the `attribute` property of a [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute). The LocalAttribute can be identified by its `id`, which has `ATT` as prefix.         | Local storage within an [IdentityMetadata]({% link _docs_integrate/data-model-overview.md %}#identitymetadata) data object. It can be identified by its `id`, which has `IDM` as prefix. |
| Storability for `peer` of Relationship | Only works if the peer has shared its RepositoryAttribute. Stored as peer shared IdentityAttribute                                                                                                                          | Referenced with peer of Relationship                                                                                                                                                     |
| Storability for own Identity           | Stored as RepositoryAttribute or own shared IdentityAttribute                                                                                                                                                               | Referenced with own Identity                                                                                                                                                             |
| Storability for unfamiliar Identities  | IdentityAttributes can only be stored for the own Identity or a `peer` of a Relationship.                                                                                                                                   | IdentityMetadata can only be stored for the own Identity or a `peer` of a Relationship.                                                                                                  |
| Feature set                            | Comprehensive feature set which, in addition to [creating], [updating], [getting] and [deleting] an IdentityAttribute, also includes [sharing with peer], [reading from peer], [creating for peer] and [proposing to peer]. | Minimal feature set that includes [creating and updating], [getting] and [deleting] IdentityMetadata.                                                                                    |
| Kind of update of `value`              | The `value` is [updated by succession]({% link _docs_integrate/update-attributes-by-succession.md %}). For this reason, the history of changes is preserved.                                                                | The `value` is updated inplace and the history of changes is lost.                                                                                                                       |
