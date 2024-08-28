---
# Start automatic generation
permalink: integrate/version-5
published: true
title: "Version 5"
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
  - link: version-5
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
More [detailed explanations]({% link _docs_integrate/version-5.md %}#detailed-explanations) can be found below.

### Connector Setup

- The data from the database that was used by the Connector of the former version is outdated. This is because the [format of addresses has changed to DIDs]({% link _docs_integrate/version-5.md %}#dids-as-addresses), for example. For this reason, the old data must be deleted. Alternatively, the database can be deleted as a whole and [set up again]({% link _docs_operate/setup-with-docker-compose.md %}).
- The [image](https://github.com/nmshd/connector?tab=readme-ov-file#connector) used to build the Connector must be updated to version 5.
- Some changes must be made to the [configuration]({% link _docs_operate/configuration.md %}) of the Connector.
  - It must be ensured that a [Backbone](https://github.com/nmshd/backbone/tags) is used which is compatible with version 5 of the Connector. This means that a Backbone of version 6 must be used. Therefore, specify appropriate [Backbone credentials]({% link _docs_operate/configuration.md %}#transportlibrary) in the configuration.
  - The AutoAcceptRelationshipCreationChangesModule must be renamed to the [AutoAcceptPendingRelationshipsModule]({% link _docs_operate/configuration.md %}#autoacceptpendingrelationships), because the [RelationshipChanges have been removed]({% link _docs_integrate/version-5.md %}#removal-of-relationshipchanges). In addition, the `responseContent` property of the Module must be removed in its configuration.
  - The WebhooksV2Module must be renamed to the [WebhooksModule]({% link _docs_operate/configuration.md %}#webhooks).

### Removed and Changed Data Structures

- The [RelationshipChanges have been removed]({% link _docs_integrate/version-5.md %}#removal-of-relationshipchanges).
  - This has led to the removal of the `changes` property of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) and the addition of the `creationContent` and `auditLog` properties to the Relationship.
  - In particular, the use cases for accepting and rejecting RelationshipChanges had to be removed. With the use cases [Accept Relationship]({% link _docs_use-cases/use-case-transport-accept-relationship.md %}) and [Reject Relationship]({% link _docs_use-cases/use-case-transport-reject-relationship.md %}), two [new use cases]({% link _docs_integrate/version-5.md %}#removed-changed-and-added-use-cases) have been added that now provide these functionalities.
  - For this reason, the route `PUT /api/v2/Relationships/{id}/Accept` must be executed instead of the route `PUT /api/v2/Relationships/{id}/Changes/{changeId}/Accept` and the route `PUT /api/v2/Relationships/{id}/Reject` must be executed instead of the route `PUT /api/v2/Relationships/{id}/Changes/{changeId}/Reject` when using the Connector.
- ...
- ...
- ...
- ...

### Removed and Renamed Use Cases and Events

- ...
- ...
- ...
- ...
- ...

## Detailed Explanations

The aspects to be taken into account when migrating to version 5, which were briefly described in the [step-by-step instructions]({% link _docs_integrate/version-5.md %}#step-by-step-instructions), are explained in more detail in the following.

### DIDs as Addresses

The address format changed from `<3-character realm><32 or 33-character base58-string>` to `did:e:<backbone-hostname>:dids:<22-character lowercase hex string>`.

### Removal of RelationshipChanges

RelationshipChanges were removed. The only type of RelationshipChange used before was the CreationChange, its `content` has been moved to a new property of the relationship - the `creationContent`. If this content has been created by responding to a [Request]({% link _docs_integrate/data-model-overview.md %}#request) of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate), the [content]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) changes as follows: The `<relationshipChange>.request.content` value was of type `RelationshipCreationChangeRequestContent`, the `<relationship>.creationContent` is now of type `RelationshipCreationContent`.

The Connector route for creating the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) is unchanged, the Connector routes using RelationshipChanges (accept, reject RelationshipChange) were replaced with corresponding routes on the Relationship. No `content` must be sent with any of those operations. The operations are recorded in the new `auditLog` property of the Relationship.

| old Connector route                                                    | new Connector route                                 |
| ---------------------------------------------------------------------- | --------------------------------------------------- |
| PUT `Relationships/relationshipId/Changes/changeId/Accept` (with body) | PUT `Relationships/relationshipId/Accept` (no body) |
| PUT `Relationships/relationshipId/Changes/changeId/Reject` (with body) | PUT `Relationships/relationshipId/Reject` (no body) |

The Relationship (which is returned by various Connector routes and events) is hence in total changed like this

#### Relationship

| Name                | Type                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Changes                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| id                  | `string`                                                                                          | {% include descr_id class="Relationship" prefix="REL" %}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                |
| template            | [`RelationshipTemplate`]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)  | The RelationshipTemplate that was used to establish this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                |
| status              | `"Pending"` \| `"Active"` \| `"Rejected"` \| `"Revoked"` \|`"Terminated"` \| `"DeletionProposed"` | The status of this Relationship. <br>{::nomarkdown}<ul><li>Pending: the Relationship was created, but not yet accepted the recipient. In this state you cannot send Messages yet.</li><li>Active: this means that the Relationship is active. As long as it is active, both participants can exchange Messages.</li><li>Rejected: the Relationship was rejected by the recipient.</li><li>Revoked: the Relationship was revoked by the sender.</li><li>Terminated: this means that the Relationship has been terminated.</li><li>DeletionProposed: this means that one part of the Relationship wants to terminate the Relationship.</li></ul>{:/} | `"Terminated"` and `"DeletionProposed"` has been added because of the RelationshipTermination. |
| **changes**         | `RelationshipChange[]`                                                                            | The history of changes made to this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **removed**                                                                                    |
| peer                | `string`                                                                                          | The Address of the Identity with which you have this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                |
| peerIdentity        | [`Identity`]({% link _docs_integrate/data-model-overview.md %}#identity)                          | The Address and the publicKey of the Identity with which you have this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                |
| **creationContent** | `any`                                                                                             | The `creationContent` regarding this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **new**                                                                                        |
| **auditLog**        | `RelationshipAuditLogEntry[]`                                                                     | The history of changes made to this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **new**                                                                                        |

#### RelationshipAuditLogEntry

| Name            | Type                                                                                                                                                                                                                                                                | Description                                                                                                                       | Remarks                                                                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| createdAt       | `string`                                                                                                                                                                                                                                                            | A timestamp that describes when the `status` of the Relationship changed.                                                         |                                                                                                                                                                                                                                               |
| createdBy       | `string`                                                                                                                                                                                                                                                            | The Address of the Identity that created the RelationshipAuditLogEntry.                                                           |                                                                                                                                                                                                                                               |
| createdByDevice | `string`                                                                                                                                                                                                                                                            | The ID of the Device that created the RelationshipAuditLogEntry. You can use this information to track back who exactly did what. |
| reason          | `"Creation"` \| `"AcceptanceOfCreation"` \| `"RejectionOfCreation"` \| `"RevocationOfCreation"` \| `"Termination"` \| `"ReactivationRequested"` \| `"AcceptanceOfReactivation"` \| `"RejectionOfReactivation"` \| `"RevocationOfReactivation"` \| `"Decomposition"` | The reason why the `status` of the Relationship changed.                                                                          | The values for `reason` like `"Termination"`, `"ReactivationRequested"`, `"AcceptanceOfReactivation"`, `"RejectionOfReactivation"`, `"RevocationOfReactivation"` and `"Decomposition"` has been added because of the RelationshipTermination. |
| oldStatus?      | `"Pending"` \| `"Active"` \| `"Rejected"` \| `"Revoked"` \| `"DeletionProposed"`                                                                                                                                                                                    | The `status` the Relationship had before.                                                                                         | `"DeletionProposed"` has been added because of the RelationshipTermination and therefore the oldStatus can have also other values than only `"Pending"` like before.                                                                          |
| newStatus       | `"Pending"` \| `"Active"` \| `"Rejected"` \| `"Revoked"` \|`"Terminated"` \| `"DeletionProposed"`                                                                                                                                                                   | The `status` the Relationship has now.                                                                                            | `"Terminated"` and `"DeletionProposed"` has been added because of the RelationshipTermination.                                                                                                                                                |

E.g. the first `auditLogEntry` has the reason `Creation`, no `oldStatus` and `newStatus` `"Pending"` and is created by the one who created the Relationship.

### Validation of Requests

Validations have been added when sending [Requests]({% link _docs_integrate/request-and-response-introduction.md %}#requests) and [responding to Requests]({% link _docs_integrate/data-model-overview.md %}#deciderequestitemparameters) to ensure the proper functioning of business processes. However, the added validations can also reduce flexibility in the use of Requests, which is why they could cause previously functioning Request flows to fail. Most affected by the changes are Requests where an [Attribute is shared with a peer]({% link _docs_integrate/share-attributes-with-peer.md %}), an [Attribute is proposed to a peer]({% link _docs_integrate/propose-attributes-to-peer.md %}), an [Attribute is read from a peer]({% link _docs_integrate/read-attributes-from-peer.md %}) or an [Attribute is created for a peer]({% link _docs_integrate/create-attributes-for-peer.md %}). In the case of problems with previously functioning Request flows that now fail, it is recommended that the corresponding documented scenarios be consulted. Descriptive error messages are also thrown to help restore the integrity of Request flows.

#### Sending of Requests

Even though reference has already been made to the corresponding scenarios in the documentation, a few examples of the added validation for sending Requests are given in the following.

- The new error code `error.consumption.requests.attributeQueryMismatch` has been implemented to mark provided [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) that do not fulfil a certain [AttributeQuery]({% link _docs_integrate/data-model-overview.md %}#attributequeries) accordingly. It is thrown, for example, if the Sender of the Request, which contains a [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) within its `items` property, specifies an `attribute` and a `query` that are incompatible.
- If the Sender of a Request wants to share an [IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#identityattributes) that is owned by itself with the Recipient of the Request by using a [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem), the Sender must specify its associated [RepositoryAttribute]({% link _docs_integrate/attribute-introduction.md %}#repositoryattributes) in the `attribute` property of the ShareAttributeRequestItem. It is no longer permitted to specify shared copies ([own shared IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute)) instead.

#### Responding to Requests

Even though reference has already been made to the corresponding scenarios in the documentation, a few examples of the added validation for responding to Requests are given following.

- The new error code `error.consumption.requests.attributeQueryMismatch` has been implemented to mark provided [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) that do not fulfil a certain [AttributeQuery]({% link _docs_integrate/data-model-overview.md %}#attributequeries) accordingly. It is thrown, for example, if the Attribute provided by the Recipient of the Request does not match the AttributeQuery specified in the `query` property of a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem).
- If the Sender of a Request that contains a ReadAttributeRequestItem whose `query` is a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or a [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery), the Recipient of the Request can only validly answer a RelationshipAttributeQuery with a new Attribute, and a ThirdPartyRelationshipAttributeQuery with an existing Attribute. Otherwise, the [error code `error.consumption.requests.invalidAcceptParameters`]({% link _docs_integrate/error-codes.md %}#error.consumption.requests.invalidAcceptParameters) arises.

### Removal of the `mustBeAccepted` Property of the RequestItemGroup

A [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) still provides a way of grouping the [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) contained in its `items` property in the UI. However, **the `mustBeAccepted` property of the RequestItemGroup has now been removed**, as it had easily misunderstood interactions with the `mustBeAccepted` property of the RequestItems. More precisely, a certain, complicated dependency of the acceptance of the RequestItems contained in its `items` property could be described via the `mustBeAccepted` property of the RequestItemGroup:

- If the value of the `mustBeAccepted` property of the RequestItemGroup was set to `"true"`, all RequestItems contained within its `items` property whose value of their respective `mustBeAccepted` property is `"true"` could be accepted if the entire Request is accepted. Included RequestItems whose value of their respective `mustBeAccepted` property is `"false"` could still be rejected.
- If the value of the `mustBeAccepted` property of the RequestItemGroup was set to `"false"`, all RequestItems contained in its `items` property could be rejected if the entire Request is accepted. However, if any RequestItem contained was to be accepted, all RequestItems whose `mustBeAccepted` property is `"true"` could also be accepted when the Request is accepted. In this respect, there was a dependency between the individual RequestItems.

It was not clear enough from the `mustBeAccepted` property of the RequestItemGroup which of the RequestItems contained within its `items` property are optional or mandatory, depending on how their respective values of the `mustBeAccepted` property are set.

Making it necessary to accept certain RequestItems once certain other RequestItems have been accepted is nevertheless a useful feature that will be provided in the future, but will be implemented without the `mustBeAccepted` property of the RequestItemGroup.
{: .notice--info}

In addition, in contrast to the RequestItems, a RequestItemGroup did not have to be explicitly accepted or rejected when a Request was accepted, which is why it was confusing that both the RequestItemGroups and the RequestItems had a `mustBeAccepted` property. Overall, it was therefore decided to remove the `mustBeAccepted` property of the RequestItemGroup.

The `mustBeAccepted` property of the RequestItems will be kept.
{: .notice--info}

### New Mandatory Wrappers for Non-Standard Content of Messages, RelationshipTemplates and Relationships

New wrapping types have been introduced for sending arbitrary content that does not fit the standard content types of enmeshed, the [ArbitraryMessageContent]({% link _docs_integrate/data-model-overview.md %}#arbitrarymessagecontent) for [Messages]({% link _docs_integrate/data-model-overview.md %}#message) with non-standard `content`, the [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent) for [RelationshipTemplates]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) with non-standard `content` and the [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent) for [Relationships]({% link _docs_integrate/data-model-overview.md %}#relationship) with non-standard `creationContent`. Please note that the `creationContent` of the Relationship itself is newly introduced in the section about the [Removal of RelationshipChanges](#removal-of-relationshipchanges).

- The `content` of a [Message]({% link _docs_integrate/data-model-overview.md %}#message) must either be a [Mail]({% link _docs_integrate/data-model-overview.md %}#mail), a [Request]({% link _docs_integrate/data-model-overview.md %}#request), a [ResponseWrapper]({% link _docs_integrate/data-model-overview.md %}#responsewrapper), a [Notification]({% link _docs_integrate/data-model-overview.md %}#notification) or an [ArbitraryMessageContent]({% link _docs_integrate/data-model-overview.md %}#arbitrarymessagecontent).

- The `content` of a [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate) must either be a [RelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) or an [ArbitraryRelationshipTemplateContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshiptemplatecontent).

- The `creationContent` of a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) must either be a [RelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#relationshipcreationcontent) or an [ArbitraryRelationshipCreationContent]({% link _docs_integrate/data-model-overview.md %}#arbitraryrelationshipcreationcontent).

These new wrappers are all of the following form, whereby the `<...>` notation indicates a placeholder for one of the transport types Message, RelationshipTemplate or Relationship:

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

Similarly, when [creating an own RelationshipTemplate]({% link _docs_use-cases/use-case-transport-create-own-relationshiptemplate.md %}) with non-standard `content` via `POST /api/v2/RelationshipTemplates/Own`, it must be used:

```jsonc
"content": {
  "@type": "ArbitraryRelationshipTemplateContent",
  "value": <arbitrary content of RelationshipTemplate>
}
```

Last but not least, when [creating a Relationship]({% link _docs_use-cases/use-case-transport-create-relationship-with-relationshiptemplate.md %}) with non-standard `creationContent` via `POST /api/v2/Relationships`, it must be used:

```jsonc
"creationContent": {
  "@type": "ArbitraryRelationshipCreationContent",
  "value": <arbitrary content for creation of Relationship>
}
```

When reading the value from a Message or a RelationshipTemplate with non-standard `content`, the relevant property is thus changed from `content` to `content.value`.
Similarly, when reading the value of a Relationship with non-standard `creationContent`, attention must be paid to the `creationContent.value` property.

### Synchronization With Backbone Returns No Content Anymore

Previously, the [synchronization with the Backbone]({% link _docs_use-cases/use-case-transport-synchronize-updates-of-backbone.md %}) via the route `POST /api/v2/Account/Sync` returned a list of Relationships and Messages with the HTTP code 201. This has been changed to the sync returning nothing with the HTTP code 204. This removes the support for the workflow of regularly calling the sync and checking the response since unexpected response values happen if syncs are executed from different spots. We recommend working event-based with the [Message Broker Publisher Module]({% link _docs_operate/modules.md %}#messagebrokerpublisher), which sends events to a message broker you have set up. We send a variety of events like `consumption.incomingRequestReceived` or `consumption.incomingRequestStatusChanged`, each of them containing the relevant changed object. See [Connector Events]({% link _docs_integrate/connector-events.md %}) for the full list. Slightly related, we also recommend using the recently published [Server-Sent Events Module]({% link _docs_operate/modules.md %}#sse), which listens to events emitted from the Backbone and syncs with the Backbone when an event is received.

### Changed and Deleted Error Codes

- The removal of the `mustBeAccepted` property of the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) also resulted in error `"error.consumption.requests.decide.validation.itemAcceptedButParentNotAccepted"` was replaced by error `"error.consumption.requests.decide.validation.itemAcceptedButRequestNotAccepted"` and being used slightly differently in future. This is because the word `Parent` contained in the error code could refer to both the [Request]({% link _docs_integrate/request-and-response-introduction.md %}#requests) as a whole and a RequestItemGroup. As RequestItemGroups are now only used for visual structuring in the UI of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) and no longer have any effect when accepting RequestItems, the word `Parent` can also be replaced by Request.
- The error `"error.runtime.MultiAccount.WrongRealm"` and `"error.transport.identity.realmLength"` were removed because the address format has been changed and the property `realm` therefore has been removed.
- Since the RelationshipChanges has been removed, the corresponding error `"error.transport.relationships.wrongChangeStatus"` was cancelled too. In this context the error `"error.transport.messages.noMatchingRelationship"` was substituted by the more appropriate [`"error.transport.messages.missingOrInactiveRelationship"`]({% link _docs_integrate/error-codes.md %}#error.transport.messages.missingOrInactiveRelationship).
- The error `"error.consumption.attributes.invalidPropertyValue"` was removed and substituted by the more specific error [`"error.consumption.attributes.wrongOwnerOfRepositoryAttribute"`]({% link _docs_integrate/error-codes.md %}#error.consumption.attributes.wrongOwnerOfRepositoryAttribute).
- `"inheritedFromItem"` was replaced by [`"error.consumption.validation.inheritedFromItem"`]({% link _docs_integrate/error-codes.md %}#error.consumption.validation.inheritedFromItem) for reasons of consistency. Because of the same reason `"error.transport.secrets.wrongBaseKeyType"` was replaced by [`"error.transport.secrets.wrongSecretType"`]({% link _docs_integrate/error-codes.md %}#error.transport.secrets.wrongSecretType). Further the error `"error.runtime.notifications.cannotSaveSendNotificationFromPeerMessage"` was replaced by `"error.runtime.notifications.cannotSaveSentNotificationFromPeerMessage"` because in this case it is about marking a Notification as sent, rather then sending a Notification.
- `"error.transport.datawallet.encryptedPayloadIsNoCipher"` and `"error.transport.files.fileContentUndefined"` were eliminated, since they aren't used anymore. But also before the migration they haven't been used.

### Changed Type of the `owner` Property of the ThirdPartyRelationshipAttributeQuery

The [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) is usually used within the `query` property of a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem), which in turn appears in the `items` property of a Request, to query an existing [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), which exists within a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the Recipient of the Request and a third party, as the Sender of the Request. The `owner` property of the ThirdPartyRelationshipAttributeQuery determines the `owner` of the queried RelationshipAttribute. Previously, it was possible within the `owner` property of the ThirdPartyRelationshipAttributeQuery to specify a concrete address for the `owner` of the queried RelationshipAttribute or an empty string as a placeholder instead.

However, it was not possible, for example, to query a RelationshipAttribute that belongs to any of the third parties specified within the `thirdParty` property of the ThirdPartyRelationshipAttributeQuery, but only to a specific third party (by specifying its address) or that belongs to the specified third parties, but also to the Recipient of the Request (by specifying an empty string). The type of the `owner` property of the ThirdPartyRelationshipAttributeQuery has therefore been changed. The values `""`, `"recipient"` or `"thirdParty"` can now be specified for this `owner` property. Specify the string `"recipient"` if the Recipient should be the `owner` of the queried RelationshipAttribute. Use the string `"thirdParty"` if any of the third parties specified in the array string `thirdParty` should be the `owner`. If both the Recipient and each of the given third parties may be the `owner`, an empty string `""` must be specified. Using this option is useful if the `owner` of the queried RelationshipAttribute is not known in advance.

This change enables the Sender of the Request to specify more precisely who the `owner` of a RelationshipAttribute should be when querying it and better reflects real application scenarios.

### Removed, Changed and Added Use Cases

#### Revocation of Relationships

The [Revoke Relationship]({% link _docs_use-cases/use-case-transport-revoke-relationship.md %}) use case has been added.
It is now possible to revoke a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with `"Pending"` as `status` if it was created by yourself.

#### Removal of RelationshipChanges

The [removal of RelationshipChanges](#removal-of-relationshipchanges) is the reason why the following use cases are removed:

- Accept RelationshipChange
- Reject RelationshipChange

Therefore, the following new use cases had to be added, which now provide these functionalities:

- [Accept Relationship]({% link _docs_use-cases/use-case-transport-accept-relationship.md %})
- [Reject Relationship]({% link _docs_use-cases/use-case-transport-reject-relationship.md %})

#### Termination of Relationships

Based on the restructuring of the Relationship by [removing the RelationshipChanges](#removal-of-relationshipchanges), the new functionality of [terminating Relationships]({% link _docs_integrate/terminate-relationships.md %}) was implemented. In connection with this feature, the following use cases have been added:

- [Terminate Relationship]({% link _docs_use-cases/use-case-transport-terminate-relationship.md %})
- [Decompose Relationship]({% link _docs_use-cases/use-case-transport-decompose-relationship.md %})
- [Request Relationship reactivation]({% link _docs_use-cases/use-case-transport-request-relationship-reactivation.md %})
- [Accept Relationship reactivation]({% link _docs_use-cases/use-case-transport-accept-relationship-reactivation.md %})
- [Reject Relationship reactivation]({% link _docs_use-cases/use-case-transport-reject-relationship-reactivation.md %})
- [Revoke Relationship reactivation]({% link _docs_use-cases/use-case-transport-revoke-relationship-reactivation.md %})

#### Renaming of the Use Case GetSharedVersionsOfRepositoryAttribute to GetSharedVersionsOfAttribute

- Taking ThirdPartyRelationshipAttributes into account, we wanted to extend the functionality of this use case for [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).
- The use case GetSharedVersionsOfAttribute was already added in version 4 and GetSharedVersionsOfRepositoryAttribute was marked as deprecated. With version 5 it is deleted.

An overview of the [Use Cases]({% link _docs_integrate/use-cases.md %}) that may occur is given in the corresponding section.

### Renamed and Added Events

There are several Events which has been added. For example regarding the RelationshipTermination the following has been added:

- `"transport.relationshipDecomposedBySelf"`
- `"transport.relationshipReactivationCompleted"`
- `"transport.relationshipReactivationRequested"`

The Event `consumption.outgoingRequestFromRelationshipCreationChangeCreatedAndCompleted` was renamed to `consumption.outgoingRequestFromRelationshipCreationCreatedAndCompleted` because of the [removal of RelationshipChanges](#removal-of-relationshipchanges).

An overview of the [Connector events]({% link _docs_integrate/connector-events.md %}) that may occur is given in the corresponding section.

### Renamed Modules

Some [Modules]({% link _docs_operate/modules.md %}) of the Connector have been renamed.

- The AutoAcceptRelationshipCreationChangesModule has been renamed to the [AutoAcceptPendingRelationshipsModule]({% link _docs_operate/modules.md %}#autoacceptpendingrelationships), because the [RelationshipChanges have been removed]({% link _docs_integrate/version-5.md %}#removal-of-relationshipchanges). In addition, the Module no longer has a `creationContent` property in its [configuration]({% link _docs_operate/configuration.md %}#autoacceptpendingrelationships).
- The WebhooksV2Module has been renamed to the [WebhooksModule]({% link _docs_operate/modules.md %}#webhooks).
