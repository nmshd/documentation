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
  - component: Runtime
  - layer: Transport
  - facade: MessagesFacade
  - function: sendMessage
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
  - api_route_regex: POST /api/v2/Messages
  - published: default
  - link: transport/send-message-to-recipients
  - redirect_from:
require:
required_by:
api_route_regex: ^POST /api/v2/Messages$
---

{% include use-cases/use-case-transport-send-message-to-recipients.md %}
