---
title: "Migrate to v2"
permalink: /integrate/connector-migration-v2
toc: true
---

When migrating from v1 to v2, there are a few breaking changes, as well as a bunch of new features. This guide lists both of them and will help you migrate your integration coding.

## Backwards incompatible data structure

First and foremost, as we [already announced in our blog]({% link _posts/2022-06-27-announcing-enmeshed-v2.md %}), the underlying data structures of v2 are not compatible with the ones of v1 at all, and we are not planning to migrate any data. This means that before starting a v2 Connector, you need to make sure that the database is completely empty. You can achieve that e.g. by creating a new Docker volume for the mongodb container or, if you host mongodb outside of Docker, seting up a new mongodb server. Of course, if you don't have any important data, you can also delete database. This will ensure that on startup of the Connector, a new Enmeshed Identity is created. After that, you can start to migrate your integration coding to v2.

## Common

### HTTP route Prefix

The prefix of each route of the Connector's HTTP API has changed from `/api/v1` to `/api/v2`. This means that you need to change all your API calls to the Connector to use the new prefix.

### Error codes

There are some error codes that have changed during our transition from v1 to v2. For a full list of error codes in v2, refer to [the corresponding page]({% link _docs_integrate/13-connector-error-codes.md %}).

## Attributes

With v2 of Enmeshed, Attributes were completely revamped. We won't go into much detail here, but the following two paragraphs will give you links for further reading.

**Data Model**

