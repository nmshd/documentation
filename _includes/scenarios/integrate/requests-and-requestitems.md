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

Examples of use cases for the ProposeAttributeRequestItem can be found in the [Propose Attribute to peer]({% link _docs_integrate/propose-attribute-to-peer.md %}) guide.

### Response {#proposeattributerequestitem-response}

#### Item Properties {#proposeattributerequestitem-response-itemproperties}

- To accept this RequestItem a [ProposeAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#proposeattributeacceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#proposeattributerequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptProposeAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptproposeattributerequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

### Combinations and usage scenarios {#proposeattributerequestitem-combinationsandusagescenarios}

[Combinations and usage scenarios of the ProposeAttributeRequestItem]({% link _docs_integrate/propose-attribute-to-peer.md %}#combinations-and-usage-scenarios-of-proposeattributerequestitem) can be found in the [Propose Attribute to peer]({% link _docs_integrate/propose-attribute-to-peer.md %}) guide.

## ReadAttributeRequestItem

If you want to query an Identity's Attributes this is done with the [ReadAttributeRequestItem]({% link _docs_integrate/data-model-overview.md %}#readattributerequestitem).

To query Attributes which are not known to the sender, an Identity uses the ReadAttributeRequestItem.

### Examples {#readattributerequestitem-examples}

Examples of use cases for the ReadAttributeRequestItem can be found in the [Read Attribute from peer]({% link _docs_integrate/read-attribute-from-peer.md %}) guide.

### Response {#readattributerequestitem-response}

#### Item Properties {#readattributerequestitem-response-itemproperties}

- To accept this RequestItem a [ReadAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#readattributeacceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#readattributerequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptReadAttributeRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptreadattributerequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

### Combinations and usage scenarios {#readattributerequestitem-combinationsandusagescenarios}

[Combinations and usage scenarios of the ReadAttributeRequestItem]({% link _docs_integrate/read-attribute-from-peer.md %}#combinations-and-usage-scenarios-of-readattributerequestitem) can be found in the [Read Attribute from peer]({% link _docs_integrate/read-attribute-from-peer.md %}) guide.

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

Examples of use cases for the ShareAttributeRequestItem can be found in the [Share own Attribute to peer]({% link _docs_integrate/share-own-attribute-to-peer.md %}) guide.

### Response {#shareattributerequestitem-response}

#### Item Properties {#shareattributerequestitem-response-itemproperties}

- To accept this RequestItem a [ShareAttributeAcceptResponseItem]({% link _docs_integrate/data-model-overview.md %}#shareattributeacceptresponseitem) will be transferred.
- To reject this RequestItem a [RejectResponseItem]({% link _docs_integrate/data-model-overview.md %}#rejectresponseitem) will be transferred.
- In case of an error an [ErrorResponseItem]({% link _docs_integrate/data-model-overview.md %}#errorresponseitem) will be transferred.

#### Parameters {#shareattributerequestitem-response-parameters}

- To accept this RequestItem you can utilize [AcceptRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#acceptrequestitemparameters).
- To reject this RequestItem you can utilize [RejectRequestItemParameters]({% link _docs_integrate/data-model-overview.md %}#rejectrequestitemparameters).

### Combinations and usage scenarios {#shareattributerequestitem-combinationsandusagescenarios}

[Combinations and usage scenarios of the ShareAttributeRequestItem]({% link _docs_integrate/share-own-attribute-to-peer.md %}#combinations-and-usage-scenarios-of-shareattributerequestitem) can be found in the [Share own Attribute to peer]({% link _docs_integrate/share-own-attribute-to-peer.md %}) guide.
