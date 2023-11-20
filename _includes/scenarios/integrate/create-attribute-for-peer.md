{% include warnings/documentation-is-prerelease %}

# Flow

It is possible for an Identity to create an Attribute for another Identity. To achieve this, a Request must be sent to the peer Identity with respective RequestItems. The peer identity must manually accept the Request. Options to create Attributes:

- A CreateAttributeRequestItem to create a given Attribute that the peer can accept and thus an attribute is created. The peer is not able to change/overrule this Attribute value. This is great for reusable information which shouldn't be changed by the Identity, e.g. a certificate.
- A ProposeAttributeRequestItem to propose a given Attribute to the peer. The peer is able to overrule this Attribute and instead select a different Attribute to use. This comes in handy if one knows personal information of a peer, but does not know if this personal information is still valid.

To avoid misunderstandings and conflicts, usually it is better to use ProposeAttributeRequestItems for changing data of the peer, so that the peer has the option of overruling the Attribute to be saved.

# Examples

- An organization onboards an already known account to enmeshed, i.e. it knows the peer and thus could create/propose attribute to the enmeshed Identity
- An organization would like to submit something to the peer, which is reuseable, e.g. a certificate which the peer can share to others
