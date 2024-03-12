---
# Start automatic generation
permalink: operate/troubleshooting-guide
redirect_from:
  - /integrate/connector-setup-troubleshooting
published: true
title: "Troubleshooting Guide"
type: scenario
toc: true
properties:
  - id: SC081
  - category: Troubleshooting
  - description:
  - customer:
  - component: operate
  - level:
  - implementation status: DOCS ONLY
  - documentation status: OLD
  - published: true
  - link: troubleshooting-guide
require:
required_by:
# End automatic generation
---

## Troubleshooting Guide

For any issues with the Connector make sure you checked the logs and the `/Monitoring/*` routes. The `/Monitoring/Support` route provides a lot of information about the current state of the Connector and you can for example detect misconfigurations.

{% include rapidoc api_route_regex="/Monitoring/Support$" title="" %}

## Common Errors

### Config file mounting (`EISDIR` | `invalid mode: RO`)

**Symptoms**

One of the following errors are logged during the startup of the Connector:

- `Error parsing your configuration file: [/config.json]: EISDIR: illegal operation on a directory, read`
- `ERROR: for connector Cannot create container for service connector: invalid mode: RO`

**How to fix?**

Given the following filesystem structure:

```text
home/
└── connector/
    ├── config.json
    └── docker-compose.yml
```

If you mount `/home/connector:/config.json:ro`, the created `/config.json` in the container will be a directory. To fix this the mount has to be `/home/connector/config.json:/config.json:ro` or `./config.json:/config.json:ro` (docker compose translates relative links to absolute links).

### Database Authorization Error

**Symptoms**

During the startup of the Connector, the following error is logged:

```text
[ERROR] ConnectorRuntime - Could not connect to the configured database. Try to check the connection string and the database status. Root error:  MongoServerError: Authentication failed.
```

**How to fix?**

This error can show up when you misuse the environment variables `MONGO_INITDB_ROOT_USERNAME` and/or `MONGO_INITDB_ROOT_PASSWORD` of the MongoDB Docker image. Even though their name is self-explanatory, you can easily read over the "INITDB" part in them. This means that the username and password you specify here are only used to **initially** create a database user. When you change them and then restart the container, **the root username is not changed**. If you want to change the root user's name or password, look into the MongoDB documentation.
