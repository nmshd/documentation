---
title: "Connector Configuration"
permalink: /integrate/connector-configuration
---

## Mounting a config file

1. Create a config file in JSON format in a folder of your choice.
2. Fill the config file with your desired configuration (it's sufficient to add values you want to change; the Connector will merge your config file with the default configuration) Example:
    ```json
    {
        "infrastructure": {
            "httpServer": {
                "enabled": true
            }
        }
    }
    ```
3. Mount the created config file into the Docker container (e.g. to `/config.json`). See the official [documentation](https://docs.docker.com/storage/bind-mounts/) for more information on how to mount files into a Docker container. This is also possible using [docker compose](https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes).
4. Set the environment variable `CUSTOM_CONFIG_LOCATION` to the path you mounted your config file to (e.g. `CUSTOM_CONFIG_LOCATION="/config.json"`).

There is also an [example config file](https://raw.githubusercontent.com/nmshd/nmshd.github.io/main/_docs_integrate/examples/example.config.json) available. It sets some default values, please only use the fields you require

# Configuration options

> For Connector version > 2.1.0

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
    "infrastructure": { ... },
    "modules": { ... }
}
```

You can validate the config using our [schema file](https://raw.githubusercontent.com/nmshd/cns-connector/main/config.schema.json). This is possible with [VSCode](https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings) and online tools like [https://www.jsonschemavalidator.net].

## `transportLibrary`

-   **clientId** `required field`

    The client id is required to communicate with the Enmeshed platform.

-   **clientSecret** `required field`

    The client secret is required to communicate with the Enmeshed platform.

## `database`

-   **connectionString** `required field`

    At this point the connection to the database can be configured. The connection string must follow the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/).

-   **dbName** `default: "default"`

    The `dbName` string is used as the name of the MongoDB database. You can use any name you like, but keep in mind that changing it later will NOT rename the database. Instead a new database will be created, together with a new Enmeshed identity. Even though the old database will still exist, the Connector will not be able to access the data until you change the `dbName` back to its original value.

    If you would like to use multiple Connectors with distinct identities (one identity per Connector) running on the same database, you have to specify a unique `dbName` for each of them.

## `infrastructure`

Each infrastructure can be enabled or disabled by passing true / false to `enabled`.

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

-   **enabled** `default: true`

    Enable or disable the http server.

-   **cors** `default: { "origin": false }`

    configure the CORS middleware. Valid options can be found [here](https://github.com/expressjs/cors#configuration-options).

-   **apiKey** `required field`

    Configure the API-Key used to authenticate on the Connector.

## `modules`

Every module can be enabled or disabled by passing true / false to `enabled`.

### `sync`

The `sync` module regularly fetches changes from the Backbone (e.g. new messages / new incoming relationship requests) and notifies other modules like the `httpEndpointEventPublisher` about them.

#### Configuration

```json
{
    "enabled": false,
    "interval": 60
}
```

-   **enabled** `default: false`

    Enable or disable the sync module.

-   **interval** `default: 60`

    The interval in seconds at which the sync module will fetch changes from the Backbone.

### `autoAcceptRelationshipCreationChanges`

> It is not recommended to use this module for production szenarios.

The `autoAcceptRelationshipCreationChanges` module depends on the `sync` module and listens to the notifications about incoming Relationship Requests. It immediately accepts the Requests, using the configured `responseContent`.

#### Configuration

```json
{
    "enabled": false,
    "responseContent": {}
}
```

-   **enabled** `default: false`

    Enable or disable the autoAcceptRelationshipCreationChanges module.

-   **responseContent** `default: {}`

    The content that is used to accept the incoming Relationship Request.

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

-   **enabled** `default: true`

    Enable or disable the coreHttpApi module.

-   **docs:enabled** `default: true`

    Enable / disable the `/docs/json` and `/docs/yaml` routes and the rendered swagger / rapidoc documentations.

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

-   **enabled** `default: false`

    Enable or disable the webhooks module.

-   **url** `required field`

    The URL to which the webhooks will be sent.

-   **headers** `default: {}`

    The headers that will be sent with the webhooks.

-   **publishInterval** `default: 60`

    The interval in seconds at which the webhooks will be sent.

#### Payload

The payload that is sent to the service under the configured `url` has the following format:

```ts
interface WebhooksModulePayload {
    messages: Message[];
    relationships: Relationship[];
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
