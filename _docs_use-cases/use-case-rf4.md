---
permalink: /use-case-rf4
published: true
title: "Get or load File"
type: use-case
toc: true
properties:
  - id: RF4
  - layer: Transport
  - facade: FilesFacade
  - function: getOrLoadFile
  - description: Loads a file of another identity. After it is loaded once, you can retrieve it without the need for the secret key by calling one of the GET-routes.
  - feature category: Arbitrary large data support
  - tech category: Files
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
  - link auf demo:
require:
required_by:
---

{% include use-cases/use-case-rf4.md %}
