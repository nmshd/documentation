---
# Start automatic generation
permalink: integrate/new-versions
published: false
title: "New versions"
type: scenario
toc: true
properties:
  - id: SC115
  - category: Data Model
  - description:
  - customer:
  - component: integrate
  - level:
  - implementation status: DOCS ONLY
  - documentation status:
  - published:
  - link: new-versions
require:
required_by:
# End automatic generation
---

# Migration guide due to release/v5

After merging the PR release/v5 into the main branch of the runtime, there are some backwards incompatible changes about which the Integrators will be informed transparently in the following.

## DIDs as addresses

The address format changed from `<3-character realm><32 or 33-character base58-string>` to `did:e:<backbone-base-url>:dids:<22-character lowercase hex string>`.
This means that the property `realm` of LocalAccount has been removed.

## Removal of RelationshipChanges

RelationshipChanges are removed. The only type of RelationshipChange used so far is the CreationChange, its `content` has been moved to a new property of the relationship creation content - the `creationContent`. If this `content` has been created by responding to a [Request]({% link _docs_integrate/data-model-overview.md %}#request) of the [RelationshipTemplate]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplate), the [`content`]({% link _docs_integrate/data-model-overview.md %}#relationshiptemplatecontent) changes as follows:

| `<relationshipChange>.request.content`                          | `<relationship>.creationContent`                   |
| --------------------------------------------------------------- | -------------------------------------------------- |
| value when created from a response to a request:                | value when created from a response to a request:   |
| `{@type: "RelationshipCreationChangeRequestContent", response}` | `{@type: "RelationshipCreationContent", response}` |

The Connector route for creating the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) is unchanged, the Connector routes using RelationshipChanges (accept, reject RelationshipChange) have been replaced with corresponding routes on the Relationship. No `content` must be sent with any of those operations. The operations are recorded in the new `auditLog` property of the Relationship.

| old Connector route                                                    | new Connector route                                 |
| ---------------------------------------------------------------------- | --------------------------------------------------- |
| PUT `Relationships/relationshipId/Changes/changeId/Accept` (with body) | PUT `Relationships/relationshipId/Accept` (no body) |
| PUT `Relationships/relationshipId/Changes/changeId/Reject` (with body) | PUT `Relationships/relationshipId/Reject` (no body) |

The Relationship (which is returned by various Connector routes and events) is hence in total changed like this

```jsonc
relationship:{
    id: string;
    template: RelationshipTemplateDTO;
    status: RelationshipStatus;
    peer: string;
    peerIdentity: IdentityDTO;
    creationContent: any; // (new)
    auditLog: RelationshipAuditLogDTO; // (new)
    // changes: RelationshipChangeDTO[]; (removed)
}
```

, where the `auditLog` is an array of audit log entries.

```json
auditLogEntry: {
    createdAt: string;
    createdBy: string;
    createdByDevice: string;
    reason: Creation | AcceptanceOfCreation | RejectionOfCreation | RevocationOfCreation;
    oldStatus?: Pending;
    newStatus: Pending | Active | Rejected | Revoked;
}
```

E. g. the first `auditLogEntry` has the reason `Creation`, no `oldStatus` and `newStatus` `"Pending"` and is created by the one who created the Relationship.

With the RelationshipTermination there will be also available other values for `reason` like `"Termination"`, `"ReactivationRequested"`, `"AcceptanceOfReactivation"`, `"RejectionOfReactivation"`, `"RevocationOfReactivation"` and `"Decomposition"`. The same for `oldStatus?` and `newStatus`, there will be possible also `"Terminated"` and `"DeletionProposed"`.
{: .notice--info}

## Restriction of the Message, RelationshipTemplate and RelationshipCreation content types ( PR still open)

