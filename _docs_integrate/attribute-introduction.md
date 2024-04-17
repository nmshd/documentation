---
# Start automatic generation
permalink: integrate/attribute-introduction
published: true
title: "Attribute introduction"
type: scenario
toc: true
properties:
  - id: SC047
  - category: Manage Attributes of yourself
  - description:
  - customer: All
  - component: integrate
  - level: Beginner
  - implementation status: DOCS ONLY
  - documentation status: OPEN
  - published:
  - link: attribute-introduction
require:
required_by:
  - integrate/create-attribute-for-yourself
# End automatic generation
---

Identity attributes play a pivotal role in the management and exchange of information within the networked ecosystem.

An [IdentityAttribute]({% link _docs_integrate/attribute-values.md %}#identity-attributes) is specific information associated with an identity (person or entity) in the context of the networked ecosystem.

The type of attribute defines its semantic meaning. [We have defined these types and the associated purpose for some attributes]({% link _docs_integrate/attribute-values.md %}) . If this general description of an attribute is not sufficient, it is possible to use the tags to specify the semantics even more precisely. [Relationship Attributes]({% link _docs_integrate/attribute-values.md %}#relationship-attributes) should be used for attributes that are specific to a Relationship. This ensures that each attribute has its unique key for identification.

Attribute values can be of different types that define the format, validation rules and presentation information for the stored data.

These attributes comprise [both simple]({% link _docs_integrate/create-attribute-for-yourself.md %}#example-of-creating-a-simple-identityattribute) and [complex types]({% link _docs_integrate/create-attribute-for-yourself.md %}#example-of-creating-a-complex-identityattribute), such as email address, display name, phone number, and street address, respectively.
The storage of multiple attributes of the same type is possible. The user can then choose which attribute is to be used in the response. This becomes beneficial, for instance, when storing multiple residential addresses in the wallet. A specification with a tag here is crucial.

## Related links

- [for more information about creating an IdentityAttribute]({% link _docs_integrate/create-attribute-for-yourself.md %})
