---
title: "enmeshed Backbone"
permalink: /explore/backbone
toc: true
---

# Backbone Building Blocks

The enmeshed Backbone embraces all central services required by the enmeshed platform to work. It consists of the underlying infrastructure, its hosted services, and the libraries used within the services. There could be many enmeshed Backbones hosted along the same number of enmeshed Apps. But keep in mind that so far it is not possible for users to communicate across different Backbones.

One enmeshed Backbone is currently hosted and maintained by j&amp;s-soft GmbH.

## Backbone Landscapes (Runtime)

Usually there are three Backbone Landscapes hosted in parallel: dev, stage and prod.

- Dev Landscape: Is used for Backbone development purposes only and shouldn't be used for enmeshed clients
- Stage Landscape: Is used for enmeshed tests on the current Backbone version or might be used for tests on a future Backbone version
- Prod Landscape: All productive environments should access the prod landscape only. Only the prod landscape has a productive configuration like scalability, replication or operations in place.

It is possible to bring up additional landscapes on a temporary basis. These could be used for security or performance tests.

A landscape can be trimmed by different scalability options, depending on the workload – and the actual usage of components.

## Backbone Infrastructure (Runtime)

All required infrastructure and infrastructure services, like a database, a load balancer or a file storage are combined within the infrastructure building block. The infrastructure itself is not enmeshed-specific, the composition of services and the overall configuration however is.

There are different possible cloud providers to host the backbone, the big hyperscalers or smaller ones. Even regional cloud providers would make sense for specific use-cases.

The current cloud provider for the centrally hosted enmeshed Backbone is Microsoft Azure and as thus, the landscape details (and terminology) are primarily focused on the Azure setup. Although there are Azure-specific components and configurations, most of the components used are cloud-provider agnostic, i.e. they will exist in other cloud providers in an equivalent form.

### Gateway

The gateway is the very first touchpoint of an external request to the landscape. Its major tasks are load balancing and proxying, breaking up https-traffic and block malicious requests.

Thus, the gateway is the first component which needs to be scaled depending on the workload. This is usually done by increasing the number of instances.

### Virtual Network

A virtual network is an internal network for custom routing and network separation rules. Some components, like the gateway, require virtual networks to be set up, as the components itself are routing traffic from one network (e.g. public Internet) to another network (internal network).

With a virtual network, network traffic is encapsulated for every landscape. Servers and services within the virtual network are not reachable from the outside world and are not allowed to talk to external systems. However, the virtual network is not an encrypted network within the cloud provider, as this is technically so far not possible.

### Key Vault

Private keys, credentials or other secrets must be securely stored. For this, multiple key vaults are used. Depending on the security level, secrets can even be stored on a hardware security module. In addition to the encryption of the secrets, the key vault manages the authorizations of (admin-)users or services to this secret.

### Service Bus

The service bus is an event bus between all the different services which can be leveraged for cross-service communication and message handling.

### Notification Hub

To manage push notifications to the various push notification providers – like Apple Push Notification Service, Firebase Cloud Messaging, or Windows Notification Service – the notification hub is a service which manages registered devices and a generic interface to send out messages, no matter which push notification service needs to be addressed.

### Database

A database is used for columnar data storage and access. It is used to store metadata of the different Backbone entities.

Nearly every request to a landscape results in a request to the database. Thus, the database also needs to be scaled depending on the number of requests and the complexity of database queries. The database can be scaled vertically (more power) and horizontally (more servers).

### BLOB Storage

Data of binary large objects (BLOBs) is not stored on the database, but on a kind of file system. Binary data is usually queried by ids and process in a whole (e.g. by providing a download for an encrypted file).

A BLOB storage is usually scaled horizontally (more storage). Access performance is not critical for the given use-cases.

### Kubernetes Cluster/Nodes

Each request is handled by a service, running on a Kubernetes node within a whole Kubernetes cluster. Nodes can be scaled vertically (more power) and horizontally (more nodes). Depending on the number or complexity of the requests, the nodes are automatically scaled.

## Backbone Services (Runtime)

(Micro-)Services of the Backbone are deployed on a Kubernetes cluster within the Backbone Infrastructure. These services implement the enmeshed business logic on top of the infrastructure services provided by the Backbone Infrastructure.

The following services are available on the runtime:

- Devices Service: Manages the device profiles for authenticating against the different services. Additionally keeps track of the identity behind devices and the registration of push notification tokens of the respective messaging providers (e.g. Apple Push Notification Service, Firebase Cloud Messaging)
- Messages Service: Provides an interface for submitting and receiving messages
- Relationships Service: Keeps track of relationships between identities, their status and possible change requests
- Files Service: Files or other "static" binaries can be stored via the files service and used as attachments for messages.
- Tokens Service: A repository for storing and consuming usually short-lived encrypted information, e.g. for QRCode contents.
- Synchronization Service: Cross device synchronization of local identity data

## Backbone Services and Libraries (Designtime)

The implementation of the enmeshed logic is done via the respective services, libraries are used for common source code. The open sourcing of the Backbone is still in progress.
