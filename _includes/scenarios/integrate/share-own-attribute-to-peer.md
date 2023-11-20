{% include warnings/documentation-is-prerelease %}

# Flow

It is possible for an Identity to share an own Attribute to another Identity. To achieve this, first a LocalAttribute with the respective IdentityAttribute must be created. Then a Request must be sent to the peer Identity a respective RequestItem. This Request can be submitted either by a Message or by a RelationshipTemplate. The peer identity must manually accept the Request.

A ShareAttributeRequestItem must be used for sharing an already existing own LocalAttribute to a peer. The peer is not able to change/overrule this Attribute value, however it is able to reject the Attribute if it doesn't want it.

# Examples

- An organization wants to share a new support channel (e.g. a Chatbot) to the user
