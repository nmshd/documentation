An [Identity Attribute]({% link _docs_integrate/attribute-values.md %}#identity-attributes) is a specific piece of information associated with an identity (person or entity) in the context of the networked ecosystem. Attribute values can take on different types that define the format, validation rules, and presentation information for the stored data.

Identity attributes are critical for managing and sharing information within the networked ecosystem and can include both simple, atomic attribute value types (e.g., email address, display name, phone number) and more complex types (e.g., street address, personal name). These attributes may also contain other attribute values, depending on their specific requirements.

## Example

For example, an email address is associated with the attribute value type [EMailAddress]({% link _docs_integrate/attribute-values.md %}#emailaddress), which defines the following:

| Name    | Type             | Required | Validation                                                                                |
| ------- | ---------------- | :------: | ----------------------------------------------------------------------------------------- |
| `@type` | `"EMailAddress"` |    ✓     |                                                                                           |
| `value` | `string`         |    ✓     | min. length: 3<br>max. length: 100<br>must match `^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$` |

- The type of the attribute
- The data type of the actual value (a string).
- How it is validated (according to the pattern of an email address and a maximum length).
- The requirement or optionality of attributes

## Related links

<!-- - [for more information about creating an IdentityAttribute](% link _docs_integrate/create-own-identityattribute.md %) -->

- [alternative relationship attribute]({% link _docs_integrate/attribute-values.md %}#relationship-attributes)