You can find a description of Attributes in the documentation of the [data model]({% link _docs_explore/61-data-model.md %}#attributes).

**Endpoints**

In order to manage Attributes with the Connector, the following endpoints exist (the endpoints listed below are interactive; feel free to execute them):
{% include rapidoc api_route_regex="^(get|post|put) /api/v2/Attributes" title="" %}

Tip: go through the new [Connector tutorial]({% link _docs_integrate/01-connector-tutorial.md %}) if you want to get an introduction to Requests.
{: .notice--info}

## Files

There are a few minor changes to the data model and the endpoints for managing Files.

**Data Model**

The following properties were removed from the `File` entity:

-   `deletedAt`
-   `deletedBy`
-   `deletedByDevice`

The reason for this is that these properties were added prematurely. At this time it is not possible to delete files. This feature will be added in the future. But for now, we decided that they are misleading and removed them.

There also is a new property named `truncatedReference`, which is similar to the `truncatedReference` of a Token. It allows you to create a reference to a File containing its ID and secret key. In order to share the File with a user, you could then for example create a QR code for it(see the new endpoint below). When the user scans this QR code with the Enmeshed app, the File is automatically downloaded. And there is no Relationship necessary!

**Endpoints**

The following endpoints have changed:

| Route                 | Change Type | Description                                                                                                                                                                              |
| --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST&nbsp;/Files/Peer | Updated     | You can now pass a truncated File reference in the body of this endpoint. The other possibilities (id+secret key and a truncated Token reference) can still be used here.                |
| GET&nbsp;/Files/{id}  | Updated     | You can now pass a truncated File reference as the route parameter `id` (or `idOrReference`, as it is called now) of this endpoint. Of course, you can still pass an ID.                 |
| GET&nbsp;/Files/{id}  | Updated     | By setting the `Accept` HTTP header on this request to `image/png`, you can generate a QR code with the truncated File reference, which can then be displayed on a website, for example. |

## Messages

There are a few minor changes to the data model and the endpoints for managing Messages.

**Data Model**

The recipient of a `Message` now has the property `relationshipId`, which contains the ID of the relationship the Connector has to the recipient. This is useful for example if you want to query all Messages that belong to a specific relationship.

**Endpoints**

The following endpoints have changed:

| Route              | Change Type | Description                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET&nbsp;/Messages | Updated     | As described above, there now is a `relationshipId` property on each object of the `recipients` array of a Message. You can use this property to filter for Messages of a speicic Relationship by setting the query parameter `recipients.relationshipId` We further removed the query parameter `relationshipIds`, because it is not needed anymore. |

## Relationships

There are a few minor changes to the data model and the endpoints for managing Relationships.

**Data Model**

The following properties were removed from the `Relationship` entity:

-   `lastMessageReceivedAt`
-   `lastMessageSentAt`

These properties were never filled by the Runtime and were therefore removed. If you want for example the Relationships you sent a Message to in the last 24 hours, you can instead query the Messages and filter for the `createdAt` property in conjunction with createdBy set to your own Address. This gives you all the Messages you sent to in the last 24 hours. Now you just need to summarize the distinct `relationshipIds` of all these Messages. You can do similar to replace `lastMessageReceivedAt`.

Further, we removed two Relationship status:

-   `Terminated`: Since we currently do not support termination of Relationships, we removed this status in order to reduce confusion.
-   `Revoked`: With the introduction of Requests, we had to temporarily remove the possibility of revoking Relationship Creation Changes, because if the Response sent with the Relationship Creation Change was already created by the peer, this Response would have to be deleted as soon as the Relationship Creation Change was revoked - which is really hard to implement. In the future, revoking Relationship Creation Changes will probably be possible again, but at the moment this is not our top priority.

**Endpoints**

The following endpoints have changed:

| Route                                             | Change Type | Description                                                                                                                                                                  |
| ------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PUT /Relationships/{id}/Changes/{changeId}/Revoke | Removed     | As described above, we removed the `Revoked` status of a Relationship. Therefore we also removed the endpoint that was responsible for moving a Relationship to this status. |
| GET&nbsp;/Relationships/{id}/Attributes           | Added       | This new route can be used to fetch all Attributes that exist in the context of the Relationship - so the ones you received from the peer as well as the ones you shared.    |

## Relationship Templates

There are a few minor changes to the data model and the endpoints for managing Relationship Templates.

**Data Model**

The property `maxNumberOfRelationships` was removed from the `RelationshipTemplate` entity. It was replaced by the property `maxNumberOfAllocations` which offers a similar functionality. The reason for this change is that with let's say `maxNumberOfRelationships=5`, it was possible for 10 users to download the Relationship Template and fill it out. But at the end, when trying to create the Relationship, 5 of them would receive an error message, because the maximum number of Relationships is exhausted. This is why the Relationship Template now has the property `maxNumberOfAllocations`. Setting this property to e.g. 5 will ensure that the Template can only be fetched by 5 different Identities. The sixth will receive an error message when trying to fetch it, so it won't be able waste time by filling out the Template.

There also is a new property named `truncatedReference`, which is similar to the `truncatedReference` of a Token. It allows you to create a reference to a Relationship Template containing its ID and secret key. With this, there is no need to create a Token for a the Relationship Template anymore. Just create a QR code for the Relationship Template directly (see the new endpoint below). When the user scans this QR code with the Enmeshed app, the Relationship Template is downloaded and displayed.

**Endpoints**

The following endpoints have changed:

| Route                                 | Change Type | Description                                                                                                                                                                                |
| ------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| POST&nbsp;/RelationshipTemplates/Peer | Updated     | You can now pass a truncated Relationship Template reference in the body of this endpoint. The other possibilities (id+secret key and a truncated Token reference) can still be used here. |
| GET&nbsp;/RelationshipTemplates/{id}  | Updated     | By setting the `Accept` HTTP header on this request to `image/png`, you can generate a QR code with the truncated File reference, which can then be displayed on a website, for example.   |

## Requests

With v2 of Enmeshed, there is the new concept of "Requests", which are the new way to exchange Attributes. But you can do so much more with them. We won't go into much detail here, but the following two paragraphs will give you links for further reading.

**Data Model**

You can find a description of Requests in the documentation of the [data model]({% link _docs_explore/61-data-model.md %}#request). Further, there is a [dedicated page]({% link _docs_explore/64-request-items.md %}) where you can find all existing Request Items.

**Endpoints**

In order to manage Requests with the Connector, the following endpoints exist:
{% include rapidoc api_route_regex="^(get|post|put) /api/v2/Requests" title="" %}

Tip: go through the new [Connector tutorial]({% link _docs_integrate/01-connector-tutorial.md %}) if you want to get an introduction to Requests.
{: .notice--info}
