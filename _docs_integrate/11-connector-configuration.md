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
                "enabled": true,
                "apiKey": "an-api-key"
            }
        }
    }
    ```

3. Mount the created config file into the Docker container (e.g. to `/config.json`). See the official [documentation](https://docs.docker.com/storage/bind-mounts/) for more information on how to mount files into a Docker container. This is also possible using [docker compose](https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes).
4. Set the environment variable `CUSTOM_CONFIG_LOCATION` to the path you mounted your config file to (e.g. `CUSTOM_CONFIG_LOCATION="/config.json"`).

There is also an [example config file](https://raw.githubusercontent.com/nmshd/nmshd.github.io/main/_docs_integrate/examples/example.config.json) available. It sets some default values, please only use the fields you require

## Environment variables

The configuration can also be done using environment variables. This feature is included in the Connector since version `2.2.1`.

### Parsing rules

1.  Nested fields can be represented using a colon (`:`) as a separator.

    The `:` separator doesn't work with environment variable hierarchical keys on all platforms. The double underscore (`__`) is supported on all platforms (e.g. bash does not support the `:` separator but it supports `__` ). The Connector will therefore convert `__` to `:` so you can use it on that systems.
    {: .notice--warning}

2.  The parameter casing must be the same as the config file casing.
3.  The strings "true" and "false" are converted to the respective boolean values.
4.  Number strings (`"1"` / `"1.1"`) will be converted to the respective number types.
5.  Complex structures (arrays, objects) are not supported. (=> `modules:aModule:aKey='{"a": "x", "b": "y"}'` or `modules:aModule:aKey='["a", "b"]'` is not valid)

### Example

You want to configure the following values:

```json
{
    "infrastructure": {
        "httpServer": {
            "enabled": true,
            "port": 8080,
            "apiKey": "an-api-key"
        }
    }
}
```

-   The first value can be configured using the variable `infrastructure:httpServer:enabled="true"`. Note that the value is represented as a string in the environment variable and the Connector will rewrite it to its boolean representation.
-   The second value can be configured using the variable `infrastructure:httpServer:port="8080"`. Note that the value is represented as a string in the environment variable and the Connector will rewrite it to its number representation.
-   The third value can be configured using the variable `infrastructure:httpServer:apiKey="an-api-key"`.

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
    "infrastructure": { ... },
    "modules": { ... }
}
```

