---
title: "A new version of the Webhooks connector module"
date: 2022-03-02T12:00:00+02:00
categories:
    - blog
tags:
    - connector
    - update
---

## Introduction

Hello everyone!

Today we want to announce a new version of the Webhooks connector module.

The old version of the module had many limitations that we could only address with a complete rewrite. To be backwards compatible the old version of the module is still available in the connector under the name `webhooks`.
The new module can be configured under the name `webhooksV2`.
If you dont want to use the new module it doesn't require further actions.

We still recommend to switch to the new module as soon as possible as the old module is now deprecated and will not be supported anymore.

## Configuration

The configuration of the new module is described [here](/integrate/connector-configuration#webhooksv2).

## Migration

The old module listened on the following events `transport.messageReceived` and `transport.relationshipChanged` collected the information for x seconds and sent arrays of messages and relationships to the webhook configured under the url.

To receive the same events in the new module you can configure it as follows:

```json
{
    "webhooksV2": {
        "targets": {
            "target1":  {
                "url": "https://example.com/webhook",
            }
        }
        "webhooks": [
            {
                "triggers": ["transport.messageReceived", "transport.relationshipChanged"],
                "target": "target1"
            }
        ]
    }
}
```

The payload will change though. For the event `transport.messageReceived` will be a single message and for the event `transport.relationshipChanged` will be a single relationship.
