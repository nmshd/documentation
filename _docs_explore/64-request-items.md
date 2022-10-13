---
title: "Request Items"
permalink: /explore/request-items
toc: true
---

All the RequestItems listed below inherit from the [RequestItem]({% link _docs_explore/61-data-model.md %}#RequestItem) and are therefore sharing its properties.

## AuthenticationRequestItem

With this item the sender can request the peer for an authentication for a certain purpose. The peer can then decide to authenticate or not. This authentication is mostly short-lived and limited in time.

### Examples

-   Authentication for a login to a website
-   Authentication for opening a door

### Properties

| Name  | Type                        | Description                                         |
| ----- | --------------------------- | --------------------------------------------------- |
| @type | "AuthenticationRequestItem" | Specifies the type of the Request item for parsing. |

## ConsentRequestItem

With the ConsentRequestItem it is possible to request a consent of the peer to an arbitrary text and thus reach agreement on a certain non machine-processable context.

To request an accept/reject decision from a peer to a free text, the ConsentRequestItem is used.

Please do not use the ConsentRequestItem to submit tons of text to the peer Identity. It is meant to be a short consent or summary the user agrees to. Please move longer text to external websites.
The ConsentRequestItem is also not meant for contractual agreements.
{: .notice--info}

We have not yet reached a decision in order to how a consent could be automatically accepted for the user. So far, a ConsentRequestItem is best used with the requireManualDecision property set to true.
{: .notice--warning}

### Examples

-   "I hereby confirm that I have read the privacy terms of this cloud service and agree to them."
-   "The provided EULA has been read and agreed to."
-   "Yes, I have backed up all of my data of this PC and you can wipe it."
-   "I opt in to the newsletter"

### Properties

| Name    | Type                 | Description                                                                                                                                                                     |
| ------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @type   | "ConsentRequestItem" | Specifies the type of the Request item for parsing.                                                                                                                             |
| consent | string               | The textual consent the user needs to give. This is different to the title and description of the RequestItem, as the consent would be the actual statement the user agrees to. |
| link    | string \| undefined  | A link to a website which contains more information, like the EULA or privacy terms.                                                                                            |

## CreateAttributeRequestItem

If you want to create Identity- or RelationshipAttributes for the peer, the CreateAttributeRequestItem can be used. Please have a look at the ProposeAttributeRequestItem if the peer should be able to overwrite the Attribute.

To create a peer Attribute (owner = peer) with a fixed value defined by the sender, an Identity uses the CreateAttributeRequestItem. A fixed value in this case means, that the recipient is not allowed to change the value if accepting the request.

### Examples

-   Share the corporate E-Mail Address of the peer to the peer
-   Send a certificate of the peer to the peer, so that the peer is able to easily share it
-   Create a RelationshipAttribute for the peer

### Properties

| Name      | Type                                                                                                                                                                         | Description                                                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| @type     | "CreateAttributeRequestItem"                                                                                                                                                 | Specifies the type of the Request item for parsing.                                                                                                                                              |
| attribute | [IdentityAttribute]({% link _docs_explore/61-data-model.md %}#IdentityAttribute) \| [RelationshipAttribute]({% link _docs_explore/61-data-model.md %}#RelationshipAttribute) | The IdentityAttribute or RelationshipAttribute to create for the peer within the Identity of the peer.<br>The owner of the Attribute which should be created can only be the recipient Identity. |

## ProposeAttributeRequestItem

The ProposeAttributeRequestItem is a combination of ReadAttributeRequestItem and CreateAttributeRequestItem. The sender would like to receive a correct Attribute from the peer, thinks it has a possible value but the peer might overrule this value with an existing or new one.

To create a peer Attribute (owner = peer) with a value proposed by the sender, an Identity uses the ProposeAttributeRequestItem. A proposed value in this case means, that the recipient is allowed to change the value if accepting the request.

### Examples

-   Onboard an authenticated user and propose the known private Attributes
-   Ask the user if a newsletter would be of interest and propose the opt-in. This could be stored as a RelationshipAttribute with the owner = recipient and could then be changed by the recipient at will.

### Properties

| Name      | Type                                                                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| @type     | "ProposeAttributeRequestItem"                                                                                                                                                                                                                                                                                              | Specifies the type of the Request item for parsing.                                                                                                                                  |
| attribute | [IdentityAttribute]({% link _docs_explore/61-data-model.md %}#IdentityAttribute) \| [RelationshipAttribute]({% link _docs_explore/61-data-model.md %}#RelationshipAttribute)                                                                                                                                               | The IdentityAttribute or RelationshipAttribute to propose for the peer as the queried Attribute.<br>The owner of the Attribute which is proposed can only be the recipient Identity. |
| query     | [IdentityAttributeQuery]({% link _docs_explore/61-data-model.md %}#IdentityAttributeQuery) \| [RelationshipAttributeQuery]({% link _docs_explore/61-data-model.md %}#RelationshipAttributeQuery) \| [ThirdPartyRelationshipAttributeQuery]({% link _docs_explore/61-data-model.md %}#ThirdPartyRelationshipAttributeQuery) | The structured query of the Attribute the sender would like to receive.                                                                                                              |

## ReadAttributeRequestItem

If you want to query its DisplayName and possibly other Attributes this is done with the ReadAttributeRequestItem.

To query peer Attributes (owner = peer) which are not known to the sender, an Identity uses the ReadAttributeRequestItem.

### Examples

-   Optional query of the BirthDate, to congratulate on birthdays
-   Required query of the Age, to check if alkohol may be bought
-   Required query of the Address, to send an invoice to the recipient

### Properties

| Name  | Type                                                                                                                                                                                                                                                                                                                       | Description                                                             |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| @type | "ReadAttributeRequestItem"                                                                                                                                                                                                                                                                                                 | Specifies the type of the Request item for parsing.                     |
| query | [IdentityAttributeQuery]({% link _docs_explore/61-data-model.md %}#IdentityAttributeQuery) \| [RelationshipAttributeQuery]({% link _docs_explore/61-data-model.md %}#RelationshipAttributeQuery) \| [ThirdPartyRelationshipAttributeQuery]({% link _docs_explore/61-data-model.md %}#ThirdPartyRelationshipAttributeQuery) | The structured query of the Attribute the sender would like to receive. |

## RegisterAttributeListenerRequestItem

This item is used to register a listener for a specific Attribute. The listener will create a Draft Request if an Attribute was created that matches the given query and the user is able to sent the Request to the creator of the original `RegisterAttributeListenerRequestItem`.

### Examples

-   Asking for a specific RelationshipAttribute of a partner organization.

### Properties

| Name  | Type                                                                                                                                                                                                                 | Description                                                           |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| @type | "RegisterAttributeListenerRequestItem"                                                                                                                                                                               | Specifies the type of the Request item for parsing.                   |
| query | [IdentityAttributeQuery]({% link _docs_explore/61-data-model.md %}#IdentityAttributeQuery) \| [ThirdPartyRelationshipAttributeQuery]({% link _docs_explore/61-data-model.md %}#ThirdPartyRelationshipAttributeQuery) | The structured query of the Attribute the sender would like to query. |

## ShareAttributeRequestItem

If you want to share the own DisplayName and possibly other Attributes this is done with the ShareAttributeRequestItem.

To share own IdentityAttributes (owner = self) an Identity uses the ShareAttributeRequestItem. The Identity needs to create the IdentityAttribute separately before the Attribute can be shared.

### Examples

-   Share own DisplayName
-   Share own Address

### Properties

| Name              | Type                                                                                                                                                                         | Description                                                                                                                                                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @type             | "ShareAttributeRequestItem"                                                                                                                                                  | Specifies the type of the Request item for parsing.                                                                                                                                                                             |
| attribute         | [IdentityAttribute]({% link _docs_explore/61-data-model.md %}#IdentityAttribute) \| [RelationshipAttribute]({% link _docs_explore/61-data-model.md %}#RelationshipAttribute) | The IdentityAttribute or RelationshipAttribute to share. This is not the LocalAttribute but the content data structure of the attribute. <br>The owner of the Attribute which should be shared can only be the sender Identity. |
| sourceAttributeId | `string`                                                                                                                                                                     | The id of the LocalAttribute which is the source of the shared Attribute. This will be used later to reference the sourceAttribute from its shared copy.                                                                        |
