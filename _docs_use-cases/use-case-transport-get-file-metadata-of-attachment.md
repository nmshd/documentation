---
# Start automatic generation
permalink: use-case-transport-get-file-metadata-of-attachment
published: true
title: "Get File Metadata of Attachment"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RM4
  - component: Runtime
  - layer: Transport
  - facade: MessagesFacade
  - function: getAttachmentMetadata
  - description: Returns the attachment's metadata of the given `attachmentId` of Message with `messageId`.
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

This use case retrieves the metadata of a [File]({% link _docs_integrate/data-model-overview.md %}#file) that was sent by a [Message]({% link _docs_integrate/data-model-overview.md %}#message)
as an attachment.

Internally uses the [get or load file](/use-case-transport-get-or-load-file) use case.
