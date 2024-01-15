## AuthenticationRequestItem

With the [AuthenticationRequestItem]({% link _docs_integrate/data-model-overview.md %}#authenticationrequestitem) the sender can request the peer for an authentication in a business context for a certain purpose. The peer can then decide to authenticate or not. This authentication is mostly short-lived and limited in time.

### Examples {#authenticationrequestitem-examples}

- Authentication for a login to a website
- Authentication for opening a door

### Response Parameters {#authenticationrequestitem-response}

#### Item Properties {#authenticationrequestitem-response-itemproperties}

- To accept this RequestItem an [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#authenticationrequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

## ConsentRequestItem

With the [ConsentRequestItem]({% link _docs_integrate/data-model-overview.md %}#consentrequestitem) it is possible to request a consent of the peer to an arbitrary text and thus reach agreement on a certain non machine-processable context.

To request an accept/reject decision from a peer to a free text, the ConsentRequestItem is used.

Please do not use the ConsentRequestItem to submit tons of text to the peer Identity. It is meant to be a short consent or summary the user agrees to. Please move longer text to external websites.
The ConsentRequestItem is also not meant for contractual agreements.
{: .notice--info}

### Examples {#consentrequestitem-examples}

- "I hereby confirm that I have read the privacy terms of this cloud service and agree to them."
- "The provided EULA has been read and agreed to."
- "Yes, I have backed up all of my data of this PC and you can wipe it."
- "I opt in to the newsletter."

### Response Parameters {#consentrequestitem-response}

#### Item Properties {#consentrequestitem-response-itemproperties}

- To accept this RequestItem an [AcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#acceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#consentrequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

## CreateAttributeRequestItem

If you want to create Identity- or RelationshipAttributes for the peer, the [CreateAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#createattributerequestitem) can be used. Please have a look at the [ProposeAttributeRequestItem](#proposeattributerequestitem) if the peer should be able to overwrite the Attribute.

To create an Attribute with a fixed value defined by the sender, an Identity uses the CreateAttributeRequestItem. A fixed value in this case means, that the recipient is not allowed to change the value when accepting the request.

### Examples {#createattributerequestitem-examples}

Examples of use cases for the CreateAttributeRequestItem can be found in the [Create Attribute for peer]({% link _docs_integrate/create-attribute-for-peer.md %}) guide.

### Response {#createattributerequestitem-response}

#### Item Properties {#createattributerequestitem-response-itemproperties}

- To accept this RequestItem a [CreateAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#createattributeacceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#createattributerequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

### Combinations and usage scenarios {#createattributerequestitem-combinationsandusagescenarios}

[Combinations and usage scenarios of the CreateAttributeRequestItem]({% link _docs_integrate/create-attribute-for-peer.md %}#combinations-and-usage-scenarios-of-createattributerequestitem) can be found in the [Create Attribute for peer]({% link _docs_integrate/create-attribute-for-peer.md %}) guide.

## FreeTextRequestItem

With the [FreeTextRequestItem]({% link _docs_integrate/data-model-overview.md %}#freetextrequestitem) it is possible to send a free text to the peer. The peer itself can accept this with a free text as well.

<!-- ### Examples {#freetextrequestitem-examples} -->

### Response Parameters {#freetextrequestitem-response}

#### Item Properties {#freetextrequestitem-response-itemproperties}

- To accept this RequestItem a [FreeTextAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#freetextacceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#freetextrequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptFreeTextRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptfreetextrequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

## ProposeAttributeRequestItem

The [ProposeAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributerequestitem) is a combination of [ReadAttributeRequestItem](#readattributerequestitem) and [CreateAttributeRequestItem](#createattributerequestitem). The sender would like to receive a correct Attribute from the peer, thinks it has a possible value but the peer might overrule this value with an existing or new one.

To create an Attribute with a value proposed by the sender, an Identity uses the ProposeAttributeRequestItem. A proposed value in this case means, that the recipient is allowed to change the value if accepting the request.

### Examples {#proposeattributerequestitem-examples}

- Onboard an existing customer to enmeshed and propose the known private Attributes, like its name or address.
- Ask the user if a newsletter would be of interest and propose the opt-in. This could be stored as a RelationshipAttribute with owner = recipient and could then be changed by the recipient at will.

### Response {#proposeattributerequestitem-response}

#### Item Properties {#proposeattributerequestitem-response-itemproperties}

- To accept this RequestItem a [ProposeAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributeacceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#proposeattributerequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptProposeAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptproposeattributerequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

### Combinations and usage scenarios {#proposeattributerequestitem-combinationsandusagescenarios}

| Attribute Type | Attribute Owner | Possible? | Automation      | Examples/Reason                                                                                                                                                                                                                                                                                                  |
| -------------- | --------------- | --------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity       | Sender          | N         | `N/A`           | It makes no sense to propose own Attributes, use [ShareAttributeRequestItem](#shareattributerequestitem) instead.                                                                                                                                                                                                |
| Identity       | Recipient       | Y         | `USER_DECISION` | Company sends name and address to new customer during its onboarding process.                                                                                                                                                                                                                                    |
| Relationship   | Sender          | Y         | `USER_DECISION` | With this combination the **sender gives the recipient the one-time permission** to write a Relationship Attribute once AND the **sender proposes a value** which might make sense as a default.<br>Example: Electricity provider asks new customer for the electricity meter number and proposes a known number |
| Relationship   | Recipient       | Y         | `USER_DECISION` | With this combination the **sender asks the recipient for the one-time permission** to write a Relationship Attribute once AND the **sender proposes a value** which might make sense as a default.<br>Example: Asking for a newsletter subscription                                                             |

## ReadAttributeRequestItem

If you want to query an Identity's Attributes this is done with the [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem).

To query Attributes which are not known to the sender, an Identity uses the ReadAttributeRequestItem.

### Examples {#readattributerequestitem-examples}

- Optional query of the BirthDate, to congratulate on birthdays
- Required query of the Age, to check if alcohol may be bought
- Required query of the StreetAddress, to send an invoice to the recipient

### Response {#readattributerequestitem-response}

#### Item Properties {#readattributerequestitem-response-itemproperties}

- To accept this RequestItem a [ReadAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#readattributeacceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#readattributerequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptReadAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptreadattributerequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

### Combinations and usage scenarios {#readattributerequestitem-combinationsandusagescenarios}

| Attribute Type | Attribute Owner | Third Party | Possible? | Automation                                                   | Examples/Reason                                                                                                                                                                                                                                                                                                  |
| -------------- | --------------- | ----------- | --------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity       | Sender          |             | N         | `N/A`                                                        | It makes no sense to read own IdentityAttributes.                                                                                                                                                                                                                                                                |
| Identity       | Recipient       |             | Y         | `USER_DECISION`                                              | Company asks customer for its delivery address                                                                                                                                                                                                                                                                   |
| Relationship   | Sender          |             | Y         | `USER_DECISION`                                              | With this combination the **sender gives the recipient the one-time permission** to write a Relationship Attribute once<br>Example: Electricity provider asks new customers for electricity meter number                                                                                                         |
| Relationship   | Recipient       |             | Y         | `USER_DECISION`                                              | With this combination the **sender asks the recipient for the one-time permission** to write a Relationship Attribute<br>Example: Company asks new customer to subscribe to the newsletter and proposes the subscription as default once                                                                         |
| Relationship   | Recipient       | Third Party | Y         | `USER DECISION / NOT ALLOWED` - depending on confidentiality | With this combination the **sender requests a Relationship Attribute from a Relationship between the recipient and a third party. The Attribute must be owned by the recipient**<br> Example: A Social Network asks for Facebook privacy settings of a user to get senseful defaults of its own privacy settings |
| Relationship   | Third Party     | Third Party | Y         | `USER DECISION / NOT ALLOWED` - depending on confidentiality | With this combination the **sender requests a Relationship Attribute from a Relationship between the recipient and a third party which is owned by the third party**<br> Example: An online shop asks for the Payback Customer Id of a user to book the order on his account                                     |

## RegisterAttributeListenerRequestItem

This item is used to register a [Listener]({% link _docs_integrate/data-model-overview.md %}#localattributelistener) for a specific Attribute. The Listener will create a Request in status `Draft` if an Attribute was created that matches the given query and the user is able to send the Request to the creator of the [RegisterAttributeListenerRequestItem]({% link _docs_integrate/data-model-overview.md %}#registerattributelistenerrequestitem).

### Examples {#registerattributelistenerrequestitem-examples}

- Asking for a specific RelationshipAttribute of a partner organization.

### Response {#registerattributelistenerrequestitem-response}

#### Item Properties {#registerattributelistenerrequestitem-response-itemproperties}

- To accept this RequestItem a [RegisterAttributeListenerAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#registerattributelisteneracceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#registerattributelistenerrequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

## ShareAttributeRequestItem

If you want to share the own DisplayName and possibly other Attributes this is done with the [ShareAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#shareattributerequestitem).

To share own IdentityAttributes (owner = self) an Identity uses the ShareAttributeRequestItem. The Identity needs to create the IdentityAttribute separately before the Attribute can be shared.

### Examples {#shareattributerequestitem-examples}

- Share own DisplayName.
- Share own Address.
- Share customer number of company A with company B.

### Response {#shareattributerequestitem-response}

#### Item Properties {#shareattributerequestitem-response-itemproperties}

- To accept this RequestItem a [ShareAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#shareattributeacceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#shareattributerequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

### Combinations and usage scenarios {#shareattributerequestitem-combinationsandusagescenarios}

| Attribute Type | Attribute Owner | Possible? | Automation                                                     | Examples/Reason                                                                                                                                                                                                                                                                                     |
| -------------- | --------------- | --------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity       | Sender          | Y         | `AUTO ACCEPT`                                                  | Company sends new customer the address of the company                                                                                                                                                                                                                                               |
| Identity       | Recipient       | N         | `N/A`                                                          | It makes no sense to share the Attribute to the recipient, because he already owns it.                                                                                                                                                                                                              |
| Identity       | Third Party     | N         | `N/A`                                                          | You cannot share an Attribute of which you are not the owner.                                                                                                                                                                                                                                       |
| Identity       | `<empty>`       | Y         | `AUTO ACCEPT`                                                  | An empty owner defaults to an Attribute with owner=`<sender>`.                                                                                                                                                                                                                                      |
| Relationship   | Sender          | Y         | `USER DECISION` / `NOT ALLOWED` (depending on confidentiality) | A user can share own RelationshipAttributes of any Relationship to any other Relationship (if the confidentiality of the RelationshipAttribute is protected or public).<br>Example: Share Customer ID from Company A with Company B (User is owner of RelationshipAttribute)                        |
| Relationship   | Recipient       | N         | `N/A`                                                          | It makes no sense to share the Attribute to the recipient, because he already owns it.                                                                                                                                                                                                              |
| Relationship   | Third Party     | Y         | `USER DECISION` / `NOT ALLOWED` (depending on confidentiality) | A user can share RelationshipAttributes of any Relationship to any other Relationship (if the confidentiality of the RelationshipAttribute is protected or public).<br> Example: Share Customer ID from Company A with Company B (Company A is owner of RelationshipAttribute), e.g. Payback number |
| Relationship   | `<empty>`       | Y         | `AUTO ACCEPT`                                                  | An empty owner defaults to an Attribute with owner=`<sender>`.                                                                                                                                                                                                                                      |
