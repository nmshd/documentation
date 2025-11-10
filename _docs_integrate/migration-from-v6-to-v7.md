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
- Some changes must be made to the [configuration]({% link _docs_operate/configuration.md %}) of the Connector.
  - The `database.dbNamePrefix` field of the [database configuration]({% link _docs_operate/configuration.md %}#database) was removed.
    Before, it defaulted to `acc-`.
    If a database called `acc-connector` is to be accessed, the value of the `database.dbName` field must be set to `acc-connector` instead of `connector` only.
  - To support additional authentication methods beyond API key authentication, the `apiKey` field was replaced by the `authentication.apiKey.keys.<key-id>.key` parameter of the [authentication configuration]({% link _docs_operate/configuration.md %}#authentication).
    The `authentication.apiKey.keys.<key-id>.scopes` field provides a convenient way to configure the permissions that apply when the API key identified by `<key-id>` is used.
  - Additionally, the support for the `API_KEY` [environment variable]({% link _docs_operate/configuration.md %}#environment-variables) has been removed, that could be used to define an API key using a short environment variable.
    As an alternative, the `authentication.apiKey.keys.<key-id>.key` configuration property can be set using an environment variable.
- It must be ensured that a [Backbone](https://github.com/nmshd/backbone/tags) is used which is compatible with version 7 of the Connector.
  Even though a Backbone of version 6 can still be used, it is recommended to update to version 7 of the Backbone due to the new features and bug fixes provided.
  Appropriate Backbone credentials can be specified in the fields `transportLibrary.baseUrl`, `transportLibrary.platformClientId` and `transportLibrary.platformClientSecret` of the [Backbone configuration]({% link _docs_operate/configuration.md %}#transportlibrary).
  The URL `<baseUrl of Backbone>/api/v2/version` can be accessed to validate the version of the Backbone.
  Please note that version 7 of the Backbone only supports version 2 of its API and no longer version 1.

### Removed and Changed Data Structures

- The FreeTextRequestItem has been removed.
  It is no longer needed as the [FormFieldRequestItem]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem) with [StringFormFieldSettings]({% link _docs_integrate/data-model-overview.md %}#stringformfieldsettings) as `settings` can be used instead.
  Of course, the associated AcceptFreeTextRequestItemParameters and the FreeTextAcceptResponseItem have been removed as well.
- The `title` property of most [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) has been removed, because in most cases the kind of RequestItem already clearly indicates its purpose.
  To be more precise, the `title` was only kept by the [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) and the [FormFieldRequestItem]({% link _docs_integrate/data-model-overview.md %}#formfieldrequestitem) to provide context.
- The `title` property of the [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) is now mandatory to always convey the subject of authentication.
- The `requireManualDecision` property of all [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) has been removed.
  [Requests]({% link _docs_integrate/data-model-overview.md %}#request) containing at least one [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) or [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) within their `items` property are no longer eligible for automatic acceptance or rejection by the [Decider Module]({% link _docs_explore/61-runtime.md %}#decider-module), yet proper configuration still enables automatic processing of Requests containing other RequestItems.
  Furthermore, the `requiresInteraction` property was added to the ConsentRequestItem to keep the ability to require an explicit action to grant consent, even though the `requireManualDecision` property was removed.
- The properties `validFrom` and `validTo` have been removed from the [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute), the [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), the [IdentityAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#identityattributequery), the [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) and the [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery).
  Specifying validity periods for [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) is no longer supported as they were not enforced during Attribute processing so far.
- The `template` property of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) was replaced by the `templateId` property in order to reduce data duplication by storing only the `id` of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) rather than the RelationshipTemplate itself within the Relationship.
- The `truncatedReference` property of the [Token]({% link _docs_integrate/data-model-overview.md %}#token), the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) and the [File]({% link _docs_integrate/data-model-overview.md %}#file), which was already marked as deprecated, has been removed and replaced by the `reference.truncated` property.
  The property `reference` was introduced to group the property `truncated` with the additional property `url`, improving structure and better organizing related data.
- The `title` property of the [File]({% link _docs_integrate/data-model-overview.md %}#file) became optional and should no longer be relied upon to be set.
- The `ownershipToken` property of the [TransferFileOwnershipRequestItem]({% link _docs_integrate/data-model-overview.md %}#transferfileownershiprequestitem) became mandatory.
  This ensures that the ownership of the original File on the Backbone is transferred instead of applying a copy-based workaround.
  If the ownership of a [File]({% link _docs_integrate/data-model-overview.md %}#file) ought to be transferred, that doesn't have an `ownershipToken` yet, it will need to be [regenerated]({% link _docs_use-cases/use-case-transport-regenerate-file-ownership-token.md %}).
- The properties `approvedAt` and `approvedByDevice` of the [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) have been removed.
  Furthermore, renaming `"Approved"` to `"Active"` resulted in a change of an IdentityDeletionProcess `status`.
- All data structures around the Attribute listener feature, including the LocalAttributeListener, the RegisterAttributeListenerRequestItem, and the RegisterAttributeListenerAcceptResponseItem, were removed.
- With the new [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) concept, an Attribute copy is no longer created when an Attribute is [shared]({% link _docs_integrate/share-attributes-with-peer.md %}).
  Furthermore, LocalAttribute subtypes have been introduced to help distinguish between different kinds of LocalAttributes.
  - RepositoryAttributes were renamed to [OwnIdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#ownidentityattribute).
    There are no own shared IdentityAttributes anymore.
    Instead, sharing an OwnIdentityAttribute leads to the creation of [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails).
  - The peer shared IdentityAttribute, the own shared RelationshipAttribute and the peer shared RelationshipAttribute have been replaced by the LocalAttribute subtypes [PeerIdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute), [OwnRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute) and [PeerRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute), respectively.
  - There are no emitted ThirdPartyRelationshipAttributes anymore.
    Instead, forwarding a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) to a peer, which is not involved in the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) in which the RelationshipAttribute exists, leads to the creation of [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails).
    For this reason, the received ThirdPartyRelationshipAttribute is called [ThirdPartyRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattribute) from now on.
  - The `shareInfo` property of the [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) and the corresponding LocalAttributeShareInfo data object were removed.
    To track with which peer an Attribute was [shared]({% link _docs_integrate/share-attributes-with-peer.md %}), [AttributeForwardingDetails]({% link _docs_integrate/data-model-overview.md %}#attributeforwardingdetails) are now used and, in the case of [PeerIdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#peeridentityattribute), [OwnRelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#ownrelationshipattribute), [PeerRelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#peerrelationshipattribute), and [ThirdPartyRelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattribute), the properties `peer`, `sourceReference`, and `deletionInfo` are utilized.
    For the ThirdPartyRelationshipAttributes, the `initialAttributePeer` property is additionally needed.
  - Some [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) subtypes may have a `deletionInfo` set, which has either [EmittedAttributeDeletionInfo]({% link _docs_integrate/data-model-overview.md %}#emittedattributedeletioninfo) or [ReceivedAttributeDeletionInfo]({% link _docs_integrate/data-model-overview.md %}#receivedattributedeletioninfo) as its type.
    The LocalAttributeDeletionInfo data object has been removed.
  - The introduction of the [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) subtypes has led to a renaming of the [NotificationItems]({% link _docs_integrate/data-model-overview.md %}#notificationitems).
    The [PeerAttributeSucceededNotificationItem]({% link _docs_integrate/data-model-overview.md %}#peerattributesucceedednotificationitem) replaces the PeerSharedAttributeSucceededNotificationItem.
    The OwnSharedAttributeDeletedByOwnerNotificationItem, the PeerSharedAttributeDeletedByPeerNotificationItem and the ThirdPartyRelationshipAttributeDeletedByPeerNotificationItem have been replaced by the [OwnAttributeDeletedByOwnerNotificationItem]({% link _docs_integrate/data-model-overview.md %}#ownattributedeletedbyownernotificationitem), the [PeerRelationshipAttributeDeletedByPeerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#peerrelationshipattributedeletedbypeernotificationitem) and the [ForwardedAttributeDeletedByPeerNotificationItem]({%link _docs_integrate/data-model-overview.md %}#forwardedattributedeletedbypeernotificationitem).
  - To better align with the `initialAttributePeer` property of the [ThirdPartyRelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattribute), the `thirdPartyAddress` property of the [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem) and the [ReadAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#readattributeacceptresponseitem) has been renamed to `initialAttributePeer`.
  - The `parentId` property of the [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) was removed as there is no child Attribute feature anymore.
    Sharing individual components of a [complex IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#complex-identityattributes) will be possible again in future releases.

### Changed Behavior of Known Features

- Stricter validation of `tags` of [IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#identityattribute) and [Files]({% link _docs_integrate/data-model-overview.md %}#file) have been added as documented in their description in the data model overview.
  An error with [error code]({% link _docs_integrate/error-codes.md %}) `error.consumption.attributes.invalidTags` will be thrown if an attempt is made to use invalid `tags`.
- For Attribute values, a [character set is introduced]({% link _docs_integrate/attribute-values.md %}#valid-characters-in-attributes).
  An error with [error code]({% link _docs_integrate/error-codes.md %}) `error.consumption.attributes.forbiddenCharactersInAttribute` will be thrown if an attempt is made to use characters outside of that character set in an Attribute value.

### Removed and Changed Connector Routes

- For every Connector route originating from the [Core HTTP API Module]({% link _docs_operate/modules.md %}#corehttpapi), the prefix has been changed from `/api/v2` to `/api/core/v1` to reflect its origin.
  The prefix syntax change led to the version being reset.
- The `GET /api/v2/Attributes/Valid` Connector route and its underlying [use case]({% link _docs_integrate/use-cases.md %}) for getting valid [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) were removed, because the properties `validFrom` and `validTo` have been removed from the Attributes.
- For the same reason, the `onlyValid` parameter was removed from the use cases [Get Attributes]({% link _docs_use-cases/use-case-consumption-get-attributes.md %}), [Get own Attributes shared with peer]({% link _docs_use-cases/use-case-consumption-get-own-attributes-shared-with-peer.md %}) and [Get peer Attributes]({% link _docs_use-cases/use-case-consumption-get-peer-attributes.md %}).
  Accordingly, it was removed from the associated Connector routes as well.

- GetRepositoryAttributes was renamed to GetOwnIdentityAttributes.
- Instead of GetOwnSharedIdentityAttributes and GetPeerSharedIdentityAttribute, there are GetOwnAttributesSharedWithPeer and GetPeerAttributes now.

### TypeScript SDK Changes

With every version of the Connector, we ship a matching [TypeScript SDK]({% link _docs_integrate/access-the-connector.md %}#accessing-the-connector-by-software-development-kits-sdk).
With version 7 of the SDK, the deprecated field `apiKey` was removed.
To access the Connector using an API key, you can configure the SDK now as follows:

```typescript
import { ApiKeyAuthenticator, ConnectorClient } from "@nmshd/connector-sdk";

const connectorClient = ConnectorClient.create({
  baseUrl: "<insert-the-base-URL-of-your-Connector-here>",
  authenticator: new ApiKeyAuthenticator("<insert-your-valid-API-key-here>")
});
```

### Removed and Changed Error Codes

An overview of the [Error codes]({% link _docs_integrate/error-codes.md %}) that may occur is given on the corresponding documentation page.
The most important changes regarding the error codes due to the update from version 6 to version 7 are:

- With the new [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) concept, an Attribute copy is no longer created when an Attribute is [shared]({% link _docs_integrate/share-attributes-with-peer.md %}).
  Therefore, there are no Attribute copies and source Attributes anymore.
  The `error.consumption.attributes.successorSourceContentIsNotEqualToCopyContent` error code and similar error codes could thus be removed.
- The `error.consumption.attributes.successionMustNotChangePeer` error code has been removed as the new [LocalAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) concept prevents some errors from occurring.
  Similarly, other error codes are no longer needed.
  However, a few new error codes, such as `error.consumption.attributes.wrongTypeOfAttribute`, had to be introduced.
- The `error.runtime.attributes.isNotRepositoryAttribute` error code has been renamed to `error.runtime.attributes.isNotOwnIdentityAttribute` as OwnIdentityAttributes now present those [LocalAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) that were previously known as RepositoryAttributes.
  Similarly, other error codes have been renamed.
- The `error.consumption.attributes.cannotSucceedChildOfComplexAttribute` error code has been removed as there is no child Attribute feature anymore.
- By renaming an [IdentityDeletionProcess]({% link _docs_integrate/data-model-overview.md %}#identitydeletionprocess) `status` from `"Approved"` to `"Active"`, the error code `error.runtime.identityDeletionProcess.noApprovedIdentityDeletionProcess` has been replaced by `error.runtime.identityDeletionProcess.noActiveIdentityDeletionProcess`.

## Runtime-Specific Breaking Changes

As an Integrator of a Connector, the following changes do not need to be taken into account during migration to version 7, as they are Runtime-specific breaking changes handled internally by the Connector.

### Removed Use Cases

Some [use cases]({% link _docs_integrate/use-cases.md %}) of the Runtime that were previously marked as deprecated and replaced by new ones have now been removed.
However, the Connector routes associated with these use cases are not affected by these replacements and can still be used.

- The nomenclature of [ThirdPartyRelationshipAttributes]({% link _docs_integrate/attribute-introduction.md %}#emitted-and-received-thirdpartyrelationshipattributes) has already changed in version 6.
  In particular, the term third party owned RelationshipAttribute has become obsolete.
  For this reason, the [Delete a ThirdPartyRelationshipAttribute and notify peer]({% link _docs_use-cases/use-case-consumption-delete-an-attribute-and-notify.md %}) use case was already added in version 6 and the use case of deleting a third party owned RelationshipAttribute and notifying the peer was marked as deprecated.
  It has now been deleted with the update to version 7.
- It will be possible to load items not only from truncated references, but also from other references.
  For this reason, the [Load item from reference]({% link _docs_use-cases/use-case-transport-load-item-from-reference.md %}) use case was already added in version 6 and the use case of loading an item from a truncated reference was marked as deprecated.
  It has now been deleted with the update to version 7.

- The use cases for checking if a RepositoryAttribute can be created and for creating a RepositoryAttribute were renamed to [Check if OwnIdentityAttribute can be created]({% link _docs_use-cases/use-case-consumption-check-if-ownidentityattribute-can-be-created.md %}) and [Create an OwnIdentityAttribute]({% link _docs_use-cases/use-case-consumption-create-an-ownidentityattribute.md %}).

- ShareRepositoryAttribute use case was renamed to ShareOwnIdentityAttribute.

- The use case for changing a default RepositoryAttribute was renamed to [Change default OwnIdentityAttribute]({% link _docs_use-cases/use-case-consumption-change-default-ownidentityattribute.md %}).

- The [Delete an Attribute and notify]({% link _docs_use-cases/use-case-consumption-delete-an-attribute-and-notify.md %}) use case replaces the use cases for deleting a RepositoryAttribute, deleting an own shared Attribute and notifying peer, deleting a peer shared Attribute and notifying owner, and deleting a ThirdPartyRelationshipAttribute and notifying peer use cases.

- GetForwardingDetailsForAttribute and GetVersionsOfAttributeSharedWithPeer use cases were added. GetSharedVersionsOfAttribute use case was removed.

- SucceedRepositoryAttribute and NotifyPeerAboutRepositoryAttributeSuccession use cases were renamed to SucceedOwnIdentityAttribute and NotifyPeerAboutOwnIdentityAttributeSuccession.

- DeleteSharedAttributesForRejectedOrRevokedRelationship, GetAttributes, GetVersionsOfAttribute and SucceedRelationshipAttributeAndNotifyPeer use cases were adjusted.
