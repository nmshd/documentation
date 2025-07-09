---
# Start automatic generation
permalink: integrate/migration-from-v6-to-v7
published: true
title: "Migration From v6 to v7"
type: scenario
toc: true
properties:
  - id: SC123
  - category: Migration Guides
  - description: Changes due to release/v7
  - customer:
  - component: integrate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: DONE
  - published: true
  - link: migration-from-v6-to-v7
require:
required_by:
# End automatic generation
---

The [Runtime](https://github.com/nmshd/runtime) of enmeshed has recently been updated from version 6 to version 7.
Accordingly, a new version of the [Connector](https://github.com/nmshd/connector) has also been released to make the updated Runtime available to Integrators of Connectors.
The version update has resulted in some breaking changes.
To support the migration of existing systems to the new version, the breaking changes made are listed and explained in this migration guide.

## Step-by-Step Instructions

The step-by-step instructions can be consulted to start the migration to version 7 as an Integrator of a Connector directly.
[Runtime-specific breaking changes](#runtime-specific-breaking-changes) that do not need to be taken into account when updating the Connector from version 6 to version 7 can be found below.

### Connector Setup

- Data persisted in the database by a previous version of the Connector is not compatible with version 7.
  For this reason, the old data must be deleted.
  Alternatively, the database can be deleted as a whole and [set up again]({% link _docs_operate/setup-with-docker-compose.md %}).
- The [image](https://github.com/nmshd/connector?tab=readme-ov-file#connector) used to run the Connector must be updated to version 7.
- The [configuration]({% link _docs_operate/configuration.md %}) value `database.dbNamePrefix` of the Connector was removed. Before, it defaulted to `acc-`. If you want to access a database called `acc-connector`, you have to set the `database.dbName` configuration value to `acc-connector` instead of `connector` only.

### Removed and Changed Data Structures

- The FreeTextRequestItem has been removed.
  It is no longer needed as the [FormFieldRequestItem]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem) with [StringFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#stringformfieldsettings) as `settings` can be used instead.
  Of course, the associated AcceptFreeTextRequestItemParameters and the FreeTextAcceptResponseItem have been removed as well.
- The `title` property of most [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) has been removed, because in most cases the kind of RequestItem already clearly indicates its purpose.
  To be more precise, the `title` was only kept by the [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) and the [FormFieldRequestItem]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem) to provide context.
- The `title` property of the [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) is now mandatory to always convey the subject of authentication.
- The properties `validFrom` and `validTo` have been removed from the [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute), the [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), the [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery), the [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) and the [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery).
  Specifying validity periods for [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) is no longer supported as they were not enforced during Attribute processing so far.
- The `template` property of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) was replaced by the `templateId` property in order to reduce data duplication by storing only the `id` of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) rather than the RelationshipTemplate itself within the Relationship.
- The `truncatedReference` property of the [Token]({% link _docs_integrate/data-model-overview.md %}#token), the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) and the [File]({% link _docs_integrate/data-model-overview.md %}#file), which was already marked as deprecated, has been removed and replaced by the `reference.truncated` property.
  The property `reference` was introduced to group the property `truncated` with the additional property `url`, improving structure and better organizing related data.
- The `title` property of the [File]({% link _docs_integrate/data-model-overview.md %}#file) became optional and should no longer be relied upon to be set.
- The `ownershipToken` property of the [TransferFileOwnershipRequestItem]({% link _docs_integrate/data-model-overview.md %}#transferfileownershiprequestitem) became mandatory. This ensures that the ownership of the original File on the Backbone is transferred instead of applying a copy-based workaround. If the ownership of a [File]({% link _docs_integrate/data-model-overview.md %}#file) ought to be transferred, that doesn't have an `ownershipToken` yet, it will need to be [regenerated]({% link _docs_use-cases/use-case-transport-regenerate-file-ownership-token.md %}).
- All data structures around the Attribute listener feature were removed (`LocalAttributeListener`, `RegisterAttributeListenerRequestItem`, `RegisterAttributeListenerAcceptResponseItem`).

### Changed Behavior of Known Features

- Stricter validation of `tags` of [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) and [Files]({% link _docs_integrate/data-model-overview.md %}#file) have been added as documented in their description in the data model overview.
  An error with [error code]({% link _docs_integrate/error-codes.md %}) `error.consumption.attributes.invalidTags` will be thrown if an attempt is made to use invalid `tags`.

### Removed and Changed Connector Routes

- The `GET /api/v2/Attributes/Valid` Connector route and its underlying [use case]({% link _docs_integrate/use-cases.md %}) for getting valid [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) were removed, because the properties `validFrom` and `validTo` have been removed from the Attributes.
- For the same reason, the `onlyValid` parameter was removed from the use cases [Get Attributes]({% link _docs_use-cases/use-case-consumption-get-attributes.md %}), [Get own shared Attributes]({% link _docs_use-cases/use-case-consumption-get-own-shared-attributes.md %}) and [Get peer shared Attributes]({% link _docs_use-cases/use-case-consumption-get-peer-shared-attributes.md %}).
  Accordingly, it was removed from the associated Connector routes as well.

### TypeScript SDK changes

With every version of the Connector we ship a matching [TypeScript SDK]({% link _docs_integrate/access-the-connector.md %}#accessing-the-connector-by-software-development-kits-sdk). With version 7 of the SDK the deprecated field `apiKey` was removed. To access the Connector using an api key, you can configure the SDK now as follows:
## Runtime-Specific Breaking Changes

As an Integrator of a Connector, the following changes do not need to be taken into account during migration to version 7, as they are Runtime-specific breaking changes handled internally by the Connector.

### Removed Use Cases

Some [use cases]({% link _docs_integrate/use-cases.md %}) of the Runtime that were previously marked as deprecated and replaced by new ones have now been removed.
However, the Connector routes associated with these use cases are not affected by these replacements and can still be used.

- The nomenclature of [ThirdPartyRelationshipAttributes]({% link _docs_integrate/attribute-introduction.md %}#emitted-and-received-thirdpartyrelationshipattributes) has already changed in version 6.
  In particular, the term third party owned RelationshipAttribute has become obsolete.
  For this reason, the [Delete a ThirdPartyRelationshipAttribute and notify peer]({% link _docs_use-cases/use-case-consumption-delete-a-thirdpartyrelationshipattribute-and-notify-peer.md %}) use case was already added in version 6 and the use case of deleting a third party owned RelationshipAttribute and notifying the peer was marked as deprecated.
  It has now been deleted with the update to version 7.
- It will be possible to load items not only from truncated references, but also from other references.
  For this reason, the [Load item from reference]({% link _docs_use-cases/use-case-transport-load-item-from-reference.md %}) use case was already added in version 6 and the use case of loading an item from a truncated reference was marked as deprecated.
  It has now been deleted with the update to version 7.
