{{properties.description}}

{% include properties_list.html %}

This use-case sends a [Message]({% link _docs_integrate/data-model-overview.md %}#message) to the given gecipient(s).

## Parameters

- `recipients` are the enmeshed addresses of the recipients.
- `content` of the message. For the exact structure of a message refer
  to the [data model]({% link _docs_integrate/data-model-overview.md %}#message).
- `attachments` are file ids to attach.

## On Success

- Sends and returns the [Message]({% link _docs_integrate/data-model-overview.md %}#message)
  to all receipients and they are notified on thei're next sync.

## On Failure

- The `attachments` are not valid file id's.
- The `content` is malformed.
