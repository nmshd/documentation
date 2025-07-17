---
# Start automatic generation
permalink: use-case-transport-query-messages
published: true
title: "Query Messages"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RM2
  - component: Runtime
  - layer: Transport
  - facade: MessagesFacade
  - function: getMessages
  - description:
  - feature category: Bidirectional (un-)structured communication
  - tech category: Messages
  - status: DONE
  - documentation status: DONE
  - comments:
  - actor: Identity
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - api_route_regex: GET /api/v2/Messages
  - published: default
  - link: use-case-transport-query-messages
require:
required_by:
api_route_regex: ^GET /api/v2/Messages$
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case queries [Messages]({% link _docs_integrate/data-model-overview.md %}#message) of the Identity.

## Parameters

All parameters are optional. If no parameter is given, all Messages are returned.

- `isOwn` indicates whether the querying Identity is the `owner` of the Message.
- `createdBy` is the enmeshed `address` of the [Identity]({% link _docs_integrate/data-model-overview.md %}#identity) that created the Messsage.
- `createdByDevice` is the `id` of the Device that created the File.
- `createdAt` is the ISODateTime the Message was created at.
- `attachments` are the [File]({% link _docs_integrate/data-model-overview.md %}#file) ids of the respective attachments.
- `recipients.address` are the enmeshed addresses of the Identities the Message was sent to.
- `recipients.relationshipId` are the [Relationship]({% link _docs_integrate/data-model-overview.md %}#relationship) ids of the respective recipient.
- `participant` is either the enmeshed address of the sender or enmeshed addresses of the Identities the Message was sent to.
- `content.@type` the type of structure of the Message's content
- `content.body` the body of the Mail, if the Message is of type Mail
- `content.subject` the subject of the Mail, if the Message is of type Mail

## On Success

- Returns all [Messages]({% link _docs_integrate/data-model-overview.md %}#message) that match the `query`.

## On Failure

- The parameters are malformed.
