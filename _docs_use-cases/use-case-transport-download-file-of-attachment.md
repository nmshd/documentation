---
# Start automatic generation
permalink: use-case-transport-download-file-of-attachment
published: true
title: "Download File of Attachment"
type: use-case
toc: true
sidebar:
  - title: "Integrate enmeshed"
    nav: "docs_integrate"
properties:
  - id: RM5
  - component: Runtime
  - layer: Transport
  - facade: MessagesFacade
  - function: downloadAttachment
  - description: Downloads the file of the given `attachmentId` of Message with `messageId`.
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
  - link: use-case-transport-download-file-of-attachment
require:
required_by:
# End automatic generation
---

{{properties.description}}

{% include properties_list.html %}

This use case downloads a file that was sent by a [Message]({% link _docs_integrate/data-model-overview.md %}#message)
as an attachment.

Internally uses the [Download File Use-Case](/use-case-transport-download-file)