- The `content` of a [Message]({% link _docs_integrate/data-model-overview.md %}#message) must have one of the content types [Mail]({% link _docs_integrate/data-model-overview.md %}#mail), [ResponseWrapper]({% link _docs_integrate/data-model-overview.md %}#responsewrapper), [Notification]({% link _docs_integrate/data-model-overview.md %}#notification), [Request]({% link _docs_integrate/data-model-overview.md %}#request) or ArbitraryMessageContent - the last one is new and from this form `{ @type: "ArbitraryMessageContent", value: any}`.
- The RelationshipTemplate `content` must have one of the content types RelationshipTemplateContent or ArbitraryRelationshipTemplateContent - the last one is new and from this form `{ @type: "ArbitraryRelationshipTemplateContent", value: any}`.
- The Relationship `creationContent` must have either of the content types RelationshipCreationContent or ArbitraryRelationshipCreationContent - the last one is new and from this form `{ @type: "ArbitraryRelationshipCreationContent", value: any}`.

This affects the input of the routes `POST Messages` for sending Messages, `POST RelationshipTemplates` for creating RelationshipTemplates and `POST Relationships` for creating Relationships. If you want to send an arbitrary content, you now have the input `{ @type: "Arbitrary...Content", value: yourContent}` instead of yourContent. The input hence always has an @type field. Whenever a Connector route returns a Message, a RelationshipTemplate or a Relationship, the `content` then is `{ @type: "Arbitrary...Content", value: yourContent}` instead of previously `{ @type: "JSONWrapper", value: yourContent}`.

## Removal of the `mustBeAccepted` property of the RequestItemGroup

A RequestItemGroup still provide a way of grouping the RequestItems contained in its `items` property in the UI. However, the `mustBeAccepted` property of the RequestItemGroup has now been removed, as it had easily misunderstood interactions with the `mustBeAccepted` property of the RequestItems. More precisely, a certain, complicated dependency of the acceptance of the RequestItems contained in its `items` property could be described via the `mustBeAccepted` property of the RequestItemGroup:

- If the value of the `mustBeAccepted` property of the RequestItemGroup was set to `"true"`, all RequestItems contained within its `items` property whose value of their respective `mustBeAccepted` property is `"true"` could be accepted if the entire Request is accepted. Included RequestItems whose value of their respective `mustBeAccepted` property is `"false"` could still be rejected.
- If the value of the `mustBeAccepted` property of the RequestItemGroup was set to `"false"`, all RequestItems contained in its `items` property could be rejected if the entire Request is accepted. However, if any RequestItem contained was to be accepted, all RequestItems whose `mustBeAccepted` property is `"true"` could also be accepted when the Request is accepted. In this respect, there was a dependency between the individual RequestItems.

It was not clear enough from the `mustBeAccepted` property of the RequestItemGroup which of the RequestItems contained within its `items` property are optional or mandatory, depending on how their respective values of the `mustBeAccepted` property are set.

Making it necessary to accept certain RequestItems once certain other RequestItems have been accepted is nevertheless a useful feature that will be provided in the future, but will be implemented without the `mustBeAccepted` property of the RequestItemGroup.
{: .notice--info}

In addition, in contrast to the RequestItems, a RequestItemGroup did not have to be explicitly accepted or rejected when a Request was accepted, which is why it was confusing that both the RequestItemGroups and the RequestItems had a `mustBeAccepted` property. Overall, it was therefore decided to remove the `mustBeAccepted` property of the RequestItemGroup.

The `mustBeAccepted` property of the RequestItems will be kept.
{: .notice--info}

## Changed and deleted error codes

The removal of the `mustBeAccepted` property of the RequestItemGroup also resulted in error `error.consumption.requests.decide.validation.itemAcceptedButParentNotAccepted` was replaced by error `error.consumption.requests.decide.validation.itemAcceptedButRequestNotAccepted` and being used slightly differently in future. This is because the word `Parent` contained in the error code could refer to both the Request as a whole and a RequestItemGroup. As RequestItemGroups are now only used for visual structuring in the UI of RequestItems and no longer have any effect when accepting RequestItems, the word `Parent` can also be replaced by Request.

The error `error.runtime.MultiAccount.WrongRealm` has been removed because the address format has been changed.

The error `error.consumption.attributes.invalidPropertyValue` has been removed.

## Changed type of the `owner` property of the ThirdPartyRelationshipAttributeQuery

The ThirdPartyRelationshipAttributeQuery is usually used within the `query` property of a ReadAttributeRequestItem, which in turn appears in the `items` property of a Request, to query an existing RelationshipAttribute, which exists within a Relationship between the Recipient of the Request and a third party, as the Sender of the Request. The `owner` property of the ThirdPartyRelationshipAttributeQuery determines the `owner` of the queried RelationshipAttribute. Previously, it was possible within the `owner` property of the ThirdPartyRelationshipAttributeQuery to specify a concrete address for the `owner` of the queried RelationshipAttribute or an empty string as a placeholder instead.

However, it was not possible, for example, to query a RelationshipAttribute that belongs to any of the third parties specified within the `thirdParty` property of the ThirdPartyRelationshipAttributeQuery, but only to a specific third party (by specifying its address) or that belongs to the specified third parties, but also to the Recipient of the Request (by specifying an empty string). The type of the `owner` property of the ThirdPartyRelationshipAttributeQuery has therefore been changed. The values `" "`, `"recipient"` or `"thirdParty"` can now be specified for this `owner` property. Specify the string `"recipient"` if the Recipient should be the `owner` of the queried RelationshipAttribute. Use the string `"thirdParty"` if any of the third parties specified in the array string `thirdParty` should be the `owner`. If both the Recipient and each of the given third parties may be the `owner`, an empty string `" "` must be specified. Using this option is useful if the `owner` of the queried RelationshipAttribute is not known in advance.

This change enables the Sender of the Request to specify more precisely who the `owner` of a RelationshipAttribute should be when querying it and better reflects real application scenarios.

## Validation of Requests

Validations have been added when sending Requests and responding to Requests to ensure the proper functioning of business processes. However, the added validations can also reduce flexibility in the use of Requests, which is why they could cause previously functioning Request flows to fail. Most affected by the changes are Requests where an Attribute is shared with a peer, an Attribute is proposed to a peer, an Attribute is read from a peer or an Attribute is created for a peer. In the case of problems with previously functioning Request flows that now fail, it is recommended that the corresponding documented scenarios on enmeshed.eu be consulted. Descriptive error messages are also thrown to help restore the integrity of Request flows.

### Sending of Requests

Even though reference has already been made to the corresponding scenarios in the documentation, a few examples of the added validation for sending Requests are given in the following.

- The new error code error.consumption.requests.attributeQueryMismatch has been implemented to mark provided Attributes that do not fulfil a certain AttributeQuery accordingly. It is thrown, for example, if the Sender of the Request, which contains a ProposeAttributeRequestItem within its items property, specifies an attribute and a query that are incompatible.
- If the Sender of a Request wants to share an IdentityAttribute that is owned by itself with the Recipient of the Request by using a ShareAttributeRequestItem, the Sender must specify its associated RepositoryAttribute in the attribute property of the ShareAttributeRequestItem. It is no longer permitted to specify shared copies (own shared IdentityAttributes) instead.

### Responding to Requests

Even though reference has already been made to the corresponding scenarios in the documentation, a few examples of the added validation for responding to Requests are given following.

- The new error code `error.consumption.requests.attributeQueryMismatch` has been implemented to mark provided Attributes that do not fulfil a certain AttributeQuery accordingly. It is thrown, for example, if the Attribute provided by the Recipient of the Request does not match the AttributeQuery specified in the `query` property of a ReadAttributeRequestItem.
- If the Sender of a Request that contains a ReadAttributeRequestItem whose `query` is a RelationshipAttributeQuery or a ThirdPartyRelationshipAttributeQuery, the Recipient of the Request can only validly answer a RelationshipAttributeQuery with a new Attribute, and a ThirdPartyRelationshipAttributeQuery with an existing Attribute. Otherwise, the error code `error.consumption.requests.invalidAcceptParameters` arises.

## Renaming of the Use Case GetSharedVersionsOfRepositoryAttribute to GetSharedVersionsOfAttribute

- Taking ThirdPartyRelationshipAttributes into account, we wanted to extend the functionality of this use case for RelationshipAttributes.
- The use case GetSharedVersionsOfAttribute was already added in v4 and GetSharedVersionsOfRepositoryAttribute was marked as deprecated. With v5 it is deleted.

## Default Attributes

- LocalAttributes have a new property `isDefault`. This is only used for RepositoryAttributes.
- For each IdentityAttribute value type exactly one of the existing Attributes is the default Attribute, i.e. its `isDefault` property is set to `"true"`, while for all others it is undefined.
- Either it will be automatically set when creating a new RepositoryAttribute that is the first of its value type or it can be set manually via the Use Case ChangeDefaultRepositoryAttribute. However, the desired new default RepositoryAttribute may not already have a successor.
- If the default RepositoryAttribute is succeeded, the successor will become the new default Attribute. Thus, the `succeededBy` field of the default RepositoryAttribute may never be set.
- If the default RepositoryAttribute is deleted, the newest RepositoryAttribute of that value type without a successor will automatically become the next default RepositoryAttribute of that value type, if such a RespositoryAttribute exists.
