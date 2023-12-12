{{properties.description}}

{% include properties_list.html %}

This use-case sends a [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the given recipient(s).

## Parameters

- `recipients` is a list of the enmeshed Addresses which should receive the Message.
- `content` the structured content of the Message. Usually a [Mail]({% link _docs_integrate/data-model-overview.md %}#mail) when communicating with a user.
- `attachments` is a list of [File]({% link _docs_integrate/data-model-overview.md %}#file) ids which should be attached to the Message.

## On Success

- Sends the Message to all recipients
- Returns the sent Message

## On Failure

- One of the `recipients` is not an active Relationship
- The `attachments` are not valid File ids.
- The `content` is malformed.
