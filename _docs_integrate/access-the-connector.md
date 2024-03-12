---
# Start automatic generation
permalink: integrate/access-the-connector
redirect_from:
  - /integrate/connector-api
published: true
title: "Access the Connector"
type: scenario
toc: true
properties:
  - id: SC075
  - category: Getting Started
  - description: https://enmeshed.eu/integrate/connector-api
  - customer:
  - component: integrate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: OLD
  - published: true
  - link: access-the-connector
require:
required_by:
# End automatic generation
---

The primary integration capability of the Connector is the REST API. In order to use it, you should have received an API-Key for the respective Connector. An API-Key so far has all authorizations for accessing the API.

# Hosted API tooling by the (development) Connector

In order to use the hosted api tooling, it must be activated in the [Connector configuration]({% link _docs_operate/setup-with-docker-compose.md %}#hosted-api-tooling-by-the-development-connector).
{: .notice--warning}

You can access the REST API documentation through the Connector's designated HTTP endpoints. Swagger and Rapidoc serve as interactive platforms hosted on the Connector, enabling you to explore and experiment with the various APIs interactively.

## Swagger

- /docs/swagger : The Swagger UI of the Connector's OpenAPI specification

**Note:** For Swagger the authorization is on the top right (Authorize button with a lock symbol).
{: .notice--info}

## Rapidoc

- /docs/rapidoc : The Rapidoc UI of the Connector's OpenAPI specification

**Note:** For Rapidoc the authorization is usually the third heading called "Authentication" and can also be found on the left navigation.
{: .notice--info}

## Accessing the Connector with external API tools (e.g. Postman or Insomnia)

To fetch the Open API documentation of the Connector's REST API, visit the following URIs:

- /docs/yaml : The Connector's OpenAPI specification in YAML format
- /docs/json : The Connector's OpenAPI specification in JSON format

You can view these files with the [Swagger Editor](https://editor.swagger.io/) or automatically import them within your favorite API Clients (e.g. Postman or Insomnia).

# Accessing the Connector by Software Development Kits (SDK)

To achieve a better developer experience and type safety, preferably a Software Development Kit (SDK) should be used. The following SDKs are available for this purpose:

We work on keeping this list as updated as possible. Please let us know, if some SDKs are outdated or new SDKs are available for the community.
{: .notice--info}

## TypeScript SDK

We offer an SDK developed in TypeScript that facilitates communication with your Connector from your TypeScript or JavaScript application. You can find it readily available on [npmjs](https://www.npmjs.com/package/@nmshd/connector-sdk).
