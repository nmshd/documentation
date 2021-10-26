---
title: "Connector API"
permalink: /integrate/connector-api
---

The primary integration capability of the Connector is the REST API. In order to use it, you should have received an API-Key for the respective Connector. An API-Key so far has all authorizations for accessing the API.

# Interactive Documentation

You can find the REST API documentation hosted on your Connector on the following HTTP endpoints. Swagger and Rapidoc are interactive websites hosted on the Connector with which you can try out the various APIs interactively.

- /docs/swagger : The Swagger UI of the Connector's OpenAPI specification
- /docs/rapidoc : The Rapidoc UI of the Connector's OpenAPI specification

**Note:** You have to authorize yourself first before using the Swagger or Rapidoc interactive documentations. For this, please use the API Key of the Connector and follow the authorization steps on the user interface. For Swagger this is on the top right (Authorize button with a lock symbol), for Rapidoc this is usually the third heading called "Authentication" and can also be found on the left navigation.
{: .notice--warning}

## Open API Documentation

To fetch the Open API documentation of the Connector's REST API, visit the following URIs:

- /docs/yaml : The Connector's OpenAPI specification in YAML format
- /docs/json : The Connector's OpenAPI specification in JSON format

You can view these files with the [Swagger Editor](https://editor.swagger.io/) or automatically create test routes within your favorite API Clients (e.g. Postman or Insomnia).

# API Authentication

X-API-Key header
