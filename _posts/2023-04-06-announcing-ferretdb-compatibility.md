---
title: "FerretDB compatibility for the enmeshed Connector"
date: 2023-04-06
categories:
  - blog
tags:
  - announcement
  - connector
---

At enmeshed, we believe in the importance of open-source software and the freedom it gives developers.

MongoDB is licensed under the Server Side Public License (SSPL) and from the start of our project we knew that we needed to find an alternative database solution for the enmeshed Connector. After researching and testing several options, we found [FerretDB](https://www.ferretdb.io/) to be a suitable truly open source replacement for MongoDB.

## What is FerretDB?

[FerretDB](https://www.ferretdb.io/) acts as a drop-in replacement for MongoDB. It does this by proxying the MongoDB wire protocol and translating it to SQL, using PostgreSQL as the database engine.

More information about FerretDBs architecture can be found [in their docs](https://docs.ferretdb.io/understanding-ferretdb/).

This means that the enmeshed Connector can now also be used with the PostgreSQL database, [as requested some time ago](https://github.com/nmshd/feedback/issues/13).

## How did we make sure that FerretDB is compatible with the enmeshed Connector?

Our team has worked hard to integrate FerretDB into our product. We tested extensively, made the necessary adjustments and provided feedback to the FerretDB team to ensure compatibility. As a result all libraries that were previously tested against MongoDB are now also tested against FerretDB during development and for each release in our CI/CD pipeline.

## How to use FerretDB with the enmeshed Connector?

The simplest way to deploy the Connector with a FerretDB instance is the [Connector Helm Chart]({% link _docs_operate/setup-with-helm-charts.md %}). We updated the Chart to include FerretDB as an optional sidecar container, which can be enabled by setting `pod.ferretdb.enabled` to `true`.

We also updated the [Connector Installation Guide]({% link _docs_operate/setup-with-docker-compose.md %}) with an option to deploy the Connector and FerretDB using Docker Compose.

## Conclusion

At enmeshed, we are proud to have found a suitable open-source replacement for MongoDB and we are confident that it will meet our needs and provide a reliable solution for our users.

Thanks to FerretDB we are now able to offer the enmeshed Connector with PostgreSQL, so developers can continue to use open-source software and enjoy the freedom it gives.
