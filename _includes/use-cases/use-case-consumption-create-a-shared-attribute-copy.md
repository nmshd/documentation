{{properties.description}}

{% include properties_list.html %}

This use-case is intended to create a copy of an attribute with the intent to share it. The copy references the original
Repository Attribute [cf]({% link _docs_integrate/data-model-overview.md %}#localattributeshareinfo).

### Parameters

- `attributeId` is the id of the attribute that the copy is made of.
- `peer` is the address of the peer the copy will be sent to.
- `requestReference` is a reference to the request the copy will be sent with.

### On Success

- The copy is created and returned as a [LocalRequest]({% link _docs_integrate/data-model-overview.md %}#localrequest).

### On Error

---
