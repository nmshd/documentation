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
  - published:
  - link: version-5
require:
required_by:
# End automatic generation
---

## DIDs as addresses

The address format changed from `<3-character realm><32 or 33-character base58-string>` to `did:e:<backbone-hostname>:dids:<22-character lowercase hex string>`.
This means that the property `realm` of LocalAccount was removed.

## Removal of RelationshipChanges

RelationshipChanges were removed. The only type of RelationshipChange used before was the CreationChange, its `content` has been moved to a new property of the relationship creation content - the `creationContent`. If this `content` has been created by responding to a [Request]({% link _docs_integrate/data-model-overview.md %}#request) of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate), the [`content`]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) changes as follows:

| `<relationshipChange>.request.content`                          | `<relationship>.creationContent`                   |
| --------------------------------------------------------------- | -------------------------------------------------- |
| value when created from a response to a request:                | value when created from a response to a request:   |
| `{@type: "RelationshipCreationChangeRequestContent", response}` | `{@type: "RelationshipCreationContent", response}` |

The Connector route for creating the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) is unchanged, the Connector routes using RelationshipChanges (accept, reject RelationshipChange) were replaced with corresponding routes on the Relationship. No `content` must be sent with any of those operations. The operations are recorded in the new `auditLog` property of the Relationship.

| old Connector route                                                    | new Connector route                                 |
| ---------------------------------------------------------------------- | --------------------------------------------------- |
| PUT `Relationships/relationshipId/Changes/changeId/Accept` (with body) | PUT `Relationships/relationshipId/Accept` (no body) |
| PUT `Relationships/relationshipId/Changes/changeId/Reject` (with body) | PUT `Relationships/relationshipId/Reject` (no body) |

The Relationship (which is returned by various Connector routes and events) is hence in total changed like this

### Relationship

