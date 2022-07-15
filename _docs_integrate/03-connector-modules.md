---
title: "Connector Modules"
permalink: /integrate/connector-modules
toc: true
---

Since the Connector is based on the Runtime, [all Modules of the Runtime]({% link _docs_explore/60-runtime.md %}#runtime-modules) are also available in the Connector.

Additionally, the Connector defines its own Modules that only make sense in the context of a Connector and are therefore not defined in the Runtime.

Read more about the Module configuration on the <i class="fas fa-fw fa-cog"/> icon in each title.

### AMQP Publisher <a href="{% link _docs_integrate/11-connector-configuration.md %}#amqppublisher"><i class="fas fa-fw fa-cog"/></a> {#amqppublisher}

This Module proxies all events in the internal event bus of the Connector to an exchange in a configurable AMQP server.

Compared to [webhooks](#webhooksv2), this gives you the full feature set of a message broker. There are multiple scenarios where this Module outweighs the Webhooks Module. For example:

-   You need persistence for the triggered events.
-   You want to integrate Enmeshed into an already existing message broker.

### Auto Accept Relationship Creation Changes <a href="{% link _docs_integrate/11-connector-configuration.md %}#autoacceptrelationshipcreationchange"><i class="fas fa-fw fa-cog"/></a> {#autoacceptrelationshipcreationchange}

It is not recommended to use this Module for production szenarios.
{: .notice--danger}

The `autoAcceptRelationshipCreationChanges` Module listens to the events about incoming Relationship Change Requests. It immediately accepts the Requests, using the configured `responseContent`.

Keep in mind that you need to synchronize the state of the Connector with the Backbone in order to receive incoming Relationship Requests. The `sync` Module automates this, but you can also do this manually by calling the `/api/v1/Account/Sync` route.

### Core HTTP API <a href="{% link _docs_integrate/11-connector-configuration.md %}#corehttpapi"><i class="fas fa-fw fa-cog"/></a> {#corehttpapi}

This Module contains the HTTP API with all Enmeshed base functionalities.

### Sync <a href="{% link _docs_integrate/11-connector-configuration.md %}#sync"><i class="fas fa-fw fa-cog"/></a> {#sync}

The `sync` Module regularly fetches changes from the Backbone (e.g. new Messages / new incoming Relationship Requests). This process automatically triggers the events used by other Modules like the `webhooks` Module.

### Webhooks <a href="{% link _docs_integrate/11-connector-configuration.md %}#webhooks"><i class="fas fa-fw fa-cog"/></a> {#webhooks}

**Note:** This Module is deprecated in favor of the [WebhooksV2 Module](#webhooksv2).
{: .notice--warning}

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within Enmeshed, a push mechanism is favorable: the Connector is synchronizing its state with the Backbone and notifies the organization's backend services about changes.

For this, the Connector supports the configuration of a webhook which is called in case there is something new (e.g. a new Message has been received).

Keep in mind that you need to synchronize the state of the Connector with the Backbone in order to receive webhooks. The `sync` Module automates this, but you can also do this manually by calling the `/api/v1/Account/Sync` route.

### WebhooksV2 <a href="{% link _docs_integrate/11-connector-configuration.md %}#webhooksv2"><i class="fas fa-fw fa-cog"/></a> {#webhooksv2}

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within Enmeshed, a push mechanism is favorable: the Connector is synchronizing its state with the Backbone and notifies the organization's backend services about changes.

For this, the Connector supports the configuration of webhooks which are called every time a specific [Connector Event]({% link _docs_integrate/32-connector-events.md %}) is triggered (e.g. a new Message has been received => `transport.messageReceived`).

Keep in mind that you need to synchronize the state of the Connector with the Backbone in order to receive events. The `sync` Module automates this, but you can also do this manually by calling the `/api/v1/Account/Sync` route.
