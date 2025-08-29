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
         "authentication": {}
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
      "authentication": {
        "apiKey": {
          "keys": {
            "default": {
              "key": "a-valid-API-key"
            }
          }
        }
      }
    }
  }
}
```

- The first value can be configured using the variable `infrastructure:httpServer:enabled="true"`. Note that the value is represented as a string in the environment variable and the Connector will rewrite it to its boolean representation.
- The second value can be configured using the variable `infrastructure:httpServer:port="8080"`. Note that the value is represented as a string in the environment variable and the Connector will rewrite it to its number representation.
- The third value can be configured using the variable `infrastructure:httpServer:authentication:apiKey:keys:default:key="a-valid-API-key"`.

## Configuration options

The Connector provides the following configuration parameters:

```jsonc
{
    "debug": false,
    "enforceCertificatePinning": false,
    "pinnedTLSCertificateSHA256Fingerprints": {},
    "transportLibrary": {
        "baseUrl": "BASE_URL",
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

### debug `available since version 3.3.0` {#debug}

⚠️ Do not turn on debug mode in production environments.
{: .notice--danger}

The debug flag configures if the Connector is set to **production** or **debug** mode. Defaults to `false`. Can also be configured using the environment variable `DEBUG`.

### enforceCertificatePinning `available since version 6.5.0` {#enforceCertificatePinning}

The `enforceCertificatePinning` flag configures whether the Connector should enforce certificate pinning. Defaults to `false`.

If enabled, the Connector will only accept TLS certificates that match the SHA256 fingerprints for endpoints of outgoing requests specified in the [`pinnedTLSCertificateSHA256Fingerprints`](#pinnedTLSCertificateSHA256Fingerprints) object. If a hostname is not configured at all, it cannot be accessed by the Connector anymore.

### pinnedTLSCertificateSHA256Fingerprints `available since version 6.5.0` {#pinnedTLSCertificateSHA256Fingerprints}

The `pinnedTLSCertificateSHA256Fingerprints` object maps hostnames to TLS certificate SHA256 fingerprints of the respective hostname. If a hostname is found, the Connector only accepts a TLS connection if the server responds with a certificate of one of the given fingerprints. The fingerprints must be in a hexadecimal format and are internally stripped of separators and characters not valid for hexadecimal formats. To reduce attack vectors, wildcard domains like "\*.enmeshed.eu" are not valid hostnames, you need to fill this map with every subdomain.

To increase security, please consider setting [`enforceCertificatePinning`](#enforceCertificatePinning) to true.

TLS certificates are rotated multiple times in a year for each hostname. Therefore, setting multiple fingerprints per hostname is possible. However, the config and fingerprints need to be updated regularly with the new fingerprints, otherwise the Connector will reject outgoing requests for expired certificates and cease to function.
{: .notice--warning}

**Getting the SHA256 fingerprint of a certificate:**

```bash
echo -n | openssl s_client -connect <hostname>:443 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > cert.pem
openssl x509 -noout -in cert.pem -fingerprint -sha256
rm cert.pem
```

This will output something similar to:

```text
Connecting to <ip>
...
DONE
sha256 Fingerprint=AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA
```

You can simply copy the fingerprint after `sha256 Fingerprint=` and use it.

If you use another way to acquire the fingerprint, the Connector understands multiple formats like

```text
AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

**Sample Configuration:**

```jsonc
{
  // ...

  "pinnedTLSCertificateSHA256Fingerprints": {
    "example.com": [
      "AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA",
      "BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB:BB"
    ],
    "subdomain.example.com": [
      "AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA:AA",
      "CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC:CC"
    ]
  }
}
```

### transportLibrary

- **baseUrl** `required`

  The base url is used to communicate with the enmeshed platform. It can be changed to use a custom enmeshed Backbone. The base url may not contain a vertical bar `|`.

- **platformClientId** `required`

  The client id is required to communicate with the enmeshed platform. It can be acquired from the [enmeshed Support]({% link _docs_operate/support.md %}).

- **platformClientSecret** `required`

  The client secret is required to communicate with the enmeshed platform. It can be acquired from the [enmeshed Support]({% link _docs_operate/support.md %}).

### database

- **connectionString** `required`

  At this point the connection to the database can be configured. The connection string must follow the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/).

- **dbName** `default: "default"`

  The `dbName` string is used as the name of the MongoDB database. You can use any name you like, but keep in mind that changing it later will NOT rename the database. Instead a new database will be created, together with a new enmeshed Identity. Even though the old database will still exist, the Connector will not be able to access the data until you change the `dbName` back to its original value.

  If you would like to use multiple Connectors with distinct Identities (one Identity per Connector) running on the same database, you have to specify a unique `dbName` for each of them.

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
      "authentication": {
        "apiKey": {
          "keys": {
            "default": {
              "key": "a-valid-API-key"
            }
          }
        }
      }
    }
  }
}
```

- **enabled** `default: true`

  Enable or disable the HTTP server.

- **cors** `default: { "origin": false }`

  configure the CORS middleware. Valid options can be found [here](https://github.com/expressjs/cors#configuration-options).

- **authentication** `required if running in production mode`

  Configure the authentication methods for the HTTP server. At least one authentication method must be configured if the Connector is running in [production mode](#debug). See the [authentication section](#authentication) for more information.

- **helmetOptions** `default: depending on the Connector mode`

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

##### authentication {#authentication}

**Default Configuration:**

```jsonc
{
  // ...

  "authentication": {
    "apiKey": {
      "headerName": "X-API-KEY",
      "keys": {}
    },
    "jwtBearer": {},
    "oidc": {}
  }
}
```

There are currently three authentication methods available for the HTTP server: `apiKey`, `jwtBearer` and `oidc`. At least one authentication method must be configured if the Connector is running in [production mode](#debug).

If multiple authentication methods are configured, the authentication methods will be executed in the following order: `apiKey` > `jwtBearer` > `oidc`. <br><br> For example, this means if you enabled `apiKey` and `jwtBearer` and send a wrong API key in combination with a valid JWT bearer token, the request will be rejected. Only sending a valid JWT bearer token will succeed.
{: .notice--info}

###### apiKey

**Example Configuration:**

```jsonc
{
  // ...
  "apiKey": {
    "keys": {
      "default": {
        "key": "a-valid-API-key"
      }
    }
  }
}
```

The `apiKey` authentication method is used to authenticate requests using an API key in a header.

- **enabled** `default: true (if API keys are configured)`

  Whether the API key authentication is enabled or not. If set to `false`, no API keys will be accepted by the Connector. This can be used to temporarily disable the API key authentication without removing it from the configuration.

- **headerName** `default: "X-API-KEY"`

  The name of the header in which the API key is sent. Defaults to `X-API-KEY`.

- **keys** `required`

  A map of API keys that are allowed to access the Connector. The key of each map entry acts as an id of the API key and the value is an object containing the actual API key and some additional configuration options.
  - **enabled** `default: true`

    Whether the API key is enabled or not. If set to `false`, the API key will not be accepted by the Connector. This can be used to temporarily disable the API key without removing it from the configuration.

  - **key** `required`

    The actual API key that is used to authenticate the request. This key must be kept secret and should not be shared with anyone. A valid API key must be at least 30 characters long and contain at least 2 digits, 2 uppercase letters, 2 lowercase letters and 1 special character out of ``!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~``.

  - **description** `optional`

    A description of the API key. This is optional and can be used to provide additional information about the API key. This is not used by the Connector itself, but can be useful for documentation purposes.

  - **expiresAt** `optional`

    The date and time when the API key expires. This is optional and can be used to automatically disable the API key after a certain period of time. The date must be in ISO 8601 format (e.g. `2063-10-01T00:00:00Z`).

  - **scopes** `optional`

    An optional array of strings that defines roles, specifying the permissions granted to anyone using the API key.
    By default, administrator rights are assigned, represented explicitly by `"**"`, providing unrestricted access.
    Roles can also be limited to specific resources, for example, `"core:messages"` allows access only to the Connector routes related to messages.
    A wildcard `"*"` can be used within a namespace to allow access to all top-level resources in that namespace.
    For instance, `core:*` allows access to `core:messages`, `core:requests`, and any other top-level resources within the `core` namespace.
    However, it does not grant access to deeper sub-resources such as `core:requests:incoming`.
    To allow access to a resource and all of its sub-resources recursively, `"**"` can be utilized.
    For example, `core:**` grants access to `core:requests`, `core:requests:incoming`, and any other deeper sub-resources under the `core` namespace.

    Overall, there are the `core` and `monitoring` top-level namespaces with the following sub-resources:
    - `core:account`, `core:announcements`, `core:attributes`, `core:backboneNotifications`, `core:challenges`, `core:files`, `core:identityMetadata`, `core:messages`, `core:requests`, `core:requests:incoming`, `core:requests:outgoing`, `core:relationshipTemplates`, `core:relationships` and `core:tokens`.
    - `monitoring:requests`, `monitoring:support` and `monitoring:version`.

###### jwtBearer

**Example Configuration:**

```jsonc
{
  // ...
  "jwtBearer": {
    "issuerBaseURL": "https://auth.example.com",
    "audience": "an-audience"
  }
}
```

The `jwtBearer` authentication method is used to authenticate requests using JSON Web Tokens (JWT). To configure this authentication method, you need to provide at least the following parameters:

- **enabled** `default: true (if other options are configured)`

  Whether the JWT bearer authentication is enabled or not. If set to `false`, no JWT bearer tokens will be accepted by the Connector. This can be used to temporarily disable the JWT bearer authentication without removing it from the configuration.

- **issuerBaseURL** `required`

  The base URL of the JWT issuer. This is the URL where the JWT issuer is hosted. This URL must be reachable from the Connector and must not contain a trailing slash `/`.

- **audience** `required`

  The audience of the JWT. This is the identifier of the Connector in your identity server.

- **auth** `optional`

  In the `scope` of the `payload` of the `auth`, roles can be defined.

For more sophisticated use cases, please refer to the [JWT documentation page](https://auth0.github.io/node-oauth2-jwt-bearer/interfaces/AuthOptions.html) where all possibilities are explained in detail.

###### oidc

**Example Configuration:**

```jsonc
{
  // ...
  "oidc": {
    "issuerBaseURL": "https://auth.example.com",
    "baseUrl": "https://connector.example.com",
    "clientID": "a-client-id",
    "secret": "an-encryption-secret"
  }
}
```

The `oidc` authentication method is used to authenticate requests using the OpenID Connect protocol. To configure this authentication method, you need to provide at least the following parameters:

- **enabled** `default: true (if other options are configured)`

  Whether the OpenID Connect authentication is enabled or not. If set to `false`, no OpenID Connect tokens will be accepted by the Connector. This can be used to temporarily disable the OpenID Connect authentication without removing it from the configuration.

- **issuerBaseURL** `required`

  The base URL of the OpenID Connect provider. This is the URL where the OpenID Connect provider is hosted. This URL must be reachable from the Connector and must not contain a trailing slash `/`.

- **baseURL** `required`

  The base URL of the Connector. This is the URL where the Connector is hosted.

- **clientID** `required`

  The client ID of the Connector. This is the ID that the OpenID Connect provider uses to identify the Connector.

- **secret** `required`

  The secret(s) of the Connector used to derive an encryption key for the user identity in a stateless session cookie.

- **rolesPath** `optional`

  With the `rolesPath`, it can be specified where the roles are defined within the OIDC `user` info.

For more sophisticated use cases, please refer to the [OIDC documentation page](https://auth0.github.io/express-openid-connect/interfaces/ConfigParams.html) where all possibilities are explained in detail.

### modules

Every Module can be enabled or disabled by passing true / false to `enabled`. Read more about the Module by clicking on the <i class="fas fa-fw fa-info-circle"/> icon in each title.

#### autoAcceptPendingRelationships <a href="{% link _docs_operate/modules.md %}#autoacceptpendingrelationships"><i class="fas fa-fw fa-info-circle"/></a> {#autoacceptpendingrelationships}

It is not recommended to use this Module for production scenarios.
{: .notice--danger}

**Sample Configuration:**

```jsonc
{
  // ...

  "modules": {
    "autoAcceptPendingRelationships": {
      "enabled": false
    }
  }
}
```

- **enabled** `default: false`

  Enable or disable the autoAcceptPendingRelationships Module.

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

#### messageBrokerPublisher <a href="{% link _docs_operate/modules.md %}#messagebrokerpublisher"><i class="fas fa-fw fa-info-circle"/></a> {#messagebrokerpublisher}

**Sample Configuration:**

```jsonc
{
  // ...

  "modules": {
    "messageBrokerPublisher": {
      "enabled": false,
      "brokers": []
    }
  }
}
```

- **enabled** `default: false`

  Enable or disable the messageBrokerPublisher Module.

- **brokers** `default: []`

  Here you can define multiple brokers to which the Connector should publish messages.

  Each broker consists of a `type` (string) and a `configuration` object. The `type` specifies the type of the broker (e.g. `AMQP` or `PubSub`) and the `configuration` object contains the configuration for the broker.
  - type `AMQP`

    **example**

    ```jsonc
    {
      "type": "AMQP",
      "configuration": {
        "url": "amqp://example.com:5672",
        "exchange": "myExchange"
      }
    }
    ```

    **configuration**
    - url `string, required` -

      the URL of the AMQP broker

      > the URL must be in the [AMQP url format](https://www.rabbitmq.com/docs/uri-spec)

    - exchange `string, default: ""` -

      the name of the AMQP exchange to publish to

    - timeout `number` -

      the timeout in milliseconds for the broker to respond

  - type `MQTT`

    **example**

    ```jsonc
    {
      "type": "MQTT",
      "configuration": {
        "url": "mqtt://example.com:1883"
      }
    }
    ```

    **configuration**
    - url `string, required`

      the URL of the MQTT broker

      > the URL can be on the following protocols: `mqtt`, `mqtts`, `tcp`, `tls`, `ws`, `wss`, `wxs` or `alis`

  - type `PubSub`

    **example**

    ```jsonc
    {
      "type": "PubSub",
      "configuration": {
        "projectId": "myProjectId",
        "topicName": "myTopicName",
        "keyFile": "/path/to/keyfile.json"
      }
    }
    ```

    **configuration**
    - projectId `string, required`

      the project id of the Google Cloud project

    - topicName `string, required`

      the name of the PubSub topic to publish to

    - keyFile `string, required`

      the (absolute) path of the key file to authenticate with the Google Cloud project

  - type `Redis`

    **example**

    ```jsonc
    {
      "type": "Redis",
      "configuration": {
        "url": "redis://example.com:6379"
      }
    }
    ```

    **configuration**
    - url `string, required`

      the URL of the broker

      > the URL must be in the Redis url format: `redis[s]://[[username:]password@]host[:port][/database]`

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

  If the webhook target is protected by authentication, you can configure the webhook module to authenticate itself. Currently, the available `authentication` types are: `OAuth2` and `ApiKey`.

  **OAuth2**

  The OAuth2 authentication type is used to authenticate the request to the webhook using the client credentials flow of OAuth2. The Connector will send a bearer token as part of the request in its Authentication header. The OAuth2 authentication is configured using the following parameters:
  - **type** `"OAuth2", required`

    The type of the authentication.

  - **accessTokenUrl** `string, required`

    The URL to get the access token from. This URL must be reachable from the Connector.

  - **clientId** `string, required`

    The [client id](https://www.rfc-editor.org/rfc/rfc6749#section-3.2.1) used to authenticate to the access token server.

  - **clientSecret** `string, required`

    The [client secret](https://www.rfc-editor.org/rfc/rfc6749#section-3.2.1) used to authenticate to the access token server.

  - **scope** `string, optional`

    The [scope](https://www.rfc-editor.org/rfc/rfc6749#section-3.3) of the access request. This is optional and can be omitted if not needed.

  **ApiKey**

  The ApiKey authentication type is used to authenticate the request to the webhook using an API key. The Connector will send the API key as part of the request using a header. The ApiKey authentication is configured using the following parameters:
  - **type** `"ApiKey", required`

    The type of the authentication.

  - **headerName** `string, default: "x-api-key"`

    The name of the header to send the API key in. If not set, the default value `x-api-key` will be used.

  - **apiKey** `string, required`

    The API key to use for authentication.

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
    },

    // a target with an OAuth2 authentication type
    "target4": {
      "url": "https://example.com/enmeshed/webhook",
      "authentication": {
        "type": "OAuth2",
        "accessTokenUrl": "https://example.com/oauth2/token",
        "clientId": "myClientId",
        "clientSecret": "myClientSecret",
        "scope": "myScope"
      }
    },

    // a target with an ApiKey authentication type
    "target5": {
      "url": "https://example.com/enmeshed/webhook",
      "authentication": {
        "type": "ApiKey",
        "headerName": "a-header-name",
        "apiKey": "my-api-key"
      }
    }
  }
  ```

- **skipTlsCheck** `default: false`

  Skip the TLS certificate check for https request to all targets.

  This is a security risk and should only be used if you know what you are doing.
  {: .notice--danger}

- **webhooks** `default: []`

  The webhooks that will be called. A webhook consists of one or more [Connector Events]({% link _docs_integrate/connector-events.md %}) on which the webhook should be triggered, as well as a target to which the request should be sent. The target either is an inline definition of target as described above, or a name of a target defined in the `targets` object.

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

#### sse (Server-Sent Events) <a href="{% link _docs_operate/modules.md %}#sse"><i class="fas fa-fw fa-info-circle"/></a> {#sse}

This Module requires additional configuration on the Backbone.
Ensure that your Backbone has the required settings enabled.
{: .notice--warning}

**Sample Configuration:**

```jsonc
{
  // ...

  "modules": {
    "sse": {
      "enabled": false
    }
  }
}
```

- **enabled** `default: false`

  Enable or disable the sse Module.

## Troubleshooting

If you encounter any problems while configuring the Connector, head over to the [Troubleshooting]({% link _docs_operate/troubleshooting-guide.md %}) site.
