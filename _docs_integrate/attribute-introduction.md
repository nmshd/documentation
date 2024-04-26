---
# Start automatic generation
permalink: integrate/attribute-introduction
published: true
title: "Attribute introduction"
type: scenario
toc: true
properties:
  - id: SC047
  - category: Manage Attributes
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
  - integrate/create-attributes-for-yourself
# End automatic generation
---

IdentityAttributes play a pivotal role in the management and exchange of information within the networked ecosystem.

An [IdentityAttribute]({% link _docs_integrate/attribute-values.md %}#identity-attributes) is specific information associated with an Identity (person or entity) in the context of the networked ecosystem.

The type of Attribute defines its semantic meaning. [We have defined these types and the associated purpose for some Attributes]({% link _docs_integrate/attribute-values.md %}) . If this general description of an Attribute is not sufficient, it is possible to use the tags to specify the semantics even more precisely. [RelationshipAttributes]({% link _docs_integrate/attribute-values.md %}#relationship-attributes) should be used for Attributes that are specific to a Relationship. This ensures that each Attribute has its unique key for identification.

Attribute values can be of different types that define the format, validation rules and presentation information for the stored data.

These Attributes comprise [both simple]({% link _docs_integrate/create-attribute-for-yourself.md %}#example-of-creating-a-simple-identityattribute) and [complex types]({% link _docs_integrate/create-attribute-for-yourself.md %}#example-of-creating-a-complex-identityattribute), such as email address, display name, phone number, and street address, respectively.
The storage of multiple Attributes of the same type is possible. The user can then choose which Attribute is to be used in the response. This becomes beneficial, for instance, when storing multiple residential addresses in the wallet. A specification with a tag here is crucial.

## Related links

- [for more information about creating an IdentityAttribute]({% link _docs_integrate/create-attribute-for-yourself.md %})
