There are many situations in which an Identity wants to create an [IdentityAttribute]({% link _docs_integrate/data-model-overview.md %}#identityattribute) or a [RelationshipAttribute]({% link _docs_integrate/data-model-overview.md %}#relationshipattribute) for another Identity, for example:

- A university wants to send a graduate their degree certificate.
- A company wants to provide an employee with their business [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress) at the start of their employment.

In this guide, we explain how a Connector, hereinafter referred to as the Sender, can create an Attribute for another Connector, the so-called Recipient. Since understanding this creation process requires knowledge about [Requests]({% link _docs_integrate/data-model-overview.md %}#request) and how to use them in general, you should take a look at our Request and Response introduction before continuing reading this guide.

<!--- TODO: Insert Link to "Request and Response introduction" guide --->

There are several ways in which an Identity can create an Attribute for a peer. This guide covers how an Identity can request the creation of an Attribute for a peer so that the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) is only set by the Identity itself and cannot be modified by the peer. If the peer should be able to adjust the [Attribute Value]({% link _docs_integrate/attribute-values.md %}) proposed for creation, the Propose attribute to peer guide must be consulted instead.
{: .notice--info}

<!--- TODO: Insert Link to "Propose attribute to peer" guide --->

<!--- Prerelease:
 {% include warnings/documentation-is-prerelease %}

# Flow

It is possible for an Identity to create an Attribute for another Identity. To achieve this, a Request must be sent to the peer Identity with respective RequestItems. The peer identity must manually accept the Request. Options to create Attributes:

- A CreateAttributeRequestItem to create a given Attribute that the peer can accept and thus an attribute is created. The peer is not able to change/overrule this Attribute value. This is great for reusable information which shouldn't be changed by the Identity, e.g. a certificate.
- A ProposeAttributeRequestItem to propose a given Attribute to the peer. The peer is able to overrule this Attribute and instead select a different Attribute to use. This comes in handy if one knows personal information of a peer, but does not know if this personal information is still valid.

To avoid misunderstandings and conflicts, usually it is better to use ProposeAttributeRequestItems for changing data of the peer, so that the peer has the option of overruling the Attribute to be saved.

# Examples

- An organization onboards an already known account to enmeshed, i.e. it knows the peer and thus could create/propose attribute to the enmeshed Identity
- An organization would like to submit something to the peer, which is reuseable, e.g. a certificate which the peer can share to others
--->
