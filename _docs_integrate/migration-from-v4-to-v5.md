---
# Start automatic generation
permalink: integrate/migration-from-v4-to-v5
redirect_from:
  - /integrate/version-5
published: true
title: "Migration From v4 to v5"
type: scenario
toc: true
properties:
  - id: SC115
  - category: Migration Guides
  - description: Changes due to release/v5
  - customer:
  - component: integrate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: DONE
  - published: true
  - link: migration-from-v4-to-v5
require:
required_by:
# End automatic generation
---

The [Runtime](https://github.com/nmshd/runtime) of enmeshed has recently been updated from version 4 to version 5.
Accordingly, a new version of the [Connector](https://github.com/nmshd/connector) has also been released to make the updated Runtime available to Integrators of Connectors.
The version update has resulted in some breaking changes.
To support the migration of existing systems to the new version, the breaking changes made are listed and explained in this migration guide.

## Step-by-Step Instructions

The step-by-step instructions can be consulted to start the migration to version 5 directly.
More [detailed explanations]({% link _docs_integrate/migration-from-v4-to-v5.md %}#detailed-explanations) can be found below.

### Connector Setup

- The data from the database that was used by the Connector of the former version is outdated. This is because the [format of addresses has changed to DIDs]({% link _docs_integrate/migration-from-v4-to-v5.md %}#dids-as-addresses), for example. For this reason, the old data must be deleted. Alternatively, the database can be deleted as a whole and [set up again]({% link _docs_operate/setup-with-docker-compose.md %}).
- The [image](https://github.com/nmshd/connector?tab=readme-ov-file#connector) used to run the Connector must be updated to version 5.
- Some changes must be made to the [configuration]({% link _docs_operate/configuration.md %}) of the Connector.
  - It must be ensured that a [Backbone](https://github.com/nmshd/backbone/tags) is used which is compatible with version 5 of the Connector. This means that a Backbone of version 6 must be used. Therefore, specify appropriate Backbone credentials in the fields `transportLibrary.baseUrl`, `transportLibrary.platformClientId` and `transportLibrary.platformClientSecret` of the [configuration]({% link _docs_operate/configuration.md %}#transportlibrary). The URL `<baseUrl of Backbone>/api/v1/version` can be accessed to validate the version of the Backbone.
  - The AutoAcceptRelationshipCreationChangesModule has been renamed to the [AutoAcceptPendingRelationshipsModule]({% link _docs_operate/modules.md %}#autoacceptpendingrelationships), because the [RelationshipChanges have been removed]({% link _docs_integrate/migration-from-v4-to-v5.md %}#removal-of-relationshipchanges). For this reason, the `modules.autoAcceptRelationshipCreationChanges` field must be renamed to `modules.autoAcceptPendingRelationships` in the [configuration]({% link _docs_operate/configuration.md %}#autoacceptpendingrelationships) if it was previously specified. In addition, it must be made sure that the `modules.autoAcceptRelationshipCreationChanges.responseContent` field is removed.
  - In version 4, the WebhooksV2Module module has already been renamed to the [WebhooksModule]({% link _docs_operate/modules.md %}#webhooks). However, backwards compatibility was ensured. With the migration to version 5, the `modules.webhooksV2` field must be renamed to `modules.webhooks` in the [configuration]({% link _docs_operate/configuration.md %}#webhooks) if it was previously specified and the migration to the WebhooksModule has not yet taken place.

### Removed and Changed Data Structures

- The [RelationshipChanges have been removed]({% link _docs_integrate/migration-from-v4-to-v5.md %}#removal-of-relationshipchanges).
  - This has led to the removal of the `changes` property of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) and the addition of the `creationContent` and `auditLog` properties to the Relationship.
  - In particular, the use cases for accepting and rejecting RelationshipChanges had to be removed. With the use cases [Accept Relationship]({% link _docs_use-cases/use-case-transport-accept-relationship.md %}) and [Reject Relationship]({% link _docs_use-cases/use-case-transport-reject-relationship.md %}), two [new use cases]({% link _docs_integrate/migration-from-v4-to-v5.md %}#removal-of-relationshipchanges-1) have been added that now provide these functionalities.
  - For this reason, the route `PUT /api/v2/Relationships/{id}/Accept` must be executed instead of the route `PUT /api/v2/Relationships/{id}/Changes/{changeId}/Accept` and the route `PUT /api/v2/Relationships/{id}/Reject` must be executed instead of the route `PUT /api/v2/Relationships/{id}/Changes/{changeId}/Reject` when using the Connector. In contrast to the old Connector routes, a request body no longer needs to be provided when using the new Connector routes.
- Non-standard `content` of a [Message]({% link _docs_integrate/data-model-overview.md %}#message), non-standard `content` of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) and non-standard `creationContent` of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) is now typed. The [new mandatory wrappers]({% link _docs_integrate/migration-from-v4-to-v5.md %}#new-mandatory-wrappers-for-non-standard-content-of-messages-relationshiptemplates-and-relationships) are [ArbitraryMessageContent]({% link _docs_integrate/data-model-overview.md %}#arbitrarymessagecontent), [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent) and [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent), respectively, which must now be used.
- The `mustBeAccepted` property of the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) has been removed, which is why this [property must be removed if RequestItemGroups were used]({% link _docs_integrate/migration-from-v4-to-v5.md %}#removal-of-the-mustbeaccepted-property-of-the-requestitemgroup).
- The type of the `owner` property of the [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) has changed. The [values specified for this property must therefore be adjusted if ThirdPartyRelationshipAttributeQueries were used]({% link _docs_integrate/migration-from-v4-to-v5.md %}#changed-type-of-the-owner-property-of-the-thirdpartyrelationshipattributequery).

### Changed Behavior of Known Features

- The [Synchronize updates of Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) use case, which corresponds to the Connector route `POST /api/v2/Account/Sync`, no longer returns any content. Previously, new Messages or changes to Relationships were shown in the response after the use case was executed. As the [synchronization with the Backbone no longer returns anything]({% link _docs_integrate/migration-from-v4-to-v5.md %}#synchronization-with-backbone-returns-no-content-anymore), the corresponding [events]({% link _docs_integrate/connector-events.md %}) must be listened to instead in order to be informed about new Messages or changes to Relationships.
- Stricter [validation of Requests]({% link _docs_integrate/migration-from-v4-to-v5.md %}#validation-of-requests) has been added. Therefore, changes will probably have to be made to existing Request flows. Both [sending Requests]({% link _docs_integrate/migration-from-v4-to-v5.md %}#sending-of-requests) and [responding to Requests]({% link _docs_integrate/migration-from-v4-to-v5.md %}#responding-to-requests) are affected.

### Changes to Error Codes, Connector Routes and Events

Changes have been made to the [error codes]({% link _docs_integrate/error-codes.md %}), [use cases]({% link _docs_integrate/use-cases.md %}) and [events]({% link _docs_integrate/connector-events.md %}). Naturally, the Connector routes associated with the changed use cases of the Runtime are often affected as well. All these changes may lead to unexpected behavior when updating from version 4 to version 5. In this case, it is worth taking a look at the following lists:

- An overview of the [removed and changed error codes]({% link _docs_integrate/migration-from-v4-to-v5.md %}#removed-and-changed-error-codes) can be found below.
- An overview of the [removed, changed and added use cases]({% link _docs_integrate/migration-from-v4-to-v5.md %}#removed-changed-and-added-use-cases) with regard to their impact on the Connector routes can be found below.
  - In particular, it must be noted that the [use case of getting shared versions of a RepositoryAttribute has been renamed]({% link _docs_integrate/migration-from-v4-to-v5.md %}#renaming-of-the-use-case-getsharedversionsofrepositoryattribute-to-getsharedversionsofattribute). The [Get shared versions of an Attribute]({% link _docs_use-cases/use-case-consumption-get-shared-versions-of-an-attribute.md %}) use case must now be executed instead. Please note, however, that the associated Connector route `GET /api/v2/Attributes/{id}/Versions/Shared` has not changed.
  - With the execution of the Connector route `POST /api/v2/Attributes`, which corresponds to the execution of the associated [Create a RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-create-a-repositoryattribute.md %}) use case, an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) can be created for yourself. When executing this Connector route, the fields `content.@type` and `content.owner` may no longer be specified as input. This is due to the fact that previously only the IdentityAttribute as `@type` and the own address as the value of the `owner` property of the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) to be created for yourself came into question anyway. Therefore, [less input needs to be provided when executing the use case to create a RepositoryAttribute]({% link _docs_integrate/migration-from-v4-to-v5.md %}#less-input-needed-for-the-use-case-createrepositoryattribute).
- An overview of the [renamed and added events]({% link _docs_integrate/migration-from-v4-to-v5.md %}#renamed-and-added-events) can be found below.

## Detailed Explanations

The aspects to be taken into account when migrating to version 5, which were briefly described in the [step-by-step instructions]({% link _docs_integrate/migration-from-v4-to-v5.md %}#step-by-step-instructions), are explained in more detail in the following.

### DIDs as Addresses

Each [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) within enmeshed has a unique `address` for identification. The format of this [address]({% link _docs_explore/60-addresses.md %}) has changed from `<3-character realm><32- or 33-character base58-encoded string>` to `did:e:<hostname of Backbone>:dids:<22-character lowercase hexadecimal string>`. Accordingly, the `realm` property of the Identity was removed as well. Furthermore, the two error codes `error.runtime.MultiAccount.WrongRealm` and `error.transport.identity.realmLength` have been removed.

### Removal of RelationshipChanges

Previously, the history of changes made to a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) was stored in its `changes` property.
The type of this property was given by an array of RelationshipChanges.
Due to the inconvenience of providing new features for the management of Relationships using RelationshipChanges, the RelationshipChanges have now been removed.
Consequently, the `changes` property of the Relationship was also removed.
Instead, there is now a new `auditLog` property in which the history of changes made to a Relationship is stored.
In order to typify the Relationship's `auditLog`, the new data object type [RelationshipAuditLogEntry was defined]({% link _docs_integrate/migration-from-v4-to-v5.md %}#definition-of-relationshipauditlogentry).
An overview of the [modifications to the data object type Relationship]({% link _docs_integrate/migration-from-v4-to-v5.md %}#modifications-to-relationship), which were caused by the removal of the RelationshipChanges, can be found below.

In contrast to the new [RelationshipAuditLogEntries]({% link _docs_integrate/data-model-overview.md %}#relationshipauditlogentry), the former RelationshipChanges were not only used to store changes made to a Relationship, but also to perform operations on a Relationship.
For example, there was the RelationshipChange with `"Creation"` as `type`, which stored the `content` required for the initial creation of a pending Relationship within its `request` property.
To activate this pending Relationship, the other Identity involved in the Relationship had to accept the RelationshipChange.
Alternatively, it could decide not to establish the Relationship by rejecting the RelationshipChange.
The two use cases of accepting and rejecting RelationshipChanges have been removed. Instead, the content required to initially create a pending Relationship is now stored in the newly introduced `creationContent` property of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) itself.
It fulfills the same role as the previous `request.content` property of the RelationshipChange with the difference that it now has the type [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent) instead of RelationshipCreationChangeRequestContent if a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) whose `content` is of the type [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) was used for the initial creation of the pending Relationship.
Otherwise, the type of the `creationContent` property of the Relationship is [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent).
Before the introduction of the [new mandatory wrappers for non-standard content]({% link _docs_integrate/migration-from-v4-to-v5.md %}#new-mandatory-wrappers-for-non-standard-content-of-messages-relationshiptemplates-and-relationships), such arbitrary `creationContent` of the Relationship was stored in the `request.content` property of the RelationshipChange by also permitting the storage of data of unknown type.

The functionalities of the old two use cases of accepting and rejecting RelationshipChanges are now provided by the two new use cases [Accept Relationship]({% link _docs_use-cases/use-case-transport-accept-relationship.md %}) and [Reject Relationship]({% link _docs_use-cases/use-case-transport-reject-relationship.md %}). Accordingly, the Connector routes using RelationshipChanges were replaced. When using the two new Connector routes, which work directly on the Relationships, a request body no longer needs to be provided.
This means that no `content` must be sent with any of these operations anymore.
The former, more generic Connector routes using RelationshipChanges could also have been used to accept or reject changes to a Relationship other than the establishment of an active Relationship, which might have required the transmission of additional data.

| Old Connector route                                                                | New Connector route                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `PUT /api/v2/Relationships/{relationshipId}/Changes/{changeId}/Accept` (with body) | `PUT /api/v2/Relationships/{relationshipId}/Accept` (no body) |
| `PUT /api/v2/Relationships/{relationshipId}/Changes/{changeId}/Reject` (with body) | `PUT /api/v2/Relationships/{relationshipId}/Reject` (no body) |

#### Modifications to Relationship

A Relationship is returned by various Connector routes and events. The data object type [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) has been modified as follows due to the removal of the RelationshipChanges:

| Name                | Type                                                                                                                                                                                                                                               | Changes                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **status**          | `"Pending"` \| `"Active"` \| `"Rejected"` \| `"Revoked"` \|`"Terminated"` \| `"DeletionProposed"`                                                                                                                                                  | The type of the `status` property has been **changed**. The two statuses `"Terminated"` and `"DeletionProposed"` have been added because of the termination of Relationships.<br>{::nomarkdown}<ul><li>Terminated: this means that the Relationship has been terminated.</li><li>DeletionProposed: this means that one part of the Relationship wants to terminate the Relationship.</li></ul>{:/} |
| **changes**         | `RelationshipChange[]`                                                                                                                                                                                                                             | The `changes` property has been **removed**. The history of changes made to this Relationship is now recorded in the new `auditLog` property.                                                                                                                                                                                                                                                      |
| **creationContent** | [`RelationshipCreationContent`]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent) \| [`ArbitraryRelationshipCreationContent`]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent) | The `creationContent` property has been **added**. More information on the type of the `creationContent` property can be found in the section on [new mandatory wrappers]({% link _docs_integrate/migration-from-v4-to-v5.md %}#new-mandatory-wrappers-for-non-standard-content-of-messages-relationshiptemplates-and-relationships).                                                              |
| **auditLog**        | [`RelationshipAuditLogEntry`]({% link _docs_integrate/data-model-overview.md %}#relationshipauditlogentry)`[]`                                                                                                                                     | The `auditLog` property has been **added**. It stores the history of changes made to this Relationship, which was recorded in the former `changes` property. In order to typify the Relationship's `auditLog`, the new data object type [RelationshipAuditLogEntry was defined]({% link _docs_integrate/migration-from-v4-to-v5.md %}#definition-of-relationshipauditlogentry).                    |

#### Definition of RelationshipAuditLogEntry

The data object type [RelationshipAuditLogEntry]({% link _docs_integrate/data-model-overview.md %}#relationshipauditlogentry) was defined, which typifies the new `auditLog` property of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship).
For example, the first [RelationshipAuditLogEntry]({% link _docs_integrate/data-model-overview.md %}#relationshipauditlogentry) of the `auditLog` of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) has `"Creation"` as `reason`, no `oldStatus` and `"Pending"` as `newStatus` and is created by the Identity that has created the Relationship.

### New Mandatory Wrappers for Non-Standard Content of Messages, RelationshipTemplates and Relationships

New wrapping types have been introduced for sending arbitrary content that does not fit the standard content types of enmeshed, the [ArbitraryMessageContent]({% link _docs_integrate/data-model-overview.md %}#arbitrarymessagecontent) for [Messages]({% link _docs_integrate/data-model-overview.md %}#message) with non-standard `content`, the [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent) for [RelationshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) with non-standard `content` and the [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent) for [Relationships]({% link _docs_integrate/data-model-overview.md %}#relationship) with non-standard `creationContent`. Please note that the `creationContent` of the Relationship itself is newly introduced in the section about the [Removal of RelationshipChanges](#removal-of-relationshipchanges).
These new wrappers are all of the following form, whereby the `<...>` notation indicates a placeholder for one of the [transport types]({% link _docs_integrate/data-model-overview.md %}#transport-types) Message, RelationshipTemplate or Relationship:

```jsonc
{
  "@type": "Arbitrary<...>Content",
  "value": any,
}
```

Thus, when [sending a Message]({% link _docs_use-cases/use-case-transport-send-message-to-recipients.md %}) with non-standard `content` via `POST /api/v2/Messages`, instead of using the parameter `content : <arbitrary content of Message>`, it must be used:

```jsonc
"content": {
  "@type": "ArbitraryMessageContent",
  "value": <arbitrary content of Message>
}
```

Similarly, when [creating an own RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-own-relationshiptemplate.md %}) with non-standard `content` via the Connector route `POST /api/v2/RelationshipTemplates/Own`, it must be provided:

```jsonc
"content": {
  "@type": "ArbitraryRelationshipTemplateContent",
  "value": <arbitrary content of RelationshipTemplate>
}
```

Last but not least, when [creating a Relationship]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) with non-standard `creationContent` via the Connector route `POST /api/v2/Relationships`, it must be utilized:

```jsonc
"creationContent": {
  "@type": "ArbitraryRelationshipCreationContent",
  "value": <arbitrary content for creation of Relationship>
}
```

When reading the value from a [Message]({% link _docs_integrate/data-model-overview.md %}#message) or a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) with non-standard `content`, the relevant property is thus changed from `content` to `content.value`.
Similarly, when reading the value of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with non-standard `creationContent`, attention must be paid to the `creationContent.value` property.

### Removal of the `mustBeAccepted` Property of the RequestItemGroup

A [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) still provides a way of grouping the [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) contained in its `items` property in the UI. However, the `mustBeAccepted` property of the RequestItemGroup has now been removed, as it had easily misunderstood interactions with the `mustBeAccepted` property of the RequestItems. More precisely, a certain, complicated dependency of the acceptance of the RequestItems contained in its `items` property could be described via the `mustBeAccepted` property of the RequestItemGroup:

- If the value of the `mustBeAccepted` property of the RequestItemGroup was set to `true`, all RequestItems contained within its `items` property whose value of their respective `mustBeAccepted` property is `true` must be accepted if the entire Request is accepted. Included RequestItems whose value of their respective `mustBeAccepted` property is `false` could still be rejected.
- If the value of the `mustBeAccepted` property of the RequestItemGroup was set to `false`, all RequestItems contained in its `items` property could be rejected if the entire Request is accepted. However, if any RequestItem contained was to be accepted, all RequestItems whose `mustBeAccepted` property is `true` must also be accepted when the Request is accepted. In this respect, there was a dependency between the individual RequestItems.

It was not clear enough from the `mustBeAccepted` property of the RequestItemGroup which of the RequestItems contained within its `items` property are optional or mandatory, depending on how their respective values of the `mustBeAccepted` property are set.

Making it necessary to accept certain RequestItems once certain other RequestItems have been accepted is nevertheless a useful feature that will be provided in the future, but will be implemented without the `mustBeAccepted` property of the RequestItemGroup.
{: .notice--info}

In addition, in contrast to the RequestItems, a RequestItemGroup did not have to be explicitly accepted or rejected when a Request was accepted, which is why it was confusing that both the RequestItemGroups and the RequestItems had a `mustBeAccepted` property. Overall, it was therefore decided to remove the `mustBeAccepted` property of the RequestItemGroup.

The `mustBeAccepted` property of the RequestItems will be kept.
{: .notice--info}

Furthermore, please note that the removal of this property has resulted in the renaming of the error code `error.consumption.requests.decide.validation.itemAcceptedButParentNotAccepted` to `error.consumption.requests.decide.validation.itemAcceptedButRequestNotAccepted`, as listed and explained below in the section on [removed and changed error codes]({% link _docs_integrate/migration-from-v4-to-v5.md %}#removed-and-changed-error-codes).

### Changed Type of the `owner` Property of the ThirdPartyRelationshipAttributeQuery

The [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) is usually used within the `query` property of a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem), which in turn appears in the `items` property of a [Request]({% link _docs_integrate/data-model-overview.md %}#request). It is used to query an existing [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), which exists within a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the Recipient of the Request and a third party, as the Sender of the Request. The `owner` property of the ThirdPartyRelationshipAttributeQuery determines the `owner` of the queried RelationshipAttribute. Previously, it was possible within the `owner` property of the ThirdPartyRelationshipAttributeQuery to specify a concrete address for the `owner` of the queried RelationshipAttribute or an empty string as a placeholder for the address of the Recipient of the Request instead. Thus, a RelationshipAttribute could be queried which is owned by a specific third party or which is owned by the Recipient of the Request itself.

However, it was not possible to query a RelationshipAttribute that is owned by any of the third parties specified within the `thirdParty` property of the ThirdPartyRelationshipAttributeQuery. It was also not possible to query a RelationshipAttribute that could be owned by either one of the specified third parties or the Recipient of the Request. The type of the `owner` property of the ThirdPartyRelationshipAttributeQuery has therefore been changed to extend the functionalities. The values `""`, `"recipient"` or `"thirdParty"` can now be specified for this `owner` property. Specify the string `"recipient"` if the Recipient should be the `owner` of the queried RelationshipAttribute. Use the string `"thirdParty"` if any of the third parties specified in the array string `thirdParty` should be the `owner`. If both the Recipient and each of the given third parties may be the `owner`, an empty string `""` must be specified. Using this option is useful if the `owner` of the queried RelationshipAttribute is not known in advance.

This change enables the Sender of the Request to specify more precisely which Identity should be the `owner` of a RelationshipAttribute when querying it. As a result, real application scenarios can be better represented.

### Synchronization With Backbone Returns No Content Anymore

Previously, the [synchronization with the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) via the route `POST /api/v2/Account/Sync` returned a list of Relationships and Messages with the HTTP code 201. This has been changed to the sync returning nothing with the HTTP code 204. This removes the support for the workflow of regularly calling the sync and checking the response since unexpected response values happen if syncs are executed from different spots. We recommend working event-based with the [Message Broker Publisher Module]({% link _docs_operate/modules.md %}#messagebrokerpublisher), which sends events to a message broker you have set up. We send a variety of events like `consumption.incomingRequestReceived` or `consumption.incomingRequestStatusChanged`, each of them containing the relevant changed object. See [Connector Events]({% link _docs_integrate/connector-events.md %}) for the full list. Slightly related, we also recommend using the recently published [Server-Sent Events Module]({% link _docs_operate/modules.md %}#sse), which listens to events emitted from the Backbone and syncs with the Backbone when an event is received.

### Validation of Requests

Validations have been added when sending [Requests]({% link _docs_integrate/request-and-response-introduction.md %}#requests) and [responding to Requests]({% link _docs_integrate/data-model-overview.md %}#deciderequestitemparameters) to ensure the proper functioning of business processes. However, the added validations can also reduce flexibility in the use of Requests, which is why they could cause previously functioning Request flows to fail. Most affected by the changes are Requests where an [Attribute is shared with a peer]({% link _docs_integrate/share-attributes-with-peer.md %}), an [Attribute is proposed to a peer]({% link _docs_integrate/propose-attributes-to-peer.md %}), an [Attribute is read from a peer]({% link _docs_integrate/read-attributes-from-peer.md %}) or an [Attribute is created for a peer]({% link _docs_integrate/create-attributes-for-peer.md %}). In the case of problems with previously functioning Request flows that now fail, it is recommended that the corresponding documented scenarios be consulted. Descriptive error messages are also thrown to help restore the integrity of Request flows.

#### Sending of Requests

Even though reference has already been made to the corresponding scenarios in the documentation, a few examples of the added validation for sending Requests are given in the following.

- The new error code `error.consumption.requests.attributeQueryMismatch` has been implemented to mark provided [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) that do not fulfill a certain [AttributeQuery]({% link _docs_integrate/data-model-overview.md %}#attributequeries) accordingly. It is thrown, for example, if the Sender of the [Request]({% link _docs_integrate/data-model-overview.md %}#request), which contains a [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) within its `items` property, specifies an `attribute` and a `query` that are incompatible.
- If the Sender of a Request wants to share an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) that is owned by itself with the Recipient of the Request by using a [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem), the Sender must specify its associated [RepositoryAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) in the `attribute` property of the ShareAttributeRequestItem. It is no longer permitted to specify shared copies, meaning [own shared IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute), instead.

#### Responding to Requests

Even though reference has already been made to the corresponding scenarios in the documentation, a few examples of the added validation for responding to Requests are given in the following.

- The new error code `error.consumption.requests.attributeQueryMismatch` has been implemented to mark provided [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) that do not fulfill a certain [AttributeQuery]({% link _docs_integrate/data-model-overview.md %}#attributequeries) accordingly. It is thrown, for example, if the Attribute provided by the Recipient of the Request does not match the AttributeQuery specified in the `query` property of a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem).
- If a Request that contains a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem) whose `query` is a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or a [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) is sent, the Recipient of the Request can only validly answer a RelationshipAttributeQuery with a new Attribute, and a ThirdPartyRelationshipAttributeQuery with an existing Attribute. Otherwise, the error code [`error.consumption.requests.invalidAcceptParameters`]({% link _docs_integrate/error-codes.md %}#error.consumption.requests.invalidAcceptParameters) arises.

### Removed and Changed Error Codes

An overview of the [Error codes]({% link _docs_integrate/error-codes.md %}) that may occur is given on the corresponding documentation page. The most important changes regarding the error codes due to the update from version 4 to version 5 are:

- As already mentioned, the `mustBeAccepted` property of the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) has been removed. The [removal of this property]({% link _docs_integrate/migration-from-v4-to-v5.md %}#removal-of-the-mustbeaccepted-property-of-the-requestitemgroup) has also led to the replacement of the error code `error.consumption.requests.decide.validation.itemAcceptedButParentNotAccepted` with [`error.consumption.requests.decide.validation.itemAcceptedButRequestNotAccepted`]({% link _docs_integrate/error-codes.md %}#error.consumption.requests.decide.validation.itemAcceptedButRequestNotAccepted). This is because the word `"Parent"` contained in the former error code could refer to both the [Request]({% link _docs_integrate/data-model-overview.md %}#request) as a whole and to a RequestItemGroup contained within its `items` property. As RequestItemGroups are now only used for visual structuring in the UI of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) and no longer have any effect when accepting RequestItems, the word `"Parent"` can also be replaced by `"Request"`.
- The [address format was changed to DIDs]({% link _docs_integrate/migration-from-v4-to-v5.md %}#dids-as-addresses), which is why the `realm` property of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) was removed. Therefore, the error codes `error.runtime.MultiAccount.WrongRealm` and `error.transport.identity.realmLength` have been deleted.
- Since the [RelationshipChanges have been removed]({% link _docs_integrate/migration-from-v4-to-v5.md %}#removal-of-relationshipchanges), the corresponding error code `error.transport.relationships.wrongChangeStatus` was deleted as well. In this context, the error code `error.transport.messages.noMatchingRelationship` was substituted by the more appropriate error code [`error.transport.messages.missingOrInactiveRelationship`]({% link _docs_integrate/error-codes.md %}#error.transport.messages.missingOrInactiveRelationship).
- The error code `error.consumption.attributes.invalidPropertyValue` was removed and substituted by [`error.consumption.attributes.wrongOwnerOfRepositoryAttribute`]({% link _docs_integrate/error-codes.md %}#error.consumption.attributes.wrongOwnerOfRepositoryAttribute), which is a more specific error code.
- For reasons of consistency, the error code `inheritedFromItem` was replaced by [`error.consumption.validation.inheritedFromItem`]({% link _docs_integrate/error-codes.md %}#error.consumption.validation.inheritedFromItem). The replacement of error code `error.transport.secrets.wrongBaseKeyType` with [`error.transport.secrets.wrongSecretType`]({% link _docs_integrate/error-codes.md %}#error.transport.secrets.wrongSecretType) was done for the same reason.
- The error code `error.runtime.notifications.cannotSaveSendNotificationFromPeerMessage` was renamed to [`error.runtime.notifications.cannotSaveSentNotificationFromPeerMessage`]({% link _docs_integrate/error-codes.md %}#error.runtime.notifications.cannotSaveSentNotificationFromPeerMessage), because throwing this error is about marking a Notification as sent and not about sending a Notification.
- The two error codes `error.transport.datawallet.encryptedPayloadIsNoCipher` and `error.transport.files.fileContentUndefined` were eliminated, since they aren't used anymore. However, they were also not used before the migration.

### Removed, Changed and Added Use Cases

An overview of the [Use Cases]({% link _docs_integrate/use-cases.md %}) that may occur is given on the corresponding documentation page. The most important changes regarding the use cases due to the update from version 4 to version 5 are summarized in the following subsections. The effects of these changes on the Connector routes are also described.

#### Revocation of Relationships

The [Revoke Relationship]({% link _docs_use-cases/use-case-transport-revoke-relationship.md %}) use case has been added.
It is now possible to revoke a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` if it was created by yourself. To execute this use case, the Connector route `PUT /api/v2/Relationships/{id}/Revoke` can be used.

#### Removal of RelationshipChanges

The [removal of RelationshipChanges](#removal-of-relationshipchanges) is the reason why the following use cases are removed:

- The use case for accepting RelationshipChanges along with the associated Connector route `PUT /api/v2/Relationships/{id}/Changes/{changeId}/Accept`.
- The use case for rejecting RelationshipChanges along with the associated Connector route `PUT /api/v2/Relationships/{id}/Changes/{changeId}/Reject`.

Therefore, the following new use cases had to be added, which now provide these functionalities:

- The [Accept Relationship]({% link _docs_use-cases/use-case-transport-accept-relationship.md %}) use case along with the `PUT /api/v2/Relationships/{id}/Accept` Connector route.
- The [Reject Relationship]({% link _docs_use-cases/use-case-transport-reject-relationship.md %}) use case along with the `PUT /api/v2/Relationships/{id}/Reject` Connector route.

#### Termination of Relationships

Based on the restructuring of the Relationship by [removing the RelationshipChanges](#removal-of-relationshipchanges), the new functionality of [terminating Relationships]({% link _docs_integrate/terminate-relationships.md %}) was implemented. In connection with this feature, the following use cases have been added, whereby the corresponding added Connector routes can be found on the documentation pages of the respective use cases:

- [Terminate Relationship]({% link _docs_use-cases/use-case-transport-terminate-relationship.md %})
- [Request Relationship reactivation]({% link _docs_use-cases/use-case-transport-request-relationship-reactivation.md %})
- [Accept Relationship reactivation]({% link _docs_use-cases/use-case-transport-accept-relationship-reactivation.md %})
- [Reject Relationship reactivation]({% link _docs_use-cases/use-case-transport-reject-relationship-reactivation.md %})
- [Revoke Relationship reactivation]({% link _docs_use-cases/use-case-transport-revoke-relationship-reactivation.md %})
- [Decompose Relationship]({% link _docs_use-cases/use-case-transport-decompose-relationship.md %})

#### Renaming of the Use Case GetSharedVersionsOfRepositoryAttribute to GetSharedVersionsOfAttribute

Taking [ThirdPartyRelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute) into account, we wanted to extend the functionality of the use case of getting shared versions of a [RepositoryAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute) to [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).

For this reason, the [Get shared versions of an Attribute]({% link _docs_use-cases/use-case-consumption-get-shared-versions-of-an-attribute.md %}) use case was already added in version 4 and the use case of getting shared versions of a RepositoryAttribute was marked as deprecated.
It has now been deleted with the update to version 5.

Please note, however, that the Connector route `GET /api/v2/Attributes/{id}/Versions/Shared` that belonged to the use case of getting shared versions of a RepositoryAttribute can still be used. If the Connector route `GET /api/v2/Attributes/{id}/Versions/Shared` is executed, the [Get shared versions of an Attribute]({% link _docs_use-cases/use-case-consumption-get-shared-versions-of-an-attribute.md %}) use case is now executed instead.
As the functionality has only been extended, there is no breaking change with regard to the Connector route.

#### Less Input Needed for the Use Case CreateRepositoryAttribute

In version 4, there was already a use case for creating Attributes for yourself that could be executed by Connector route `POST /api/v2/Attributes`.
An Attribute created for yourself is automatically an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) which is owned by yourself.
Technically, this corresponds exactly to the creation of a [RepositoryAttribute]({% link _docs_integrate/data-model-overview.md %}#localattribute).
Therefore, the use case for creating Attributes for yourself is named the [Create a RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-create-a-repositoryattribute.md %}) use case.

When [creating Attributes for yourself]({% link _docs_integrate/create-attributes-for-yourself.md %}), it is therefore apparently not valuable to have to explicitly specify that an IdentityAttribute should be created instead of a RelationshipAttribute and that the IdentityAttribute should be owned by yourself instead of another Identity.
For this reason, when executing the Connector route `POST /api/v2/Attributes`, which corresponds to the execution of the associated [Create a RepositoryAttribute]({% link _docs_use-cases/use-case-consumption-create-a-repositoryattribute.md %}) use case, less input must now be provided, since the `@type` and the `owner` of the [Attribute]({% link _docs_integrate/data-model-overview.md %}#attributes) to be created may no longer be specified.

### Renamed and Added Events

There are several [Connector events]({% link _docs_integrate/connector-events.md %}) which have been added. Regarding the [termination of Relationships]({% link _docs_integrate/terminate-relationships.md %}), for example, the following have been added:

- `transport.relationshipReactivationRequested`
- `transport.relationshipReactivationCompleted`
- `transport.relationshipDecomposedBySelf`

The [event]({% link _docs_integrate/connector-events.md %}) `consumption.outgoingRequestFromRelationshipCreationChangeCreatedAndCompleted` was renamed to `consumption.outgoingRequestFromRelationshipCreationCreatedAndCompleted` due to the [removal of RelationshipChanges](#removal-of-relationshipchanges).

An overview of the [Connector Events]({% link _docs_integrate/connector-events.md %}) that may occur is given on the corresponding documentation page.
{: .notice --info}

### Renamed Modules

Some [Modules]({% link _docs_operate/modules.md %}) of the Connector have been renamed:

- The AutoAcceptRelationshipCreationChangesModule has been renamed to the [AutoAcceptPendingRelationshipsModule]({% link _docs_operate/modules.md %}#autoacceptpendingrelationships), because the [RelationshipChanges have been removed]({% link _docs_integrate/migration-from-v4-to-v5.md %}#removal-of-relationshipchanges). For this reason, the `modules.autoAcceptRelationshipCreationChanges` field must be renamed to `modules.autoAcceptPendingRelationships` in the [configuration]({% link _docs_operate/configuration.md %}#autoacceptpendingrelationships) if it was previously specified. The `modules.autoAcceptRelationshipCreationChanges.responseContent` field must be removed additionally.
- The WebhooksV2Module module has already been renamed to the [WebhooksModule]({% link _docs_operate/modules.md %}#webhooks) in version 4. However, backwards compatibility was ensured. With the migration to version 5, the `modules.webhooksV2` field must be renamed to `modules.webhooks` in the [configuration]({% link _docs_operate/configuration.md %}#webhooks) if it was previously specified and the migration to the WebhooksModule has not yet taken place.

An overview of the [Connector Modules]({% link _docs_operate/modules.md %}) that may occur is given on the corresponding documentation page.
{: .notice --info}
