---
title: "Connector Configuration"
permalink: /integrate/Connector-configuration
---

There are two ways to configure the Connector:

## Environment variables

Environment variables are translated to JSON and are overwriting the default config.

-   Uppercase words become lowercase (e.G. `ACCOUNT` becomes `account`)
-   Nested JSON structures can be shaped using a double underscore (e.g. `X__Y__Z="a"` becomes `{ "x": { "y": { "z": "a" } } }`)
-   A single underscore is translated to camelCase (e.g. `CONNECTION_STRING` becomes `connectionString`)

> Example: You want to enable the autoAcceptRelationshipCreationChanges module using an environment variable
>
> The JSON representation would be:
>
> ```json
> {
>     "modules": {
>         "autoAcceptRelationshipCreationChanges": {
>             "enabled": true
>         }
>     }
> }
> ```
>
> If you want to set this property via an environment variable, you need to use `MODULES__AUTO_ACCEPT_RELATIONSHIP_CREATION_CHANGES__ENABLED="true"`.

## Mounting a config file

At some point environment variables come to their limits. E.g. you cannot set complex values. So if you want to set multiple properties on a single object, you need to add a separate environment variable for each property:

```text
A__B__C1="c1"
A__B__C2="c2"
A__B__C3="c3"
```

You can image that this could easily get out of control. This is where you should consider mounting a config file. In order to do so, you need to:

1. Create a config file in JSON format in a folder of your choice.
2. Fill the config file with your desired configuration (it's sufficient to add values you want to change; the Connector will merge your config file with the default configuration) Example:
    ```json
    {
        "modules": {
            "autoAcceptRelationshipCreationChanges": {
                "enabled": true
            }
        }
    }
    ```
3. Mount the created config file into the Docker container (e.g. to /config.json). See the official [documentation](https://docs.docker.com/storage/bind-mounts/) for more information on how to mount files into a Docker container.
4. Set the environment variable `CUSTOM_CONFIG_LOCATION` to the path you mounted your config file to (e.g. CUSTOM_CONFIG_LOCATION="/config.json").

# Configuration options

Extendable excerpt of the default config

```json
{
    "account": "an-account-name",
    "database": {
        "connectionString": "mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]"
    },
    "modules": { ... }
}
```

## `account`

The account string is used to select a MongoDB database. It is recommended to use your company name as the account name.

If you would like to use multiple Connectors with distinct identities (one identity per Connector) running on the same database, you have to specify a unique account name for each of them.

## `database`

### `connectionString`

At this point the connection to the database can be configured. The connection string must follow the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/).

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

The `sync` module synchronizes the content in the Connector with the backbone and sends events to the event-bus (e.G. new messages / new incoming relationship request). These events can be processed by custom modules or existing modules like the `autoAcceptRelationshipCreationChanges` and `httpEndpointEventPublisher` modules.

Extendable configuration:

```json
{
    "enabled": false,
    "interval": 60
}
```

### `autoAcceptRelationshipCreationChanges`

> It is not recommended to use this module in production.

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

### `webhooks`

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within Enmeshed, a push mechanism is favorable: The Connector is synchronizing its state with the Platform and submits events to the organization's backend services only if there are any events.

For this, the Connector supports the configuration of an HTTP Endpoint which is called if there are events available (e.g. a new message has been received).

The `webhooks` module heavily depends on the `sync` module so it has to be enabled to work.

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
