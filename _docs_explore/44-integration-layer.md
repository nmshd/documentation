---
title: "Integration Layer"
permalink: /explore/layers/integration
toc: true
---

The integration layer is only available within the Connector and sits on top of the transport and consumption layers. It is responsible for providing integration capabilities to other systems. It acts for a single identity only, which is usually an organization.

**Components**

-   Connector

# Tasks

## Webserver with Authentication

The integration layer provides an integrated web server with authentication mechanism in order to restrict access to keys and personal data from within the organizations network.

## API

An application programming interface, more specifically a REST API, is provided to access the transport layer's functionality over http(s) within the organizations network.

Although the integration layer sits on top of the consumption layer, the API so far does not expose consumption functionality. There are plans to extend the API with the consumption layer feature set, e.g. being able to use a REST API to access the data log of a contact.

## Automated Synchronization

The integration layer enables an automated synchronization with the Backbone based on long-polling mechanisms.

## Webhooks to external systems

Whenever a synchronization with the Backbone takes place, new messages or relationship changes could be received. The webhooks enable an automated routing of these events to external systems and thus a process automation with incoming messages or relationship changes.

## Monitoring and Logging Capabilities

The operation of a Connector is supported by monitoring and logging capabilities of the integration layer.
