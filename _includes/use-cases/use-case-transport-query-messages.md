{{properties.description}}

{% include properties_list.html %}

This use-case queries [Messages]({% link _docs_integrate/data-model-overview.md %}#message)
related to the identity.

## Parameters

- `createdBy` is the enmeshed address that created the messsage.
- `createdByDevice` is the device id that created the message.
- `createdAt` is the ISODateTime the message was created at.
- `attachments` are the file id's of the attachments.
- `recipients.address` is the enmeshed address the message was sent to.
- `recipients.relationshipId` is the id of the relationship to the recipient.
- `participant`
- `content.@type`
- `content.body`
- `content.subject`

## On Success

- Returns all [Messages]({% link _docs_integrate/data-model-overview.md %}#message) that match the `query`.
