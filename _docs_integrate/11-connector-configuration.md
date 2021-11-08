---
title: "Connector Configuration"
permalink: /integrate/connector-configuration
---

There are two ways to configure the connector

### Environment variables

Environment variables are translated to JSON and are overwriting the default config.

-   Uppercase words become lowercase (e.G. `ACCOUNT` -> `account`)
-   Nested JSON structures can be shaped using a double underscore. (e.g. `X__Y__Z="a"` becomes `{ "x": { "y": { "z": "a" } } }`)
-   A single underscore is translated to camelCase. (e.g. `CONNECTION_STRING` -> `connectionString`)

> Example: You want to enable the autoAcceptRelationshipCreationChanges module using an environment variable
>
> -> `{ "modules": { "autoAcceptRelationshipCreationChanges": { "enabled": true } } }`
>
> -> `MODULES__AUTO_ACCEPT_RELATIONSHIP_CREATION_CHANGES__ENABLED="true"`

### Mounting a config file

1. mount a json config file to the connector (e.g. to /config.json)
2. reference the config file in the environment variable `CUSTOM_CONFIG_LOCATION` (in that case CUSTOM_CONFIG_LOCATION="/config.json")
3. Defaults are automatically overwritten

# configuring the connector base

Extendable excerpt of the base config

```json
{
    "account": "an-account-name",
    "database": {
        "connectionString": "mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]"
    },
    "logging": { ... },
    "modules": { ... }
}
```

## `account`

The account string is used to select a MongoDB database. It is recommended to use your company name as the account name.

If you would like to use multiple connectors with distinct identities (one identity per connector) running on the same database, you have to specify a unique account name for each of them.

## `database`

### `connectionString`

At this point the connection to the database can be configured. The connection string must follow the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/).

## `logging`

The logging module of the connector is based on the [log4js](https://www.npmjs.com/package/log4js) library. More information about configuring the package can be found [in the official documentation](https://log4js-node.github.io/log4js-node/) of the package.

A simple example:

```json
{
    "appenders": {
        "consoleAppender": {
            "type": "stdout",
            "layout": { "type": "pattern", "pattern": "%[[%d] [%p] %c - %m%]" }
        },
        "console": {
            "type": "logLevelFilter",
            "level": "INFO",
            "appender": "consoleAppender"
        }
    },
    "categories": {
        "default": {
            "appenders": ["console"],
            "level": "TRACE"
        }
    }
}
```

## `modules`

Every module can be enabled or disabled by passing true / false to `enabled`.

### `httpServer`

The http server is the base for the `coreHttpApi` module. It opens an express http server where modules can register endpoints.

Extendable configuration:

```json
{
    "enabled": true,
    "cors": {
        "origin": false
    }
}
```

-   `cors`: configure the CORS headers. Valid options can be found [here](https://github.com/expressjs/cors#configuration-options).

### `sync`

The `sync` module synchronizes the content in the connector with the backbone and sends events to the event-bus (e.G. new messages / new incoming relationship request). These events can be processed by custom modules or existing modules like the `autoAcceptRelationshipCreationChanges` and `httpEndpointEventPublisher` modules.

Extendable configuration:

```json
{
    "enabled": false,
    "interval": 60
}
```

### `autoAcceptRelationshipCreationChanges`

The `autoAcceptRelationshipCreationChanges` module listenes for incoming relationship requests using events from the `sync` module. Afterwards it accepts the relationship request using the configured `responseContent`.

Extendable configuration:

```json
{
    "enabled": false,
    "responseContent": {}
}
```

-   `responseContent`: the content that is used to accept the incoming relationship request

### `coreHttpApi`

This module contains the HTTP API with all Enmeshed base functionalities.

Extendable configuration:

```json
{
    "enabled": true,
    "docs": {
        "enabled": true
    }
}
```

-   `docs.enabled`: enable / disable the `/docs/json` and `/docs/yaml` routes and the rendered swagger / rapidoc documentations

### `httpEndpointEventPublisher`

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within Enmeshed, a push mechanism is favorable: The Connector is synchronizing its state with the Platform and submits events to the organization's backend services only if there are any events.

For this, the Connector supports the configuration of an HTTP Endpoint which is called if there are events available (e.g. a new message has been received).

The `httpEndpointEventPublisher` module heavily depends on the `sync` module so it has to be enabled to work.

Extendable configuration:

```json
{
    "enabled": false,
    "httpEndpoint": "http://example.com",
    "headers": {
        "X-API-KEY": "some-super-safe-api-key"
    },
    "publishInterval": 60
}
```

-   `httpEndpoint`: the endpoint the request should be sent to
-   `headers`: headers for the request (e.G. apiKeys, ..)
-   `publishInterval`: the interval in seconds
