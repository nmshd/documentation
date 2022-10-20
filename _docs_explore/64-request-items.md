---
title: "Request Items"
permalink: /explore/request-items
toc: true
---

All the RequestItems listed below inherit from the [RequestItem]({% link _docs_explore/61-data-model.md %}#requestitem) and are therefore sharing its properties.

## Preamble

### Response Items

To answer the RequestItems an [AcceptResponseItem]({% link _docs_explore/61-data-model.md %}#acceptresponseitem), a [RejectResponseItem]({% link _docs_explore/61-data-model.md %}#rejectresponseitem) or an [ErrorResponseItem]({% link _docs_explore/61-data-model.md %}#errorresponseitem) will be transferred.
Some RequestItems will need additional information to be able to accept the request. Therefore these RequestItems have a specific AcceptResponseItem. These Items inherit from the AcceptResponseItem and are therefore sharing its properties.

### Response Parameters

To simplify the usage of the ResponseItems the Enmeshed libraries are providing simplified versions (so called Parameters) that will be processed and enriched to RequestItems.
Answering a RequestItem that does not need additional information is as simple as sending `{ "accept": true }` to accept the RequestItem or `{ "accept": false }` to reject it.

The RequestItems that need additional information for the accept are documented besides the respective RequestItems.

#### Example

```jsonc
// If you answer the CreateAttributeRequestItem
{
    "@type": "CreateAttributeRequestItem",
    "attribute": { /* ... */ }
}

// with this parameters
{
    "accept": true,
}

// the following ResponseItem will be created for you
{
    "@type": "CreateAttributeAcceptResponseItem",
    "attributeId": "ATT..."
}
```

## AuthenticationRequestItem

With this item the sender can request the peer for an authentication in a business context for a certain purpose. The peer can then decide to authenticate or not. This authentication is mostly short-lived and limited in time.

### Examples

-   Authentication for a login to a website
-   Authentication for opening a door

### Properties

| Name    | Type                          | Description                                                    |
| ------- | ----------------------------- | -------------------------------------------------------------- |
| `@type` | `"AuthenticationRequestItem"` | Specifies the type of the RequestItem for internal processing. |

## ConsentRequestItem

With the ConsentRequestItem it is possible to request a consent of the peer to an arbitrary text and thus reach agreement on a certain non machine-processable context.

To request an accept/reject decision from a peer to a free text, the ConsentRequestItem is used.

Please do not use the ConsentRequestItem to submit tons of text to the peer Identity. It is meant to be a short consent or summary the user agrees to. Please move longer text to external websites.
The ConsentRequestItem is also not meant for contractual agreements.
{: .notice--info}

### Examples

-   "I hereby confirm that I have read the privacy terms of this cloud service and agree to them."
-   "The provided EULA has been read and agreed to."
-   "Yes, I have backed up all of my data of this PC and you can wipe it."
-   "I opt in to the newsletter."

### Properties

| Name      | Type                    | Description                                                                                                                                                                     |
| --------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`   | `"ConsentRequestItem"`  | Specifies the type of the RequestItem for internal processing.                                                                                                                  |
| `consent` | `string`                | The textual consent the user needs to give. This is different to the title and description of the RequestItem, as the consent would be the actual statement the user agrees to. |
| `link`    | `string` \| `undefined` | A link to a website which contains more information, like the EULA or privacy terms.                                                                                            |

## CreateAttributeRequestItem

If you want to create Identity- or RelationshipAttributes for the peer, the CreateAttributeRequestItem can be used. Please have a look at the ProposeAttributeRequestItem if the peer should be able to overwrite the Attribute.

To create a peer Attribute (owner = peer) with a fixed value defined by the sender, an Identity uses the CreateAttributeRequestItem. A fixed value in this case means, that the recipient is not allowed to change the value when accepting the request.

### Examples

-   Share the corporate E-Mail Address of the peer to the peer
-   Send a certificate of the peer to the peer, so that the peer is able to easily share it
-   Create a RelationshipAttribute for the peer

### Properties

| Name      | Type                                                                                                                                                                             | Description                                                                                                                                                                                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@type`   | `"CreateAttributeRequestItem"`                                                                                                                                                   | Specifies the type of the RequestItem for internal processing.                                                                                                                                   |
| attribute | [`IdentityAttribute`]({% link _docs_explore/61-data-model.md %}#identityattribute) \| [`RelationshipAttribute`]({% link _docs_explore/61-data-model.md %}#relationshipattribute) | The IdentityAttribute or RelationshipAttribute to create for the peer within the Identity of the peer.<br>The owner of the Attribute which should be created can only be the recipient Identity. |

### Response

#### Item Properties

| Name        | Type                                  | Description                      |
| ----------- | ------------------------------------- | -------------------------------- |
| `@type`     | `"CreateAttributeAcceptResponseItem"` | The type of the ResponseItem.    |
| attributeId | `string`                              | The id of the created Attribute. |

### Combinations and usage scenarios

| Attribute Type | Attribute Owner | Possible? | Automation      | Examples/Reason                                                                                                                                                                                                                                                       |
| -------------- | --------------- | --------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity       | Sender          | N         | `N/A`           | Use ShareAttributeRequestItem instead.                                                                                                                                                                                                                                |
| Identity       | Recipient       | Y         | `USER_DECISION` | University sends student his certificate (Propose would be inappropriate in this case, because the student should not be able to return his own value)                                                                                                                |
| Identity       | `<empty>`       | Y         | `USER_DECISION` | An empty owner defaults to an Attribute with owner=`<recipient>`. This is needed for Requests inside of Relationship Templates, since you don’t know the Enmeshed Address of your peer before the Relationship is established.                                        |
| Relationship   | Sender          | Y         | `AUTO_ACCEPT`   | Company sends new customer his customer number.                                                                                                                                                                                                                       |
| Relationship   | Recipient       | Y         | `USER_DECISION` | With this combination the **sender asks the recipient for the one-time permission** to write a Relationship Attribute once AND the **sender defined a value** which can either be accepted and stored, or rejected. Thus, the user cannot change the value by itself. |
| Relationship   | `<empty>`       | Y         | `USER_DECISION` | An empty owner defaults to an Attribute with owner=`<recipient>`. This is needed for Requests inside of Relationship Templates, since you don’t know the Enmeshed Address of your peer before the Relationship is established.                                        |

## ProposeAttributeRequestItem

The ProposeAttributeRequestItem is a combination of [ReadAttributeRequestItem](#readattributerequestitem) and [CreateAttributeRequestItem](#createattributerequestitem). The sender would like to receive a correct Attribute from the peer, thinks it has a possible value but the peer might overrule this value with an existing or new one.

To create a peer Attribute (owner = peer) with a value proposed by the sender, an Identity uses the ProposeAttributeRequestItem. A proposed value in this case means, that the recipient is allowed to change the value if accepting the request.

### Examples

-   Onboard an authenticated user and propose the known private Attributes
-   Ask the user if a newsletter would be of interest and propose the opt-in. This could be stored as a RelationshipAttribute with owner = recipient and could then be changed by the recipient at will.

### Properties

| Name        | Type                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@type`     | `"ProposeAttributeRequestItem"`                                                                                                                                                                                                                                                                                                  | Specifies the type of the RequestItem for internal processing.                                                                                                                       |
| `attribute` | [`IdentityAttribute`]({% link _docs_explore/61-data-model.md %}#identityattribute) \| [`RelationshipAttribute`]({% link _docs_explore/61-data-model.md %}#relationshipattribute)                                                                                                                                                 | The IdentityAttribute or RelationshipAttribute to propose for the peer as the queried Attribute.<br>The owner of the Attribute which is proposed can only be the recipient Identity. |
| `query`     | [`IdentityAttributeQuery`]({% link _docs_explore/61-data-model.md %}#identityattributequery) \| [`RelationshipAttributeQuery`]({% link _docs_explore/61-data-model.md %}#relationshipattributequery) \| [`ThirdPartyRelationshipAttributeQuery`]({% link _docs_explore/61-data-model.md %}#thirdpartyrelationshipattributequery) | The structured query of the Attribute the sender would like to receive.                                                                                                              |

### Response

#### Item Properties

| Name          | Type                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@type`       | `"ProposeAttributeAcceptResponseItem"`                                                                                                                                           | The type of the ResponseItem.                                                                                                                                                        |
| `attributeId` | `string`                                                                                                                                                                         | The id of the created Attribute.                                                                                                                                                     |
| `attribute`   | [`IdentityAttribute`]({% link _docs_explore/61-data-model.md %}#identityattribute) \| [`RelationshipAttribute`]({% link _docs_explore/61-data-model.md %}#relationshipattribute) | The IdentityAttribute or RelationshipAttribute to propose for the peer as the queried Attribute.<br>The owner of the Attribute which is proposed can only be the recipient Identity. |

#### Parameters

When accepting the ProposeAttributeRequestItem you can decide:

-   to use an existing Attribute.

    | Name        | Type                                                                                                                                                                             | Description                                                           |
    | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | `attribute` | [`IdentityAttribute`]({% link _docs_explore/61-data-model.md %}#identityattribute) \| [`RelationshipAttribute`]({% link _docs_explore/61-data-model.md %}#relationshipattribute) | The IdentityAttribute or RelationshipAttribute that shall be created. |

-   to use the proposed Attribute.

    | Name        | Type                                                                                                                                                                             | Description                                                                          |
    | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
    | `attribute` | [`IdentityAttribute`]({% link _docs_explore/61-data-model.md %}#identityattribute) \| [`RelationshipAttribute`]({% link _docs_explore/61-data-model.md %}#relationshipattribute) | The IdentityAttribute or RelationshipAttribute that was provided in the RequestItem. |

-   to create a new Attribute.

    | Name                  | Type     | Description                      |
    | --------------------- | -------- | -------------------------------- |
    | `existingAttributeId` | `string` | The id of the Attribute to send. |

### Combinations and usage scenarios

| Attribute Type | Attribute Owner | Possible? | Automation      | Examples/Reason                                                                                                                                                                                                                                                                                                  |
| -------------- | --------------- | --------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity       | Sender          | N         | `N/A`           | It makes no sense to propose own Attributes, use ShareAttributeRequestItem instead.                                                                                                                                                                                                                              |
| Identity       | Recipient       | Y         | `USER_DECISION` | Company sends name and address to new customer during its onboarding process.                                                                                                                                                                                                                                    |
| Relationship   | Sender          | Y         | `USER_DECISION` | With this combination the **sender gives the recipient the one-time permission** to write a Relationship Attribute once AND the **sender proposes a value** which might make sense as a default.<br>Example: Electricity provider asks new customer for the electricity meter number and proposes a known number |
| Relationship   | Recipient       | Y         | `USER_DECISION` | With this combination the **sender asks the recipient for the one-time permission** to write a Relationship Attribute once AND the **sender proposes a value** which might make sense as a default.<br>Example: Asking for a newsletter subscription                                                             |

## ReadAttributeRequestItem

If you want to query an identities DisplayName and possibly other Attributes this is done with the ReadAttributeRequestItem.

To query peer Attributes (owner = peer) which are not known to the sender, an Identity uses the ReadAttributeRequestItem.

### Examples

-   Optional query of the BirthDate, to congratulate on birthdays
-   Required query of the Age, to check if alcohol may be bought
-   Required query of the StreetAddress, to send an invoice to the recipient

### Properties

| Name    | Type                                                                                                                                                                                                                                                                                                                             | Description                                                             |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `@type` | `"ReadAttributeRequestItem"`                                                                                                                                                                                                                                                                                                     | Specifies the type of the RequestItem for internal processing.          |
| `query` | [`IdentityAttributeQuery`]({% link _docs_explore/61-data-model.md %}#identityattributequery) \| [`RelationshipAttributeQuery`]({% link _docs_explore/61-data-model.md %}#relationshipattributequery) \| [`ThirdPartyRelationshipAttributeQuery`]({% link _docs_explore/61-data-model.md %}#thirdpartyrelationshipattributequery) | The structured query of the Attribute the sender would like to receive. |

### Response

#### Item Properties

| Name          | Type                                                                                                                                                                             | Description                                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `@type`       | `"ReadAttributeAcceptResponseItem"`                                                                                                                                              | The type of the ResponseItem.                                                   |
| `attributeId` | `string`                                                                                                                                                                         | The id of the returned Attribute.                                               |
| `attribute`   | [`IdentityAttribute`]({% link _docs_explore/61-data-model.md %}#identityattribute) \| [`RelationshipAttribute`]({% link _docs_explore/61-data-model.md %}#relationshipattribute) | The IdentityAttribute or RelationshipAttribute that will be shared to the peer. |

#### Parameters

When accepting the ReadAttributeRequestItem you can decide:

-   to use an existing Attribute.

    | Name        | Type                                                                                                                                                                             | Description                                                           |
    | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | `attribute` | [`IdentityAttribute`]({% link _docs_explore/61-data-model.md %}#identityattribute) \| [`RelationshipAttribute`]({% link _docs_explore/61-data-model.md %}#relationshipattribute) | The IdentityAttribute or RelationshipAttribute that shall be created. |

-   to create a new Attribute.

    | Name                  | Type     | Description                      |
    | --------------------- | -------- | -------------------------------- |
    | `existingAttributeId` | `string` | The id of the Attribute to send. |

### Combinations and usage scenarios

| Attribute Type | Attribute Owner | Third Party | Possible? | Automation                   | Examples/Reason                                                                                                                                                                                                                                                                                                  |
| -------------- | --------------- | ----------- | --------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity       | Sender          |             | N         | `N/A`                        | It makes no sense to read own IdentityAttributes.                                                                                                                                                                                                                                                                |
| Identity       | Recipient       |             | Y         | `USER_DECISION`              | Company asks customer for its delivery address                                                                                                                                                                                                                                                                   |
| Relationship   | Sender          |             | Y         | `USER_DECISION`              | With this combination the **sender gives the recipient the one-time permission** to write a Relationship Attribute once<br>Example: Electricity provider asks new customers for electricity meter number                                                                                                         |
| Relationship   | Recipient       |             | Y         | `USER_DECISION`              | With this combination the **sender asks the recipient for the one-time permission** to write a Relationship Attribute<br>Example: Company asks new customer to subscribe to the newsletter and proposes the subscription as default once                                                                         |
| Relationship   | Recipient       | Third Party | Y         | depending on confidentiality | With this combination the **sender requests a Relationship Attribute from a Relationship between the recipient and a third party. The Attribute must be owned by the recipient**<br> Example: A Social Network asks for Facebook privacy settings of a user to get senseful defaults of its own privacy settings |
| Relationship   | Third Party     | Third Party | Y         | depending on confidentiality | With this combination the **sender requests a Relationship Attribute from a Relationship between the recipient and a third party which is owned by the third party**<br> Example: An online shop asks for the Payback Customer Id of a user to book the order on his account                                     |

## RegisterAttributeListenerRequestItem

This item is used to register a listener for a specific Attribute. The listener will create a Draft Request if an Attribute was created that matches the given query and the user is able to sent the Request to the creator of the original `RegisterAttributeListenerRequestItem`.

### Examples

-   Asking for a specific RelationshipAttribute of a partner organization.

### Properties

| Name    | Type                                                                                                                                                                                                                     | Description                                                           |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| `@type` | `"RegisterAttributeListenerRequestItem"`                                                                                                                                                                                 | Specifies the type of the RequestItem for internal processing.        |
| `query` | [`IdentityAttributeQuery`]({% link _docs_explore/61-data-model.md %}#identityattributequery) \| [`ThirdPartyRelationshipAttributeQuery`]({% link _docs_explore/61-data-model.md %}#thirdpartyrelationshipattributequery) | The structured query of the Attribute the sender would like to query. |

### Response

#### Item Properties

| Name         | Type                                            | Description                              |
| ------------ | ----------------------------------------------- | ---------------------------------------- |
| `@type`      | `"RegisterAttributeListenerAcceptResponseItem"` | The type of the ResponseItem.            |
| `listenerId` | `string`                                        | The id of the created AttributeListener. |

## ShareAttributeRequestItem

If you want to share the own DisplayName and possibly other Attributes this is done with the ShareAttributeRequestItem.

To share own IdentityAttributes (owner = self) an Identity uses the ShareAttributeRequestItem. The Identity needs to create the IdentityAttribute separately before the Attribute can be shared.

### Examples

-   Share own DisplayName
-   Share own Address

### Properties

| Name                | Type                                                                                                                                                                             | Description                                                                                                                                                                                                                     |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@type`             | `"ShareAttributeRequestItem"`                                                                                                                                                    | Specifies the type of the RequestItem for internal processing.                                                                                                                                                                  |
| `attribute`         | [`IdentityAttribute`]({% link _docs_explore/61-data-model.md %}#identityattribute) \| [`RelationshipAttribute`]({% link _docs_explore/61-data-model.md %}#relationshipattribute) | The IdentityAttribute or RelationshipAttribute to share. This is not the LocalAttribute but the content data structure of the Attribute. <br>The owner of the Attribute which should be shared can only be the sender Identity. |
| `sourceAttributeId` | `string`                                                                                                                                                                         | The id of the LocalAttribute which is the source of the shared Attribute. This will be used later to reference the sourceAttribute from its shared copy.                                                                        |

### Response

#### Item Properties

| Name          | Type                                 | Description                      |
| ------------- | ------------------------------------ | -------------------------------- |
| `@type`       | `"ShareAttributeAcceptResponseItem"` | The type of the ResponseItem.    |
| `attributeId` | `string`                             | The id of the created Attribute. |

### Combinations and usage scenarios

| Attribute Type | Attribute Owner | Possible? | Automation    | Examples/Reason                                                       |
| -------------- | --------------- | --------- | ------------- | --------------------------------------------------------------------- |
| Identity       | Sender          | Y         | `AUTO ACCEPT` | Company sends new customer the address of the company                 |
| Identity       | Recipient       | N         | `N/A`         | You cannot share an Attribute of which you are not the owner.         |
| Identity       | `<empty>`       | Y         | `AUTO ACCEPT` | An empty owner defaults to an Attribute with owner=`<sender>`.        |
| Relationship   | Sender          | Y         | `AUTO ACCEPT` | Share Customer ID from Company A with Company B (e.g. Payback number) |
| Relationship   | Recipient       | N         | `N/A`         | You cannot share an Attribute of which you are not the owner.         |
| Relationship   | `<empty>`       | Y         | `AUTO ACCEPT` | An empty owner defaults to an Attribute with owner=`<sender>`.        |

```

```
