---
# Start automatic generation
permalink: use-case-transport-get-file-metadata-of-attachment
published: true
title: "Get File Metadata of Attachment"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RM4
  - component: Runtime
  - layer: Transport
  - facade: MessagesFacade
  - function: getAttachmentMetadata
  - description: Returns the attachment's metadata of the given `attachmentId` of message with `messageId`.
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
  - api_route_regex:
  - published: default
  - link: use-case-transport-get-file-metadata-of-attachment
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case retrieves the metadata information of a [File]({% link _docs_integrate/data-model-overview.md %}#file) that was sent by a [Message]({% link _docs_integrate/data-model-overview.md %}#message) as one of its `attachments`.

Internally uses the [Load File](/use-case-transport-load-file) use case.
