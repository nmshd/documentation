---
title: "Enmeshed Connector"
permalink: /explore/connector
toc: true
---

You can find many Connector-specific information in the [integrate]({% link _pages/integrate.md %}) part of these docs.

# Connector Building Blocks

## Connector Docker Image

The Connector is usually deployed with a Docker image. The Docker images can be fetched from [the GitHub container registry](https://github.com/nmshd/cns-connector/pkgs/container/connector) using your Docker client.

**Note:** You have to be logged in using a GitHub account to list available tags.
{: .notice--warning}

The Docker images are created, maintained and published by j&s-soft GmbH.

## Connector Runtime

Just like the [App Runtime]({% link _docs_explore/50-app.md %}) extends the [Enmeshed Runtime]({% link _docs_explore/60-runtime.md %}) for user interfaces, the Connector Runtime is extending the [Enmeshed Runtime]({% link _docs_explore/60-runtime.md %}) for the use within services and programs. For example, it maps REST-API-calls to Enmeshed business-logic.

## Connector Modules

The Connector is built modular and provides some built-in modules. A list of the available modules and how to configure them can be found in [the module section of the Connector configuration guide]({% link _docs_integrate/11-connector-configuration.md %}#modules).

## Connector Database

The Connector is using a MongoDB database to store its data. You can read more about its configuration in the [database section of the Connector configuration guide]({% link _docs_integrate/11-connector-configuration.md %}#database).

## Connector SDK

Read more about the [Connector SDKs]({% link _docs_integrate/30-connector-sdks.md %}).
