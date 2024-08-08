---
# Start automatic generation
permalink: operate/modules
redirect_from:
  - /integrate/connector-modules
published: true
title: "Modules"
type: scenario
toc: true
properties:
  - id: SC080
  - category: Connector Setup
  - description:
  - customer:
  - component: operate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: OLD
  - published: true
  - link: modules
require:
required_by:
# End automatic generation
---

Since the Connector is based on the Runtime, [all Modules of the Runtime]({% link _docs_explore/61-runtime.md %}#runtime-modules) are also available in the Connector.

Additionally, the Connector defines its own Modules that only make sense in the context of a Connector and are therefore not defined in the Runtime.

Read more about the Module configuration on the <i class="fas fa-fw fa-cog"/> icon in each title.

### AMQP Publisher <a href="{% link _docs_operate/configuration.md %}#amqppublisher"><i class="fas fa-fw fa-cog"/></a> {#amqppublisher}

This module is deprecated in favor of the [Message Broker Publisher](#messagebrokerpublisher) Module.
{: .notice--danger}

This Module proxies all [events]({% link _docs_integrate/connector-events.md %}) of the internal event bus of the Connector to an exchange in a configurable AMQP server.

Compared to [webhooks](#webhooks), this gives you the full feature set of a message broker. There are multiple scenarios where this Module outweighs the Webhooks Module. For example:

- You need persistence for the triggered [events]({% link _docs_integrate/connector-events.md %}).
- You want to integrate enmeshed into an already existing message broker.

### Auto Accept Relationship Creation Changes <a href="{% link _docs_operate/configuration.md %}#autoacceptrelationshipcreationchanges"><i class="fas fa-fw fa-cog"/></a> {#autoacceptrelationshipcreationchanges}

It is not recommended to use this Module for production scenarios.
{: .notice--danger}

The `autoAcceptRelationshipCreationChanges` Module listens to the [events]({% link _docs_integrate/connector-events.md %}) about incoming Relationship Change Requests. It immediately accepts the Requests, using the configured `responseContent`.

Keep in mind that you need to synchronize the state of the Connector with the Backbone in order to receive incoming Relationship Requests. The `sync` Module automates this, but you can also do this manually by calling the `/api/v2/Account/Sync` route.

### Core HTTP API <a href="{% link _docs_operate/configuration.md %}#corehttpapi"><i class="fas fa-fw fa-cog"/></a> {#corehttpapi}

This Module contains the HTTP API with all enmeshed base functionalities.

### Message Broker Publisher <a href="{% link _docs_operate/configuration.md %}#messagebrokerpublisher"><i class="fas fa-fw fa-cog"/></a> {#messagebrokerpublisher}

The Message Broker Publisher Module allows you to publish [events]({% link _docs_integrate/connector-events.md %}) to different message brokers. Supported message brokers are: `AMQP`, `PubSub`, `Redis` and `MQTT`.

Compared to [webhooks](#webhooks), this gives you the full feature set of these message brokers. There are multiple scenarios where this Module outweighs the Webhooks Module. For example:

- You need persistence or retries for the triggered [events]({% link _docs_integrate/connector-events.md %}).
- You want to integrate enmeshed into an already existing message broker.

### Sync <a href="{% link _docs_operate/configuration.md %}#sync"><i class="fas fa-fw fa-cog"/></a> {#sync}

The `sync` Module regularly fetches changes from the Backbone (e.g. new Messages / new incoming Relationship Requests). This process automatically triggers the events used by other Modules like the `webhooks` Module.

The sync module and the sse module are not compatible. The sync module will be disabled if both are active.
{: .notice--warning}

### PubSub Publisher <a href="{% link _docs_operate/configuration.md %}#pubsubpublisher"><i class="fas fa-fw fa-cog"/></a> {#pubsubpublisher}

This module is deprecated in favor of the [Message Broker Publisher](#messagebrokerpublisher) Module.
{: .notice--danger}

This Module proxies all events of the internal event bus of the Connector to a configurable PubSub instance.

Compared to [webhooks](#webhooks), this gives you the full feature set of a message broker. There are multiple scenarios where this Module outweighs the Webhooks Module. For example:

- You need persistence for the triggered [events]({% link _docs_integrate/connector-events.md %}).
- You want to integrate enmeshed into an already existing message broker.

### Webhooks <a href="{% link _docs_operate/configuration.md %}#webhooks"><i class="fas fa-fw fa-cog"/></a> {#webhooks}

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within enmeshed, a push mechanism is favorable: the Connector is synchronizing its state with the Backbone and notifies the organization's backend services about changes.

For this, the Connector supports the configuration of webhooks which are called every time a specific [Connector Event]({% link _docs_integrate/connector-events.md %}) is triggered (e.g. a new Message has been received => `transport.messageReceived`).

Keep in mind that you need to synchronize the state of the Connector with the Backbone in order to receive events. The `sync` Module automates this, but you can also do this manually by calling the `/api/v2/Account/Sync` route.

### sse (server sent events) <a href="{% link _docs_operate/configuration.md %}#sse"><i class="fas fa-fw fa-cog"/></a> {#sse}

The sse Module allows the Connector to receive events from the Backbone without exposing the Connector to the Internet.
The Connector reacts to these events and ensures automatic synchronization.

### Requesting Modules

In case you need a further Module for your application, please state a [feature request](https://github.com/nmshd/feedback/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=%5BFEATURE%5D+).
