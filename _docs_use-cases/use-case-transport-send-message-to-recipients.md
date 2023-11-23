---
permalink: /use-case-transport-send-message-to-recipients
published: true
title: "Send message to recipient(s)"
type: use-case
toc: true
sidebar:
  - title: "Integrate Enmeshed"
    nav: "docs_integrate"
properties:
  - id: RM1
  - layer: Transport
  - facade: MessagesFacade
  - function: sendMessage
  - description:
  - feature category: Bidirectional (un-)structured communication
  - tech category: Messages
  - status: DONE
  - comments:
  - actor: Identity
  - component: Runtime
  - trigger:
  - precondition:
  - result:
  - priority: n/a
  - complexity: n/a
  - size: n/a
  - created_at:
  - changed_at:
  - link auf testcode:
  - published: default
  - link: transport/send-message-to-recipients
require:
required_by:
api_route_regex: ^POST /api/v2/Messages$
---

{% include use-cases/use-case-transport-send-message-to-recipients.md %}
