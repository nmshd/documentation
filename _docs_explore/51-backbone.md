---
title: "Enmeshed Backbone"
permalink: /explore/backbone
toc: true
---

# Backbone Building Blocks

The enmeshed Backbone embraces all central services required by the enmeshed platform to work. It consists of the underlying infrastructure, its hosted services, and the libraries used within the services. There could be many enmeshed Backbones hosted along the same number of enmeshed Apps. But keep in mind that so far it is not possible for users to communicate across different Backbones.

One enmeshed Backbone is currently hosted and maintained by j&amp;s-soft GmbH.

## Backbone Components (Runtime)

The Backbone consists of two main components:

- Admin API
- Consumer API

These components are deployed on a Kubernetes cluster within the Backbone Infrastructure. They implement the enmeshed business logic on top of the infrastructure services provided by the Backbone Infrastructure.

### Admin UI

The Admin API is used for managing the Backbone, e.g. for creating new OAuth clients or configuring quotas. It is only used by the operator of the Backbone, and therefore isn't publicly accessible. Instead, you need access to the Kubernetes cluster the Admin UI is running in. Further, an API key is required to access the Admin UI. This API key is configured as a Kubernetes secret.

### Consumer API

The Consumer API is what's used by the enmeshed identities to interact with each other, like sending messages or managing relationships. It is publicly accessible via the gateway. You need an OAuth client to access the Consumer API. This OAuth client is created in the Admin UI.

## Backbone Landscapes (Runtime)

Usually there are three Backbone Landscapes hosted in parallel: dev, stage and prod.

- Dev Landscape: Is used for Backbone development purposes only and shouldn't be used for enmeshed clients
- Stage Landscape: Is used for enmeshed tests on the current Backbone version or might be used for tests on a future Backbone version
- Prod Landscape: All productive environments should access the prod landscape only. Only the prod landscape has a productive configuration like scalability, replication or operations in place.

It is possible to bring up additional landscapes on a temporary basis. These could be used for security or performance tests.

A landscape can be trimmed by different scalability options, depending on the workload – and the actual usage of components.

## Backbone Infrastructure (Runtime)

All required infrastructure, like a database, a gateway or a file storage are combined within the infrastructure building block. The infrastructure itself is not enmeshed-specific, the composition of services and the overall configuration however is.

There are different possible cloud providers to host the backbone, the big hyperscalers or smaller ones. Even regional cloud providers would make sense for specific use-cases.

The current cloud provider for the centrally hosted enmeshed Backbone is Microsoft Azure and as thus, the landscape details (and terminology) are primarily focused on the Azure setup. Although there are Azure-specific components and configurations, most of the components used are cloud-provider agnostic, i.e. they will exist in other cloud providers in an equivalent form.

### Gateway

The gateway is the very first touchpoint of an external request to the landscape. Its major tasks are load balancing and proxying, breaking up https-traffic and block malicious requests.

Thus, the gateway is the first component which needs to be scaled depending on the workload. This is usually done by increasing the number of instances.

### Virtual Network

A virtual network is an internal network for custom routing and network separation rules. Some components, like the gateway, require virtual networks to be set up, as the components itself are routing traffic from one network (e.g. public Internet) to another network (internal network).

With a virtual network, network traffic is encapsulated for every landscape. Servers and services within the virtual network are not reachable from the outside world and are not allowed to talk to external systems. However, the virtual network is not an encrypted network within the cloud provider, as this is technically so far not possible.

### Service Bus

The service bus is an event bus between all the different services which can be leveraged for cross-service communication and message handling.

### Push Notifications

To send push notifications to the iOS and Android apps, the Backbone uses [Apple Push Notification Service (APNs)](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns) and [Firebase Cloud Messaging (FCM)](https://firebase.google.com/docs/cloud-messaging/). The push notification tokens, which are used as kind of an address for the push notifications, are stored in the Backbone database.

### Database

A database is used for columnar data storage and access. It is used to store metadata of the different Backbone entities.

Nearly every request to a landscape results in a request to the database. Thus, the database also needs to be scaled depending on the number of requests and the complexity of database queries. The database can be scaled vertically (more power) and horizontally (more servers).

Currently, the Backbone supports Microsoft SQL Server and PostgreSQL as database systems.

### BLOB Storage

A BlOB (binary large object) storage is used to store files uploaded by the user.

A BLOB storage is usually scaled horizontally (more storage). Access performance is not critical for the given use-cases.

### Kubernetes Cluster/Nodes

Admin UI and Consumer API are running in a Kubernetes cluster. The nodes of this cluster can be scaled vertically (more power) and horizontally (more nodes). Depending on the number or complexity of the requests, the nodes are automatically scaled.
The Kubernetes cluster is further used to store secrets in the form of Kubernetes secrets. Examples for such secrets are the API key for the Admin UI or connection strings to the database.