You can validate the config using our [schema file](https://raw.githubusercontent.com/nmshd/cns-connector/main/config.schema.json). This is possible with [VSCode](https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings) and online tools like [jsonschemavalidator.net](https://www.jsonschemavalidator.net).

## `transportLibrary`

-   **platformClientId** `required`

    The client id is required to communicate with the Enmeshed platform. It can be acquired from the [Enmeshed Support](/integrate/basics#support).

-   **platformClientSecret** `required`

    The client secret is required to communicate with the Enmeshed platform. It can be acquired from the [Enmeshed Support](/integrate/basics#support).

## `database`

-   **connectionString** `required`

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

-   **apiKey** `required`

    Define the API-Key the Connector should use to authenticate requests.

    The API-Key can be chosen arbitrarily and has to be sent with every request in the `X-API-KEY` HTTP-Header.

    There are no limitations regarding the allowed characters. We recommend using an API-Key that is at least 20 characters long.

    The API-Key protects your Connector from unauthorized access and should therefore be kept secret.

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

It is not recommended to use this module for production szenarios.
{: .notice--danger}

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
        "enabled": true,
        "rapidoc": {
            "persistAuth": false
        }
    }
}
```

-   **enabled** `default: true`

    Enable or disable the coreHttpApi module.

-   **docs:enabled** `default: true`

    It is not recommended to enable the docs in production szenarios.
    {: .notice--danger}

    Enable / disable the `/docs/json` and `/docs/yaml` routes and the rendered swagger / rapidoc documentations.

-   **docs:rapidoc:persistAuth** `default: false`

    It is not recommended to enable the authentication persistence in production szenarios.
    {: .notice--danger}

    If set to `true` rapidoc persists the API Key in the local storage of the browser.

### `webhooks`

This module is deprecated in favor of the [webhooksV2](#webhooksv2) module.
{: .notice--warning}

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within Enmeshed, a push mechanism is favorable: the Connector is synchronizing its state with the Backbone and notifies the organization's backend services about changes.

For this, the Connector supports the configuration of a webhook which is called in case there is something new (e.g. a new message has been received).

Keep in mind that you need to synchronize the state of the Connector with the Backbone in order to receive webhooks. The `sync` module automates this, but you can also do this manually by calling the `/api/v1/Account/Sync` route.

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

-   **url** `required`

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

The payload of the webhook is the same as the response payload of the `/api/v1/Account/Sync` endpoint. Thus the type `ConnectorSyncResult` of the [TypeScript SDK](./connector-sdks#typescript-sdk) can be used for specifing the webhook's payload type.

### `webhooksV2`

With the REST API, pull mechanisms are supported. However, as there are many bidirectional scenarios within Enmeshed, a push mechanism is favorable: the Connector is synchronizing its state with the Backbone and notifies the organization's backend services about changes.

For this, the Connector supports the configuration of webhooks which are called every time a specific [Connector Event]({% link _docs_integrate/32-connector-events.md %}) is triggered (e.g. a new message has been received => `transport.messageReceived`).

Keep in mind that you need to synchronize the state of the Connector with the Backbone in order to receive events. The `sync` module automates this, but you can also do this manually by calling the `/api/v1/Account/Sync` route.

#### Configuration

```json
{
    "enabled": false,
    "targets": {},
    "webhooks": {}
}
```

-   **enabled** `default: false`

    Enable or disable the webhooks module.

-   **targets** `default: {}`

    Here you can predefine targets so you can reuse them for multiple webhooks.

    A target consists of a URL as well as optional arbitrary headers, which the Connector should send as part of the request. Optionally, your URL can contain the placeholder {% raw %}`{{trigger}}`{% endraw %}, which at runtime will be replaced with the event name that triggered the webhook (e.g. transport.messageReceived). This way, you can reuse the same target for multiple webhooks and still have different URLs for different events. See the code below for an example.

    <br>

    **Example**

    ```jsonc
    {
        // a target with headers
        "target1": {
            "url": "https://example.com/enmeshed/webhook2",

            // the following headers will be sent as part of the webhook
            "headers": {
                "a-header": "a-value",
                "another-header": "another-value"
            }
        },

        // a target without headers
        "target2": {
            "url": "https://example.com/enmeshed/webhook"
        },

        // a target with the {% raw %}{{trigger}}{% endraw %} placeholder as part of the URL
        "target3": {
            "url": "https://example.com/enmeshed/webhook/{{trigger}}"
        }
    }
    ```

-   **webhooks** `default: []`

    The webhooks that will be called. A webhook consists of one or more [Connector Events]({% link _docs_integrate/32-connector-events.md %}) on which the webhook should be triggered, as well as a target to which the request should be sent. The target either is an inline definition of target as described above, or a name of a target defined in the `targets` object.

    <br>

    **Example**

    ```jsonc
    [
        {
            "triggers": ["transport.messageReceived"],

            // inline declaration of a target
            "target": {
                // see the targets section for a description of how to configure a target
            }
        },
        {
            "triggers": ["transport.messageReceived"],

            // a reference to a target defined in the 'targets' object
            "target": "target1"
        }
    ]
    ```

#### Payload

```jsonc
{
    // the event name (e.g. transport.messageReceived) that triggered the webhook
    "trigger": "transport.messageReceived",

    // the data of the event
    "data": {}
}
```

You can find type definitions of the event data in the [Connector Events]({% link _docs_integrate/32-connector-events.md %}) section.
