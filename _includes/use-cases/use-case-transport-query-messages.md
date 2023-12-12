{{properties.description}}

{% include properties_list.html %}

This use-case queries [Messages]({% link _docs_integrate/data-model-overview.md %}#message) of the Identity.

## Parameters

All parameters are optional. If no parameter is given, all Messages are returned.

- `createdBy` is the enmeshed Address of the Identity that created the Messsage.
- `createdByDevice` is the `id` of the Device that created the File.
- `createdAt` is the ISODateTime the Message was created at.
- `attachments` are the [File]({% link _docs_integrate/data-model-overview.md %}#file) ids of the respective attachments.
- `recipients.address` are the enmeshed Addresses of the Identities the Message was sent to.
- `recipients.relationshipId` are the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) ids of the respective recipient.
- `participant` is either the enmeshed Address of the sender or enmeshed Addresses of the Identities the Message was sent to.
- `content.@type` the type of structure of the Message's content
- `content.body` the body of the Mail, if the Message is of type Mail
- `content.subject` the subject of the Mail, if the Message is of type Mail

## On Success

- Returns all [Messages]({% link _docs_integrate/data-model-overview.md %}#message) that match the `query`.

## On Failure

- The parameters are malformed.
