---
permalink: /use-case-transport-get-file-metadata-of-attachment
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
  - description: Returns the attachment's metadata of the given 'attachmentId' of message with 'messageId'.
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
  - link: transport/get-file-metadata-of-attachment
  - redirect_from:
require:
required_by:
---

{% include use-cases/use-case-transport-get-file-metadata-of-attachment.md %}
