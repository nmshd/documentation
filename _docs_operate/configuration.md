---
# Start automatic generation
permalink: operate/configuration
redirect_from:
  - /integrate/connector-configuration
published: true
title: "Configuration"
type: scenario
toc: true
properties:
  - id: SC079
  - category: Connector Setup
  - description:
  - customer:
  - component: operate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: OLD
  - published: true
  - link: configuration
require:
required_by:
# End automatic generation
---

## Mounting a config file

1. Create a config file in JSON format in a folder of your choice.
2. Fill the config file with your desired configuration (it's sufficient to add values you want to change; the Connector will merge your config file with the default configuration) Example:

   ```jsonc
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

There is also an [example config file](https://raw.githubusercontent.com/nmshd/documentation/main/_docs_integrate/examples/example.config.json) available. It sets some default values, please only use the fields you require

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

```jsonc
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

- The first value can be configured using the variable `infrastructure:httpServer:enabled="true"`. Note that the value is represented as a string in the environment variable and the Connector will rewrite it to its boolean representation.
- The second value can be configured using the variable `infrastructure:httpServer:port="8080"`. Note that the value is represented as a string in the environment variable and the Connector will rewrite it to its number representation.
- The third value can be configured using the variable `infrastructure:httpServer:apiKey="an-api-key"`.

## Configuration options

The Connector provides the following configuration parameters:

```jsonc
{
    "debug": false,
    "transportLibrary": {
        "baseUrl": "https://prod.enmeshed.eu",
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

You can validate the config using our [schema file](https://raw.githubusercontent.com/nmshd/cns-connector/main/config.schema.json). This is possible for example with [VSCode](https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings) or online tools like [jsonschemavalidator.net](https://www.jsonschemavalidator.net).

### debug `availbable since version 3.3.0` {#debug}

⚠️ Do not turn on debug mode in production environments.
{: .notice--danger}

The debug flag configures if the Connector is set to **production** or **debug** mode. Defaults to `false`. Can also be configured using the environment variable `DEBUG`.

### transportLibrary

- **baseUrl** `default: "https://prod.enmeshed.eu"`

  The base url is used to communicate with the enmeshed platform. It can be changed to use a custom enmeshed Backbone.

- **platformClientId** `required`

  The client id is required to communicate with the enmeshed platform. It can be acquired from the [enmeshed Support]({% link _docs_operate/support.md %}).

- **platformClientSecret** `required`

  The client secret is required to communicate with the enmeshed platform. It can be acquired from the [enmeshed Support]({% link _docs_operate/support.md %}).

### database

- **connectionString** `required`

  At this point the connection to the database can be configured. The connection string must follow the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/).

- **dbName** `default: "default"`

  The `dbName` string is used as the name of the MongoDB database, prefixed with `acc-`. You can use any name you like, but keep in mind that changing it later will NOT rename the database. Instead a new database will be created, together with a new enmeshed identity. Even though the old database will still exist, the Connector will not be able to access the data until you change the `dbName` back to its original value.

  If you would like to use multiple Connectors with distinct identities (one identity per Connector) running on the same database, you have to specify a unique `dbName` for each of them.

  **Note:** If you are using the Connector in combintation with a FerretDB, you have to pay attention to the database name restrictions specified in the [FerretDB documentation](https://docs.ferretdb.io/diff/).
  {: .notice--warning}

### infrastructure

Each infrastructure can be enabled or disabled by passing true / false to `enabled`.

#### httpServer

The HTTP server is the base for the `coreHttpApi` Module. It opens an express HTTP server where Modules can register endpoints.

**Sample Configuration:**

```jsonc
{
  // ...

  "infrastructure": {
    "httpServer": {
      "enabled": true,
      "cors": {
        "origin": false
      },
      "apiKey": "an-api-key"
    }
  }
}
```

- **enabled** `default: true`

  Enable or disable the HTTP server.

- **cors** `default: { "origin": false }`

  configure the CORS middleware. Valid options can be found [here](https://github.com/expressjs/cors#configuration-options).

- **apiKey** `required`

  Define the API-Key the Connector should use to authenticate requests.

  The API-Key can be chosen arbitrarily and has to be sent with every request in the `X-API-KEY` HTTP-Header.

  There are no limitations regarding the allowed characters. We recommend using an API-Key that is at least 20 characters long.

  The API-Key protects your Connector from unauthorized access and should therefore be kept secret.

- **helmetOptions** `default: depending on the connector mode`

  Configure the [helmet](https://helmetjs.github.io/) middleware.

  Defaults to `{}` in `production` mode. In `debug` mode the following options are used:

  ```json
  {
    "contentSecurityPolicy": {
      "directives": {
        "defaultSrc": [],
        "scriptSrc": ["'self'"],
        "styleSrc": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        "imgSrc": ["'self'", "https://enmeshed.eu", "data:"],
        "connectSrc": ["'self'"],
        "upgradeInsecureRequests": null
      }
    }
  }
  ```

### modules

Every Module can be enabled or disabled by passing true / false to `enabled`. Read more about the Module by clicking on the <i class="fas fa-fw fa-info-circle"/> icon in each title.

#### amqpPublisher <a href="{% link _docs_operate/modules.md %}#amqppublisher"><i class="fas fa-fw fa-info-circle"/></a> {#amqppublisher}

**Sample Configuration:**

```jsonc
{
  // ...

  "modules": {
    "amqpPublisher": {
      "enabled": false,
      "url": "amqp://example.com:5672",
      "exchange": "myExchange"
    }
  }
}
```

- **enabled** `default: false`

  Enable or disable the AMQP Publisher Module.

- **url** `required`

  The URL of the AMQP server.

- **exchange** `default: ""`

  The name of the AMQP exchange to publish to.

#### autoAcceptRelationshipCreationChanges <a href="{% link _docs_operate/modules.md %}#autoacceptrelationshipcreationchanges"><i class="fas fa-fw fa-info-circle"/></a> {#autoacceptrelationshipcreationchanges}

It is not recommended to use this Module for production scenarios.
{: .notice--danger}

**Sample Configuration:**

```jsonc
{
  // ...

  "modules": {
    "autoAcceptRelationshipCreationChanges": {
      "enabled": false,
      "responseContent": {}
    }
  }
}
```

- **enabled** `default: false`

  Enable or disable the autoAcceptRelationshipCreationChanges Module.

- **responseContent** `default: {}`

  The content that is used to accept the incoming Relationship Request.

#### coreHttpApi <a href="{% link _docs_operate/modules.md %}#corehttpapi"><i class="fas fa-fw fa-info-circle"/></a> {#corehttpapi}

**Sample Configuration:**

```jsonc
{
  // ...

  "modules": {
    "coreHttpApi": {
      "enabled": true,
      "docs": {
        "enabled": false,
        "rapidoc": {
          "persistAuth": false
        }
      }
    }
  }
}
```

- **enabled** `default: true`

  Enable or disable the coreHttpApi Module.

- **docs:enabled** `default: false`

  It is not possible to enable the docs in [production mode](#debug).
  {: .notice--info}

  Enable / disable the `/docs/json` and `/docs/yaml` routes and the rendered swagger / rapidoc documentations.

- **docs:rapidoc:persistAuth** `default: false`

  Authentication persistence can be a security risk. Use it with caution.
  {: .notice--danger}

  If set to `true` rapidoc persists the API Key in the local storage of the browser.

#### sync <a href="{% link _docs_operate/modules.md %}#sync"><i class="fas fa-fw fa-info-circle"/></a> {#sync}

**Sample Configuration:**

```jsonc
{
  // ...

  "modules": {
    "sync": {
      "enabled": false,
      "interval": 60
    }
  }
}
```

- **enabled** `default: false`

  Enable or disable the sync Module.

- **interval** `default: 60`

  The interval in seconds at which the sync Module will fetch changes from the Backbone.

#### PubSubPublisher <a href="{% link _docs_operate/modules.md %}#pubsubpublisher"><i class="fas fa-fw fa-info-circle"/></a> {#pubsubpublisher}

**Sample Configuration:**

```jsonc
{
  // ...

  "modules": {
    "PubSubPublisher": {
      "enabled": false,
      "projectId": "",
      "topic": "",
      "keyFile": ""
    }
  }
}
```

- **enabled** `default: false`

  Enable or disable the PubSub Publisher Module.

- **projectId** `required`

  The project id of the Google Cloud project.

- **topic** `required`

  The name of the PubSub topic to publish to.

- **keyFile** `required`

  The location of the key file to authenticate with the Google Cloud project.

#### webhooks <a href="{% link _docs_operate/modules.md %}#webhooks"><i class="fas fa-fw fa-info-circle"/></a> {#webhooks}

**Sample Configuration:**

```jsonc
{
  // ...

  "modules": {
    "webhooks": {
      "enabled": false,
      "targets": {},
      "webhooks": []
    }
  }
}
```

- **enabled** `default: false`

  Enable or disable the webhooks Module.

- **targets** `default: {}`

  Here you can predefine targets so you can reuse them for multiple webhooks.

  A target consists of a URL as well as optional arbitrary headers, which the Connector should send as part of the request. Optionally, your URL can contain the placeholder {% raw %}`{{trigger}}`{% endraw %}, which at runtime will be replaced with the event name that triggered the webhook (e.g. transport.messageReceived). This way, you can reuse the same target for multiple webhooks and still have different URLs for different events. See the code below for an example.

  The server under the URL must respond to the request with a status code between 200 and 299. Otherwise the Connector will log a warning.

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
      "url": "https://example.com/enmeshed/webhook/{% raw %}{{trigger}}{% endraw %}"
    }
  }
  ```

- **webhooks** `default: []`

  The webhooks that will be called. A webhook consists of one or more [Connector Events]({% link _docs_integrate/connector-events.md %}) on which the webhook should be triggered, as well as a target to which the request should be sent. The target either is an inline definition of target as described above, or a name of a target defined in the `targets` object.

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

##### Payload

```jsonc
{
  // the event name (e.g. transport.messageReceived) that triggered the webhook
  "trigger": "transport.messageReceived",

  // the data of the event
  "data": {}
}
```

You can find type definitions of the event data in the [Connector Events]({% link _docs_integrate/connector-events.md %}) section.

## Troubleshooting

If you encounter any problems while configuring the Connector, head over to the [Troubleshooting]({% link _docs_operate/troubleshooting-guide.md %}) site.