| Name                | Type                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Changes                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| id                  | `string`                                                                                          | {% include descr_id class="Relationship" prefix="REL" %}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                |
| template            | [`RelationshipTemplate`]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate)  | The RelationshipTemplate that was used to establish this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                |
| status              | `"Pending"` \| `"Active"` \| `"Rejected"` \| `"Revoked"` \|`"Terminated"` \| `"DeletionProposed"` | The status of this Relationship. <br>{::nomarkdown}<ul><li>Pending: the Relationship was created, but not yet accepted the recipient. In this state you cannot send Messages yet.</li><li>Active: this means that the Relationship is active. As long as it is active, both participants can exchange Messages.</li><li>Rejected: the Relationship was rejected by the recipient.</li><li>Revoked: the Relationship was revoked by the sender.</li><li>Terminated: this means that the Relationship has been terminated.</li><li>DeletionProposed: this means that one part of the Relationship wants to terminate the Relationship.</li></ul>{:/} | `"Terminated"` and `"DeletionProposed"` has been added because of the RelationshipTermination. |
| **changes**         | `RelationshipChange[]`                                                                            | The history of changes made to this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **removed**                                                                                    |
| peer                | `string`                                                                                          | The Address of the Identity with which you have this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                |
| peerIdentity        | [`Identity`]({% link _docs_integrate/data-model-overview.md %}#identity)                          | The Address and the publicKey of the Identity with which you have this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                |
| **creationContent** | `any`                                                                                             | The `creationContent` regarding this Relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **new**                                                                                        |
| **auditLog**        | `RelationshipAuditLog[]`                                                                          | The history of changes made to this Relationship saved in the auditLogEntries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **new**                                                                                        |

, where the `auditLog` is an array of auditLogEntries.

### AuditLogEntry

| Name            | Type                                                                                                                                                                                                                                                                | Description                                                                                                           | Remarks                                                                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| createdAt       | `string`                                                                                                                                                                                                                                                            | A timestamp that describes when the `status` of the Relationship changed.                                             |                                                                                                                                                                                                                                               |
| createdBy       | `string`                                                                                                                                                                                                                                                            | The Address of the Identity that created the AuditLogEntry.                                                           |                                                                                                                                                                                                                                               |
| createdByDevice | `string`                                                                                                                                                                                                                                                            | The ID of the Device that created the AuditLogEntry. You can use this information to track back who exactly did what. |
| reason          | `"Creation"` \| `"AcceptanceOfCreation"` \| `"RejectionOfCreation"` \| `"RevocationOfCreation"` \| `"Termination"` \| `"ReactivationRequested"` \| `"AcceptanceOfReactivation"` \| `"RejectionOfReactivation"` \| `"RevocationOfReactivation"` \| `"Decomposition"` | The reason why the `status` of the Relationship changed.                                                              | The values for `reason` like `"Termination"`, `"ReactivationRequested"`, `"AcceptanceOfReactivation"`, `"RejectionOfReactivation"`, `"RevocationOfReactivation"` and `"Decomposition"` has been added because of the RelationshipTermination. |
| oldStatus?      | `"Pending"` \| `"Active"` \| `"Rejected"` \| `"Revoked"` \| `"DeletionProposed"`                                                                                                                                                                                    | The `status` the Relationship had before.                                                                             | `"DeletionProposed"` has been added because of the RelationshipTermination and therefore the oldStatus can have also other values than only `"Pending"` like before.                                                                          |
| newStatus       | `"Pending"` \| `"Active"` \| `"Rejected"` \| `"Revoked"` \|`"Terminated"` \| `"DeletionProposed"`                                                                                                                                                                   | The `status` the Relationship has now.                                                                                | `"Terminated"` and `"DeletionProposed"` has been added because of the RelationshipTermination.                                                                                                                                                |

E. g. the first `auditLogEntry` has the reason `Creation`, no `oldStatus` and `newStatus` `"Pending"` and is created by the one who created the Relationship.

## Validation of [Requests]({% link _docs_integrate/request-and-response-introduction.md %}#requests)

Validations have been added when sending [Requests]({% link _docs_integrate/request-and-response-introduction.md %}#requests) and [responding to Requests]({% link _docs_integrate/data-model-overview.md %}#deciderequestitemparameters) to ensure the proper functioning of business processes. However, the added validations can also reduce flexibility in the use of Requests, which is why they could cause previously functioning Request flows to fail. Most affected by the changes are Requests where an [Attribute is shared with a peer]({% link _docs_integrate/share-attributes-with-peer.md %}), an [Attribute is proposed to a peer]({% link _docs_integrate/propose-attributes-to-peer.md %}), an [Attribute is read from a peer]({% link _docs_integrate/read-attributes-from-peer.md %}) or an [Attribute is created for a peer]({% link _docs_integrate/create-attributes-for-peer.md %}). In the case of problems with previously functioning Request flows that now fail, it is recommended that the corresponding documented scenarios be consulted. Descriptive error messages are also thrown to help restore the integrity of Request flows.

### Sending of Requests

Even though reference has already been made to the corresponding scenarios in the documentation, a few examples of the added validation for sending Requests are given in the following.

- The new error code `error.consumption.requests.attributeQueryMismatch` has been implemented to mark provided [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) that do not fulfil a certain [AttributeQuery]({% link _docs_integrate/data-model-overview.md %}#attributequeries) accordingly. It is thrown, for example, if the Sender of the Request, which contains a [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) within its `items` property, specifies an `attribute` and a `query` that are incompatible.
- If the Sender of a Request wants to share an [IdentityAttribute]({% link _docs_integrate/attribute-introduction.md %}#identityattributes) that is owned by itself with the Recipient of the Request by using a [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem), the Sender must specify its associated [RepositoryAttribute]({% link _docs_integrate/attribute-introduction.md %}#repositoryattributes) in the `attribute` property of the ShareAttributeRequestItem. It is no longer permitted to specify shared copies ([own shared IdentityAttributes]({% link _docs_integrate/data-model-overview.md %}#localattribute)) instead.

### Responding to Requests

Even though reference has already been made to the corresponding scenarios in the documentation, a few examples of the added validation for responding to Requests are given following.

- The new error code `error.consumption.requests.attributeQueryMismatch` has been implemented to mark provided [Attributes]({% link _docs_integrate/data-model-overview.md %}#attributes) that do not fulfil a certain [AttributeQuery]({% link _docs_integrate/data-model-overview.md %}#attributequeries) accordingly. It is thrown, for example, if the Attribute provided by the Recipient of the Request does not match the AttributeQuery specified in the `query` property of a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem).
- If the Sender of a Request that contains a ReadAttributeRequestItem whose `query` is a [RelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#relationshipattributequery) or a [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery), the Recipient of the Request can only validly answer a RelationshipAttributeQuery with a new Attribute, and a ThirdPartyRelationshipAttributeQuery with an existing Attribute. Otherwise, the [error code `error.consumption.requests.invalidAcceptParameters`]({% link _docs_integrate/error-codes.md %}#error.consumption.requests.invalidAcceptParameters) arises.

## Removal of the `mustBeAccepted` property of the RequestItemGroup

A [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) still provides a way of grouping the [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) contained in its `items` property in the UI. However, **the `mustBeAccepted` property of the RequestItemGroup has now been removed**, as it had easily misunderstood interactions with the `mustBeAccepted` property of the RequestItems. More precisely, a certain, complicated dependency of the acceptance of the RequestItems contained in its `items` property could be described via the `mustBeAccepted` property of the RequestItemGroup:

- If the value of the `mustBeAccepted` property of the RequestItemGroup was set to `"true"`, all RequestItems contained within its `items` property whose value of their respective `mustBeAccepted` property is `"true"` could be accepted if the entire Request is accepted. Included RequestItems whose value of their respective `mustBeAccepted` property is `"false"` could still be rejected.
- If the value of the `mustBeAccepted` property of the RequestItemGroup was set to `"false"`, all RequestItems contained in its `items` property could be rejected if the entire Request is accepted. However, if any RequestItem contained was to be accepted, all RequestItems whose `mustBeAccepted` property is `"true"` could also be accepted when the Request is accepted. In this respect, there was a dependency between the individual RequestItems.

It was not clear enough from the `mustBeAccepted` property of the RequestItemGroup which of the RequestItems contained within its `items` property are optional or mandatory, depending on how their respective values of the `mustBeAccepted` property are set.

Making it necessary to accept certain RequestItems once certain other RequestItems have been accepted is nevertheless a useful feature that will be provided in the future, but will be implemented without the `mustBeAccepted` property of the RequestItemGroup.
{: .notice--info}

In addition, in contrast to the RequestItems, a RequestItemGroup did not have to be explicitly accepted or rejected when a Request was accepted, which is why it was confusing that both the RequestItemGroups and the RequestItems had a `mustBeAccepted` property. Overall, it was therefore decided to remove the `mustBeAccepted` property of the RequestItemGroup.

The `mustBeAccepted` property of the RequestItems will be kept.
{: .notice--info}

## Changed and deleted error codes

- The removal of the `mustBeAccepted` property of the [RequestItemGroup]({% link _docs_integrate/data-model-overview.md %}#requestitemgroup) also resulted in error `"error.consumption.requests.decide.validation.itemAcceptedButParentNotAccepted"` was replaced by error `"error.consumption.requests.decide.validation.itemAcceptedButRequestNotAccepted"` and being used slightly differently in future. This is because the word `Parent` contained in the error code could refer to both the [Request]({% link _docs_integrate/request-and-response-introduction.md %}#requests) as a whole and a RequestItemGroup. As RequestItemGroups are now only used for visual structuring in the UI of [RequestItems]({% link _docs_integrate/data-model-overview.md %}#requestitems) and no longer have any effect when accepting RequestItems, the word `Parent` can also be replaced by Request.
- The error `"error.runtime.MultiAccount.WrongRealm"` and `"error.transport.identity.realmLength"` were removed because the address format has been changed and the property `realm` therefore has been removed.
- Since the RelationshipChanges has been removed, the corresponding error `"error.transport.relationships.wrongChangeStatus"` was cancelled too. In this context the error `"error.transport.messages.noMatchingRelationship"` was substituted by the more appropriate [`"error.transport.messages.missingOrInactiveRelationship"`]({% link _docs_integrate/error-codes.md %}#error.transport.messages.missingOrInactiveRelationship).
- The error `"error.consumption.attributes.invalidPropertyValue"` was removed and substituted by the more specific error [`"error.consumption.attributes.wrongOwnerOfRepositoryAttribute"`]({% link _docs_integrate/error-codes.md %}#error.consumption.attributes.wrongOwnerOfRepositoryAttribute).
- `"inheritedFromItem"` was replaced by [`"error.consumption.validation.inheritedFromItem"`]({% link _docs_integrate/error-codes.md %}#error.consumption.validation.inheritedFromItem) for reasons of consistency. Because of the same reason `"error.transport.secrets.wrongBaseKeyType"` was replaced by [`"error.transport.secrets.wrongSecretType"`]({% link _docs_integrate/error-codes.md %}#error.transport.secrets.wrongSecretType). Further the error `"error.runtime.notifications.cannotSaveSendNotificationFromPeerMessage"` was replaced by `"error.runtime.notifications.cannotSaveSentNotificationFromPeerMessage"` because in this case it is about marking a Notification as sent, rather then sending a Notification.
- `"error.transport.datawallet.encryptedPayloadIsNoCipher"` and `"error.transport.files.fileContentUndefined"` were eliminated, since they aren't used anymore. But also before the migration they haven't been used.

## Changed type of the `owner` property of the ThirdPartyRelationshipAttributeQuery

The [ThirdPartyRelationshipAttributeQuery]({% link _docs_integrate/data-model-overview.md %}#thirdpartyrelationshipattributequery) is usually used within the `query` property of a [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem), which in turn appears in the `items` property of a Request, to query an existing [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute), which exists within a [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) between the Recipient of the Request and a third party, as the Sender of the Request. The `owner` property of the ThirdPartyRelationshipAttributeQuery determines the `owner` of the queried RelationshipAttribute. Previously, it was possible within the `owner` property of the ThirdPartyRelationshipAttributeQuery to specify a concrete address for the `owner` of the queried RelationshipAttribute or an empty string as a placeholder instead.

However, it was not possible, for example, to query a RelationshipAttribute that belongs to any of the third parties specified within the `thirdParty` property of the ThirdPartyRelationshipAttributeQuery, but only to a specific third party (by specifying its address) or that belongs to the specified third parties, but also to the Recipient of the Request (by specifying an empty string). The type of the `owner` property of the ThirdPartyRelationshipAttributeQuery has therefore been changed. The values `" "`, `"recipient"` or `"thirdParty"` can now be specified for this `owner` property. Specify the string `"recipient"` if the Recipient should be the `owner` of the queried RelationshipAttribute. Use the string `"thirdParty"` if any of the third parties specified in the array string `thirdParty` should be the `owner`. If both the Recipient and each of the given third parties may be the `owner`, an empty string `" "` must be specified. Using this option is useful if the `owner` of the queried RelationshipAttribute is not known in advance.

This change enables the Sender of the Request to specify more precisely who the `owner` of a RelationshipAttribute should be when querying it and better reflects real application scenarios.

## Changed and added Use Cases

### RevokeRelationship

With Version 5 the Use Case RevokeRelationship has been added. So now it is possible to revoke a RelationshipRequest which is in `status` `"pending"` and was created by yourself.

### Removal of RelationshipChanges and RelationshipTermination

The [removal of RelationshipChanges](#removal-of-relationshipchanges) is the reason why the following Use Cases are removed:

- AcceptRelationshipChange
- RevokeRelationshipChange
- RejectRelationshipChange

Therefore and with the RelationshipTermination now there are the following new Use Cases:

- AcceptRelationship: Accepts the creation of the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.
- AcceptRelationshipReactivation: Accepts the reactivation of the terminated [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.
- DecomposeRelationship: Decomposes the terminated [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.
- RejectRelationship: Rejects the reactivation of the terminated [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.
- RejectRelationshipReactivation: Rejects the reactivation of the terminated [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.
- RequestRelationshipReactivation: Requests the reactivation of the terminated [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.
- RevokeRelationshipReactivation: Revokes the reactivation of the terminated [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.
- TerminateRelationship: Terminates the active Relationship [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) with the given id.

### Renaming of the Use Case GetSharedVersionsOfRepositoryAttribute to GetSharedVersionsOfAttribute

- Taking ThirdPartyRelationshipAttributes into account, we wanted to extend the functionality of this use case for [RelationshipAttributes]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute).
- The use case GetSharedVersionsOfAttribute was already added in v4 and GetSharedVersionsOfRepositoryAttribute was marked as deprecated. With v5 it is deleted.

An overview of the [Use Cases]({% link _docs_integrate/use-cases.md %}) that may occur is given in the corresponding section.

## Renamed and added Events

There are several Events which has been added. For example regarding the RelationshipTermination the following has been added:

- `"transport.relationshipDecomposedBySelf"`
- `"transport.relationshipReactivationCompleted"`
- `"transport.relationshipReactivationRequested"`

The Event `consumption.outgoingRequestFromRelationshipCreationChangeCreatedAndCompleted` was renamed to `consumption.outgoingRequestFromRelationshipCreationCreatedAndCompleted` because of the [removal of RelationshipChanges](#removal-of-relationshipchanges).

An overview of the [Connector events]({% link _docs_integrate/connector-events.md %}) that may occur is given in the corresponding section.
