The primary integration capability of the Connector is the REST API. In order to use it, you should have received an API-Key for the respective Connector. An API-Key so far has all authorizations for accessing the API.

# API platform

to use the api platform hosted on the connector you need to make the following config changes:

1. the http server must be enabled in the configuration of the connector.

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

2. furthermore the API must be activated

   ```jsonc
   {
     "modules": {
       "coreHttpApi": {
         "docs": {
           "enabled": true
         }
       }
     }
   }
   ```

3. the API must not be used in production systems, therefore the tag "debug" must be activated

   ```jsonc
   {
     "debug": true
   }
   ```

You can access the REST API documentation through the Connector's designated HTTP endpoints. Swagger and Rapidoc serve as interactive platforms hosted on the Connector, enabling you to explore and experiment with the various APIs interactively.

## Swagger

- /docs/swagger : The Swagger UI of the Connector's OpenAPI specification

**Note:** For Swagger the authorization is on the top right (Authorize button with a lock symbol).
{: .notice--warning}

## Rapidoc

- /docs/rapidoc : The Rapidoc UI of the Connector's OpenAPI specification

**Note:** For Rapidoc the authorization is usually the third heading called "Authentication" and can also be found on the left navigation.
{: .notice--warning}

## extern API platform (e.g. Postman or Insomnia)

To fetch the Open API documentation of the Connector's REST API, visit the following URIs:

- /docs/yaml : The Connector's OpenAPI specification in YAML format
- /docs/json : The Connector's OpenAPI specification in JSON format

You can view these files with the [Swagger Editor](https://editor.swagger.io/) or automatically import them within your favorite API Clients (e.g. Postman or Insomnia).

# SDK

Preferably, an SDK should be used for integration of the connector into an application. The following SDKs are available for this purpose:

## TypeScript SDK

We also offer an SDK developed in TypeScript that facilitates communication with your Connector from your TypeScript or JavaScript application. You can find it readily available on [npmjs](https://www.npmjs.com/package/@nmshd/connector-sdk).
