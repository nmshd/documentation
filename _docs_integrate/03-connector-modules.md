---
title: "Connector Modules"
permalink: /integrate/connector-modules
toc: true
---

Since the Connector is based on the Runtime, [all modules of the Runtime]({% link _docs_explore/60-runtime.md %}#runtime-modules) are also available in the Connector.

Read more about the module configuration on the <i class="fas fa-fw fa-cog"/> icon in each title.

### AMQP Publisher <a href="{% link _docs_integrate/11-connector-configuration.md %}#amqppublisher"><i class="fas fa-fw fa-cog"/></a> {#amqppublisher}

This module proxies all events in the internal event bus of the Connector to an exchange in a configured AMQP server.
This adds the possibility to listen to events in an external application without using [webhooks](#webhooksv2).

### Auto Accept Relationship Creation Changes <a href="{% link _docs_integrate/11-connector-configuration.md %}#autoacceptrelationshipcreationchanges"><i class="fas fa-fw fa-cog"/></a> {#autoacceptrelationshipcreationchanges}

It is not recommended to use this module for production szenarios.
{: .notice--danger}

The `autoAcceptRelationshipCreationChanges` module depends on the `sync` module and listens to the notifications about incoming Relationship Requests. It immediately accepts the Requests, using the configured `responseContent`.

### Core HTTP API <a href="{% link _docs_integrate/11-connector-configuration.md %}#corehttpapi"><i class="fas fa-fw fa-cog"/></a> {#corehttpapi}

This module contains the HTTP API with all Enmeshed base functionalities.

### Sync <a href="{% link _docs_integrate/11-connector-configuration.md %}#sync"><i class="fas fa-fw fa-cog"/></a> {#sync}

The `sync` module regularly fetches changes from the Backbone (e.g. new messages / new incoming relationship requests) and notifies other modules like the `webhooks` module about them.

### Webhooks <a href="{% link _docs_integrate/11-connector-configuration.md %}#webhooks"><i class="fas fa-fw fa-cog"/></a> {#webhooks}

**Note:** This module is deprecated in favor of the [WebhooksV2 module](#webhooksv2).
{: .notice--warning}

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within Enmeshed, a push mechanism is favorable: the Connector is synchronizing its state with the Backbone and notifies the organization's backend services about changes.

For this, the Connector supports the configuration of a webhook which is called in case there is something new (e.g. a new message has been received).

Keep in mind that you need to synchronize the state of the Connector with the Backbone in order to receive webhooks. The `sync` module automates this, but you can also do this manually by calling the `/api/v1/Account/Sync` route.

### WebhooksV2 <a href="{% link _docs_integrate/11-connector-configuration.md %}#webhooksv2"><i class="fas fa-fw fa-cog"/></a> {#webhooksv2}

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within Enmeshed, a push mechanism is favorable: the Connector is synchronizing its state with the Backbone and notifies the organization's backend services about changes.

For this, the Connector supports the configuration of webhooks which are called every time a specific [Connector Event]({% link _docs_integrate/32-connector-events.md %}) is triggered (e.g. a new message has been received => `transport.messageReceived`).

Keep in mind that you need to synchronize the state of the Connector with the Backbone in order to receive events. The `sync` module automates this, but you can also do this manually by calling the `/api/v1/Account/Sync` route.
