---
title: "FerretDB compatibility for the Enmeshed Connector"
date: 2023-04-05T10:00:00+02:00
categories:
  - blog
tags:
  - announcement
  - connector
---

In the last time we've been looking for database alternatives to the Enmeshed Connector's MongoDB database.

## Why?

As an open source project, we want to make sure that the Enmeshed Connector is usable with a truly open source database. As MongoDB is licensed under a non-open source one (SSPL) we evaluated alternatives for customers that are not willing to pay for the database.

## What is FerretDB?

[FerretDB](https://www.ferretdb.io/) acts as a drop-in replacement for MongoDB. It does this by proxying the MongoDB wire protocol and translates it to SQL, with PostgreSQL as the database engine. You can find more information about FerretDBs architecture [here](https://docs.ferretdb.io/understanding-ferretdb/).

## How to use FerretDB with the Enmeshed Connector?

The simplest way to deploy the Connector with a FerretDB instance is the [Connector Helm Chart]({% link _docs_integrate/14-connector-helm-chart.md %}).

We also updated the [Connector Installation Guide]({% link _docs_integrate/10-connector-installation.md %}) with an option to deploy the Connector and FerretDB using Docker Compose.
