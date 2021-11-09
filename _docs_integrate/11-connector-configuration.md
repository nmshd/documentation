---
title: "Connector Configuration"
permalink: /integrate/connector-configuration
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

The Connector provides the following configuration parameters:

```json
{
    "transportLibrary": {
        "platformClientId": "CLIENT_ID",
        "platformClientSecret": "CLIENT_SECRET"
    },
    "database": {
        "connectionString": "mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]",
        "dbName": "a-db-name"
    },
    "modules": { ... }
}
```

## `transportLibrary`

### `clientId`

> environment variable alias: PLATFORM_CLIENT_ID

The client id required to contact the enmeshed platform.

### `clientSecret`

> environment variable alias: PLATFORM_CLIENT_SECRET

The client secret required to communicate with the Enmeshed platform.

## `database`

### `connectionString`

> environment variable alias: DATABASE_CONNECTION_STRING

At this point the connection to the database can be configured. The connection string must follow the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/).

### `dbName`

> environment variable alias: DATABASE_NAME

The `dbName` string is used as the name of the MongoDB database. You can use any name you like, but keep in mind that changing it later will NOT rename the database. Instead a new database will be created, together with a new Enmeshed identity. Even though the old database will still exist, the Connector will not be able to access the data until you change the `dbName` back to its original value.

If you would like to use multiple Connectors with distinct identities (one identity per Connector) running on the same database, you have to specify a unique `dbName` for each of them.

## `modules`

Every module can be enabled or disabled by passing true / false to `enabled`.

### `httpServer`

The http server is the base for the `coreHttpApi` module. It opens an express http server where modules can register endpoints.

#### Configuration

```json
{
    "enabled": true,
    "cors": {
        "origin": false
    },
    "apiKey": "an-api-key"
}
```

-   `cors`: configure the CORS middleware. Valid options can be found [here](https://github.com/expressjs/cors#configuration-options).
-   `apiKey`: configure the API-Key used to authenticate on the Connector
    > environment variable alias: API_KEY

### `sync`

The `sync` module regularly fetches changes from the Backbone (e.g. new messages / new incoming relationship requests) and notifies other modules like the `httpEndpointEventPublisher` about them.

#### Configuration

```json
{
    "enabled": false,
    "interval": 60
}
```

-   `enabled`: enable / disable the module
    > environment variable alias: SYNC_ENABLED
-   `interval`: the interval in seconds the sync is executed

### `autoAcceptRelationshipCreationChanges`

> It is not recommended to use this module in production.

The `autoAcceptRelationshipCreationChanges` module depends on the `sync` module and listens to the notifications about incoming Relationship Requests. It immediately accepts the Requests, using the configured `responseContent`.

#### Configuration

```json
{
    "enabled": false,
    "responseContent": {}
}
```

-   `responseContent`: the content that is used to accept the incoming Relationship Request

### `coreHttpApi`

This module contains the HTTP API with all Enmeshed base functionalities.

#### Configuration

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

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within Enmeshed, a push mechanism is favorable: the Connector is synchronizing its state with the Backbone and notifies the organization's backend services about changes.

For this, the Connector supports the configuration of a webhook which is called in case there is something new (e.g. a new message has been received).

The `webhooks` module heavily depends on the `sync` module so it has to be enabled to work.

#### Configuration

```json
{
    "enabled": false,
    "url": "https://example.com/enmeshed/webhook",
    "headers": {
        "X-API-KEY": "some-super-safe-api-key"
    },
    "publishInterval": 60
}
```

-   `url`: the URL the request should be sent to
-   `headers`: HTTP headers that should be sent with the request
-   `publishInterval`: the interval in seconds in which new items should be published

#### Payload

The service under the configured `url` will receive the following payload:

```ts
interface WebhooksModulePayload {
    relationships: Relationship[];
    messages: Message[];
}

interface Message {
    id: string;
    content: any;
    createdBy: string;
    createdByDevice: string;
    recipients: Recipient[];
    relationshipIds: string[];
    createdAt: string;
    attachments: string[];
}

interface Recipient {
    address: string;
}

interface Relationship {
    id: string;
    template: RelationshipTemplate;
    status: string;
    peer: string;
    changes: RelationshipChange[];
    lastMessageSentAt?: string;
    lastMessageReceivedAt?: string;
}

interface RelationshipTemplate {
    id: string;
    isOwn: boolean;
    createdBy: string;
    createdByDevice: string;
    createdAt: string;
    content: any;
    expiresAt?: string;
    maxNumberOfRelationships?: number;
}

interface RelationshipChange {
    id: string;
    request: {
        createdBy: string;
        createdByDevice: string;
        createdAt: string;
        content?: any;
    };
    status: "Pending" | "Rejected" | "Revoked" | "Accepted";
    type: "Creation" | "Termination" | "TerminationCancellation";
    response?: {
        createdBy: string;
        createdByDevice: string;
        createdAt: string;
        content?: any;
    };
}
```
