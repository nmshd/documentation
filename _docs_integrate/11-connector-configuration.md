---
title: "Connector Configuration"
permalink: /integrate/connector-configuration
---

# Using multiple connectors with the same database

If you would like to use multiple connectors with distinct identities (one identity per connector) running on the same database, you have to specify a unique account name for each of them by setting the environment variable `ACCOUNT`.
We use the same concept for the Enmeshed demo landscape, where multiple identities are hosted on the same database for faking different organizations.

# Push Mechanisms

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within Enmeshed, a push mechanism is favorable: The Connector is synchronizing its state with the Platform and submits events to the organization's backend services only if there are any events.

For this, the Connector supports the configuration of an HTTP Endpoint which is called if there are events available (e.g. a new message has been received).
