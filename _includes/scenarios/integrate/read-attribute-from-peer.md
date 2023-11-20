{% include warnings/documentation-is-prerelease %}

# Flow

A very common scenario is to request an Attribute of someone else.

- ReadAttributeRequestItems inside a Request define, which Attributes should be requested from the peer Identity. For each individual item, it can be defined if it `mustBeAccepted` or not.
- The peer Identity either gets proposals of already stored matching Attributes to each item, or is able to directly enter the requested Attribute.
- If the peer Identity accepts the Request, the Attributes are submitted via a Response to the requesting Identity
- The Response is automatically processed at the requesting Identity and the respective LocalAttributes for the peer created.

# Examples

- This could be structured Attributes which describe someone, e.g. names, addresses, or communication channels so-called IdentityAttributes.
- It could be Attributes of structured or unstructured certifications of this someone, e.g. school certificates, bachelor degrees or language certifications, e.g. for IdentityAttributes which are tagged with a semantic meaning.
- It could be peer specific relationship or contractual details, so-called RelationshipAttributes, e.g. student ids, contract details or relationship-specific settings
- Or it could be data of other relationships (i.e. RelationshipAttributes), e.g. a bonus program number of a third party.
