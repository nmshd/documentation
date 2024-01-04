---
permalink: /use-case-transport-download-file-of-attachment
published: true
title: "Download File of Attachment"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RM5
  - component: Runtime
  - layer: Transport
  - facade: MessagesFacade
  - function: downloadAttachment
  - description: Downloads the file of the given 'attachmentId' of message with 'messageId'.
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
  - link: transport/download-file-of-attachment
require:
required_by:
---

{% include use-cases/use-case-transport-download-file-of-attachment.md %}
